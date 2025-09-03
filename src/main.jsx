import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import CSS file if needed
import './styles/main.scss'

// Only render React app if we're on the /predictor route
// For the main page, we're using static HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  const app = ReactDOM.createRoot(rootElement);
  app.render(<App />);
}