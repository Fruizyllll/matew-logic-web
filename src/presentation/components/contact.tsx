"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
  InstagramLogo,
  SpinnerGap,
} from "@phosphor-icons/react";
import { contactSchema } from "@/core/contact/schema";
import { services, site } from "@/core/config/site";
import Reveal from "./reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") || ""), // honeypot
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const [key, val] of Object.entries(
        parsed.error.flatten().fieldErrors
      )) {
        if (val && val[0]) fieldErrors[key] = val[0];
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setServerError(json.error || "Niečo sa pokazilo. Skúste to prosím znova.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerError("Niečo sa pokazilo. Skúste to prosím znova.");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-tertiary outline-none transition-colors duration-200 focus:border-primary focus:bg-white/[0.05]";

  return (
    <section
      id="kontakt"
      className="grain relative scroll-mt-20 overflow-hidden bg-transparent px-5 py-24 sm:py-32"
    >

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Ľavá strana — výzva + kontakty */}
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Poďme spolu posunúť vašu firmu vpred
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-md text-text-secondary">
              Napíšte nám pár viet o vašej firme a o tom, čo riešite. Ozveme sa
              vám do 24 hodín s nezáväzným návrhom. Konzultácia je zadarmo.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 space-y-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-text-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                  <EnvelopeSimple size={20} weight="duotone" />
                </span>
                {site.contact.email}
              </a>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-text-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                  <InstagramLogo size={20} weight="duotone" />
                </span>
                {site.social.instagram.handle}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Pravá strana — formulár */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-ink-900/80 p-6 backdrop-blur-sm sm:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <CheckCircle size={56} weight="fill" className="text-primary" />
                <h3 className="mt-5 font-heading text-2xl font-bold text-text-primary">
                  Ďakujeme, máme to!
                </h3>
                <p className="mt-2 max-w-sm text-text-secondary">
                  Vaša správa bola odoslaná. Ozveme sa vám čo najskôr, zvyčajne
                  do 24 hodín.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Odoslať ďalšiu správu
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Meno *
                    </label>
                    <input id="name" name="name" type="text" autoComplete="name" className={inputClass} placeholder="Ján Novák" />
                    {errors.name && <p className="mt-1.5 text-sm text-[var(--color-error)]">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-secondary">
                      E-mail *
                    </label>
                    <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="jan@firma.sk" />
                    {errors.email && <p className="mt-1.5 text-sm text-[var(--color-error)]">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Firma
                    </label>
                    <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Názov firmy" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Mám záujem o
                    </label>
                    <select id="service" name="service" defaultValue="" className={`${inputClass} appearance-none`}>
                      <option value="" disabled className="bg-ink-800">Vyberte službu</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.eyebrow} className="bg-ink-800">{s.eyebrow}</option>
                      ))}
                      <option value="Neviem, poraďte mi" className="bg-ink-800">Neviem, poraďte mi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Správa *
                  </label>
                  <textarea id="message" name="message" rows={5} className={`${inputClass} resize-none`} placeholder="Napíšte nám pár viet o vašej firme a o tom, s čím vám môžeme pomôcť…" />
                  {errors.message && <p className="mt-1.5 text-sm text-[var(--color-error)]">{errors.message}</p>}
                </div>

                {/* Honeypot — skryté pole proti spamu */}
                <div className="hidden" aria-hidden>
                  <label htmlFor="website">Nechajte prázdne</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-text-secondary">
                  <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 flex-none accent-[var(--color-primary)]" />
                  <span>
                    Súhlasím so spracovaním osobných údajov za účelom vybavenia
                    môjho dopytu v zmysle{" "}
                    <a href="/ochrana-osobnych-udajov" className="text-primary hover:underline">
                      zásad ochrany osobných údajov
                    </a>
                    . *
                  </span>
                </label>
                {errors.consent && <p className="-mt-2 text-sm text-[var(--color-error)]">{errors.consent}</p>}

                {status === "error" && serverError && (
                  <p className="rounded-2xl border border-[var(--color-error)]/30 bg-[var(--color-error)]/10 px-4 py-3 text-sm text-[var(--color-error)]">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <SpinnerGap size={18} weight="bold" className="animate-spin" />
                      Odosielam…
                    </>
                  ) : (
                    <>
                      Odoslať dopyt
                      <ArrowRight size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
