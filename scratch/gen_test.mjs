import fs from 'fs';
let code = fs.readFileSync('scratch/verify_auth.mjs', 'utf8');
code += `
console.log('\\n--- 6. TEST /api/articles/saved ---');
const savedRes = await fetch('http://localhost:3001/api/articles/saved', { headers: { Cookie: loginCookie } });
console.log('Status:', savedRes.status);
console.log('Response:', await savedRes.text());

console.log('\\n--- 7. TEST /api/articles/save (POST) ---');
const saveRes = await fetch('http://localhost:3001/api/articles/save', { 
  method: 'POST', 
  headers: { 'Content-Type': 'application/json', Cookie: loginCookie }, 
  body: JSON.stringify({ article_url: 'test-123', article_title: 'Test Title' }) 
});
console.log('Status:', saveRes.status);
console.log('Response:', await saveRes.text());
`;
fs.writeFileSync('scratch/verify_auth2.mjs', code);
