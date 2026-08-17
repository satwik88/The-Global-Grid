import { normalizeCurrents } from './normalize';

export async function fetchFromCurrents(category: string = 'general') {
  const res = await fetch(
    `https://api.currentsapi.services/v1/latest-news?category=${category}&language=en&apiKey=${process.env.CURRENTS_API_KEY}`
  );
  if (!res.ok) throw new Error(`Currents failed: ${res.status}`);
  const data = await res.json();
  return (data.news ?? []).map(normalizeCurrents);
}
