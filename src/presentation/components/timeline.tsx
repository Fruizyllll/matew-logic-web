"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import type { ProcessStep } from "@/core/config/services-content";

/**
 * Animovaný „ako to funguje“ timeline. Pri scrollovaní sa postupne plní
 * oranžová čiara a jednotlivé kroky nabiehajú do viewportu.
 */
export default function Timeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });
  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* podkladová čiara */}
      <div className="absolute bottom-2 left-[23px] top-2 w-px bg-white/10" />
      {/* plniaca sa čiara */}
      <motion.div
        style={{ height: fillHeight }}
        className="absolute left-[23px] top-2 w-px bg-gradient-to-b from-primary-soft via-primary to-primary-strong"
      />

      <ol className="space-y-10">
        {steps.map((s, i) => (
          <motion.li
            key={s.step}
            className="relative flex gap-6"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {/* číslo / bod */}
            <div className="relative z-10 flex-none">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-ink-900 font-heading text-sm font-bold text-primary shadow-[0_0_24px_-6px_var(--color-primary-glow)]">
                {s.step}
              </span>
            </div>

            {/* obsah kroku */}
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-primary/30 sm:p-6">
              <h3 className="font-heading text-lg font-bold text-text-primary sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-text-secondary">
                {s.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
