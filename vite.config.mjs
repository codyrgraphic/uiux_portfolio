import { defineConfig } from 'vite';
import autoImportPlugin from './vite-plugin-auto-import';

const isDev = process.env.VITE_AUTO_IMPORT === 'true';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      isDev && autoImportPlugin(),
    ].filter(Boolean),
    root: './src',
    build: {
      outDir: '../dist', 
    }
  };
});
