import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { MarketTracker, WorldClockPanel, IndiaMarketTracker } from "@/components/newspaper/SidebarPanels";
import { NewspaperOpening } from "@/components/newspaper/Animations";
import { PageTurnReader } from "@/components/newspaper/PageTurnReader";
import {
  fetchCuratedLeadStory,
  fetchSecondaryFeatures,
  fetchEditorPicks,
  fetchLiveNewsFeed,
} from "@/lib/services/newsService";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { normalizeTitle } from "@/lib/utils/dedup";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const seenHeadlines = new Set<string>();

  const deduplicate = (articles: any[]) => {
    if (!articles) return [];
    return articles.filter(a => {
      if (!a) return false;
      const norm = normalizeTitle(a.headline);
      if (seenHeadlines.has(norm)) {
        console.warn(`[Page Assembly] Cross-section duplicate skipped: ${a.headline}`);
        return false;
      }
      seenHeadlines.add(norm);
      return true;
    });
  };

  const rawMainFeature = await fetchCuratedLeadStory();
  const mainFeature = rawMainFeature ? deduplicate([rawMainFeature])[0] : null;
  const secondaryFeatures = deduplicate(await fetchSecondaryFeatures());
  const editorPicks = deduplicate(await fetchEditorPicks());

  const worldNews = deduplicate(await fetchLiveNewsFeed("world"));
  const indiaNews = deduplicate(await fetchLiveNewsFeed("india"));
  const techNews = deduplicate(await fetchLiveNewsFeed("technology"));
  const gridIntelligence = deduplicate(await fetchLiveNewsFeed("grid-intelligence"));

  const latestNews = deduplicate(await fetchLiveNewsFeed()); 

  const breakingNewsItems = latestNews.filter(a => a.isBreaking);
  if (breakingNewsItems.length < 5) {
    const nonBreakingLatest = latestNews.filter(a => !a.isBreaking);
    breakingNewsItems.push(...nonBreakingLatest.slice(0, 5 - breakingNewsItems.length));
  }
  if (breakingNewsItems.length < 5) {
    breakingNewsItems.push(...worldNews.slice(0, 5 - breakingNewsItems.length));
  }
  const breakingNews = breakingNewsItems[0] || null;

  const topBriefs = [...latestNews, ...worldNews, ...techNews, ...indiaNews];

  const commonLocations = [
    "New Delhi", "London", "New York", "Tokyo", "Frankfurt", "Hong Kong",
    "Washington", "Paris", "Beijing", "Moscow", "Kyiv", "Tel Aviv",
    "Mumbai", "Dubai", "Sydney", "Singapore", "Seoul", "Los Angeles",
    "Berlin", "Rome", "Toronto", "Chicago", "San Francisco"
  ];

  const extractedLocations = Array.from(new Set(
    topBriefs.flatMap(article => {
      const text = (article.headline + " " + article.deck).toLowerCase();
      return commonLocations.filter(loc => text.includes(loc.toLowerCase()));
    })
  ));

  const displayLocations = extractedLocations.length > 5 
    ? extractedLocations 
    : Array.from(new Set([...extractedLocations, ...commonLocations])).slice(0, 15);

  const mobilePages = [
    <div key="p1">
      <span className="ui-text text-accent">Breaking</span>
      {breakingNews && (
        <>
          <h2 className="headline-md mt-2 text-justify-print">{breakingNews.headline}</h2>
          <p className="body-text text-sm mt-2 text-justify-print">{breakingNews.deck}</p>
        </>
      )}
      <hr className="rule-thin my-4" />
      {secondaryFeatures.slice(0, 2).map((a) => (
        <div key={a.slug} className="mb-4">
          <h3 className="headline-md text-justify-print">{a.headline}</h3>
          <p className="caption-text mt-1 text-justify-print">{a.deck}</p>
        </div>
      ))}
    </div>,
    <div key="p2">
      <span className="ui-text">Editor&apos;s Picks</span>
      {editorPicks.slice(0, 3).map((a) => (
        <div key={a.slug} className="mb-4 pb-4 border-b border-border">
          <h3 className="headline-md text-justify-print">{a.headline}</h3>
          <p className="caption-text mt-1">By {a.author.name}</p>
        </div>
      ))}
    </div>,
    <div key="p3">
      <span className="ui-text">Latest</span>
      {topBriefs.slice(0, 4).map((a) => (
        <div key={a.slug} className="mb-3">
          <h3 className="body-text font-semibold text-justify-print">{a.headline}</h3>
        </div>
      ))}
    </div>,
  ];

  return (
    <>
      <Masthead locations={displayLocations} />

      {breakingNewsItems && breakingNewsItems.length > 0 && (
        <div className="bg-accent text-white no-print transition-colors duration-500 overflow-hidden">
          <div className="mx-auto max-w-screen-xl px-4 py-2 md:px-8 flex items-center relative">
            <span className="ui-text !text-white shrink-0 pr-4 relative">Breaking</span>
            <div className="flex-1 overflow-hidden relative whitespace-nowrap">
              <div className="flex w-max animate-marquee items-center">
                {breakingNewsItems.concat(breakingNewsItems).map((article, idx) => (
                  <Link
                    key={`${article.slug}-${idx}`}
                    href={`/article/${article.slug}`}
                    className="body-text text-sm hover:underline !text-white shrink-0 mr-12"
                  >
                    {article.headline}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <PageTurnReader pages={mobilePages} />

      <div className="bg-paper text-ink py-8 border-b-4 border-t border-border no-print relative">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6 flex flex-col justify-start">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-accent mb-2">
                Today in the Grid
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-sm text-ink-secondary uppercase tracking-widest mb-4">
                The 5 Stories Defining the World Today
              </p>
              <div className="w-12 h-1 bg-accent" />
            </div>

            {topBriefs.slice(0, 5).map((article, i) => (
              <Link key={article.slug} href={`/article/${article.slug}`} className="md:col-span-1 group flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2 text-ink-secondary">
                  <span className="font-[family-name:var(--font-playfair)] text-accent font-bold text-lg leading-none">0{i + 1}</span>
                  <span className="ui-text text-[0.6rem] uppercase tracking-widest">{article.section.replace("-", " ")}</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold leading-snug group-hover:text-accent transition-colors mb-2">
                  {article.headline}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-xs text-ink-secondary line-clamp-3 mt-auto">
                  {article.deck}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <NewspaperOpening>
        <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-8 hidden md:block">

          <div className="grid grid-cols-12 gap-8 relative">

            <div className="col-span-9 pr-2">

              {mainFeature && (
                <article className="mb-10 group border-b border-thick border-border pb-8">
                  <div className="mb-6 text-center">
                    <h2 className="font-[family-name:var(--font-playfair)] text-6xl lg:text-7xl xl:text-[5rem] group-hover:text-accent transition-colors duration-300 leading-[0.95] tracking-tight mb-6 font-bold">
                      <Link href={`/article/${mainFeature.slug}`}>
                        {mainFeature.headline}
                      </Link>
                    </h2>
                    <div className="flex items-center justify-center gap-4 ui-text uppercase text-ink-secondary">
                      <span className="text-accent font-bold">By {mainFeature.author.name}</span>
                      <span>·</span>
                      <span>{mainFeature.readingTime} min read</span>
                    </div>
                  </div>

                  <div className="relative aspect-[21/9] w-full mb-8 border border-border overflow-hidden bg-ink">
                    <Link href={`/article/${mainFeature.slug}`}>
                      <SafeImage
                        src={mainFeature.heroImage || mainFeature.image || ""}
                        alt={mainFeature.headline}
                        fill
                        className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                        sizes="(max-width: 1200px) 100vw, 80vw"
                        priority
                      />
                    </Link>
                  </div>

                  <div className="relative mt-6">
                    <div className="newspaper-columns gap-8 text-justify-print text-ink transition-colors duration-500 text-lg max-h-[300px] sm:max-h-[400px] overflow-hidden">
                      <p className="body-text">
                        <span className="drop-cap">{mainFeature.deck.charAt(0)}</span>
                        {mainFeature.deck.substring(1)}
                      </p>
                      <p className="body-text mt-4">
                        The implications of this event resonate far beyond the immediate horizon, marking a pivotal moment in our shared timeline. With the world watching closely, leaders and citizens alike are preparing for the profound changes that are sure to follow in the wake of these historic developments.
                      </p>
                      <p className="body-text mt-4">
                        As global markets react and political analysts scramble to interpret the shifts, the true magnitude of this paradigm shift is only beginning to be understood by the public at large.
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper to-transparent pointer-events-none"></div>
                  </div>
                  <div className="mt-6 flex justify-center border-t border-border pt-4 no-print">
                    <Link 
                      href={`/article/${mainFeature.slug}`}
                      className="ui-text bg-accent text-paper hover:bg-ink transition-colors duration-300 px-8 py-3 tracking-widest text-sm uppercase font-bold"
                    >
                      See More
                    </Link>
                  </div>
                </article>
              )}

              <div className="grid grid-cols-3 gap-8">

                <div className="col-span-1 border-r border-border pr-8">

                  <div className="mb-10 bg-paper p-6 border border-border relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                    <h3 className="ui-text mb-4 text-accent">Editor&apos;s Letter</h3>
                    <p className="font-[family-name:var(--font-cormorant)] text-xl italic leading-relaxed text-ink mb-4">
                      "Today's edition explores the consequences of the new climate accord, unprecedented developments in Indian innovation, and the rapid evolution of global artificial intelligence governance."
                    </p>
                    <div className="ui-text text-right text-ink-secondary">
                      — Marcus Thorne, Editor-in-Chief
                    </div>
                  </div>

                  <hr className="rule-thin my-6" />

                  <div className="bg-ink text-paper p-6 mb-8 mt-6">
                    <h2 className="font-[family-name:var(--font-inter)] text-accent font-bold tracking-widest uppercase mb-1">
                      Grid Intelligence
                    </h2>
                    <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-paper/80 mb-6 pb-4 border-b border-paper/20">
                      Exclusive Analysis • Deep Reports • Strategic Briefings
                    </p>
                    <div className="flex flex-col gap-6">
                      {gridIntelligence.slice(0, 2).map((article) => (
                        <div key={article.slug} className="group">
                          <Link href={`/article/${article.slug}`} className="block">
                            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold leading-tight group-hover:text-accent transition-colors mb-2">
                              {article.headline}
                            </h3>
                            <p className="font-[family-name:var(--font-inter)] text-xs text-paper/70 line-clamp-3">
                              {article.deck}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h2 className="ui-text mb-4 pb-2 border-b border-border">
                    In Today&apos;s Paper
                  </h2>
                  <div className="newspaper-columns-2 gap-6">
                    {secondaryFeatures.slice(0, 4).map((article) => (
                      <div key={article.slug} className="mb-6 break-inside-avoid">
                        <ArticleCard article={article} variant="standard" />
                      </div>
                    ))}
                  </div>

                  <hr className="rule-thick my-8" />
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
                      <h2 className="ui-text text-accent">India Highlights</h2>
                      <Link href="/section/india" className="ui-text hover:text-accent transition-colors">See All →</Link>
                    </div>
                    <div className="newspaper-columns-2 gap-6">
                      {indiaNews.slice(0, 2).map((article) => (
                        <div key={article.slug} className="mb-6 break-inside-avoid">
                          <ArticleCard article={article} variant="compact" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-span-3 pl-6 border-l border-border">
              <MarketTracker />
              <IndiaMarketTracker />
              <div className="mt-8">
                <WorldClockPanel />
              </div>

              <hr className="rule-double my-6" />

              <h2 className="ui-text mb-4 pb-2 border-b border-border">
                Editor&apos;s Picks
              </h2>
              {editorPicks.slice(0, 3).map((article) => (
                <div key={article.slug} className="mb-4">
                  <ArticleCard article={article} variant="compact" />
                </div>
              ))}

            </div>

          </div>

          <hr className="rule-thick my-12" />

          <section className="mb-12">
            <h2 className="ui-text mb-6">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {topBriefs.slice(5, 9).map((article) => (
                <div key={article.slug} className="border-t border-border pt-4">
                  <ArticleCard article={article} variant="compact" />
                </div>
              ))}
            </div>
          </section>

          <hr className="rule-thick my-12" />

          <section className="mb-12">
            <h2 className="ui-text mb-6 text-center">Sections</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
              {[
                { label: "India", href: "/section/india" },
                { label: "World", href: "/section/world" },
                { label: "Business", href: "/section/business" },
                { label: "Technology", href: "/section/technology" },
                { label: "AI", href: "/section/ai" },
                { label: "Grid Intelligence", href: "/section/grid-intelligence" },
                { label: "Science", href: "/section/science" },
                { label: "Culture", href: "/section/culture" },
                { label: "Travel", href: "/section/travel" },
                { label: "Opinion", href: "/section/opinion" },
              ].map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="bg-paper p-6 text-center ui-text hover:bg-ink hover:text-paper transition-colors duration-300"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </section>
        </main>
      </NewspaperOpening>

      <Footer />
    </>
  );
}
