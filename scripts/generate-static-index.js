const fs = require('fs');
const path = require('path');

const clientDir = path.resolve(__dirname, '..', 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

function findFile(prefix, ext) {
  if (!fs.existsSync(assetsDir)) return null;
  const files = fs.readdirSync(assetsDir);
  const match = files.find(f => f.startsWith(prefix) && f.endsWith(ext));
  return match ? path.posix.join('assets', match) : null;
}

const jsFile = findFile('index', '.js') || findFile('index-', '.js');
const cssFile = findFile('styles', '.css') || findFile('styles-', '.css');

if (!fs.existsSync(clientDir)) {
  console.error('Error: client build directory not found:', clientDir);
  process.exit(1);
}

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Portfolio</title>
    ${cssFile ? `<link rel="stylesheet" href="./${cssFile}">` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="./${jsFile}"></script>` : ''}
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');
console.log('Wrote', path.join(clientDir, 'index.html'));
