import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "#capacidades", label: "Qué hacemos" },
  { href: "#enfoque", label: "Cómo trabajamos" },
  { href: "#discovery", label: "Discovery" },
  { href: "#ia", label: "IA" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-transparent">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#inicio" className="inline-block" aria-label="Estac">
              <Logo variant="mark" className="h-6 sm:h-7" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.tagline}. Capacidad para entender, diseñar y resolver
              problemas tecnológicos.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/50 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Estac. Todos los derechos reservados.</p>
          <p>Desarrollo y arquitectura de software · Chile</p>
        </div>
      </Container>
    </footer>
  );
}
