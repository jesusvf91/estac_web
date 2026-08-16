"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { suffix: "TAC", full: "ESTAC", hint: "TU PARTNER DIGITAL TÉCNICO" },
  { suffix: "TRUCTURA", full: "ESTRUCTURA", hint: "ARQUITECTURA CLARA Y SOSTENIBLE" },
  { suffix: "CALABILIDAD", full: "ESCALABILIDAD", hint: "CRECE SIN REHACER TODO" },
  { suffix: "TRATEGIA", full: "ESTRATEGIA", hint: "DISEÑAMOS ANTES DE CONSTRUIR" },
] as const;

const INTERVAL_MS = 5200;

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

  return (
    <div className="relative mx-auto w-full max-w-4xl text-left sm:text-center">
      <p className="sr-only">
        Estac: estrategia, estructura y escalabilidad para software que resuelve.
      </p>
      <div
        className="relative flex min-h-[1.2em] items-center justify-start font-display text-[2rem] font-semibold tracking-tight uppercase sm:justify-center sm:text-5xl lg:text-6xl"
        aria-hidden
      >
        <span className="inline-flex items-baseline justify-center">
          <span className="shrink-0 text-brand select-none">ES</span>

          <span className="relative inline-flex overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={current.suffix}
                className="inline-block transform-gpu text-foreground"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {current.suffix}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </div>

      <div
        className="relative mt-3 flex h-8 items-center justify-start sm:mt-5 sm:h-9 sm:justify-center"
        aria-hidden
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={current.hint}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute max-w-[20rem] transform-gpu text-left text-[0.68rem] font-semibold leading-snug tracking-[0.1em] text-muted uppercase sm:max-w-none sm:px-4 sm:text-center sm:text-xs sm:tracking-[0.15em]"
          >
            <span className="text-brand">{current.full}</span>
            {" — "}
            {current.hint}
          </motion.p>
        </AnimatePresence>
      </div>

      <div
        role="group"
        aria-label="Conceptos de Estac"
        className="mt-4 flex items-center justify-start gap-2 sm:mt-5 sm:justify-center"
      >
        {words.map((word, i) => (
          <button
            key={word.suffix}
            type="button"
            aria-label={word.full}
            onClick={() => setIndex(i)}
            aria-current={i === index ? "true" : undefined}
            className="relative h-1.5 overflow-hidden rounded-full bg-border transition-[width] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            style={{ width: i === index ? 36 : 12 }}
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
