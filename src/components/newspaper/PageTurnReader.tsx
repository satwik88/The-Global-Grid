"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageTurnReaderProps {
  pages: React.ReactNode[];
}

export function PageTurnReader({ pages }: PageTurnReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [windowWidth, setWindowWidth] = useState(500);

  const startX = useRef(0);
  const currentX = useRef(0);

  const THRESHOLD = 80;
  const ANIM_DURATION = 300;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isAnimating) return;
    currentX.current = e.touches[0].clientX;
    const diff = currentX.current - startX.current;

    if ((currentPage === 0 && diff > 0) || (currentPage === pages.length - 1 && diff < 0)) {
      setDragX(diff * 0.25);
    } else {
      setDragX(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || isAnimating) return;
    setIsDragging(false);

    if ((currentPage === 0 && dragX > 0) || (currentPage === pages.length - 1 && dragX < 0)) {

      setIsAnimating(true);
      setDragX(0);
      setTimeout(() => setIsAnimating(false), ANIM_DURATION);
      return;
    }

    if (dragX < -THRESHOLD) {
      turnPage(1);
    } else if (dragX > THRESHOLD) {
      turnPage(-1);
    } else {
      setIsAnimating(true);
      setDragX(0);
      setTimeout(() => setIsAnimating(false), ANIM_DURATION);
    }
  };

  const turnPage = (direction: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const offScreenX = direction > 0 ? -windowWidth : windowWidth;
    setDragX(offScreenX);

    setTimeout(() => {

      setIsSnapping(true);
      setCurrentPage(prev => prev + direction);
      setDragX(direction > 0 ? windowWidth : -windowWidth);

      setTimeout(() => {
        setIsSnapping(false);
        setDragX(0);
        setTimeout(() => {
          setIsAnimating(false);
        }, ANIM_DURATION);
      }, 50);
    }, ANIM_DURATION);
  };

  const shadowIntensity = Math.min(Math.abs(dragX) / windowWidth, 1) * 0.15;
  const boxShadow = isDragging || (isAnimating && dragX !== 0 && !isSnapping)
    ? `0 20px 40px rgba(0,0,0,${shadowIntensity}), 0 0 10px rgba(0,0,0,${shadowIntensity * 0.5}) inset`
    : 'none';

  const pageContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageContainerRef.current) {
      pageContainerRef.current.style.transform = `translateX(${dragX}px)`;
      pageContainerRef.current.style.transition = isDragging || isSnapping 
        ? 'none' 
        : `transform 300ms ease-out, box-shadow 300ms ease-out`;
      pageContainerRef.current.style.boxShadow = boxShadow;
      pageContainerRef.current.style.willChange = 'transform';
    }
  }, [dragX, isDragging, isSnapping, boxShadow]);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.style.background = `linear-gradient(${dragX < 0 ? '90deg' : '270deg'}, rgba(0,0,0,0) 0%, rgba(0,0,0,${shadowIntensity}) 100%)`;
      overlayRef.current.style.opacity = Math.min(Math.abs(dragX) / 100, 1).toString();
    }
  }, [dragX, shadowIntensity, isDragging, isAnimating, isSnapping]);

  return (
    <div className="page-turn-container relative mx-auto max-w-lg min-h-[70vh] no-print md:hidden overflow-hidden">
      <div className="flex items-center justify-between mb-4 ui-text relative z-10">
        <button
          onClick={() => turnPage(-1)}
          disabled={currentPage === 0 || isAnimating}
          className="p-2 disabled:opacity-30 hover:text-accent transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        <span>
          Page {currentPage + 1} of {pages.length}
        </span>
        <button
          onClick={() => turnPage(1)}
          disabled={currentPage === pages.length - 1 || isAnimating}
          className="p-2 disabled:opacity-30 hover:text-accent transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div 
        className="relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          ref={pageContainerRef}
          className="bg-paper border border-border p-6 min-h-[60vh] origin-center relative will-change-transform"
        >
          {pages[currentPage]}

          {(isDragging || (isAnimating && dragX !== 0 && !isSnapping)) && (
            <div 
              ref={overlayRef}
              className="absolute inset-0 pointer-events-none will-change-transform"
            />
          )}
        </div>
      </div>

      <p className="caption-text text-center mt-4 text-ink-secondary">
        Swipe to turn the page
      </p>
    </div>
  );
}
