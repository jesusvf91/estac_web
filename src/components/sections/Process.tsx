import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const growthPath = [
  { title: "Discovery", detail: "Entender el problema" },
  { title: "PoC", detail: "Validar la solución" },
  { title: "MVP", detail: "Entregar valor acotado" },
  { title: "Proyecto", detail: "Construir en producción" },
  { title: "Evolución", detail: "Ampliar con una razón real" },
] as const;

const discoverySteps = [
  { title: "Diagnóstico", description: "Problema, contexto y restricciones." },
  { title: "Arquitectura", description: "Alternativas y solución recomendada." },
  { title: "Roadmap", description: "Prioridades y etapas de implementación." },
  { title: "Estimación", description: "Alcance, esfuerzo y próximos pasos." },
] as const;

export function Process() {
  return (
    <Section id="enfoque">
      <FadeIn>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Empieza pequeño. Escala cuando tenga sentido."
          description="Resolvemos un problema concreto, validamos la solución y la escalamos cuando existe una razón real."
        />
      </FadeIn>

      <p className="mt-8 text-xs font-semibold tracking-[0.12em] text-muted uppercase sm:hidden">
        Desliza para ver el proceso →
      </p>
      <ol className="mobile-scroll mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:overflow-visible sm:pb-0 lg:grid-cols-5">
        {growthPath.map((step, index) => (
          <FadeIn
            key={step.title}
            delay={index * 0.05}
            className="w-[78%] shrink-0 snap-start sm:w-auto"
          >
            <li className="h-full border-t-2 border-border bg-white/70 px-5 pt-5 pb-5 sm:bg-transparent sm:px-0 sm:pb-6 lg:pb-0">
              <span className="font-display text-xs font-semibold text-teal tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {step.detail}
              </p>
            </li>
          </FadeIn>
        ))}
      </ol>

      <FadeIn delay={0.1}>
        <div
          id="discovery"
          className="-mx-5 mt-12 grid gap-8 border-y border-border bg-white/50 px-5 py-10 sm:mx-0 sm:mt-16 sm:gap-10 sm:border-t sm:border-b-0 sm:bg-transparent sm:px-0 sm:pt-12 sm:pb-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
        >
          <div>
            <p className="eyebrow text-teal">Oferta de entrada</p>
            <h3 className="mt-5 max-w-lg font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Entender antes de invertir.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Technical Discovery es una etapa acotada para transformar un
              desafío ambiguo en decisiones técnicas, alcance y un camino de
              implementación defendible.
            </p>
            <div className="mt-7">
              <Button
                href="#contacto"
                size="lg"
                className="w-full sm:w-auto"
              >
                Solicitar Technical Discovery
              </Button>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-8">
            {discoverySteps.map((step) => (
              <li
                key={step.title}
                className="border-t border-border py-5 [&:nth-child(-n+2)]:border-t-0"
              >
                <h4 className="font-display text-sm font-semibold text-foreground sm:text-base">
                  {step.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Section>
  );
}
