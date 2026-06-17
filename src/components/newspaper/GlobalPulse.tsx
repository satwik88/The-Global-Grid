"use client";

import { useEffect, useState } from "react";

const INITIAL_MARKETS = [
  { name: "NEW DELHI", status: "up" },
  { name: "LONDON", status: "up" },
  { name: "NEW YORK", status: "down" },
  { name: "TOKYO", status: "up" },
  { name: "FRANKFURT", status: "down" },
  { name: "HONG KONG", status: "up" },
];

const INITIAL_RATES = [
  { pair: "USD/INR", rate: 83.42, status: "up" },
  { pair: "EUR/INR", rate: 89.15, status: "down" },
  { pair: "GBP/INR", rate: 105.30, status: "up" },
];

export function GlobalPulse({ locations }: { locations?: string[] }) {
  const [mounted, setMounted] = useState(false);
  
  const initialMarkets = locations && locations.length > 0 
    ? locations.map(loc => ({ name: loc.toUpperCase(), status: Math.random() > 0.5 ? "up" : "down" }))
    : INITIAL_MARKETS;

  const [markets, setMarkets] = useState(initialMarkets);
  const [rates, setRates] = useState(INITIAL_RATES);

  useEffect(() => {
    setMounted(true);

    const fetchRates = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        
        if (data && data.rates) {
          const inr = data.rates.INR;
          const eur = data.rates.EUR;
          const gbp = data.rates.GBP;
          
          if (inr && eur && gbp) {
            setRates(prev => {
              const currentUsd = prev.find(r => r.pair === "USD/INR")?.rate || 83.42;
              const currentEur = prev.find(r => r.pair === "EUR/INR")?.rate || 89.15;
              const currentGbp = prev.find(r => r.pair === "GBP/INR")?.rate || 105.30;

              const newUsd = inr;
              const newEur = inr / eur;
              const newGbp = inr / gbp;

              return [
                { pair: "USD/INR", rate: parseFloat(newUsd.toFixed(2)), status: newUsd >= currentUsd ? "up" : "down" },
                { pair: "EUR/INR", rate: parseFloat(newEur.toFixed(2)), status: newEur >= currentEur ? "up" : "down" },
                { pair: "GBP/INR", rate: parseFloat(newGbp.toFixed(2)), status: newGbp >= currentGbp ? "up" : "down" },
              ];
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch exchange rates", err);
      }
    };

    fetchRates();
    // Update rates every 5 minutes
    const rateInterval = setInterval(fetchRates, 300000);

    // Simulate live market fluctuations for locations every 4.5 seconds
    const marketInterval = setInterval(() => {
      setMarkets((prev) =>
        prev.map((market) => {
          if (Math.random() > 0.7) {
            return {
              ...market,
              status: market.status === "up" ? "down" : "up",
            };
          }
          return market;
        })
      );
    }, 4500);

    return () => {
      clearInterval(rateInterval);
      clearInterval(marketInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-paper text-ink py-1 border-b border-border text-[0.625rem] md:text-xs overflow-hidden select-none no-print">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex items-center justify-between">
        
        {/* Left Side: Pulse Animation */}
        <div className="flex items-center gap-2 shrink-0 pr-4">
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="font-bold tracking-widest text-accent uppercase">Global Pulse</span>
        </div>

        {/* Center: Markets Marquee */}
        <div className="hidden md:block flex-1 overflow-hidden border-l border-r border-border/30">
          <div className="flex w-max animate-marquee-slow items-center h-full py-1">
            {[...markets, ...markets].map((market, idx) => (
              <span key={`${market.name}-${idx}`} className="flex items-center gap-1 font-[family-name:var(--font-inter)] mx-6 shrink-0">
                {market.name} 
                <span className={market.status === "up" ? "text-green-500 dark:text-[#5a9b6e]" : "text-red-500 dark:text-accent"}>
                  {market.status === "up" ? "▲" : "▼"}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Exchange Rates */}
        <div className="flex items-center gap-4 pl-4 shrink-0 font-[family-name:var(--font-inter)] tracking-wider">
          {rates.map((rate, i) => (
            <div key={rate.pair} className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="text-ink-secondary">{rate.pair}</span>
                <span className="font-bold">{rate.rate.toFixed(2)}</span>
                <span className={rate.status === "up" ? "text-green-500 dark:text-[#5a9b6e]" : "text-red-500 dark:text-accent"}>
                  {rate.status === "up" ? "▲" : "▼"}
                </span>
              </span>
              {i < rates.length - 1 && <span className="text-border/50">•</span>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
