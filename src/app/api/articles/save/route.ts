import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getAuthUserId } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const userId = await getAuthUserId();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
            user_id: userId,
            article_url
          }
        },
        update: {
          article_title,
          article_image_url,
          article_source,
        },
        create: {
          user_id: userId,
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
    const userId = await getAuthUserId();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { article_url } = body;

    if (!article_url) {
      return NextResponse.json({ error: 'Missing article_url' }, { status: 400 });
    }

    await prisma.savedArticle.delete({
      where: {
        user_id_article_url: {
          user_id: userId,
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
