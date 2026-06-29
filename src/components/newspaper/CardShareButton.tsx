"use client";

import { useState, useEffect } from "react";
import { Share2, Check } from "lucide-react";

interface CardShareButtonProps {
  url: string;
  className?: string;
}

export function CardShareButton({ url, className = "" }: CardShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Construct full URL using window.location.origin
    const fullUrl = mounted ? `${window.location.origin}${url}` : url;
    
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-full bg-paper/80 backdrop-blur-sm border border-border shadow-sm text-ink-secondary hover:text-accent transition-all duration-300 ${className}`}
      aria-label="Copy Link"
      title="Copy Link"
    >
      {copied ? <Check size={18} className="text-green-600 dark:text-green-400" /> : <Share2 size={18} />}
    </button>
  );
}
