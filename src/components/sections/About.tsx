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
            align="left"
            eyebrow="Sobre Estac"
            title="Tecnología con experiencia detrás."
            description="Estac es una empresa de ingeniería de software especializada en arquitectura, desarrollo y soluciones de inteligencia artificial."
          />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Trabajamos directamente con equipos tecnológicos para resolver
            problemas concretos, desde una primera prueba de concepto hasta
            soluciones productivas que puedan evolucionar con el negocio.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            Estac no vende horas de programación. Vende capacidad para entender,
            diseñar y resolver problemas tecnológicos.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_28px_70px_-48px_rgba(7,38,51,0.45)] sm:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Equipo fundador
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
              {site.founder.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand">
              {site.founder.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Profesional de tecnología con experiencia en desarrollo de software,
              arquitectura y liderazgo técnico de proyectos empresariales.
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
