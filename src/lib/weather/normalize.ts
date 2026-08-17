import { NormalizedWeather } from './types';

export function normalizeOpenWeather(data: any): NormalizedWeather {
  return {
    location: data.name,
    tempC: Math.round(data.main.temp),
    tempF: Math.round((data.main.temp * 9) / 5 + 32),
    condition: data.weather?.[0]?.main ?? 'Unknown',
    icon: data.weather?.[0]?.icon ?? '01d',
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}
