import { fetchWeather } from './openweather';
import { NormalizedWeather } from './types';

export async function getWeather(city: string = 'Katihar', lat?: number, lon?: number): Promise<NormalizedWeather | null> {
  try {
    return await fetchWeather(city, lat, lon);
  } catch (err) {
    console.warn('Weather fetch failed:', err);
    return null;
  }
}
