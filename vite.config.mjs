import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import injectHTML from 'vite-plugin-html-inject';
import { imagetools } from 'vite-imagetools';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [imagetools(), injectHTML(), svelte()].filter(Boolean),
    root: resolve(__dirname, 'src'),
    build: {
      outDir: resolve(__dirname, 'dist'),
      rollupOptions: {
        input: resolve(__dirname, 'src/index.html'),
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
    publicDir: resolve(__dirname, 'public'),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {},
  };
});
