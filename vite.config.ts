/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

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
});
