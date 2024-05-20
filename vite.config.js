import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
  base: 'Volodymyr-Synhaievskyi-Volodymyr-Synhaievskyi.github.io',
  define: {
    'process.env': {
      VITE_API_URL: process.env.VITE_API_URL,
      VITE_LIST_ITEMS_LIMIT: process.env.VITE_LIST_ITEMS_LIMIT,
    },
  },
});
