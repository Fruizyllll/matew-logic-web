"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "@phosphor-icons/react";

const STORAGE_KEY = "ml_cookie_consent_v1";
const EVENT = "ml:open-cookie-settings";

export interface ConsentValue {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: string;
}

/** Otvorí nastavenia cookies (volá sa napr. z footera). */
export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
}

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentValue) : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      // malé oneskorenie, nech nepreruší intro
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const current = getStoredConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  function persist(value: Omit<ConsentValue, "necessary" | "ts">) {
    const data: ConsentValue = {
      necessary: true,
      analytics: value.analytics,
      marketing: value.marketing,
      ts: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* ignore */
    }
    setVisible(false);
    setShowDetails(false);
  }

  const acceptAll = () => persist({ analytics: true, marketing: true });
  const rejectAll = () => persist({ analytics: false, marketing: false });
  const saveChoice = () => persist({ analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="dialog"
          aria-label="Nastavenia súkromia"
          aria-modal="false"
          className="fixed inset-x-3 bottom-3 z-[95] mx-auto max-w-2xl rounded-3xl border border-white/12 bg-ink-900/95 p-6 shadow-2xl backdrop-blur-xl sm:inset-x-4 sm:bottom-4"
        >
          <div className="flex items-start gap-3">
            <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary sm:flex">
              <Cookie size={22} weight="duotone" />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-base font-bold text-text-primary">
                Záleží nám na vašom súkromí
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                Používame cookies, aby web fungoval správne a aby sme rozumeli,
                ako ho používate. Nevyhnutné cookies sú vždy aktívne. Ostatné
                zapneme len s vaším súhlasom. Viac v{" "}
                <a href="/zasady-cookies" className="text-primary hover:underline">
                  zásadách používania cookies
                </a>
                .
              </p>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    <CookieRow
                      title="Nevyhnutné"
                      desc="Potrebné pre základné fungovanie webu. Nedajú sa vypnúť."
                      checked
                      disabled
                    />
                    <CookieRow
                      title="Analytické"
                      desc="Pomáhajú nám pochopiť, ako návštevníci používajú web."
                      checked={analytics}
                      onChange={setAnalytics}
                    />
                    <CookieRow
                      title="Marketingové"
                      desc="Umožňujú merať a zlepšovať reklamu a remarketing."
                      checked={marketing}
                      onChange={setMarketing}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Prijať všetko
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-white/10"
                >
                  Odmietnuť nepovinné
                </button>
                {showDetails ? (
                  <button
                    type="button"
                    onClick={saveChoice}
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-white/10"
                  >
                    Uložiť výber
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowDetails(true)}
                    className="rounded-full px-5 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Nastavenia
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CookieRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 ${
        disabled ? "opacity-70" : "cursor-pointer"
      }`}
    >
      <span>
        <span className="block text-sm font-semibold text-text-primary">{title}</span>
        <span className="mt-0.5 block text-xs text-text-tertiary">{desc}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 flex-none accent-[var(--color-primary)]"
      />
    </label>
  );
}
