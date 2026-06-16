import type { Metadata } from "next";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { AISummaryCard } from "@/components/newspaper/AISummaryCard";
import { ArticleReveal, ReadingProgress } from "@/components/newspaper/Animations";
import { BookmarkButton } from "@/components/newspaper/BookmarkButton";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import type { Article } from "@/lib/types";
import { getRelatedArticles, articles } from "@/lib/content/articles";
import { fetchArticle } from "@/lib/services/newsService";
import { getSectionLabel } from "@/lib/sections";

interface Props {
  params: Promise<{ slug: string }>;
}

// Removed generateStaticParams to allow dynamic fetching of live articles
// Next.js will server-render these pages on demand

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.headline,
    description: article.deck,
    openGraph: {
      title: article.headline,
      description: article.deck,
      images: [{ url: article.image }],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const found = await fetchArticle(slug);
  if (!found) notFound();
  const article: Article = found;

  const related = getRelatedArticles(article.relatedSlugs);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <ReadingProgress />
      <Masthead showNav={false} />

      <ArticleReveal>
        <article className="mx-auto max-w-7xl px-4 py-8 md:px-8">
          {/* Newspaper spread layout on desktop */}
          <div className="newspaper-spread mb-8">
            <div className="p-6 md:p-10">
              <Link
                href={`/section/${article.section}`}
                className="ui-text text-accent hover:underline"
              >
                {getSectionLabel(article.section)}
              </Link>

              <h1 className="headline-xl mt-4">{article.headline}</h1>

              <p className="feature-text mt-4 text-ink-secondary max-w-2xl">
                {article.deck}
              </p>

              <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="body-text font-semibold hover:text-accent transition-colors">
                        <Link href={`/author/${article.author.slug}`}>{article.author.name}</Link>
                      </p>
                      <p className="caption-text">{article.author.role}</p>
                    </div>
                  </div>
                  <BookmarkButton slug={article.slug} />
                </div>
                
                {/* Reading Statistics Layer */}
                <div className="flex flex-wrap items-center gap-4 ui-text text-[0.65rem] text-ink-secondary uppercase tracking-widest font-bold bg-paper/50 p-2 border border-border/50 rounded-sm w-fit">
                  <span>{publishedDate}</span>
                  <span className="text-border/50">•</span>
                  <span>{article.readingTime} min read</span>
                  <span className="text-border/50">•</span>
                  <span className="text-accent">{article.readersToday || Math.floor(Math.random() * 10000) + 5000} readers today</span>
                  <span className="text-border/50">•</span>
                  <span>Updated {article.updatedAt || "2 hours ago"}</span>
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px] md:min-h-full">
              <SafeImage
                src={article.image || ""}
                alt={article.headline}
                fill
                className="object-cover grayscale-[15%]"
                sizes="50vw"
                priority
              />
            </div>
          </div>

          {article.imageCaption && (
            <p className="caption-text text-center mb-8 italic">
              {article.imageCaption}
            </p>
          )}

          {article.aiSummary && (
            <div className="max-w-3xl mx-auto">
              <AISummaryCard
                brief={article.aiSummary.brief}
                keyPoints={article.aiSummary.keyPoints}
              />
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div className="newspaper-columns">
              {article.body.map((paragraph: string, i: number) => (
                <div key={i}>
                  <p className="body-text mb-4">{paragraph}</p>
                  {article.pullQuotes?.[0] && i === Math.floor(article.body.length / 2) && (
                    <blockquote className="pull-quote">
                      &ldquo;{article.pullQuotes[0]}&rdquo;
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/search?q=${encodeURIComponent(tag)}`}
                    className="ui-text text-[0.625rem] border border-border px-2 py-1 hover:text-accent transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {related.length > 0 && (
            <section className="mt-16 pt-8 border-t border-border">
              <h2 className="ui-text mb-6 text-center">Related Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {related.map((rel) => (
                  <ArticleCard key={rel.slug} article={rel} variant="standard" />
                ))}
              </div>
            </section>
          )}
        </article>
      </ArticleReveal>

      <Footer />
    </>
  );
}
