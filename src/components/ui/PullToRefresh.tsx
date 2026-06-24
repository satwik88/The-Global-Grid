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
      setPullDistance(60); 

      try {

        window.dispatchEvent(new Event("global-grid-refresh"));

        await new Promise(resolve => setTimeout(resolve, 500)); 

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
      document.addEventListener("touchstart", handleTouchStart, { passive: true });
      document.addEventListener("touchmove", handleTouchMove, { passive: true });
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  const translateY = isRefreshing ? 60 : pullDistance;
  const opacity = pullDistance > 0 || isRefreshing ? Math.min(translateY / THRESHOLD, 1) : 0;
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (indicatorRef.current) {
      indicatorRef.current.style.transform = `translateY(${translateY > 0 ? translateY - 50 : -100}px)`;
      indicatorRef.current.style.transition = isPulling.current ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out';
      indicatorRef.current.style.opacity = opacity.toString();
    }
  }, [translateY, opacity]);

  return (
    <>
      <div 
        ref={indicatorRef}
        className="fixed top-0 left-0 w-full flex justify-center z-[200] pointer-events-none"
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
