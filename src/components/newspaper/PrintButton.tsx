"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      aria-label="Download Today's Edition as PDF"
      className="no-print bg-ink text-paper px-6 py-2 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-accent transition-colors font-bold border border-ink ml-auto"
    >
      Download Today&apos;s Edition (PDF)
    </button>
  );
}
