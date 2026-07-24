"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { GlobeSeal } from "@/components/newspaper/GlobeSeal";

interface PullToRefreshProps {
  children: React.ReactNode;
}

export function PullToRefresh({ children }: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  
  const pullDistanceRef = useRef(0);
  const startY = useRef(0);
  const isPulling = useRef(false);
  const isPastThresholdRef = useRef(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const MAX_PULL = 120;
  const THRESHOLD = 70;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (window.scrollY === 0 && !isRefreshing) {
      startY.current = e.touches[0].clientY;
      isPulling.current = true;
      pullDistanceRef.current = 0;
      
      if (indicatorRef.current) {
        indicatorRef.current.style.transition = 'none';
      }
    }
  }, [isRefreshing]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isPulling.current) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;

    if (diff > 0) {
      const distance = Math.min(Math.pow(diff, 0.85), MAX_PULL);
      pullDistanceRef.current = distance;
      
      if (indicatorRef.current) {
        indicatorRef.current.style.transform = `translateY(${distance - 50}px)`;
        indicatorRef.current.style.opacity = Math.min(distance / THRESHOLD, 1).toString();
      }

      if (distance > THRESHOLD && !isPastThresholdRef.current) {
        isPastThresholdRef.current = true;
        setIsPastThreshold(true); // Triggers exactly one render to update text
      } else if (distance <= THRESHOLD && isPastThresholdRef.current) {
        isPastThresholdRef.current = false;
        setIsPastThreshold(false); // Triggers exactly one render to update text
      }
    } else {
      isPulling.current = false;
      pullDistanceRef.current = 0;
      
      if (indicatorRef.current) {
        indicatorRef.current.style.transform = `translateY(-100px)`;
        indicatorRef.current.style.opacity = '0';
      }
      
      if (isPastThresholdRef.current) {
        isPastThresholdRef.current = false;
        setIsPastThreshold(false);
      }
    }
  }, []);

  const handleTouchEnd = useCallback(async () => {
    if (!isPulling.current) return;
    isPulling.current = false;

    const finalDistance = pullDistanceRef.current;
    
    if (finalDistance > THRESHOLD) {
      setIsRefreshing(true);
      setErrorState(false);
      pullDistanceRef.current = 60;
      
      if (indicatorRef.current) {
        indicatorRef.current.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        indicatorRef.current.style.transform = `translateY(10px)`; // 60 - 50
        indicatorRef.current.style.opacity = '1';
      }

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
        setIsPastThreshold(false);
        isPastThresholdRef.current = false;
        pullDistanceRef.current = 0;
        
        if (indicatorRef.current) {
          indicatorRef.current.style.transform = `translateY(-100px)`;
          indicatorRef.current.style.opacity = '0';
        }
      }
    } else {
      pullDistanceRef.current = 0;
      setIsPastThreshold(false);
      isPastThresholdRef.current = false;
      
      if (indicatorRef.current) {
        indicatorRef.current.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        indicatorRef.current.style.transform = `translateY(-100px)`;
        indicatorRef.current.style.opacity = '0';
      }
    }
  }, [router]);

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

  return (
    <>
      <div 
        ref={indicatorRef}
        className="fixed top-0 left-0 w-full flex justify-center z-[200] pointer-events-none"
        style={{ transform: 'translateY(-100px)', opacity: 0 }}
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
                : isPastThreshold 
                  ? "Release to refresh" 
                  : "Pull to refresh"}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
