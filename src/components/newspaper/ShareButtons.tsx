"use client";

import { useState, useEffect } from "react";
import { Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  headline: string;
}

export function ShareButtons({ url, headline }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fullUrl = mounted ? `${window.location.origin}${url}` : url;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedHeadline = encodeURIComponent(headline);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="text-xs uppercase tracking-widest font-bold text-ink-secondary">Share:</span>
      
      <button 
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-accent text-ink-secondary hover:text-accent text-xs font-bold uppercase tracking-wider transition-colors"
      >
        {copied ? (
          <>
            <Check size={14} className="text-green-600 dark:text-green-400" /> Copied!
          </>
        ) : (
          <>
            <Link2 size={14} /> Copy Link
          </>
        )}
      </button>

      <a 
        href={`https://twitter.com/intent/tweet?text=${encodedHeadline}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full border border-border hover:border-accent text-ink-secondary hover:text-accent text-xs font-bold uppercase tracking-wider transition-colors"
      >
        X
      </a>

      <a 
        href={`https://wa.me/?text=${encodedHeadline}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full border border-border hover:border-accent text-ink-secondary hover:text-accent text-xs font-bold uppercase tracking-wider transition-colors"
      >
        WhatsApp
      </a>
    </div>
  );
}
