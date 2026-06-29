"use client";

import { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface BookmarkButtonProps {
  article: {
    slug: string;
    headline: string;
    section: string;
    image?: string;
    heroImage?: string;
    deck?: string;
    publishedAt: string;
    readingTime?: number;
    author?: { name: string };
  };
  className?: string;
}

export function BookmarkButton({ article, className = "" }: BookmarkButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("gg-saved-articles");
      if (saved) {
        const articles = JSON.parse(saved);
        if (articles.some((a: any) => a.slug === article.slug)) {
          setIsSaved(true);
        }
      }
    } catch (e) {
      console.error("Failed to read bookmarks", e);
    }
  }, [article.slug]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    try {
      const saved = localStorage.getItem("gg-saved-articles");
      let articles = saved ? JSON.parse(saved) : [];
      
      if (isSaved) {
        articles = articles.filter((a: any) => a.slug !== article.slug);
        setIsSaved(false);
      } else {
        articles.push(article);
        setIsSaved(true);
      }
      
      localStorage.setItem("gg-saved-articles", JSON.stringify(articles));
      window.dispatchEvent(new Event("gg-bookmarks-updated"));
    } catch (e) {
      console.error("Failed to save bookmark", e);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleBookmark}
      className={`p-1.5 rounded-full bg-paper/80 backdrop-blur-sm border border-border shadow-sm text-ink-secondary hover:text-accent transition-all duration-300 ${
        isAnimating ? "scale-125" : "scale-100"
      } ${className}`}
      aria-label={isSaved ? "Remove from Reading List" : "Save to Reading List"}
      title={isSaved ? "Remove from Reading List" : "Save to Reading List"}
    >
      {isSaved ? <BookmarkCheck size={18} className="text-accent" /> : <Bookmark size={18} />}
    </button>
  );
}
