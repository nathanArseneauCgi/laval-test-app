import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    coverage: {
      reporter: ['text-summary'],
    },
  },
});