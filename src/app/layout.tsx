import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Estac | Desarrollo y arquitectura de software con IA",
    template: "%s | Estac",
  },
  description: site.description,
  keywords: [
    "desarrollo de software Chile",
    "arquitectura de software",
    "desarrollo de software empresarial",
    "desarrollo de aplicaciones",
    "modernización de sistemas",
    "desarrollo de microservicios",
    "integración de sistemas",
    "desarrollo con IA",
    "inteligencia artificial para empresas",
    "automatización de procesos",
    "consultoría de arquitectura de software",
    "desarrollo de software a medida",
    "Estac",
  ],
  authors: [{ name: "Estac" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: site.url,
    siteName: "Estac",
    title: "Estac | Desarrollo y arquitectura de software con IA",
    description:
      "Software que resuelve. Arquitectura que escala. IA que acelera. Partner técnico para empresas en Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estac | Desarrollo y arquitectura de software con IA",
    description:
      "Software, arquitectura e inteligencia artificial para resolver problemas reales de negocio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="page-atmosphere min-h-full flex flex-col text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
