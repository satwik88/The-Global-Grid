"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[100] no-print origin-left"
      style={{ scaleX }}
    />
  );
}

export function ArticleReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function NewspaperOpening({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpened(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -8, transformPerspective: 1200 }}
      animate={
        opened
          ? { opacity: 1, rotateX: 0 }
          : { opacity: 0, rotateX: -8 }
      }
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      {children}
    </motion.div>
  );
}
