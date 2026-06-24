export function formatEditorialHeadline(rawTitle: string): string {
  if (!rawTitle) return "";

  let title = rawTitle.trim();

  const suffixPattern = /\s+(?:-|\||—|–)\s+[A-Z][A-Za-z0-9\s.]+$/;
  title = title.replace(suffixPattern, "");

  const directSuffixPattern = /\s+-\s+.*$/;
  title = title.replace(directSuffixPattern, "");

  title = title.replace(/[,:;.]+$/, "");

  if (title === title.toUpperCase()) {
    title = title
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return title.trim();
}
