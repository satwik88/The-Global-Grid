import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { IntelligenceCard } from "@/components/newspaper/IntelligenceCard";
import { fetchLiveNewsFeed } from "@/lib/services/newsService";
import { getSectionLabel } from "@/lib/sections";
import { Zap } from "lucide-react";

export const dynamic = 'force-dynamic';

const VALID_SECTIONS = [
  "world",
  "business",
  "technology",
  "ai",
  "science",
  "culture",
  "travel",
  "opinion",
  "grid-intelligence",
];

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return VALID_SECTIONS.map((section) => ({ slug: section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${getSectionLabel(slug)} — The Global Grid`,
    description: `${getSectionLabel(slug)} section — The Global Grid`,
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  if (!VALID_SECTIONS.includes(slug)) notFound();

  const isGridIntelligence = slug === "grid-intelligence";

  const sectionArticles = await fetchLiveNewsFeed(slug);
  const featured = sectionArticles[0];
  const rest = sectionArticles.slice(1);

  // ─── Grid Intelligence — full intelligence card layout ───────────────────
  if (isGridIntelligence) {
    return (
      <>
        <Masthead />
        <main
          className="min-h-screen py-10 px-4 md:px-8 bg-[linear-gradient(180deg,#0a0806_0%,#100e0b_60%,#0a0806_100%)]"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <header className="mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Zap size={20} className="text-[#c8a96e]" />
                <span
                  className="text-xs font-bold uppercase tracking-[0.25em] text-[#c8a96e]"
                >
                  The Global Grid
                </span>
              </div>
              <h1
                className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold tracking-tight text-[#f0ead6]"
              >
                Grid Intelligence
              </h1>
              <p className="mt-2 text-sm text-[#6b6152]">
                Curated strategic intelligence and geopolitical analysis.
              </p>
            </header>

            {/* Hero card — full width */}
            {featured && (
              <div className="mb-4">
                <IntelligenceCard article={featured} size="large" />
              </div>
            )}

            {/* Card grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((article) => (
                  <IntelligenceCard key={article.slug} article={article} />
                ))}
              </div>
            )}

            {sectionArticles.length === 0 && (
              <p
                className="text-center py-20 text-sm tracking-widest uppercase text-[#6b6152]"
              >
                No intelligence dispatches available.
              </p>
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ─── All other sections — standard newspaper layout ───────────────────────
  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <header className="text-center mb-10">
          <h1 className="headline-xl">{getSectionLabel(slug)}</h1>
          <hr className="rule-double mt-6 max-w-xs mx-auto" />
        </header>

        {featured && (
          <section className="mb-12">
            <ArticleCard article={featured} variant="featured" />
          </section>
        )}

        <hr className="rule-thin mb-8" />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="standard" />
          ))}
        </section>

        {sectionArticles.length === 0 && (
          <p className="feature-text text-center text-ink-secondary py-12">
            No articles in this section yet.
          </p>
        )}
      </main>

      <Footer />
    </>
  );
}
