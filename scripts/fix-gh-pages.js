const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function move(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.renameSync(src, dest);
  return true;
}

const root = process.cwd();
const clientDir = path.join(root, 'client');
const assetsSrc = path.join(clientDir, 'assets');
const assetsDest = path.join(root, 'assets');

try {
  move(assetsSrc, assetsDest);
  const pdfSrc = path.join(clientDir, 'Shahzaib-Ali-CV.pdf');
  if (fs.existsSync(pdfSrc)) fs.renameSync(pdfSrc, path.join(root, 'Shahzaib-Ali-CV.pdf'));

  // find JS/CSS
  let js = null;
  let css = null;
  if (fs.existsSync(assetsDest)) {
    const files = fs.readdirSync(assetsDest);
    js = files.find(f => /^index.*\.js$/.test(f));
    css = files.find(f => /styles.*\.css$/.test(f));
  }

  const html = `<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>My Portfolio</title>\n    ${css ? `<link rel="stylesheet" href="./assets/${css}">` : ''}\n  </head>\n  <body>\n    <div id="root"></div>\n    ${js ? `<script type="module" src="./assets/${js}"></script>` : ''}\n  </body>\n</html>\n`;

  fs.writeFileSync(path.join(root, 'index.html'), html, 'utf8');

  // cleanup
  if (fs.existsSync(clientDir)) {
    fs.rmSync(clientDir, { recursive: true, force: true });
  }
  if (fs.existsSync(path.join(root, 'server'))) {
    fs.rmSync(path.join(root, 'server'), { recursive: true, force: true });
  }

  // git commit & push
  try {
    execSync('git add -A', { stdio: 'inherit' });
    try {
      execSync('git commit -m "chore: publish client static files to root and add index.html for Pages"', { stdio: 'inherit' });
    } catch (e) {
      console.log('No changes to commit');
    }
    execSync('git push origin gh-pages --force', { stdio: 'inherit' });
    console.log('Pushed gh-pages update');
  } catch (e) {
    console.error('Git push failed', e.message);
    process.exit(1);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
