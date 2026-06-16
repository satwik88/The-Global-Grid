"use client";

import { useEffect, useState } from "react";

const markets = [
  { name: "NEW DELHI", status: "up" },
  { name: "LONDON", status: "up" },
  { name: "NEW YORK", status: "down" },
  { name: "TOKYO", status: "up" },
  { name: "FRANKFURT", status: "down" },
  { name: "HONG KONG", status: "up" },
];

const topics = ["AI", "GEOPOLITICS", "MARKETS", "SPACE", "CLIMATE", "CYBERSECURITY"];

export function GlobalPulse() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

        {/* Right Side: Topics */}
        <div className="flex items-center gap-3 pl-4 shrink-0 font-[family-name:var(--font-inter)] tracking-wider">
          {topics.slice(0, 4).map((topic, i) => (
            <div key={topic} className="flex items-center gap-3">
              <span>{topic}</span>
              {i < 3 && <span className="text-border/50">•</span>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
