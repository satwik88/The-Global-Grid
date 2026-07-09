import { articles as staticArticles } from "@/lib/content/articles";
import type { Article, SectionSlug } from "@/lib/types";

const NEWS_API_KEY = process.env.NEWS_API_KEY;

let cachedArticles: Article[] = [];

export interface FetchNewsOptions {
  category?: string;
  country?: string;
  q?: string;
  pageSize?: number;
}

// Helper to generate a basic slug
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export async function fetchNews(
  sectionSlug: SectionSlug,
  options: FetchNewsOptions = {}
): Promise<Article[]> {
  // Determine API mapping based on section
  let category = options.category;
  let country = options.country || "us";
  let q = options.q;

  switch (sectionSlug) {
    case "world":
      category = "general";
      country = "us";
      break;
    case "business":
      category = "business";
      break;
    case "technology":
      category = "technology";
      break;
    case "ai":
      category = "technology";
      q = "artificial intelligence";
      break;
    case "science":
      category = "science";
      break;
    case "culture":
      category = "entertainment";
      break;
    case "india":
      category = "general";
      country = "in";
      break;
    case "grid-intelligence":
      category = "general";
      q = "geopolitics";
      break;
    default:
      // Default fallback for front-page or unmapped sections
      category = category || "general";
      country = country || "us";
      break;
  }

  // If no API key is present, fallback immediately
  if (!NEWS_API_KEY) {
    console.warn("NEWS_API_KEY is missing. Falling back to static data.");
    return fallbackToStatic(sectionSlug);
  }

  const isEverything = !!q;
  const endpoint = isEverything ? "everything" : "top-headlines";
  const url = new URL(`https://newsapi.org/v2/${endpoint}`);
  
  if (!isEverything && country) {
    url.searchParams.append("country", country);
  }
  if (!isEverything && category) {
    url.searchParams.append("category", category);
  }
  
  if (q) {
    url.searchParams.append("q", q);
    if (isEverything) {
      url.searchParams.append("sortBy", "publishedAt");
    }
  }
  
  url.searchParams.append("pageSize", (options.pageSize || 20).toString());
  url.searchParams.append("apiKey", NEWS_API_KEY);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`NewsAPI returned ${res.status}. Falling back to static data.`);
      return fallbackToStatic(sectionSlug);
    }

    const data = await res.json();

    if (data.status !== "ok" || !data.articles || data.articles.length === 0) {
      return fallbackToStatic(sectionSlug);
    }

    const mappedArticles: Article[] = data.articles
      .filter((raw: any) => raw.title && raw.title !== "[Removed]")
      .map((raw: any) => {
        const title = raw.title;
        const generatedSlug = slugify(title).substring(0, 50) + "-" + Math.random().toString(36).substring(2, 7);
        const description = raw.description || title;
        const content = raw.content || description;
        
        // Calculate reading time based on content
        const wordCount = content.split(" ").length;
        const readingTime = Math.max(1, Math.ceil(wordCount / 200));

        // Format body as paragraphs
        const bodyParas = content
          .split(/\n+/)
          .filter((p: string) => p.trim().length > 0)
          .map((p: string) => p.trim());
        
        if (bodyParas.length === 0) bodyParas.push(title);

        return {
          id: generatedSlug,
          slug: generatedSlug,
          headline: title,
          deck: description,
          author: {
            name: raw.author || raw.source?.name || "Staff Writer",
            slug: slugify(raw.author || raw.source?.name || "staff"),
            role: "Correspondent",
          },
          section: sectionSlug,
          publishedAt: raw.publishedAt || new Date().toISOString(),
          readingTime,
          image: raw.urlToImage || "",
          body: bodyParas,
          tags: [sectionSlug, category || "general"],
          relatedSlugs: [],
          sourceUrl: raw.url,
          publication: raw.source?.name,
        } as Article;
      });

    // If for some reason we filtered everything out
    if (mappedArticles.length === 0) {
      return fallbackToStatic(sectionSlug);
    }

    // Cache the articles
    const newMap = new Map(cachedArticles.map(a => [a.id, a]));
    mappedArticles.forEach(a => newMap.set(a.id, a));
    cachedArticles = Array.from(newMap.values());

    return mappedArticles;
  } catch (error) {
    console.error("Failed to fetch from NewsAPI:", error);
    return fallbackToStatic(sectionSlug);
  }
}

function fallbackToStatic(sectionSlug: SectionSlug): Article[] {
  if (sectionSlug === "front-page") {
    return staticArticles.filter((a) => parseInt(a.id) < 5000);
  }
  const filtered = staticArticles.filter((a) => a.section === sectionSlug);
  return filtered.length > 0 ? filtered : staticArticles.slice(0, 10);
}

export async function fetchArticle(slug: string): Promise<Article | undefined> {
  // First check in-memory cache
  let match = cachedArticles.find((a) => a.slug === slug);
  if (match) return match;

  // Try static articles
  match = staticArticles.find((a) => a.slug === slug);
  if (match) return match;

  // Otherwise, we could fetch all major sections to warm the cache,
  // but for now, if it's not cached, return undefined.
  return undefined;
}
