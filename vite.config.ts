import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand:
          'eslint --cache --fix --max-warnings=0 "./src/**/*.{js,jsx,json,ts,tsx}"', // for example, lint .ts & .tsx
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve('src/'),
      assets: path.resolve('src/assets'),
      context: path.resolve('src/context'),
      features: path.resolve('src/features'),
      hooks: path.resolve('src/hooks'),
      layouts: path.resolve('src/layouts'),
      lib: path.resolve('src/lib'),
      pages: path.resolve('src/pages'),
      services: path.resolve('src/services'),
      ui: path.resolve('src/ui'),
      utils: path.resolve('src/utils'),
    },
  },
  server: {
    hmr: { overlay: true },
  },
  build: {
    outDir: './build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
});
