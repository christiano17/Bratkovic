import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Bratkovic/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
