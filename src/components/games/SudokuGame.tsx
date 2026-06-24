"use client";

import { useState, useCallback, useEffect } from "react";
import { generateSudoku, isSudokuComplete, validateSudoku } from "@/lib/games/sudoku";
import { RotateCcw, Check, Pencil, Eraser } from "lucide-react";

type Difficulty = "easy" | "medium" | "hard";

export function SudokuGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [puzzle, setPuzzle] = useState<number[][]>([]);
  const [solution, setSolution] = useState<number[][]>([]);
  const [userGrid, setUserGrid] = useState<number[][]>([]);
  const [pencilGrid, setPencilGrid] = useState<number[][][]>(
    Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => [] as number[]))
  );
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [pencilMode, setPencilMode] = useState(false);
  const [fixed, setFixed] = useState<boolean[][]>([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Set<string>>(new Set());

  const newGame = useCallback((diff: Difficulty = difficulty) => {
    const { puzzle: p, solution: s } = generateSudoku(diff);
    setPuzzle(p);
    setSolution(s);
    setUserGrid(p.map((row) => [...row]));
    setFixed(p.map((row) => row.map((cell) => cell !== 0)));
    setPencilGrid(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => [] as number[])));
    setSelected(null);
    setMessage("");
    setErrors(new Set());
  }, [difficulty]);

  useEffect(() => {
    newGame();
  }, []); 

  const handleCellClick = (row: number, col: number) => {
    if (fixed[row][col]) return;
    setSelected([row, col]);
    setMessage("");
  };

  const handleNumberInput = (num: number) => {
    if (!selected) return;
    const [row, col] = selected;
    if (fixed[row][col]) return;

    if (pencilMode) {
      setPencilGrid((prev) => {
        const next = prev.map((r) => r.map((c) => [...c]));
        const cell = next[row][col];
        const idx = cell.indexOf(num);
        if (idx >= 0) cell.splice(idx, 1);
        else cell.push(num);
        cell.sort();
        return next;
      });
      return;
    }

    setUserGrid((prev) => {
      const next = prev.map((r) => [...r]);
      next[row][col] = num;
      return next;
    });
    setPencilGrid((prev) => {
      const next = prev.map((r) => r.map((c) => [...c]));
      next[row][col] = [];
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selected) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9) handleNumberInput(num);
      if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") {
        const [row, col] = selected;
        if (!fixed[row][col]) {
          setUserGrid((prev) => {
            const next = prev.map((r) => [...r]);
            next[row][col] = 0;
            return next;
          });
        }
      }
      const [row, col] = selected;
      if (e.key === "ArrowUp" && row > 0) setSelected([row - 1, col]);
      if (e.key === "ArrowDown" && row < 8) setSelected([row + 1, col]);
      if (e.key === "ArrowLeft" && col > 0) setSelected([row, col - 1]);
      if (e.key === "ArrowRight" && col < 8) setSelected([row, col + 1]);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, fixed, pencilMode]);

  const checkSolution = () => {
    const newErrors = new Set<string>();
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (userGrid[r][c] !== 0 && userGrid[r][c] !== solution[r][c]) {
          newErrors.add(`${r}-${c}`);
        }
      }
    }
    setErrors(newErrors);

    if (isSudokuComplete(userGrid)) {
      setMessage("Congratulations! Puzzle solved correctly.");
    } else if (newErrors.size === 0 && userGrid.some((r) => r.some((c) => c === 0))) {
      setMessage("No errors so far. Keep going!");
    } else if (newErrors.size > 0) {
      setMessage(`${newErrors.size} error(s) found.`);
    } else if (!validateSudoku(userGrid)) {
      setMessage("Some numbers conflict. Check rows, columns, and boxes.");
    }
  };

  if (userGrid.length === 0) return null;

  return (
    <div className="border border-border p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="headline-md">Sudoku</h3>
        <div className="flex items-center gap-2">
          {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                newGame(d);
              }}
              className={`ui-text px-3 py-1 border border-border transition-colors ${
                difficulty === d ? "bg-ink text-paper" : "hover:text-accent"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-9 gap-0 max-w-[400px] w-full mx-auto border-[3px] border-border bg-paper shadow-sm">
        {userGrid.map((row, r) =>
          row.map((cell, c) => {
            const isSelected = selected?.[0] === r && selected?.[1] === c;
            const isError = errors.has(`${r}-${c}`);
            const pencils = pencilGrid[r][c];
            const boxRight = c === 2 || c === 5;
            const boxBottom = r === 2 || r === 5;
            const isFixed = fixed[r][c];

            return (
              <div
                key={`${r}-${c}`}
                onClick={() => handleCellClick(r, c)}
                className={`flex items-center justify-center border-border aspect-square text-lg sm:text-xl font-[family-name:var(--font-cormorant)] cursor-pointer transition-colors select-none
                  ${isFixed ? "font-bold text-ink" : "text-ink-secondary"}
                  ${isSelected ? "bg-ink/10" : "hover:bg-ink/5"}
                  ${isError ? "text-accent bg-accent/10 font-bold" : ""}
                  ${boxRight ? "border-r-[3px]" : "border-r"}
                  ${boxBottom ? "border-b-[3px]" : "border-b"}
                `}
              >
                {cell !== 0 ? (
                  cell
                ) : pencils.length > 0 ? (
                  <span className="pencil grid grid-cols-3 gap-0 text-[0.5rem] leading-none p-0.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <span key={n} className="text-center">
                        {pencils.includes(n) ? n : ""}
                      </span>
                    ))}
                  </span>
                ) : null}
              </div>
            );
          })
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <button
            key={n}
            onClick={() => handleNumberInput(n)}
            className="w-10 h-10 border border-border ui-text hover:bg-ink hover:text-paper transition-colors"
          >
            {n}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
        <button
          onClick={() => setPencilMode(!pencilMode)}
          className={`flex items-center gap-2 ui-text px-4 py-2 border border-border transition-colors ${
            pencilMode ? "bg-ink text-paper" : "hover:text-accent"
          }`}
        >
          <Pencil size={14} />
          Pencil
        </button>
        <button
          onClick={checkSolution}
          className="flex items-center gap-2 ui-text px-4 py-2 border border-border hover:text-accent transition-colors"
        >
          <Check size={14} />
          Check
        </button>
        <button
          onClick={() => newGame()}
          className="flex items-center gap-2 ui-text px-4 py-2 border border-border hover:text-accent transition-colors"
        >
          <RotateCcw size={14} />
          New Puzzle
        </button>
        <button
          onClick={() => {
            if (selected) {
              const [r, c] = selected;
              if (!fixed[r][c]) {
                setUserGrid((prev) => {
                  const next = prev.map((row) => [...row]);
                  next[r][c] = 0;
                  return next;
                });
                setPencilGrid((prev) => {
                  const next = prev.map((row) => row.map((cell) => [...cell]));
                  next[r][c] = [];
                  return next;
                });
              }
            }
          }}
          className="flex items-center gap-2 ui-text px-4 py-2 border border-border hover:text-accent transition-colors"
        >
          <Eraser size={14} />
          Erase
        </button>
      </div>

      {message && (
        <p className="caption-text text-center mt-4 text-accent">{message}</p>
      )}
    </div>
  );
}
