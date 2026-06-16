import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { fetchLiveNewsFeed } from "@/lib/services/newsService";
import { getSectionLabel } from "@/lib/sections";

const VALID_SECTIONS = [
  "world",
  "business",
  "technology",
  "ai",
  "science",
  "culture",
  "travel",
  "opinion",
  "india",
  "grid-intelligence",
];

import { NAV_SECTIONS } from "@/lib/sections";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return VALID_SECTIONS.map((section) => ({ slug: section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: getSectionLabel(slug),
    description: `${getSectionLabel(slug)} — The Global Grid`,
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  if (!VALID_SECTIONS.includes(slug)) notFound();

  const sectionArticles = await fetchLiveNewsFeed(slug);
  const featured = sectionArticles[0];
  const rest = sectionArticles.slice(1);

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

        <section className="grid md:grid-cols-3 gap-8">
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
