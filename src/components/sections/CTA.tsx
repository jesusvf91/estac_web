"use client";

import { type FormEvent } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function CTA() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const role = String(data.get("role") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Desafío tecnológico — ${company || name || "Estac"}`,
    );
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa: ${company}`,
        `Rol: ${role}`,
        "",
        "Desafío:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contacto" className="pb-16 sm:pb-20">
      <FadeIn>
        <div className="relative">
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="eyebrow text-muted">Contacto</span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <h2 className="display-section font-display font-semibold text-foreground">
                ¿Tienes un problema tecnológico que resolver?
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                No necesitas llegar con una solución definida. Cuéntanos el
                problema y empezamos por entenderlo.
              </p>

              <ul className="mt-8 space-y-3 text-sm leading-relaxed text-foreground/80">
                {[
                  "Revisamos el contexto antes de proponer tecnología.",
                  "Definimos un primer paso con alcance claro.",
                  "Puedes comenzar con Discovery, PoC o un proyecto concreto.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t border-border">
                <ContactRow
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_24px_60px_-45px_rgba(9,64,84,0.5)] sm:p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Field id="name" label="Nombre" placeholder="Tu nombre" required />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  required
                />
                <Field
                  id="company"
                  label="Empresa"
                  placeholder="Nombre de la empresa"
                />
                <Field
                  id="role"
                  label="Rol"
                  placeholder="Tu rol en la empresa"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Desafío técnico
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe el problema, el contexto y lo que necesitas lograr..."
                    className="w-full resize-none rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Hablemos
                </Button>
                <p className="text-xs leading-relaxed text-muted">
                  Al enviar se abrirá tu cliente de correo con el mensaje listo
                  para enviarnos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground sm:text-base">
        {value}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-baseline justify-between gap-4 border-b border-border py-3 transition-colors hover:border-brand/40 hover:text-brand"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-3">
      {content}
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}