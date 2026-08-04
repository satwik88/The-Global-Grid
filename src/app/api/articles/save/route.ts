import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const body = await req.json();
    
    // Support batch upsert for migration or single save
    const articlesToSave = Array.isArray(body) ? body : [body];

    const results = [];
    for (const article of articlesToSave) {
      const { article_url, article_title, article_image_url, article_source } = article;
      
      if (!article_url || !article_title) {
        continue;
      }

      // Upsert to avoid duplicates
      const saved = await prisma.savedArticle.upsert({
        where: {
          user_id_article_url: {
            user_id: decoded.userId,
            article_url
          }
        },
        update: {
          article_title,
          article_image_url,
          article_source,
        },
        create: {
          user_id: decoded.userId,
          article_url,
          article_title,
          article_image_url,
          article_source: article_source || 'Unknown'
        }
      });
      results.push(saved);
    }

    return NextResponse.json({ success: true, count: results.length });
  } catch (error) {
    console.error('Save article error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const body = await req.json();
    const { article_url } = body;

    if (!article_url) {
      return NextResponse.json({ error: 'Missing article_url' }, { status: 400 });
    }

    await prisma.savedArticle.delete({
      where: {
        user_id_article_url: {
          user_id: decoded.userId,
          article_url
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete article error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
