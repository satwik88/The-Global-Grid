import type { Article, ArchiveEdition } from "@/lib/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "global-climate-summit-reaches-historic-accord",
    headline: "Global Climate Summit Reaches Historic Accord After Marathon Negotiations",
    deck: "One hundred and ninety-three nations agree to binding emissions targets, marking the most significant environmental pact since Paris.",
    author: { name: "Eleanor Whitmore", slug: "eleanor-whitmore", role: "World Affairs Correspondent", bio: "An expert in world affairs correspondent with over a decade of reporting experience.", expertise: ["World"] },
    section: "world",
    publishedAt: "2026-06-16T06:00:00Z",
    readingTime: 8,
    image: "https://images.unsplash.com/photo-1611273426858-450c8a17250e?w=1200&q=80",
    imageCaption: "Delegates emerge from the final session in Geneva. Photograph by Marcus Chen.",
    body: [
      "GENEVA — After seventeen days of negotiations that tested the limits of diplomatic endurance, representatives from one hundred and ninety-three nations signed a comprehensive climate accord early this morning, establishing binding emissions reductions that scientists say could limit global warming to 1.5 degrees Celsius.",
      "The agreement, dubbed the Geneva Framework, requires developed nations to cut greenhouse gas emissions by sixty-five percent by 2035, while providing four hundred billion dollars annually in climate financing to developing countries. The pact also establishes an independent verification mechanism with real enforcement powers — a breakthrough that eluded previous summits.",
      "Secretary-General Amara Okafor called the accord \"a testament to what humanity can achieve when we choose cooperation over division.\" Her voice, hoarse from days of shuttle diplomacy, carried across a hall that erupted in sustained applause.",
      "The road to agreement was anything but smooth. Oil-producing nations initially resisted binding targets, while island states threatened to walk out unless loss-and-damage provisions were strengthened. A breakthrough came on the penultimate night when the European Union and a coalition of Pacific nations brokered a compromise on fossil fuel transition timelines.",
      "Financial markets responded cautiously. European carbon credits rose four percent, while shares in major oil companies fell sharply in early trading. Analysts noted that the verification mechanism's teeth — including trade penalties for non-compliance — gave the accord credibility that previous agreements lacked.",
      "Environmental groups offered measured praise. \"This is not perfection,\" said Dr. Helena Vasquez of the Climate Action Network, \"but it is the first time we have seen enforceable commitments at this scale. The work of implementation begins tomorrow.\"",
    ],
    pullQuotes: [
      "This is the first time we have seen enforceable commitments at this scale.",
    ],
    tags: ["Climate", "Diplomacy", "Environment"],
    relatedSlugs: [
      "renewable-energy-investment-surges",
      "arctic-ice-melt-accelerates",
    ],
    featured: true,
    editorPick: true,
    aiSummary: {
      brief: "193 nations signed the Geneva Framework, establishing binding emissions cuts and $400B in climate financing with enforceable verification.",
      keyPoints: [
        "65% emissions reduction target for developed nations by 2035",
        "Independent verification with trade penalty enforcement",
        "Compromise brokered between EU and Pacific island nations",
      ],
    },
  },
  {
    id: "2",
    slug: "central-banks-signal-coordinated-rate-strategy",
    headline: "Central Banks Signal Coordinated Strategy as Markets Seek Direction",
    deck: "The Federal Reserve, ECB, and Bank of England align messaging in an unusual display of monetary policy coordination.",
    author: { name: "James Harrington", slug: "james-harrington", role: "Financial Editor", bio: "An expert in financial editor with over a decade of reporting experience.", expertise: ["Financial"] },
    section: "business",
    publishedAt: "2026-06-16T05:30:00Z",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    body: [
      "LONDON — In a rare joint statement, the world's three most influential central banks signalled a coordinated approach to monetary policy, sending ripples through global bond markets and providing the clearest signal yet that the era of aggressive rate hikes may be drawing to a close.",
      "Federal Reserve Chair Margaret Chen, ECB President Klaus Weber, and Bank of England Governor Priya Sharma appeared together at the Bank for International Settlements in Basel, outlining a framework they called \"gradual normalisation with vigilance.\"",
      "The statement emphasised data-dependent decision-making while acknowledging that inflation, though elevated, has shown consistent deceleration across major economies. Treasury yields fell across the curve, with the ten-year U.S. note dropping twelve basis points.",
      "Equity markets rallied on the news, with the S&P 500 gaining 1.8 percent in morning trading. Financial stocks led the advance, while defensive sectors lagged as investors rotated toward growth.",
      "Economists cautioned against reading too much into the coordinated messaging. \"Central bank independence remains paramount,\" noted Dr. Yuki Tanaka of the London School of Economics. \"This is communication strategy, not policy lockstep.\"",
    ],
    tags: ["Markets", "Finance", "Central Banks"],
    relatedSlugs: ["global-climate-summit-reaches-historic-accord"],
    featured: true,
    editorPick: true,
    aiSummary: {
      brief: "Major central banks issued a coordinated statement suggesting gradual rate normalisation, boosting equity markets.",
      keyPoints: [
        "Fed, ECB, and BoE align on 'gradual normalisation'",
        "Treasury yields fell 12 basis points",
        "S&P 500 gained 1.8% on the announcement",
      ],
    },
  },
  {
    id: "3",
    slug: "quantum-computing-milestone-achieved",
    headline: "Researchers Achieve Quantum Error Correction at Unprecedented Scale",
    deck: "A team at MIT demonstrates stable logical qubits, bringing practical quantum computing closer to reality.",
    author: { name: "Dr. Sarah Okonkwo", slug: "dr-sarah-okonkwo", role: "Science & Technology Editor", bio: "An expert in science & technology editor with over a decade of reporting experience.", expertise: ["Science"] },
    section: "technology",
    publishedAt: "2026-06-16T04:00:00Z",
    readingTime: 7,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    body: [
      "CAMBRIDGE, Mass. — Researchers at the Massachusetts Institute of Technology have demonstrated quantum error correction across a array of one thousand physical qubits, maintaining stable logical qubits for over ten minutes — a milestone that experts say could accelerate the timeline for practical quantum computing by a decade.",
      "The achievement, published today in Nature, addresses the fundamental challenge that has limited quantum computers: the fragility of quantum states. By encoding information redundantly across multiple physical qubits, the team created logical qubits that remained coherent far longer than any previous demonstration.",
      "\"We have crossed a threshold,\" said Professor David Liu, who led the research. \"Error correction is no longer a theoretical exercise. We can now maintain quantum information long enough to perform meaningful computations.\"",
      "Industry leaders responded with enthusiasm. IBM, Google, and several startups announced expanded research partnerships with the MIT team. Venture capital funding for quantum computing startups has already reached twelve billion dollars this year.",
      "The implications extend beyond computing. Quantum simulation could revolutionise drug discovery, materials science, and cryptography. The U.S. National Security Agency issued a statement calling the work \"strategically significant.\"",
    ],
    pullQuotes: [
      "Error correction is no longer a theoretical exercise.",
    ],
    tags: ["Quantum", "Computing", "Research"],
    relatedSlugs: ["ai-regulation-framework-proposed"],
    featured: true,
    aiSummary: {
      brief: "MIT researchers achieved stable logical qubits across 1,000 physical qubits for 10+ minutes, a major quantum computing breakthrough.",
      keyPoints: [
        "1,000 physical qubits with stable logical encoding",
        "Coherence maintained for over 10 minutes",
        "Could accelerate practical quantum computing by a decade",
      ],
    },
  },
  {
    id: "4",
    slug: "ai-regulation-framework-proposed",
    headline: "International AI Governance Framework Proposed at Geneva Forum",
    deck: "Forty-seven nations endorse principles for safe AI development, though enforcement mechanisms remain contested.",
    author: { name: "Marcus Chen", slug: "marcus-chen", role: "AI Correspondent", bio: "An expert in ai correspondent with over a decade of reporting experience.", expertise: ["AI"] },
    section: "ai",
    publishedAt: "2026-06-16T03:00:00Z",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    body: [
      "GENEVA — An international coalition of forty-seven nations proposed a comprehensive framework for artificial intelligence governance today, establishing shared principles for safety testing, transparency, and accountability while leaving enforcement largely to individual governments.",
      "The Geneva AI Accord, as it is being called, requires developers of frontier AI systems to conduct safety evaluations before deployment and to share red-team findings with designated national authorities. It also establishes an international registry of high-capability AI models.",
      "Critics note that the framework lacks binding enforcement and that major AI powers including China were not signatories. Proponents argue that shared principles create a foundation for future binding agreements.",
      "\"We are building the architecture of AI governance,\" said Dr. Elena Rodriguez, who chaired the working group. \"Perfect is the enemy of good, and good is what we have achieved today.\"",
      "Technology companies offered cautious support. OpenAI, Anthropic, and Google DeepMind issued a joint statement welcoming the framework while emphasising the need for \"innovation-friendly implementation.\"",
    ],
    tags: ["AI", "Regulation", "Policy"],
    relatedSlugs: ["quantum-computing-milestone-achieved"],
    editorPick: true,
    aiSummary: {
      brief: "47 nations proposed the Geneva AI Accord requiring safety evaluations and an international registry of frontier AI models.",
      keyPoints: [
        "Mandatory safety evaluations before deployment",
        "International registry of high-capability models",
        "Enforcement left to individual governments",
      ],
    },
  },
  {
    id: "5",
    slug: "james-webb-discovers-exoplanet-atmosphere",
    headline: "Webb Telescope Detects Water Vapour in Distant Exoplanet Atmosphere",
    deck: "The discovery, 120 light-years from Earth, offers the clearest evidence yet of conditions that could support life.",
    author: { name: "Dr. Sarah Okonkwo", slug: "dr-sarah-okonkwo", role: "Science Editor", bio: "An expert in science editor with over a decade of reporting experience.", expertise: ["Science"] },
    section: "science",
    publishedAt: "2026-06-15T18:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
    body: [
      "BALTIMORE — The James Webb Space Telescope has detected water vapour, carbon dioxide, and methane in the atmosphere of K2-18b, a sub-Neptune exoplanet one hundred and twenty light-years from Earth, in what astronomers are calling the most promising lead in the search for habitable worlds beyond our solar system.",
      "The spectroscopic analysis, conducted over forty hours of observation, revealed atmospheric signatures consistent with a hydrogen-rich envelope surrounding a water ocean. The planet orbits within its star's habitable zone.",
      "\"We are not claiming we found life,\" cautioned Dr. Nikole Lewis of Cornell University. \"We are saying we found conditions that, on Earth, are associated with life. That distinction matters enormously.\"",
      "The discovery has reignited debate about prioritising sub-Neptune worlds in the search for biosignatures, versus the traditional focus on Earth-sized rocky planets.",
    ],
    tags: ["Space", "Astronomy", "Exoplanets"],
    relatedSlugs: ["quantum-computing-milestone-achieved"],
    aiSummary: {
      brief: "Webb detected water vapour, CO2, and methane on exoplanet K2-18b, suggesting potentially habitable conditions.",
      keyPoints: [
        "120 light-years from Earth in habitable zone",
        "Hydrogen-rich envelope with water ocean signatures",
        "Most promising lead for habitable worlds yet",
      ],
    },
  },
  {
    id: "6",
    slug: "venice-biennale-record-attendance",
    headline: "Venice Biennale Draws Record Crowds as Global Art Market Shifts",
    deck: "The sixty-first edition attracts over eight hundred thousand visitors, signalling a renaissance in physical cultural experiences.",
    author: { name: "Isabella Fontaine", slug: "isabella-fontaine", role: "Culture Correspondent", bio: "An expert in culture correspondent with over a decade of reporting experience.", expertise: ["Culture"] },
    section: "culture",
    publishedAt: "2026-06-15T14:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2c5?w=1200&q=80",
    body: [
      "VENICE — The sixty-first Venice Biennale closed yesterday with record attendance of eight hundred and twelve thousand visitors, defying predictions that digital art and virtual exhibitions would diminish appetite for physical cultural experiences.",
      "Curator Kwame Asante's theme, \"Foreigners Everywhere,\" resonated across pavilions representing eighty-eight nations. Works addressing migration, identity, and belonging dominated critical conversation.",
      "The Golden Lion for Best National Participation went to Brazil, whose pavilion featured indigenous artists working in traditional and contemporary media. The decision was widely praised as a corrective to decades of Eurocentric curation.",
      "Art market analysts noted a corresponding surge in gallery sales, with contemporary works from Global South artists commanding record prices at auction.",
    ],
    tags: ["Art", "Venice", "Culture"],
    relatedSlugs: ["kyoto-temple-restoration-complete"],
    editorPick: true,
  },
  {
    id: "7",
    slug: "kyoto-temple-restoration-complete",
    headline: "Centuries-Old Kyoto Temple Completes Meticulous Restoration",
    deck: "A twenty-year project returns Kinkaku-ji's lesser-known sister temple to its fifteenth-century splendour.",
    author: { name: "Kenji Yamamoto", slug: "kenji-yamamoto", role: "Travel Editor", bio: "An expert in travel editor with over a decade of reporting experience.", expertise: ["Travel"] },
    section: "travel",
    publishedAt: "2026-06-15T10:00:00Z",
    readingTime: 4,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    body: [
      "KYOTO — After two decades of painstaking work by master craftsmen, the restoration of Ryoan-ji's meditation hall has been completed, offering visitors a glimpse of fifteenth-century Zen architecture as it appeared when first constructed.",
      "The project employed traditional techniques: hand-planed cypress beams, natural lacquer finishes, and gold leaf applied using methods unchanged for six centuries. No power tools were used on the structural elements.",
      "\"We did not restore a building,\" said master carpenter Hiroshi Tanabe. \"We restored a way of seeing the world.\"",
      "Tourism officials expect a significant increase in visitors to Kyoto's temple district, though capacity will be limited to preserve the meditative atmosphere.",
    ],
    tags: ["Japan", "Travel", "Heritage"],
    relatedSlugs: ["venice-biennale-record-attendance"],
  },
  {
    id: "8",
    slug: "the-case-for-slow-journalism",
    headline: "The Case for Slow Journalism in an Age of Instant News",
    deck: "In a world of breaking alerts and hot takes, the most valuable commodity may be patience.",
    author: { name: "Thomas Ashworth", slug: "thomas-ashworth", role: "Opinion Editor", bio: "An expert in opinion editor with over a decade of reporting experience.", expertise: ["Opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T07:00:00Z",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
    body: [
      "We live in an age that treats speed as virtue and deliberation as failure. A story breaks, and within minutes, a thousand pundits have rendered judgment. Context arrives, if at all, as an afterthought.",
      "Slow journalism — the deliberate, patient practice of understanding before publishing — is not nostalgia. It is a competitive advantage. The organisations that invest in depth, in verification, in the unglamorous work of getting it right, will outlast those that optimise for clicks.",
      "The Global Grid was founded on this principle. We do not compete on speed. We compete on trust. Every word in these pages has been considered, checked, and crafted with the reader's intelligence in mind.",
      "This is not an argument against urgency. Some stories demand immediate attention. But the default posture of journalism need not be breathless. The most enduring publications in history — from The Times of London to The Economist — built their reputations on reliability, not velocity.",
      "The reader who returns day after day is not seeking novelty alone. They are seeking understanding. That is the service we aim to provide.",
    ],
    pullQuotes: [
      "We do not compete on speed. We compete on trust.",
    ],
    tags: ["Opinion", "Journalism", "Media"],
    relatedSlugs: ["global-climate-summit-reaches-historic-accord"],
    editorPick: true,
  },
  {
    id: "9",
    slug: "renewable-energy-investment-surges",
    headline: "Global Renewable Energy Investment Surpasses Fossil Fuels for First Time",
    deck: "Two point four trillion dollars flowed into clean energy projects last year, reshaping the global energy landscape.",
    author: { name: "James Harrington", slug: "james-harrington", role: "Financial Editor", bio: "An expert in financial editor with over a decade of reporting experience.", expertise: ["Financial"] },
    section: "business",
    publishedAt: "2026-06-15T20:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    body: [
      "Global investment in renewable energy exceeded spending on fossil fuel projects for the first time in history last year, according to a comprehensive report from the International Energy Agency.",
      "Solar and wind accounted for seventy-eight percent of new energy capacity additions, while coal plant retirements accelerated in Europe, the United States, and China.",
      "The shift has profound implications for employment, with the clean energy sector now supporting more jobs globally than traditional fossil fuel industries.",
    ],
    tags: ["Energy", "Business", "Climate"],
    relatedSlugs: ["global-climate-summit-reaches-historic-accord"],
  },
  {
    id: "10",
    slug: "arctic-ice-melt-accelerates",
    headline: "Arctic Sea Ice Reaches Second-Lowest Extent on Record",
    deck: "Scientists warn that summer ice-free conditions could arrive decades earlier than previous models predicted.",
    author: { name: "Eleanor Whitmore", slug: "eleanor-whitmore", role: "World Affairs Correspondent", bio: "An expert in world affairs correspondent with over a decade of reporting experience.", expertise: ["World"] },
    section: "world",
    publishedAt: "2026-06-15T16:00:00Z",
    readingTime: 4,
    image: "https://images.unsplash.com/photo-1551248429-40975aa4e574?w=1200&q=80",
    body: [
      "Arctic sea ice extent reached its second-lowest level on record this week, according to data from the National Snow and Ice Data Center, prompting renewed warnings from climate scientists about accelerating polar warming.",
      "The decline has outpaced even pessimistic climate models, with some researchers now projecting ice-free Arctic summers as early as the 2030s.",
      "Indigenous communities across the Arctic report dramatic changes to traditional hunting and fishing patterns, with some villages facing relocation due to coastal erosion.",
    ],
    tags: ["Climate", "Arctic", "Environment"],
    relatedSlugs: ["global-climate-summit-reaches-historic-accord"],
  },
  {
    id: "11",
    slug: "neural-interface-breakthrough",
    headline: "Neural Interface Allows Paralysed Patient to Compose Music by Thought",
    deck: "Brain-computer interface technology achieves a milestone in creative expression.",
    author: { name: "Marcus Chen", slug: "marcus-chen", role: "AI Correspondent", bio: "An expert in ai correspondent with over a decade of reporting experience.", expertise: ["AI"] },
    section: "ai",
    publishedAt: "2026-06-14T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1559757142-5c350d0d3c56?w=1200&q=80",
    body: [
      "A paralysed musician has composed an original piano piece using only thought, via a neural interface developed by researchers at Stanford University.",
      "The system decoded intended finger movements from motor cortex signals, translating them into musical notation in real time.",
      "Ethicists praised the achievement while calling for robust consent frameworks as the technology advances toward commercial applications.",
    ],
    tags: ["AI", "Medicine", "Technology"],
    relatedSlugs: ["ai-regulation-framework-proposed"],
  },
  {
    id: "12",
    slug: "ancient-library-discovered-egypt",
    headline: "Archaeologists Uncover Ancient Library Beneath Alexandria Ruins",
    deck: "Thousands of papyrus fragments may rewrite our understanding of Hellenistic scholarship.",
    author: { name: "Dr. Sarah Okonkwo", slug: "dr-sarah-okonkwo", role: "Science Editor", bio: "An expert in science editor with over a decade of reporting experience.", expertise: ["Science"] },
    section: "science",
    publishedAt: "2026-06-14T08:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1561214115-f2f917cc7864?w=1200&q=80",
    body: [
      "Archaeologists working in Alexandria have discovered what appears to be a previously unknown library dating to the third century BCE, containing thousands of papyrus fragments in remarkably preserved condition.",
      "Early analysis suggests the collection includes works by philosophers previously known only through secondary references.",
      "The discovery has been described as the most significant archaeological find in the Mediterranean region this century.",
    ],
    tags: ["Archaeology", "History", "Science"],
    relatedSlugs: ["venice-biennale-record-attendance"],
  },
  {
    id: "13",
    slug: "india-central-bank-holds-rates",
    headline: "Reserve Bank of India Holds Interest Rates Steady, Citing Resilient Growth",
    deck: "The MPC points to robust domestic demand and manageable inflation as justification for the pause.",
    author: { name: "Ananya Sharma", slug: "ananya-sharma", role: "India Economy Correspondent", bio: "An expert in india economy correspondent with over a decade of reporting experience.", expertise: ["India"] },
    section: "india",
    publishedAt: "2026-06-16T08:00:00Z",
    readingTime: 4,
    image: "https://images.unsplash.com/photo-1590076241315-a92c81898717?w=1200&q=80",
    body: [
      "MUMBAI — The Reserve Bank of India announced today that it will maintain its benchmark repo rate at 6.5 percent, a decision that aligns with market expectations and signals confidence in the trajectory of the world's fastest-growing major economy.",
      "Governor Shaktikanta Das emphasised that while global headwinds persist, India's domestic consumption remains robust.",
      "Analysts predict the central bank may begin a modest easing cycle in the final quarter of the year, provided monsoon patterns support agricultural output."
    ],
    tags: ["India", "Economy", "RBI"],
    relatedSlugs: ["central-banks-signal-coordinated-rate-strategy"],
  },
  {
    id: "14",
    slug: "bengaluru-startups-ai-surge",
    headline: "Bengaluru Transforms into Global Hub for Custom Silicon and AI",
    deck: "A new wave of deep-tech startups is moving beyond software services to design hardware tailored for artificial intelligence workloads.",
    author: { name: "Rishi Menon", slug: "rishi-menon", role: "Technology Editor, South Asia", bio: "An expert in technology editor, south asia with over a decade of reporting experience.", expertise: ["Technology"] },
    section: "india",
    publishedAt: "2026-06-15T11:00:00Z",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1621501103258-3e135c8c1822?w=1200&q=80",
    body: [
      "BENGALURU — For decades, this southern Indian city has been known as the outsourcing capital of the world. But a quiet revolution in the Koramangala and HSR Layout districts is rewriting that narrative.",
      "Dozens of well-funded startups are now designing specialized semiconductor chips optimized for AI inference, aiming to compete directly with global giants.",
      "The shift has been catalyzed by a return of talent from Silicon Valley and significant government incentives under the India Semiconductor Mission."
    ],
    tags: ["India", "Technology", "Startups"],
    relatedSlugs: ["ai-regulation-framework-proposed"],
    editorPick: true,
  },
  {
    id: "15",
    slug: "iit-global-expansion",
    headline: "Indian Institutes of Technology Expand Global Footprint with New Campuses",
    deck: "The prestigious engineering network opens locations in the Middle East and East Africa, signaling a new era of educational diplomacy.",
    author: { name: "Priya Desai", slug: "priya-desai", role: "Education Correspondent", bio: "An expert in education correspondent with over a decade of reporting experience.", expertise: ["Education"] },
    section: "india",
    publishedAt: "2026-06-14T09:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    body: [
      "NEW DELHI — The Indian Institutes of Technology (IIT), long regarded as the crown jewels of India's higher education system, are going global.",
      "Following the successful launch of campuses in Abu Dhabi and Zanzibar, the Ministry of Education has announced plans for three additional international outposts by 2028.",
      "The expansion serves dual purposes: offering world-class technical education to developing regions, and projecting Indian soft power in strategically important geographies."
    ],
    tags: ["India", "Education", "Diplomacy"],
    relatedSlugs: [],
  },
  {
    id: "16",
    slug: "geopolitics-of-rare-earth-minerals",
    headline: "The Geopolitics of Rare Earth Minerals: A New Cold War",
    deck: "As the transition to green energy accelerates, control over essential minerals is reshaping global alliances.",
    author: { name: "Dr. Elena Rostov", slug: "dr-elena-rostov", role: "Grid Intelligence Director", bio: "An expert in grid intelligence director with over a decade of reporting experience.", expertise: ["Grid"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T10:00:00Z",
    readingTime: 12,
    image: "https://images.unsplash.com/photo-1587586062323-836089e60d52?w=1200&q=80",
    body: [
      "WASHINGTON — The silent war of the 21st century is being fought over elements you have likely never seen. Neodymium, dysprosium, and terbium are the vital ingredients of the modern world, powering everything from electric vehicle motors to advanced missile guidance systems.",
      "A new Grid Intelligence analysis reveals that supply chain vulnerabilities are prompting Western nations to subsidize domestic mining and refining operations at unprecedented levels, seeking to break a near-monopoly held by strategic rivals.",
      "The environmental costs of this new scramble are profound, but policymakers argue the national security implications leave them no choice."
    ],
    tags: ["Geopolitics", "Energy", "Supply Chain"],
    relatedSlugs: ["global-climate-summit-reaches-historic-accord"],
    featured: true,
  },
  {
    id: "17",
    slug: "cybersecurity-quantum-threat",
    headline: "The Quantum Threat to Global Cryptography",
    deck: "Financial institutions and intelligence agencies are racing to implement 'post-quantum' encryption before current standards become obsolete.",
    author: { name: "Marcus Chen", slug: "marcus-chen", role: "AI Correspondent", bio: "An expert in ai correspondent with over a decade of reporting experience.", expertise: ["AI"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-15T09:00:00Z",
    readingTime: 9,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    body: [
      "LONDON — When a practical quantum computer arrives, it will break RSA encryption—the mathematical bedrock of secure internet communications—in minutes.",
      "The timeline for Q-Day (the day quantum computers can break standard encryption) is fiercely debated, but a recent MIT breakthrough suggests it may be closer than previously thought.",
      "Grid Intelligence examines how banks are quietly overhauling their infrastructure to protect against 'harvest now, decrypt later' attacks."
    ],
    tags: ["Cybersecurity", "Quantum", "Intelligence"],
    relatedSlugs: ["quantum-computing-milestone-achieved"],
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesBySection(section: string): Article[] {
  if (section === "front-page") return articles;
  return articles.filter((a) => a.section === section);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getEditorPicks(): Article[] {
  return articles.filter((a) => a.editorPick);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.headline.toLowerCase().includes(q) ||
      a.deck.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.author.name.toLowerCase().includes(q)
  );
}

export const archiveEditions: ArchiveEdition[] = [
  {
    id: "ed-001",
    date: "2026-06-16",
    editionNumber: "001",
    type: "daily",
    coverHeadline: "Global Climate Summit Reaches Historic Accord",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    articleCount: 12,
  },
  {
    id: "ed-002",
    date: "2026-06-15",
    editionNumber: "365",
    type: "daily",
    coverHeadline: "Webb Telescope Detects Water on Distant Exoplanet",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    articleCount: 11,
  },
  {
    id: "ed-003",
    date: "2026-06-14",
    editionNumber: "364",
    type: "weekend",
    coverHeadline: "The Weekend Edition: Culture & Ideas",
    coverImage: "https://images.unsplash.com/photo-1513364776144-6096300fbd71?w=800&q=80",
    articleCount: 14,
  },
  {
    id: "ed-004",
    date: "2026-06-13",
    editionNumber: "363",
    type: "daily",
    coverHeadline: "Central Banks Align on Monetary Strategy",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    articleCount: 10,
  },
  {
    id: "ed-005",
    date: "2026-06-12",
    editionNumber: "362",
    type: "daily",
    coverHeadline: "AI Governance Framework Takes Shape",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    articleCount: 12,
  },
  {
    id: "ed-006",
    date: "2026-06-11",
    editionNumber: "361",
    type: "daily",
    coverHeadline: "Electric Vehicle Transition Hits Infrastructure Bottleneck",
    coverImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    articleCount: 11,
  },
];

export const marketData = [
  { name: "S&P 500", value: "5,842.31", change: "+1.82%", up: true },
  { name: "FTSE 100", value: "8,291.45", change: "+0.94%", up: true },
  { name: "Nikkei 225", value: "39,156.78", change: "-0.31%", up: false },
  { name: "DAX", value: "19,847.22", change: "+1.12%", up: true },
  { name: "Hang Seng", value: "23,891.56", change: "+0.67%", up: true },
  { name: "Gold", value: "$2,847.30", change: "+0.45%", up: true },
];

export const indiaMarketData = [
  { name: "NIFTY 50", value: "24,852.15", change: "+1.24%", up: true },
  { name: "SENSEX", value: "81,332.72", change: "+1.31%", up: true },
  { name: "INR/USD", value: "83.42", change: "-0.05%", up: false },
  { name: "Gold (India)", value: "₹72,450", change: "+0.80%", up: true },
];

export const worldClocks = [
  { city: "London", timezone: "Europe/London" },
  { city: "New York", timezone: "America/New_York" },
  { city: "Tokyo", timezone: "Asia/Tokyo" },
  { city: "Sydney", timezone: "Australia/Sydney" },
  { city: "Dubai", timezone: "Asia/Dubai" },
  { city: "São Paulo", timezone: "America/Sao_Paulo" },
];

export const trendingSearches = [
  "Climate Summit",
  "Quantum Computing",
  "AI Regulation",
  "Venice Biennale",
  "Central Banks",
];

export const dailyRiddles = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps",
  },
  {
    question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "A map",
  },
];

export const brainTeasers = [
  {
    title: "The Missing Dollar",
    puzzle: "Three friends pay $30 for a hotel room. The clerk realizes the room is only $25 and gives $5 to the bellboy. The bellboy keeps $2 and returns $1 to each friend. Each paid $9 ($27 total) plus $2 the bellboy kept equals $29. Where is the missing dollar?",
    answer: "There is no missing dollar. The $27 includes the $2 the bellboy kept. They paid $25 for the room plus $2 tip = $27. The initial $30 minus $3 returned = $27.",
  },
];
