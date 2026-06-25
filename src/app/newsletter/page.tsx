"use client";

import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { MorningBriefTemplate, EveningBriefTemplate, WeeklyIntelligenceTemplate } from "@/components/newsletter/Templates";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function NewsletterPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name") || "";
    
    const preferences = [];
    if (formData.get("morning-brief")) preferences.push("morning-brief");
    if (formData.get("evening-brief")) preferences.push("evening-brief");
    if (formData.get("weekly-intelligence")) preferences.push("weekly-intelligence");

    if (preferences.length === 0) {
      setErrorMessage("Please select at least one newsletter.");
      setStatus("error");
      return;
    }

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
    <>
      <Masthead />
      
      <main className="mx-auto max-w-screen-xl px-4 py-12 md:px-8">
        <header className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold tracking-tight text-ink uppercase mb-4">
            The Global Grid Newsletters
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-2xl text-ink-secondary italic max-w-2xl mx-auto">
            World-class journalism, delivered directly to your inbox.
          </p>
          <hr className="rule-double mt-8 max-w-md mx-auto" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <MorningBriefTemplate />
          <EveningBriefTemplate />
          <WeeklyIntelligenceTemplate />
        </div>

        <section className="max-w-2xl mx-auto bg-paper border-2 border-ink p-8 md:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8 text-center uppercase tracking-widest">
            Subscribe Now
          </h2>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-600" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2">Welcome to the Grid</h3>
              <p className="body-text">Your subscription has been confirmed. You will receive your first briefing soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block ui-text mb-2 text-ink">Name (Optional)</label>
                  <input type="text" id="name" name="name" className="w-full border border-border p-3 focus:outline-none focus:border-accent bg-paper text-ink" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block ui-text mb-2 text-ink">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full border border-border p-3 focus:outline-none focus:border-accent bg-paper text-ink" placeholder="jane@example.com" />
                </div>
              </div>

              <div>
                <label className="block ui-text mb-4 text-ink">Select Newsletters</label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="morning-brief" defaultChecked className="mt-1 w-4 h-4 accent-accent" />
                    <div>
                      <span className="font-bold text-ink block group-hover:text-accent transition-colors">Morning Brief</span>
                      <span className="text-sm text-ink-secondary">Top stories to start your day. (7:00 AM IST)</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="evening-brief" defaultChecked className="mt-1 w-4 h-4 accent-accent" />
                    <div>
                      <span className="font-bold text-ink block group-hover:text-accent transition-colors">Evening Brief</span>
                      <span className="text-sm text-ink-secondary">A wrap-up of the day's events. (7:00 PM IST)</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="weekly-intelligence" defaultChecked className="mt-1 w-4 h-4 accent-accent" />
                    <div>
                      <span className="font-bold text-ink block group-hover:text-accent transition-colors">Grid Intelligence Weekly</span>
                      <span className="text-sm text-ink-secondary">Deep analysis and insights. (Every Sunday)</span>
                    </div>
                  </label>
                </div>
              </div>

              {status === "error" && (
                <div className="text-red-600 bg-red-50 p-3 flex items-center gap-2 border border-red-200">
                  <AlertCircle size={18} />
                  <span className="text-sm font-bold">{errorMessage}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-ink text-paper py-4 font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === "loading" ? "Processing..." : (
                  <>Subscribe to the Grid <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
