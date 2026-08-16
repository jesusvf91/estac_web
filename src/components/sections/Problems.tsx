import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    category: "Modernización",
    quote: "Tenemos un sistema antiguo que necesitamos modernizar.",
  },
  {
    category: "Integración",
    quote: "Nuestros sistemas no se comunican entre sí.",
  },
  {
    category: "Automatización",
    quote: "Tenemos un proceso manual que queremos automatizar.",
  },
  {
    category: "Validación",
    quote: "Tenemos una idea pero necesitamos validarla rápidamente.",
  },
  {
    category: "IA aplicada",
    quote: "Necesitamos incorporar IA a un proceso existente.",
  },
  {
    category: "Apoyo técnico",
    quote: "Nuestro equipo necesita capacidad técnica especializada.",
  },
  {
    category: "Capacidad externa",
    quote: "Necesitamos construir una solución sin crear un equipo completo.",
  },
  {
    category: "Arquitectura",
    quote:
      "Necesitamos definir una arquitectura antes de comenzar un desarrollo importante.",
  },
] as const;

export function Problems() {
  return (
    <Section id="problemas">
      <div className="rounded-2xl border border-border bg-white px-6 py-12 shadow-[0_36px_80px_-60px_rgba(7,38,51,0.5)] sm:px-10 sm:py-14 lg:px-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Problemas que resolvemos"
            title="Problemas tecnológicos que podemos resolver."
            description="No partimos de una tecnología. Partimos de un problema."
          />
        </FadeIn>

        <ul className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {problems.map((item, index) => (
            <FadeIn key={item.quote} delay={index * 0.04}>
              <li className="group border-t border-border py-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                  {item.category}
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground transition-colors duration-300 group-hover:text-brand sm:text-lg">
                  “{item.quote}”
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </Section>
  );
}
