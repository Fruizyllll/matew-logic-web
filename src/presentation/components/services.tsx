"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "@phosphor-icons/react";
import { services, type Service } from "@/core/config/site";
import ServiceVisual from "./service-visual";
import Reveal from "./reveal";

function ServiceRow({ service, idx }: { service: Service; idx: number }) {
  const light = service.theme === "light";
  const reverse = idx % 2 === 1;

  const heading = light ? "text-ink-primary" : "text-text-primary";
  const body = light ? "text-ink-secondary" : "text-text-secondary";
  const muted = light ? "text-ink-tertiary" : "text-text-tertiary";
  const cardBorder = light ? "border-black/10" : "border-white/10";
  const cardBg = light ? "bg-white" : "bg-ink-900";
  const pillBorder = light ? "border-black/10 bg-black/[0.03]" : "border-white/10 bg-white/5";

  // pri obrázkových službách dáme obrázku o ~20 % širší stĺpec (lepšie vidno)
  const gridCols = service.image
    ? reverse
      ? "lg:grid-cols-[2fr_3fr]"
      : "lg:grid-cols-[3fr_2fr]"
    : "lg:grid-cols-2";

  return (
    <section className="grain relative overflow-hidden bg-transparent px-5 py-24 sm:py-32">
      {/* jemný farebný akcent (mäkký radiálny gradient, bez blur filtra) */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-[520px] w-[520px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-tint) 0%, transparent 65%)",
          top: idx % 2 === 0 ? "-8rem" : "auto",
          bottom: idx % 2 === 1 ? "-8rem" : "auto",
          left: reverse ? "auto" : "-6rem",
          right: reverse ? "-6rem" : "auto",
        }}
      />

      <div className={`relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:gap-16 ${gridCols}`}>
        {/* Vizuál */}
        <Reveal className={reverse ? "lg:order-2" : "lg:order-1"}>
          <a
            href={service.href}
            aria-label={`Zobraziť službu: ${service.eyebrow}`}
            className="group relative block cursor-pointer"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-3xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 ${
                service.image ? "" : `border ${cardBorder} ${cardBg} p-6 sm:p-10`
              }`}
            >
              {/* gradient border glow pri hoveri */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: "0 30px 80px -20px var(--color-primary-glow)" }}
              />
              {/* index — len pri vektorovom vizuáli (obrázok má vlastnú kompozíciu) */}
              {!service.image && (
                <span
                  className={`absolute right-6 top-5 font-heading text-5xl font-black ${light ? "text-black/[0.06]" : "text-white/[0.06]"}`}
                >
                  {service.index}
                </span>
              )}

              {service.image ? (
                <div className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.05]">
                  <Image
                    src={service.image}
                    alt={`Ukážka: ${service.eyebrow}`}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <ServiceVisual id={service.id} light={light} />
                </div>
              )}

              {/* overlay CTA pri hoveri */}
              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex translate-y-3 items-center justify-between rounded-2xl border border-white/15 bg-primary px-5 py-3.5 text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-semibold">Zobraziť službu</span>
                <ArrowUpRight size={20} weight="bold" />
              </div>
            </div>
          </a>
        </Reveal>

        {/* Text */}
        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <Reveal delay={0.1}>
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary ${pillBorder}`}
            >
              {service.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h3
              className={`mt-5 font-heading text-3xl font-extrabold tracking-tight ${heading} sm:text-4xl`}
            >
              {service.title}
            </h3>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`mt-4 text-lg font-medium ${body}`}>{service.tagline}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className={`mt-3 leading-relaxed ${muted}`}>{service.description}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-7 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className={`flex items-start gap-3 ${body}`}>
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check size={13} weight="bold" />
                  </span>
                  <span className="text-[15px]">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.35}>
            <a
              href={service.href}
              className={`group mt-8 inline-flex items-center gap-2 text-sm font-semibold ${heading} transition-colors hover:text-primary`}
            >
              Zistiť viac o tejto službe
              <ArrowUpRight
                size={18}
                weight="bold"
                className="text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div id="sluzby" className="scroll-mt-20">
      {/* Intro k službám */}
      <section className="grain relative overflow-hidden bg-transparent px-5 pt-24 pb-4 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Čo robíme
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              Tri spôsoby, ako posunieme vašu firmu vpred
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-xl text-text-secondary">
              Každú službu vieme dodať samostatne alebo ako jeden zladený celok.
              Vyberte si, čo vaša firma potrebuje práve teraz.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((service, idx) => (
        <ServiceRow key={service.id} service={service} idx={idx} />
      ))}
    </div>
  );
}
