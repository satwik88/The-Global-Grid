import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { getAuthUserId } from '@/lib/auth';

export async function PUT(req: Request) {
  try {
    const userId = await getAuthUserId();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { nickname, avatar_url, interests } = body;

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(nickname !== undefined && { nickname }),
        ...(avatar_url !== undefined && { avatar_url }),
      }
    });

    if (interests && Array.isArray(interests)) {
      const existingPref = await prisma.userPreference.findFirst({
        where: { user_id: user.id }
      });

      if (existingPref) {
        await prisma.userPreference.update({
          where: { id: existingPref.id },
          data: { interests }
        });
      } else {
        await prisma.userPreference.create({
          data: {
            user_id: user.id,
            interests
          }
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
