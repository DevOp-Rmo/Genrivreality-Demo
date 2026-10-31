const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section') || (l.includes('<h2') && l.includes('font-display'))) {
    console.log((i+1) + ': ' + l.trim().slice(0, 90));
  }
});
