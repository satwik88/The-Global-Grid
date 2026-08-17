import { normalizeTrivia } from './normalize';
import { TriviaQuestion } from './types';

export async function fetchTrivia(
  amount: number = 10,
  difficulty?: 'easy' | 'medium' | 'hard'
): Promise<TriviaQuestion[]> {
  const params = new URLSearchParams({ amount: String(amount), type: 'multiple' });
  if (difficulty) params.set('difficulty', difficulty);

  const res = await fetch(`https://opentdb.com/api.php?${params.toString()}`);
  if (!res.ok) throw new Error(`OpenTDB failed: ${res.status}`);
  const data = await res.json();
  if (data.response_code !== 0) throw new Error('OpenTDB returned no results');
  return data.results.map((item: any, i: number) => normalizeTrivia(item, i));
}
