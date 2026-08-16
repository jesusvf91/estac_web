import { Container } from "@/components/ui/Container";

const problems = [
  "Tenemos un sistema antiguo que necesitamos modernizar",
  "Nuestros sistemas no se comunican entre sí",
  "Tenemos un proceso manual que queremos automatizar",
  "Tenemos una idea y necesitamos validarla rápido",
  "Necesitamos incorporar IA a un proceso existente",
  "Necesitamos definir la arquitectura antes de desarrollar",
] as const;

export function ProblemTicker() {
  return (
    <section
      id="problemas"
      aria-labelledby="problemas-titulo"
      className="border-y border-border bg-white/50 py-8 sm:py-10"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <p className="eyebrow text-teal">Problemas que resolvemos</p>
            <h2
              id="problemas-titulo"
              className="mt-3 max-w-md font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              Si alguna de estas frases te suena familiar, podemos ayudarte.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              No partimos de una tecnología. Partimos de un problema concreto
              como estos.
            </p>
          </div>

          <ul className="grid gap-x-8 sm:grid-cols-2">
            {problems.map((problem) => (
              <li
                key={problem}
                className="border-t border-border py-4 font-display text-sm font-medium leading-snug tracking-tight text-foreground/80 first:border-t-0 sm:text-[0.95rem] sm:[&:nth-child(-n+2)]:border-t-0"
              >
                <span className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                    aria-hidden
                  />
                  <span>«{problem}»</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
