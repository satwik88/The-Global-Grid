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
    
    // Add resistance if trying to swipe past boundaries
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
      // Snap back if at boundaries
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
    
    // Animate current page off screen
    const offScreenX = direction > 0 ? -windowWidth : windowWidth;
    setDragX(offScreenX);
    
    setTimeout(() => {
      // Teleport to opposite side
      setIsSnapping(true);
      setCurrentPage(prev => prev + direction);
      setDragX(direction > 0 ? windowWidth : -windowWidth);
      
      // Allow browser to apply the snap instantly, then slide in
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
        className="relative w-full touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          className="bg-paper border border-border p-6 min-h-[60vh] origin-center relative"
          style={{ 
            transform: `translateX(${dragX}px)`,
            transition: isDragging || isSnapping 
              ? 'none' 
              : `transform ${ANIM_DURATION}ms ease-out, box-shadow ${ANIM_DURATION}ms ease-out`,
            boxShadow,
            willChange: 'transform'
          }}
        >
          {pages[currentPage]}
          
          {/* Subtle page curl gradient overlay when dragging */}
          {(isDragging || (isAnimating && dragX !== 0 && !isSnapping)) && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(${dragX < 0 ? '90deg' : '270deg'}, rgba(0,0,0,0) 0%, rgba(0,0,0,${shadowIntensity}) 100%)`,
                opacity: Math.min(Math.abs(dragX) / 100, 1)
              }}
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
