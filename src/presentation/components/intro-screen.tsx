"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "./logo";

const SESSION_KEY = "ml_intro_seen";
const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const ZOOM_EASE = [0.7, 0, 0.84, 0] as const; // prudké zrýchlenie ("zrazu")

// fázy prezentácie
type Phase = "t1" | "t2" | "logo";

// časovanie (ms)
const T2_AT = 2600;
const LOGO_AT = 6000; // text2 ostane o ~1 s dlhšie
const ZOOM_AT = 7200; // veľké logo chvíľu drží, potom prudký zoom
const END_AT = 8100;
const ZOOM_DUR = (END_AT - ZOOM_AT) / 1000;

// hviezdne pole — raz pri načítaní modulu (mimo renderu)
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
  duration: Math.random() * 2 + 1.6,
}));

export default function IntroScreen() {
  const [show, setShow] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<Phase>("t1");
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    const seen =
      typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY);
    // sessionStorage je dostupné až na klientovi, preto rozhodujeme v efekte
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(!seen);

    if (seen) return;

    document.body.style.overflow = "hidden";
    const timers = [
      setTimeout(() => setPhase("t2"), T2_AT),
      setTimeout(() => setPhase("logo"), LOGO_AT),
      setTimeout(() => setZooming(true), ZOOM_AT),
      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, END_AT),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (show === false) document.body.style.overflow = "";
  }, [show]);

  if (show === null || show === false) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          // ku koncu zoomu sa celá scéna rozplynie a odhalí home page
          animate={{ opacity: zooming ? 0 : 1 }}
          transition={{ duration: 0.45, delay: zooming ? ZOOM_DUR * 0.55 : 0, ease: "easeIn" }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          {/* čierny podklad (súčasť kontajnera, aby sa dal rozplynúť do home) */}
          <div className="absolute inset-0" style={{ background: "#050506" }} />

          {/* ===== POZADIE — žije celý čas ===== */}
          {/* perspektívna mriežka */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%]"
            style={{ perspective: "320px" }}
          >
            <motion.div
              className="absolute inset-0 animate-grid-flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              style={{
                transform: "rotateX(72deg)",
                transformOrigin: "bottom center",
                backgroundImage:
                  "linear-gradient(rgba(255,106,0,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.28) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage: "linear-gradient(to top, black, transparent 78%)",
                WebkitMaskImage: "linear-gradient(to top, black, transparent 78%)",
              }}
            />
          </div>

          {/* hviezdy */}
          <div className="pointer-events-none absolute inset-0">
            {STARS.map((s) => (
              <span
                key={s.id}
                className="absolute rounded-full bg-white"
                style={{
                  top: `${s.top}%`,
                  left: `${s.left}%`,
                  width: s.size,
                  height: s.size,
                  animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
          </div>

          {/* plávajúce svetelné plochy */}
          <motion.div
            className="pointer-events-none absolute left-[12%] top-[14%] h-[44vmax] w-[44vmax] rounded-full opacity-40 animate-float-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,106,0,0.22) 0%, transparent 60%)",
            }}
          />
          <motion.div
            className="pointer-events-none absolute right-[10%] bottom-[18%] h-[40vmax] w-[40vmax] rounded-full opacity-35 animate-pulse-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5 }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,129,36,0.18) 0%, transparent 60%)",
            }}
          />

          {/* centrálny glow */}
          <motion.div
            className="pointer-events-none absolute h-[600px] w-[600px] rounded-full"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{
              background:
                "radial-gradient(circle, var(--color-primary-glow) 0%, transparent 60%)",
            }}
          />

          {/* rotujúci prstenec */}
          <div
            className="conic-ring pointer-events-none absolute h-[460px] w-[460px] rounded-full opacity-[0.10] animate-spin-slow"
            style={{
              maskImage: "radial-gradient(transparent 62%, black 64%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(transparent 62%, black 64%, transparent 75%)",
            }}
          />

          {/* ===== OBSAH — fázy ===== */}
          <div className="relative z-10 flex min-h-[180px] items-center justify-center px-6 text-center">
            <AnimatePresence mode="wait">
              {phase === "t1" && (
                <motion.div
                  key="t1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -26, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <motion.p
                    className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl"
                    initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                  >
                    Každá firma má svoj príbeh.
                  </motion.p>
                  <motion.p
                    className="mt-3 font-heading text-2xl font-medium tracking-tight text-text-secondary sm:text-3xl"
                    initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
                  >
                    Poďme spolu napísať ten váš.
                  </motion.p>
                </motion.div>
              )}

              {phase === "t2" && (
                <motion.p
                  key="t2"
                  className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  Je čas začať <span className="text-gradient">váš pokrok.</span>
                </motion.p>
              )}

              {phase === "logo" && (
                <motion.div
                  key="logo"
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={zooming ? { opacity: 1, scale: 26 } : { opacity: 1, scale: 1 }}
                  transition={
                    zooming
                      ? { duration: ZOOM_DUR, ease: ZOOM_EASE }
                      : { duration: 0.7, ease: EASE }
                  }
                >
                  <div
                    className="absolute h-96 w-96 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, var(--color-primary-glow) 0%, transparent 60%)",
                    }}
                  />
                  <LogoMark size={280} className="relative drop-shadow-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* progress čiara */}
          <motion.div
            className="absolute bottom-16 left-1/2 h-px w-52 -translate-x-1/2 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "logo" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary-soft via-primary to-primary-strong"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: LOGO_AT / 1000, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
