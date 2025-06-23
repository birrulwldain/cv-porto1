// src/components/Predictor.jsx

import React, { useState } from 'react';
import Plot from 'react-plotly.js';

// Menggunakan gaya global yang diimpor dari App.jsx atau main.jsx
// Jadi tidak perlu impor .scss di sini

function Predictor() {
  // State untuk menyimpan file yang di-upload
  const [file, setFile] = useState(null);
  // State untuk menampilkan status (loading, error, success)
  const [status, setStatus] = useState('Silakan pilih file...');
  // State untuk data plot Plotly
  const [plotData, setPlotData] = useState([]);
  // State untuk layout plot Plotly
  const [plotLayout, setPlotLayout] = useState({
    title: 'Hasil Prediksi Akan Tampil di Sini',
    template: 'plotly_white'
  });

  // Fungsi untuk menangani perubahan input file
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setStatus(`File terpilih: ${event.target.files[0].name}`);
    }
  };

  // Fungsi untuk menangani klik tombol prediksi
  const handlePredict = async () => {
    if (!file) {
      setStatus('Error: Silakan pilih file terlebih dahulu!');
      return;
    }

    setStatus('Membaca file dan mengirim ke server...');
    const fileContent = await file.text();
    setStatus('Menunggu prediksi dari model...');

    try {
      // --- PERBAIKAN DI SINI ---
      // Ambil URL dasar dari environment variable
      const baseUrl = import.meta.env.VITE_WORKER_URL;
      
      // Pastikan URL dasar ada
      if (!baseUrl) {
        throw new Error("URL API (VITE_WORKER_URL) tidak ditemukan. Pastikan file .env sudah benar.");
      }

      // Gabungkan URL dasar dengan endpoint prediksi yang benar
      const predictUrl = `${baseUrl}/predict`;
      // --- AKHIR PERBAIKAN ---

      const response = await fetch(predictUrl, { // Gunakan URL yang sudah lengkap
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: fileContent
      });

      // Dapatkan respons. Jika error, baca sebagai teks. Jika sukses, baca sebagai JSON.
      const responseBody = await response.text();
      if (!response.ok) {
        // Coba parsing sebagai JSON jika mungkin, jika tidak tampilkan sebagai teks biasa
        let errorDetail = responseBody;
        try {
          const errorJson = JSON.parse(responseBody);
          errorDetail = errorJson.detail || JSON.stringify(errorJson);
        } catch (e) {
          // Biarkan errorDetail sebagai teks asli jika bukan JSON
        }
        throw new Error(`Server merespons dengan error: ${response.status} - ${errorDetail}`);
      }

      const results = JSON.parse(responseBody);

      // Siapkan data untuk komponen Plotly
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