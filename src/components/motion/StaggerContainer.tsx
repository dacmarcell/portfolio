"use client";

import { Children, isValidElement } from "react";
import { motion } from "motion/react";
import { useMotionTheme } from "@/hooks/useMotionTheme";

interface StaggerContainerProps {
  children: React.ReactNode;
  baseDelay?: number;
  step?: number;
  y?: number;
  className?: string;
}

export default function StaggerContainer({ children, baseDelay = 0, step, y = 12, className }: StaggerContainerProps) {
  const motionPreset = useMotionTheme();
  const childStep = step ?? motionPreset.step;
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={(isValidElement(child) && (child.key as any)) ?? i}
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: motionPreset.enterDuration, ease: motionPreset.ease, delay: baseDelay + childStep * i }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

