import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyPassword, signToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password (hashed_password is null for OAuth-only accounts)
    if (!user.hashed_password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const isValid = await verifyPassword(password, user.hashed_password);

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Create session
    const token = signToken({ userId: user.id });
    await setAuthCookie(token);

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
