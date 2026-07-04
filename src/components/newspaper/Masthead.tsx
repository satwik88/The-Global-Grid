"use client";

import Link from "next/link";
import { formatEditionDate, getEditionNumber, isWeekendEdition } from "@/lib/utils";
import { NAV_SECTIONS } from "@/lib/sections";
import { GlobalPulse } from "./GlobalPulse";
import { GlobeSeal } from "./GlobeSeal";
import { IndiaMegaMenu } from "./IndiaMegaMenu";
import { SearchWidget } from "./SearchWidget";

import { useTheme } from "@/lib/context/ThemeContext";
import { RefreshCcw, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface MastheadProps {
  showNav?: boolean;
  locations?: string[];
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[100px] h-6" />; 
  }

  return (
    <AnimatedThemeToggler
      theme={theme}
      onThemeChange={(newTheme) => {
        setTheme(newTheme);
        sessionStorage.setItem("theme", newTheme);
      }}
      className="p-1 flex items-center gap-2 ui-text text-ink-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
      aria-label={theme === "light" ? "Switch to Night Edition (dark mode)" : "Switch to Day Edition (light mode)"}
      title={theme === "light" ? "Switch to Night Edition" : "Switch to Day Edition"}
    >
      {theme === "dark" ? <Sun size={14} className="pointer-events-none" /> : <Moon size={14} className="pointer-events-none" />}
      <span className="hidden sm:inline select-none pointer-events-none">
        {theme === "light" ? "Day Edition" : "Night Edition"}
      </span>
    </AnimatedThemeToggler>
  );
}

function RefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const router = useRouter();

  const handleRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setErrorState(false);

    try {
      window.dispatchEvent(new Event("global-grid-refresh"));
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.refresh();
    } catch (err) {
      console.error("Failed to refresh", err);
      setErrorState(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <button
      onClick={handleRefresh}
      className={`p-1 transition-colors duration-300 flex items-center gap-2 ui-text ${
        errorState ? "text-accent" : "text-ink-secondary hover:text-accent"
      }`}
      aria-label="Refresh content"
      title={errorState ? "Couldn't refresh, try again" : "Refresh content"}
    >
      <RefreshCcw
        size={14}
        aria-hidden="true"
        className={isRefreshing && !errorState ? "animate-spin" : ""}
      />
      <span className="hidden sm:inline">{errorState ? "Error" : "Refresh"}</span>
    </button>
  );
}

export function Masthead({ showNav = true, locations }: MastheadProps) {
  const date = new Date();
  const editionNumber = getEditionNumber(date);
  const editionDate = formatEditionDate(date);
  const weekend = isWeekendEdition(date);

  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-8 relative">

        <div className="absolute top-6 right-4 md:right-8 no-print flex items-center gap-4 md:gap-6">
          <RefreshButton />
          <ThemeToggle />
        </div>

        <hr className="rule-thin mb-4 mt-6 sm:mt-0" />

        <div className="text-center">
          <Link href="/" className="group inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-5 text-left">
            <GlobeSeal className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-ink group-hover:text-accent transition-colors duration-300 shrink-0" />
            <div className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-6xl whitespace-nowrap font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-300">
              THE GLOBAL GRID
            </div>
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
            <ul className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-x-1 md:gap-y-2 ui-text overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1 md:px-0">
              {NAV_SECTIONS.map((section, i) => {
                if (section.slug === "india") {
                  return (
                    <li key={section.slug} className="flex items-center shrink-0">
                      {i > 0 && <span className="mx-2 text-ink-secondary select-none">|</span>}
                      <IndiaMegaMenu />
                    </li>
                  );
                }
                return (
                  <li key={section.slug + section.href} className="flex items-center shrink-0">
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
                );
              })}
              <li className="flex items-center shrink-0">
                <span className="mx-2 text-ink-secondary select-none">|</span>
                <Link
                  href="/world-map"
                  className="hover:text-accent transition-colors duration-200 px-1"
                >
                  WORLD MAP
                </Link>
              </li>
              <li className="flex items-center shrink-0 ml-4">
                <SearchWidget />
              </li>
            </ul>
          </nav>
        )}

        <hr className="rule-thin mt-4" />
      </div>
      <GlobalPulse locations={locations} />
    </header>
  );
}
