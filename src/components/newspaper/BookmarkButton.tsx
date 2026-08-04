"use client";

import { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";

interface BookmarkButtonProps {
  article: {
    slug: string;
    headline: string;
    section: string;
    image?: string;
    heroImage?: string;
    thumbnailImage?: string;
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
  const { user } = useAuth();

  useEffect(() => {
    setMounted(true);
    if (!user) return;
    
    // Check local state or fetch? We rely on a gg-bookmarks-updated event or 
    // fetch `/api/articles/saved` to see if it's saved. But doing it per button is too much.
    // Ideally we fetch once in the Profile Dropdown and dispatch an event.
    // For now, let's fetch once when mounted.
    const checkSaved = async () => {
      try {
        const res = await fetch("/api/articles/saved");
        const data = await res.json();
        if (res.ok && data.articles) {
          if (data.articles.some((a: any) => a.article_url === article.slug)) {
            setIsSaved(true);
          } else {
            setIsSaved(false);
          }
        }
      } catch (e) {
        console.error("Failed to check saved status", e);
      }
    };
    checkSaved();

    const handleUpdate = () => checkSaved();
    window.addEventListener("gg-bookmarks-updated", handleUpdate);
    return () => window.removeEventListener("gg-bookmarks-updated", handleUpdate);
  }, [article.slug, user]);

  const toggleBookmark = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) return;

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    const previousState = isSaved;
    setIsSaved(!isSaved); // Optimistic UI update

    try {
      if (previousState) {
        await fetch("/api/articles/save", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ article_url: article.slug })
        });
      } else {
        await fetch("/api/articles/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            article_url: article.slug,
            article_title: article.headline,
            article_image_url: article.heroImage || article.image || article.thumbnailImage || null,
            article_source: article.section || "Unknown"
          })
        });
      }
      window.dispatchEvent(new Event("gg-bookmarks-updated"));
    } catch (e) {
      console.error("Failed to save bookmark", e);
      setIsSaved(previousState); // Revert on failure
    }
  };

  if (!mounted || !user) return null;

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
