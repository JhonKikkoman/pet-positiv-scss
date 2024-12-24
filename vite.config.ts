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
  assetsInclude: ['**/*.svg'],
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (/\.(woff2?|ttf|eot|otf)$/i.test(assetInfo.name ?? '')) {
            return 'src/css/fonts/[name][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name ?? '')) {
            return 'src/css/images/[name][extname]';
          }
          return '[name][extname]';
        },
      },
    },
  },
});
