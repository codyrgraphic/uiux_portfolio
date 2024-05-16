import fs from 'fs';
import path from 'path';

const htmlFilePath = path.resolve(__dirname, 'src/index.html');

export const updateHtml = (filePath) => {
  const relativePath = path.relative(path.dirname(htmlFilePath), filePath);
  const importStatement = `<script type="module" src="${relativePath.replace(/\\/g, '/')}" defer></script>\n`;

  if (fs.existsSync(htmlFilePath)) {
    let content = fs.readFileSync(htmlFilePath, 'utf8');
    if (!content.includes(importStatement)) {
      content = content.replace('</head>', `${importStatement}</head>`);
      fs.writeFileSync(htmlFilePath, content, 'utf8');
    }
  }
};

export const removeHtmlImport = (filePath) => {
  const relativePath = path.relative(path.dirname(htmlFilePath), filePath);
  const importStatement = `<script type="module" src="${relativePath.replace(/\\/g, '/')}" defer></script>\n`;

  if (fs.existsSync(htmlFilePath)) {
    let content = fs.readFileSync(htmlFilePath, 'utf8');
    if (content.includes(importStatement)) {
      content = content.replace(importStatement, '');
      fs.writeFileSync(htmlFilePath, content, 'utf8');
    }
  }
};
