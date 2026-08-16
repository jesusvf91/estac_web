import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="nosotros">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Sobre Estac"
            title="Un estudio pequeño, por decisión."
            description="Ingeniería de software especializada en arquitectura, desarrollo e IA aplicada. Sin capas intermedias: quien entiende el problema es quien diseña y construye la solución."
          />
          <p className="display-row mt-10 max-w-xl font-display font-semibold text-brand">
            No vendemos horas de programación. Vendemos capacidad para entender,
            diseñar y resolver.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="eyebrow text-teal">Fundador</span>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {site.founder.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand">
              {site.founder.role}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Más de una década en desarrollo de software, arquitectura y
              liderazgo técnico de proyectos empresariales.
            </p>
            <div className="mt-6">
              <Button
                href={site.founder.linkedin}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver LinkedIn
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
