export function normalizeTitle(title: string): string {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "") 
    .replace(/\s+/g, " ")    
    .trim();
}
