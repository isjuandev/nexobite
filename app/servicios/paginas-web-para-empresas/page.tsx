import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaArrowRight, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Páginas Web para Empresas y Landing Pages",
  description:
    "Sitios web y páginas de aterrizaje en Next.js, con copywriting comercial persuasivo y botones que envían prospectos calificados a WhatsApp.",
  alternates: {
    canonical: "https://www.nexobite.com/servicios/paginas-web-para-empresas",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaginasWebEmpresasPage() {
  const whatsappUrl = siteConfig.contact.whatsappUrl;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />

      {/* Banner de Borrador */}
      <div className="bg-copper/10 border-b border-copper/30 pt-24 pb-3 px-4 text-center">
        <Container size="md">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-copper font-medium">
            <FaExclamationTriangle className="h-3.5 w-3.5" />
            <span>BORRADOR DE SERVICIO · ESTADO: NO INDEXADO (Pendiente de aprobación)</span>
          </p>
        </Container>
      </div>

      {/* Hero del Servicio */}
      <section className="py-16 sm:py-24 border-b border-line">
        <Container size="md">
          <div className="text-center">
            <span className="eyebrow mb-3 inline-block">CAPTACIÓN DIGITAL</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mb-6 text-balance">
              Páginas Web para Empresas y{" "}
              <span className="text-signal">Landing Pages de Conversión</span>
            </h1>
            <p className="text-base sm:text-lg text-ink-soft max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
              Sitios web y páginas de aterrizaje ligeras en Next.js, con copywriting comercial persuasivo y arquitectura enfocada en convertir visitantes en prospectos calificados directo en WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" variant="signal" asChild className="rounded-sm font-medium">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="whatsapp_click"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  Cotizar página web por WhatsApp
                  <FaArrowRight className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-sm font-medium">
                <Link href="/#precios">Ver planes disponibles</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Capacidades del Servicio */}
      <section className="py-16 border-b border-line bg-card/50">
        <Container size="md">
          <h2 className="text-2xl font-semibold text-ink mb-8 text-center">
            Estándares técnicos y de diseño incluidos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Diseño a medida sin plantillas genéricas pesadas",
              "Optimización Core Web Vitals y máxima velocidad en móviles",
              "Copywriting estructurado para calificación y venta",
              "Llamados a la acción integrados directamente con WhatsApp",
              "Dominio, certificado SSL y despliegue en infraestructura global",
              "Estructura SEO técnico lista para indexación en Google",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-md border border-line bg-card"
              >
                <FaCheck className="h-4 w-4 text-signal shrink-0 mt-0.5" />
                <span className="text-sm text-ink-soft">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
