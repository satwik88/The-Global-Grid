const fs = require('fs');

const path = 'c:\\Users\\satwi\\The Global Grid\\src\\lib\\content\\articles.ts';
let content = fs.readFileSync(path, 'utf8');

const sections = ["world", "business", "technology", "ai", "science", "culture", "travel", "opinion", "india", "grid-intelligence", "games"];

// Generate mock articles
let newArticles = [];
let idCounter = 100;

sections.forEach(section => {
  // Add 4 articles per section to be safe
  for (let i = 0; i < 4; i++) {
    const title = `Breaking Update on ${section.toUpperCase()} - ${i + 1}`;
    newArticles.push(`  {
    id: "${idCounter++}",
    slug: "${section}-mock-article-${idCounter}",
    headline: "${title}",
    deck: "This is a detailed deck explaining the recent developments in the ${section} sector. Read more to find out what experts are saying.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["${section}"] },
    section: "${section}",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 4,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ${section} category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["${section}", "news", "update"],
    relatedSlugs: []
  }`);
  }
});

const newArticlesStr = ",\\n" + newArticles.join(",\\n");
content = content.replace("  }\\n];", "  }" + newArticlesStr + "\\n];");

fs.writeFileSync(path, content);
console.log("Articles generated!");
