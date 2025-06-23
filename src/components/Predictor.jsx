// src/components/Predictor.jsx

import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Predictor() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Silakan pilih file...');
  const [plotData, setPlotData] = useState([]);
  const [plotLayout, setPlotLayout] = useState({
    title: 'Hasil Prediksi Akan Tampil di Sini',
    template: 'plotly_white'
  });

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setStatus(`File terpilih: ${event.target.files[0].name}`);
    }
  };

  const handlePredict = async () => {
    if (!file) {
      setStatus('Error: Silakan pilih file terlebih dahulu!');
      return;
    }
    setStatus('Membaca file dan mengirim ke server...');
    const fileContent = await file.text();
    setStatus('Menunggu prediksi dari model...');

    try {
      const baseUrl = import.meta.env.VITE_WORKER_URL;
      if (!baseUrl) {
        throw new Error("URL API (VITE_WORKER_URL) tidak ditemukan. Pastikan file .env sudah benar.");
      }
      const predictUrl = `${baseUrl}/predict`;

      const response = await fetch(predictUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: fileContent
      });

      const responseBody = await response.text();
      if (!response.ok) {
        let errorDetail = responseBody;
        try {
          const errorJson = JSON.parse(responseBody);
          errorDetail = errorJson.detail || JSON.stringify(errorJson);
        } catch { // <-- PERBAIKAN: Hapus (_e) sepenuhnya
          // Sekarang blok ini benar-benar hanya menangkap error tanpa membuat variabel.
        }
        throw new Error(`Server merespons dengan error: ${response.status} - ${errorDetail}`);
      }

      const results = JSON.parse(responseBody);

      const spectrumTrace = {
        x: results.wavelengths, y: results.spectrum_data, mode: 'lines',
        name: 'Spektrum Input', line: { color: 'gray' }
      };
      const peakTrace = {
        x: results.peak_wavelengths, y: results.peak_intensities, mode: 'markers',
        name: 'Puncak Terdeteksi', marker: { color: 'red', size: 6, symbol: 'x' }
      };
      
      setPlotData([spectrumTrace, peakTrace]);
      setPlotLayout({
        title: `Prediksi untuk file: ${file.name}`,
        xaxis: { title: 'Panjang Gelombang (nm)' },
        yaxis: { title: 'Intensitas Normalisasi' },
        annotations: results.annotations,
        template: 'plotly_white',
        hovermode: 'x unified'
      });

      setStatus('Prediksi selesai!');
      
    } catch (error) {
      setStatus(`Terjadi kesalahan: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div className="predictor">
      <h1 className="predictor__title">Spectral Element Predictor</h1>
      <p className="predictor__description">
        Upload file spektrum Anda dalam format .asc untuk diprediksi oleh model AI. 
        Sistem akan mendeteksi puncak-puncak signifikan dan menampilkan kemungkinan elemen beserta tingkat keyakinannya.
      </p>
      
      <div className="predictor__controls">
        <input type="file" onChange={handleFileChange} accept=".asc" />
        <button onClick={handlePredict}>
          Prediksi
        </button>
      </div>

      <div className="predictor__status">
        {status}
      </div>
      
      <div className="predictor__chart-container">
        <Plot
          data={plotData}
          layout={plotLayout}
          useResizeHandler={true}
          style={{ width: '100%', height: '600px' }}
        />
      </div>
    </div>
  );
}

export default Predictor;