import { fetchFromNewsData } from './newsdata';
import { fetchFromGNews } from './gnews';
import { fetchFromCurrents } from './currents';
import { NormalizedArticle } from './types';

const tiers: Array<(topic: string, country?: string) => Promise<NormalizedArticle[]>> = [
  fetchFromNewsData,
  fetchFromGNews,
  fetchFromCurrents,
];

export async function getNewsTiered(topic: string = 'general', country?: string): Promise<NormalizedArticle[]> {
  for (const tier of tiers) {
    try {
      const articles = await tier(topic, country);
      if (articles.length > 0) return articles;
    } catch (err) {
      console.warn('News tier failed, trying next:', err);
      continue;
    }
  }
  throw new Error('All news tiers failed');
}
