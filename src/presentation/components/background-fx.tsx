"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Globálne živé pozadie celej stránky. Fixné, za obsahom (-z-10).
 * Tmavé sekcie sú priehľadné, takže tento backdrop nimi plynule presvitá
 * a vytvára súvislý, prepojený dojem. Svetlé sekcie ho prekryjú.
 *
 * Výkon: namiesto drahých blur filtrov používame mäkké radiálne gradienty
 * (žiadny filter pass) a animujeme len `transform` (parallax) — lacné na GPU.
 */
export default function BackgroundFX() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useTransform(p, [0, 1], ["-5%", "20%"]);
  const y2 = useTransform(p, [0, 1], ["8%", "-16%"]);
  const y3 = useTransform(p, [0, 1], ["0%", "26%"]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* mäkké svetelné plochy (radiálne gradienty — bez blur filtra) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-[15%] top-[0%] h-[70vmax] w-[70vmax] rounded-full opacity-50 animate-float-slow"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.18)_0%,transparent_60%)]" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-18%] top-[32%] h-[65vmax] w-[65vmax] rounded-full opacity-45 animate-pulse-glow"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(229,84,0,0.16)_0%,transparent_60%)]" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-12%] left-[12%] h-[60vmax] w-[60vmax] rounded-full opacity-40 animate-float-slow"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,129,36,0.14)_0%,transparent_60%)]" />
      </motion.div>

      {/* jemná mriežka cez celé pozadie */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 90%)",
        }}
      />

      {/* vinetácia pre hĺbku */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
