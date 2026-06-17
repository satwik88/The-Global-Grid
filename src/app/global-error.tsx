/* eslint-disable react/forbid-dom-props */
"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-cormorant)] bg-paper min-h-screen flex flex-col items-center justify-center p-8 text-ink">
        <div className="border-4 border-double border-ink p-12 max-w-2xl text-center">
          <p className="uppercase tracking-[0.3em] text-xs font-[family-name:var(--font-inter)] text-ink-secondary mb-6 pb-6 border-b border-border">
            Critical Editorial Error
          </p>
          <h1 className="text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            The Press Has Stopped
          </h1>
          <p className="text-xl italic text-ink-secondary mb-8">
            A critical failure has occurred. The editorial system has been suspended temporarily.
          </p>
          <button
            onClick={reset}
            className="bg-ink text-paper px-8 py-3 border-none cursor-pointer font-[family-name:var(--font-inter)] uppercase tracking-[0.2em] text-xs font-bold hover:bg-accent transition-colors duration-300"
          >
            Restart the Presses
          </button>
        </div>
      </body>
    </html>
  );
}
