import { normalizeOpenWeather } from './normalize';
import { Redis } from '@upstash/redis';
import { NormalizedWeather } from './types';

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken
  ? new Redis({
      url: redisUrl,
      token: redisToken,
    })
  : null;

export async function fetchWeather(city: string = 'Katihar', lat?: number, lon?: number): Promise<NormalizedWeather> {
  const queryParam = lat !== undefined && lon !== undefined
    ? `lat=${lat}&lon=${lon}`
    : `q=${encodeURIComponent(city)}`;
    
  const cacheKey = `weather:v1:${queryParam}`;

  if (redis) {
    try {
      const cached = await redis.get<NormalizedWeather>(cacheKey);
      if (cached) {
        return cached;
      }
    } catch (e) {
      console.warn('Redis weather cache read failed:', e);
    }
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${queryParam}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  
  if (!res.ok) throw new Error(`OpenWeather failed: ${res.status}`);
  const data = await res.json();
  const normalized = normalizeOpenWeather(data);

  if (redis) {
    try {
      // Cache for 30 minutes (1800 seconds)
      await redis.set(cacheKey, normalized, { ex: 1800 });
    } catch (e) {
      console.warn('Redis weather cache write failed:', e);
    }
  }

  return normalized;
}
