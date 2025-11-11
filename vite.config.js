import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'Pages': path.resolve(__dirname, './src/Pages'),
      'Layouts': path.resolve(__dirname, './src/Layouts'),
      'Routes': path.resolve(__dirname, './src/Routes'),
      'Components': path.resolve(__dirname, './src/Components'),
    },
  },
})
