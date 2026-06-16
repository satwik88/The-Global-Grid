export function generateSudoku(difficulty: "easy" | "medium" | "hard"): {
  puzzle: number[][];
  solution: number[][];
} {
  const solution = createCompleteGrid();
  const puzzle = solution.map((row) => [...row]);
  const cellsToRemove = { easy: 35, medium: 45, hard: 55 }[difficulty];

  let removed = 0;
  while (removed < cellsToRemove) {
    const r = Math.floor(Math.random() * 9);
    const c = Math.floor(Math.random() * 9);
    if (puzzle[r][c] !== 0) {
      puzzle[r][c] = 0;
      removed++;
    }
  }

  return { puzzle, solution };
}

function createCompleteGrid(): number[][] {
  const grid: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
  fillGrid(grid);
  return grid;
}

function fillGrid(grid: number[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (const num of nums) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (fillGrid(grid)) return true;
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(grid: number[][], row: number, col: number, num: number): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num || grid[i][col] === num) return false;
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[boxRow + i][boxCol + j] === num) return false;
    }
  }
  return true;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function validateSudoku(grid: number[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const row = new Set<number>();
    const col = new Set<number>();
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== 0) {
        if (row.has(grid[i][j])) return false;
        row.add(grid[i][j]);
      }
      if (grid[j][i] !== 0) {
        if (col.has(grid[j][i])) return false;
        col.add(grid[j][i]);
      }
    }
  }
  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const seen = new Set<number>();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const val = grid[boxRow + i][boxCol + j];
          if (val !== 0) {
            if (seen.has(val)) return false;
            seen.add(val);
          }
        }
      }
    }
  }
  return true;
}

export function isSudokuComplete(grid: number[][]): boolean {
  return grid.every((row) => row.every((cell) => cell !== 0)) && validateSudoku(grid);
}

export const CROSSWORD_CLUES = {
  across: [
    { number: 1, clue: "Global climate agreement city", answer: "GENEVA", row: 0, col: 0 },
    { number: 4, clue: "AI brain interface (abbr.)", answer: "BCI", row: 2, col: 0 },
    { number: 5, clue: "Quantum computing unit", answer: "QUBIT", row: 4, col: 0 },
  ],
  down: [
    { number: 1, clue: "Greenhouse ___", answer: "GAS", row: 0, col: 0 },
    { number: 2, clue: "Renewable energy source", answer: "SOLAR", row: 0, col: 2 },
    { number: 3, clue: "Editor's pick label", answer: "FEATURE", row: 0, col: 4 },
  ],
};
