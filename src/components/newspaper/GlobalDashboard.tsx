import { Globe, Zap, BarChart2, TrendingUp, TrendingDown } from "lucide-react";

interface GlobalDashboardProps {
  countriesTracked: number;
  totalBreakingStories: number;
  mostCoveredNation: string;
  mostReadNation: string;
  strongestCurrency: { symbol: string, change: number };
  weakestCurrency: { symbol: string, change: number };
}

export function GlobalDashboard({
  countriesTracked,
  totalBreakingStories,
  mostCoveredNation,
  mostReadNation,
  strongestCurrency,
  weakestCurrency
}: GlobalDashboardProps) {
  return (
    <div className="border border-border bg-[var(--paper)] mb-8 shadow-sm">
      <div className="p-4 border-b border-border bg-ink text-paper flex items-center justify-between">
        <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight uppercase flex items-center gap-2">
          <Globe className="w-5 h-5 opacity-80" />
          Global Intelligence Dashboard
        </h2>
        <div className="ui-text text-xs uppercase tracking-widest opacity-80">
          Live Data Feed
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-border">
        {/* Metric 1 */}
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-xs uppercase tracking-widest text-ink-secondary mb-1">Countries Tracked</span>
          <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-ink">{countriesTracked}</span>
        </div>
        
        {/* Metric 2 */}
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-xs uppercase tracking-widest text-ink-secondary mb-1">Breaking Stories</span>
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-accent">{totalBreakingStories}</span>
            {totalBreakingStories > 0 && <Zap className="w-4 h-4 text-accent animate-pulse" />}
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-xs uppercase tracking-widest text-ink-secondary mb-1">Most Covered</span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink truncate" title={mostCoveredNation}>
            {mostCoveredNation}
          </span>
        </div>

        {/* Metric 4 */}
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-xs uppercase tracking-widest text-ink-secondary mb-1">Most Read</span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink truncate" title={mostReadNation}>
            {mostReadNation}
          </span>
        </div>

        {/* Metric 5 */}
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-xs uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            Strongest <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-500" />
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink">
            {strongestCurrency.symbol} <span className="text-sm text-green-600 dark:text-green-500 font-sans tracking-normal">+{strongestCurrency.change}%</span>
          </span>
        </div>

        {/* Metric 6 */}
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-xs uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            Weakest <TrendingDown className="w-3 h-3 text-accent" />
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink">
            {weakestCurrency.symbol} <span className="text-sm text-accent font-sans tracking-normal">{weakestCurrency.change}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
