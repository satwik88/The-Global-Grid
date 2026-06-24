import Link from "next/link";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";

export default function NotFound() {
  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-4xl px-4 py-24 md:px-8 text-center flex-1 flex flex-col items-center justify-center min-h-[60vh]">

        <div className="border-4 border-double border-ink p-12 bg-paper shadow-2xl relative rotate-[-1deg] max-w-2xl mx-auto">

          <div className="absolute -top-2 -left-2 w-8 h-8 bg-paper border-r border-b border-border/50 transform -rotate-45" />

          <div className="uppercase tracking-[0.3em] font-[family-name:var(--font-inter)] text-sm font-bold text-ink-secondary mb-6 pb-4 border-b border-border">
            Editorial Notice
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-7xl font-bold tracking-tight text-ink mb-6">
            404
          </h1>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Page Not Found
          </h2>

          <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-ink-secondary mb-8 leading-relaxed max-w-md mx-auto">
            This story appears to have been misplaced in the archives. It may have been retracted, renamed, or lost to history.
          </p>

          <Link 
            href="/" 
            className="inline-block bg-ink text-paper px-8 py-3 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest hover:bg-accent transition-colors font-bold"
          >
            Return to Front Page
          </Link>

          <hr className="rule-thick mt-12" />
        </div>

      </main>

      <Footer />
    </>
  );
}
