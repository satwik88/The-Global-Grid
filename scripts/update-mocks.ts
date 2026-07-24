import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import type { Article, SectionSlug } from '../src/lib/types';

// Provide __dirname equivalent in ES modules if needed, but since we'll run this with tsx we can just use process.cwd()
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const API_KEY = process.env.NEWSDATA_API_KEY;
if (!API_KEY) {
  console.error("NEWSDATA_API_KEY is not set in .env.local");
  process.exit(1);
}

const SECTIONS = [
  { slug: 'front-page', category: 'top' },
  { slug: 'world', category: 'world' },
  { slug: 'business', category: 'business' },
  { slug: 'technology', category: 'technology' },
  { slug: 'science', category: 'science' },
  { slug: 'culture', category: 'entertainment' },
  { slug: 'travel', category: 'tourism' },
  { slug: 'opinion', category: 'politics' },
  { slug: 'india', category: 'top', country: 'in' },
];

const MAX_ARTICLES_PER_SECTION = 20;

function generateId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}

function slugify(text: string) {
  return (text || "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function stripHtmlAndCss(text: string): string {
  if (!text) return "";
  return text
    .replace(/<style[^>]*>[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\.[a-zA-Z0-9_-]+\s*\{[^}]*\}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchCategory(category: string, country?: string) {
  let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${category}&language=en`;
  if (country) url += `&country=${country}`;
  console.log(`Fetching: ${url.replace(API_KEY as string, 'API_KEY')}`);

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Error fetching ${category}: ${res.statusText}`);
    return [];
  }
  const data = await res.json();
  return data.results || [];
}

async function main() {
  console.log("Starting mock data update...");

  // Dynamically import the current articles so we can merge them
  let allArticles: Article[] = [];
  try {
    const oldArticlesModule = await import('../src/lib/content/articles');
    allArticles = oldArticlesModule.articles || [];
  } catch (err) {
    console.log("Could not load old articles, starting fresh.", (err as Error).message);
  }

  const newArticles: Article[] = [];

  for (const sec of SECTIONS) {
    const results = await fetchCategory(sec.category, sec.country);
    for (const item of results) {
      if (!item.title) continue;
      if (!item.content && !item.description) continue;

      const headline = item.title;
      const slug = slugify(headline).slice(0, 60);

      const article = {
        id: generateId(),
        slug,
        headline,
        deck: stripHtmlAndCss(item.description || item.content?.substring(0, 150) || ""),
        author: {
          name: item.creator?.[0] || "Staff Writer",
          slug: slugify(item.creator?.[0] || "staff"),
          role: "Correspondent",
          expertise: [sec.slug]
        },
        section: sec.slug as SectionSlug,
        publishedAt: item.pubDate || new Date().toISOString(),
        readingTime: Math.max(3, Math.floor((item.content || "").length / 1000)),
        image: item.image_url || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
        body: item.content ? stripHtmlAndCss(item.content).split('\n').filter((p: string) => p.trim().length > 0) : [stripHtmlAndCss(item.description || "No content available.")],
        tags: item.keywords || [sec.slug, "news"],
        relatedSlugs: [],
        sourceUrl: item.link
      };

      newArticles.push(article);
    }
  }

  console.log(`Fetched ${newArticles.length} new articles.`);

  // Combine new and old, removing duplicates by slug
  const combined = [...newArticles, ...allArticles];
  const uniqueSlugs = new Set<string>();
  const deduped: Article[] = [];

  for (const art of combined) {
    if (!uniqueSlugs.has(art.slug)) {
      uniqueSlugs.add(art.slug);
      deduped.push(art);
    }
  }

  // Group by section to enforce the sliding window (delete oldest)
  const bySection: Record<string, Article[]> = {};
  for (const art of deduped) {
    if (!bySection[art.section]) bySection[art.section] = [];
    bySection[art.section].push(art);
  }

  const finalArticles: Article[] = [];
  for (const section in bySection) {
    // Sort descending by date
    const sorted = bySection[section].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    // Keep only the latest N articles, automatically discarding the oldest
    finalArticles.push(...sorted.slice(0, MAX_ARTICLES_PER_SECTION));
  }

  // Final sort overall by date
  finalArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  console.log(`Final preserved article count: ${finalArticles.length} (Max ${MAX_ARTICLES_PER_SECTION} per section)`);

  // Overwrite the TypeScript file while preserving other exports
  const outPath = path.resolve(process.cwd(), 'src/lib/content/articles.ts');

  let bottomHalf = "";
  if (fs.existsSync(outPath)) {
    const currentFile = fs.readFileSync(outPath, 'utf8');
    const match = currentFile.match(/export const archiveEditions[\s\S]+/);
    if (match) {
      bottomHalf = '\n\n' + match[0];
    }
  }

  const fileContent = `import type { Article, ArchiveEdition } from "@/lib/types";\n\nexport const articles: Article[] = ${JSON.stringify(finalArticles, null, 2)};\n${bottomHalf}`;

  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log("Successfully updated src/lib/content/articles.ts! All placeholders and old articles have been purged.");
}

main().catch(console.error);
