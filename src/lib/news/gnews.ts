import { normalizeGNews } from './normalize';

export async function fetchFromGNews(topic: string = 'general', country?: string) {
  const query = new URLSearchParams({
    category: topic,
    lang: 'en',
    token: process.env.GNEWS_API_KEY || '',
    ...(country ? { country } : {})
  });
  const res = await fetch(`https://gnews.io/api/v4/top-headlines?${query.toString()}`);
  if (!res.ok) throw new Error(`GNews failed: ${res.status}`);
  const data = await res.json();
  return (data.articles ?? []).map(normalizeGNews);
}
