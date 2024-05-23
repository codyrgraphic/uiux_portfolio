import { defineConfig, loadEnv } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import autoImportPlugin from './vite-plugin-auto-import';
import { imagetools } from 'vite-imagetools';
import { resolve } from 'path'; 

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isDev = env.VITE_AUTO_IMPORT === 'true';

  console.log('VITE_AUTO_IMPORT in vite.config.mjs:', env.VITE_AUTO_IMPORT);

  // Add console logs to verify paths
  console.log('Resolved path to index.html:', resolve(__dirname, 'src/index.html'));
  console.log('Root directory:', resolve(__dirname, 'src'));

  return {
    plugins: [
      autoImportPlugin({ isDev }),
      imagetools(),
      injectHTML(),
    ].filter(Boolean),
    root: resolve(__dirname, 'src'),
    build: {
      outDir: resolve(__dirname, 'dist'),
      rollupOptions: {
        input: resolve(__dirname, 'src/index.html'), // Correct path to index.html
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
    publicDir: resolve(__dirname, 'public'),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'), // Ensure alias points correctly
      },
    },
    server: {
      open: true,
    },
  };
});
