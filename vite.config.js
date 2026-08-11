import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  legacy: {
    inconsistentCjsInterop: true // Safely patches strict native module mismatch crashes
  }
})