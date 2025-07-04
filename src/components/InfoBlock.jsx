// src/components/InfoBlock.jsx
import React from 'react';

const InfoBlock = () => {
  return (
    <section className="info-block">
      <div className="container">
        <h2>Tentang Aplikasi dan Pengembang</h2>

        <div className="info-block__section">
          <h3>Pengantar Aplikasi: Machine Learning-Powered Spectroscopic Data Interpreter</h3>
          <p>Aplikasi <strong>Machine Learning-Powered Spectroscopic Data Interpreter</strong> ini dirancang sebagai alat bantu analisis data dari <strong>spektroskopi plasma, khususnya Laser-Induced Breakdown Spectroscopy (LIBS)</strong>, secara efisien dan akurat. Dengan memanfaatkan teknik <em>machine learning</em> terkini, aplikasi ini mampu mengidentifikasi elemen-elemen kimia berdasarkan pola puncak spektral yang dihasilkan dari interaksi laser dengan material.</p>
          <p>Tujuan utama dari aplikasi ini adalah untuk menyediakan platform yang intuitif bagi para peneliti, insinyur, dan profesional di bidang terkait untuk melakukan analisis spektral plasma awal atau verifikasi cepat tanpa memerlukan perangkat lunak khusus yang kompleks.</p>
        </div>

        <div className="info-block__section">
          <h3>Metodologi dan Fungsionalitas</h3>
          <p>Aplikasi ini memproses data spektrum dalam format .asc yang umum digunakan dalam akuisisi data LIBS. Setelah data diunggah, ia melalui tahap pra-pemrosesan yang meliputi opsi koreksi baseline (menggunakan algoritma ALS) dan normalisasi (AUC=1) untuk meningkatkan kualitas sinyal spektral. Selanjutnya, algoritma deteksi puncak diterapkan, dan fitur-fitur spektral ini kemudian diumpankan ke model <em>deep learning</em> berbasis <strong>Informer</strong> (berbasis PyTorch) yang telah dilatih secara ekstensif pada dataset spektral LIBS yang beragam.</p>
          <p>Hasil prediksi disajikan dalam bentuk visualisasi interaktif, menyoroti puncak-puncak emisi yang terdeteksi dan probabilitas keberadaan elemen-elemen terkait. Pengguna dapat menyesuaikan parameter seperti <em>prominence</em> puncak untuk mengoptimalkan deteksi sesuai dengan karakteristik spektrum plasma yang dianalisis.</p>
        </div>

        <div className="info-block__section">
          <h3>Sumber Data dan Pengembangan</h3>
          <p>Model <em>machine learning</em> berbasis Informer yang digunakan dalam aplikasi ini dilatih menggunakan <strong>data spektrum simulasi</strong> yang dibangun berdasarkan data dari <strong>NIST Standard Reference Data 78 (SRD 78) Atomic Spectra Database LIBS</strong>. Dataset ini dikurasi dari berbagai sumber ilmiah dan publik. Detail lebih lanjut mengenai arsitektur model, proses pelatihan, dan sumber data spesifik dapat ditemukan di [Sebutkan lokasi dokumentasi atau publikasi jika ada].</p>
          <p>Aplikasi ini dikembangkan menggunakan teknologi modern seperti React.js untuk antarmuka pengguna interaktif dan FastAPI (Python) untuk <em>backend</em> yang menangani pemrosesan data dan inferensi model.</p>
        </div>

        <div className="info-block__section">
          <h3>Tentang Pengembang</h3>
          <div className="developer-profile">
            <img src="/profile.jpg" alt="Foto Profil" className="profile-picture" />
            <p>Saya Birrul Walidain, seorang mahasiswa di Departemen Fisika, Universitas Syiah Kuala. Keahlian saya mencakup Spektroskopi Fisika Teoritis serta pengembangan model <em>Deep Learning</em> untuk analisis data kompleks. Proyek ini merupakan bagian dari portofolio saya yang menunjukkan kemampuan dalam mengintegrasikan solusi <em>Deep Learning</em> dengan aplikasi web yang fungsional untuk bidang spektroskopi.</p>
          </div>
          <p>Untuk pertanyaan lebih lanjut atau kolaborasi, jangan ragu untuk menghubungi saya:</p>
          <ul>
            <li>Email: <a href="mailto:birrul@mhs.usk.ac.id">birrul[at]mhs.usk.ac.id</a></li>
            <li>GitHub: <a href="https://github.com/birrulwldain" target="_blank" rel="noopener noreferrer">github.com/birrulwldain</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
