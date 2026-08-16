import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Empresas con un desafío técnico",
    description:
      "Cuando necesitan resolver un proyecto concreto sin crear un equipo completo.",
    featured: false,
  },
  {
    title: "Equipos de tecnología",
    description:
      "Cuando necesitan capacidad especializada en arquitectura o desarrollo.",
    featured: false,
  },
  {
    title: "Empresas con sistemas legacy",
    description:
      "Cuando necesitan modernizar sin detener la operación.",
    featured: false,
  },
  {
    title: "Empresas que quieren incorporar IA",
    description:
      "Cuando necesitan pasar de la experimentación a una solución real.",
    featured: false,
  },
  {
    title: "Consultoras y partners tecnológicos",
    description:
      "Cuando necesitan capacidad técnica adicional para proyectos de sus clientes.",
    featured: true,
  },
] as const;

export function Cases() {
  return (
    <Section id="para-quien">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <FadeIn>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Para quién"
              title="Un partner técnico cuando tu equipo lo necesita."
              description="Estac puede entrar, entender un problema técnico o de negocio, diseñar una solución y construirla. Trabajamos como extensión de tu equipo o como partner de otras empresas tecnológicas."
            />
          </div>
        </FadeIn>

        <div>
          {audiences.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <article
                className={`group border-t border-border py-6 transition-colors duration-300 hover:border-brand/40 ${
                  item.featured
                    ? "border-brand/30 bg-brand/[0.03] px-4 sm:px-5"
                    : ""
                }`}
              >
                {item.featured ? (
                  <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                    Partnership
                  </p>
                ) : null}
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.1}>
        <div
          id="partners"
          className="mt-16 border-y border-border py-12 text-center sm:py-14"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Partner tecnológico
          </p>
          <h3 className="mx-auto mt-4 max-w-3xl font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            ¿Ya tienes el cliente pero necesitas capacidad técnica?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Trabajamos como partner tecnológico para consultoras, integradores
            y empresas de servicios que necesitan ampliar temporalmente sus
            capacidades de arquitectura o desarrollo.
          </p>
          <p className="mt-6 text-sm font-medium tracking-wide text-foreground">
            Arquitectura · Desarrollo · IA · Integración · Modernización
          </p>
          <div className="mt-8">
            <Button href="#contacto" size="lg">
              Hablemos de un proyecto
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
