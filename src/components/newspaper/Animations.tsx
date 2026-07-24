"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";



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
