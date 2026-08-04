"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error Boundary Caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-paper text-ink p-4 text-center">
      <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-bold mb-4">
        Something went wrong!
      </h2>
      <p className="ui-text text-sm text-ink-secondary mb-6 max-w-md">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-ink text-paper font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
