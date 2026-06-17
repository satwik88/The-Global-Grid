export function normalizeTitle(title: string): string {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove all non-word characters (punctuation)
    .replace(/\s+/g, " ")    // Collapse multiple spaces into one
    .trim();
}
