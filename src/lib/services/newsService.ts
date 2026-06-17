import { articles } from "@/lib/content/articles";
import { formatEditorialHeadline } from "@/lib/utils/editorial";
import { isRecent, getRelativeTime } from "@/lib/utils/time";
import type { Article, SectionSlug } from "@/lib/types";

const API_KEY = process.env.NEWSDATA_API_KEY;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;

// Fallback to our existing mock articles if API fails
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
  
  // Use content if valid, otherwise fallback to description
  let textContent = data.description || data.title || "";
  if (data.content && data.content !== "ONLY AVAILABLE IN PAID PLANS" && data.content.length > textContent.length) {
    textContent = data.content;
  }
  
  const wordCount = textContent.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Mocking body paragraphs by splitting long text
  const bodyParas = textContent.split(/\n+/).filter((p: string) => p.trim().length > 0).map((p: string) => p.trim());
  if (bodyParas.length === 0) bodyParas.push(data.title);

  // Apply Editorial Formatting
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
    isBreaking: data.pubDate ? isRecent(data.pubDate, 4) : false, // Consider breaking if published within last 4 hours
    readingTime: readingTime,
    image: data.image_url || "", 
    body: bodyParas,
    tags: data.keywords || [sectionSlug],
    relatedSlugs: [],
  };
}

export async function getNews(sectionSlug: SectionSlug = "front-page") {
  if (!API_KEY) {
    console.warn("NEWSDATA_API_KEY is not defined. Falling back to mocks.");
    return null;
  }

  const { category, country } = mapSectionToCategory(sectionSlug);
  
  let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${category}&language=en`;
  if (country) {
    url += `&country=${country}`;
  }

  try {
    // 900 seconds = 15 minutes cache for auto-refresh
    const response = await fetch(url, { next: { revalidate: 900 } });
    if (!response.ok) {
      console.error(`NewsData API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    if (data.status === "success" && data.results) {
      const mapped = data.results.map((raw: any) => mapNewsDataToArticle(raw, sectionSlug));
      
      // Deduplicate by headline to prevent repeated articles
      const uniqueMapped: Article[] = [];
      const seenHeadlines = new Set();
      for (const article of mapped) {
        if (!seenHeadlines.has(article.headline)) {
          seenHeadlines.add(article.headline);
          uniqueMapped.push(article);
        }
      }
      
      // Accumulate into cache so fetchArticle(slug) works across sections
      const newMap = new Map(cachedArticles.map(a => [a.id, a]));
      uniqueMapped.forEach((a: Article) => newMap.set(a.id, a));
      cachedArticles = Array.from(newMap.values());
      
      return uniqueMapped;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch from NewsData:", error);
    return null;
  }
}

function mapSectionToGNews(section: string): { type: "top-headlines" | "search", query: string } {
  switch (section) {
    case "india": return { type: "top-headlines", query: "category=general&country=in" };
    case "world": return { type: "top-headlines", query: "category=world" };
    case "business": return { type: "top-headlines", query: "category=business" };
    case "technology": return { type: "top-headlines", query: "category=technology" };
    case "ai": return { type: "search", query: "q=\"artificial intelligence\" OR AI" };
    case "science": return { type: "top-headlines", query: "category=science" };
    case "culture": return { type: "top-headlines", query: "category=entertainment" };
    case "travel": return { type: "search", query: "q=travel" };
    case "opinion": return { type: "top-headlines", query: "category=nation" };
    case "games": return { type: "top-headlines", query: "category=entertainment" };
    case "grid-intelligence": return { type: "top-headlines", query: "category=general" };
    case "front-page":
    default:
      return { type: "top-headlines", query: "category=general" };
  }
}

