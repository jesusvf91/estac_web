import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    title: "Modernización de sistemas",
    description:
      "Actualizar plataformas, mejorar rendimiento y reducir fricción técnica sin frenar la operación.",
  },
  {
    title: "Aplicaciones e integraciones",
    description:
      "Soluciones web, APIs y conexión entre herramientas para que la información fluya donde debe.",
  },
  {
    title: "Cloud y operación estable",
    description:
      "Despliegues confiables, automatización y bases sólidas para escalar con seguridad.",
  },
  {
    title: "Acompañamiento técnico",
    description:
      "Definición de arquitectura, priorización y seguimiento cercano con equipos de negocio y tecnología.",
  },
];

export function Enterprise() {
  return (
    <Section id="empresas">
      <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-white via-white to-blue-light/40 px-6 py-12 sm:px-10 sm:py-14 lg:px-12">
        <FadeIn>
          <SectionHeading
            eyebrow="También para empresas"
            title="Misma cercanía, capacidad de proyectos complejos"
            description="Si tu organización necesita modernizar procesos digitales, integrar sistemas o construir software a escala, podemos acompañarte con criterio enterprise y comunicación clara."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-border/80 bg-white/80 p-5 sm:p-6">
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              Empezamos por un diagnóstico breve: entendemos el problema, el
              impacto y el camino más realista para avanzar.
            </p>
            <Button href="#contacto" size="lg" className="shrink-0">
              Conversemos tu desafío
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
