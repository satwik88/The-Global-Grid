import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Legal policies and terms for The Global Grid.",
};

export default function LegalIndexPage() {
  return (
    <>
      <h1 className="mb-4">Legal Information</h1>
      <p className="ui-text text-ink-secondary text-lg mb-10">
        Transparency and trust are at the core of The Global Grid. Please review our legal policies below.
      </p>

      <div className="flex flex-col gap-8 not-prose">
        <Link href="/legal/privacy" className="group block border border-border/50 p-6 rounded-lg hover:border-accent transition-colors bg-white/5 dark:bg-black/10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Privacy Policy</h2>
          <p className="ui-text text-ink-secondary">Learn about what data we collect, how we use it, and how we protect your privacy.</p>
        </Link>
        
        <Link href="/legal/terms" className="group block border border-border/50 p-6 rounded-lg hover:border-accent transition-colors bg-white/5 dark:bg-black/10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Terms of Service</h2>
          <p className="ui-text text-ink-secondary">Read the rules, guidelines, and terms that govern your use of The Global Grid.</p>
        </Link>
        
        <Link href="/legal/cookies" className="group block border border-border/50 p-6 rounded-lg hover:border-accent transition-colors bg-white/5 dark:bg-black/10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Cookie Policy</h2>
          <p className="ui-text text-ink-secondary">Understand how we use essential cookies to keep your session secure.</p>
        </Link>
      </div>
    </>
  );
}
