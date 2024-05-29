import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory for the build artifacts
    assetsDir: '.', // Keep assets in the root of the output directory
  },
  server: {
    port: process.env.PORT || 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
