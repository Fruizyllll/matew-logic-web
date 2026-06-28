"use client";

import { processSteps } from "@/core/config/site";
import Reveal from "./reveal";

export default function Process() {
  return (
    <section
      id="postup"
      className="grain relative scroll-mt-20 overflow-hidden bg-transparent px-5 py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Ako to robíme
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              Jednoduchý postup, jasný výsledok
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 text-text-secondary">
              Žiadne komplikácie. Štyri kroky od prvého hovoru po spustenie —
              a vždy presne viete, čo sa deje.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08} className="bg-ink-900/70 backdrop-blur-sm">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-ink-800">
                <div className="font-heading text-5xl font-black text-white/[0.10] transition-colors duration-300 group-hover:text-primary">
                  {step.step}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
