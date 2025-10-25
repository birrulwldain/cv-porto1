import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import CSS file if needed
import './styles/main.scss'

// Always render React app (Digital Garden is default, Predictor on /predictor route)
const rootElement = document.getElementById('root');
if (rootElement) {
  const app = ReactDOM.createRoot(rootElement);
  app.render(<App />);
}