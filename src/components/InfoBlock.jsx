import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, Link, List, ListItem, ListItemText } from '@mui/material';

const InfoBlock = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '1400px', mx: 'auto', my: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: '12px' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Tentang Aplikasi dan Pengembang
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Pengantar Aplikasi: Machine Learning-Powered Spectroscopic Data Interpreter
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
            Aplikasi <strong>Machine Learning-Powered Spectroscopic Data Interpreter</strong> ini dirancang sebagai alat bantu analisis data dari <strong>spektroskopi plasma, khususnya Laser-Induced Breakdown Spectroscopy (LIBS)</strong>, secara efisien dan akurat. Dengan memanfaatkan teknik <em>machine learning</em> terkini, aplikasi ini mampu mengidentifikasi elemen-elemen kimia berdasarkan pola puncak spektral yang dihasilkan dari interaksi laser dengan material.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tujuan utama dari aplikasi ini adalah untuk menyediakan platform yang intuitif bagi para peneliti, insinyur, dan profesional di bidang terkait untuk melakukan analisis spektral plasma awal atau verifikasi cepat tanpa memerlukan perangkat lunak khusus yang kompleks.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Metodologi dan Fungsionalitas
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
            Aplikasi ini memproses data spektrum dalam format .asc yang umum digunakan dalam akuisisi data LIBS. Setelah data diunggah, ia melalui tahap pra-pemrosesan yang meliputi opsi koreksi baseline (menggunakan algoritma ALS) dan normalisasi (AUC=1) untuk meningkatkan kualitas sinyal spektral. Selanjutnya, algoritma deteksi puncak diterapkan, dan fitur-fitur spektral ini kemudian diumpankan ke model <em>deep learning</em> berbasis <strong>Informer</strong> (berbasis PyTorch) yang telah dilatih secara ekstensif pada dataset spektral LIBS yang beragam.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Hasil prediksi disajikan dalam bentuk visualisasi interaktif, menyoroti puncak-puncak emisi yang terdeteksi dan probabilitas keberadaan elemen-elemen terkait. Pengguna dapat menyesuaikan parameter seperti <em>prominence</em> puncak untuk mengoptimalkan deteksi sesuai dengan karakteristik spektrum plasma yang dianalisis.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Sumber Data dan Pengembangan
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
            Model <em>machine learning</em> berbasis Informer yang digunakan dalam aplikasi ini dilatih menggunakan <strong>data spektrum simulasi</strong> yang dibangun berdasarkan data dari <strong>NIST Standard Reference Data 78 (SRD 78) Atomic Spectra Database LIBS</strong>. Dataset ini dikurasi dari berbagai sumber ilmiah dan publik. Detail lebih lanjut mengenai arsitektur model, proses pelatihan, dan sumber data spesifik dapat ditemukan di [Sebutkan lokasi dokumentasi atau publikasi jika ada].
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Aplikasi ini dikembangkan menggunakan teknologi modern seperti React.js untuk antarmuka pengguna interaktif dan FastAPI (Python) untuk <em>backend</em> yang menangani pemrosesan data dan inferensi model.
          </Typography>
        </Box>

        <Box>
          <Grid container spacing={4} alignItems="flex-start"> {/* Changed to flex-start */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}> {/* Align avatar to top */}
              <Avatar 
                alt="Birrul Walidain Profile Picture"
                src="/profile.jpg"
                sx={{
                  width: 200, 
                  height: 200, 
                  border: '4px solid', 
                  borderColor: 'primary.main',
                  boxShadow: 3 
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}> {/* Adjusted margin-bottom */}
                Tentang Pengembang
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
                Saya Birrul Walidain, seorang mahasiswa di Departemen Fisika, Universitas Syiah Kuala. Keahlian saya mencakup Spektroskopi Fisika Teoritis serta pengembangan model <em>Deep Learning</em> untuk analisis data kompleks. Proyek ini merupakan bagian dari portofolio saya yang menunjukkan kemampuan dalam mengintegrasikan solusi <em>Deep Learning</em> dengan aplikasi web yang fungsional untuk bidang spektroskopi.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Untuk pertanyaan lebih lanjut atau kolaborasi, jangan ragu untuk menghubungi saya:
              </Typography>
              <List dense sx={{ p: 0 }}>
                <ListItem sx={{ p: 0, pb: 0.5 }}>
                  <ListItemText 
                    primary={
                      <Typography variant="body2" color="text.secondary">
                        Email: <Link href="mailto:birrul@mhs.usk.ac.id" color="primary" target="_blank" rel="noopener noreferrer">birrul[at]mhs.usk.ac.id</Link>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <ListItemText 
                    primary={
                      <Typography variant="body2" color="text.secondary">
                        GitHub: <Link href="https://github.com/birrulwldain" color="primary" target="_blank" rel="noopener noreferrer">github.com/birrulwldain</Link>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default InfoBlock;