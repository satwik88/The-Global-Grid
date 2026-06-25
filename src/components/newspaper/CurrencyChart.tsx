"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, TrendingDown, Minus, Activity } from "lucide-react";

interface ChartDataPoint {
  time: number;
  price: number;
}

interface CurrencyData {
  ticker: string;
  currency: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  chartData: ChartDataPoint[];
}

export function CurrencyChart({ countryName, ticker }: { countryName: string; ticker: string }) {
  const [data, setData] = useState<CurrencyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);

    fetch(`/api/currency?ticker=${encodeURIComponent(ticker)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [ticker]);

  if (loading) {
    return (
      <div className="p-6 border border-border bg-[var(--paper)] text-ink flex flex-col items-center justify-center min-h-[300px]">
        <Activity className="w-8 h-8 animate-pulse text-ink-secondary mb-4" />
        <span className="ui-text text-sm uppercase tracking-widest text-ink-secondary">Loading Market Data...</span>
      </div>
    );
  }

  if (error || !data || data.chartData.length === 0) {
    return null; // Gracefully hide if no data or error
  }

  const isPositive = data.change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendColorClass = isPositive ? "text-green-700 dark:text-green-500" : "text-accent";
  const strokeColor = isPositive ? "#15803d" : "var(--accent)";

  // Format date for tooltip and axis
  const dateFormatter = (tickItem: number) => {
    const d = new Date(tickItem);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };

  const minPrice = Math.min(...data.chartData.map((d) => d.price));
  const maxPrice = Math.max(...data.chartData.map((d) => d.price));
  const padding = (maxPrice - minPrice) * 0.1;

  // e.g. "USD/INR" from "USDINR=X"
  const baseCurrency = ticker.substring(0, 3);
  const quoteCurrency = ticker.substring(3, 6);

  return (
    <div className="border border-border bg-[var(--paper)] flex flex-col">
      <div className="p-6 border-b border-border bg-ink/5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="ui-text text-sm uppercase tracking-widest font-bold text-ink-secondary mb-1">
              {countryName} Currency
            </h3>
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-ink tracking-tight flex items-baseline gap-2">
              {baseCurrency}/{quoteCurrency}
            </div>
          </div>
          <div className="text-right">
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-ink tracking-tight">
              ₹{data.currentPrice.toFixed(2)}
            </div>
            <div className={`ui-text text-sm font-bold flex items-center justify-end gap-1 ${trendColorClass}`}>
              <TrendIcon size={16} />
              {isPositive ? "+" : ""}
              {data.change.toFixed(4)} ({data.changePercent.toFixed(2)}%)
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="time" 
              tickFormatter={dateFormatter} 
              stroke="var(--border)"
              tick={{ fill: "var(--ink-secondary)", fontSize: 12, fontFamily: "var(--font-inter)" }}
              tickMargin={10}
              minTickGap={30}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              domain={[minPrice - padding, maxPrice + padding]} 
              stroke="var(--border)"
              tick={{ fill: "var(--ink-secondary)", fontSize: 12, fontFamily: "var(--font-inter)" }}
              tickFormatter={(val) => val.toFixed(2)}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--paper)",
                borderColor: "var(--border)",
                color: "var(--ink)",
                fontFamily: "var(--font-inter)",
                borderRadius: "0px",
                boxShadow: "0 4px 6px var(--paper-shadow)"
              }}
              labelFormatter={dateFormatter}
              formatter={(value: number) => [`₹${value.toFixed(4)}`, "Rate"]}
              isAnimationActive={false}
            />
            <ReferenceLine y={data.chartData[0]?.price} stroke="var(--ink-secondary)" strokeDasharray="3 3" opacity={0.5} />
            <Line
              type="monotone"
              dataKey="price"
              stroke={strokeColor}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: strokeColor, stroke: "var(--paper)", strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="p-3 border-t border-border bg-ink text-paper text-center">
        <div className="text-xs uppercase tracking-widest font-bold opacity-80">
          1-Month Performance
        </div>
      </div>
    </div>
  );
}
