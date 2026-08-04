import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Masthead />
      <main className="bg-paper text-ink min-h-screen py-10 px-4 md:px-8">
        <article className="max-w-[800px] mx-auto">
          <div className="prose prose-lg max-w-none prose-p:mb-6 prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-accent prose-img:rounded-md">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
