"use client";

import { useState, useEffect } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, CloudFog } from "lucide-react";

interface WeatherData {
  temp: number;
  condition: string;
  city: string;
  code: number;
}

const WMO_CODES: Record<number, { label: string; icon: React.ElementType }> = {
  0: { label: "Clear sky", icon: Sun },
  1: { label: "Mainly clear", icon: Sun },
  2: { label: "Partly cloudy", icon: Cloud },
  3: { label: "Overcast", icon: Cloud },
  45: { label: "Fog", icon: CloudFog },
  48: { label: "Depositing rime fog", icon: CloudFog },
  51: { label: "Light drizzle", icon: CloudDrizzle },
  53: { label: "Moderate drizzle", icon: CloudDrizzle },
  55: { label: "Dense drizzle", icon: CloudDrizzle },
  61: { label: "Slight rain", icon: CloudRain },
  63: { label: "Moderate rain", icon: CloudRain },
  65: { label: "Heavy rain", icon: CloudRain },
  71: { label: "Slight snow", icon: CloudSnow },
  73: { label: "Moderate snow", icon: CloudSnow },
  75: { label: "Heavy snow", icon: CloudSnow },
  95: { label: "Thunderstorm", icon: CloudLightning },
  96: { label: "Thunderstorm with slight hail", icon: CloudLightning },
  99: { label: "Thunderstorm with heavy hail", icon: CloudLightning },
};

export function WeatherWidget() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const fetchWeather = async (lat: number, lon: number, cityName?: string) => {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if (!res.ok) throw new Error("Weather fetch failed");
        const json = await res.json();
        const current = json.current_weather;
        
        let finalCity = cityName;
        if (!finalCity) {
          try {
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            if (geoRes.ok) {
              const geoJson = await geoRes.json();
              finalCity = geoJson.address?.city || geoJson.address?.town || geoJson.address?.village || geoJson.address?.state || "Unknown Location";
            }
          } catch {
            finalCity = "Unknown Location";
          }
        }

        setData({
          temp: current.temperature,
          condition: WMO_CODES[current.weathercode]?.label || "Unknown",
          code: current.weathercode,
          city: finalCity || "Unknown Location",
        });
      } catch {
        setError("Unable to load weather.");
      }
    };

    const initWeather = () => {
      if (typeof window !== "undefined" && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            fetchWeather(pos.coords.latitude, pos.coords.longitude);
          },
          () => {
            // Fallback to New Delhi if denied or error
            console.warn("Geolocation denied/failed, falling back to New Delhi.");
            fetchWeather(28.6139, 77.2090, "New Delhi");
          },
          { timeout: 5000 }
        );
      } else {
        fetchWeather(28.6139, 77.2090, "New Delhi");
      }
    };

    initWeather();

    const interval = setInterval(() => {
      initWeather();
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const Icon = data ? (WMO_CODES[data.code]?.icon || Cloud) : Cloud;

  return (
    <aside className="border border-border p-4 bg-paper transition-colors duration-300">
      <h3 className="ui-text mb-3 pb-2 border-b border-border">Local Weather</h3>
      {error ? (
        <p className="caption-text text-accent">{error}</p>
      ) : data ? (
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-sm font-bold uppercase tracking-widest text-ink">{data.city}</p>
            <p className="caption-text text-ink-secondary mt-1">{data.condition}</p>
          </div>
          <div className="flex items-center gap-3">
            <Icon size={28} className="text-accent" />
            <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-ink">
              {Math.round(data.temp)}&deg;C
            </span>
          </div>
        </div>
      ) : (
        <p className="caption-text text-ink-secondary animate-pulse">Detecting location...</p>
      )}
    </aside>
  );
}
