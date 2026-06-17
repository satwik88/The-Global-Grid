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

export function GlobalPulse() {
  const [mounted, setMounted] = useState(false);
  const [markets, setMarkets] = useState(INITIAL_MARKETS);
  const [rates, setRates] = useState(INITIAL_RATES);

  useEffect(() => {
    setMounted(true);

    // Simulate live market fluctuations every 5-10 seconds
    const interval = setInterval(() => {
      setMarkets((prev) =>
        prev.map((market) => {
          // 30% chance a market flips its status
          if (Math.random() > 0.7) {
            return {
              ...market,
              status: market.status === "up" ? "down" : "up",
            };
          }
          return market;
        })
      );

      setRates((prev) =>
        prev.map((r) => {
          if (Math.random() > 0.6) {
            const change = parseFloat((Math.random() * 0.05).toFixed(2));
            const isUp = Math.random() > 0.5;
            const newRate = isUp ? r.rate + change : r.rate - change;
            return {
              ...r,
              rate: parseFloat(newRate.toFixed(2)),
              status: isUp ? "up" : "down",
            };
          }
          return r;
        })
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-paper text-ink py-1 border-b-2 border-accent text-[0.625rem] md:text-xs overflow-hidden select-none no-print">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex items-center justify-between">
        
        {/* Left Side: Pulse Animation */}
        <div className="flex items-center gap-2 shrink-0 pr-4">
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="font-bold tracking-widest text-accent uppercase">Global Pulse</span>
        </div>

        {/* Center: Markets Marquee / Flex */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 border-l border-r border-border/30 px-4">
          {markets.map((market) => (
            <span key={market.name} className="flex items-center gap-1 font-[family-name:var(--font-inter)]">
              {market.name} 
              <span className={market.status === "up" ? "text-green-500" : "text-red-500"}>
                {market.status === "up" ? "▲" : "▼"}
              </span>
            </span>
          ))}
        </div>

        {/* Right Side: Exchange Rates */}
        <div className="flex items-center gap-4 pl-4 shrink-0 font-[family-name:var(--font-inter)] tracking-wider">
          {rates.map((rate, i) => (
            <div key={rate.pair} className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="text-ink-secondary">{rate.pair}</span>
                <span className="font-bold">{rate.rate.toFixed(2)}</span>
                <span className={rate.status === "up" ? "text-green-500" : "text-red-500"}>
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
