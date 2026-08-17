import { TriviaQuestion } from './types';

function decodeHTML(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&[a-z]+;/gi, (match) => {
      // Basic fallback for other entities if needed, though Opentdb mainly uses those
      const textArea = typeof document !== 'undefined' ? document.createElement('textarea') : null;
      if (textArea) {
        textArea.innerHTML = match;
        return textArea.value;
      }
      return match;
    });
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function normalizeTrivia(item: any, index: number): TriviaQuestion {
  const correctAnswer = decodeHTML(item.correct_answer);
  const incorrectAnswers = item.incorrect_answers.map(decodeHTML);
  return {
    id: `trivia-${Date.now()}-${index}`,
    category: decodeHTML(item.category),
    difficulty: item.difficulty,
    question: decodeHTML(item.question),
    correctAnswer,
    incorrectAnswers,
    allAnswers: shuffle([correctAnswer, ...incorrectAnswers]),
  };
}
