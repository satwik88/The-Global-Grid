import type { Metadata } from "next";
import Link from "next/link";

import { SafeImage } from "@/components/ui/SafeImage";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { archiveEditions } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Archive - Premium Editions",
  description: "Browse past premium editions of The Global Grid",
};

export default function ArchivePage() {
  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <header className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold tracking-tight text-ink mb-4">
            The Archive
          </h1>
          <p className="feature-text text-ink-secondary italic max-w-2xl mx-auto">
            Browse our historic collection of past editions, beautifully preserved for your perusal.
          </p>
          <hr className="rule-double mt-8 max-w-xs mx-auto" />
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {archiveEditions.map((edition) => (
            <Link
              key={edition.id}
              href={`/edition/${edition.id}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] w-full border-4 border-ink overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                {edition.coverImage && (
                  <SafeImage
                    src={edition.coverImage}
                    alt={edition.coverHeadline}
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-paper">

                  <div className="flex items-center justify-between ui-text text-[0.625rem] pb-3 border-b border-paper/30 uppercase tracking-widest font-bold">
                    <span>
                      {new Date(edition.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>No. {edition.editionNumber}</span>
                  </div>

                  <div className="text-center mt-6">
                    <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight drop-shadow-md">
                      THE GLOBAL GRID
                    </p>
                    <p className="ui-text text-[0.625rem] mt-2 tracking-[0.3em] uppercase text-accent font-bold">
                      {edition.type === "weekend" ? "Weekend Edition" : "Daily Edition"}
                    </p>
                  </div>

                  <div className="text-center mt-auto pb-4">
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight mb-3 drop-shadow-lg group-hover:text-accent transition-colors">
                      {edition.coverHeadline}
                    </h2>
                    <p className="font-[family-name:var(--font-inter)] text-[0.65rem] uppercase tracking-widest text-paper/80">
                      Inside: {edition.articleCount} exclusive reports
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
