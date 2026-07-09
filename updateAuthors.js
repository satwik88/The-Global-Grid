// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
const file = 'src/lib/content/articles.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/author:\s*\{\s*name:\s*"([^"]+)",\s*role:\s*"([^"]+)"\s*\}/g, (match, name, role) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `author: { name: "${name}", slug: "${slug}", role: "${role}", bio: "An expert in ${role.toLowerCase()} with over a decade of reporting experience.", expertise: ["${role.split(' ')[0]}"] }`;
});
fs.writeFileSync(file, content);
console.log('Done');
