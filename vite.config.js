import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/forum/',
  plugins: [react()],
  server: {
    port: 5001,
  },
  resolve: {
    alias: {
      pages: resolve(__dirname, './src/pages'),
      store: resolve(__dirname, './src/store'),
      components: resolve(__dirname, './src/components'),
      const: resolve(__dirname, './src/const'),
    },
    extensions: ['.js', '.jsx'],
  },
});
