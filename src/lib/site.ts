/** Datos de contacto y marca de Estac */
export const site = {
  name: "Estac",
  url: "https://jesusvf91.github.io/estac_web",
  email: "hola@estac.com",
  phoneDisplay: "+56 9 0000 0000",
  /** Número internacional sin + ni espacios, para wa.me */
  whatsapp: "56900000000",
  tagline: "Software, arquitectura e IA aplicada",
  description:
    "Empresa de desarrollo y arquitectura de software impulsada por inteligencia artificial. Ayudamos a empresas en Chile a resolver problemas tecnológicos concretos: modernización, integración, cloud y desarrollo acelerado con IA.",
} as const;

export const contactLinks = {
  email: `mailto:${site.email}`,
  whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hola Estac, me gustaría conversar sobre un desafío tecnológico.",
  )}`,
} as const;
