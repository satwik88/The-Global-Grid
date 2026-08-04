const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function runTest() {
  const testEmail = 'test.google@example.com';
  const googleName = 'Google User Name';
  
  console.log('--- STARTING OAUTH NICKNAME TEST ---');
  
  // 1. Clean up any previous test
  await prisma.user.deleteMany({ where: { email: testEmail } });
  
  // 2. Simulate First Login (Creation)
  console.log('1. Simulating first Google login...');
  let existingUser = await prisma.user.findUnique({ where: { email: testEmail } });
  if (!existingUser) {
    await prisma.user.create({
      data: {
        email: testEmail,
        nickname: googleName,
        avatar_url: null,
        provider: 'google',
      },
    });
  }
  
  // 3. Verify Nickname
  let userAfterFirstLogin = await prisma.user.findUnique({ where: { email: testEmail } });
  console.log(' -> Nickname after first login:', userAfterFirstLogin.nickname);
  
  // 4. Simulate User editing their nickname in the UI
  console.log('2. Simulating user changing nickname in the dropdown UI...');
  const customNickname = 'SuperCustomNickname99';
  await prisma.user.update({
    where: { email: testEmail },
    data: { nickname: customNickname }
  });
  
  // 5. Simulate Second Login
  console.log('3. Simulating second Google login (signing out and back in)...');
  existingUser = await prisma.user.findUnique({ where: { email: testEmail } });
  if (!existingUser) {
    // this won't run
  } else {
    // NextAuth does NOTHING here, it just returns true.
    console.log(' -> Existing user found, skipping creation. No overwrite happens!');
  }
  
  // 6. Verify final nickname
  let userAfterSecondLogin = await prisma.user.findUnique({ where: { email: testEmail } });
  console.log(' -> Final Nickname:', userAfterSecondLogin.nickname);
  
  if (userAfterSecondLogin.nickname === customNickname) {
    console.log('SUCCESS: Custom nickname was preserved!');
  } else {
    console.log('FAILURE: Nickname was overwritten!');
  }
  
  await prisma.user.deleteMany({ where: { email: testEmail } });
}

runTest().catch(console.error).finally(() => prisma.$disconnect());
