import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { archiveEditions, articles } from "@/lib/content/articles";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return archiveEditions.map((edition) => ({ id: edition.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const edition = archiveEditions.find((e) => e.id === id);
  
  if (!edition) return { title: "Edition Not Found" };

  return {
    title: `Edition ${edition.editionNumber} - The Global Grid`,
    description: `Read the archived edition of The Global Grid from ${edition.date}`,
  };
}

export default async function EditionPage({ params }: Props) {
  const { id } = await params;
  const edition = archiveEditions.find((e) => e.id === id);
  
  if (!edition) notFound();

  // Deterministic article selection seeded by edition id hash
  const seed = edition.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const editionArticles = [...articles].sort((a, b) =>
    (a.id.charCodeAt(0) + seed) % 13 - (b.id.charCodeAt(0) + seed) % 13
  ).slice(0, 10);
  const mainFeature = editionArticles[0];
  const secondaryFeatures = editionArticles.slice(1, 4);
  const otherNews = editionArticles.slice(4);

  const editionDate = new Date(edition.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-8">
        
        {/* Edition Header */}
        <header className="mb-12 border-b-4 border-ink pb-8 text-center">
          <div className="inline-block bg-ink text-paper px-6 py-2 mb-6">
            <span className="ui-text uppercase tracking-widest text-sm">
              Archived Edition No. {edition.editionNumber}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold tracking-tight text-ink mb-4">
            {editionDate}
          </h1>
          <p className="feature-text text-ink-secondary italic text-xl">
            {edition.type === "weekend" ? "The Weekend Edition" : "The Daily Edition"}
          </p>
        </header>

        {/* Edition Content Layout */}
        <div className="grid grid-cols-12 gap-8 relative">
          
          {/* Centerpiece (8 cols) */}
          <div className="col-span-12 lg:col-span-8 pr-0 lg:pr-8 lg:border-r border-border">
            {mainFeature && (
              <article className="mb-12 group">
                <div className="text-center mb-8">
                  <h2 className="headline-xl group-hover:text-accent transition-colors duration-300 mb-4">
                    <Link href={`/article/${mainFeature.slug}`}>
                      {edition.coverHeadline || mainFeature.headline}
                    </Link>
                  </h2>
                  <div className="flex items-center justify-center gap-4 ui-text uppercase text-ink-secondary">
                    <span>By {mainFeature.author.name}</span>
                    <span>·</span>
                    <span>Cover Story</span>
                  </div>
                </div>

                <div className="relative aspect-[16/9] w-full mb-8 border border-border overflow-hidden">
                  <Link href={`/article/${mainFeature.slug}`}>
                    <SafeImage
                      src={edition.coverImage || mainFeature.image || ""}
                      alt={edition.coverHeadline || "Edition Cover"}
                      fill
                      className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      sizes="(max-width: 1200px) 100vw, 66vw"
                      priority
                    />
                  </Link>
                </div>

                <div className="newspaper-columns-2 gap-8 text-justify-print text-ink text-lg">
                  <p className="body-text">
                    <span className="drop-cap">{mainFeature.deck.charAt(0)}</span>
                    {mainFeature.deck.substring(1)}
                  </p>
                  <p className="body-text mt-4">
                    This featured cover story from our archives highlights the most critical developments of the day. The historical context provided by these reports offers a window into the past, preserving the narrative of a world in rapid transition.
                  </p>
                </div>
              </article>
            )}

            <hr className="rule-thick my-8" />
            
            <h2 className="ui-text mb-6 pb-2 border-b border-border text-2xl">
              Front Page Features
            </h2>
            <div className="newspaper-columns-2 gap-8">
              {secondaryFeatures.map((article) => (
                <div key={article.slug} className="mb-8 break-inside-avoid">
                  <ArticleCard article={article} variant="standard" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Rail (4 cols) */}
          <div className="col-span-12 lg:col-span-4 pl-0 lg:pl-8">
            <h2 className="ui-text mb-6 pb-2 border-b border-border text-2xl">
              Also Inside This Edition
            </h2>
            <div className="flex flex-col gap-8">
              {otherNews.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="compact" />
              ))}
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
