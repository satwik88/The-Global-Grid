const COUNTRY_TO_CURRENCY_TICKER: Record<string, string> = {
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


