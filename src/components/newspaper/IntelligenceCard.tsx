import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import type { Article } from "@/lib/types";
import { getSectionLabel } from "@/lib/sections";
import { Clock, ExternalLink } from "lucide-react";

interface IntelligenceCardProps {
  article: Article;
  size?: "default" | "large";
}

export function IntelligenceCard({ article, size = "default" }: IntelligenceCardProps) {
  const isLarge = size === "large";

  // Clamp deck to a 2-line summary
  const summary = article.deck
    ? article.deck.length > 160
      ? article.deck.slice(0, 157) + "…"
      : article.deck
    : "";

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block relative overflow-hidden rounded-sm bg-[#111] border border-white/10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent no-underline"
    >
      {/* Image Area — fills top ~65% */}
      <div
        className={`relative w-full overflow-hidden bg-[linear-gradient(135deg,#1a1410_0%,#0f0d0a_50%,#1a1207_100%)] ${isLarge ? "aspect-[16/8]" : "aspect-[16/10]"}`}
      >
        <SafeImage
          src={article.heroImage || article.image || ""}
          alt={article.headline}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Bottom gradient overlay — bleeds into text area */}
        <div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_30%,rgba(10,8,6,0.6)_70%,rgba(10,8,6,0.95)_100%)]"
        />

        {/* Breaking / Section tag badge — top left */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {article.isBreaking && (
            <span
              className="px-2 py-0.5 text-[0.55rem] font-black uppercase tracking-widest rounded-sm bg-[#c8102e] text-[#fff]"
            >
              Breaking
            </span>
          )}
          <span
            className="px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-widest rounded-sm bg-[rgba(200,169,110,0.15)] text-[#c8a96e] border border-[rgba(200,169,110,0.3)]"
          >
            {getSectionLabel(article.section)}
          </span>
        </div>
      </div>

      <div
        className="px-4 pt-3 pb-4 flex flex-col gap-2 bg-[#0f0d0a]"
      >
        <h3
          className={`font-[family-name:var(--font-playfair)] font-bold leading-snug group-hover:text-[#c8a96e] transition-colors duration-300 text-[#f0ead6] ${
            isLarge ? "text-xl" : "text-base"
          }`}
        >
          {article.headline}
        </h3>

        {summary && (
          <p
            className="text-xs leading-relaxed line-clamp-2 text-[#9a8e78]"
          >
            {summary}
          </p>
        )}

        <div
          className="flex items-center justify-between pt-2 border-t border-[rgba(255,255,255,0.08)]"
        >
          <span
            className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-widest font-bold text-[#6b6152]"
          >
            <Clock size={10} />
            {article.readingTime} min read
          </span>
          <span
            className="flex items-center gap-1 text-[0.6rem] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#c8a96e]"
          >
            Read Intel <ExternalLink size={10} />
          </span>
        </div>
      </div>
    </Link>
  );
}
