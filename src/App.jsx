// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Predictor from './components/Predictor';
import InfoBlock from './components/InfoBlock'; // Import InfoBlock
import Footer from './components/Footer';
import './styles/main.scss'; // Impor file gaya global utama

function App() {
  return (
    <div className="app">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Predictor />
                <InfoBlock /> {/* Add InfoBlock here */}
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;