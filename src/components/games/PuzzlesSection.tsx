"use client";

import { useState } from "react";
import { dailyRiddles, brainTeasers } from "@/lib/content/articles";
import { Eye, EyeOff } from "lucide-react";

export function RiddlesSection() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="border border-border p-6">
      <h3 className="headline-md mb-4">Daily Riddles</h3>
      <div className="space-y-6">
        {dailyRiddles.map((riddle, i) => (
          <div key={i} className="border-b border-border pb-4 last:border-0">
            <p className="feature-text">{riddle.question}</p>
            <button
              onClick={() => setRevealed((prev) => ({ ...prev, [i]: !prev[i] }))}
              className="flex items-center gap-2 ui-text mt-3 hover:text-accent transition-colors"
            >
              {revealed[i] ? <EyeOff size={14} /> : <Eye size={14} />}
              {revealed[i] ? "Hide Answer" : "Reveal Answer"}
            </button>
            {revealed[i] && (
              <p className="body-text mt-2 text-accent italic">{riddle.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrainTeasersSection() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="border border-border p-6">
      <h3 className="headline-md mb-4">Brain Teasers</h3>
      {brainTeasers.map((teaser, i) => (
        <div key={i}>
          <h4 className="ui-text mb-2">{teaser.title}</h4>
          <p className="body-text">{teaser.puzzle}</p>
          <button
            onClick={() => setRevealed((prev) => ({ ...prev, [i]: !prev[i] }))}
            className="flex items-center gap-2 ui-text mt-3 hover:text-accent transition-colors"
          >
            {revealed[i] ? <EyeOff size={14} /> : <Eye size={14} />}
            {revealed[i] ? "Hide Solution" : "Reveal Solution"}
          </button>
          {revealed[i] && (
            <p className="body-text mt-2 text-accent italic">{teaser.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function CrosswordSection() {
  const gridSize = 7;
  const emptyGrid = Array.from({ length: gridSize }, () =>
    Array.from({ length: gridSize }, () => "")
  );

  return (
    <div className="border border-border p-6">
      <h3 className="headline-md mb-4">Mini Crossword</h3>
      <div
        className="grid gap-0 max-w-[280px] mx-auto border-2 border-border mb-6"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {emptyGrid.map((row, r) =>
          row.map((_, c) => (
            <div
              key={`${r}-${c}`}
              className="aspect-square border border-border flex items-center justify-center font-[family-name:var(--font-inter)] text-sm uppercase"
            >
              {(r === 0 && c < 6) || (c === 0 && r < 3) || (r === 4 && c < 5) ? "" : ""}
            </div>
          ))
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="ui-text mb-2">Across</h4>
          <ol className="body-text text-sm space-y-1 list-decimal list-inside">
            <li>Global climate agreement city (6)</li>
            <li>Greenhouse ___ (3)</li>
            <li>Quantum computing unit (5)</li>
          </ol>
        </div>
        <div>
          <h4 className="ui-text mb-2">Down</h4>
          <ol className="body-text text-sm space-y-1 list-decimal list-inside">
            <li>Renewable energy source (5)</li>
            <li>Editor&apos;s pick label (7)</li>
            <li>AI brain interface (3)</li>
          </ol>
        </div>
      </div>
      <p className="caption-text mt-4 italic text-center">
        Interactive crossword — full puzzle coming in next edition
      </p>
    </div>
  );
}
