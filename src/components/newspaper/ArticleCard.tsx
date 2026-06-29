import Link from "next/link";

import { SafeImage } from "@/components/ui/SafeImage";
import type { Article } from "@/lib/types";
import { getSectionLabel } from "@/lib/sections";
import { BookmarkButton } from "./BookmarkButton";
import { CardShareButton } from "./CardShareButton";

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "standard" | "compact";
}

export function ArticleCard({ article, variant = "standard" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <article className="group relative">
        <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
          <CardShareButton url={`/article/${article.slug}`} />
          <BookmarkButton article={article} />
        </div>
        <div className="relative aspect-[16/9] mb-4 overflow-hidden">
          <SafeImage
            src={article.heroImage || article.image || ""}
            alt={article.headline}
            fill
            className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
        </div>
        <span className="ui-text text-accent flex items-center gap-2">
          {article.isBreaking && <span className="bg-accent text-paper px-1.5 py-0.5 text-[0.6rem] font-bold tracking-widest uppercase">Breaking</span>}
          {getSectionLabel(article.section)}
        </span>
        <h2 className="headline-lg mt-2 group-hover:text-accent transition-colors duration-300">
          <Link href={`/article/${article.slug}`} className="after:absolute after:inset-0">
            {article.headline}
          </Link>
        </h2>
        <p className="feature-text mt-3 text-ink-secondary text-justify-print">{article.deck}</p>
        <div className="flex items-center gap-3 mt-4 caption-text relative z-10">
          <span className="hover:text-accent transition-colors">
            <Link href={`/author/${article.author.slug}`}>By {article.author.name}</Link>
          </span>
          <span>·</span>
          <span>{article.readingTime} min read</span>
          {article.updatedAt && (
            <>
              <span>·</span>
              <span className="text-accent">{article.updatedAt}</span>
            </>
          )}
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group border-b border-border pb-4 mb-4 last:border-0 relative">
        <div className="absolute top-0 right-0 z-20 flex items-center gap-1">
          <CardShareButton url={`/article/${article.slug}`} className="!p-1 scale-90" />
          <BookmarkButton article={article} className="!p-1 scale-90" />
        </div>
        <Link href={`/article/${article.slug}`} className="block pr-16">
          <span className="ui-text text-accent text-[0.625rem] flex items-center gap-2">
            {article.isBreaking && <span className="text-[0.55rem] font-bold bg-accent text-paper px-1 py-0.5 uppercase tracking-widest">Breaking</span>}
            {getSectionLabel(article.section)}
          </span>
          <h3 className="headline-md mt-1 group-hover:text-accent transition-colors duration-300">
            {article.headline}
          </h3>
          <p className="caption-text mt-1 line-clamp-2 text-justify-print">{article.deck}</p>
          {article.updatedAt && <p className="ui-text text-[0.6rem] text-accent mt-2">{article.updatedAt}</p>}
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex flex-col h-full bg-paper relative">
      <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
        <CardShareButton url={`/article/${article.slug}`} />
        <BookmarkButton article={article} />
      </div>
      {(article.thumbnailImage || article.image) && (
        <div className="relative aspect-[3/2] mb-4 overflow-hidden flex-shrink-0">
          <SafeImage
            src={article.thumbnailImage || article.image || ""}
            alt={article.headline}
            fill
            className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
        </div>
      )}
      <span className="ui-text text-accent text-[0.625rem] flex items-center gap-2">
        {article.isBreaking && <span className="bg-accent text-paper px-1 py-0.5 font-bold uppercase tracking-widest text-[0.55rem]">Breaking</span>}
        {getSectionLabel(article.section)}
      </span>
      <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight mt-2 group-hover:text-accent transition-colors duration-300">
        <Link href={`/article/${article.slug}`} className="after:absolute after:inset-0">
          {article.headline}
        </Link>
      </h3>
      <div className="relative mt-3 flex-grow">
        <p className="font-[family-name:var(--font-inter)] text-base text-ink-secondary text-justify-print m-0 overflow-hidden line-clamp-3">
          {article.deck}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-paper to-transparent pointer-events-none" />
      </div>
      <div className="mt-3 text-accent font-bold tracking-widest uppercase text-xs z-10 relative">
        See More &rarr;
      </div>
      <div className="caption-text mt-4 text-ink-secondary relative z-10 border-t border-border pt-3">
        By {article.author.name} · {article.readingTime} min
        {article.updatedAt && <span className="text-accent ml-2">· {article.updatedAt}</span>}
      </div>
    </article>
  );
}
