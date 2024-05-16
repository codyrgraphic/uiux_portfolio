import path from 'path';
import chokidar from 'chokidar';
import { updateHtml, removeHtmlImport } from './html-imports';
import { updateScss, removeScssImport } from './scss-imports';

export default function autoImportPlugin({
  jsDir = 'src/js',
  scssDir = 'src/styles',
} = {}) {
  const isDev = process.env.VITE_AUTO_IMPORT === 'true';
  if (!isDev) return; // Exit if not in development mode

  return {
    name: 'auto-import-plugin',
    configureServer(server) {
      const resolvedJsDir = path.resolve(__dirname, jsDir);
      const resolvedScssDir = path.resolve(__dirname, scssDir);

      chokidar.watch(resolvedJsDir).on('add', updateHtml).on('unlink', removeHtmlImport);
      chokidar.watch(resolvedScssDir).on('add', updateScss).on('unlink', removeScssImport);
    },
  };
}
