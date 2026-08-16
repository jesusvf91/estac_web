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
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item.value}
              className="border-b border-border px-3 py-4 odd:border-r [&:nth-child(n+3)]:border-b-0 sm:px-6 sm:py-5 sm:first:pl-0 lg:border-r lg:border-b-0 lg:odd:border-r lg:[&:nth-child(2)]:border-r lg:last:border-r-0 lg:last:pr-0"
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
