"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EsWordplay } from "@/components/sections/EsWordplay";

const flow = [
  {
    label: "Problema",
    detail: "Un desafío tecnológico concreto",
  },
  {
    label: "Arquitectura",
    detail: "Diseño técnico viable y sostenible",
  },
  {
    label: "Desarrollo",
    detail: "Construcción acelerada con criterio",
  },
  {
    label: "Resultado",
    detail: "Software funcionando, listo para evolucionar",
  },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="opacity-90"
          >
            <EsWordplay />
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-4xl font-display text-3xl font-semibold tracking-tight text-foreground sm:mt-10 sm:text-4xl lg:text-5xl lg:leading-[1.12]"
          >
            Software que resuelve.{" "}
            <span className="text-brand">Arquitectura que escala.</span>{" "}
            <span className="gradient-text">IA que acelera.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Ayudamos a empresas a convertir problemas tecnológicos concretos en
            soluciones de software reales, combinando arquitectura, desarrollo e
            inteligencia artificial.
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-2xl text-sm font-medium text-foreground/80 sm:text-base"
          >
            Estac entra en problemas tecnológicos concretos, los entiende, diseña
            una solución y la construye.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="#contacto" size="lg">
              Cuéntanos tu desafío
              <ArrowIcon />
            </Button>
            <Button href="#enfoque" variant="secondary" size="lg">
              Conoce nuestro enfoque
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_40px_80px_-52px_rgba(7,38,51,0.55)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background-subtle px-6 py-4 sm:px-8">
              <p className="font-display text-sm font-semibold tracking-tight text-foreground">
                Problema → Arquitectura → Desarrollo → Resultado
              </p>
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-teal uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
                IA acelera el proceso
              </p>
            </div>

            <div className="px-6 py-10 sm:px-10 sm:py-12">
              <div className="relative">
                <div
                  className="absolute top-1.5 right-[12.5%] left-[12.5%] hidden h-px -translate-y-1/2 bg-gradient-to-r from-blue/50 via-brand/60 to-teal/50 sm:block"
                  aria-hidden
                />

                <ol className="relative grid gap-8 text-center sm:grid-cols-4 sm:gap-4">
                  {flow.map((item, index) => (
                    <li key={item.label} className="flex flex-col items-center">
                      <span
                        className={`h-3 w-3 rounded-full ring-4 ring-white ${
                          index === 1 || index === 2 ? "bg-brand" : "bg-teal"
                        }`}
                        aria-hidden
                      />
                      <p className="mt-5 font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                        {item.label}
                      </p>
                      <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
              {[
                { label: "Entrada", value: "Un problema concreto" },
                { label: "Método", value: "Diseñar antes de construir" },
                { label: "Relación", value: "Escala cuando tenga sentido" },
              ].map((item) => (
                <div key={item.label} className="bg-white px-6 py-5 sm:px-8">
                  <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-display text-base font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
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
