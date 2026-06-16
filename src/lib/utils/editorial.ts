export function formatEditorialHeadline(rawTitle: string): string {
  if (!rawTitle) return "";

  let title = rawTitle.trim();

  // Remove common syndication suffixes
  // e.g., " - BBC News", " | Reuters", " — The New York Times"
  const suffixPattern = /\s+(?:-|\||—|–)\s+[A-Z][A-Za-z0-9\s.]+$/;
  title = title.replace(suffixPattern, "");

  // Sometimes news APIs just append " - CNN" directly
  const directSuffixPattern = /\s+-\s+.*$/;
  title = title.replace(directSuffixPattern, "");

  // Remove trailing punctuation (except question marks or exclamation marks)
  title = title.replace(/[,:;.]+$/, "");

  // Optional: Convert to Title Case if the title is ALL CAPS
  if (title === title.toUpperCase()) {
    title = title
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return title.trim();
}
