import { Sparkles } from "lucide-react";

interface AISummaryCardProps {
  brief: string;
  keyPoints: string[];
}

export function AISummaryCard({ brief, keyPoints }: AISummaryCardProps) {
  return (
    <aside className="border border-border p-5 my-8 break-inside-avoid">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
        <Sparkles size={14} className="text-accent" />
        <h3 className="ui-text">AI News Summary</h3>
      </div>
      <p className="feature-text text-ink">{brief}</p>
      <ul className="mt-4 space-y-2">
        {keyPoints.map((point, i) => (
          <li key={i} className="body-text text-sm flex gap-2">
            <span className="text-accent font-bold shrink-0">{i + 1}.</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="caption-text mt-4 italic">
        Generated summary · Read full article for complete context
      </p>
    </aside>
  );
}
