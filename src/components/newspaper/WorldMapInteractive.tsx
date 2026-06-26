"use client";

import React, { memo, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";
import { MapMode } from "./MapModeSelector";
import "react-tooltip/dist/react-tooltip.css";

const geoUrl = "/features.json";

interface WorldMapInteractiveProps {
  currentMode: MapMode;
  selectedCountry?: string;
  articleCounts: Record<string, number>;
  breakingCounts: Record<string, number>;
  currencyData: Record<string, { changePercent: number; currentRate: number; symbol: string }>;
  relatedCountries?: string[];
}

const WorldMapInteractive = ({
  currentMode,
  selectedCountry,
  articleCounts,
  breakingCounts,
  currencyData,
  relatedCountries = []
}: WorldMapInteractiveProps) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [hoveredGeo, setHoveredGeo] = useState<{ properties: { name: string } } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCountryClick = (geo: { properties: { name: string } }) => {
    const countryName = geo.properties.name;
    if (countryName) {
      const slug = countryName.toLowerCase().replace(/\s+/g, '-');
      router.push(`/region/${slug}`, { scroll: false });
    }
  };

  const getGeographyStyle = (countryName: string) => {
    const isSelected = selectedCountry && countryName?.toLowerCase() === selectedCountry.toLowerCase();
    const isRelated = relatedCountries.some(r => r.toLowerCase() === countryName?.toLowerCase());
    
    const baseStyle = {
      fill: "var(--paper)",
      stroke: "var(--border)",
      strokeWidth: 0.5,
      outline: "none",
      transition: "all 300ms ease",
    };

    if (currentMode === "focus") {
      if (isSelected) {
        return { ...baseStyle, fill: "var(--accent)", stroke: "var(--ink)", strokeWidth: 1.5 };
      }
      if (isRelated) {
        return { ...baseStyle, fill: "rgba(220, 38, 38, 0.4)", stroke: "var(--accent)", strokeWidth: 1 };
      }
      return { ...baseStyle, fill: "var(--paper)", opacity: 0.3 };
    }

    if (currentMode === "heatmap") {
      const count = articleCounts[countryName] || 0;
      if (isSelected) return { ...baseStyle, fill: "var(--accent)", strokeWidth: 1 };
      if (count > 100) return { ...baseStyle, fill: "rgba(15, 23, 42, 0.9)" };
      if (count > 75) return { ...baseStyle, fill: "rgba(15, 23, 42, 0.7)" };
      if (count > 40) return { ...baseStyle, fill: "rgba(15, 23, 42, 0.5)" };
      if (count > 10) return { ...baseStyle, fill: "rgba(15, 23, 42, 0.3)" };
      return baseStyle;
    }

    if (currentMode === "currency") {
      const data = currencyData[countryName];
      if (isSelected) return { ...baseStyle, fill: "var(--ink)", strokeWidth: 1 };
      if (data) {
        if (data.changePercent > 0.5) return { ...baseStyle, fill: "rgba(21, 128, 61, 0.8)" }; // Strong Green
        if (data.changePercent > 0) return { ...baseStyle, fill: "rgba(21, 128, 61, 0.4)" };   // Light Green
        if (data.changePercent < -0.5) return { ...baseStyle, fill: "rgba(220, 38, 38, 0.8)" }; // Strong Red
        if (data.changePercent < 0) return { ...baseStyle, fill: "rgba(220, 38, 38, 0.4)" };   // Light Red
      }
      return baseStyle;
    }

    if (currentMode === "breaking") {
      const breakingCount = breakingCounts[countryName] || 0;
      if (isSelected) return { ...baseStyle, fill: "var(--accent)", strokeWidth: 1 };
      if (breakingCount > 0) {
        // We handle the pulsing via CSS class usually, but inline style works for static coloring
        return { ...baseStyle, fill: "rgba(220, 38, 38, 0.7)", stroke: "rgba(220, 38, 38, 1)", strokeWidth: 1 };
      }
      return baseStyle;
    }

    // Default News Mode
    return {
      ...baseStyle,
      fill: isSelected ? "var(--accent)" : "var(--paper)",
    };
  };

  const getTooltipContent = () => {
    if (!hoveredGeo) return null;
    const countryName = hoveredGeo.properties.name;
    
    if (currentMode === "heatmap") {
      const count = articleCounts[countryName] || 0;
      return (
        <div className="text-center">
          <div className="font-bold mb-1">{countryName}</div>
          <div className="text-xs opacity-80">{count} Stories</div>
        </div>
      );
    }
    
    if (currentMode === "currency") {
      const data = currencyData[countryName];
      if (!data) return <div className="font-bold">{countryName}</div>;
      const isPos = data.changePercent >= 0;
      return (
        <div className="text-center">
          <div className="font-bold mb-1">{countryName} ({data.symbol})</div>
          <div className={`text-xs ${isPos ? 'text-green-400' : 'text-red-400'}`}>
            {isPos ? '+' : ''}{data.changePercent}%
          </div>
        </div>
      );
    }

    if (currentMode === "breaking") {
      const count = breakingCounts[countryName] || 0;
      return (
        <div className="text-center">
          <div className="font-bold mb-1">{countryName}</div>
          {count > 0 ? (
            <div className="text-xs text-red-400 font-bold">{count} Breaking Stories</div>
          ) : (
            <div className="text-xs opacity-80">No breaking stories</div>
          )}
        </div>
      );
    }

    // Default News / Focus Mode
    return (
      <div className="font-bold">{countryName}</div>
    );
  };

  return (
    <div className="w-full relative border border-border bg-ink/5 overflow-hidden">
      <ComposableMap
        projectionConfig={{
          scale: 145,
          center: [0, 0],
        }}
        width={800}
        height={450}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isBreaking = currentMode === "breaking" && (breakingCounts[countryName] || 0) > 0;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-tooltip-id="map-tooltip"
                  onClick={() => handleCountryClick(geo)}
                  onMouseEnter={() => setHoveredGeo(geo)}
                  onMouseLeave={() => setHoveredGeo(null)}
                  className={isBreaking ? "animate-pulse" : ""}
                  style={{
                    default: getGeographyStyle(countryName),
                    hover: {
                      fill: "var(--accent)",
                      stroke: "var(--paper)",
                      strokeWidth: 0.75,
                      outline: "none",
                      transition: "all 250ms",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "var(--accent)",
                      stroke: "var(--ink)",
                      strokeWidth: 1,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      
      {mounted && (
        <Tooltip 
          id="map-tooltip" 
          place="top"
          className="z-50 rounded-none border border-border"
          style={{
            backgroundColor: "var(--ink)",
            color: "var(--paper)",
            fontFamily: "var(--font-inter)",
            padding: "8px 12px"
          }}
        >
          {getTooltipContent()}
        </Tooltip>
      )}

      {/* Dynamic Legend */}
      <div className="absolute bottom-4 left-4 ui-text text-xs bg-paper/90 p-3 border border-border backdrop-blur-sm pointer-events-none flex flex-col gap-2">
        {currentMode === "news" || currentMode === "focus" ? (
          <>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[var(--accent)] border border-border inline-block"></span>
              Selected Region
            </span>
            {currentMode === "focus" && (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-600/40 border border-accent inline-block"></span>
                Related Regions
              </span>
            )}
          </>
        ) : currentMode === "heatmap" ? (
          <>
            <div className="font-bold mb-1 border-b border-border pb-1">Coverage Intensity</div>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-slate-900 inline-block border border-border"></span> Very High</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-slate-700 inline-block border border-border"></span> High</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-slate-500 inline-block border border-border"></span> Medium</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-slate-300 inline-block border border-border"></span> Low</span>
          </>
        ) : currentMode === "currency" ? (
          <>
            <div className="font-bold mb-1 border-b border-border pb-1">vs INR</div>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-green-700 inline-block border border-border"></span> Strong Gain</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-green-700/40 inline-block border border-border"></span> Moderate Gain</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600/40 inline-block border border-border"></span> Moderate Loss</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600 inline-block border border-border"></span> Strong Loss</span>
          </>
        ) : currentMode === "breaking" ? (
          <>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600/70 border border-red-600 inline-block animate-pulse"></span>
              Active Breaking News
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default memo(WorldMapInteractive);
