import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stacks = [
  {
    area: "Backend",
    description:
      "APIs, servicios, lógica de negocio y capas de datos diseñadas para el contexto real de cada empresa.",
  },
  {
    area: "Frontend",
    description:
      "Aplicaciones web e interfaces claras, mantenibles y alineadas a los flujos de quien las usa.",
  },
  {
    area: "Cloud",
    description:
      "Arquitectura en la nube, despliegue y operación estable, adaptados a la infraestructura existente.",
  },
  {
    area: "IA",
    description:
      "Automatización, asistentes, procesamiento de información y desarrollo acelerado con IA donde aporta valor.",
  },
  {
    area: "Arquitectura",
    description:
      "Integración, modernización, sistemas distribuidos y decisiones técnicas pensadas para crecer.",
  },
] as const;

export function Technologies() {
  return (
    <Section id="tecnologias">
      <div className="rounded-2xl border border-border bg-white px-6 py-12 shadow-[0_36px_80px_-60px_rgba(7,38,51,0.5)] sm:px-10 sm:py-14 lg:px-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Tecnología"
            title="Capacidades técnicas, no una lista de logos."
            description="Elegimos herramientas según el problema, el entorno existente y el objetivo de negocio. No partimos de un stack fijo."
          />
        </FadeIn>

        <dl className="mt-12">
          {stacks.map((stack, index) => (
            <FadeIn key={stack.area} delay={index * 0.05}>
              <div className="group grid gap-2 border-t border-border py-6 sm:grid-cols-[minmax(9rem,0.28fr)_1fr] sm:gap-8 sm:py-7">
                <dt className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-brand">
                  {stack.area}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {stack.description}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </Section>
  );
}
