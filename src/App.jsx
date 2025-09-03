import React from 'react';
import Predictor from './components/Predictor';

function App() {
  // Check if we're on the main page or the predictor page
  const isPredictor = window.location.pathname.includes('/predictor');
  
  // Only render the Predictor component when on the predictor page
  if (isPredictor) {
    return (
      <div className="predictor-page">
        <Predictor onBack={() => window.location.href = '/'} />
      </div>
    );
  }
  
  // For the main page, return null since we're using the static HTML
  return null;
}

export default App;