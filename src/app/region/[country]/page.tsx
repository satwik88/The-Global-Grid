import React from "react";
import Link from "next/link";
import { getBestAvailableNews } from "@/lib/services/newsService";
import { getCurrencyPairForCountry } from "@/lib/services/currencyService";
import { getCountryIntelligence } from "@/lib/countryData";
import { CurrencyChart } from "@/components/newspaper/CurrencyChart";
import { CountryIntelligenceCard } from "@/components/newspaper/CountryIntelligenceCard";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import WorldMapWrapper from "@/components/newspaper/WorldMapWrapper"; // We will create this client wrapper
import { ArrowLeft, Hash, Map } from "lucide-react";

export const dynamic = 'force-dynamic';

function slugToName(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function RegionPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = await params;
  const countrySlug = resolvedParams.country;
  const countryName = slugToName(countrySlug);
  
  const news = await getBestAvailableNews("world", false, countryName);
  const currencyTicker = getCurrencyPairForCountry(countryName);
  const intelligenceData = getCountryIntelligence(countryName);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
      {/* Header Breadcrumbs */}
      <div className="mb-6 pb-4 border-b border-border flex items-center justify-between">
        <Link href="/world-map" className="flex items-center gap-2 ui-text text-sm font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors">
          <ArrowLeft size={16} />
          Back to Global Dashboard
        </Link>
        <div className="ui-text text-sm font-bold uppercase tracking-widest text-ink-secondary flex items-center gap-2">
          <Map size={16} /> Region Focus
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Intelligence Scorecard */}
          {intelligenceData ? (
            <CountryIntelligenceCard data={intelligenceData} />
          ) : (
            <div className="border border-border bg-ink text-paper p-8 text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight mb-2 uppercase">
                {countryName}
              </h2>
              <p className="ui-text text-sm tracking-widest uppercase opacity-80">
                Detailed Intelligence Scorecard Not Available for this Region
              </p>
            </div>
          )}

          {/* Interactive Map limited to Focus Mode centered context */}
          <div className="border border-border bg-[var(--paper)]">
            <div className="p-4 border-b border-border bg-ink/5">
              <h3 className="ui-text text-sm uppercase tracking-widest font-bold text-ink-secondary">
                Geopolitical Context
              </h3>
            </div>
            <div className="p-4">
              {/* We will extract the client part into WorldMapWrapper to fetch data and render modes */}
              <WorldMapWrapper initialMode="focus" selectedCountry={countryName} relatedCountries={intelligenceData?.relatedCountries || []} />
            </div>
          </div>

          {/* News Feed */}
          <div>
            <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-6 mt-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight uppercase">
                Latest Dispatches from {countryName}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.slice(0, 4).map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
            {news.length === 0 && (
              <div className="py-12 text-center border border-border bg-ink/5">
                <p className="ui-text text-ink-secondary">No recent dispatches found for this region.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Currency Graph */}
          {currencyTicker && (
            <CurrencyChart countryName={countryName} ticker={currencyTicker} />
          )}

          {/* Trending Topics */}
          {intelligenceData && intelligenceData.trendingTopics.length > 0 && (
            <div className="border border-border bg-[var(--paper)]">
              <div className="p-4 border-b border-border bg-ink text-paper">
                <h3 className="ui-text text-sm uppercase tracking-widest font-bold">
                  Trending Topics
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {intelligenceData.trendingTopics.map((topic, i) => (
                  <li key={i} className="p-4 flex items-center gap-3 hover:bg-ink/5 transition-colors cursor-pointer">
                    <Hash size={16} className="text-accent" />
                    <span className="font-bold text-ink">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Countries */}
          {intelligenceData && intelligenceData.relatedCountries.length > 0 && (
            <div className="border border-border bg-[var(--paper)]">
              <div className="p-4 border-b border-border bg-ink text-paper">
                <h3 className="ui-text text-sm uppercase tracking-widest font-bold">
                  Key Strategic Relations
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {intelligenceData.relatedCountries.map((related, i) => (
                  <li key={i} className="p-4 flex items-center gap-3">
                    <Link href={`/region/${related.toLowerCase().replace(/\s+/g, '-')}`} className="font-bold text-ink hover:text-accent transition-colors w-full flex justify-between items-center">
                      <span>{related}</span>
                      <span className="text-accent">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
