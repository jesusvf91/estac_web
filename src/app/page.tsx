import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemTicker } from "@/components/sections/ProblemTicker";
import { CommercialProof } from "@/components/sections/CommercialProof";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { AIMultiplier } from "@/components/sections/AIMultiplier";
import { Cases } from "@/components/sections/Cases";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    areaServed: "CL",
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.role,
      sameAs: [site.founder.linkedin],
    },
    knowsAbout: [
      "Desarrollo de software",
      "Arquitectura de software",
      "Desarrollo de software empresarial",
      "Modernización de sistemas",
      "Integración de sistemas",
      "Cloud",
      "Inteligencia artificial aplicada",
      "Automatización de procesos",
      "Consultoría de arquitectura de software",
      "Technical Discovery",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand focus:shadow-lg"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        <Hero />
        <CommercialProof />
        <Services />
        <ProblemTicker />
        <Process />
        <AIMultiplier />
        <Cases />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
