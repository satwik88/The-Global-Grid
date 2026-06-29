"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { ChevronDown, ChevronRight, X, Building, LineChart, Rocket, Cpu, Shield, GraduationCap, Train, MapPin, FileText } from "lucide-react";
import { Article } from "@/lib/types";

const SUB_SECTIONS = [
  { name: "Politics", slug: "politics", icon: Building, desc: "India's political landscape" },
  { name: "Economy", slug: "economy", icon: LineChart, desc: "Markets, policy & growth" },
  { name: "Startups", slug: "startups", icon: Rocket, desc: "India's startup ecosystem" },
  { name: "Technology", slug: "technology", icon: Cpu, desc: "Tech news from India" },
  { name: "Defence", slug: "defence", icon: Shield, desc: "Defence & security updates" },
  { name: "Education", slug: "education", icon: GraduationCap, desc: "Education reforms & news" },
  { name: "Infrastructure", slug: "infrastructure", icon: Train, desc: "Infrastructure & development" },
  { name: "States", slug: "states", icon: MapPin, desc: "News from Indian states" }
];

export function IndiaMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [topStories, setTopStories] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const timerRef = useRef<NodeJS.Timeout>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Fetch stories
    fetch("/api/india-news")
      .then(res => res.json())
      .then(data => {
        if (data.articles) setTopStories(data.articles);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch India mega menu stories", err);
        setIsLoading(false);
      });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const toggleMobile = (e: React.MouseEvent) => {
    if (!isMobile) return;
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  // Divide subsections for columns
  const leftCol = SUB_SECTIONS.slice(0, 4);
  const midCol = SUB_SECTIONS.slice(4, 8);

  return (
    <div 
      className="flex items-center shrink-0 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <Link
        href="/india"
        onClick={toggleMobile}
        className={`hover:text-accent transition-colors duration-200 px-1 flex items-center gap-1 font-bold ${isOpen ? 'text-accent' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        INDIA <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-accent transform transition-transform duration-300 origin-left ${isOpen && !isMobile ? 'scale-x-100' : 'scale-x-0'}`} />

      {/* Desktop Mega Menu Dropdown */}
      {!isMobile && isOpen && (
        <div 
          className="absolute top-[calc(100%+0.5rem)] left-0 md:left-auto md:-left-4 z-50 w-[800px] bg-paper text-ink shadow-2xl border border-accent/20 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Top golden accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          {/* Arrow pointing up to the link */}
          <div className="absolute -top-2 left-6 w-4 h-4 bg-paper border-l border-t border-border transform rotate-45" />

          <div className="flex">
            {/* Categories Columns */}
            <div className="w-2/3 p-6 flex gap-6">
              
              <div className="flex-1 flex flex-col gap-2">
                {leftCol.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link 
                      key={cat.slug} 
                      href={`/india/${cat.slug}`}
                      onClick={closeMenu}
                      className="group flex items-center gap-4 p-3 border-b border-border hover:border-accent/30 transition-colors last:border-0"
                    >
                      <div className="p-2 border border-border rounded-lg group-hover:border-accent group-hover:text-accent transition-colors text-ink/70">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm uppercase tracking-wide group-hover:text-accent transition-colors">{cat.name}</div>
                        <div className="text-xs text-ink/50">{cat.desc}</div>
                      </div>
                      <ChevronRight size={14} className="text-ink/20 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  )
                })}
              </div>

              <div className="w-px bg-ink/10" />

              <div className="flex-1 flex flex-col gap-2">
                {midCol.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link 
                      key={cat.slug} 
                      href={`/india/${cat.slug}`}
                      onClick={closeMenu}
                      className="group flex items-center gap-4 p-3 border-b border-border hover:border-accent/30 transition-colors last:border-0"
                    >
                      <div className="p-2 border border-border rounded-lg group-hover:border-accent group-hover:text-accent transition-colors text-ink/70">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm uppercase tracking-wide group-hover:text-accent transition-colors">{cat.name}</div>
                        <div className="text-xs text-ink/50">{cat.desc}</div>
                      </div>
                      <ChevronRight size={14} className="text-ink/20 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  )
                })}
              </div>

            </div>

            {/* Top Stories Column */}
            <div className="w-1/3 bg-ink/5 p-6 border-l border-border">
              <h3 className="ui-text text-accent mb-4 border-b border-accent/20 pb-2 flex items-center justify-between">
                <span>Top India Stories</span>
              </h3>
              
              <div className="flex flex-col gap-4">
                {isLoading ? (
                  [1, 2, 3].map(i => (
                    <div key={i} className="animate-pulse flex gap-3">
                      <div className="w-20 h-16 bg-ink/10 rounded" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-ink/10 w-1/2 rounded" />
                        <div className="h-4 bg-ink/10 w-full rounded" />
                      </div>
                    </div>
                  ))
                ) : topStories.length > 0 ? (
                  topStories.map((story) => (
                    <Link 
                      key={story.slug}
                      href={`/article/${story.slug}`}
                      onClick={closeMenu}
                      className="group flex gap-3 pb-4 border-b border-border last:border-0 hover:bg-ink/5 p-2 -mx-2 rounded transition-colors"
                    >
                      <div className="relative w-20 h-16 shrink-0 overflow-hidden rounded border border-border">
                        <SafeImage 
                          src={story.image || story.heroImage || ""} 
                          alt={story.headline}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-[10px] text-accent uppercase font-bold tracking-widest mb-1">{story.subcategory || story.section}</div>
                        <div className="font-[family-name:var(--font-playfair)] text-sm font-bold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                          {story.headline}
                        </div>
                        <div className="text-[10px] text-ink/50 mt-1 flex items-center gap-1">
                          {new Date(story.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-sm text-ink/50 italic">No recent stories found.</div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-ink/5 p-3 px-6 border-t border-border flex justify-between items-center">
            <Link 
              href="/india" 
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
            >
              <FileText size={16} className="text-accent" />
              View all India news <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Modal/Overlay */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-[100] bg-paper flex flex-col animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-ink font-bold uppercase tracking-widest">
              India Hub
            </h2>
            <button onClick={closeMenu} aria-label="Close menu" title="Close menu" className="p-2 text-ink hover:text-accent transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-paper text-ink">
            <Link 
              href="/india" 
              onClick={closeMenu}
              className="block p-4 mb-6 bg-accent text-paper font-bold uppercase tracking-widest text-center"
            >
              Go to India Front Page
            </Link>

            <h3 className="ui-text text-accent mb-4 border-b border-border pb-2">Categories</h3>
            <div className="flex flex-col gap-2 mb-8">
              {SUB_SECTIONS.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link 
                    key={cat.slug} 
                    href={`/india/${cat.slug}`}
                    onClick={closeMenu}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-accent active:bg-ink/5 transition-colors"
                  >
                    <Icon size={20} className="text-accent" />
                    <span className="font-bold uppercase tracking-wide">{cat.name}</span>
                    <ChevronRight size={16} className="ml-auto text-ink/30" />
                  </Link>
                );
              })}
            </div>

            <h3 className="ui-text text-accent mb-4 border-b border-border pb-2">Latest News</h3>
            <div className="flex flex-col gap-4 pb-8">
              {isLoading ? (
                <div className="text-ink/50">Loading...</div>
              ) : (
                topStories.map((story) => (
                  <Link 
                    key={story.slug}
                    href={`/article/${story.slug}`}
                    onClick={closeMenu}
                    className="flex gap-4 p-2 border-b border-border last:border-0"
                  >
                    <div className="relative w-24 h-20 shrink-0 overflow-hidden border border-border">
                      <SafeImage 
                        src={story.image || story.heroImage || ""} 
                        alt={story.headline}
                        fill
                        className="object-cover grayscale"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-[10px] text-accent uppercase font-bold tracking-widest mb-1">{story.subcategory || story.section}</div>
                      <div className="font-[family-name:var(--font-playfair)] text-sm font-bold leading-tight line-clamp-3 text-ink">
                        {story.headline}
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
