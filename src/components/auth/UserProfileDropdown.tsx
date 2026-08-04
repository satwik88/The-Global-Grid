"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User as UserIcon, LogOut, Check, Settings2, Bookmark, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";
import { AuthModal } from "./AuthModal";
import Link from "next/link";
import { NAV_SECTIONS } from "@/lib/sections";

const PRESET_AVATARS = Array.from({ length: 50 }).map((_, i) => 
  `https://api.dicebear.com/9.x/notionists/svg?seed=Reader${i}&backgroundColor=transparent`
);

export function UserProfileDropdown() {
  const { user, preferences, logout, mutate } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAvatarsExpanded, setIsAvatarsExpanded] = useState(false);
  
  const [nickname, setNickname] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [savedArticles, setSavedArticles] = useState<any[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch saved articles when opened
  useEffect(() => {
    if (isDropdownOpen && user) {
      setNickname(user.nickname);
      setSelectedInterests(preferences?.interests || []);
      
      const fetchArticles = async () => {
        setLoadingArticles(true);
        try {
          const res = await fetch("/api/articles/saved");
          const data = await res.json();
          if (res.ok) setSavedArticles(data.articles || []);
        } catch (e) {
          console.error(e);
        } finally {
          setLoadingArticles(false);
        }
      };
      fetchArticles();
    }
  }, [isDropdownOpen, user, preferences]);

  const handleUpdateProfile = async (updates: any) => {
    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates)
      });
      if (res.ok) {
        mutate(); // refresh user data
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveNickname = () => {
    if (nickname !== user?.nickname) {
      handleUpdateProfile({ nickname });
    }
    setIsEditingName(false);
  };

  const toggleInterest = (category: string) => {
    const newInterests = selectedInterests.includes(category)
      ? selectedInterests.filter(c => c !== category)
      : [...selectedInterests, category];
    
    setSelectedInterests(newInterests);
    handleUpdateProfile({ interests: newInterests });
  };

  if (!user) {
    return (
      <>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-1 flex items-center gap-2 ui-text text-ink-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          Sign In
        </button>
        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-paper hover:border-accent transition-colors overflow-hidden"
        aria-label="User Profile"
      >
        {user.avatar_url ? (
          <img src={user.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
        ) : (
          <UserIcon size={16} className="text-ink-secondary" />
        )}
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-80 sm:w-96 bg-paper border border-border shadow-xl z-50 flex flex-col max-h-[85vh] overflow-hidden rounded-2xl"
          >
            {/* Header / Nickname */}
            <div className="p-4 border-b border-border bg-ink text-paper flex items-center justify-between">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    className="bg-paper/20 border-b border-paper/50 px-1 py-0.5 outline-none text-paper font-[family-name:var(--font-playfair)] font-bold text-lg w-32"
                    autoFocus
                    onBlur={handleSaveNickname}
                    onKeyDown={e => e.key === 'Enter' && handleSaveNickname()}
                  />
                  <button onClick={handleSaveNickname} className="text-paper hover:text-accent p-1">
                    <Check size={16} />
                  </button>
                </div>
              ) : (
                <div 
                  className="font-[family-name:var(--font-playfair)] font-bold text-lg cursor-pointer hover:text-paper/80 flex items-center gap-2"
                  onClick={() => setIsEditingName(true)}
                  title="Click to edit nickname"
                >
                  Welcome back, {user.nickname}
                  <Settings2 size={14} className="opacity-50" />
                </div>
              )}
            </div>

            <div className="overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {/* Avatar Picker */}
              <div className="p-4 border-b border-border">
                <h3 className="ui-text text-xs font-bold uppercase tracking-widest text-ink-secondary mb-3">
                  Choose your seal
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {(isAvatarsExpanded ? PRESET_AVATARS : PRESET_AVATARS.slice(0, 4)).map((url, i) => (
                    <button
                      key={url}
                      onClick={() => handleUpdateProfile({ avatar_url: url })}
                      className={`relative aspect-square rounded-full border-2 overflow-hidden transition-all ${
                        user.avatar_url === url ? "border-accent scale-110" : "border-transparent hover:border-border grayscale"
                      }`}
                    >
                      <img src={url} alt={`Avatar ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  {!isAvatarsExpanded && (
                    <button
                      onClick={() => setIsAvatarsExpanded(true)}
                      className="relative flex items-center justify-center aspect-square rounded-full border-2 border-border hover:border-ink transition-colors text-ink-secondary hover:text-ink bg-paper/50"
                      title="Show more avatars"
                    >
                      <ChevronDown size={24} />
                    </button>
                  )}
                </div>
                {isAvatarsExpanded && (
                  <button
                    onClick={() => setIsAvatarsExpanded(false)}
                    className="w-full mt-3 py-1 flex items-center justify-center gap-2 text-ink-secondary hover:text-ink transition-colors border-t border-border/50 pt-3"
                  >
                    <ChevronUp size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Show Less</span>
                  </button>
                )}
              </div>

              {/* Interests */}
              <div className="p-4 border-b border-border">
                <h3 className="ui-text text-xs font-bold uppercase tracking-widest text-ink-secondary mb-3">
                  Your Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {NAV_SECTIONS.filter(s => s.slug !== 'india').map(section => (
                    <button
                      key={section.slug}
                      onClick={() => toggleInterest(section.label)}
                      className={`px-3 py-1 text-xs border transition-colors rounded-full ${
                        selectedInterests.includes(section.label)
                          ? "border-accent bg-accent/10 text-accent font-bold"
                          : "border-border text-ink hover:border-ink"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Saved Articles */}
              <div className="p-4">
                <h3 className="ui-text text-xs font-bold uppercase tracking-widest text-ink-secondary mb-3 flex items-center gap-2">
                  <Bookmark size={14} />
                  Reading List
                </h3>
                {loadingArticles ? (
                  <div className="text-center py-4 text-ink-secondary text-sm">Loading...</div>
                ) : savedArticles.length === 0 ? (
                  <div className="text-center py-6 text-ink-secondary text-sm italic font-[family-name:var(--font-cormorant)]">
                    No saved articles yet
                  </div>
                ) : (
                  <div className="space-y-3">
                    {savedArticles.map(article => (
                      <Link 
                        key={article.id} 
                        href={`/article/${article.article_url}`}
                        className="group flex gap-3 hover:bg-ink/5 p-2 -mx-2 transition-colors rounded-sm"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {article.article_image_url && (
                          <div className="w-16 h-12 flex-shrink-0 bg-ink/10 overflow-hidden relative">
                            <img src={article.article_image_url} alt="" className="object-cover w-full h-full grayscale group-hover:grayscale-0" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="ui-text text-[0.6rem] text-accent uppercase">{article.article_source}</p>
                          <h4 className="text-sm font-bold leading-tight line-clamp-2 mt-0.5 font-[family-name:var(--font-inter)]">
                            {article.article_title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-paper border-t border-border mt-auto">
              <button
                onClick={() => {
                  logout();
                  setIsDropdownOpen(false);
                }}
                className="w-full py-2 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
