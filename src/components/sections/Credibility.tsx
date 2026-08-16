import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const indicators = [
  {
    value: "+10 años",
    label: "Experiencia en software",
  },
  {
    value: "Arquitectura",
    label: "Diseño de soluciones empresariales",
  },
  {
    value: "Enterprise",
    label: "Organizaciones de alta exigencia",
  },
  {
    value: "IA",
    label: "Aplicada al desarrollo y procesos",
  },
] as const;

export function Credibility() {
  return (
    <Section id="credibilidad">
      <FadeIn>
        <SectionHeading
          eyebrow="Por qué confiar"
          title="Experiencia senior desde el primer día."
          description="Estac nace desde la experiencia directa en desarrollo, arquitectura y liderazgo técnico de proyectos de software."
        />
      </FadeIn>

      <FadeIn delay={0.06}>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-foreground/75 sm:text-lg">
          Combinamos experiencia en ingeniería de software, arquitectura,
          desarrollo empresarial y tecnologías cloud con nuevas herramientas de
          inteligencia artificial para construir soluciones de manera más rápida
          y eficiente.
        </p>
      </FadeIn>

      <p className="mt-10 text-center text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        Experiencia del equipo fundador
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {indicators.map((item, index) => (
          <FadeIn key={item.value} delay={0.08 + index * 0.04}>
            <div className="border-t-2 border-brand/20 pt-5 text-center sm:text-left">
              <p className="font-display text-xl font-semibold tracking-tight text-foreground">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
