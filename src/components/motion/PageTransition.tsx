"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useMotionTheme } from "@/hooks/useMotionTheme";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const motionPreset = useMotionTheme();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: motionPreset.enterDuration, ease: motionPreset.ease }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
