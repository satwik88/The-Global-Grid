"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { searchArticles, trendingSearches } from "@/lib/content/articles";
import { getSectionLabel } from "@/lib/sections";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(searchArticles(initialQuery));

  useEffect(() => {
    setResults(searchArticles(query));
  }, [query]);

  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-3xl px-4 py-8 md:px-8">
        <header className="text-center mb-10">
          <h1 className="headline-lg">Search the Archive</h1>
          <hr className="rule-thin mt-4 max-w-xs mx-auto" />
        </header>

        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-secondary"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search headlines, topics, authors..."
            className="w-full border border-border bg-transparent py-3 pl-12 pr-4 body-text focus:outline-none focus:border-accent transition-colors"
            autoFocus
          />
        </div>

        {!query && (
          <div className="mb-8">
            <h2 className="ui-text mb-3">Trending Searches</h2>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="ui-text text-[0.625rem] border border-border px-3 py-1 hover:bg-ink hover:text-paper transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          {query && (
            <p className="caption-text mb-4">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}

          <ul className="space-y-0">
            {results.map((article) => (
              <li key={article.slug} className="border-b border-border py-4">
                <Link href={`/article/${article.slug}`} className="group block">
                  <span className="ui-text text-accent text-[0.625rem]">
                    {getSectionLabel(article.section)}
                  </span>
                  <h2 className="headline-md mt-1 group-hover:text-accent transition-colors">
                    {article.headline}
                  </h2>
                  <p className="body-text text-sm text-ink-secondary mt-1 line-clamp-2">
                    {article.deck}
                  </p>
                  <p className="caption-text mt-2">
                    By {article.author.name} · {article.readingTime} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {query && results.length === 0 && (
            <p className="feature-text text-center text-ink-secondary py-12">
              No articles found. Try a different search term.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}
