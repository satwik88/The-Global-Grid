"use client";

import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react";

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check initial state
    setIsOffline(!navigator.onLine);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="bg-accent text-[#F5F1E8] py-2 px-4 flex items-center justify-center gap-2 text-xs font-[family-name:var(--font-inter)] font-bold uppercase tracking-widest z-[100] sticky top-0 border-b border-border shadow-md">
      <WifiOff size={14} />
      <span>You're offline — showing saved content</span>
    </div>
  );
}
