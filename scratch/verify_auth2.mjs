import fs from 'fs';

async function verify() {
  const envFile = fs.readFileSync('.env.local', 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      let key = match[1].trim();
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });

  const baseUrl = 'http://localhost:3001';
  const email = 'satwikraj707@gmail.com';
  const password = 'env123local';
  const nickname = 'Satwik';

  console.log(`\n--- 1. SIGNUP ---`);
  const signupRes = await fetch(`${baseUrl}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, nickname }),
  });
  
  const signupCookie = signupRes.headers.get('set-cookie');
  console.log(`Status: ${signupRes.status}`);
  console.log(`Set-Cookie header present: ${!!signupCookie}`);
  const signupData = await signupRes.json();
  console.log(`Response:`, signupData);

  console.log(`\n--- 2. LOGOUT ---`);
  const logoutRes = await fetch(`${baseUrl}/api/auth/logout`, { method: 'POST' });
  const logoutCookie = logoutRes.headers.get('set-cookie');
  console.log(`Status: ${logoutRes.status}`);
  console.log(`Set-Cookie header present: ${!!logoutCookie}`);
  console.log(`Response:`, await logoutRes.json());

  console.log(`\n--- 3. LOGIN ---`);
  const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  
  const loginCookie = loginRes.headers.get('set-cookie');
  console.log(`Status: ${loginRes.status}`);
  console.log(`Set-Cookie header present: ${!!loginCookie}`);
  const loginData = await loginRes.json();
  console.log(`Response:`, loginData);

  console.log(`\n--- 4. GET /ME ---`);
  const meRes = await fetch(`${baseUrl}/api/auth/me`, {
    headers: { 'Cookie': loginCookie }
  });
  console.log(`Status: ${meRes.status}`);
  const meData = await meRes.json();
  console.log(`Response:`, meData);

  console.log(`\n--- 5. DIRECT DB CHECK ---`);
  const { PrismaClient } = await import('@prisma/client');
  const prisma = new PrismaClient();
  const dbUser = await prisma.user.findUnique({ where: { email } });
  console.log(`User hashed_password in DB: ${dbUser.hashed_password}`);
  console.log(`Is hashed_password same as plaintext? ${dbUser.hashed_password === password ? 'YES (BAD)' : 'NO (GOOD)'}`);
  
  await prisma.$disconnect();
}

verify().catch(console.error);

console.log('\n--- 6. TEST /api/articles/saved ---');
const savedRes = await fetch('http://localhost:3001/api/articles/saved', { headers: { Cookie: loginCookie } });
console.log('Status:', savedRes.status);
console.log('Response:', await savedRes.text());

console.log('\n--- 7. TEST /api/articles/save (POST) ---');
const saveRes = await fetch('http://localhost:3001/api/articles/save', { 
  method: 'POST', 
  headers: { 'Content-Type': 'application/json', Cookie: loginCookie }, 
  body: JSON.stringify({ article_url: 'test-123', article_title: 'Test Title' }) 
});
console.log('Status:', saveRes.status);
console.log('Response:', await saveRes.text());
