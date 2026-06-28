"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { navLinks, site } from "@/core/config/site";
import Logo from "./logo";

export default function Navbar({ linkPrefix = "" }: { linkPrefix?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // na sub-stránkach prefix "/" => odkazy vedú na sekcie domovskej stránky
  const logoHref = linkPrefix ? "/" : "#top";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-colors duration-300 sm:px-5 ${
          scrolled
            ? "border-white/10 bg-ink-900/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href={logoHref}
          className="flex items-center gap-2.5"
          aria-label={`${site.name} domov`}
        >
          <Logo height={30} />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`${linkPrefix}${link.href}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-2">
          <a
            href={`${linkPrefix}#kontakt`}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover sm:inline-flex"
          >
            Nezáväzný kontakt
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-primary md:hidden"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-20 z-[80] rounded-3xl border border-white/10 bg-ink-900/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`${linkPrefix}${link.href}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${linkPrefix}#kontakt`}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-primary px-4 py-3.5 text-center text-base font-semibold text-white"
              >
                Nezáväzný kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
