"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { NormalizedWeather } from "@/lib/weather/types";

export function WeatherWidget() {
  const [data, setData] = useState<NormalizedWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchWeather(); // Default fetch on mount
    
    // Auto-refresh every 30 minutes
    const interval = setInterval(() => {
      fetchWeather();
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchWeather = async (lat?: number, lon?: number) => {
    setLoading(true);
    try {
      const query = lat !== undefined && lon !== undefined ? `?lat=${lat}&lon=${lon}` : ``;
      const res = await fetch(`/api/weather${query}`);
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError("Unable to load weather");
    } finally {
      setLoading(false);
    }
  };

  const handleGeoLocationClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (geoError) => {
        console.warn("Geolocation denied or failed", geoError);
        alert("Could not get your location.");
        setLoading(false);
      }
    );
  };

  if (!mounted) return <div className="w-[120px] h-6" />; // Placeholder

  return (
    <div className="flex items-center gap-2 ui-text text-ink-secondary text-xs sm:text-sm h-6">
      {error ? (
        <span className="text-accent">{error}</span>
      ) : data ? (
        <>
          <div className="flex items-center gap-1.5 hover:text-accent transition-colors duration-300">
            <span className="font-bold tracking-widest uppercase truncate max-w-[100px] sm:max-w-max">
              {data.location}
            </span>
            <button 
              onClick={handleGeoLocationClick} 
              disabled={loading}
              title="Update to my location"
              aria-label="Get weather for my location"
              className="opacity-70 hover:opacity-100 disabled:opacity-30"
            >
              <MapPin size={12} className={loading ? "animate-pulse" : ""} />
            </button>
          </div>
          
          <span className="text-ink-secondary/50">|</span>
          
          <div className="flex items-center gap-1">
            <Image 
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
              alt={data.condition}
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain -my-1"
            />
            <span className="font-[family-name:var(--font-inter)] font-semibold text-ink">
              {data.tempC}&deg;C
            </span>
          </div>
        </>
      ) : (
        <span className="animate-pulse">Loading weather...</span>
      )}
    </div>
  );
}
