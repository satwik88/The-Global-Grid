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

  const layout = [
    [1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
  ];

  const [grid, setGrid] = useState<string[][]>(
    Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => ""))
  );

  const handleInput = (r: number, c: number, val: string) => {
    const newGrid = [...grid];
    newGrid[r] = [...newGrid[r]];
    newGrid[r][c] = val.slice(-1).toUpperCase();
    setGrid(newGrid);
  };

  return (
    <div className="border border-border p-6">
      <h3 className="headline-md mb-4">Mini Crossword</h3>
      <div
        className="grid gap-0 max-w-[280px] mx-auto border-2 border-border mb-6 grid-cols-7"
      >
        {layout.map((row, r) =>
          row.map((isActive, c) => (
            <div
              key={`${r}-${c}`}
              className={`aspect-square flex items-center justify-center font-[family-name:var(--font-inter)] text-lg uppercase ${
                isActive ? "border border-border bg-paper" : "bg-ink border border-ink"
              }`}
            >
              {isActive ? (
                <input
                  type="text"
                  maxLength={1}
                  title={`Cell ${r}-${c}`}
                  placeholder=" "
                  aria-label={`Crossword cell row ${r} column ${c}`}
                  value={grid[r][c]}
                  onChange={(e) => handleInput(r, c, e.target.value)}
                  className="w-full h-full text-center bg-transparent focus:outline-none focus:bg-accent/10 focus:text-accent font-bold"
                />
              ) : null}
            </div>
          ))
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="ui-text mb-2">Across</h4>
          <ol className="body-text text-sm space-y-1 list-decimal list-inside">
            <li>Global climate agreement city (6)</li>
            <li>Quantum computing unit (5)</li>
            <li>AI brain interface (abbr.) (3)</li>
          </ol>
        </div>
        <div>
          <h4 className="ui-text mb-2">Down</h4>
          <ol className="body-text text-sm space-y-1 list-decimal list-inside">
            <li>Greenhouse ___ (3)</li>
            <li>Renewable energy source (5)</li>
            <li>Editor&apos;s pick label (7)</li>
          </ol>
        </div>
      </div>
      <p className="caption-text mt-4 italic text-center text-ink-secondary">
        Select a cell to begin typing
      </p>
    </div>
  );
}
