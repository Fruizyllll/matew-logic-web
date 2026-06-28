import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Browsers,
  Lightning,
  DeviceMobile,
  MagnifyingGlass,
  ShieldCheck,
  ChartLineUp,
  ShoppingCart,
  Sparkle,
  PaintBrush,
  FilmSlate,
  Cube,
  Camera,
  ChatCircleDots,
  EnvelopeSimple,
  FileText,
  Plugs,
  ClockCountdown,
  Robot,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

type IconComp = ComponentType<{
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}>;

import Navbar from "@/presentation/components/navbar";
import BackgroundFX from "@/presentation/components/background-fx";
import ScrollProgress from "@/presentation/components/scroll-progress";
import Footer from "@/presentation/components/footer";
import Reveal from "@/presentation/components/reveal";
import Timeline from "@/presentation/components/timeline";
import Faq from "@/presentation/components/faq";
import type { ServicePageContent, FeatureItem } from "@/core/config/services-content";

const iconMap: Record<string, IconComp> = {
  browsers: Browsers,
  lightning: Lightning,
  mobile: DeviceMobile,
  search: MagnifyingGlass,
  shield: ShieldCheck,
  chart: ChartLineUp,
  cart: ShoppingCart,
  sparkle: Sparkle,
  paint: PaintBrush,
  film: FilmSlate,
  cube: Cube,
  camera: Camera,
  chat: ChatCircleDots,
  envelope: EnvelopeSimple,
  file: FileText,
  plugs: Plugs,
  clock: ClockCountdown,
  robot: Robot,
};

function FeatureCard({ item, delay }: { item: FeatureItem; delay: number }) {
  const Ico = iconMap[item.icon] ?? Sparkle;
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-primary/40">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Ico size={24} weight="duotone" />
        </div>
        <h3 className="font-heading text-lg font-bold text-text-primary">
          {item.title}
        </h3>
        <p className="mt-2 leading-relaxed text-text-secondary">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function ServicePage({ data }: { data: ServicePageContent }) {
  return (
    <>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar linkPrefix="/" />

      <main className="relative z-10">
        {/* ===== HERO ===== */}
        <section className="grain relative overflow-hidden px-5 pt-32 pb-16 sm:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <nav className="mb-6 flex items-center gap-2 text-sm text-text-tertiary">
                  <Link href="/" className="transition-colors hover:text-primary">
                    Domov
                  </Link>
                  <span>/</span>
                  <Link href="/#sluzby" className="transition-colors hover:text-primary">
                    Služby
                  </Link>
                  <span>/</span>
                  <span className="text-text-secondary">{data.eyebrow}</span>
                </nav>
              </Reveal>

              <Reveal delay={0.05}>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {data.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                  {data.hero.titleStart}{" "}
                  <span className="text-gradient">{data.hero.titleHighlight}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
                  {data.hero.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#kontakt"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover"
                  >
                    Nezáväzná konzultácia
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    href="/#sluzby"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
                  >
                    <ArrowLeft size={16} weight="bold" /> Späť na služby
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* showcase obrázok */}
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={data.image}
                  alt={`Ukážka: ${data.eyebrow}`}
                  fill
                  quality={90}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="grain relative overflow-hidden px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                {data.intro.heading}
              </h2>
            </Reveal>
            {data.intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== PROCESS / AKO TO FUNGUJE ===== */}
        <section className="grain relative overflow-hidden px-5 py-20 sm:py-28">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Ako to funguje
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                {data.process.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-4 max-w-xl text-text-secondary">
                {data.process.subtitle}
              </p>
            </Reveal>
          </div>
          <Timeline steps={data.process.steps} />
        </section>

        {/* ===== FEATURES ===== */}
        <section className="grain relative overflow-hidden px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Reveal>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                  {data.features.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto mt-4 max-w-xl text-text-secondary">
                  {data.features.subtitle}
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.items.map((item, i) => (
                <FeatureCard key={item.title} item={item} delay={(i % 3) * 0.08} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== USE CASES ===== */}
        <section className="grain relative overflow-hidden px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Príklady
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                  {data.useCases.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mx-auto mt-4 max-w-xl text-text-secondary">
                  {data.useCases.subtitle}
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.useCases.items.map((item, i) => {
                const Ico = iconMap[item.icon] ?? Sparkle;
                return (
                  <Reveal key={item.title} delay={(i % 2) * 0.08}>
                    <div className="flex h-full gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-primary/30">
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Ico size={22} weight="duotone" />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 leading-relaxed text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="grain relative overflow-hidden px-5 py-20 sm:py-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                FAQ
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                {data.faq.heading}
              </h2>
            </Reveal>
          </div>
          <Faq items={data.faq.items} />
        </section>

        {/* ===== CTA ===== */}
        <section className="grain relative overflow-hidden px-5 py-20 sm:py-28">
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-800 px-6 py-14 text-center sm:px-12 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-primary-tint) 0%, transparent 65%)",
                }}
              />
              <h2 className="relative font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                {data.cta.heading}
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-text-secondary">
                {data.cta.text}
              </p>
              <Link
                href="/#kontakt"
                className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover"
              >
                Chcem nezáväznú konzultáciu
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
