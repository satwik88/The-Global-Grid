import type { Metadata } from "next";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { SudokuGame } from "@/components/games/SudokuGame";
import {
  RiddlesSection,
  BrainTeasersSection,
  CrosswordSection,
} from "@/components/games/PuzzlesSection";

export const metadata: Metadata = {
  title: "Games & Diversions",
  description: "Sudoku, crosswords, riddles, and brain teasers — The Global Grid",
};

export default function GamesPage() {
  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <header className="text-center mb-10">
          <h1 className="headline-xl">Games & Diversions</h1>
          <p className="feature-text text-ink-secondary mt-3 italic">
            Puzzles, pastimes, and pleasant distractions
          </p>
          <hr className="rule-double mt-6 max-w-xs mx-auto" />
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <SudokuGame />
          <div className="space-y-8">
            <RiddlesSection />
            <BrainTeasersSection />
          </div>
        </div>

        <div className="mt-8">
          <CrosswordSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
