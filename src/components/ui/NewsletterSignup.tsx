"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface NewsletterSignupProps {
  className?: string;
}

export function NewsletterSignup({ className = "" }: NewsletterSignupProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name") || "";
    
    // Default to morning brief if no specific checkboxes in this minimal form
    const preferences = ["morning-brief", "evening-brief", "weekly-intelligence"]; 

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, preferences }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className={`bg-ink text-paper p-8 md:p-12 border-t-4 border-accent relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-paper opacity-5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
          The World in Your Inbox
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-paper/80 mb-8 max-w-xl mx-auto">
          Get the stories that matter most, delivered straight to you. Subscribe to our curated briefings and intelligence reports.
        </p>

        {status === "success" ? (
          <div className="bg-paper/10 border border-paper/20 rounded p-6 flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="text-accent w-12 h-12 mb-4" />
            <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">Subscription Confirmed</h4>
            <p className="text-paper/80 text-sm">Thank you for joining The Global Grid. Your first briefing will arrive soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name (Optional)" 
              className="flex-1 bg-paper/10 border border-paper/20 text-paper placeholder:text-paper/50 px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Email Address" 
              className="flex-[2] bg-paper/10 border border-paper/20 text-paper placeholder:text-paper/50 px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            />
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="bg-accent text-paper px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "loading" ? "Subscribing..." : (
                <>Subscribe <Send size={14} /></>
              )}
            </button>
          </form>
        )}
        
        {status === "error" && (
          <div className="text-red-400 text-sm mt-4 flex items-center justify-center gap-2">
            <AlertCircle size={14} />
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
