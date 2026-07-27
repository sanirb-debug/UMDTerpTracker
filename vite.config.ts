import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this from /UMDTerpTracker/, not from the domain root.
  // Dev stays at / so `npm run dev` opens where you expect.
  base: command === 'build' ? '/UMDTerpTracker/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': fileURLToPath(new URL('./lib', import.meta.url)),
      '@data': fileURLToPath(new URL('./data', import.meta.url)),
      '@app': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts', 'fixtures/**/*.test.ts'],
  },
}));
