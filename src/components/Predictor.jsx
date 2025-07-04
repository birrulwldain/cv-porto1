

import React, { useState, useCallback } from 'react';
import Plot from 'react-plotly.js';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars

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

  const [prominenceInput, setProminenceInput] = useState('');
  const [rawFileContent, setRawFileContent] = useState('');
  const [applyAucNormalization, setApplyAucNormalization] = useState(false);
  const [applyBaselineCorrection, setApplyBaselineCorrection] = useState(false);
  const [lam, setLam] = useState(100000); // New state for lam
  const [p, setP] = useState(0.01);     // New state for p
  const [niter, setNiter] = useState(10);   // New state for niter

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
  }, [setFile, setStatus, setError, setIsLoading, setRawFileContent, setPlotData, setPlotLayout]);

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

    // Client-side validation for prominence
    if (prominenceInput !== '' && isNaN(Number(prominenceInput))) {
      setError('Prominence harus berupa angka yang valid.');
      return;
    }

    // Client-side validation for ALS parameters if baseline correction is applied
    if (applyBaselineCorrection) {
      if (isNaN(parseFloat(lam)) || parseFloat(lam) <= 0) {
        setError('Lambda (lam) harus berupa angka positif yang valid.');
        return;
      }
      if (isNaN(parseFloat(p)) || parseFloat(p) < 0 || parseFloat(p) > 1) {
        setError('Asymmetry (p) harus berupa angka antara 0 dan 1.');
        return;
      }
      if (isNaN(parseInt(niter, 10)) || parseInt(niter, 10) <= 0) {
        setError('Iterations (niter) harus berupa bilangan bulat positif yang valid.');
        return;
      }
    }

    setIsLoading(true);
    setStatus('Memproses file...');
    setError(null);

    try {
      const baseUrl = import.meta.env.VITE_API_URL; // Changed to VITE_API_URL
      if (!baseUrl) {
        throw new Error("URL API (VITE_API_URL) tidak ditemukan.");
      }

      const prominenceValue = prominenceInput === '' ? null : Number(prominenceInput);

      const predictUrl = `${baseUrl}/predict_with_prominence`;

      const requestBody = {
        asc_content: rawFileContent,
        prominence: prominenceValue,
        apply_baseline_correction: applyBaselineCorrection,
        apply_auc_normalization: applyAucNormalization,
      };

      if (applyBaselineCorrection) {
        requestBody.lam = parseFloat(lam);
        requestBody.p = parseFloat(p);
        requestBody.niter = parseInt(niter, 10);
      }

      const response = await fetch(predictUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
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
      const newPlotData = [];

      if (applyBaselineCorrection) {
        // If baseline correction is applied, only show the processed spectrum
        newPlotData.push({
          x: results.wavelengths, y: results.spectrum_data, mode: 'lines',
          name: 'Processed Spectrum', line: { color: '#2d3748' }
        });
      } else {
        // If no baseline correction, show original spectrum
        if (results.original_spectrum) {
          newPlotData.push({
            x: results.wavelengths, y: results.original_spectrum, mode: 'lines',
            name: 'Original Spectrum', line: { color: '#4a5568' }
          });
        }
      }

      // Peaks (always show peaks on the currently displayed spectrum)
      if (results.peak_wavelengths && results.peak_wavelengths.length > 0) {
        newPlotData.push({
          x: results.peak_wavelengths, y: results.peak_intensities, mode: 'markers',
          name: 'Puncak Terdeteksi', marker: { color: '#38a169', size: 8, symbol: 'circle' }
        });
      }
      
      setPlotData(newPlotData);
      setPlotLayout({
        title: `Hasil Analisis untuk: ${file.name}`,
        xaxis: { title: 'Panjang Gelombang (nm)', gridcolor: '#e2e8f0' },
        yaxis: { title: 'Intensitas', gridcolor: '#e2e8f0' },
        annotations: results.annotations,
        template: 'plotly_white',
        hovermode: 'x unified',
        legend: { x: 1, xanchor: 'right', y: 1 }
      });
      setStatus('Analisis berhasil!');
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="predictor">
      <div className="predictor__top-controls"> {/* NEW wrapper for header and input panel */}
        <div className="predictor__header">
          <h1 className="predictor__title">Deep Learning-Powered Spectroscopic Data Interpreter</h1>
          <p className="predictor__description">
            Unggah file spektrum (.asc) untuk dianalisis oleh model Deep Learning. Sistem akan mendeteksi puncak signifikan dan menampilkan elemen yang teridentifikasi.
          </p>
        </div>
        
        <div className="predictor__input-panel"> {/* Input controls */}
          <div className="predictor__input-controls"> 
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
              <p className="predictor__status">{status}</p>
            </div>

            <div className="predictor__param-input-group">
              <label htmlFor="prominence-input">Prominence (opsional):</label>
              <input
                type="number"
                id="prominence-input"
                className="predictor__param-input"
                placeholder="Contoh: 0.05"
                value={prominenceInput}
                onChange={(e) => setProminenceInput(e.target.value)}
                step="any"
              />
            </div>

            <div className="predictor__param-input-group predictor__checkbox-group">
              <input
                type="checkbox"
                id="baseline-correction"
                checked={applyBaselineCorrection}
                onChange={(e) => setApplyBaselineCorrection(e.target.checked)}
              />
              <label htmlFor="baseline-correction">Koreksi Baseline (ALS)</label>
            </div>

            {applyBaselineCorrection && (
              <div className="predictor__als-params">
                <div className="predictor__param-input-group">
                  <label htmlFor="lam">Lambda (lam):</label>
                  <input
                    type="number"
                    id="lam"
                    value={lam}
                    onChange={(e) => setLam(e.target.value)}
                    step="1000"
                  />
                </div>
                <div className="predictor__param-input-group">
                  <label htmlFor="p">Asymmetry (p):</label>
                  <input
                    type="number"
                    id="p"
                    value={p}
                    onChange={(e) => setP(e.target.value)}
                    step="0.001"
                  />
                </div>
                <div className="predictor__param-input-group">
                  <label htmlFor="niter">Iterations (niter):</label>
                  <input
                    type="number"
                    id="niter"
                    value={niter}
                    onChange={(e) => setNiter(e.target.value)}
                    step="1"
                  />
                </div>
              </div>
            )}

            <div className="predictor__param-input-group predictor__checkbox-group">
              <input
                type="checkbox"
                id="auc-normalization"
                checked={applyAucNormalization}
                onChange={(e) => setApplyAucNormalization(e.target.checked)}
              />
              <label htmlFor="auc-normalization">Normalisasi AUC=1</label>
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
          </div> {/* End of predictor__input-controls */}
        </div> {/* End of predictor__input-panel */}
      </div> {/* End of predictor__top-controls */}

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
    </div>
  );
}

export default Predictor;
