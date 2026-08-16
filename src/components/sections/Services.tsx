import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    title: "Desarrollo de software",
    problem: "Necesitas una aplicación, API o sistema a medida para un objetivo concreto.",
    action: "Diseñamos y construimos la solución con alcance claro y foco en entrega.",
    result: "Software funcional, mantenible y alineado al negocio.",
  },
  {
    title: "Arquitectura de software",
    problem: "Tu sistema necesita crecer, pero la arquitectura actual se vuelve una limitación.",
    action: "Evaluamos el contexto y diseñamos una solución técnica preparada para evolucionar.",
    result: "Arquitectura clara, mantenible y alineada a las necesidades reales.",
  },
  {
    title: "Modernización",
    problem: "Tienes aplicaciones o plataformas legacy que frenan la operación o el crecimiento.",
    action: "Evolucionamos lo existente hacia patrones modernos sin reescrituras innecesarias.",
    result: "Un camino controlado de modernización, sin detener el negocio.",
  },
  {
    title: "Integración",
    problem: "Tus sistemas no se comunican o la información queda atrapada en silos.",
    action: "Diseñamos APIs e integraciones adaptadas al entorno real de tu empresa.",
    result: "Flujos de información confiables entre sistemas y equipos.",
  },
  {
    title: "IA aplicada",
    problem: "Quieres incorporar IA, pero sin demos aisladas ni promesas vacías.",
    action: "Aplicamos IA donde aporta valor: automatización, asistentes, análisis e integración.",
    result: "Una capacidad útil dentro de un proceso o producto real.",
  },
  {
    title: "Prototipos y PoC",
    problem: "Tienes una idea o hipótesis que necesitas validar antes de invertir más.",
    action: "Construimos una prueba funcional en un alcance acotado.",
    result: "Evidencia para decidir con más seguridad el siguiente paso.",
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

      <div className="mt-12 grid gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <article className="group relative border-t-2 border-border py-7 transition-colors duration-300 hover:border-brand">
              <span className="font-display text-xs font-semibold tracking-[0.16em] text-teal tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                    Problema
                  </dt>
                  <dd className="mt-1 text-foreground/85">{item.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                    Qué hacemos
                  </dt>
                  <dd className="mt-1 text-foreground/85">{item.action}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.12em] text-teal uppercase">
                    Resultado
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{item.result}</dd>
                </div>
              </dl>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
