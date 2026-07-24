"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

interface NewspaperContextType {
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  flipMode: boolean;
  setFlipMode: (enabled: boolean) => void;
  printMode: boolean;
  setPrintMode: (enabled: boolean) => void;
  editionType: "daily" | "weekend";
}

const NewspaperContext = createContext<NewspaperContextType | null>(null);

export function NewspaperProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [flipMode, setFlipMode] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const [editionType, setEditionType] = useState<"daily" | "weekend">("daily");

  useEffect(() => {
    const stored = localStorage.getItem("tgg-bookmarks");
    if (stored) setBookmarks(JSON.parse(stored));
    const day = new Date().getDay();
    setEditionType(day === 0 || day === 6 ? "weekend" : "daily");
  }, []);

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem("tgg-bookmarks", JSON.stringify(next));
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  return (
    <NewspaperContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        flipMode,
        setFlipMode,
        printMode,
        setPrintMode,
        editionType,
      }}
    >
      {children}
    </NewspaperContext.Provider>
  );
}


