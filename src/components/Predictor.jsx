import React, { useState, useCallback } from 'react';
import Plot from 'react-plotly.js';

// MUI Components
import { 
  Box, 
  Button, 
  Typography, 
  TextField, 
  Paper, 
  Grid, 
  CircularProgress, 
  Alert, 
  InputAdornment, 
  Avatar, 
  Backdrop 
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SettingsIcon from '@mui/icons-material/Settings';

// Custom Modal (now a thin wrapper around MUI Dialog)
import Modal from './Modal';

function Predictor() {
  // --- State --- //
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Silakan pilih atau seret file .asc ke sini.');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [plotData, setPlotData] = useState([]);
  const [plotLayout, setPlotLayout] = useState({
    title: 'Hasil Prediksi Akan Tampil di Sini',
    template: 'plotly_white',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#333' },
    xaxis: { title: 'Panjang Gelombang (nm)', gridcolor: '#e2e8f0' },
    yaxis: { title: 'Intensitas', gridcolor: '#e2e8f0' },
    hovermode: 'x unified',
    legend: { x: 1, xanchor: 'right', y: 1 }
  });
  const [rawFileContent, setRawFileContent] = useState('');
  
  // --- Input State (for the modal) --- //
  const [prominenceInput, setProminenceInput] = useState('');
  const [lam, setLam] = useState('');
  const [p, setP] = useState('');
  const [niter, setNiter] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Handlers --- //
  const parseAscContent = (content) => {
    const lines = content.split('\n');
    const data = lines.map(line => line.trim().split(/\s+/).map(parseFloat)).filter(parts => parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1]));
    return { wavelengths: data.map(d => d[0]), intensities: data.map(d => d[1]) };
  };

  const handleFileChange = useCallback(async (selectedFile) => {
    if (!selectedFile || !selectedFile.name.endsWith('.asc')) {
      setError('Error: Hanya file dengan format .asc yang diterima.');
      setFile(null);
      return;
    }
    setFile(selectedFile);
    setStatus(`File terpilih: ${selectedFile.name}`);
    setError(null);
    setIsLoading(true);
    try {
      const content = await selectedFile.text();
      setRawFileContent(content);
      const { wavelengths, intensities } = parseAscContent(content);
      if (wavelengths.length > 0) {
        setPlotData([{ x: wavelengths, y: intensities, mode: 'lines', name: 'Sinyal Mentah', line: { color: '#4a5568' } }]);
        setPlotLayout(prev => ({ ...prev, title: `Pratinjau Sinyal: ${selectedFile.name}` }));
        setStatus('File berhasil diunggah. Pratinjau sinyal ditampilkan.');
      } else {
        setError('File .asc tidak mengandung data yang valid.');
      }
    } catch (err) { setError(`Gagal membaca file: ${err.message}`); } 
    finally { setIsLoading(false); }
  }, []);

  const onDragOver = useCallback((e) => e.preventDefault(), []);
  const onDrop = useCallback((e) => { e.preventDefault(); e.dataTransfer.files && e.dataTransfer.files.length > 0 && handleFileChange(e.dataTransfer.files[0]); }, [handleFileChange]);

  const handlePredict = async () => {
    if (!rawFileContent) { setError('Silakan pilih file terlebih dahulu.'); return; }
    
    const applyBaselineCorrection = lam !== '' && p !== '' && niter !== '';

    setIsLoading(true);
    setStatus('Memproses file...');
    setError(null);
    try {
      const baseUrl = import.meta.env.VITE_API_URL;
      if (!baseUrl) throw new Error("URL API (VITE_API_URL) tidak ditemukan.");
      
      const requestBody = {
        asc_content: rawFileContent,
        prominence: prominenceInput === '' ? null : Number(prominenceInput),
        apply_baseline_correction: applyBaselineCorrection,
        ...(applyBaselineCorrection && { lam: parseFloat(lam), p: parseFloat(p), niter: parseInt(niter, 10) })
      };

      const response = await fetch(`${baseUrl}/predict_with_prominence`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const responseBody = await response.json();
      if (!response.ok) throw new Error(responseBody.detail || 'Server error');

      const newPlotData = [];
      const spectrumKey = applyBaselineCorrection ? 'spectrum_data' : 'original_spectrum';
      const spectrumName = applyBaselineCorrection ? 'Processed Spectrum' : 'Original Spectrum';
      newPlotData.push({ x: responseBody.wavelengths, y: responseBody[spectrumKey], mode: 'lines', name: spectrumName, line: { color: '#2d3748' } });
      if (responseBody.peak_wavelengths?.length > 0) {
        newPlotData.push({ x: responseBody.peak_wavelengths, y: responseBody.peak_intensities, mode: 'markers', name: 'Puncak Terdeteksi', marker: { color: '#38a169', size: 8 } });
      }
      setPlotData(newPlotData);
      setPlotLayout(prev => ({ ...prev, title: `Hasil Analisis untuk: ${file.name}`, annotations: responseBody.annotations }));
      setStatus('Analisis berhasil!');
    } catch (err) { setError(err.message); } 
    finally { setIsLoading(false); }
  };

  // --- Render --- //
  return (
    <>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Pengaturan Parameter Analisis"
        actions={(
          <Button variant="contained" onClick={() => setIsModalOpen(false)}>
            Simpan Pengaturan
          </Button>
        )}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Prominence"
            type="number"
            value={prominenceInput}
            onChange={(e) => setProminenceInput(e.target.value)}
            placeholder="Opsional, contoh: 0.05"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />

          {/* AUC Normalization is now handled in the backend */}

          <Paper elevation={0} sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>Koreksi Baseline (ALS)</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Isi semua 3 nilai untuk mengaktifkan koreksi baseline.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Lambda (lam)"
                  type="number"
                  value={lam}
                  onChange={(e) => setLam(e.target.value)}
                  placeholder="e.g., 100000"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Asymmetry (p)"
                  type="number"
                  value={p}
                  onChange={(e) => setP(e.target.value)}
                  placeholder="e.g., 0.01"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Iterations (niter)"
                  type="number"
                  value={niter}
                  onChange={(e) => setNiter(e.target.value)}
                  placeholder="e.g., 10"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Modal>

      <Box sx={{ p: 3, maxWidth: '1400px', mx: 'auto' }}>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Added fontWeight: 'bold' */}
                Deep Learning-Powered Spectroscopic Data Interpreter
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 2, height: '100%', display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1.5rem' }}>
              <Box 
                sx={{
                  gridArea: '1 / 1 / 3 / 2',
                  border: '2px dashed',
                  borderColor: 'grey.400',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  '&:hover': { backgroundColor: 'grey.50' }
                }}
                onDragOver={onDragOver}
                onDrop={onDrop}
              >
                <UploadFileIcon sx={{ fontSize: 40, color: 'grey.600', mb: 1 }} />
                <input 
                  type="file" 
                  onChange={(e) => handleFileChange(e.target.files[0])} 
                  accept=".asc" 
                  style={{ display: 'none' }}
                  id="file-upload"
                />
                <Button variant="outlined" component="label" htmlFor="file-upload">
                  {file ? 'Ganti File' : 'Pilih File'}
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{status}</Typography>
              </Box>

              <Button 
                variant="outlined" 
                startIcon={<SettingsIcon />} 
                onClick={() => setIsModalOpen(true)} 
                sx={{ gridArea: '1 / 2 / 2 / 3', height: '100%' }}
              >
                Pengaturan
              </Button>

              <Box sx={{ gridArea: '2 / 2 / 3 / 3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                {error && (
                  <Alert severity="error" sx={{ mb: 1 }}>{error}</Alert>
                )}
                <Button 
                  variant="contained" 
                  onClick={handlePredict} 
                  disabled={isLoading || !file} 
                  sx={{ height: '100%' }}
                >
                  {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Prediksi Elemen'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Removed application description */}

        <Paper elevation={1} sx={{ p: 2, minHeight: '400px', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {isLoading && (
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'absolute' }}
              open={isLoading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          {plotData.length === 0 && !isLoading ? (
            <Typography variant="h6" color="text.secondary">Grafik hasil prediksi akan muncul di sini.</Typography>
          ) : (
            <Plot
              data={plotData}
              layout={plotLayout}
              useResizeHandler={true}
              style={{ width: '100%', height: '100%' }}
              config={{ responsive: true }}
            />
          )}
        </Paper>
      </Box>
    </>
  );
}

export default Predictor;