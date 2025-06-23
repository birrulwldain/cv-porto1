// src/App.jsx

import React from 'react';
import Predictor from './components/Predictor';
import Footer from './components/Footer';
import './styles/main.scss'; // Impor file gaya global utama

function App() {
  return (
    <div className="app">
      <main>
        {/* Halaman utama kini hanya berisi satu section dengan komponen Predictor */}
        <section>
          <div className="container">
            <Predictor />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;