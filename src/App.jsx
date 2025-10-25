/**
 * @file src/App.jsx
 * @description Main application router dengan route-based code splitting
 */

import React from 'react';
import { DigitalGardenContainer } from './features/digital-garden/components';
import Predictor from './components/Predictor';

/**
 * Main App component dengan route detection
 * Menggunakan pathname untuk determine component mana yang render
 */
function App() {
  const pathname = window.location.pathname;

  // Route: Predictor
  if (pathname.includes('/predictor')) {
    return (
      <div className="app-page app-page--predictor">
        <Predictor onBack={() => { window.location.href = '/'; }} />
      </div>
    );
  }

  // Default: Digital Garden as main page
  return (
    <div className="app-page app-page--garden">
      <DigitalGardenContainer />
    </div>
  );
}

export default App;