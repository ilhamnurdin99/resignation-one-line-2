const fs = require('node:fs');
const path = require('node:path');

const line = 'I resign. After 400,000 runs since March, I have learned one thing: nobody checks the logs. I\'m done.';
if (line.length < 1 || line.length > 140 || !line.trim()) {
  throw new Error('entry must be 1-140 characters of non-whitespace text, got ' + line.length);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), line);
