import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    title: "Desarrollo de software",
    description:
      "Aplicaciones, APIs, microservicios y soluciones empresariales desarrolladas a la medida.",
  },
  {
    title: "Arquitectura de software",
    description:
      "Diseñamos arquitecturas robustas, escalables y mantenibles para nuevos proyectos y sistemas existentes.",
  },
  {
    title: "Modernización",
    description:
      "Ayudamos a evolucionar aplicaciones y arquitecturas legacy hacia tecnologías y patrones modernos.",
  },
  {
    title: "Integración",
    description:
      "Conectamos sistemas, servicios y fuentes de información mediante APIs e integraciones diseñadas para el entorno real de cada empresa.",
  },
  {
    title: "IA aplicada",
    description:
      "Incorporamos inteligencia artificial donde realmente aporta valor: automatización, asistentes, procesamiento de información y análisis.",
  },
  {
    title: "Prototipos y PoC",
    description:
      "Convertimos una idea en una prueba funcional para validar rápidamente una solución antes de realizar una inversión mayor.",
  },
] as const;

export function Services() {
  return (
    <Section id="capacidades">
      <FadeIn>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Entramos donde existe un problema tecnológico."
          description="No todas las empresas necesitan comenzar con un gran proyecto. A veces el desafío es automatizar un proceso, integrar dos sistemas, modernizar una aplicación o validar una idea antes de invertir en ella."
        />
      </FadeIn>

      <div className="mt-12 grid gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <article className="group relative border-t-2 border-border py-7 transition-colors duration-300 hover:border-brand">
              <span className="font-display text-xs font-semibold tracking-[0.16em] text-teal tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
