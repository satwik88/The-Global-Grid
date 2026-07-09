import { NextResponse } from "next/server";
import { fetchLiveNewsFeed } from "@/lib/services/newsService";

export async function GET() {
  const sections = ["front-page", "world", "india", "business", "technology", "science", "games"];
  const report: Record<string, unknown> = {};

  for (const section of sections) {
    try {
      const articles = await fetchLiveNewsFeed(section);
      report[section] = {
        count: articles.length,
        firstHeadline: articles.length > 0 ? articles[0].headline : null,
      };
    } catch (e: unknown) {
      report[section] = { error: (e as Error).message };
    }
  }

  return NextResponse.json({ report });
}
