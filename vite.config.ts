import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import contentPlugin from './vite-plugins/content'

export default defineConfig({
  plugins: [contentPlugin(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@content': path.resolve(__dirname, 'content-contract'),
    },
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber'],
        },
      },
    },
  },
  server: { port: 5173 },
})
