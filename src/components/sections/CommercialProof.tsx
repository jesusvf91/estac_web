import { Container } from "@/components/ui/Container";

const proofPoints = [
  { value: "Interlocución senior", label: "Hablas con quien diseña la solución" },
  { value: "Arquitectura primero", label: "Decisiones y trade-offs antes de construir" },
  { value: "Entrega end-to-end", label: "Del diagnóstico a producción" },
  { value: "IA con criterio", label: "Velocidad sin ceder control técnico" },
] as const;

export function CommercialProof() {
  return (
    <section
      aria-label="Cómo trabaja Estac"
      className="border-y border-border bg-white/40"
    >
      <Container>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item.value}
              className="border-b border-border py-5 last:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:nth-[2]:border-r-0 lg:border-b-0 lg:nth-[2]:border-r lg:last:border-r-0 lg:last:pr-0"
            >
              <dt className="font-display text-sm font-semibold tracking-tight text-foreground">
                {item.value}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
