import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const buildBetter = [
  "Análisis y exploración de código",
  "Prototipado y validación rápida",
  "Generación de código asistida",
  "Testing y documentación",
  "Automatización de tareas repetitivas",
] as const;

const resolveBusiness = [
  "Automatización de procesos",
  "Asistentes internos",
  "Procesamiento de información",
  "Búsqueda inteligente",
  "Análisis e integración con sistemas existentes",
] as const;

export function AIMultiplier() {
  return (
    <Section id="ia" className="!py-0">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-brand text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            className="pointer-events-none absolute -top-32 -right-16 h-80 w-80 rounded-full bg-teal/25 blur-3xl"
            aria-hidden
          />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-teal-soft uppercase">
                IA como multiplicador
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.7rem] lg:leading-[1.15]">
                IA no reemplaza la experiencia.{" "}
                <span className="text-teal-soft">La potencia.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Usamos inteligencia artificial de dos formas distintas: para
                construir software con más velocidad, y para incorporar IA en
                procesos reales de negocio. No son lo mismo.
              </p>
            </div>

            <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-2 lg:gap-16">
              <Column
                title="IA para construir mejor"
                description="Aceleramos el trabajo de ingeniería sin ceder decisiones de arquitectura, seguridad ni alcance."
                items={buildBetter}
                accent
              />
              <Column
                title="IA para resolver problemas de negocio"
                description="Ayudamos a pasar de la experimentación a capacidades útiles dentro de procesos y sistemas existentes."
                items={resolveBusiness}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
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
      <h3 className="font-display text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 border-b border-white/10 pb-4 text-sm text-white/85 last:border-b-0 sm:text-base"
          >
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                accent ? "bg-teal-soft" : "bg-white/50"
              }`}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
