const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
console.log('--- Env Verification ---');
console.log('GOOGLE_CLIENT_ID exists:', !!envConfig.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET exists:', !!envConfig.GOOGLE_CLIENT_SECRET);
console.log('NEXTAUTH_SECRET exists:', !!envConfig.NEXTAUTH_SECRET);
console.log('NEXTAUTH_URL:', envConfig.NEXTAUTH_URL);
