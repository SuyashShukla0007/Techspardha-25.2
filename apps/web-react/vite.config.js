import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'   // 👈 ADD THIS LINE

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
