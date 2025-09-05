// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/", // Root domain
  
  // Configure server
  server: {
    host: 'localhost',
    port: 5173
  },
  
  // Resolve path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        predictor: path.resolve(__dirname, 'predictor/index.html')
      }
    }
  }
});
