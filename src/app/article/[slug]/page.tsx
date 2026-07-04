import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchArticle } from "@/lib/news/fetchNews";
import type { Metadata } from "next";
import { SafeImage } from "@/components/ui/SafeImage";
import { getSectionLabel } from "@/lib/sections";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ShareButtons } from "@/components/newspaper/ShareButtons";
import { BookmarkButton } from "@/components/newspaper/BookmarkButton";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | The Global Grid",
    };
  }

  return {
    title: `${article.headline} | The Global Grid`,
    description: article.deck,
    openGraph: {
      title: article.headline,
      description: article.deck,
      type: "article",
      publishedTime: article.publishedAt,
      section: article.section,
      images: article.image ? [{ url: article.image }] : [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.headline,
      description: article.deck,
      images: article.image ? [article.image] : ["/og-image.png"],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await fetchArticle(slug);

  if (!article) {
    notFound();
  }

  const sectionLabel = getSectionLabel(article.section);
  // Using section slug for back link. For 'india' the URL is '/india', for others '/section/[slug]'
  const backLink = article.section === "india" ? "/india" : (article.section === "front-page" ? "/" : `/section/${article.section}`);

  return (
    <>
      <Masthead />
      <main className="bg-paper text-ink min-h-screen py-10 px-4 md:px-8">
        <article className="max-w-[680px] mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href={backLink}
              className="ui-text hover:text-accent transition-colors uppercase tracking-widest text-sm font-bold"
            >
              &larr; Back to {sectionLabel}
            </Link>
          </div>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="ui-text text-accent mb-4 tracking-widest uppercase font-bold text-sm">
              {sectionLabel}
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              {article.headline}
            </h1>
            <div className="ui-text text-ink-secondary text-sm flex items-center justify-center gap-2 flex-wrap">
              <span className="font-bold text-ink">By {article.author.name}</span>
              <span>&middot;</span>
              <span>{article.readingTime} min read</span>
              {article.updatedAt && (
                <>
                  <span>&middot;</span>
                  <span className="text-accent">{article.updatedAt}</span>
                </>
              )}
            </div>
            
            <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-y border-border mt-6">
              <ShareButtons url={`/article/${article.slug}`} headline={article.headline} />
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-ink-secondary">Save:</span>
                <BookmarkButton article={article} />
              </div>
            </div>
          </header>

          {/* Hero Image */}
          {(article.heroImage || article.image || article.thumbnailImage) && (
            <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden bg-border">
              <SafeImage
                src={article.heroImage || article.image || article.thumbnailImage || ""}
                alt={article.headline}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {/* Body */}
          <div className="font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.8] text-justify-print flex flex-col gap-6">
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* External Link */}
          {article.sourceUrl && (
            <div className="mt-12 pt-6 border-t border-border flex justify-center no-print">
              <a 
                href={article.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ui-text bg-accent text-paper hover:bg-ink transition-colors duration-300 px-8 py-4 tracking-widest text-sm uppercase font-bold flex items-center gap-2"
              >
                Read full article at {article.publication || article.author.name} &rarr;
              </a>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
