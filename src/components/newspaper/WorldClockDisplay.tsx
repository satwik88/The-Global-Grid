"use client";

import { useEffect, useRef, useState } from "react";

interface Clock {
  city: string;
  timezone: string;
}

export function WorldClockDisplay({ clocks }: { clocks: Clock[] }) {
  const [mounted, setMounted] = useState(false);
  const clockRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  useEffect(() => {
    setMounted(true);
    const formatters: Record<string, Intl.DateTimeFormat> = {};
    clocks.forEach(({ city, timezone }) => {
      formatters[city] = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    });

    function update() {
      const now = new Date();
      clocks.forEach(({ city }) => {
        const el = clockRefs.current[city];
        if (el) {
          el.textContent = formatters[city].format(now);
        }
      });
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
          <span
            ref={(el) => {
              clockRefs.current[city] = el;
            }}
            className="font-[family-name:var(--font-inter)] text-sm tabular-nums"
          >
            —:—
          </span>
        </li>
      ))}
    </ul>
  );
}
