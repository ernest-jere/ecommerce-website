import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  experimental: {
    enableNativePlugin: false // Bypasses the strict native Rust compiler crashing
  }
})
