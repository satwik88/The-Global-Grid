"use client";

import { useState, useEffect, useCallback } from "react";
import { worldClocks } from "@/lib/content/articles";
import { WorldClockDisplay } from "./WorldClockDisplay";

// Mapping Yahoo symbols to our display names
const GLOBAL_MARKETS_MAP: Record<string, string> = {
  '^GSPC': 'S&P 500',
  '^FTSE': 'FTSE 100',
  '^N225': 'Nikkei 225',
  '^GDAXI': 'DAX',
  '^HSI': 'Hang Seng',
  'GC=F': 'Gold',
};

const INDIA_MARKETS_MAP: Record<string, string> = {
  '^NSEI': 'NIFTY 50',
  '^BSESN': 'SENSEX',
  'USDINR=X': 'INR/USD',
  'GC=F': 'Gold (India)', // We can reuse Gold for India
};

interface MarketItem {
  name: string;
  value: string;
  change: string;
  up: boolean;
  stale?: boolean;
}

// Initial static fallback data
const fallbackGlobal: MarketItem[] = [
  { name: "S&P 500", value: "5,842.31", change: "+1.82%", up: true },
  { name: "FTSE 100", value: "8,291.45", change: "+0.94%", up: true },
  { name: "Nikkei 225", value: "39,156.78", change: "-0.31%", up: false },
  { name: "DAX", value: "19,847.22", change: "+1.12%", up: true },
  { name: "Hang Seng", value: "23,891.56", change: "+0.67%", up: true },
  { name: "Gold", value: "$2,847.30", change: "+0.45%", up: true },
];

const fallbackIndia: MarketItem[] = [
  { name: "NIFTY 50", value: "24,852.15", change: "+1.24%", up: true },
  { name: "SENSEX", value: "81,332.72", change: "+1.31%", up: true },
  { name: "INR/USD", value: "83.42", change: "-0.05%", up: false },
  { name: "Gold (India)", value: "₹72,450", change: "+0.80%", up: true },
];

function formatPrice(symbol: string, price: number): string {
  if (symbol === 'GC=F' && !symbol.includes('India')) return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (symbol === 'GC=F' && symbol.includes('India')) return `₹${(price * 83.42).toLocaleString(undefined, { maximumFractionDigits: 0 })}`; // Rough conversion for Indian Gold representation if needed, though GC=F is USD/oz
  if (symbol === 'USDINR=X') return price.toFixed(2);
  return price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function MarketTracker() {
  const [data, setData] = useState<MarketItem[]>(fallbackGlobal);

  const fetchMarkets = useCallback(async () => {
    try {
      const res = await fetch('/api/market-data');
      if (!res.ok) return;
      const json = await res.json();
      if (json.data && Array.isArray(json.data)) {
        setData(prev => {
          const next = [...prev];
          json.data.forEach((item: any) => {
            const name = GLOBAL_MARKETS_MAP[item.symbol];
            if (name) {
              const idx = next.findIndex(n => n.name === name);
              if (idx >= 0) {
                next[idx] = {
                  name,
                  value: formatPrice(item.symbol, item.price),
                  change: `${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%`,
                  up: item.changePercent >= 0,
                  stale: false,
                };
              }
            }
          });
          return next;
        });
      }
    } catch (e) {
      console.error("Failed to fetch global markets", e);
      // Mark as stale
      setData(prev => prev.map(item => ({ ...item, stale: true })));
    }
  }, []);

  useEffect(() => {
    fetchMarkets();
    const interval = setInterval(fetchMarkets, 10 * 60 * 1000); // Every 10 mins
    
    const handleRefresh = () => fetchMarkets();
    window.addEventListener("global-grid-refresh", handleRefresh);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("global-grid-refresh", handleRefresh);
    };
  }, [fetchMarkets]);

  return (
    <aside className="border border-border p-4">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
        <h3 className="ui-text">Global Markets</h3>
        <span className="caption-text text-[10px] text-ink-secondary">Quotes delayed ~15m</span>
      </div>
      <ul className="space-y-2">
        {data.map((item) => (
          <li key={item.name} className="flex items-center justify-between caption-text">
            <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider flex items-center gap-1">
              {item.name}
              {item.stale && <span className="w-1.5 h-1.5 rounded-full bg-accent/50" title="Stale data" />}
            </span>
            <span className="flex items-center gap-2">
              <span className="body-text text-sm">{item.value}</span>
              <span
                className={`font-[family-name:var(--font-inter)] text-xs ${
                  item.up ? "text-ink" : "text-accent"
                }`}
              >
                {item.change}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function WorldClockPanel() {
  return (
    <aside className="border border-border p-4">
      <h3 className="ui-text mb-3 pb-2 border-b border-border">World Clock</h3>
      <WorldClockDisplay clocks={worldClocks} />
    </aside>
  );
}

export function IndiaMarketTracker() {
  const [data, setData] = useState<MarketItem[]>(fallbackIndia);

  const fetchMarkets = useCallback(async () => {
    try {
      const res = await fetch('/api/market-data');
      if (!res.ok) return;
      const json = await res.json();
      if (json.data && Array.isArray(json.data)) {
        setData(prev => {
          const next = [...prev];
          json.data.forEach((item: any) => {
            const name = INDIA_MARKETS_MAP[item.symbol];
            if (name) {
              const idx = next.findIndex(n => n.name === name);
              if (idx >= 0) {
                let val = formatPrice(item.symbol, item.price);
                if (item.symbol === 'GC=F') val = `₹${(item.price * 83.5).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
                
                next[idx] = {
                  name,
                  value: val,
                  change: `${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%`,
                  up: item.changePercent >= 0,
                  stale: false,
                };
              }
            }
          });
          return next;
        });
      }
    } catch (e) {
      console.error("Failed to fetch india markets", e);
      setData(prev => prev.map(item => ({ ...item, stale: true })));
    }
  }, []);

  useEffect(() => {
    fetchMarkets();
    const interval = setInterval(fetchMarkets, 10 * 60 * 1000);
    
    const handleRefresh = () => fetchMarkets();
    window.addEventListener("global-grid-refresh", handleRefresh);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("global-grid-refresh", handleRefresh);
    };
  }, [fetchMarkets]);

  return (
    <aside className="border border-border p-4 mt-6">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
        <h3 className="ui-text">India Markets</h3>
        <span className="caption-text text-[10px] text-ink-secondary">Quotes delayed ~15m</span>
      </div>
      <ul className="space-y-2">
        {data.map((item) => (
          <li key={item.name} className="flex items-center justify-between caption-text">
            <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider flex items-center gap-1">
              {item.name}
              {item.stale && <span className="w-1.5 h-1.5 rounded-full bg-accent/50" title="Stale data" />}
            </span>
            <span className="flex items-center gap-2">
              <span className="body-text text-sm">{item.value}</span>
              <span
                className={`font-[family-name:var(--font-inter)] text-xs ${
                  item.up ? "text-ink" : "text-accent"
                }`}
              >
                {item.change}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
