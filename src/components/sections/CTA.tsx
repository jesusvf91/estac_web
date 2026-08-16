"use client";

import { type FormEvent } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contactLinks, site } from "@/lib/site";

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
              <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                Contacto
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                ¿Tienes un problema tecnológico que resolver?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Cuéntanos qué necesitas. Podemos ayudarte a evaluar el problema,
                definir una arquitectura y construir una primera solución.
              </p>

              <div className="mt-8 border-t border-border">
                <ContactRow
                  label="Email"
                  value={site.email}
                  href={contactLinks.email}
                />
                <ContactRow
                  label="WhatsApp"
                  value={site.phoneDisplay}
                  href={contactLinks.whatsapp}
                />
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-foreground/90">
                {[
                  "Empezamos con un problema concreto",
                  "Diseñamos antes de construir",
                  "IA para desarrollar mejor y más rápido",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-light text-teal">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={contactLinks.email} size="lg">
                  Hablemos
                </Button>
                <Button href={contactLinks.whatsapp} variant="secondary" size="lg">
                  Cuéntanos tu desafío
                </Button>
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
                  placeholder="CTO, Gerente de TI, Líder técnico..."
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7.2 5.8 10 11 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
