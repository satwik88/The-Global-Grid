import fs from 'fs';

async function test() {
  const loginRes = await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: '[REDACTED_EMAIL]', password: '[REDACTED_PASSWORD]' })
  });
  
  const cookies = loginRes.headers.get('set-cookie');
  if (!cookies) {
    console.error('No login cookie!');
    return;
  }
  
  const loginCookie = cookies.split(';')[0];
  console.log('Got cookie');
  
  const saveRes = await fetch('http://localhost:3001/api/articles/save', { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json', Cookie: loginCookie }, 
    body: JSON.stringify({ article_url: 'test-123', article_title: 'Test Title' }) 
  });
  console.log('POST Status:', saveRes.status);
  console.log('POST Response:', await saveRes.text());
}

test();
