import {
  articles,
  getFeaturedArticles as getFeaturedMock,
  getEditorPicks as getEditorPicksMock,
  getArticlesBySection as getArticlesBySectionMock,
  getArticleBySlug as getArticleBySlugMock,
  searchArticles as searchArticlesMock,
} from "@/lib/content/articles";
import type { Article } from "@/lib/types";

/**
 * News Service Abstraction
 * 
 * This service models a live news architecture.
 * Structure: Admin Content + Live News APIs + Editorial Curation.
 * 
 * Currently resolves our rich mock data, but structured to allow 
 * seamless integration with a live news API (like NewsAPI) in the future.
 */

// Simulates network latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchLiveNewsFeed(section?: string): Promise<Article[]> {
  // In a real app, this would fetch from a Live News API.
  // Example: fetch(`https://newsapi.org/v2/top-headlines?category=${section}`)
  await delay(50);
  
  if (section) {
    return getArticlesBySectionMock(section);
  }
  return articles;
}

export async function fetchCuratedLeadStory(): Promise<Article | null> {
  // Editorial override: fetches the manually curated top story
  await delay(50);
  const featured = getFeaturedMock();
  return featured.length > 0 ? featured[0] : null;
}

export async function fetchEditorPicks(): Promise<Article[]> {
  await delay(50);
  return getEditorPicksMock();
}

export async function fetchSecondaryFeatures(): Promise<Article[]> {
  await delay(50);
  const featured = getFeaturedMock();
  return featured.slice(1, 5); // Returns next 4 featured
}

export async function fetchArticle(slug: string): Promise<Article | undefined> {
  await delay(50);
  return getArticleBySlugMock(slug);
}

export async function fetchSearch(query: string): Promise<Article[]> {
  await delay(50);
  return searchArticlesMock(query);
}
