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
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3009',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
