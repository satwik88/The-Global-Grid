import type { Metadata } from "next";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import WorldMapWrapper from "@/components/newspaper/WorldMapWrapper";
import { GlobalDashboard } from "@/components/newspaper/GlobalDashboard";
import { getBestAvailableNews } from "@/lib/services/newsService";
import { ArticleCard } from "@/components/newspaper/ArticleCard";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Global Intelligence Center — The Global Grid",
  description: "Explore the latest news visually on the Interactive World Map.",
};

export default async function WorldMapPage() {
  
  // We fetch a batch of world news for the global dashboard view
  const news = await getBestAvailableNews("world");
  const leadStory = news[0];
  const moreStories = news.slice(1, 7);

  // In a real app we'd fetch this data from our services
  // For the dashboard, we provide realistic aggregated metrics
  const dashboardMetrics = {
    countriesTracked: 195,
    totalBreakingStories: 17,
    mostCoveredNation: "United States",
    mostReadNation: "India",
    strongestCurrency: { symbol: "CHF", change: 1.5 },
    weakestCurrency: { symbol: "RUB", change: -2.1 }
  };

  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-[1400px] px-4 py-8 md:px-6">
        <header className="text-center mb-10 border-b border-border pb-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold tracking-tight text-ink uppercase">
            Global Intelligence Center
          </h1>
          <hr className="rule-double mt-6 max-w-md mx-auto mb-6" />
          <p className="ui-text text-xl">
            Live geopolitical events, real-time market data, and strategic regional insights.
          </p>
        </header>

        <GlobalDashboard {...dashboardMetrics} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Main Map & Intelligence Explorer */}
          <div className="lg:col-span-12 flex flex-col gap-6">
            
            <div className="w-full bg-ink/5 relative">
              <WorldMapWrapper />
            </div>

            {/* Global News Feed Results */}
            <div className="mt-8 border-t border-border pt-8">
              <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-6">
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold uppercase tracking-widest">
                  Global Highlights
                </h2>
              </div>

              {news.length === 0 ? (
                <div className="p-8 text-center text-ink/50 italic border border-border">
                  No global dispatches found. 
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {leadStory && (
                    <div className="border-b-4 border-ink pb-6">
                      <ArticleCard article={leadStory} variant="featured" />
                    </div>
                  )}
                  
                  {moreStories.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {moreStories.map((article) => (
                        <div key={article.slug} className="mb-6 break-inside-avoid">
                          <ArticleCard article={article} variant="compact" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
