import { normalizeNewsData } from './normalize';

export async function fetchFromNewsData(topic: string = 'general') {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&category=${topic}&language=en`
  );
  if (!res.ok) throw new Error(`NewsData failed: ${res.status}`);
  const data = await res.json();
  return (data.results ?? []).map(normalizeNewsData);
}
