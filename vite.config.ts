/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: [
      'src/test/**/*.test.tsx',
      'src/test/**/*.test.ts',
    ],
    environment: 'happy-dom',
  },
})
