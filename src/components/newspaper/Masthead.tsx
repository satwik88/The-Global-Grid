"use client";

import Link from "next/link";
import { formatEditionDate, getEditionNumber, isWeekendEdition } from "@/lib/utils";
import { NAV_SECTIONS } from "@/lib/sections";
import { GlobalPulse } from "./GlobalPulse";
import { useTheme } from "@/lib/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface MastheadProps {
  showNav?: boolean;
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6" />; // placeholder
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1 text-ink-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2 ui-text"
      aria-label={theme === "light" ? "Switch to Night Edition (dark mode)" : "Switch to Day Edition (light mode)"}
      title={theme === "light" ? "Switch to Night Edition" : "Switch to Day Edition"}
    >
      {theme === "light" ? (
        <>
          <Moon size={14} aria-hidden="true" />
          <span className="hidden sm:inline">Night Edition</span>
        </>
      ) : (
        <>
          <Sun size={14} aria-hidden="true" />
          <span className="hidden sm:inline">Day Edition</span>
        </>
      )}
    </button>
  );
}

export function Masthead({ showNav = true }: MastheadProps) {
  const date = new Date();
  const editionNumber = getEditionNumber(date);
  const editionDate = formatEditionDate(date);
  const weekend = isWeekendEdition(date);

  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-8 relative">
        
        {/* Top bar with Toggle */}
        <div className="absolute top-6 right-4 md:right-8 no-print">
          <ThemeToggle />
        </div>

        <hr className="rule-thin mb-4 mt-6 sm:mt-0" />

        <div className="text-center">
          <Link href="/" className="group inline-block">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-300">
              THE GLOBAL GRID
            </h1>
          </Link>
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-ink-secondary mt-1 italic">
            Connecting the World&apos;s Stories
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 ui-text">
          <span>{editionDate.toUpperCase()}</span>
          <span>
            {weekend ? "WEEKEND EDITION" : "DAILY EDITION"} · No. {editionNumber}
          </span>
        </div>

        <hr className="rule-double mt-4" />

        {showNav && (
          <nav className="mt-4 no-print" aria-label="Main sections">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 ui-text">
              {NAV_SECTIONS.map((section, i) => (
                <li key={section.slug + section.href} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2 text-ink-secondary select-none">|</span>
                  )}
                  <Link
                    href={section.href}
                    className="hover:text-accent transition-colors duration-200 px-1"
                  >
                    {section.label.toUpperCase()}
                  </Link>
                </li>
              ))}
              <li className="flex items-center">
                <span className="mx-2 text-ink-secondary select-none">|</span>
                <Link
                  href="/archive"
                  className="hover:text-accent transition-colors duration-200 px-1"
                >
                  ARCHIVE
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <hr className="rule-thin mt-4" />
      </div>
      
      <GlobalPulse />
    </header>
  );
}
