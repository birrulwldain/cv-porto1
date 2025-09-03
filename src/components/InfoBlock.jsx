import React from 'react';
import { Card, Typography, Row, Col, Avatar, List } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const InfoBlock = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: 'auto', marginBottom: '16px' }}>
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>
          Tentang Aplikasi dan Pengembang
        </Title>

        <div style={{ marginBottom: '24px' }}>
          <Title level={3}>
            Pengantar Aplikasi: Machine Learning-Powered Spectroscopic Data Interpreter
          </Title>
          <Paragraph style={{ marginBottom: '12px' }}>
            Aplikasi <Text strong>Machine Learning-Powered Spectroscopic Data Interpreter</Text> ini dirancang sebagai alat bantu analisis data dari <Text strong>spektroskopi plasma, khususnya Laser-Induced Breakdown Spectroscopy (LIBS)</Text>, secara efisien dan akurat. Dengan memanfaatkan teknik <em>machine learning</em> terkini, aplikasi ini mampu mengidentifikasi elemen-elemen kimia berdasarkan pola puncak spektral yang dihasilkan dari interaksi laser dengan material.
          </Paragraph>
          <Paragraph>
            Tujuan utama dari aplikasi ini adalah untuk menyediakan platform yang intuitif bagi para peneliti, insinyur, dan profesional di bidang terkait untuk melakukan analisis spektral plasma awal atau verifikasi cepat tanpa memerlukan perangkat lunak khusus yang kompleks.
          </Paragraph>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Title level={3}>
            Metodologi dan Fungsionalitas
          </Title>
          <Paragraph style={{ marginBottom: '12px' }}>
            Aplikasi ini memproses data spektrum dalam format .asc yang umum digunakan dalam akuisisi data LIBS. Setelah data diunggah, ia melalui tahap pra-pemrosesan yang meliputi opsi koreksi baseline (menggunakan algoritma ALS) dan normalisasi (AUC=1) untuk meningkatkan kualitas sinyal spektral. Selanjutnya, algoritma deteksi puncak diterapkan, dan fitur-fitur spektral ini kemudian diumpankan ke model <em>deep learning</em> berbasis <Text strong>Informer</Text> (berbasis PyTorch) yang telah dilatih secara ekstensif pada dataset spektral LIBS yang beragam.
          </Paragraph>
          <Paragraph>
            Hasil prediksi disajikan dalam bentuk visualisasi interaktif, menyoroti puncak-puncak emisi yang terdeteksi dan probabilitas keberadaan elemen-elemen terkait. Pengguna dapat menyesuaikan parameter seperti <em>prominence</em> puncak untuk mengoptimalkan deteksi sesuai dengan karakteristik spektrum plasma yang dianalisis.
          </Paragraph>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Title level={3}>
            Sumber Data dan Pengembangan
          </Title>
          <Paragraph style={{ marginBottom: '12px' }}>
            Model <em>machine learning</em> berbasis Informer yang digunakan dalam aplikasi ini dilatih menggunakan <Text strong>data spektrum simulasi</Text> yang dibangun berdasarkan data dari <Text strong>NIST Standard Reference Data 78 (SRD 78) Atomic Spectra Database LIBS</Text>. Dataset ini dikurasi dari berbagai sumber ilmiah dan publik. Detail lebih lanjut mengenai arsitektur model, proses pelatihan, dan sumber data spesifik dapat ditemukan di [Sebutkan lokasi dokumentasi atau publikasi jika ada].
          </Paragraph>
          <Paragraph>
            Aplikasi ini dikembangkan menggunakan teknologi modern seperti React.js untuk antarmuka pengguna interaktif dan FastAPI (Python) untuk <em>backend</em> yang menangani pemrosesan data dan inferensi model.
          </Paragraph>
        </div>

        <div>
          <Row gutter={[16, 16]} align="top">
            <Col xs={24} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <Avatar 
                src="/profile.jpg" 
                alt="Birrul Walidain Profile Picture"
                style={{
                  width: 200, 
                  height: 200, 
                  border: '4px solid #1890ff', // Ant Design primary color
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }}
              />
            </Col>
            <Col xs={24} md={16}>
              <Title level={3} style={{ marginBottom: '8px' }}>
                Tentang Pengembang
              </Title>
              <Paragraph style={{ marginBottom: '12px' }}>
                Saya Birrul Walidain, seorang mahasiswa di Departemen Fisika, Universitas Syiah Kuala. Keahlian saya mencakup Spektroskopi Fisika Teoritis serta pengembangan model <em>Deep Learning</em> untuk analisis data kompleks. Proyek ini merupakan bagian dari portofolio saya yang menunjukkan kemampuan dalam mengintegrasikan solusi <em>Deep Learning</em> dengan aplikasi web yang fungsional untuk bidang spektroskopi.
              </Paragraph>
              <Paragraph style={{ marginBottom: '8px' }}>
                Untuk pertanyaan lebih lanjut atau kolaborasi, jangan ragu untuk menghubungi saya:
              </Paragraph>
              <List 
                size="small"
                dataSource={[
                  { label: 'Email', value: 'birrul[at]mhs.usk.ac.id', href: 'mailto:birrul@mhs.usk.ac.id' },
                  { label: 'GitHub', value: 'github.com/birrulwldain', href: 'https://github.com/birrulwldain' },
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '0', borderBottom: 'none' }}>
                    <Text type="secondary">
                      {item.label}: <Link href={item.href} target="_blank" rel="noopener noreferrer">{item.value}</Link>
                    </Text>
                  </List.Item>
                )}
                style={{ padding: '0' }}
              />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default InfoBlock;
