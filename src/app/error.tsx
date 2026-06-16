"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="paper-texture min-h-screen flex flex-col items-center justify-center px-4">
      <div className="border-4 border-double border-ink p-12 bg-paper max-w-2xl mx-auto text-center rotate-[0.5deg]">
        <div className="uppercase tracking-[0.3em] font-[family-name:var(--font-inter)] text-sm font-bold text-ink-secondary mb-6 pb-4 border-b border-border">
          Editorial Retraction Notice
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-6xl font-bold tracking-tight text-ink mb-4">
          A Technical Issue
        </h1>

        <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-ink-secondary mb-6 leading-relaxed">
          Our editors encountered an unexpected difficulty retrieving this story. Our technical
          team has been notified.
        </p>

        {error.digest && (
          <p className="font-[family-name:var(--font-inter)] text-xs text-ink-secondary/60 mb-8 font-mono">
            Reference: {error.digest}
          </p>
        )}

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={reset}
            className="bg-ink text-paper px-8 py-3 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest hover:bg-accent transition-colors font-bold"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-ink text-ink px-8 py-3 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors font-bold"
          >
            Return to Front Page
          </Link>
        </div>

        <hr className="rule-thick mt-10" />
      </div>
    </div>
  );
}
