import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Empresas con un desafío técnico",
    description: "Resolver un proyecto concreto sin crear un equipo completo.",
    featured: false,
  },
  {
    title: "Equipos de tecnología",
    description: "Capacidad especializada en arquitectura o desarrollo.",
    featured: false,
  },
  {
    title: "Empresas con sistemas legacy",
    description: "Modernizar sin detener la operación.",
    featured: false,
  },
  {
    title: "Empresas que quieren incorporar IA",
    description: "Pasar de la experimentación a una solución real.",
    featured: false,
  },
  {
    title: "Consultoras y partners",
    description: "Ampliar capacidad técnica para proyectos de sus clientes.",
    featured: true,
  },
] as const;

export function Cases() {
  return (
    <Section id="para-quien">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Para quién"
              title="Un partner técnico cuando tu equipo lo necesita."
              description="Entramos, entendemos el problema, diseñamos la solución y la construimos."
            />
          </div>
        </FadeIn>

        <ul id="partners">
          {audiences.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <li
                className={`group transition-colors duration-300 ${
                  item.featured
                    ? "mt-6 rounded-2xl border border-brand bg-brand px-6 text-white shadow-[0_24px_60px_-42px_rgba(9,64,84,0.8)]"
                    : "border-t border-border hover:border-brand"
                }`}
              >
                <div className="grid items-baseline gap-x-10 gap-y-2 py-6 sm:grid-cols-[1.05fr_1fr]">
                  <h3
                    className={`font-display text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl ${
                      item.featured
                        ? "text-white"
                        : "text-foreground group-hover:text-brand"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.featured ? "text-white/75" : "text-muted"
                      }`}
                    >
                      {item.description}
                    </p>
                    {item.featured ? (
                      <p className="mt-3 text-sm leading-relaxed text-white/75">
                        Partner tecnológico de consultoras e integradores.{" "}
                        <a
                          href="#contacto"
                          className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                        >
                          Hablemos de un proyecto
                        </a>
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </Section>
  );
}
