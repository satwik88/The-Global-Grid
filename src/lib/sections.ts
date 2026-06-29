import type { Section } from "./types";

export const SECTIONS: Section[] = [
  { slug: "front-page", label: "Front Page", href: "/" },
  { slug: "india", label: "India", href: "/india" },
  { slug: "world", label: "World", href: "/section/world" },
  { slug: "technology", label: "Tech", href: "/section/technology" },
  { slug: "ai", label: "AI", href: "/section/ai" },
  { slug: "grid-intelligence", label: "Grid Intelligence", href: "/section/grid-intelligence" },
  { slug: "science", label: "Science", href: "/section/science" },
  { slug: "games", label: "Games", href: "/games" },
  { slug: "reading-list", label: "Reading List", href: "/reading-list" },
];

export const NAV_SECTIONS = SECTIONS.filter((s) => s.href !== "/");

export function getSectionLabel(slug: string): string {
  return SECTIONS.find((s) => s.slug === slug)?.label ?? slug;
}
