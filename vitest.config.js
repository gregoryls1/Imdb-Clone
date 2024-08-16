import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  test: defineVitestConfig({
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, '/setupTests.ts'),
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts,tsx,vue}'],
    transformMode: {
      web: [/\.vue$/],
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  }),
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
