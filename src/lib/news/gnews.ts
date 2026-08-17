import { normalizeGNews } from './normalize';

export async function fetchFromGNews(topic: string = 'general') {
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=${topic}&lang=en&token=${process.env.GNEWS_API_KEY}`
  );
  if (!res.ok) throw new Error(`GNews failed: ${res.status}`);
  const data = await res.json();
  return (data.articles ?? []).map(normalizeGNews);
}
