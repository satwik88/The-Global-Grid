export interface CountryIntelligence {
  name: string;
  slug: string; // for url
  description: string;
  population: string;
  gdp: string;
  gdpGrowth: string;
  currency: string;
  capital: string;
  timeZone: string;
  domain: string;
  language: string;
  relatedCountries: string[];
  trendingTopics: string[];
  topStory: string;
}

export const COUNTRY_DATA: Record<string, CountryIntelligence> = {
  "India": {
    name: "India",
    slug: "india",
    description: "The world's most populous democracy and fastest-growing major economy, increasingly positioning itself as a pivotal global counterbalance.",
    population: "1.44B",
    gdp: "$4.1T",
    gdpGrowth: "6.8%",
    currency: "INR",
    capital: "New Delhi",
    timeZone: "IST (UTC+5:30)",
    domain: ".in",
    language: "Hindi, English",
    relatedCountries: ["China", "United States", "Japan", "Russia"],
    trendingTopics: ["AI", "Startups", "Defence", "Space", "Elections"],
    topStory: "India launches next-generation AI mission to solidify technological sovereignty"
  },
  "United States": {
    name: "United States",
    slug: "united-states",
    description: "The world's foremost economic and military power, navigating domestic polarization while maintaining its global alliances.",
    population: "341M",
    gdp: "$27.9T",
    gdpGrowth: "2.5%",
    currency: "USD",
    capital: "Washington, D.C.",
    timeZone: "EST to PST (UTC-5 to -8)",
    domain: ".us",
    language: "English",
    relatedCountries: ["China", "United Kingdom", "India", "France", "Russia"],
    trendingTopics: ["Federal Reserve", "Elections", "Tech Regulation", "Defense"],
    topStory: "Federal Reserve signals potential rate adjustments amidst resilient labor market"
  },
  "China": {
    name: "China",
    slug: "china",
    description: "The primary strategic competitor to the US, focused on technological self-reliance and expanding its geopolitical influence.",
    population: "1.41B",
    gdp: "$18.5T",
    gdpGrowth: "4.6%",
    currency: "CNY",
    capital: "Beijing",
    timeZone: "CST (UTC+8)",
    domain: ".cn",
    language: "Mandarin",
    relatedCountries: ["United States", "Russia", "India", "Japan"],
    trendingTopics: ["Semiconductors", "EV Exports", "Real Estate", "Belt and Road"],
    topStory: "Beijing announces sweeping stimulus package to revitalize property sector"
  },
  "Japan": {
    name: "Japan",
    slug: "japan",
    description: "An advanced technological powerhouse recalibrating its defense posture and monetary policy in a shifting Asian landscape.",
    population: "123M",
    gdp: "$4.2T",
    gdpGrowth: "0.9%",
    currency: "JPY",
    capital: "Tokyo",
    timeZone: "JST (UTC+9)",
    domain: ".jp",
    language: "Japanese",
    relatedCountries: ["United States", "China", "South Korea", "India"],
    trendingTopics: ["Bank of Japan", "Defense Spending", "Automakers", "Semiconductors"],
    topStory: "Bank of Japan ends era of negative interest rates in historic policy shift"
  },
  "United Kingdom": {
    name: "United Kingdom",
    slug: "united-kingdom",
    description: "A key NATO pillar and financial hub adapting its global role and trading relationships post-Brexit.",
    population: "68M",
    gdp: "$3.5T",
    gdpGrowth: "0.6%",
    currency: "GBP",
    capital: "London",
    timeZone: "GMT/BST (UTC+0)",
    domain: ".uk",
    language: "English",
    relatedCountries: ["United States", "France", "Germany", "India"],
    trendingTopics: ["Parliament", "Financial Markets", "Energy", "Immigration"],
    topStory: "UK unveils new green energy investment strategy to secure grid resilience"
  },
  "Germany": {
    name: "Germany",
    slug: "germany",
    description: "Europe's industrial engine grappling with energy transitions and redefining its foreign policy paradigms.",
    population: "84M",
    gdp: "$4.7T",
    gdpGrowth: "0.2%",
    currency: "EUR",
    capital: "Berlin",
    timeZone: "CET (UTC+1)",
    domain: ".de",
    language: "German",
    relatedCountries: ["France", "United States", "China", "United Kingdom"],
    trendingTopics: ["Energy Security", "Automotive", "Defense", "Manufacturing"],
    topStory: "German manufacturing sector shows signs of rebound amid energy stabilization"
  },
  "France": {
    name: "France",
    slug: "france",
    description: "A leading European military and diplomatic force advocating for EU strategic autonomy and industrial sovereignty.",
    population: "68M",
    gdp: "$3.1T",
    gdpGrowth: "0.8%",
    currency: "EUR",
    capital: "Paris",
    timeZone: "CET (UTC+1)",
    domain: ".fr",
    language: "French",
    relatedCountries: ["Germany", "United Kingdom", "United States", "India"],
    trendingTopics: ["EU Policy", "Nuclear Energy", "Tech Hubs", "Defense"],
    topStory: "France pushes for aggressive European AI investments to counter US tech dominance"
  }
};

// Aliases for simple maps features.json name matching
export const COUNTRY_NAME_MAPPINGS: Record<string, string> = {
  "United States of America": "United States",
  "UK": "United Kingdom",
  "Great Britain": "United Kingdom",
};

export function getCountryIntelligence(countryName: string): CountryIntelligence | null {
  const normalizedName = COUNTRY_NAME_MAPPINGS[countryName] || countryName;
  return COUNTRY_DATA[normalizedName] || null;
}
