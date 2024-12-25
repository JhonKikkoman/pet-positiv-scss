import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'src/css/images/**/*', dest: 'src/css/images' }],
    }),
  ],
  assetsInclude: ['**/*.svg'],
  // build: {
  //   assetsDir: '',
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: assetInfo => {
  //         if (/\.(woff2?|ttf|eot|otf)$/i.test(assetInfo.name ?? '')) {
  //           return 'src/css/fonts/[name][extname]';
  //         }

  //         // if (/src\/css\/images\/partners\/$/i.test(assetInfo.name ?? '')) {
  //         //   return 'src/css/images/partners/[name][extname]';
  //         // }

  //         // if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name ?? '')) {
  //         //   return 'src/css/images/[name][extname]';
  //         // }

  //         return '[name][extname]';
  //       },
  //     },
  //   },
  // },
});
