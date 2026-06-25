import { NextResponse } from "next/server";
import { fetchLiveNewsFeed } from "@/lib/services/newsService";

export async function GET() {
  try {
    const articles = await fetchLiveNewsFeed("india");
    // Return only the top 3 articles for the mega menu
    return NextResponse.json({ articles: articles.slice(0, 3) });
  } catch (error) {
    console.error("Failed to fetch India news for mega menu:", error);
    return NextResponse.json({ articles: [] }, { status: 500 });
  }
}
