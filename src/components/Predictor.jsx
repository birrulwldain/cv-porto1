import React, { useState, useCallback } from 'react';
import Plot from 'react-plotly.js';
import { motion, AnimatePresence } from 'framer-motion';

// Komponen Ikon untuk UI
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function Predictor() {
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
    font: {
      color: '#333'
    }
  });

  const [prominenceInput, setProminenceInput] = useState(''); // New state for prominence input
  const [rawFileContent, setRawFileContent] = useState(''); // New state to store raw file content
  const [activeMainTab, setActiveMainTab] = useState('input'); // State for main tabs

  // Helper function to parse .asc content
  const parseAscContent = (content) => {
    const wavelengths = [];
    const intensities = [];
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const parts = trimmedLine.split(/\s+/);
        if (parts.length >= 2) {
          const w = parseFloat(parts[0]);
          const i = parseFloat(parts[1]);
          if (!isNaN(w) && !isNaN(i)) {
            wavelengths.push(w);
            intensities.push(i);
          }
        }
      }
    }
    return { wavelengths, intensities };
  };

  const handleFileChange = useCallback(async (selectedFile) => {
    if (selectedFile && selectedFile.name.endsWith('.asc')) {
      setFile(selectedFile);
      setStatus(`File terpilih: ${selectedFile.name}`);
      setError(null);
      setIsLoading(true); // Start loading for preview

      try {
        const content = await selectedFile.text();
        setRawFileContent(content); // Store raw content

        const { wavelengths, intensities } = parseAscContent(content);

        if (wavelengths.length > 0 && intensities.length > 0) {
          setPlotData([
            {
              x: wavelengths, y: intensities, mode: 'lines',
              name: 'Sinyal Mentah', line: { color: '#4a5568' }
            }
          ]);
          setPlotLayout(prev => ({
            ...prev,
            title: `Pratinjau Sinyal: ${selectedFile.name}`,
            xaxis: { title: 'Panjang Gelombang (nm)', gridcolor: '#e2e8f0' },
            yaxis: { title: 'Intensitas', gridcolor: '#e2e8f0' },
            hovermode: 'x unified',
            legend: { x: 1, xanchor: 'right', y: 1 }
          }));
          setActiveMainTab('plot'); // Switch to plot tab for preview
          setStatus('File berhasil diunggah. Pratinjau sinyal ditampilkan.');
        } else {
          setError('File .asc tidak mengandung data yang valid.');
          setFile(null);
          setStatus('Silakan pilih atau seret file .asc ke sini.');
        }
      } catch (err) {
        setError(`Gagal membaca file: ${err.message}`);
        setFile(null);
        setStatus('Silakan pilih atau seret file .asc ke sini.');
      } finally {
        setIsLoading(false);
      }
    }
    else {
      setError('Error: Hanya file dengan format .asc yang diterima.');
      setFile(null);
      setStatus('Silakan pilih atau seret file .asc ke sini.');
    }
  }, [setFile, setStatus, setError, setIsLoading, setRawFileContent, setPlotData, setPlotLayout, setActiveMainTab]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  }, [handleFileChange]);

  const handlePredict = async () => {
    if (!file || !rawFileContent) {
      setError('Silakan pilih file terlebih dahulu atau file tidak dapat dibaca!');
      return;
    }
    setIsLoading(true);
    setStatus('Memproses file...');
    setError(null);

    try {
      const baseUrl = import.meta.env.VITE_WORKER_URL;
      if (!baseUrl) {
        throw new Error("URL API (VITE_WORKER_URL) tidak ditemukan.");
      }

      const prominenceValue = prominenceInput === '' ? null : Number(prominenceInput);

      const predictUrl = `${baseUrl}/predict_with_prominence`; // Changed endpoint

      const response = await fetch(predictUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Changed header
        body: JSON.stringify({ // Changed body
          asc_content: rawFileContent,
          prominence: prominenceValue
        })
      });

      const responseBody = await response.text();
      if (!response.ok) {
        let errorDetail = responseBody;
        try {
          const errorJson = JSON.parse(responseBody);
          errorDetail = errorJson.detail || JSON.stringify(errorJson);
        } catch {
          // Biarkan errorDetail sebagai teks biasa jika bukan JSON
        }
        throw new Error(`Server Error: ${response.status} - ${errorDetail}`);
      }

      const results = JSON.parse(responseBody);
      const spectrumTrace = {
        x: results.wavelengths, y: results.spectrum_data, mode: 'lines',
        name: 'Spektrum Input', line: { color: '#4a5568' }
      };
      const peakTrace = {
        x: results.peak_wavelengths, y: results.peak_intensities, mode: 'markers',
        name: 'Puncak Terdeteksi', marker: { color: '#e53e3e', size: 8, symbol: 'x' }
      };
      
      setPlotData([spectrumTrace, peakTrace]);
      setPlotLayout({
        title: `Hasil Prediksi untuk: ${file.name}`,
        xaxis: { title: 'Panjang Gelombang (nm)', gridcolor: '#e2e8f0' },
        yaxis: { title: 'Intensitas Normalisasi', gridcolor: '#e2e8f0' },
        annotations: results.annotations,
        template: 'plotly_white',
        hovermode: 'x unified',
        legend: { x: 1, xanchor: 'right', y: 1 }
      });
      setStatus('Prediksi berhasil!');
      setActiveMainTab('plot'); // Switch to plot tab on success
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="predictor">
      <div className="predictor__header">
        <h1 className="predictor__title">Spectral Element Predictor</h1>
        <p className="predictor__description">
          Unggah file spektrum (.asc) untuk dianalisis oleh model AI. Sistem akan mendeteksi puncak signifikan dan menampilkan elemen yang teridentifikasi.
        </p>
      </div>
      
      <div className="predictor__main-tabs">
        <button 
          className={`predictor__main-tab-button ${activeMainTab === 'input' ? 'active' : ''}`}
          onClick={() => setActiveMainTab('input')}
        >
          Input File
        </button>
        <button 
          className={`predictor__main-tab-button ${activeMainTab === 'plot' ? 'active' : ''}`}
          onClick={() => setActiveMainTab('plot')}
        >
          Hasil Plot
        </button>
      </div>

      {activeMainTab === 'input' && (
        <div className="predictor__card">
          <div 
            className="predictor__dropzone"
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <UploadIcon />
            <input 
              type="file" 
              onChange={(e) => handleFileChange(e.target.files[0])} 
              accept=".asc" 
              className="predictor__file-input"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="predictor__file-label">
              {file ? 'Ganti File' : 'Pilih File'}
            </label>
            <p>{status}</p>
          </div>

          {/* New prominence input field */}
          <div className="predictor__param-input-group">
            <label htmlFor="prominence-input">Prominence (opsional):</label>
            <input
              type="number"
              id="prominence-input"
              className="predictor__param-input"
              placeholder="Contoh: 0.05"
              value={prominenceInput}
              onChange={(e) => setProminenceInput(e.target.value)}
              step="any" // Allow decimal inputs
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                className="predictor__error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={handlePredict} 
            disabled={isLoading || !file}
            className="predictor__button"
          >
            {isLoading ? 'Menganalisis...' : 'Prediksi Elemen'}
          </button>
        </div>
      )}
      
      {activeMainTab === 'plot' && (
        <div className="predictor__chart-container">
          <AnimatePresence>
            {isLoading && <LoadingSpinner />}
          </AnimatePresence>
          {plotData.length === 0 && !isLoading ? (
            <div className="predictor__plot-placeholder">
              <p>Grafik hasil prediksi akan muncul di sini.</p>
            </div>
          ) : (
            <Plot
              data={plotData}
              layout={plotLayout}
              useResizeHandler={true}
              style={{ width: '100%', height: '100%' }}
              config={{ responsive: true }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Predictor;