import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getAuthUserId } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const userId = await getAuthUserId();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const savedArticles = await prisma.savedArticle.findMany({
      where: { user_id: userId },
      orderBy: { saved_at: 'desc' }
    });

    return NextResponse.json({ articles: savedArticles });
  } catch (error) {
    console.error('Fetch saved articles error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
