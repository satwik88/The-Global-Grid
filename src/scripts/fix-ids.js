const fs = require('fs');
let c = fs.readFileSync('src/lib/content/articles.ts', 'utf8');
let id = 1000;
c = c.replace(/id: "\d+"/g, () => 'id: "' + (id++) + '"');
let slugId = 1000;
c = c.replace(/slug: "[^"]+-mock-article-\d+"/g, (match) => {
  return match.replace(/mock-article-\d+/, 'mock-article-' + (slugId++));
});
fs.writeFileSync('src/lib/content/articles.ts', c);
