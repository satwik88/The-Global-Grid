import type { Metadata } from "next";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { IndiaMarketTracker } from "@/components/newspaper/SidebarPanels";
import { fetchLiveNewsFeed } from "@/lib/services/newsService";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "India — The Global Grid",
  description: "India's flagship editorial section — The Global Grid",
};

const INDIA_SUBCATEGORIES = [
  "Politics",
  "Economy",
  "Startups",
  "Technology",
  "Defence",
  "Education",
  "Infrastructure",
  "States"
];

export default async function IndiaHubPage() {
  const indiaNews = await fetchLiveNewsFeed("india");
  
  // Separate featured, highlights, and rest
  const leadStory = indiaNews[0];
  const highlights = indiaNews.slice(1, 4);
  const trending = indiaNews.slice(4);

  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-8">
        <header className="text-center mb-8 border-b-4 border-t border-border py-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold tracking-tight text-ink uppercase">
            India
          </h1>
          <hr className="rule-double mt-6 max-w-md mx-auto mb-6" />
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 ui-text">
            {INDIA_SUBCATEGORIES.map((cat) => (
              <span key={cat} className="hover:text-accent cursor-pointer transition-colors">
                {cat.toUpperCase()}
              </span>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-12 gap-8 relative">
          <div className="col-span-12 lg:col-span-9 pr-0 lg:pr-2">
            
            {leadStory && (
              <article className="mb-10 group border-b border-thick border-border pb-8">
                <div className="mb-6 text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl group-hover:text-accent transition-colors duration-300 leading-[0.95] tracking-tight mb-6 font-bold">
                    <Link href={`/article/${leadStory.slug}`}>
                      {leadStory.headline}
                    </Link>
                  </h2>
                  <div className="flex items-center justify-center gap-4 ui-text uppercase text-ink-secondary">
                    <span className="text-accent font-bold">By {leadStory.author.name}</span>
                    <span>·</span>
                    <span>{leadStory.readingTime} min read</span>
                  </div>
                </div>

                <div className="relative aspect-[21/9] w-full mb-8 border border-border overflow-hidden bg-ink">
                  <Link href={`/article/${leadStory.slug}`}>
                    <SafeImage
                      src={leadStory.heroImage || leadStory.image || ""}
                      alt={leadStory.headline}
                      fill
                      className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      sizes="(max-width: 1200px) 100vw, 80vw"
                      priority
                    />
                  </Link>
                </div>

                <div className="relative mt-6 max-w-4xl mx-auto text-center">
                    <p className="body-text text-xl">
                      {leadStory.deck}
                    </p>
                </div>
              </article>
            )}

            <div className="mb-12">
              <h2 className="ui-text mb-6 pb-2 border-b border-border text-accent">
                Trending in India
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trending.map((article) => (
                  <ArticleCard key={article.slug} article={article} variant="standard" />
                ))}
              </div>
            </div>

          </div>

          <div className="col-span-12 lg:col-span-3 lg:pl-6 lg:border-l border-border">
            <IndiaMarketTracker />

            <div className="mt-8">
              <h2 className="ui-text mb-4 pb-2 border-b border-border">
                India Highlights
              </h2>
              {highlights.map((article) => (
                <div key={article.slug} className="mb-6 border-b border-border pb-4 last:border-b-0">
                  <ArticleCard article={article} variant="compact" />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
