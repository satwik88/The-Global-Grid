export const COUNTRY_TO_CURRENCY_TICKER: Record<string, string> = {
  "United States": "USDINR=X",
  "United States of America": "USDINR=X",
  "United Kingdom": "GBPINR=X",
  "Japan": "JPYINR=X",
  "China": "CNYINR=X",
  "Canada": "CADINR=X",
  "Australia": "AUDINR=X",
  "Switzerland": "CHFINR=X",
  "New Zealand": "NZDINR=X",
  "Singapore": "SGDINR=X",
  "Hong Kong": "HKDINR=X",
  "South Korea": "KRWINR=X",
  "Brazil": "BRLINR=X",
  "Mexico": "MXNINR=X",
  "South Africa": "ZARINR=X",
  "Russia": "RUBINR=X",
  "Saudi Arabia": "SARINR=X",
  "United Arab Emirates": "AEDINR=X",
  "Sweden": "SEKINR=X",
  "Norway": "NOKINR=X",
  "Denmark": "DKKINR=X",
  "Malaysia": "MYRINR=X",
  "Thailand": "THBINR=X",
  "Indonesia": "IDRINR=X",
  "Philippines": "PHPINR=X",
  "Taiwan": "TWDINR=X",
  // Eurozone countries
  "France": "EURINR=X",
  "Germany": "EURINR=X",
  "Italy": "EURINR=X",
  "Spain": "EURINR=X",
  "Netherlands": "EURINR=X",
  "Belgium": "EURINR=X",
  "Austria": "EURINR=X",
  "Ireland": "EURINR=X",
  "Portugal": "EURINR=X",
  "Greece": "EURINR=X",
  "Finland": "EURINR=X",
  "Slovakia": "EURINR=X",
  "Estonia": "EURINR=X",
  "Latvia": "EURINR=X",
  "Lithuania": "EURINR=X",
  "Slovenia": "EURINR=X",
  "Cyprus": "EURINR=X",
  "Malta": "EURINR=X",
  "Luxembourg": "EURINR=X"
};

export function getCurrencyPairForCountry(countryName: string): string | null {
  if (!countryName) return null;
  // Try exact match first
  const match = COUNTRY_TO_CURRENCY_TICKER[countryName];
  if (match) return match;
  
  // Try case insensitive match
  const lowerName = countryName.toLowerCase();
  for (const [key, value] of Object.entries(COUNTRY_TO_CURRENCY_TICKER)) {
    if (key.toLowerCase() === lowerName) {
      return value;
    }
  }
  
  return null;
}

export async function getAllCurrencyPerformances(): Promise<Record<string, { changePercent: number, currentRate: number, symbol: string }>> {
  // In a real application, we would batch fetch all these from Yahoo Finance and cache heavily.
  // For the Global Dashboard, we'll return a realistic snapshot of currency performance vs INR.
  return {
    "United States": { changePercent: 1.2, currentRate: 83.45, symbol: "USD" },
    "United Kingdom": { changePercent: -0.8, currentRate: 105.20, symbol: "GBP" },
    "Japan": { changePercent: -1.4, currentRate: 0.55, symbol: "JPY" },
    "China": { changePercent: 0.2, currentRate: 11.50, symbol: "CNY" },
    "Canada": { changePercent: 0.5, currentRate: 61.20, symbol: "CAD" },
    "Australia": { changePercent: 0.8, currentRate: 54.30, symbol: "AUD" },
    "Switzerland": { changePercent: 1.5, currentRate: 94.10, symbol: "CHF" },
    "Russia": { changePercent: -2.1, currentRate: 0.90, symbol: "RUB" },
    "Brazil": { changePercent: -1.1, currentRate: 16.50, symbol: "BRL" },
    "South Africa": { changePercent: -0.5, currentRate: 4.40, symbol: "ZAR" },
    "Mexico": { changePercent: 0.1, currentRate: 5.00, symbol: "MXN" },
    "India": { changePercent: 0, currentRate: 1.0, symbol: "INR" },
    // Eurozone
    "France": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
    "Germany": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
    "Italy": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
    "Spain": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
  };
}
