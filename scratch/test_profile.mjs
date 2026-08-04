import fs from 'fs';

async function test() {
  const loginRes = await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'satwikraj707@gmail.com', password: 'env123local' })
  });
  const cookies = loginRes.headers.get('set-cookie');
  const loginCookie = cookies.split(';')[0];
  
  const profileRes = await fetch('http://localhost:3001/api/auth/profile', { 
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json', Cookie: loginCookie }, 
    body: JSON.stringify({ nickname: 'NewName' }) 
  });
  console.log('Profile Status:', profileRes.status);
  console.log('Profile Response:', await profileRes.text());
}

test();
