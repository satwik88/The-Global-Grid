import { articles } from "@/lib/content/articles";
import { formatEditorialHeadline } from "@/lib/utils/editorial";
import { isRecent, getRelativeTime } from "@/lib/utils/time";
import { normalizeTitle } from "@/lib/utils/dedup";
import type { Article, SectionSlug } from "@/lib/types";

const API_KEY = process.env.NEWSDATA_API_KEY;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

let cachedArticles: Article[] = [];

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

function mapNewsDataToArticle(data: any, sectionSlug: SectionSlug): Article {
  const authorName = (data.creator && data.creator.length > 0) ? data.creator[0] : (data.source_id || "Staff Writer");

  let textContent = data.description || data.title || "";
  if (data.content && data.content !== "ONLY AVAILABLE IN PAID PLANS" && data.content.length > textContent.length) {
    textContent = data.content;
  }

  const wordCount = textContent.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const bodyParas = textContent.split(/\n+/).filter((p: string) => p.trim().length > 0).map((p: string) => p.trim());
  if (bodyParas.length === 0) bodyParas.push(data.title);

  const cleanHeadline = formatEditorialHeadline(data.title);

  return {
    id: data.article_id,
    slug: data.article_id,
    headline: cleanHeadline,
    deck: data.description || data.title,
    author: {
      name: authorName,
      slug: authorName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      role: "Correspondent",
    },
    section: sectionSlug,
    publishedAt: new Date(data.pubDate).toISOString(),
    updatedAt: data.pubDate ? getRelativeTime(data.pubDate) : undefined,
    isBreaking: data.pubDate ? isRecent(data.pubDate, 4) : false, 
    readingTime: readingTime,
    image: data.image_url || "", 
    body: bodyParas,
    tags: data.keywords || [sectionSlug],
    relatedSlugs: [],
  };
}

export async function getNews(sectionSlug: SectionSlug = "front-page", tryDomainPref: boolean = true): Promise<Article[] | null> {
  if (!API_KEY) {
    console.warn("NEWSDATA_API_KEY is not defined. Falling back to mocks.");
    return null;
  }

  const { category, country } = mapSectionToCategory(sectionSlug);

  let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${category}&language=en`;
  if (country) {
    url += `&country=${country}`;
  }

  if (sectionSlug === "india" && tryDomainPref) {
    url += `&domainurl=thehindu.com`;
  }

  try {

    const response = await fetch(url, { next: { revalidate: 900 } });
    if (!response.ok) {
      console.error(`NewsData API error: ${response.status} ${response.statusText}`);
      if (sectionSlug === "india" && tryDomainPref) {
        return getNews(sectionSlug, false);
      }
      return null;
    }

    const data = await response.json();
    if (data.status === "success" && data.results) {
      if (sectionSlug === "india" && tryDomainPref && data.results.length < 5) {
        console.log(`India section: The Hindu returned ${data.results.length} articles, falling back to general India fetch.`);
        return getNews(sectionSlug, false);
      }

      const mapped = data.results.map((raw: any) => mapNewsDataToArticle(raw, sectionSlug));

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
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch from NewsData:", error);
    if (sectionSlug === "india" && tryDomainPref) {
      return getNews(sectionSlug, false);
    }
    return null;
  }
}

function mapRapidApiToArticle(data: any, sectionSlug: SectionSlug): Article {
  const authorName = data.source || "The Hindu";

  let textContent = data.description || data.summary || data.title || "";

  const wordCount = textContent.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const bodyParas = textContent.split(/\n+/).filter((p: string) => p.trim().length > 0).map((p: string) => p.trim());
  if (bodyParas.length === 0) bodyParas.push(data.title);

  const cleanHeadline = formatEditorialHeadline(data.title);

  const id = data.url ? Buffer.from(data.url).toString('base64').substring(0, 16) : Math.random().toString(36).substring(7);

  return {
    id: id,
    slug: id,
    headline: cleanHeadline,
    deck: data.description || data.summary || data.title,
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
    image: data.image || data.imageUrl || "", 
    body: bodyParas,
    tags: [sectionSlug],
    relatedSlugs: [],
  };
}

export async function fetchFromTheHinduRapidAPI() {
  if (!RAPIDAPI_KEY) {
    return null;
  }

  const url = `https://the-hindu-national-news.p.rapidapi.com/`;

  try {
    const response = await fetch(url, { 
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "the-hindu-national-news.p.rapidapi.com"
      },
      next: { revalidate: 900 } 
    });
    if (!response.ok) {
      console.error(`RapidAPI error: ${response.status} ${response.statusText}`);
      return null;
    }
    const data = await response.json();

    const articlesArray = Array.isArray(data) ? data : data.articles || data.data;

    if (articlesArray && Array.isArray(articlesArray)) {
      const mapped = articlesArray.map((raw: any) => mapRapidApiToArticle(raw, "india"));

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
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch from RapidAPI:", error);
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

export async function getBestAvailableNews(sectionSlug: SectionSlug = "front-page"): Promise<Article[]> {
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

  let liveNews = await getNews(sectionSlug);
  if (liveNews) {
    console.log(`${sectionSlug} section: served from newsdata.io`);
    addArticles(liveNews);
  }

  if (combined.length >= 3) return combined;

  if (sectionSlug === "india") {
    liveNews = await fetchFromTheHinduRapidAPI();
    if (liveNews) {
      console.log(`${sectionSlug} section: served from The Hindu RapidAPI fallback (supplemented)`);
      addArticles(liveNews);
    }
  }

  if (combined.length >= 3) return combined;

  console.log(`${sectionSlug} section: served from mock fallback (supplemented)`);
  const mockArticles = sectionSlug === "front-page" 
    ? articles.filter(a => parseInt(a.id) < 5000) 
    : articles.filter(a => a.section === sectionSlug);

  addArticles(shuffleArray(mockArticles));
  return combined;
}

export async function fetchLiveNewsFeed(section?: string): Promise<Article[]> {
  return getBestAvailableNews((section as SectionSlug) || "front-page");
}

export async function fetchCuratedLeadStory(): Promise<Article | null> {
  const news = await getBestAvailableNews("front-page");
  return news[0] || null;
}

export async function fetchEditorPicks(): Promise<Article[]> {
  const news = await getBestAvailableNews("front-page");
  if (news.length > 3) return news.slice(1, 4);
  return news.slice(0, 3);
}

export async function fetchSecondaryFeatures(): Promise<Article[]> {
  const news = await getBestAvailableNews("front-page");
  if (news.length > 7) return news.slice(4, 8);
  return news.slice(0, 4);
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
