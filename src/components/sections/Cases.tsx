import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Empresas con un desafío técnico",
    description:
      "Negocios y organizaciones que necesitan resolver un problema concreto de software, arquitectura, integración o modernización.",
  },
  {
    title: "Áreas de tecnología",
    description:
      "Equipos de TI y líderes técnicos que buscan capacidad especializada para ejecutar, modernizar o integrar.",
  },
  {
    title: "Equipos de desarrollo",
    description:
      "Refuerzo técnico cuando tu equipo interno necesita acelerar una iniciativa o cubrir una especialidad puntual.",
  },
  {
    title: "Sistemas legacy",
    description:
      "Aplicaciones heredadas que necesitan evolucionar con control, sin reescrituras innecesarias.",
  },
  {
    title: "Adopción de IA",
    description:
      "Organizaciones que quieren incorporar IA a procesos reales, no solo experimentar con demos aisladas.",
  },
  {
    title: "Consultoras y partners",
    description:
      "Empresas tecnológicas que necesitan un partner técnico especializado para entregar con mayor profundidad.",
  },
] as const;

const credentials = [
  "+10 años en desarrollo y arquitectura de software",
  "Experiencia en sectores de alta exigencia: finanzas, seguros y telecomunicaciones",
  "Liderazgo técnico, cloud y formación de equipos",
];

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

            <ul className="mt-8 space-y-4">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <div>
          {audiences.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <article className="group border-t border-border py-6 transition-colors duration-300 hover:border-brand/40">
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
    </Section>
  );
}
