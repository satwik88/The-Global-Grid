import type { Article, ArchiveEdition } from "@/lib/types";

export const articles: Article[] = [
  {
    id: "1000",
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
    id: "1001",
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
    id: "1002",
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
    id: "1003",
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
    id: "1004",
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
    id: "1005",
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
    id: "1006",
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
    id: "1007",
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
    id: "1008",
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
    id: "1009",
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
    id: "1010",
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
    id: "1011",
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
    id: "1012",
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
    id: "1013",
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
    id: "1014",
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
    id: "1015",
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
    id: "1016",
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
,
  {
    id: "5000",
    slug: "world-exclusive-story-5001",
    headline: "In-Depth Report on WORLD - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5001",
    slug: "world-exclusive-story-5002",
    headline: "In-Depth Report on WORLD - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5002",
    slug: "world-exclusive-story-5003",
    headline: "In-Depth Report on WORLD - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5003",
    slug: "world-exclusive-story-5004",
    headline: "In-Depth Report on WORLD - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5004",
    slug: "world-exclusive-story-5005",
    headline: "In-Depth Report on WORLD - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5005",
    slug: "world-exclusive-story-5006",
    headline: "In-Depth Report on WORLD - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5006",
    slug: "world-exclusive-story-5007",
    headline: "In-Depth Report on WORLD - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5007",
    slug: "world-exclusive-story-5008",
    headline: "In-Depth Report on WORLD - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5008",
    slug: "world-exclusive-story-5009",
    headline: "In-Depth Report on WORLD - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5009",
    slug: "world-exclusive-story-5010",
    headline: "In-Depth Report on WORLD - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5010",
    slug: "world-exclusive-story-5011",
    headline: "In-Depth Report on WORLD - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5011",
    slug: "world-exclusive-story-5012",
    headline: "In-Depth Report on WORLD - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5012",
    slug: "world-exclusive-story-5013",
    headline: "In-Depth Report on WORLD - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5013",
    slug: "world-exclusive-story-5014",
    headline: "In-Depth Report on WORLD - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5014",
    slug: "world-exclusive-story-5015",
    headline: "In-Depth Report on WORLD - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5015",
    slug: "world-exclusive-story-5016",
    headline: "In-Depth Report on WORLD - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5016",
    slug: "world-exclusive-story-5017",
    headline: "In-Depth Report on WORLD - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5017",
    slug: "world-exclusive-story-5018",
    headline: "In-Depth Report on WORLD - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5018",
    slug: "world-exclusive-story-5019",
    headline: "In-Depth Report on WORLD - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5019",
    slug: "world-exclusive-story-5020",
    headline: "In-Depth Report on WORLD - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5020",
    slug: "world-exclusive-story-5021",
    headline: "In-Depth Report on WORLD - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5021",
    slug: "world-exclusive-story-5022",
    headline: "In-Depth Report on WORLD - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5022",
    slug: "world-exclusive-story-5023",
    headline: "In-Depth Report on WORLD - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5023",
    slug: "world-exclusive-story-5024",
    headline: "In-Depth Report on WORLD - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the world sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["world"] },
    section: "world",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the world category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["world", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5024",
    slug: "business-exclusive-story-5025",
    headline: "In-Depth Report on BUSINESS - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5025",
    slug: "business-exclusive-story-5026",
    headline: "In-Depth Report on BUSINESS - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5026",
    slug: "business-exclusive-story-5027",
    headline: "In-Depth Report on BUSINESS - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5027",
    slug: "business-exclusive-story-5028",
    headline: "In-Depth Report on BUSINESS - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5028",
    slug: "business-exclusive-story-5029",
    headline: "In-Depth Report on BUSINESS - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5029",
    slug: "business-exclusive-story-5030",
    headline: "In-Depth Report on BUSINESS - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5030",
    slug: "business-exclusive-story-5031",
    headline: "In-Depth Report on BUSINESS - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5031",
    slug: "business-exclusive-story-5032",
    headline: "In-Depth Report on BUSINESS - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5032",
    slug: "business-exclusive-story-5033",
    headline: "In-Depth Report on BUSINESS - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5033",
    slug: "business-exclusive-story-5034",
    headline: "In-Depth Report on BUSINESS - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5034",
    slug: "business-exclusive-story-5035",
    headline: "In-Depth Report on BUSINESS - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5035",
    slug: "business-exclusive-story-5036",
    headline: "In-Depth Report on BUSINESS - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5036",
    slug: "business-exclusive-story-5037",
    headline: "In-Depth Report on BUSINESS - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5037",
    slug: "business-exclusive-story-5038",
    headline: "In-Depth Report on BUSINESS - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5038",
    slug: "business-exclusive-story-5039",
    headline: "In-Depth Report on BUSINESS - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5039",
    slug: "business-exclusive-story-5040",
    headline: "In-Depth Report on BUSINESS - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5040",
    slug: "business-exclusive-story-5041",
    headline: "In-Depth Report on BUSINESS - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5041",
    slug: "business-exclusive-story-5042",
    headline: "In-Depth Report on BUSINESS - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5042",
    slug: "business-exclusive-story-5043",
    headline: "In-Depth Report on BUSINESS - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5043",
    slug: "business-exclusive-story-5044",
    headline: "In-Depth Report on BUSINESS - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5044",
    slug: "business-exclusive-story-5045",
    headline: "In-Depth Report on BUSINESS - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5045",
    slug: "business-exclusive-story-5046",
    headline: "In-Depth Report on BUSINESS - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5046",
    slug: "business-exclusive-story-5047",
    headline: "In-Depth Report on BUSINESS - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5047",
    slug: "business-exclusive-story-5048",
    headline: "In-Depth Report on BUSINESS - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the business sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["business"] },
    section: "business",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the business category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["business", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5048",
    slug: "technology-exclusive-story-5049",
    headline: "In-Depth Report on TECHNOLOGY - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5049",
    slug: "technology-exclusive-story-5050",
    headline: "In-Depth Report on TECHNOLOGY - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5050",
    slug: "technology-exclusive-story-5051",
    headline: "In-Depth Report on TECHNOLOGY - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5051",
    slug: "technology-exclusive-story-5052",
    headline: "In-Depth Report on TECHNOLOGY - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5052",
    slug: "technology-exclusive-story-5053",
    headline: "In-Depth Report on TECHNOLOGY - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5053",
    slug: "technology-exclusive-story-5054",
    headline: "In-Depth Report on TECHNOLOGY - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5054",
    slug: "technology-exclusive-story-5055",
    headline: "In-Depth Report on TECHNOLOGY - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5055",
    slug: "technology-exclusive-story-5056",
    headline: "In-Depth Report on TECHNOLOGY - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5056",
    slug: "technology-exclusive-story-5057",
    headline: "In-Depth Report on TECHNOLOGY - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5057",
    slug: "technology-exclusive-story-5058",
    headline: "In-Depth Report on TECHNOLOGY - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5058",
    slug: "technology-exclusive-story-5059",
    headline: "In-Depth Report on TECHNOLOGY - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5059",
    slug: "technology-exclusive-story-5060",
    headline: "In-Depth Report on TECHNOLOGY - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5060",
    slug: "technology-exclusive-story-5061",
    headline: "In-Depth Report on TECHNOLOGY - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5061",
    slug: "technology-exclusive-story-5062",
    headline: "In-Depth Report on TECHNOLOGY - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5062",
    slug: "technology-exclusive-story-5063",
    headline: "In-Depth Report on TECHNOLOGY - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5063",
    slug: "technology-exclusive-story-5064",
    headline: "In-Depth Report on TECHNOLOGY - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5064",
    slug: "technology-exclusive-story-5065",
    headline: "In-Depth Report on TECHNOLOGY - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5065",
    slug: "technology-exclusive-story-5066",
    headline: "In-Depth Report on TECHNOLOGY - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5066",
    slug: "technology-exclusive-story-5067",
    headline: "In-Depth Report on TECHNOLOGY - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5067",
    slug: "technology-exclusive-story-5068",
    headline: "In-Depth Report on TECHNOLOGY - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5068",
    slug: "technology-exclusive-story-5069",
    headline: "In-Depth Report on TECHNOLOGY - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5069",
    slug: "technology-exclusive-story-5070",
    headline: "In-Depth Report on TECHNOLOGY - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5070",
    slug: "technology-exclusive-story-5071",
    headline: "In-Depth Report on TECHNOLOGY - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5071",
    slug: "technology-exclusive-story-5072",
    headline: "In-Depth Report on TECHNOLOGY - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the technology sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["technology"] },
    section: "technology",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the technology category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["technology", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5072",
    slug: "ai-exclusive-story-5073",
    headline: "In-Depth Report on AI - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5073",
    slug: "ai-exclusive-story-5074",
    headline: "In-Depth Report on AI - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5074",
    slug: "ai-exclusive-story-5075",
    headline: "In-Depth Report on AI - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5075",
    slug: "ai-exclusive-story-5076",
    headline: "In-Depth Report on AI - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5076",
    slug: "ai-exclusive-story-5077",
    headline: "In-Depth Report on AI - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5077",
    slug: "ai-exclusive-story-5078",
    headline: "In-Depth Report on AI - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5078",
    slug: "ai-exclusive-story-5079",
    headline: "In-Depth Report on AI - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5079",
    slug: "ai-exclusive-story-5080",
    headline: "In-Depth Report on AI - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5080",
    slug: "ai-exclusive-story-5081",
    headline: "In-Depth Report on AI - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5081",
    slug: "ai-exclusive-story-5082",
    headline: "In-Depth Report on AI - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5082",
    slug: "ai-exclusive-story-5083",
    headline: "In-Depth Report on AI - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5083",
    slug: "ai-exclusive-story-5084",
    headline: "In-Depth Report on AI - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5084",
    slug: "ai-exclusive-story-5085",
    headline: "In-Depth Report on AI - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5085",
    slug: "ai-exclusive-story-5086",
    headline: "In-Depth Report on AI - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5086",
    slug: "ai-exclusive-story-5087",
    headline: "In-Depth Report on AI - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5087",
    slug: "ai-exclusive-story-5088",
    headline: "In-Depth Report on AI - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5088",
    slug: "ai-exclusive-story-5089",
    headline: "In-Depth Report on AI - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5089",
    slug: "ai-exclusive-story-5090",
    headline: "In-Depth Report on AI - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5090",
    slug: "ai-exclusive-story-5091",
    headline: "In-Depth Report on AI - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5091",
    slug: "ai-exclusive-story-5092",
    headline: "In-Depth Report on AI - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5092",
    slug: "ai-exclusive-story-5093",
    headline: "In-Depth Report on AI - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5093",
    slug: "ai-exclusive-story-5094",
    headline: "In-Depth Report on AI - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5094",
    slug: "ai-exclusive-story-5095",
    headline: "In-Depth Report on AI - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5095",
    slug: "ai-exclusive-story-5096",
    headline: "In-Depth Report on AI - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the ai sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["ai"] },
    section: "ai",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the ai category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["ai", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5096",
    slug: "science-exclusive-story-5097",
    headline: "In-Depth Report on SCIENCE - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5097",
    slug: "science-exclusive-story-5098",
    headline: "In-Depth Report on SCIENCE - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5098",
    slug: "science-exclusive-story-5099",
    headline: "In-Depth Report on SCIENCE - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5099",
    slug: "science-exclusive-story-5100",
    headline: "In-Depth Report on SCIENCE - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5100",
    slug: "science-exclusive-story-5101",
    headline: "In-Depth Report on SCIENCE - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5101",
    slug: "science-exclusive-story-5102",
    headline: "In-Depth Report on SCIENCE - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5102",
    slug: "science-exclusive-story-5103",
    headline: "In-Depth Report on SCIENCE - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5103",
    slug: "science-exclusive-story-5104",
    headline: "In-Depth Report on SCIENCE - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5104",
    slug: "science-exclusive-story-5105",
    headline: "In-Depth Report on SCIENCE - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5105",
    slug: "science-exclusive-story-5106",
    headline: "In-Depth Report on SCIENCE - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5106",
    slug: "science-exclusive-story-5107",
    headline: "In-Depth Report on SCIENCE - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5107",
    slug: "science-exclusive-story-5108",
    headline: "In-Depth Report on SCIENCE - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5108",
    slug: "science-exclusive-story-5109",
    headline: "In-Depth Report on SCIENCE - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5109",
    slug: "science-exclusive-story-5110",
    headline: "In-Depth Report on SCIENCE - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5110",
    slug: "science-exclusive-story-5111",
    headline: "In-Depth Report on SCIENCE - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5111",
    slug: "science-exclusive-story-5112",
    headline: "In-Depth Report on SCIENCE - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5112",
    slug: "science-exclusive-story-5113",
    headline: "In-Depth Report on SCIENCE - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5113",
    slug: "science-exclusive-story-5114",
    headline: "In-Depth Report on SCIENCE - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5114",
    slug: "science-exclusive-story-5115",
    headline: "In-Depth Report on SCIENCE - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5115",
    slug: "science-exclusive-story-5116",
    headline: "In-Depth Report on SCIENCE - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5116",
    slug: "science-exclusive-story-5117",
    headline: "In-Depth Report on SCIENCE - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5117",
    slug: "science-exclusive-story-5118",
    headline: "In-Depth Report on SCIENCE - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5118",
    slug: "science-exclusive-story-5119",
    headline: "In-Depth Report on SCIENCE - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5119",
    slug: "science-exclusive-story-5120",
    headline: "In-Depth Report on SCIENCE - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the science sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["science"] },
    section: "science",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the science category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["science", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5120",
    slug: "culture-exclusive-story-5121",
    headline: "In-Depth Report on CULTURE - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5121",
    slug: "culture-exclusive-story-5122",
    headline: "In-Depth Report on CULTURE - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5122",
    slug: "culture-exclusive-story-5123",
    headline: "In-Depth Report on CULTURE - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5123",
    slug: "culture-exclusive-story-5124",
    headline: "In-Depth Report on CULTURE - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5124",
    slug: "culture-exclusive-story-5125",
    headline: "In-Depth Report on CULTURE - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5125",
    slug: "culture-exclusive-story-5126",
    headline: "In-Depth Report on CULTURE - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5126",
    slug: "culture-exclusive-story-5127",
    headline: "In-Depth Report on CULTURE - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5127",
    slug: "culture-exclusive-story-5128",
    headline: "In-Depth Report on CULTURE - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5128",
    slug: "culture-exclusive-story-5129",
    headline: "In-Depth Report on CULTURE - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5129",
    slug: "culture-exclusive-story-5130",
    headline: "In-Depth Report on CULTURE - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5130",
    slug: "culture-exclusive-story-5131",
    headline: "In-Depth Report on CULTURE - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5131",
    slug: "culture-exclusive-story-5132",
    headline: "In-Depth Report on CULTURE - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5132",
    slug: "culture-exclusive-story-5133",
    headline: "In-Depth Report on CULTURE - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5133",
    slug: "culture-exclusive-story-5134",
    headline: "In-Depth Report on CULTURE - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5134",
    slug: "culture-exclusive-story-5135",
    headline: "In-Depth Report on CULTURE - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5135",
    slug: "culture-exclusive-story-5136",
    headline: "In-Depth Report on CULTURE - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5136",
    slug: "culture-exclusive-story-5137",
    headline: "In-Depth Report on CULTURE - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5137",
    slug: "culture-exclusive-story-5138",
    headline: "In-Depth Report on CULTURE - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5138",
    slug: "culture-exclusive-story-5139",
    headline: "In-Depth Report on CULTURE - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5139",
    slug: "culture-exclusive-story-5140",
    headline: "In-Depth Report on CULTURE - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5140",
    slug: "culture-exclusive-story-5141",
    headline: "In-Depth Report on CULTURE - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5141",
    slug: "culture-exclusive-story-5142",
    headline: "In-Depth Report on CULTURE - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5142",
    slug: "culture-exclusive-story-5143",
    headline: "In-Depth Report on CULTURE - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5143",
    slug: "culture-exclusive-story-5144",
    headline: "In-Depth Report on CULTURE - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the culture sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["culture"] },
    section: "culture",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the culture category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["culture", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5144",
    slug: "travel-exclusive-story-5145",
    headline: "In-Depth Report on TRAVEL - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5145",
    slug: "travel-exclusive-story-5146",
    headline: "In-Depth Report on TRAVEL - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5146",
    slug: "travel-exclusive-story-5147",
    headline: "In-Depth Report on TRAVEL - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5147",
    slug: "travel-exclusive-story-5148",
    headline: "In-Depth Report on TRAVEL - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5148",
    slug: "travel-exclusive-story-5149",
    headline: "In-Depth Report on TRAVEL - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5149",
    slug: "travel-exclusive-story-5150",
    headline: "In-Depth Report on TRAVEL - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5150",
    slug: "travel-exclusive-story-5151",
    headline: "In-Depth Report on TRAVEL - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5151",
    slug: "travel-exclusive-story-5152",
    headline: "In-Depth Report on TRAVEL - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5152",
    slug: "travel-exclusive-story-5153",
    headline: "In-Depth Report on TRAVEL - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5153",
    slug: "travel-exclusive-story-5154",
    headline: "In-Depth Report on TRAVEL - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5154",
    slug: "travel-exclusive-story-5155",
    headline: "In-Depth Report on TRAVEL - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5155",
    slug: "travel-exclusive-story-5156",
    headline: "In-Depth Report on TRAVEL - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5156",
    slug: "travel-exclusive-story-5157",
    headline: "In-Depth Report on TRAVEL - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5157",
    slug: "travel-exclusive-story-5158",
    headline: "In-Depth Report on TRAVEL - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5158",
    slug: "travel-exclusive-story-5159",
    headline: "In-Depth Report on TRAVEL - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5159",
    slug: "travel-exclusive-story-5160",
    headline: "In-Depth Report on TRAVEL - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5160",
    slug: "travel-exclusive-story-5161",
    headline: "In-Depth Report on TRAVEL - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5161",
    slug: "travel-exclusive-story-5162",
    headline: "In-Depth Report on TRAVEL - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5162",
    slug: "travel-exclusive-story-5163",
    headline: "In-Depth Report on TRAVEL - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5163",
    slug: "travel-exclusive-story-5164",
    headline: "In-Depth Report on TRAVEL - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5164",
    slug: "travel-exclusive-story-5165",
    headline: "In-Depth Report on TRAVEL - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5165",
    slug: "travel-exclusive-story-5166",
    headline: "In-Depth Report on TRAVEL - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5166",
    slug: "travel-exclusive-story-5167",
    headline: "In-Depth Report on TRAVEL - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5167",
    slug: "travel-exclusive-story-5168",
    headline: "In-Depth Report on TRAVEL - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the travel sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["travel"] },
    section: "travel",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the travel category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["travel", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5168",
    slug: "opinion-exclusive-story-5169",
    headline: "In-Depth Report on OPINION - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5169",
    slug: "opinion-exclusive-story-5170",
    headline: "In-Depth Report on OPINION - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5170",
    slug: "opinion-exclusive-story-5171",
    headline: "In-Depth Report on OPINION - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5171",
    slug: "opinion-exclusive-story-5172",
    headline: "In-Depth Report on OPINION - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5172",
    slug: "opinion-exclusive-story-5173",
    headline: "In-Depth Report on OPINION - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5173",
    slug: "opinion-exclusive-story-5174",
    headline: "In-Depth Report on OPINION - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5174",
    slug: "opinion-exclusive-story-5175",
    headline: "In-Depth Report on OPINION - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5175",
    slug: "opinion-exclusive-story-5176",
    headline: "In-Depth Report on OPINION - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5176",
    slug: "opinion-exclusive-story-5177",
    headline: "In-Depth Report on OPINION - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5177",
    slug: "opinion-exclusive-story-5178",
    headline: "In-Depth Report on OPINION - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5178",
    slug: "opinion-exclusive-story-5179",
    headline: "In-Depth Report on OPINION - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5179",
    slug: "opinion-exclusive-story-5180",
    headline: "In-Depth Report on OPINION - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5180",
    slug: "opinion-exclusive-story-5181",
    headline: "In-Depth Report on OPINION - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5181",
    slug: "opinion-exclusive-story-5182",
    headline: "In-Depth Report on OPINION - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5182",
    slug: "opinion-exclusive-story-5183",
    headline: "In-Depth Report on OPINION - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5183",
    slug: "opinion-exclusive-story-5184",
    headline: "In-Depth Report on OPINION - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5184",
    slug: "opinion-exclusive-story-5185",
    headline: "In-Depth Report on OPINION - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5185",
    slug: "opinion-exclusive-story-5186",
    headline: "In-Depth Report on OPINION - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5186",
    slug: "opinion-exclusive-story-5187",
    headline: "In-Depth Report on OPINION - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5187",
    slug: "opinion-exclusive-story-5188",
    headline: "In-Depth Report on OPINION - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5188",
    slug: "opinion-exclusive-story-5189",
    headline: "In-Depth Report on OPINION - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5189",
    slug: "opinion-exclusive-story-5190",
    headline: "In-Depth Report on OPINION - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5190",
    slug: "opinion-exclusive-story-5191",
    headline: "In-Depth Report on OPINION - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5191",
    slug: "opinion-exclusive-story-5192",
    headline: "In-Depth Report on OPINION - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the opinion sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["opinion"] },
    section: "opinion",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the opinion category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["opinion", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5192",
    slug: "india-exclusive-story-5193",
    headline: "In-Depth Report on INDIA - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5193",
    slug: "india-exclusive-story-5194",
    headline: "In-Depth Report on INDIA - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5194",
    slug: "india-exclusive-story-5195",
    headline: "In-Depth Report on INDIA - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5195",
    slug: "india-exclusive-story-5196",
    headline: "In-Depth Report on INDIA - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5196",
    slug: "india-exclusive-story-5197",
    headline: "In-Depth Report on INDIA - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5197",
    slug: "india-exclusive-story-5198",
    headline: "In-Depth Report on INDIA - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5198",
    slug: "india-exclusive-story-5199",
    headline: "In-Depth Report on INDIA - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5199",
    slug: "india-exclusive-story-5200",
    headline: "In-Depth Report on INDIA - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5200",
    slug: "india-exclusive-story-5201",
    headline: "In-Depth Report on INDIA - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5201",
    slug: "india-exclusive-story-5202",
    headline: "In-Depth Report on INDIA - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5202",
    slug: "india-exclusive-story-5203",
    headline: "In-Depth Report on INDIA - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5203",
    slug: "india-exclusive-story-5204",
    headline: "In-Depth Report on INDIA - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5204",
    slug: "india-exclusive-story-5205",
    headline: "In-Depth Report on INDIA - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5205",
    slug: "india-exclusive-story-5206",
    headline: "In-Depth Report on INDIA - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5206",
    slug: "india-exclusive-story-5207",
    headline: "In-Depth Report on INDIA - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5207",
    slug: "india-exclusive-story-5208",
    headline: "In-Depth Report on INDIA - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5208",
    slug: "india-exclusive-story-5209",
    headline: "In-Depth Report on INDIA - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5209",
    slug: "india-exclusive-story-5210",
    headline: "In-Depth Report on INDIA - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5210",
    slug: "india-exclusive-story-5211",
    headline: "In-Depth Report on INDIA - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5211",
    slug: "india-exclusive-story-5212",
    headline: "In-Depth Report on INDIA - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5212",
    slug: "india-exclusive-story-5213",
    headline: "In-Depth Report on INDIA - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5213",
    slug: "india-exclusive-story-5214",
    headline: "In-Depth Report on INDIA - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5214",
    slug: "india-exclusive-story-5215",
    headline: "In-Depth Report on INDIA - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5215",
    slug: "india-exclusive-story-5216",
    headline: "In-Depth Report on INDIA - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the india sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["india"] },
    section: "india",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the india category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["india", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5216",
    slug: "grid-intelligence-exclusive-story-5217",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5217",
    slug: "grid-intelligence-exclusive-story-5218",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5218",
    slug: "grid-intelligence-exclusive-story-5219",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5219",
    slug: "grid-intelligence-exclusive-story-5220",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5220",
    slug: "grid-intelligence-exclusive-story-5221",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5221",
    slug: "grid-intelligence-exclusive-story-5222",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5222",
    slug: "grid-intelligence-exclusive-story-5223",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5223",
    slug: "grid-intelligence-exclusive-story-5224",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5224",
    slug: "grid-intelligence-exclusive-story-5225",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5225",
    slug: "grid-intelligence-exclusive-story-5226",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5226",
    slug: "grid-intelligence-exclusive-story-5227",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5227",
    slug: "grid-intelligence-exclusive-story-5228",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5228",
    slug: "grid-intelligence-exclusive-story-5229",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5229",
    slug: "grid-intelligence-exclusive-story-5230",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5230",
    slug: "grid-intelligence-exclusive-story-5231",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5231",
    slug: "grid-intelligence-exclusive-story-5232",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5232",
    slug: "grid-intelligence-exclusive-story-5233",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5233",
    slug: "grid-intelligence-exclusive-story-5234",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5234",
    slug: "grid-intelligence-exclusive-story-5235",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5235",
    slug: "grid-intelligence-exclusive-story-5236",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5236",
    slug: "grid-intelligence-exclusive-story-5237",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5237",
    slug: "grid-intelligence-exclusive-story-5238",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5238",
    slug: "grid-intelligence-exclusive-story-5239",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5239",
    slug: "grid-intelligence-exclusive-story-5240",
    headline: "In-Depth Report on GRID-INTELLIGENCE - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the grid-intelligence sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["grid-intelligence"] },
    section: "grid-intelligence",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the grid-intelligence category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["grid-intelligence", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5240",
    slug: "games-exclusive-story-5241",
    headline: "In-Depth Report on GAMES - Story 1",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5241",
    slug: "games-exclusive-story-5242",
    headline: "In-Depth Report on GAMES - Story 2",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5242",
    slug: "games-exclusive-story-5243",
    headline: "In-Depth Report on GAMES - Story 3",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5243",
    slug: "games-exclusive-story-5244",
    headline: "In-Depth Report on GAMES - Story 4",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5244",
    slug: "games-exclusive-story-5245",
    headline: "In-Depth Report on GAMES - Story 5",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5245",
    slug: "games-exclusive-story-5246",
    headline: "In-Depth Report on GAMES - Story 6",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5246",
    slug: "games-exclusive-story-5247",
    headline: "In-Depth Report on GAMES - Story 7",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5247",
    slug: "games-exclusive-story-5248",
    headline: "In-Depth Report on GAMES - Story 8",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5248",
    slug: "games-exclusive-story-5249",
    headline: "In-Depth Report on GAMES - Story 9",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5249",
    slug: "games-exclusive-story-5250",
    headline: "In-Depth Report on GAMES - Story 10",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5250",
    slug: "games-exclusive-story-5251",
    headline: "In-Depth Report on GAMES - Story 11",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5251",
    slug: "games-exclusive-story-5252",
    headline: "In-Depth Report on GAMES - Story 12",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5252",
    slug: "games-exclusive-story-5253",
    headline: "In-Depth Report on GAMES - Story 13",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5253",
    slug: "games-exclusive-story-5254",
    headline: "In-Depth Report on GAMES - Story 14",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5254",
    slug: "games-exclusive-story-5255",
    headline: "In-Depth Report on GAMES - Story 15",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5255",
    slug: "games-exclusive-story-5256",
    headline: "In-Depth Report on GAMES - Story 16",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5256",
    slug: "games-exclusive-story-5257",
    headline: "In-Depth Report on GAMES - Story 17",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5257",
    slug: "games-exclusive-story-5258",
    headline: "In-Depth Report on GAMES - Story 18",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5258",
    slug: "games-exclusive-story-5259",
    headline: "In-Depth Report on GAMES - Story 19",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5259",
    slug: "games-exclusive-story-5260",
    headline: "In-Depth Report on GAMES - Story 20",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5260",
    slug: "games-exclusive-story-5261",
    headline: "In-Depth Report on GAMES - Story 21",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5261",
    slug: "games-exclusive-story-5262",
    headline: "In-Depth Report on GAMES - Story 22",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5262",
    slug: "games-exclusive-story-5263",
    headline: "In-Depth Report on GAMES - Story 23",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
  },
  {
    id: "5263",
    slug: "games-exclusive-story-5264",
    headline: "In-Depth Report on GAMES - Story 24",
    deck: "This is a detailed deck explaining the recent developments in the games sector. Read more to find out what experts are saying about these critical changes.",
    author: { name: "Staff Writer", slug: "staff-writer", role: "Correspondent", bio: "A correspondent reporting for The Global Grid.", expertise: ["games"] },
    section: "games",
    publishedAt: "2026-06-16T12:00:00Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80",
    body: [
      "This is the first paragraph of a detailed report covering the latest news in the games category. It provides deep context and insight.",
      "Experts agree that this development will have far-reaching consequences. Analysts are closely monitoring the situation.",
      "We will continue to provide updates as more information becomes available. The Global Grid remains committed to bringing you the most accurate reporting."
    ],
    tags: ["games", "news", "exclusive"],
    relatedSlugs: []
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
