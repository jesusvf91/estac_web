import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    title: "Desarrollo de software",
    problem: "Necesitas una aplicación, API o sistema para un objetivo concreto.",
    result: "Software funcional, mantenible y listo para evolucionar.",
  },
  {
    title: "Arquitectura",
    problem: "Tu sistema debe crecer, pero la estructura actual lo limita.",
    result: "Decisiones y un roadmap técnico antes de construir.",
  },
  {
    title: "Modernización",
    problem: "Una plataforma legacy frena la operación o el crecimiento.",
    result: "Un camino de evolución controlado, sin reescribir por defecto.",
  },
  {
    title: "Integración",
    problem: "Tus sistemas no se comunican y la información vive en silos.",
    result: "APIs y flujos confiables entre sistemas y equipos.",
  },
  {
    title: "IA aplicada",
    problem: "Quieres incorporar IA más allá de una demostración aislada.",
    result: "Automatización, asistentes o análisis dentro de procesos reales.",
  },
  {
    title: "Prototipos y PoC",
    problem: "Necesitas validar una idea antes de comprometer una inversión mayor.",
    result: "Evidencia funcional para decidir el siguiente paso.",
  },
] as const;

const stacks = [
  "Backend",
  "Frontend",
  "Cloud",
  "IA",
  "Arquitectura",
  "Integración",
] as const;

export function Services() {
  return (
    <Section id="capacidades">
      <FadeIn>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Entramos donde hay un problema tecnológico."
          description="No partimos de una tecnología. Entendemos qué está bloqueando al negocio y construimos el camino más directo hacia un resultado útil."
        />
      </FadeIn>

      <ul className="mt-10 sm:mt-14">
        {capabilities.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.04}>
            <li className="group border-t border-border transition-colors duration-300 hover:border-brand">
              <div className="grid items-start gap-3 py-5 sm:gap-4 sm:py-7 lg:grid-cols-[0.75fr_1fr_1fr] lg:gap-10">
                <h3 className="display-row flex items-baseline gap-3 font-display font-semibold text-foreground transition-transform duration-300 group-hover:text-brand sm:block sm:group-hover:translate-x-1">
                  <span className="text-[0.65rem] font-semibold text-teal tabular-nums sm:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <div className="text-sm leading-relaxed sm:text-base">
                  <p className="eyebrow mb-1.5 text-muted sm:mb-2">El desafío</p>
                  <p className="text-muted">{item.problem}</p>
                </div>
                <div className="text-sm leading-relaxed sm:text-base">
                  <p className="eyebrow mb-1.5 text-teal sm:mb-2">El resultado</p>
                  <p className="font-medium text-foreground">{item.result}</p>
                </div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>

      <FadeIn delay={0.08}>
        <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:mt-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-foreground">
              ¿No sabes qué solución necesitas?
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              No hace falta llegar con el alcance resuelto. Empezamos por
              entender el problema y definir el siguiente paso.
            </p>
            <div className="mt-5">
              <Button href="#contacto" className="w-full sm:w-auto">
                Cuéntanos el problema
              </Button>
            </div>
          </div>
          <div id="tecnologias">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {stacks.map((stack, index) => (
              <li key={stack} className="flex items-center gap-3 text-xs font-semibold text-muted">
                {stack}
                {index < stacks.length - 1 ? (
                  <span className="h-1 w-1 rounded-full bg-teal" aria-hidden />
                ) : null}
              </li>
            ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              El stack sigue al problema, no al revés.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
