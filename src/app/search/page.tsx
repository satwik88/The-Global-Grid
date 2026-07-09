import { Suspense } from "react";
import { Masthead } from "@/components/newspaper/Masthead";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { fetchSearch } from "@/lib/services/newsService";
import type { Article } from "@/lib/types";

export const metadata = {
  title: "Search Results | The Global Grid",
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

async function SearchResults({ query }: { query: string }) {
  let articles: Article[] = [];
  
  if (query) {
    articles = await fetchSearch(query);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <header className="mb-10 pb-6 border-b border-border">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight text-ink mb-2">
          {query ? `Results for: "${query}"` : "Search"}
        </h1>
        <p className="ui-text text-ink-secondary">
          {query ? `${articles.length} article${articles.length !== 1 ? 's' : ''} found` : "Enter a search query to find articles."}
        </p>
      </header>

      {query && articles.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-ink-secondary italic">
            No articles found for &apos;{query}&apos;
          </p>
          <p className="mt-4 ui-text text-ink/60">
            Try adjusting your search terms or checking for typos.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="standard" />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
      <Masthead showNav={true} />
      <main>
        <Suspense fallback={<div className="py-20 text-center ui-text">Searching...</div>}>
          <SearchResults query={query} />
        </Suspense>
      </main>
    </div>
  );
}
