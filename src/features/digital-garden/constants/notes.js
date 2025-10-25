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
  0: `# BIRRUL WALIDAIN
## Physicist • Machine Learning Researcher • Spectroscopy Specialist

---

## Tentang Saya

Saya adalah seorang mahasiswa Fisika di **Universitas Syiah Kuala** dengan passion dalam menggabungkan fisika teoritis dengan metode komputasi modern. Fokus penelitian saya adalah pada aplikasi deep learning untuk analisis spektroskopik, khususnya dalam **Laser-Induced Breakdown Spectroscopy (LIBS)**.

### Latar Belakang Akademik

Dengan latar belakang kuat dalam fisika klasik, fisika kuantum, dan termodinamika, saya telah mengembangkan keahlian dalam:

• **Theoretical Physics**: Plasma physics, electromagnetic theory, quantum mechanics
• **Computational Physics**: Numerical simulations, differential equations, computational methods
• **Machine Learning**: Deep learning architectures, neural networks, PyTorch/TensorFlow
• **Data Analysis**: Signal processing, statistical analysis, scientific computing
• **Spectroscopy**: LIBS technology, spectral analysis, elemental identification

### Proyek Penelitian Utama

#### 1. **Deep Learning for LIBS Spectroscopy** (Skripsi/Thesis)
Mengembangkan model deep learning untuk interpretasi otomatis data spektroskopik LIBS.

**Teknologi & Tools**:
• PyTorch untuk neural network development
• CNN dan LSTM architectures untuk spectral analysis
• Data preprocessing dengan NumPy dan Pandas
• Model deployment dan optimization

**Hasil**:
• Accuracy >95% dalam elemental identification
• Real-time analysis capability
• Publikasi di konferensi ilmiah

#### 2. **Spectroscopy Dashboard** (Production Application)
Aplikasi web interaktif untuk analisis data spektroskopik real-time dengan ML predictions.

**Technology Stack**:
• Frontend: React.js, modern UI/UX design
• Backend: Python FastAPI
• ML Model: Custom-trained deep learning model
• Database: PostgreSQL, data storage and retrieval

**Fitur**:
• Real-time spectral visualization
• Automated elemental identification
• Confidence scoring dan validation
• Historical data tracking dan trend analysis
• Export ke berbagai format (CSV, PDF, JSON)

#### 3. **Physics Simulation Framework**
Computational framework untuk simulasi fenomena fisika kompleks.

**Capabilities**:
• Plasma dynamics simulation
• Wave propagation modeling
• Electromagnetic field computation
• Particle system simulation
• Performance-optimized algorithms

### Keahlian Teknis

**Programming Languages**:
• Python (Primary - Data Science, ML, Scientific Computing)
• JavaScript/React (Frontend Development)
• C++ (Performance-critical applications)
• SQL (Database management)
• MATLAB (Numerical computing)

**Machine Learning & Data Science**:
• Deep Learning Frameworks: PyTorch, TensorFlow, Keras
• ML Libraries: Scikit-learn, XGBoost, LightGBM
• Data Processing: NumPy, Pandas, Polars
• Visualization: Matplotlib, Seaborn, Plotly
• Model Deployment: FastAPI, Docker, AWS

**Scientific Computing**:
• SciPy untuk scientific algorithms
• Jupyter Notebooks untuk research workflows
• Git untuk version control
• Linux/Unix system administration

**Other Skills**:
• LaTeX untuk technical writing
• Jupyter untuk interactive computation
• Docker untuk containerization
• API design dan RESTful principles

### Publikasi & Presentasi

**Konferensi Internasional**:
• "Application of Deep Learning in LIBS Analysis" - [Conference Name], 2024
• "Physics-Informed Machine Learning" - [Conference Name], 2024

**Workshop & Seminar**:
• Pelatihan Deep Learning untuk Physics researchers
• Workshop Machine Learning in Scientific Computing
• Seminar: "The Future of Computational Physics"

### Pengalaman Profesional

**Research Assistant** - Universitas Syiah Kuala
• Mengembangkan ML models untuk analisis spektroskopik
• Publikasi research findings
• Mentoring mahasiswa junior
• Collaborative research dengan institusi lain

**Developer** - Personal Projects
• Spectroscopy Dashboard (Production)
• Physics Simulation Framework (Active Development)
• Educational Content Platform
• Data Analysis Tools

### Sertifikasi & Pelatihan

• Deep Learning Specialization (Coursera - Andrew Ng)
• Machine Learning Engineer Nanodegree (Udacity)
• PyTorch Developer Certification
• Advanced Physics & Computational Science courses

### Filosofi Penelitian

Saya percaya bahwa **penggabungan antara fisika fundamental dan machine learning modern** adalah masa depan penelitian sains. Pendekatan saya adalah:

1. **Physics-First**: Pahami prinsip fisika terlebih dahulu
2. **Data-Driven**: Leverage data untuk menemukan pattern kompleks
3. **Practical Application**: Fokus pada hasil yang dapat digunakan
4. **Open Science**: Share knowledge dan contribute ke community

### Visi dan Misi

**Visi**: Membuat akses ke advanced spectroscopic analysis menjadi mudah dan terjangkau untuk semua researcher.

**Misi**: 
• Mengembangkan tools dan teknologi yang memberdayakan peneliti
• Mempublikasikan research dan findings secara terbuka
• Mentransfer knowledge kepada generasi peneliti berikutnya
• Berkontribusi pada kemajuan sains dan teknologi

### Hobi & Minat

Selain penelitian formal, saya juga tertarik dengan:
• Writing dan documentation (Blog teknis & scientific writing)
• Open source contribution
• Mentoring dan teaching
• Physics visualization dan education
• Science communication

### Hubungi Saya

**Email**: birrul@example.com
**GitHub**: github.com/birrulwldain
**LinkedIn**: linkedin.com/in/birrulwalidain
**ResearchGate**: researchgate.net/profile/Birrul_Walidain
**Website**: birrulwalidain.com

---

## Terima Kasih

Terima kasih telah mengunjungi Digital Garden saya. Jika Anda tertarik untuk berkolaborasi, berdiskusi tentang research, atau hanya ingin berbincang tentang fisika dan machine learning, jangan ragu untuk menghubungi saya!

Selamat menjelajahi garden ini. 🌱`,
  1: `# SPEKTROSKOPI

## Apa itu Spektroskopi?

Spektroskopi adalah cabang ilmu fisika dan kimia yang mempelajari interaksi antara radiasi elektromagnetik dan materi. Melalui spektroskopi, kita dapat mengetahui komposisi, struktur, dan sifat-sifat materi dari cahaya yang dipancarkan, diserap, atau dihamurkan oleh materi tersebut.

## Sejarah dan Perkembangan Spektroskopi

### Era Awal: Newton dan Dispersi Cahaya (1666)
Isaac Newton adalah salah satu pelopor spektroskopi. Ketika cahaya putih melalui prisma, ia mengamati bahwa cahaya terurai menjadi spektrum warna berbeda. Penemuan ini menunjukkan bahwa cahaya putih sebenarnya terdiri dari berbagai warna dengan panjang gelombang berbeda.

### Era Modern: Analisis Spektral (1800-1900)
Joseph von Fraunhofer mengamati garis-garis gelap di spektrum matahari (garis Fraunhofer), membuka jalan untuk analisis spektral. Kemudian, Gustav Kirchhoff dan Robert Bunsen mengembangkan spektroskopi emisi, di mana mereka memanaskan elemen untuk melihat cahaya yang dipancarkan.

### Era Kontemporer: Spektroskopi Digital (1950-sekarang)
Perkembangan teknologi komputer dan detektor memungkinkan spektroskopi berkembang pesat. Sekarang kita memiliki berbagai teknik spektroskopi untuk berbagai aplikasi.

## Prinsip Dasar Spektroskopi

Ketika materi berinteraksi dengan radiasi elektromagnetik, dapat terjadi beberapa hal:

• **Absorpsi**: Materi menyerap foton dan elektron naik ke level energi lebih tinggi
• **Emisi**: Elektron turun ke level energi lebih rendah dan memancarkan foton
• **Hamburan**: Foton dibelokkan oleh partikel tanpa mengubah energinya (Rayleigh)
• **Hamburan Raman**: Foton bertukar energi dengan vibrasi molekuler

## Aplikasi Spektroskopi

Spektroskopi memiliki aplikasi luas di berbagai bidang:

• **Astronomi**: Menentukan komposisi bintang dan galaksi
• **Kimia Analitik**: Identifikasi dan kuantifikasi elemen dan senyawa
• **Biologi Medis**: Diagnosis penyakit melalui analisis darah dan jaringan
• **Ilmu Material**: Karakterisasi sifat fisik dan kimia material
• **Forensik**: Analisis jejak bukti
• **Lingkungan**: Monitoring polusi dan kualitas air

## Spektroskopi dalam Penelitian Saya

Fokus penelitian saya adalah pada Laser-Induced Breakdown Spectroscopy (LIBS), sebuah teknik spektroskopi yang menggunakan laser untuk membuat plasma dan menganalisis komposisi sampel. LIBS memiliki keunggulan unik dalam memberikan analisis cepat dan non-invasif.`,
  2: `# MACHINE LEARNING & PHYSICS

## Penyatuan Dua Paradigma

Machine Learning (ML) telah merevolusi cara kita melakukan penelitian fisika. Di mana fisika tradisional mengandalkan hukum-hukum fundamental dan persamaan diferensial, ML membuka pendekatan baru: belajar dari data.

## Mengapa Machine Learning Penting untuk Physics?

### Tantangan Modern dalam Penelitian Fisika

Di era modern, eksperimen fisika menghasilkan volume data yang sangat besar - seringkali dalam jutaan atau miliaran data points. Analisis manual menjadi tidak praktis, dan pola-pola kompleks mungkin terlewatkan.

Contoh konkret:
• Detektor CERN menghasilkan petabyte data setiap hari
• Pengamatan astronomis dari teleskop modern menciptakan data masif
• Simulasi komputasi fisika menghasilkan keluaran dalam skala besar

### Keuntungan Machine Learning untuk Physics

Machine learning menawarkan beberapa keuntungan signifikan:

• **Pattern Recognition**: ML sangat bagus dalam menemukan pola dalam data kompleks
• **Prediksi**: Model ML dapat memprediksi hasil eksperimen dengan akurasi tinggi
• **Optimisasi**: ML dapat menemukan parameter optimal untuk eksperimen
• **Klasifikasi**: Mengategorikan fenomena fisika ke dalam kelas-kelas yang bermakna
• **Dimensionality Reduction**: Mengekstrak fitur penting dari data high-dimensional

## Aplikasi ML dalam Fisika Eksperimental

### Spectroscopy Analysis
Dalam spektroskopi, ML dapat:
• Mengidentifikasi elemen dari pola spektral
• Memprediksi konsentrasi dari intensitas spektral
• Mendeteksi anomali dalam spektra
• Membersihkan noise dari data spektral

### Particle Physics
Di fisika partikel, ML digunakan untuk:
• Rekonstruksi lintasan partikel
• Identifikasi jenis partikel
• Filtering sinyal dari background noise
• Analisis deteksi peristiwa eksperimental

### Climate Modeling
Dalam pemodelan iklim:
• Memprediksi pola cuaca dan iklim
• Menganalisis data satelit
• Mengoptimalkan model fisika berbasis data

## Framework dan Tools yang Saya Gunakan

• **PyTorch**: Framework deep learning fleksibel untuk penelitian
• **TensorFlow**: Platform ML komprehensif dengan berbagai tools
• **Scikit-learn**: Library ML klasik untuk preprocessing dan model sederhana
• **NumPy/SciPy**: Komputasi numerik dan analisis ilmiah
• **Pandas**: Manipulasi dan analisis data

## Filosofi: Physics-Informed Machine Learning

Pendekatan terbaik menggabungkan kekuatan keduanya:
• Gunakan hukum fisika sebagai konstraint dalam model ML
• Integrasikan pengetahuan domain fisika dalam arsitektur neural network
• Validasi prediksi ML terhadap prinsip-prinsip fisika fundamental`,
  3: `# DEEP LEARNING

## Apa itu Deep Learning?

Deep Learning adalah subset dari Machine Learning yang menggunakan artificial neural networks dengan banyak lapisan (depth). "Deep" merujuk pada jumlah lapisan tersembunyi dalam jaringan. Deep learning telah mencapai hasil luar biasa dalam berbagai aplikasi dari computer vision hingga natural language processing.

## Sejarah Deep Learning

### Awal Mula: Perceptron (1957)
Frank Rosenblatt menciptakan perceptron, model sederhana yang bisa belajar pola linear. Walaupun sederhana, ini adalah fondasi neural networks modern.

### Era Gelap: AI Winter (1970-1980)
Keterbatasan teknologi dan daya komputasi menyebabkan penelitian neural networks melambat. Perceptron terbukti tidak bisa menyelesaikan masalah XOR, yang mengecewakan komunitas.

### Renaissance: Backpropagation (1986)
Rumelhart, Hinton, dan Williams merevolusi field dengan menemukan ulang backpropagation - algoritma efisien untuk melatih multi-layer networks. Ini membuka jalan untuk deep learning modern.

### Deep Learning Boom (2012-sekarang)
Dengan GPU powerful dan dataset besar, deep learning mencapai breakthrough:
• AlexNet menang ImageNet 2012 dengan margin besar
• Deep learning menjadi state-of-the-art di banyak tasks
• Transformers dan attention mechanisms lahir
• Era modern AI dan large language models

## Arsitektur Deep Learning yang Umum

### Convolutional Neural Networks (CNNs)
CNN dirancang untuk data yang memiliki struktur grid (seperti gambar). Mereka menggunakan:
• Convolutional layers untuk extract features
• Pooling layers untuk dimensionality reduction
• Fully connected layers untuk classification

CNNs sangat efektif untuk:
• Computer vision tasks
• Analisis spektral 2D (seperti dalam LIBS imaging)
• Pattern recognition dalam data spasial

### Recurrent Neural Networks (RNNs)
RNNs dirancang untuk data sekuensial. Mereka mempertahankan "hidden state" yang terupdate seiring waktu, memungkinkan mereka untuk:
• Memproses urutan input variabel panjang
• Mempertahankan memori jangka panjang (dengan LSTM/GRU)
• Melakukan tasks seperti time series forecasting

### Transformers dan Attention Mechanism
Transformers menggunakan attention mechanism untuk:
• Mengukur relevansi antara elemen berbeda dalam urutan
• Memproses data secara paralel (lebih efisien dari RNNs)
• Mencapai state-of-the-art di NLP dan beyond

## Prinsip Pembelajaran dalam Deep Learning

### Forward Pass
Input melewati jaringan layer per layer:
1. Setiap neuron melakukan transformasi linear: z = Wx + b
2. Activation function menambahkan non-linearitas: a = σ(z)
3. Output dari layer menjadi input layer berikutnya
4. Final layer menghasilkan prediksi

### Backpropagation
Setelah prediksi, kita hitung error dan propagate kembali:
1. Hitung loss (perbedaan antara prediksi dan target)
2. Hitung gradient loss terhadap semua weights dan biases
3. Update parameters dalam arah yang mengurangi loss
4. Repeat dengan batch data baru

### Optimization
Untuk melatih deep networks dengan efisien:
• **Gradient Descent**: Update weights ke arah negatif gradient
• **SGD dengan Momentum**: Mempercepat convergence
• **Adam**: Adaptive learning rate per parameter
• **Learning Rate Scheduling**: Mengurangi learning rate seiring waktu

## Tantangan dalam Deep Learning

• **Overfitting**: Model memorize training data, tidak generalize dengan baik
• **Vanishing Gradients**: Gradient menjadi sangat kecil di layers dalam
• **Computational Cost**: Melatih large networks membutuhkan resource besar
• **Data Requirements**: Deep networks butuh dataset besar untuk training
• **Interpretability**: Sulit memahami apa yang dipelajari model ("black box")

## Teknik Regularisasi

Untuk mengatasi overfitting dan masalah lainnya:
• **Dropout**: Randomly disable neuron selama training
• **Batch Normalization**: Normalize input ke setiap layer
• **L1/L2 Regularization**: Penalty untuk weights besar
• **Data Augmentation**: Membuat variasi training data
• **Early Stopping**: Hentikan training ketika validation error meningkat`,
  4: `# PLASMA PHYSICS

## Keadaan Materi Keempat

Plasma adalah keadaan materi keempat - yang pertama kali dikenalkan oleh Irving Langmuir pada 1923. Sementara keadaan padat, cair, dan gas terdiri dari atom netral dan molekul, plasma terdiri dari ion bermuatan, elektron bebas, dan atom netral.

Plasma ada di mana-mana di alam semesta:
• 99.9% dari materi terlihat di alam semesta adalah plasma
• Matahari dan bintang-bintang lainnya adalah plasma
• Ionosphere bumi adalah plasma
• Kilat adalah plasma dalam keadaan transien

## Karakteristik Fundamental Plasma

### Sifat Elektrik
Plasma memiliki sifat elektrik yang unik:
• **Konduktivitas tinggi**: Plasma menghantarkan listrik dengan sangat baik
• **Responsif terhadap medan elektromagnetik**: Partikel bermuatan bergerak dalam respon terhadap E dan B fields
• **Quasi-neutrality**: Secara keseluruhan, plasma netral (jumlah positif = negatif)

### Sifat Kolektif
Plasma tidak hanya kumpulan partikel independen, tapi menunjukkan perilaku kolektif:
• **Plasma oscillations**: Osilasi kolektif elektron pada frekuensi plasma
• **Shielding**: Muatan dalam plasma di-shield oleh awan partikel berlawanan
• **Collective motion**: Partikel bergerak bersama membentuk struktur (wave, vortex)

## Termodinamika Plasma

### Temperature dan Energy
Dalam plasma:
• **Electron temperature** (Te): Biasanya jauh lebih tinggi karena electron lebih ringan
• **Ion temperature** (Ti): Lebih rendah karena ion lebih berat
• **Temperature ketidakseimbangan**: Plasma sering tidak dalam equilibrium termal

Energi dalam plasma:
• Thermal kinetic energy: (3/2)kT per partikel
• Energi potensial elektrostatis antara partikel bermuatan

### Debye Length dan Plasma Parameter
**Debye length** (λD) adalah skala di mana plasma effects signifikan:
λD = √(ε₀kTe / (ne²))

Plasma parameter (Λ) adalah jumlah partikel dalam sphere Debye:
Λ = (4/3)π n λD³

Untuk sistem menjadi plasma, Λ >> 1 (banyak partikel per Debye sphere)

## Plasma dalam LIBS (Laser-Induced Breakdown Spectroscopy)

### Proses Pembentukan Plasma LIBS

1. **Laser Ablation**: Laser pulse (ns timescale) focus ke sampel
   - Energi laser diserap oleh atoms di permukaan
   - Material menguap membentuk vapor column

2. **Breakdown dan Ionization**: Di vapor column
   - Cascade ionization terjadi
   - Plasma terbentuk dengan T ~ 10,000 K
   - Plasma highly non-equilibrium (Te >> Ti)

3. **Plasma Evolution**: Plasma mengalami perubahan dalam waktu
   - Cooling melalui radiasi
   - Ekspansi dan cooling adiabatis
   - Rekombinasi atom dan ion

### Spektrum Emisi Plasma LIBS

Plasma memancarkan cahaya karakteristik:
• **Atomic lines**: Emisi dari transisi elektronik individual
• **Ionic lines**: Emisi dari ion yang terionisasi
• **Continuum**: Radiasi bremsstrahlung dari elektron decelerate

Setiap elemen memiliki "fingerprint" spektral unik, memungkinkan identifikasi komposisi.

## Aplikasi Plasma Physics dalam Penelitian

### Fusion Energy
Plasma adalah kunci untuk fusion energy - menggabungkan nucleus untuk release energi besar. Tantangan: confining hot plasma untuk cukup lama agar fusion terjadi.

### Industrial Applications
• **Plasma cutting**: Memotong material dengan energy tinggi
• **Plasma etching**: Precision manufacturing dalam microelectronics
• **Plasma spraying**: Coating materials dengan thin layers

### Diagnostik dan Analisis
• **Spectroscopy**: Menganalisis komposisi melalui emisi cahaya
• **Ionization**: Membuat ions untuk mass spectrometry
• **Deposition**: Mengdeposit thin films berkualitas tinggi

## Tantangan dan Peluang

Plasma physics adalah field yang kompleks dengan banyak tantangan:
• **Pemodelan**: Simulasi plasma penuh sangat demanding secara komputasi
• **Prediksi**: Perilaku plasma sering chaotic dan sulit diprediksi
• **Measurement**: Diagnostic plasma complicated dan invasive

Peluang:
• Machine learning untuk plasma control dan optimization
• High-performance computing untuk simulation
• Novel diagnostic techniques dengan laser-based methods`
};

/**
 * Initial open notes state
 * Dimulai kosong - user harus klik untuk membuka notes
 * @type {Object<string, Array<string>>}
 */
export const INITIAL_OPEN_NOTES = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: []
};
