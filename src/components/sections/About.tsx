import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Cercanía",
    description:
      "Hablamos claro, sin jerga innecesaria. Entendemos el día a día de un negocio que está creciendo.",
  },
  {
    title: "Criterio sólido",
    description:
      "Detrás hay experiencia construyendo software en entornos exigentes: calidad, seguridad y escala cuando hace falta.",
  },
  {
    title: "Acompañamiento",
    description:
      "No desaparecemos al publicar. Te ayudamos a usar lo construido y a mejorarlo cuando crezcas.",
  },
];

const credentials = [
  "+10 años en desarrollo y arquitectura de software",
  "Experiencia en sectores de alta exigencia (finanzas, seguros y telecomunicaciones)",
  "Liderazgo técnico, cloud y formación de equipos",
];

export function About() {
  return (
    <Section id="nosotros">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <FadeIn>
          <SectionHeading
            align="left"
            eyebrow="Quiénes somos"
            title="Capacidad seria, trato cercano"
            description="Estac nace para acercar tecnología de verdad a negocios que crecen: desde una primera web hasta sistemas más complejos. Explicamos, construimos y nos quedamos cerca."
          />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Detrás de Estac hay experiencia liderando desarrollo full stack y
            transformación digital. Esa trayectoria respalda la calidad; Estac
            es el espacio donde la ponemos al servicio de tu negocio, con
            cercanía y sin rodeos.
          </p>

          <ul className="mt-6 space-y-2.5">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-foreground/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="grid gap-4">
          {values.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="rounded-2xl border border-border/80 bg-white/70 p-5 backdrop-blur-sm sm:p-6">
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
