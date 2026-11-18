import { normalizeCurrents } from './normalize';

export async function fetchFromCurrents(category: string = 'general', country?: string) {
  const query = new URLSearchParams({
    category,
    language: 'en',
    apiKey: process.env.CURRENTS_API_KEY || '',
    ...(country ? { country } : {})
  });
  const res = await fetch(`https://api.currentsapi.services/v1/latest-news?${query.toString()}`);
  if (!res.ok) throw new Error(`Currents failed: ${res.status}`);
  const data = await res.json();
  return (data.news ?? []).map(normalizeCurrents);
}
