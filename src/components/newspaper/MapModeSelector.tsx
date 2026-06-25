import { Globe, BarChart2, DollarSign, Zap, Crosshair } from "lucide-react";

export type MapMode = "news" | "heatmap" | "currency" | "breaking" | "focus";

interface MapModeSelectorProps {
  currentMode: MapMode;
  onModeChange: (mode: MapMode) => void;
}

export function MapModeSelector({ currentMode, onModeChange }: MapModeSelectorProps) {
  const modes = [
    { id: "news", label: "News", icon: Globe },
    { id: "heatmap", label: "Heatmap", icon: BarChart2 },
    { id: "currency", label: "Currency", icon: DollarSign },
    { id: "breaking", label: "Breaking", icon: Zap },
    { id: "focus", label: "Focus", icon: Crosshair },
  ] as const;

  return (
    <div className="flex border border-[#3a3020]" style={{ backgroundColor: "#1a1410" }}>
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = currentMode === mode.id;

        return (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            style={{
              backgroundColor: isActive ? "#c8a96e" : "transparent",
              color: isActive ? "#1a1410" : "#d4c5a0",
              borderRight: "1px solid #3a3020",
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-widest font-bold transition-all duration-200 last:border-r-0 hover:brightness-125"
          >
            <Icon size={15} />
            <span className="hidden sm:inline">{mode.label}</span>
          </button>
        );
      })}{" "}
    </div>
  );
}
