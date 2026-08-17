import { NextResponse } from 'next/server';
import { getTrivia } from '@/lib/trivia';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amountStr = searchParams.get('amount');
  const amount = amountStr ? parseInt(amountStr, 10) : 10;
  
  const difficultyStr = searchParams.get('difficulty');
  const difficulty = (difficultyStr === 'easy' || difficultyStr === 'medium' || difficultyStr === 'hard') 
    ? difficultyStr 
    : undefined;

  const data = await getTrivia(amount, difficulty);

  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'Failed to fetch trivia' }, { status: 500 });
  }

  return NextResponse.json(data);
}
