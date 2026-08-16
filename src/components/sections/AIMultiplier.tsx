import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const buildBetter = [
  "Exploración de código",
  "Prototipado rápido",
  "Generación asistida",
  "Testing y documentación",
  "Tareas repetitivas",
] as const;

const resolveBusiness = [
  "Automatización de procesos",
  "Asistentes internos",
  "Procesamiento de información",
  "Búsqueda inteligente",
  "Integración con sistemas",
] as const;

export function AIMultiplier() {
  return (
    <section
      id="ia"
      className="grain relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="IA como multiplicador"
            tone="dark"
            title={
              <>
                IA no reemplaza la experiencia.{" "}
                <span className="text-teal-soft">La potencia.</span>
              </>
            }
            description="La usamos de dos formas distintas: para construir software más rápido, y para incorporar IA en procesos reales de negocio."
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 border-t border-white/15 pt-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Column
              title="Para construir mejor"
              description="Aceleramos la ingeniería sin ceder decisiones de arquitectura, seguridad ni alcance."
              items={buildBetter}
              accent
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Column
              title="Para resolver problemas de negocio"
              description="De la experimentación a capacidades útiles dentro de sistemas existentes."
              items={resolveBusiness}
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function Column({
  title,
  description,
  items,
  accent = false,
}: {
  title: string;
  description: string;
  items: readonly string[];
  accent?: boolean;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
        {description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-full border px-3.5 py-1.5 text-sm ${
              accent
                ? "border-teal-soft/40 bg-teal-soft/10 text-white"
                : "border-white/15 text-white/85"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
