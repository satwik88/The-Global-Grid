import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { ArticleCard } from "@/components/newspaper/ArticleCard";
import { articles } from "@/lib/content/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const uniqueSlugs = [...new Set(articles.map((a) => a.author.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const authorArticle = articles.find((a) => a.author.slug === slug);
  
  if (!authorArticle) return { title: "Author Not Found" };

  return {
    title: `${authorArticle.author.name} - The Global Grid`,
    description: authorArticle.author.bio,
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const authorArticles = articles.filter((a) => a.author.slug === slug);
  
  if (authorArticles.length === 0) notFound();

  const author = authorArticles[0].author;
  const featuredArticle = authorArticles[0];
  const otherArticles = authorArticles.slice(1);

  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-screen-xl px-4 py-12 md:px-8">
        
        {/* Author Bio Header */}
        <header className="mb-16 pb-12 border-b-4 border-ink flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold tracking-tight text-ink mb-2">
              {author.name}
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest text-accent mb-6 font-bold">
              {author.role}
            </p>
            {author.expertise && (
              <div className="flex flex-wrap gap-2 mb-6">
                {author.expertise.map((exp) => (
                  <span key={exp} className="border border-border text-ink-secondary text-xs px-2 py-1 uppercase tracking-wider">
                    {exp}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="w-full md:w-2/3">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl italic leading-relaxed text-ink-secondary">
              {author.bio}
            </p>
          </div>
        </header>

        {/* Author's Investigations / Articles */}
        <div className="grid grid-cols-12 gap-12">
          
          <div className="col-span-12 lg:col-span-8">
            <h2 className="ui-text mb-8 pb-2 border-b border-thick border-border text-2xl">
              Latest from {author.name}
            </h2>
            
            {featuredArticle && (
              <div className="mb-12">
                <ArticleCard article={featuredArticle} variant="featured" />
              </div>
            )}

            <div className="newspaper-columns-2 gap-8">
              {otherArticles.map((article) => (
                <div key={article.slug} className="mb-8 break-inside-avoid">
                  <ArticleCard article={article} variant="standard" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Rail */}
          <div className="col-span-12 lg:col-span-4 bg-paper/50 p-6 border border-border h-fit">
            <h3 className="ui-text mb-6 pb-2 border-b border-border text-lg">
              Contact & Pitching
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-ink-secondary mb-4">
              To send confidential tips or documents to {author.name}, please use our SecureDrop system. General inquiries can be directed to the editorial desk.
            </p>
            <div className="ui-text text-accent hover:underline cursor-pointer">
              View Public PGP Key →
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
