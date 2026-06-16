export type SectionSlug =
  | "front-page"
  | "world"
  | "business"
  | "technology"
  | "ai"
  | "science"
  | "culture"
  | "travel"
  | "opinion"
  | "india"
  | "grid-intelligence"
  | "games";

export interface Section {
  slug: SectionSlug;
  label: string;
  href: string;
}

export interface Author {
  name: string;
  slug: string;
  role: string;
  bio?: string;
  expertise?: string[];
}

export interface Article {
  id: string;
  slug: string;
  headline: string;
  deck: string;
  author: Author;
  section: SectionSlug;
  publishedAt: string;
  readingTime: number;
  image: string;
  heroImage?: string;
  thumbnailImage?: string;
  imageCaption?: string;
  readersToday?: number;
  updatedAt?: string;
  isBreaking?: boolean;
  body: string[];
  pullQuotes?: string[];
  tags: string[];
  relatedSlugs: string[];
  featured?: boolean;
  editorPick?: boolean;
  aiSummary?: {
    brief: string;
    keyPoints: string[];
  };
}

export interface Edition {
  id: string;
  date: string;
  editionNumber: string;
  type: "daily" | "weekend";
  headline: string;
  articleSlugs: string[];
}

export interface ArchiveEdition {
  id: string;
  date: string;
  editionNumber: string;
  type: "daily" | "weekend";
  coverHeadline: string;
  coverImage?: string;
  articleCount: number;
}
