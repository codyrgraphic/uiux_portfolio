import fs from 'fs';
import path from 'path';

const mainScssFilePath = path.resolve(__dirname, 'src/styles/main.scss');

const validScssFile = (filePath) => {
  const invalidFiles = ['.DS_Store', 'main.css', 'main.css.map', 'main.scss'];
  const fileName = path.basename(filePath);
  return fileName.endsWith('.scss') && !invalidFiles.includes(fileName);
};

export const updateScss = (filePath) => {
  if (!validScssFile(filePath)) return;

  const relativePath = path.relative(path.dirname(mainScssFilePath), filePath);
  const importStatement = `@import "${relativePath.replace(/\\/g, '/')}";\n`;

  try {
    if (fs.existsSync(mainScssFilePath)) {
      let content = fs.readFileSync(mainScssFilePath, 'utf8');
      if (!content.includes(importStatement)) {
        content += importStatement;
        fs.writeFileSync(mainScssFilePath, content, 'utf8');
      }
    }
  } catch (error) {
    console.error(`Failed to update SCSS import: ${error.message}`);
  }
};

export const removeScssImport = (filePath) => {
  if (!validScssFile(filePath)) return;

  const relativePath = path.relative(path.dirname(mainScssFilePath), filePath);
  const importStatement = `@import "${relativePath.replace(/\\/g, '/')}";\n`;

  try {
    if (fs.existsSync(mainScssFilePath)) {
      let content = fs.readFileSync(mainScssFilePath, 'utf8');
      if (content.includes(importStatement)) {
        content = content.replace(importStatement, '');
        fs.writeFileSync(mainScssFilePath, content, 'utf8');
      }
    }
  } catch (error) {
    console.error(`Failed to remove SCSS import: ${error.message}`);
  }
};
