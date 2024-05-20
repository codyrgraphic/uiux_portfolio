import path from 'path';
import chokidar from 'chokidar';
import { updateHtml, removeHtmlImport } from './html-imports';
import { updateScss, removeScssImport } from './scss-imports';

export default function autoImportPlugin({ isDev, jsDir = 'src/js', scssDir = 'src/styles' } = {}) {
  if (!isDev) {
    console.log('Auto-import plugin disabled: not in development mode.');
    return; // Exit if not in development mode
  }

  const ignoredFiles = /(^|[\/\\])\../; // ignore dotfiles

  return {
    name: 'auto-import-plugin',
    configureServer(server) {
      console.log('Setting up watchers for JS and SCSS files...');

      const resolvedJsDir = path.resolve(__dirname, jsDir);
      const resolvedScssDir = path.resolve(__dirname, scssDir);

      chokidar.watch(resolvedJsDir, { ignored: ignoredFiles }).on('add', (filePath) => {
        console.log(`File added: ${filePath}`);
        updateHtml(filePath);
      }).on('unlink', (filePath) => {
        console.log(`File removed: ${filePath}`);
        removeHtmlImport(filePath);
      });

      chokidar.watch(resolvedScssDir, { ignored: ignoredFiles }).on('add', (filePath) => {
        console.log(`File added: ${filePath}`);
        updateScss(filePath);
      }).on('unlink', (filePath) => {
        console.log(`File removed: ${filePath}`);
        removeScssImport(filePath);
      });
    },
  };
}
