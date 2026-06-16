import type { Section } from "./types";

export const SECTIONS: Section[] = [
  { slug: "front-page", label: "Front Page", href: "/" },
  { slug: "india", label: "India", href: "/section/india" },
  { slug: "world", label: "World", href: "/section/world" },
  { slug: "business", label: "Business", href: "/section/business" },
  { slug: "technology", label: "Technology", href: "/section/technology" },
  { slug: "ai", label: "AI", href: "/section/ai" },
  { slug: "grid-intelligence", label: "Grid Intelligence", href: "/section/grid-intelligence" },
  { slug: "science", label: "Science", href: "/section/science" },
  { slug: "culture", label: "Culture", href: "/section/culture" },
  { slug: "travel", label: "Travel", href: "/section/travel" },
  { slug: "opinion", label: "Opinion", href: "/section/opinion" },
  { slug: "games", label: "Games", href: "/games" },
];

export const NAV_SECTIONS = SECTIONS.filter((s) => s.href !== "/");

export function getSectionLabel(slug: string): string {
  return SECTIONS.find((s) => s.slug === slug)?.label ?? slug;
}
