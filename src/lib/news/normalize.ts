import { NormalizedArticle } from './types';

export function normalizeNewsData(article: any): NormalizedArticle {
  return {
    title: article.title,
    description: article.description ?? '',
    url: article.link,
    image: article.image_url ?? null,
    publishedAt: article.pubDate,
    source: article.source_id ?? 'NewsData',
  };
}

export function normalizeGNews(article: any): NormalizedArticle {
  return {
    title: article.title,
    description: article.description ?? '',
    url: article.url,
    image: article.image ?? null,
    publishedAt: article.publishedAt,
    source: article.source?.name ?? 'GNews',
  };
}

export function normalizeCurrents(article: any): NormalizedArticle {
  return {
    title: article.title,
    description: article.description ?? '',
    url: article.url,
    image: article.image ?? null,
    publishedAt: article.published,
    source: article.author ?? 'Currents',
  };
}
