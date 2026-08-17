import { articles } from "@/lib/content/articles";
import { formatEditorialHeadline } from "@/lib/utils/editorial";
import { isRecent, getRelativeTime } from "@/lib/utils/time";
import { normalizeTitle } from "@/lib/utils/dedup";
import type { Article, SectionSlug } from "@/lib/types";

let cachedArticles: Article[] = [];

function stripHtmlAndCss(text: string): string {
  if (!text) return "";
  return text
    .replace(/<style[^>]*>[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\.[a-zA-Z0-9_-]+\s*\{[^}]*\}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function mapSectionToCategory(section: string): { category: string, country?: string } {
  switch (section) {
    case "world": return { category: "world" };
    case "business": return { category: "business" };
    case "technology": return { category: "technology" };
    case "ai": return { category: "technology" };
    case "science": return { category: "science" };
    case "culture": return { category: "entertainment" };
    case "travel": return { category: "tourism" };
    case "opinion": return { category: "politics" };
    case "india": return { category: "top", country: "in" };
    case "games": return { category: "entertainment" };
    case "grid-intelligence": return { category: "top" };
    case "front-page":
    default:
      return { category: "top" };
  }
}

import { getNewsTiered } from '../news';
import type { NormalizedArticle } from '../news/types';

function mapNormalizedArticleToArticle(data: NormalizedArticle, sectionSlug: SectionSlug): Article {
  const authorName = data.source || "Staff Writer";
  const textContent = stripHtmlAndCss(data.description || data.title || "");
  const wordCount = textContent.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const bodyParas = textContent.split(/\n+/).filter((p: string) => p.trim().length > 0).map((p: string) => p.trim());
  if (bodyParas.length === 0) bodyParas.push(data.title);

  const cleanHeadline = formatEditorialHeadline(data.title);
  const articleId = data.url ? encodeURIComponent(data.url) : cleanHeadline.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    id: articleId,
    slug: articleId,
    headline: cleanHeadline,
    deck: stripHtmlAndCss(data.description || data.title || ""),
    author: {
      name: authorName,
      slug: authorName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      role: "Correspondent",
    },
    section: sectionSlug,
    publishedAt: data.publishedAt ? new Date(data.publishedAt).toISOString() : new Date().toISOString(),
    updatedAt: data.publishedAt ? getRelativeTime(data.publishedAt) : undefined,
    isBreaking: data.publishedAt ? isRecent(data.publishedAt, 4) : false, 
    readingTime: readingTime,
    image: data.image || "", 
    body: bodyParas,
    tags: [sectionSlug],
    relatedSlugs: [],
    sourceUrl: data.url,
  };
}

export async function getNews(sectionSlug: SectionSlug = "front-page", _tryDomainPref: boolean = true, _query?: string): Promise<Article[] | null> {
  const { category, country: _country } = mapSectionToCategory(sectionSlug);
  
  try {
    const articles = await getNewsTiered(category);
    if (!articles || articles.length === 0) {
      return null;
    }

    const mapped = articles.map(raw => mapNormalizedArticleToArticle(raw, sectionSlug));

    const uniqueMapped: Article[] = [];
    const seenHeadlines = new Set<string>();
    for (const article of mapped) {
      const norm = normalizeTitle(article.headline);
      if (!seenHeadlines.has(norm)) {
        seenHeadlines.add(norm);
        uniqueMapped.push(article);
      }
    }

    const newMap = new Map(cachedArticles.map(a => [a.id, a]));
    uniqueMapped.forEach((a: Article) => newMap.set(a.id, a));
    cachedArticles = Array.from(newMap.values());

    return uniqueMapped;
  } catch (error) {
    console.error("Failed to fetch from tiered news API:", error);
    return null;
  }
}





function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function getBestAvailableNews(sectionSlug: SectionSlug = "front-page", tryDomainPref: boolean = true, query?: string): Promise<Article[]> {
  const combined: Article[] = [];
  const seen = new Set<string>();

  const addArticles = (sourceArticles: Article[]) => {
    for (const a of sourceArticles) {
      const norm = normalizeTitle(a.headline);
      if (!seen.has(norm)) {
        seen.add(norm);
        combined.push(a);
      } else {
        console.warn(`[NewsService] Duplicate skipped during fetch merge: ${a.headline}`);
      }
    }
  };

  const liveNews = await getNews(sectionSlug, tryDomainPref, query);
  if (liveNews) {
    console.log(`${sectionSlug} section: served from newsdata.io`);
    addArticles(liveNews);
  }

  if (combined.length >= 3) return combined;



  if (combined.length >= 3) return combined;

  console.log(`${sectionSlug} section: served from mock fallback (supplemented)`);
  const mockArticles = sectionSlug === "front-page" 
    ? articles.filter(a => parseInt(a.id) < 5000) 
    : articles.filter(a => a.section === sectionSlug);

  let finalMocks = mockArticles;
  if (query) {
    const q = query.toLowerCase();
    finalMocks = mockArticles.filter(a => 
      a.subcategory?.toLowerCase() === q || 
      a.headline.toLowerCase().includes(q) || 
      a.deck.toLowerCase().includes(q)
    );
  }

  addArticles(shuffleArray(finalMocks));
  return combined;
}

export async function fetchIndiaSubcategoryNews(subcategory: string): Promise<Article[]> {
  return getBestAvailableNews("india", true, subcategory);
}

export async function fetchLiveNewsFeed(section?: string): Promise<Article[]> {
  return getBestAvailableNews((section as SectionSlug) || "front-page");
}



export async function fetchArticle(slug: string): Promise<Article | undefined> {

  let liveMatch = cachedArticles.find(a => a.slug === slug);
  if (liveMatch) return liveMatch;

  await Promise.all([
    getBestAvailableNews("front-page"),
    getBestAvailableNews("world"),
    getBestAvailableNews("business"),
    getBestAvailableNews("technology"),
    getBestAvailableNews("science"),
    getBestAvailableNews("india")
  ]);

  liveMatch = cachedArticles.find(a => a.slug === slug);
  if (liveMatch) return liveMatch;

  return articles.find((a) => a.slug === slug);
}

export async function fetchSearch(query: string): Promise<Article[]> {
  const q = query.toLowerCase();
  
  if (q) {
    const liveResults = await getBestAvailableNews("front-page", false, q);
    if (liveResults && liveResults.length > 0) {
      return liveResults;
    }
  }

  const matches = cachedArticles.filter(a => 
    a.headline.toLowerCase().includes(q) || 
    a.deck.toLowerCase().includes(q)
  );

  if (matches.length > 0) return matches;

  return articles.filter(a => 
    a.headline.toLowerCase().includes(q) || 
    a.deck.toLowerCase().includes(q)
  );
}


