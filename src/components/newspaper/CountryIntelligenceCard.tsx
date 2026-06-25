import { Globe, Users, TrendingUp, Clock, FileText, Anchor } from "lucide-react";
import { CountryIntelligence } from "@/lib/countryData";
import { CountryFlag } from "./CountryFlag";

interface CountryIntelligenceCardProps {
  data: CountryIntelligence;
}

export function CountryIntelligenceCard({ data }: CountryIntelligenceCardProps) {
  return (
    <div className="border border-border bg-[var(--paper)]">
      {/* Header */}
      <div className="p-5 border-b border-border bg-ink/5 flex items-start gap-4">
        <CountryFlag countryName={data.name} width={48} height={32} className="shadow-sm flex-shrink-0" />
        <div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-ink uppercase">
            {data.name}
          </h2>
          <p className="ui-text text-sm text-ink-secondary mt-1 max-w-[400px]">
            {data.description}
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
        <div className="p-4 flex flex-col justify-center">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            <Users size={12} /> Population
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink">
            {data.population}
          </span>
        </div>
        
        <div className="p-4 flex flex-col justify-center border-l border-border lg:border-none">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            <TrendingUp size={12} /> GDP
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink">
            {data.gdp} <span className="text-sm font-sans text-green-700 dark:text-green-500 ml-1">+{data.gdpGrowth}</span>
          </span>
        </div>

        <div className="p-4 flex flex-col justify-center border-t lg:border-t-0 border-border">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            <Anchor size={12} /> Capital
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink">
            {data.capital}
          </span>
        </div>

        <div className="p-4 flex flex-col justify-center border-l lg:border-t-0 border-border">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            <Globe size={12} /> Language
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink truncate">
            {data.language}
          </span>
        </div>
      </div>

      {/* Secondary Metrics Grid */}
      <div className="grid grid-cols-3 divide-x divide-y-0 border-t border-border bg-ink/5">
        <div className="p-3 flex flex-col justify-center">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            <Clock size={12} /> Time Zone
          </span>
          <span className="ui-text text-sm font-bold text-ink truncate">
            {data.timeZone}
          </span>
        </div>
        <div className="p-3 flex flex-col justify-center">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            Currency
          </span>
          <span className="ui-text text-sm font-bold text-ink truncate">
            {data.currency}
          </span>
        </div>
        <div className="p-3 flex flex-col justify-center">
          <span className="ui-text text-[10px] uppercase tracking-widest text-ink-secondary mb-1 flex items-center gap-1">
            Domain
          </span>
          <span className="ui-text text-sm font-bold text-ink truncate">
            {data.domain}
          </span>
        </div>
      </div>

      {/* Top Story Spotlight */}
      <div className="p-5 border-t border-border bg-ink text-paper flex items-start gap-4">
        <div className="bg-accent text-paper p-2 flex-shrink-0">
          <FileText size={20} />
        </div>
        <div>
          <h3 className="ui-text text-[10px] uppercase tracking-widest font-bold text-paper/70 mb-1">
            Top Story Right Now
          </h3>
          <p className="font-[family-name:var(--font-playfair)] text-lg leading-snug font-bold">
            {data.topStory}
          </p>
        </div>
      </div>
    </div>
  );
}
