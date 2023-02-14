import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import virtual from './plugins/virtual-module'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), virtual()],
})
