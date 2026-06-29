"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Desktop Inline Search */}
      <div className="hidden md:flex items-center">
        <div 
          className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <form onSubmit={handleSubmit} className="w-full flex items-center border-b border-ink/30 pb-1">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent outline-none ui-text text-sm placeholder:text-ink-secondary/50 text-ink"
            />
            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              className="p-1 text-ink-secondary hover:text-ink transition-colors ml-1"
              aria-label="Close search"
            >
              <X size={14} />
            </button>
          </form>
        </div>
        
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-1 text-ink-secondary hover:text-accent transition-colors ml-2"
            aria-label="Open search"
          >
            <Search size={18} />
          </button>
        )}
      </div>

      {/* Mobile Search Icon */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 text-ink hover:text-accent transition-colors"
          aria-label="Open search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-paper/95 backdrop-blur-sm flex flex-col pt-20 px-6 animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-ink">Search</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-ink-secondary hover:text-ink transition-colors"
              aria-label="Close search overlay"
            >
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center border-b-2 border-ink pb-2">
              <Search size={20} className="text-ink-secondary mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics..."
                className="w-full bg-transparent outline-none text-xl font-[family-name:var(--font-inter)] text-ink placeholder:text-ink-secondary/50"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