function mapGNewsToArticle(data: any, sectionSlug: SectionSlug): Article {
  const authorName = data.source?.name || "Staff Writer";
  
  let textContent = data.content || data.description || data.title || "";
  
  const wordCount = textContent.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const bodyParas = textContent.split(/\\n+/).filter((p: string) => p.trim().length > 0).map((p: string) => p.trim());
  if (bodyParas.length === 0) bodyParas.push(data.title);

  const cleanHeadline = formatEditorialHeadline(data.title);

  // Generate a pseudo-ID for GNews since they might not provide one
  const id = data.url ? Buffer.from(data.url).toString('base64').substring(0, 16) : Math.random().toString(36).substring(7);

  return {
    id: id,
    slug: id,
    headline: cleanHeadline,
    deck: data.description || data.title,
    author: {
      name: authorName,
      slug: authorName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      role: "Correspondent",
    },
    section: sectionSlug,
    publishedAt: new Date(data.publishedAt).toISOString(),
    updatedAt: data.publishedAt ? getRelativeTime(data.publishedAt) : undefined,
    isBreaking: data.publishedAt ? isRecent(data.publishedAt, 4) : false,
    readingTime: readingTime,
    image: data.image || "", 
    body: bodyParas,
    tags: [sectionSlug],
    relatedSlugs: [],
  };
}

export async function fetchFromGNews(sectionSlug: SectionSlug = "front-page") {
  if (!GNEWS_API_KEY) {
    return null;
  }
  
  const { type, query } = mapSectionToGNews(sectionSlug);
  const url = \`https://gnews.io/api/v4/\${type}?\${query}&lang=en&apikey=\${GNEWS_API_KEY}\`;
  
  try {
    const response = await fetch(url, { next: { revalidate: 900 } });
    if (!response.ok) {
      console.error(\`GNews API error: \${response.status} \${response.statusText}\`);
      return null;
    }
    const data = await response.json();
    if (data.articles) {
      const mapped = data.articles.map((raw: any) => mapGNewsToArticle(raw, sectionSlug));
      
      const uniqueMapped: Article[] = [];
      const seenHeadlines = new Set();
      for (const article of mapped) {
        if (!seenHeadlines.has(article.headline)) {
          seenHeadlines.add(article.headline);
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
    console.error("Failed to fetch from GNews:", error);
    return null;
  }
}

// Helper to shuffle mock data
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function getBestAvailableNews(sectionSlug: SectionSlug = "front-page"): Promise<Article[]> {
  // 1. Try NewsData
  let liveNews = await getNews(sectionSlug);
  if (liveNews && liveNews.length >= 3) {
    console.log(\`\${sectionSlug} section: served from newsdata.io\`);
    return liveNews;
  }
  
  // 2. Try GNews
  liveNews = await fetchFromGNews(sectionSlug);
  if (liveNews && liveNews.length >= 3) {
    console.log(\`\${sectionSlug} section: served from GNews fallback\`);
    return liveNews;
  }
  
  // 3. Fallback to mock
  console.log(\`\${sectionSlug} section: served from mock fallback\`);
  const mockArticles = sectionSlug === "front-page" 
    ? articles.filter(a => parseInt(a.id) < 5000) 
    : articles.filter(a => a.section === sectionSlug);
    
  return shuffleArray(mockArticles);
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
  // Check our live cache first
  let liveMatch = cachedArticles.find(a => a.slug === slug);
  if (liveMatch) return liveMatch;

  // If we are in a fresh request thread and cache is empty, rapidly hydrate it 
  // from Next.js built-in fetch cache (this does NOT hit the network rate limits)
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

  // Fallback to mock
  return articles.find((a) => a.slug === slug);
}

export async function fetchSearch(query: string): Promise<Article[]> {
  // Client side search across whatever we have cached
  const q = query.toLowerCase();
  
  const matches = cachedArticles.filter(a => 
    a.headline.toLowerCase().includes(q) || 
    a.deck.toLowerCase().includes(q)
  );

  if (matches.length > 0) return matches;

  // Fallback to mock
  return articles.filter(a => 
    a.headline.toLowerCase().includes(q) || 
    a.deck.toLowerCase().includes(q)
  );
}
