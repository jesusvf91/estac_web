import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function StartPaths() {
  return (
    <Section id="desafio">
      <FadeIn>
        <div className="border-y border-border py-14 text-center sm:py-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Empezamos con un problema concreto
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            ¿Tienes un desafío tecnológico?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Preferimos hablar de problemas reales antes que mostrar métricas
            inventadas. Podemos comenzar con un Technical Discovery o directamente
            con el desafío que ya tienes identificado.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contacto" size="lg">
              Cuéntanos qué necesitas
            </Button>
            <Button href="#discovery" variant="secondary" size="lg">
              Conocer Technical Discovery
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
