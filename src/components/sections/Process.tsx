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

      <ol className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
        {growthPath.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.05}>
            <li className="border-t-2 border-border pt-5 pb-6 lg:pb-0">
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
          className="mt-16 grid gap-10 border-t border-border pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
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
              <Button href="#contacto" size="lg">
                Solicitar Technical Discovery
              </Button>
            </div>
          </div>

          <ul className="grid gap-x-8 sm:grid-cols-2">
            {discoverySteps.map((step) => (
              <li
                key={step.title}
                className="border-t border-border py-5 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0"
              >                <h4 className="font-display text-base font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
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
