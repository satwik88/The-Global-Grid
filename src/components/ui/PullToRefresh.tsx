"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { GlobeSeal } from "@/components/newspaper/GlobeSeal";

interface PullToRefreshProps {
  children: React.ReactNode;
}

export function PullToRefresh({ children }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const startY = useRef(0);
  const isPulling = useRef(false);
  const router = useRouter();

  const MAX_PULL = 120;
  const THRESHOLD = 70;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (window.scrollY === 0 && !isRefreshing) {
      startY.current = e.touches[0].clientY;
      isPulling.current = true;
    }
  }, [isRefreshing]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isPulling.current) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;

    if (diff > 0) {
      const distance = Math.min(Math.pow(diff, 0.85), MAX_PULL);
      setPullDistance(distance);
      
      // Prevent browser default pull-to-refresh (rubber banding)
      if (e.cancelable) {
        e.preventDefault();
      }
    } else {
      isPulling.current = false;
      setPullDistance(0);
    }
  }, []);

  const handleTouchEnd = useCallback(async () => {
    if (!isPulling.current) return;
    isPulling.current = false;

    if (pullDistance > THRESHOLD) {
      setIsRefreshing(true);
      setErrorState(false);
      setPullDistance(60); // Lock position while refreshing

      try {
        // Notify Client Components to refetch
        window.dispatchEvent(new Event("global-grid-refresh"));
        
        // Wait briefly for spin animation
        await new Promise(resolve => setTimeout(resolve, 500)); 
        
        // Refresh Server Components
        router.refresh();
      } catch (err) {
        console.error("Failed to refresh", err);
        setErrorState(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
      }
    } else {
      setPullDistance(0);
    }
  }, [pullDistance, router]);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouch) {
      document.addEventListener("touchstart", handleTouchStart, { passive: false });
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Indicator starts hidden above the screen (-100%) and translates down
  const translateY = isRefreshing ? 60 : pullDistance;
  const opacity = pullDistance > 0 || isRefreshing ? Math.min(translateY / THRESHOLD, 1) : 0;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full flex justify-center z-[200] pointer-events-none"
        style={{ 
          transform: `translateY(${translateY > 0 ? translateY - 50 : -100}px)`,
          transition: isPulling.current ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out',
          opacity
        }}
      >
        <div className="bg-paper border border-border shadow-[0_4px_12px_var(--paper-shadow)] rounded-full px-5 py-2.5 flex items-center gap-3">
          <GlobeSeal 
            className={`w-5 h-5 text-ink ${isRefreshing && !errorState ? 'animate-spin' : ''}`} 
          />
          <span className="font-[family-name:var(--font-cormorant)] text-[15px] font-semibold text-ink tracking-wide">
            {errorState 
              ? "Couldn't refresh" 
              : isRefreshing 
                ? "Refreshing..." 
                : pullDistance > THRESHOLD 
                  ? "Release to refresh" 
                  : "Pull to refresh"}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
