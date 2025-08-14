"use client";

import { motion } from "motion/react";
import { useMotionTheme } from "@/hooks/useMotionTheme";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}

export default function Reveal({ children, className, y = 16, delay = 0 }: RevealProps) {
  const motionPreset = useMotionTheme();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: motionPreset.enterDuration, ease: motionPreset.ease, delay }}
    >
      {children}
    </motion.div>
  );
}
