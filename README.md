# Spectroscopy Dashboard

This is a web application for analyzing spectroscopic data, specifically for Laser-Induced Breakdown Spectroscopy (LIBS).

> Note: This was originally part of a portfolio website project, but has been separated into its own application.

## Installation and Setup

Follow these steps to set up and run the application:

1. **Install Frontend Dependencies**
   ```
   npm install
   ```

2. **Start the Backend API Server**
   ```
   cd predictor-api
   python -m venv venv  # If the virtual environment doesn't exist
   source venv/bin/activate  # On macOS/Linux
   # venv\Scripts\activate  # On Windows
   pip install -r requirements.txt
   uvicorn app.main:app --reload
   ```

3. **Start the Frontend Development Server**
   ```
   npm run dev
   ```

4. **Access the Application**
   Open your browser and go to: http://localhost:5173

## Features

- Upload and analyze .asc spectral files
- Detect spectral peaks with customizable parameters
- Apply baseline correction using Asymmetric Least Squares algorithm
- Predict elements using a deep learning model
- Validate predictions against ground truth data
- Download validation results as Excel reports

## Technologies Used

- Frontend: React, Ant Design, Plotly.js
- Backend: FastAPI, PyTorch, SciPy
- Build Tools: Vite, ESLint, Sass

## Developer

Birrul Walidain  
Email: birrul@mhs.usk.ac.id  
GitHub: [github.com/birrulwldain](https://github.com/birrulwldain)

