"use client";

import { Sparkle, Stack, Brain, Target } from "@phosphor-icons/react";
import { advantages } from "@/core/config/site";
import Reveal from "./reveal";

const icons = [Sparkle, Stack, Brain, Target];

const stats = [
  { value: "3v1", label: "Web, obsah a AI od jedného tímu" },
  { value: "100%", label: "Riešenia na mieru, žiadne šablóny" },
  { value: "SK & CZ", label: "Rozumieme lokálnemu trhu" },
];

export default function WhyUs() {
  return (
    <section
      id="preco-my"
      className="grain relative scroll-mt-20 overflow-hidden bg-transparent px-5 py-24 sm:py-32"
    >

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Prečo my
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              Nie sme len ďalšia agentúra
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-xl text-text-secondary">
              Spojili sme dizajn, obsah a umelú inteligenciu do jedného tímu,
              ktorý rozumie, ako reálne funguje firma. Tu je, čo nás odlišuje.
            </p>
          </Reveal>
        </div>

        {/* Advantage cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {advantages.map((adv, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={adv.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-ink-900 p-7 transition-colors duration-300 hover:border-primary/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {adv.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-secondary">
                    {adv.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stats strip */}
        <Reveal delay={0.1}>
          <div className="mt-4 grid gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-800 p-8 sm:grid-cols-3 sm:p-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="font-heading text-4xl font-black text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-text-secondary">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
