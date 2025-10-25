/**
 * @file features/digital-garden/constants/notes.js
 * @description Sample notes data untuk Digital Garden
 */

/**
 * Collection of sample notes for Digital Garden
 * @type {Object<string, {title: string, content: string, links: string[]}>}
 */
export const SAMPLE_NOTES = {
  'intro': {
    title: 'Pengenalan',
    content: `Selamat datang di Digital Garden saya. Di sini saya menulis tentang fisika, pembelajaran mesin, dan spektroskopi.

Catatan-catatan saya saling terhubung, membentuk jaringan pengetahuan. Klik tautan untuk mengeksplorasi lebih lanjut.`,
    links: ['spektroskopi', 'machine-learning']
  },
  'spektroskopi': {
    title: 'Spektroskopi',
    content: `Spektroskopi adalah studi tentang interaksi cahaya dengan materi. Dalam penelitian saya, saya fokus pada Laser-Induced Breakdown Spectroscopy (LIBS).

LIBS memungkinkan identifikasi elemental real-time dengan presisi tinggi. Teknik ini menggabungkan optik, plasma physics, dan signal processing.`,
    links: ['libs', 'plasma-physics', 'machine-learning']
  },
  'libs': {
    title: 'LIBS (Laser-Induced Breakdown Spectroscopy)',
    content: `LIBS adalah teknik spektroskopi analitik yang menggunakan laser berdaya tinggi untuk membuat plasma di permukaan sampel.

Plasma yang terbentuk memancarkan cahaya karakteristik yang dapat dianalisis untuk menentukan komposisi elemental.

Keuntungan LIBS:
• Analisis real-time
• Tidak destruktif untuk sebagian besar aplikasi
• Dapat menganalisis padat, cair, atau gas`,
    links: ['spektroskopi', 'deep-learning']
  },
  'machine-learning': {
    title: 'Machine Learning & Physics',
    content: `Machine Learning memiliki aplikasi yang luas dalam fisika eksperimental.

Dalam konteks LIBS, saya menggunakan deep learning models untuk:
• Mengidentifikasi elemen dari spektrum
• Memprediksi konsentrasi elemental
• Mendeteksi anomali dalam data

Tools yang saya gunakan: PyTorch, TensorFlow, scikit-learn`,
    links: ['deep-learning', 'libs']
  },
  'deep-learning': {
    title: 'Deep Learning',
    content: `Deep Learning adalah subset dari Machine Learning yang menggunakan neural networks berlapis.

Arsitektur yang saya gunakan:
• CNN untuk analisis spektral 2D
• LSTM untuk urutan waktu
• Transformer untuk relasi kompleks

Framework favorit saya: PyTorch`,
    links: ['machine-learning', 'neural-networks']
  },
  'neural-networks': {
    title: 'Neural Networks',
    content: `Neural networks terinspirasi oleh struktur otak biologis. Mereka terdiri dari lapisan neuron yang saling terhubung.

Prinsip dasar:
• Forward pass: data input diproses melalui jaringan
• Backpropagation: kesalahan digunakan untuk menyesuaikan bobot
• Activation functions: memberikan non-linearitas`,
    links: ['deep-learning']
  },
  'plasma-physics': {
    title: 'Plasma Physics',
    content: `Plasma adalah keadaan materi keempat, terdiri dari ion dan elektron bebas.

Dalam LIBS, plasma:
• Dihasilkan oleh laser pulse
• Memancarkan cahaya karakteristik
• Evolusinya dapat dianalisis untuk menentukan komposisi`,
    links: ['spektroskopi', 'libs']
  }
};

/**
 * Section contents untuk Digital Garden
 * @type {Object<string, string>}
 */
export const SECTION_CONTENTS = {
  0: `# PENGENALAN\n\n## Apa itu Digital Garden?\n\nSelamat datang di Digital Garden saya. Di sini saya menulis tentang fisika, pembelajaran mesin, dan spektroskopi.\n\nCatatan-catatan saya saling terhubung, membentuk jaringan pengetahuan yang terus berkembang. Saya menggunakan sistem tautan untuk menghubungkan konsep-konsep yang saling berhubungan.\n\n## Filosofi Digital Garden\n\n### Karakteristik Utama\n• Bukan sebuah blog dengan posting final\n• Tempat belajar dan mengeksperimen secara publik\n• Konten terus diperbarui dan diperdalam\n• Fokus pada hubungan antar ide, bukan urutan kronologis`,
  1: `# SPEKTROSKOPI\n\n## Pengenalan Spektroskopi\n\nSpektroskopi adalah cabang ilmu fisika yang mempelajari interaksi antara radiasi elektromagnetik dan materi.\n\n## Sejarah Perkembangan\n\n### Periode Awal (1600-1800)\nSpektroskopi telah berkembang selama lebih dari dua abad, dimulai dari penelitian Newton tentang prisma cahaya pada tahun 1666.`,
  2: `# MACHINE LEARNING & PHYSICS\n\n## Introduksi: Dua Paradigma yang Bersatu\n\nMachine Learning (ML) telah merevolusi cara kita melakukan penelitian fisika.\n\n## Mengapa Machine Learning untuk Physics?\n\n### Tantangan Masa Kini\nDalam eksperimen fisika modern, kita menghasilkan volume data yang sangat besar.`,
  3: `# DEEP LEARNING\n\n## Definisi dan Evolusi\n\nDeep Learning adalah subset dari Machine Learning yang menggunakan artificial neural networks dengan multiple layers.\n\n## Sejarah Perkembangan\n\n### Masa Awal (1950-1960)\nPerjalanan deep learning dimulai dari penelitian awal tentang perceptrons.`,
  4: `# PLASMA PHYSICS\n\n## Definisi Plasma\n\nPlasma adalah keadaan materi keempat yang terdiri dari ion bermuatan positif, elektron, dan atom netral.\n\n## Karakteristik Fundamental\n\n### Sifat-Sifat Utama Plasma\n• Kemampuan menghantarkan listrik dengan sangat baik\n• Responsif terhadap medan elektromagnetik eksternal`
};

/**
 * Initial open notes state
 * @type {Object<string, Array<string>>}
 */
export const INITIAL_OPEN_NOTES = {
  0: ['intro'],
  1: ['spektroskopi'],
  2: ['machine-learning'],
  3: ['deep-learning'],
  4: ['plasma-physics']
};
