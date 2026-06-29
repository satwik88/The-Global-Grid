"use client";

import { useEffect, useState } from "react";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import type { Article } from "@/lib/types";
import { BookmarkMinus } from "lucide-react";

export default function ReadingListPage() {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [mounted, setMounted] = useState(false);

  const loadBookmarks = () => {
    try {
      const saved = localStorage.getItem("gg-saved-articles");
      if (saved) {
        setSavedArticles(JSON.parse(saved));
      } else {
        setSavedArticles([]);
      }
    } catch (e) {
      console.error("Failed to read bookmarks", e);
    }
  };

  useEffect(() => {
    setMounted(true);
    loadBookmarks();

    window.addEventListener("gg-bookmarks-updated", loadBookmarks);
    return () => {
      window.removeEventListener("gg-bookmarks-updated", loadBookmarks);
    };
  }, []);

  const removeArticle = (slug: string) => {
    const updated = savedArticles.filter(a => a.slug !== slug);
    setSavedArticles(updated);
    try {
      localStorage.setItem("gg-saved-articles", JSON.stringify(updated));
      window.dispatchEvent(new Event("gg-bookmarks-updated"));
    } catch (e) {
      console.error("Failed to update bookmarks", e);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
        <Masthead showNav={true} />
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-[50vh] flex items-center justify-center">
          <p className="ui-text text-ink-secondary">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
      <Masthead showNav={true} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-[60vh]">
        <header className="mb-10 pb-6 border-b border-border">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight text-ink mb-2">
            Reading List
          </h1>
          <p className="ui-text text-ink-secondary">
            {savedArticles.length} saved article{savedArticles.length !== 1 ? 's' : ''}
          </p>
        </header>

        {savedArticles.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-[family-name:var(--font-playfair)] text-2xl text-ink-secondary italic">
              Your reading list is empty
            </p>
            <p className="mt-4 ui-text text-ink/60">
              Click the bookmark icon on any article to save it for later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedArticles.map((article) => (
              <div key={article.slug} className="relative group">
                <div className="absolute top-2 left-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => removeArticle(article.slug)}
                    className="p-1.5 rounded-full bg-paper/90 border border-border shadow-sm text-accent hover:text-red-500 hover:border-red-500 transition-colors flex items-center gap-1 ui-text text-xs"
                    aria-label="Remove from reading list"
                    title="Remove from reading list"
                  >
                    <BookmarkMinus size={14} />
                    <span className="font-bold tracking-wider uppercase px-1">Remove</span>
                  </button>
                </div>
                <ArticleCard article={article} variant="standard" />
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
