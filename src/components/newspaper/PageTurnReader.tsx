"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageTurnReaderProps {
  pages: React.ReactNode[];
}

export function PageTurnReader({ pages }: PageTurnReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      const next = currentPage + newDirection;
      if (next >= 0 && next < pages.length) {
        setDirection(newDirection);
        setCurrentPage(next);
      }
    },
    [currentPage, pages.length]
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold) paginate(1);
    else if (info.offset.x > threshold) paginate(-1);
  };

  return (
    <div className="page-turn-container relative mx-auto max-w-lg min-h-[70vh] no-print md:hidden">
      <div className="flex items-center justify-between mb-4 ui-text">
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className="p-2 disabled:opacity-30 hover:text-accent transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        <span>
          Page {currentPage + 1} of {pages.length}
        </span>
        <button
          onClick={() => paginate(1)}
          disabled={currentPage === pages.length - 1}
          className="p-2 disabled:opacity-30 hover:text-accent transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="relative overflow-hidden" style={{ perspective: "2000px" }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{
              rotateY: direction > 0 ? 0 : -90,
              transformOrigin: direction > 0 ? "left center" : "right center",
              opacity: 0.8,
            }}
            animate={{
              rotateY: 0,
              opacity: 1,
            }}
            exit={{
              rotateY: direction > 0 ? -90 : 90,
              transformOrigin: direction > 0 ? "left center" : "right center",
              opacity: 0.6,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="page-turn page-curl-shadow bg-paper border border-border p-6 min-h-[60vh]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="caption-text text-center mt-4">
        Swipe to turn the page
      </p>
    </div>
  );
}
