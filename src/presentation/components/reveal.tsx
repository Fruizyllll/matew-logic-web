"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** HTML tag to render */
  as?: "div" | "section" | "li" | "span" | "h2" | "p";
}

/**
 * Jemný scroll-reveal wrapper. Animuje sa raz, keď sa dostane do viewportu.
 * Rešpektuje prefers-reduced-motion cez globálne CSS pravidlo.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}
