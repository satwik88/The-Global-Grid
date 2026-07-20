import type { Article, SectionSlug } from "@/lib/types";
import { getBestAvailableNews, fetchArticle as fetchArticleService } from "@/lib/services/newsService";

export interface FetchNewsOptions {
  category?: string;
  country?: string;
  q?: string;
  pageSize?: number;
}

export async function fetchNews(
  sectionSlug: SectionSlug,
  options: FetchNewsOptions = {}
): Promise<Article[]> {
  return getBestAvailableNews(sectionSlug, true, options.q);
}

export async function fetchArticle(slug: string): Promise<Article | undefined> {
  return fetchArticleService(slug);
}
