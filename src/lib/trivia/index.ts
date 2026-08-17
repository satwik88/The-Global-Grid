import { fetchTrivia } from './opentdb';
import { TriviaQuestion } from './types';

export async function getTrivia(
  amount: number = 10,
  difficulty?: 'easy' | 'medium' | 'hard'
): Promise<TriviaQuestion[]> {
  try {
    return await fetchTrivia(amount, difficulty);
  } catch (err) {
    console.warn('Trivia fetch failed:', err);
    return [];
  }
}
