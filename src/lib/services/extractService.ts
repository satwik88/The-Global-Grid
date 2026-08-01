import { Redis } from '@upstash/redis';
import { Readability } from '@mozilla/readability';
import { parseHTML } from 'linkedom';

type ExtractedArticle = {
  title: string | null;
  byline: string | null;
  dir: string | null;
  content: string | null;
  textContent: string | null;
  length: number;
  excerpt: string | null;
  siteName: string | null;
};

// Create a redis client if environment variables are set
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken
  ? new Redis({
      url: redisUrl,
      token: redisToken,
    })
  : null;

export async function extractArticle(url: string) {
  try {
    // 1. Check Redis cache
    if (redis) {
      const cached = await redis.get<ExtractedArticle>(url);
      if (cached) {
        return { data: cached, source: 'cache' };
      }
    }

    // 2. Fetch the HTML
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000); // 15 seconds timeout
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      signal: abortController.signal
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`);
    }

    const html = await response.text();

    // 3. Parse with linkedom
    const { document } = parseHTML(html);

    // 4. Extract with Readability
    // @ts-ignore - Readability expects a true DOM Document but linkedom is close enough
    const reader = new Readability(document);
    const article = reader.parse();

    if (!article) {
      throw new Error('Failed to extract article content');
    }

    const result = {
      title: article.title,
      byline: article.byline,
      dir: article.dir,
      content: article.content, // HTML string
      textContent: article.textContent,
      length: article.length,
      excerpt: article.excerpt,
      siteName: article.siteName
    };

    // Cache the result for 6 hours (21600 seconds)
    if (redis) {
      await redis.set(url, result, { ex: 21600 });
    }

    return { data: result, source: 'fetch' };
  } catch (error) {
    console.error("Extraction error:", error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
