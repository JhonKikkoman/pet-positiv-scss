import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@css': '/src/css',
    },
  },
  build: {
    assetsDir: '',
    rollupOptions: {
      input: {
        main: '/src/main.tsx', // Основной входной файл
      },
      output: {
        assetFileNames: assetInfo => {
          if (/\.(woff2?|ttf|eot|otf)$/i.test(assetInfo.name ?? '')) {
            return 'css/fonts/[name][extname]';
          }
          return '[name][extname]';
        },
      },
    },
  },
});
