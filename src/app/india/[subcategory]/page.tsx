import type { Metadata } from "next";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { IndiaMarketTracker } from "@/components/newspaper/SidebarPanels";
import { fetchIndiaSubcategoryNews } from "@/lib/services/newsService";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const title = resolvedParams.subcategory.charAt(0).toUpperCase() + resolvedParams.subcategory.slice(1);
  return {
    title: `${title} | India — The Global Grid`,
    description: `Latest ${title} news from India — The Global Grid`,
  };
}

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

export default async function IndiaSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.subcategory.charAt(0).toUpperCase() + resolvedParams.subcategory.slice(1);
  
  // Fetch news for this specific subcategory
  const subcategoryNews = await fetchIndiaSubcategoryNews(resolvedParams.subcategory);
  
  // Separate featured, highlights, and rest
  const leadStory = subcategoryNews[0];
  const highlights = subcategoryNews.slice(1, 4);
  const trending = subcategoryNews.slice(4);

  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-8">
        <header className="text-center mb-8 border-b-4 border-t border-border py-8">
          <div className="ui-text mb-4 text-accent">
            <Link href="/india" className="hover:underline uppercase tracking-widest text-sm">INDIA HUB</Link>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold tracking-tight text-ink uppercase">
            {title}
          </h1>
          <hr className="rule-double mt-6 max-w-md mx-auto mb-6" />
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 ui-text">
            {INDIA_SUBCATEGORIES.map((cat) => (
              <Link 
                key={cat} 
                href={`/india/${cat.toLowerCase()}`}
                className={`hover:text-accent transition-colors uppercase ${cat.toLowerCase() === resolvedParams.subcategory.toLowerCase() ? 'text-accent font-bold' : ''}`}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-12 gap-8 relative">
          <div className="col-span-12 lg:col-span-9 pr-0 lg:pr-2">
            
            {leadStory ? (
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
            ) : (
              <div className="text-center py-20 text-ink/50 italic">
                No recent stories found for this section.
              </div>
            )}

            {trending.length > 0 && (
              <div className="mb-12">
                <h2 className="ui-text mb-6 pb-2 border-b border-border text-accent">
                  More in {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trending.map((article) => (
                    <ArticleCard key={article.slug} article={article} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="col-span-12 lg:col-span-3 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-6">
            <IndiaMarketTracker />
            
            <div className="mt-12">
              <h3 className="ui-text mb-4 pb-2 border-b border-border text-accent">
                {title} Highlights
              </h3>
              {highlights.map((article) => (
                <div key={article.slug} className="mb-6">
                  <ArticleCard article={article} variant="compact" />
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 border border-border bg-ink/5 text-center">
              <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-3 tracking-tight">The Global Grid India</h4>
              <p className="ui-text mb-4">In-depth coverage and analysis of {title.toLowerCase()} across the subcontinent.</p>
              <Link href="/india" className="inline-block border border-ink px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-paper transition-colors">
                Back to India Hub
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
