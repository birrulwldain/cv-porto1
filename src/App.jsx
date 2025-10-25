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

  // Route: Digital Garden
  if (pathname.includes('/garden')) {
    return (
      <div className="app-page app-page--garden">
        <DigitalGardenContainer />
      </div>
    );
  }

  // Route: Predictor
  if (pathname.includes('/predictor')) {
    return (
      <div className="app-page app-page--predictor">
        <Predictor onBack={() => { window.location.href = '/'; }} />
      </div>
    );
  }

  // Default: Home page (rendered via static HTML)
  return null;
}

export default App;