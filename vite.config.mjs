import { defineConfig, loadEnv } from 'vite';
import autoImportPlugin from './vite-plugin-auto-import';
import { imagetools } from 'vite-imagetools';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isDev = env.VITE_AUTO_IMPORT === 'true';

  console.log('VITE_AUTO_IMPORT in vite.config.mjs:', env.VITE_AUTO_IMPORT);

  return {
    plugins: [
      autoImportPlugin({ isDev }),
      imagetools()
    ].filter(Boolean),
    root: './src',
    build: {
      outDir: '../dist',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
    publicDir: '../public',
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      open: true
    }
  };
});
