"use client";

import Link from "next/link";
import { Search, Bookmark, Printer, BookOpen } from "lucide-react";

interface FooterProps {
  showTools?: boolean;
}

export function Footer({ showTools = true }: FooterProps) {
  return (
    <footer className="border-t border-border mt-12 no-print">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <hr className="rule-double mb-6" />

        {showTools && (
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 ui-text">
            <Link href="/search" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Search size={14} />
              Search
            </Link>
            <Link href="/bookmarks" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Bookmark size={14} />
              Bookmarks
            </Link>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
            >
              <Printer size={14} />
              Print Edition
            </button>
            <Link href="/archive" className="flex items-center gap-2 hover:text-accent transition-colors">
              <BookOpen size={14} />
              Archive
            </Link>
          </div>
        )}

        <div className="text-center">
          <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink">
            THE GLOBAL GRID
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-ink-secondary italic mt-1">
            The Daily Paper for the Modern World
          </p>
          <p className="caption-text mt-4">
            © {new Date().getFullYear()} The Global Grid. All rights reserved.
          </p>
        </div>

        <hr className="rule-thin mt-6" />
      </div>
    </footer>
  );
}
