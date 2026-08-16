"use client";

import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { suffix: "TAC", full: "ESTAC", hint: "TU PARTNER DIGITAL TÉCNICO" },
  { suffix: "TRATEGIA", full: "ESTRATEGIA", hint: "DISEÑAMOS ANTES DE CONSTRUIR" },
  { suffix: "TRUCTURA", full: "ESTRUCTURA", hint: "ARQUITECTURA CLARA Y SOSTENIBLE" },
  { suffix: "CALABILIDAD", full: "ESCALABILIDAD", hint: "CRECE SIN REHACER TODO" },
  { suffix: "TABILIDAD", full: "ESTABILIDAD", hint: "OPERACIÓN CONFIABLE, SIN SORPRESAS" },
  { suffix: "PECIALIZACIÓN", full: "ESPECIALIZACIÓN", hint: "PROFUNDIDAD TÉCNICA, NO GENERALIDADES" },
  { suffix: "TÁNDAR", full: "ESTÁNDAR", hint: "CALIDAD Y BUENAS PRÁCTICAS" },
] as const;

const INTERVAL_MS = 3400;

const wordVariants: Variants = {
  enter: {
    transition: { staggerChildren: 0.03, delayChildren: 0.03 },
  },
  exit: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const letterVariants: Variants = {
  initial: { y: "80%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: "-80%",
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

export function EsWordplay() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const current = words[index];
  const letters = current.suffix.split("");

  return (
    <div
      className="relative mx-auto w-full max-w-4xl text-center"
      aria-label="Estac: software para problemas reales"
    >
      <div
        className="relative flex min-h-[1.2em] items-center justify-center font-display text-[2.15rem] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl"
        aria-hidden
      >
        <span className="inline-flex items-baseline justify-center">
          <span className="shrink-0 text-brand select-none">ES</span>

          <span className="relative inline-flex overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={current.suffix}
                className="inline-flex"
                variants={wordVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={`${current.suffix}-${i}`}
                    variants={letterVariants}
                    className="inline-block transform-gpu text-foreground"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </div>

      <div
        className="relative mt-4 flex h-8 items-center justify-center sm:mt-5 sm:h-9"
        aria-hidden
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={current.hint}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute max-w-[22rem] transform-gpu px-4 text-center text-[0.7rem] font-semibold leading-snug tracking-[0.14em] text-muted uppercase sm:max-w-none sm:text-xs sm:tracking-[0.16em]"
          >
            <span className="text-brand">{current.full}</span>
            {" — "}
            {current.hint}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {words.map((word, i) => (
          <button
            key={word.suffix}
            type="button"
            aria-label={word.full}
            onClick={() => setIndex(i)}
            className="relative h-1.5 overflow-hidden rounded-full bg-border transition-[width] duration-300"
            style={{ width: i === index ? 28 : 8 }}
          >
            {i === index ? (
              <motion.span
                key={`bar-${index}`}
                className="absolute inset-y-0 left-0 w-full origin-left transform-gpu rounded-full bg-brand"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : INTERVAL_MS / 1000,
                  ease: "linear",
                }}
              />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
