import { MetadataRoute } from "next";
import { articles } from "@/lib/content/articles";
import { archiveEditions } from "@/lib/content/articles";
import { NAV_SECTIONS } from "@/lib/sections";

const BASE_URL = "https://theglobalgrid.com";

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/archive`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const sectionPages: MetadataRoute.Sitemap = NAV_SECTIONS.map((section) => ({
    url: `${BASE_URL}/section/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/article/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const uniqueAuthorSlugs = [...new Set(articles.map((a) => a.author.slug))];
  const authorPages: MetadataRoute.Sitemap = uniqueAuthorSlugs.map((slug) => ({
    url: `${BASE_URL}/author/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const editionPages: MetadataRoute.Sitemap = archiveEditions.map((edition) => ({
    url: `${BASE_URL}/edition/${edition.id}`,
    lastModified: new Date(edition.date),
    changeFrequency: "never" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...sectionPages, ...articlePages, ...authorPages, ...editionPages];
}
