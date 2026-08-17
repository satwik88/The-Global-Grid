"use client";

import { useState, useCallback, useEffect } from "react";
import type { TriviaQuestion } from "@/lib/trivia/types";

type GameState = "start" | "playing" | "finished";
type Difficulty = "easy" | "medium" | "hard" | "mixed";

export function TriviaGame() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("mixed");
  
  // Track selected answer for the current question
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const fetchQuestions = async (diff: Difficulty) => {
    setLoading(true);
    setGameState("start");
    try {
      const diffQuery = diff === "mixed" ? "" : `&difficulty=${diff}`;
      const res = await fetch(`/api/trivia?amount=10${diffQuery}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setQuestions(data);
      setCurrentIdx(0);
      setScore(0);
      setSelectedAnswer(null);
      setGameState("playing");
    } catch (err) {
      console.error(err);
      alert("Failed to load trivia questions.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer !== null) return; // prevent multiple clicks
    setSelectedAnswer(answer);
    
    if (answer === questions[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      if (currentIdx + 1 < questions.length) {
        setCurrentIdx(i => i + 1);
        setSelectedAnswer(null);
      } else {
        setGameState("finished");
      }
    }, 1500);
  };

  return (
    <div className="border border-border p-6 bg-paper shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="headline-md">Trivia</h3>
        <div className="flex items-center gap-2">
          {(["mixed", "easy", "medium", "hard"] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                if (gameState === "playing") {
                  fetchQuestions(d);
                }
              }}
              className={`ui-text px-3 py-1 border border-border transition-colors ${
                difficulty === d ? "bg-ink text-paper" : "hover:text-accent"
              }`}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {gameState === "start" && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="feature-text text-ink-secondary mb-6 italic">
            Test your knowledge across various categories.
          </p>
          <button
            onClick={() => fetchQuestions(difficulty)}
            disabled={loading}
            className="ui-text px-6 py-3 border-[2px] border-ink bg-ink text-paper hover:bg-paper hover:text-ink transition-colors font-bold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Start Game"}
          </button>
        </div>
      )}

      {gameState === "playing" && questions.length > 0 && (
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center text-sm font-bold tracking-widest text-ink-secondary uppercase">
            <span>{questions[currentIdx].category}</span>
            <span>{currentIdx + 1} / {questions.length}</span>
          </div>
          
          <h4 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-ink">
            {questions[currentIdx].question}
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {questions[currentIdx].allAnswers.map((answer, i) => {
              const isSelected = selectedAnswer === answer;
              const isCorrect = answer === questions[currentIdx].correctAnswer;
              
              let buttonStyle = "border-border text-ink hover:border-ink hover:bg-ink/5";
              
              if (selectedAnswer !== null) {
                if (isCorrect) {
                  buttonStyle = "border-green-600 bg-green-600 text-white";
                } else if (isSelected && !isCorrect) {
                  buttonStyle = "border-red-600 bg-red-600 text-white";
                } else {
                  buttonStyle = "border-border text-ink-secondary opacity-50";
                }
              }

              return (
                <button
                  key={i}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleAnswerClick(answer)}
                  className={`ui-text p-4 border transition-all text-left ${buttonStyle}`}
                >
                  {answer}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {gameState === "finished" && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h4 className="headline-lg mb-2">Game Over</h4>
          <p className="text-2xl font-[family-name:var(--font-cormorant)] mb-6 text-ink-secondary">
            You scored <span className="font-bold text-ink">{score}</span> out of {questions.length}
          </p>
          <button
            onClick={() => fetchQuestions(difficulty)}
            className="ui-text px-6 py-3 border-[2px] border-ink bg-ink text-paper hover:bg-paper hover:text-ink transition-colors font-bold"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
