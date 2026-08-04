"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";
import { signIn } from "next-auth/react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [googleToast, setGoogleToast] = useState(false);
  
  const { mutate } = useAuth();

  const handleMigration = async () => {
    try {
      const saved = localStorage.getItem("gg-saved-articles");
      if (saved) {
        const articles = JSON.parse(saved);
        if (Array.isArray(articles) && articles.length > 0) {
          const formattedArticles = articles.map(a => ({
            article_url: a.slug,
            article_title: a.headline,
            article_image_url: a.heroImage || a.image || a.thumbnailImage || null,
            article_source: a.section || "Unknown"
          }));

          await fetch("/api/articles/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formattedArticles)
          });
          
          localStorage.removeItem("gg-saved-articles");
          window.dispatchEvent(new Event("gg-bookmarks-updated"));
        }
      }
    } catch (err) {
      console.error("Migration failed:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isSignUp ? "/api/auth/signup" : "/api/auth/login";
      const body = isSignUp ? { email, password, nickname } : { email, password };
      
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (res.ok) {
        await mutate(); // Refresh user context
        await handleMigration();
        onClose();
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-paper border border-border shadow-xl overflow-hidden z-10 rounded-2xl"
          >
            <div className="relative flex items-center justify-center p-4 border-b border-border bg-paper/50">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink uppercase tracking-wider">
                {isSignUp ? "Create Account" : "Sign In"}
              </h2>
              <button
                onClick={onClose}
                className="absolute right-4 p-1 hover:text-accent transition-colors text-ink-secondary"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 border border-red-500/30 bg-red-500/10 text-red-600 text-sm font-medium">
                    {error}
                  </div>
                )}
                
                {isSignUp && (
                  <div className="space-y-1">
                    <label className="ui-text text-sm font-bold text-ink uppercase tracking-wider">
                      Nickname
                    </label>
                    <input
                      type="text"
                      required
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="w-full px-5 py-2.5 bg-transparent border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-ink rounded-full"
                      placeholder="How should we call you?"
                    />
                  </div>
                )}
                
                <div className="space-y-1">
                  <label className="ui-text text-sm font-bold text-ink uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-2.5 bg-transparent border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-ink rounded-full"
                    placeholder="name@example.com"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="ui-text text-sm font-bold text-ink uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-5 py-2.5 bg-transparent border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-ink rounded-full"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-ink text-paper py-3 px-4 font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-70 rounded-full"
                >
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>

                <div className="relative mt-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-paper px-2 text-ink-secondary uppercase tracking-widest">Or</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="w-full bg-transparent border border-border text-ink py-3 px-4 font-bold uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors flex items-center justify-center gap-2 rounded-full relative"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
              </form>
              
              <div className="mt-6 text-center border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError("");
                  }}
                  className="ui-text text-ink-secondary hover:text-accent transition-colors"
                >
                  {isSignUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Subscribe"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
