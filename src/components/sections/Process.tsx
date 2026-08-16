import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const growthPath = [
  { title: "Discovery", detail: "Entender el problema y el contexto" },
  { title: "PoC", detail: "Validar con una prueba funcional" },
  { title: "MVP", detail: "Entregar valor en un alcance acotado" },
  { title: "Proyecto", detail: "Construir la solución productiva" },
  { title: "Evolución", detail: "Ampliar cuando exista una razón real" },
] as const;

const discoverySteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos el problema y el contexto actual.",
  },
  {
    number: "02",
    title: "Arquitectura",
    description: "Diseñamos una solución técnica viable.",
  },
  {
    number: "03",
    title: "Roadmap",
    description: "Definimos prioridades y etapas de implementación.",
  },
  {
    number: "04",
    title: "Estimación",
    description: "Entregamos esfuerzo, alcance y próximos pasos.",
  },
] as const;

export function Process() {
  return (
    <Section id="enfoque">
      <FadeIn>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Empieza pequeño. Escala cuando tenga sentido."
          description="No buscamos comenzar con proyectos innecesariamente grandes. Preferimos resolver un problema concreto, validar la solución y escalarla cuando exista una razón real para hacerlo."
        />
      </FadeIn>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {growthPath.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.05}>
            <li className="relative border-t-2 border-border pt-5">
              <span className="font-display text-xs font-semibold tracking-[0.14em] text-teal tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.detail}
              </p>
            </li>
          </FadeIn>
        ))}
      </ol>

      <FadeIn delay={0.1}>
        <div
          id="discovery"
          className="mt-16 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_36px_80px_-58px_rgba(7,38,51,0.5)]"
        >
          <div className="border-b border-border bg-background-subtle px-6 py-6 sm:px-8 sm:py-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Oferta de entrada
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              ¿No sabes por dónde empezar?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              No todos los problemas necesitan comenzar con un proyecto grande.
              Podemos empezar entendiendo el problema, evaluando el contexto
              tecnológico y definiendo una solución concreta antes de comprometer
              una implementación mayor.
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h4 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Technical Discovery
                </h4>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  Una etapa inicial para entender un problema tecnológico, evaluar
                  alternativas y definir el camino más adecuado para resolverlo.
                </p>
              </div>
              <Button href="#contacto" size="lg" className="shrink-0">
                Conocer Technical Discovery
              </Button>
            </div>

            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {discoverySteps.map((step) => (
                <li key={step.number} className="border-t border-border pt-4">
                  <span className="font-display text-xs font-semibold text-brand tabular-nums">
                    {step.number}
                  </span>
                  <h5 className="mt-3 font-display text-base font-semibold text-foreground">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
