import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Entender",
    description:
      "Comprendemos el problema, contexto tecnológico y objetivo de negocio.",
    output: "Diagnóstico claro",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Definimos arquitectura, tecnología y alcance. Diseñamos antes de construir.",
    output: "Arquitectura y alcance",
  },
  {
    number: "03",
    title: "Construir",
    description:
      "Desarrollamos una solución funcional usando herramientas modernas e IA para acelerar el proceso.",
    output: "Solución funcionando",
  },
  {
    number: "04",
    title: "Evolucionar",
    description:
      "Medimos, mejoramos y ampliamos la solución cuando existe una necesidad real.",
    output: "Mejora continua",
  },
] as const;

export function Process() {
  return (
    <Section id="enfoque">
      <FadeIn>
        <SectionHeading
          eyebrow="Nuestro enfoque"
          title="Empieza pequeño. Escala cuando tenga sentido."
          description="Preferimos comenzar con un problema concreto, desarrollar una solución acotada, medir el resultado y, si funciona, evolucionarla junto al cliente."
        />
      </FadeIn>

      <ol className="mt-12 grid gap-y-10 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-10">
        {steps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 0.07}>
            <li className="group relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-bold text-brand tabular-nums">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-brand/40" />
                <span className="h-2 w-2 rounded-full border border-brand/40 transition-colors duration-500 group-hover:bg-brand" />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-teal uppercase">
                {step.output}
              </p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
