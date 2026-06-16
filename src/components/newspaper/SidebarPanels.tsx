import { marketData, indiaMarketData, worldClocks } from "@/lib/content/articles";
import { WorldClockDisplay } from "./WorldClockDisplay";

export function MarketTracker() {
  return (
    <aside className="border border-border p-4">
      <h3 className="ui-text mb-3 pb-2 border-b border-border">Global Markets</h3>
      <ul className="space-y-2">
        {marketData.map((item) => (
          <li key={item.name} className="flex items-center justify-between caption-text">
            <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider">
              {item.name}
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
  return (
    <aside className="border border-border p-4 mt-6">
      <h3 className="ui-text mb-3 pb-2 border-b border-border">India Markets</h3>
      <ul className="space-y-2">
        {indiaMarketData.map((item) => (
          <li key={item.name} className="flex items-center justify-between caption-text">
            <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider">
              {item.name}
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
