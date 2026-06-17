const fs = require('fs');

const path = 'c:\\Users\\satwi\\The Global Grid\\src\\lib\\content\\articles.ts';
let content = fs.readFileSync(path, 'utf8');

const sections = ["world", "business", "technology", "ai", "science", "culture", "travel", "opinion", "india", "grid-intelligence", "games"];

// Generate mock articles
let newArticles = [];
let idCounter = 5000;

sections.forEach(section => {
  // Add 24 articles per section
  for (let i = 0; i < 24; i++) {
    const title = `In-Depth Report on ${section.toUpperCase()} - Story ${i + 1}`;
    newArticles.push(`  {
    id: "${idCounter++}",
    slug: "${section}-exclusive-story-${idCounter}",
    headline: "${title}",
    deck: "This is a detailed deck explaining the recent developments in the ${section} sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["${section}"] },
    section: "${section}",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ${section} category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["${section}", "news", "exclusive"],
    relatedSlugs: []
  }`);
  }
});
const newArticlesStr = ",\n" + newArticles.join(",\n");

const targetRegex = /eved"\\],\\s*\\}\\s*\\];/;

const targetIndex = content.indexOf('export function getArticleBySlug(s');

if (targetIndex !== -1) {
  // Go back to the ']' before it
  const before = content.slice(0, targetIndex);
  const bracketIndex = before.lastIndexOf('];');
  if (bracketIndex !== -1) {
    content = content.slice(0, bracketIndex) + newArticlesStr + '\n];\n' + content.slice(bracketIndex + 2);
    fs.writeFileSync(path, content);
    console.log("24 Articles per section generated!");
  }
} else {
  console.log("Could not find the target pattern to replace.");
}
