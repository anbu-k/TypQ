import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  root: path.resolve(__dirname, 'frontend'), 
  build: {
    outDir: path.resolve(__dirname, 'dist'), 
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend/src'),
      'react-icons': path.resolve(__dirname, 'frontend/node_modules/react-icons') 
    }
  },
  optimizeDeps: {
    include: [
      'react-icons/fa',
      // Add other dependencies that might need explicit inclusion
    ]
  }
})