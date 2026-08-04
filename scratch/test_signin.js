const http = require('http');

async function run() {
  try {
    const res = await fetch('http://localhost:3000/api/auth/csrf');
    const data = await res.json();
    const csrfToken = data.csrfToken;
    const cookie = res.headers.get('set-cookie').split(';')[0];
    
    console.log("Got CSRF:", csrfToken);
    
    const postRes = await fetch('http://localhost:3000/api/auth/signin/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookie
      },
      body: `csrfToken=${csrfToken}&callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F`,
      redirect: 'manual'
    });
    
    console.log("POST status:", postRes.status);
    console.log("Redirect location:", postRes.headers.get('location'));
  } catch(e) {
    console.error(e);
  }
}

run();
