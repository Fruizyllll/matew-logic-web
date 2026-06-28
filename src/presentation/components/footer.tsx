"use client";

import { InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { services, site, navLinks } from "@/core/config/site";
import { openCookieSettings } from "./cookie-consent";
import Logo from "./logo";

const legalLinks = [
  { label: "Ochrana osobných údajov", href: "/ochrana-osobnych-udajov" },
  { label: "Obchodné podmienky", href: "/obchodne-podmienky" },
  { label: "Zásady používania cookies", href: "/zasady-cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const op = site.operator;

  return (
    <footer className="grain relative overflow-hidden border-t border-white/10 bg-ink px-5 pt-16 pb-8">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-flex">
              <Logo height={34} />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {site.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
              >
                <InstagramLogo size={20} weight="duotone" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
              >
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Služby */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-text-primary">
              Služby
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={s.href} className="text-sm text-text-secondary transition-colors hover:text-primary">
                    {s.eyebrow}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigácia */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-text-primary">
              Web
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-secondary transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Právne */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-text-primary">
              Právne
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-secondary transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  Nastavenia cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Údaje o prevádzkovateľovi */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-ink-900/60 px-5 py-4 text-xs leading-relaxed text-text-tertiary">
          <span className="font-semibold text-text-secondary">Prevádzkovateľ:</span>{" "}
          {op.name || "[DOPLNIŤ obchodné meno]"}
          {op.address ? `, ${op.address}` : ", [DOPLNIŤ sídlo]"}
          {op.ico ? `, IČO: ${op.ico}` : ", IČO: [DOPLNIŤ]"}
          {op.dic ? `, DIČ: ${op.dic}` : ""}
          {op.icDph ? `, IČ DPH: ${op.icDph}` : ""}
          {op.register ? `. ${op.register}.` : ". [DOPLNIŤ zápis v registri]."}
        </div>

        {/* Spodný riadok */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-text-tertiary sm:flex-row">
          <p>
            © {year} {site.name}. Všetky práva vyhradené.
          </p>
          <p>
            Vytvorené s logikou v{" "}
            <span className="text-primary">SK &amp; CZ</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
