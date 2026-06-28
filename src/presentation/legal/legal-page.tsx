import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/presentation/components/footer";
import { site } from "@/core/config/site";

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <main className="grain relative min-h-screen overflow-hidden bg-ink px-5 pt-28 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-10 blur-[140px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} weight="bold" /> Späť na hlavnú stránku
          </Link>

          <h1 className="mt-8 font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-text-tertiary">
            Posledná aktualizácia: {site.legalUpdatedAt}
          </p>
          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              {intro}
            </p>
          )}

          <div className="legal mt-8">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
