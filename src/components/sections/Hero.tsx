"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EsWordplay } from "@/components/sections/EsWordplay";

const flow = ["Problema", "Arquitectura", "Desarrollo", "Resultado"] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-14 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden />
      <div
        className="rule-guides pointer-events-none absolute inset-y-0 right-8 left-8 hidden lg:block"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <EsWordplay />
        </motion.div>

        <div className="mx-auto max-w-4xl text-left sm:text-center">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-hero mt-9 font-display font-semibold text-foreground sm:mt-14"
          >
            Software para resolver{" "}
            <span className="text-brand">problemas tecnológicos reales.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:mx-auto sm:mt-7 sm:text-lg"
          >
            Entendemos el desafío, diseñamos una arquitectura viable y
            construimos una solución lista para evolucionar. La IA acelera el
            proceso; la experiencia guía las decisiones.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center"
          >
            <Button href="#discovery" size="lg" className="w-full sm:w-auto">
              Empezar con un Discovery
              <ArrowIcon />
            </Button>
            <Button
              href="#contacto"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Cuéntanos tu desafío
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 border-t border-border pt-5 sm:mt-20 sm:pt-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <ol className="flex flex-wrap items-baseline gap-x-3 gap-y-2 sm:gap-x-4">
              {flow.map((step, index) => (
                <li key={step} className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {step}
                  </span>
                  {index < flow.length - 1 ? (
                    <span className="text-border" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="eyebrow flex items-center gap-2 text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
              IA acelera el proceso
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="translate-y-px"
    >
      <path
        d="M3.5 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
