export function MorningBriefTemplate() {
  return (
    <div className="bg-paper border border-border p-6 shadow-sm">
      <div className="text-center mb-6 pb-4 border-b-2 border-ink">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-ink uppercase">
          Morning Brief
        </h2>
        <p className="ui-text text-accent mt-1">7:00 AM IST</p>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-border rounded w-3/4"></div>
        <div className="h-4 bg-border rounded w-full"></div>
        <div className="h-4 bg-border rounded w-5/6"></div>
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <p className="caption-text text-ink-secondary italic">Includes: Top India Story, Top World Story, Markets, AI & Tech, Editor's Note</p>
      </div>
    </div>
  );
}

export function EveningBriefTemplate() {
  return (
    <div className="bg-ink text-paper border border-ink p-6 shadow-sm">
      <div className="text-center mb-6 pb-4 border-b-2 border-paper/20">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold uppercase">
          Evening Brief
        </h2>
        <p className="ui-text text-accent mt-1">7:00 PM IST</p>
      </div>
      <div className="space-y-4 opacity-70">
        <div className="h-4 bg-paper/20 rounded w-3/4"></div>
        <div className="h-4 bg-paper/20 rounded w-full"></div>
        <div className="h-4 bg-paper/20 rounded w-5/6"></div>
      </div>
      <div className="mt-6 pt-4 border-t border-paper/20">
        <p className="caption-text text-paper/70 italic">Includes: Biggest stories of the day, Markets close, Grid Intelligence highlight</p>
      </div>
    </div>
  );
}

export function WeeklyIntelligenceTemplate() {
  return (
    <div className="bg-[#fcf8f2] border border-accent/20 p-6 shadow-sm">
      <div className="text-center mb-6 pb-4 border-b-2 border-accent">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-accent uppercase tracking-widest">
          Grid Intelligence
        </h2>
        <p className="ui-text text-ink-secondary mt-1">Every Sunday</p>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-accent/20 rounded w-3/4"></div>
        <div className="h-4 bg-accent/20 rounded w-full"></div>
        <div className="h-4 bg-accent/20 rounded w-5/6"></div>
      </div>
      <div className="mt-6 pt-4 border-t border-accent/20">
        <p className="caption-text text-ink-secondary italic">Includes: Long-form analysis, India startups, AI, Geopolitics, Technology</p>
      </div>
    </div>
  );
}
