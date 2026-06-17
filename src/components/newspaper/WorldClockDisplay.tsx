"use client";

import { useEffect, useState } from "react";

interface Clock {
  city: string;
  timezone: string;
}

export function WorldClockDisplay({ clocks }: { clocks: Clock[] }) {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    function update() {
      const next: Record<string, string> = {};
      clocks.forEach(({ city, timezone }) => {
        next[city] = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
      });
      setTimes(next);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [clocks]);

  return (
    <ul className="space-y-2">
      {clocks.map(({ city }) => (
        <li key={city} className="flex items-center justify-between caption-text">
          <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider">
            {city}
          </span>
          <span className="font-[family-name:var(--font-inter)] text-sm tabular-nums">
            {times[city] ?? "—:—"}
          </span>
        </li>
      ))}
    </ul>
  );
}
