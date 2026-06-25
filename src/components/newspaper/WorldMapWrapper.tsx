"use client";

import React, { useState, useEffect } from "react";
import WorldMapInteractive from "./WorldMapInteractive";
import { MapModeSelector, MapMode } from "./MapModeSelector";

interface WorldMapWrapperProps {
  initialMode?: MapMode;
  selectedCountry?: string;
  relatedCountries?: string[];
  hideSelector?: boolean;
}

export default function WorldMapWrapper({
  initialMode = "news",
  selectedCountry,
  relatedCountries = [],
  hideSelector = false
}: WorldMapWrapperProps) {
  const [currentMode, setCurrentMode] = useState<MapMode>(initialMode);
  const [articleCounts, setArticleCounts] = useState<Record<string, number>>({});
  const [breakingCounts, setBreakingCounts] = useState<Record<string, number>>({});
  const [currencyData, setCurrencyData] = useState<Record<string, any>>({});

  useEffect(() => {
    // In a real app we'd fetch this from our API
    // For demo purposes, we'll hardcode the mocked data here or fetch from an API route.
    // To keep it clean, let's mock it directly here for the client component 
    // instead of creating 3 new API routes just for the wrapper.
    
    setArticleCounts({
      "United States": 145, "India": 112, "China": 98, "United Kingdom": 76,
      "France": 54, "Germany": 48, "Japan": 67, "Russia": 89, "Ukraine": 65,
      "Israel": 78, "Palestine": 70, "Brazil": 34, "South Africa": 22,
      "Australia": 41, "Canada": 38, "Mexico": 29, "South Korea": 45,
      "Taiwan": 33, "Iran": 55, "Saudi Arabia": 37, "United Arab Emirates": 25,
      "Indonesia": 31, "Pakistan": 44, "Egypt": 28, "Nigeria": 19
    });

    setBreakingCounts({
      "United States": 3, "India": 2, "China": 1, "Russia": 4, "Ukraine": 3,
      "Israel": 5, "Palestine": 4, "United Kingdom": 1, "France": 1,
      "Iran": 2, "Taiwan": 1
    });

    setCurrencyData({
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
      "France": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
      "Germany": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
      "Italy": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
      "Spain": { changePercent: 0.4, currentRate: 90.10, symbol: "EUR" },
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {!hideSelector && (
        <MapModeSelector currentMode={currentMode} onModeChange={setCurrentMode} />
      )}
      <WorldMapInteractive 
        currentMode={currentMode}
        selectedCountry={selectedCountry}
        relatedCountries={relatedCountries}
        articleCounts={articleCounts}
        breakingCounts={breakingCounts}
        currencyData={currencyData}
      />
    </div>
  );
}
