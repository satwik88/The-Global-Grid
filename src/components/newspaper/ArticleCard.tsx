import Link from "next/link";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import type { Article } from "@/lib/types";
import { getSectionLabel } from "@/lib/sections";

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "standard" | "compact";
}

export function ArticleCard({ article, variant = "standard" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <article className="group relative">
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
      <article className="group border-b border-border pb-4 mb-4 last:border-0">
        <Link href={`/article/${article.slug}`} className="block">
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
    <article className="group relative">
      <div className="relative aspect-[3/2] mb-3 overflow-hidden">
        <SafeImage
          src={article.thumbnailImage || article.image || ""}
          alt={article.headline}
          fill
          className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <span className="ui-text text-accent text-[0.625rem] flex items-center gap-2">
        {article.isBreaking && <span className="bg-accent text-paper px-1 py-0.5 font-bold uppercase tracking-widest text-[0.55rem]">Breaking</span>}
        {getSectionLabel(article.section)}
      </span>
      <h3 className="headline-md mt-1 group-hover:text-accent transition-colors duration-300">
        <Link href={`/article/${article.slug}`} className="after:absolute after:inset-0">
          {article.headline}
        </Link>
      </h3>
      <p className="body-text text-sm mt-2 text-ink-secondary line-clamp-3 text-justify-print">
        {article.deck}
      </p>
      <div className="caption-text mt-2 hover:text-accent transition-colors relative z-10">
        <Link href={`/author/${article.author.slug}`}>By {article.author.name}</Link> · {article.readingTime} min
        {article.updatedAt && <span className="text-accent ml-2">· {article.updatedAt}</span>}
      </div>
    </article>
  );
}
