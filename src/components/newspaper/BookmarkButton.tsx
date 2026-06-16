"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useNewspaper } from "@/lib/context/newspaper-context";
import { getArticleBySlug } from "@/lib/content/articles";

export function BookmarkButton({ slug }: { slug: string }) {
  const { toggleBookmark, isBookmarked } = useNewspaper();

  return (
    <button
      onClick={() => toggleBookmark(slug)}
      className={`flex items-center gap-2 ui-text hover:text-accent transition-colors no-print ${
        isBookmarked(slug) ? "text-accent" : ""
      }`}
      aria-label={isBookmarked(slug) ? "Remove bookmark" : "Bookmark article"}
    >
      <Bookmark size={14} fill={isBookmarked(slug) ? "currentColor" : "none"} />
      {isBookmarked(slug) ? "Saved" : "Save"}
    </button>
  );
}

export function BookmarksList() {
  const { bookmarks } = useNewspaper();
  const articles = bookmarks
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);

  if (articles.length === 0) {
    return (
      <p className="feature-text text-ink-secondary text-center py-12">
        No saved articles yet. Bookmark stories as you read.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {articles.map((article) =>
        article ? (
          <li key={article.slug} className="border-b border-border pb-4">
            <Link href={`/article/${article.slug}`} className="group">
              <h3 className="headline-md group-hover:text-accent transition-colors">
                {article.headline}
              </h3>
              <p className="caption-text mt-1">
                By {article.author.name} · {article.readingTime} min read
              </p>
            </Link>
          </li>
        ) : null
      )}
    </ul>
  );
}
