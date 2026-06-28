"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { services } from "@/core/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-transparent px-5 pt-28 pb-20"
    >
      {/* Pozadie — gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full opacity-60 animate-pulse-glow bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-[8%] h-[380px] w-[380px] rounded-full opacity-50 animate-float-slow bg-[radial-gradient(circle,rgba(255,106,0,0.25)_0%,transparent_60%)]" />
        {/* jemná mriežka */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Digitálna agentúra novej generácie · SK &amp; CZ
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={0.12}
          initial="hidden"
          animate="visible"
          className="font-heading font-extrabold leading-[0.98] tracking-tight text-text-primary"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)" }}
        >
          Spravíme vašu firmu
          <br className="hidden sm:block" /> online{" "}
          <span className="text-gradient">nezabudnuteľnou.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          custom={0.24}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Weby, kreatívny obsah a AI automatizácie pod jednou strechou.
          Pomáhame malým a stredným firmám vyzerať profesionálne a reálne rásť
          v digitálnom svete — bez technického žargónu.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          custom={0.36}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#kontakt"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover sm:w-auto"
          >
            Chcem nezáväznú konzultáciu
            <ArrowRight
              size={18}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#sluzby"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            Pozrieť služby
          </a>
        </motion.div>

        {/* Service pills */}
        <motion.div
          variants={fadeUp}
          custom={0.48}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-tertiary"
        >
          {services.map((s, i) => (
            <span key={s.id} className="flex items-center gap-6">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-primary/60" />}
              {s.eyebrow}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#sluzby"
        aria-label="Scrollovať na služby"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary"
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} weight="bold" />
        </motion.span>
      </motion.a>
    </section>
  );
}
