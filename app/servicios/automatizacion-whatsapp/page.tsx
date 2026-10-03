import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaArrowRight, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Automatización de WhatsApp para Empresas",
  description:
    "Asistentes inteligentes integrados a tu línea oficial de WhatsApp Business API. Atención 24/7, calificación de prospectos y traspaso a asesores.",
  alternates: {
    canonical: "https://www.nexobite.com/servicios/automatizacion-whatsapp",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AutomatizacionWhatsAppPage() {
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
            <span className="eyebrow mb-3 inline-block">ATENCIÓN CONVERSACIONAL</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mb-6 text-balance">
              Automatización de WhatsApp y{" "}
              <span className="text-signal">Chatbots con IA</span>
            </h1>
            <p className="text-base sm:text-lg text-ink-soft max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
              Asistentes inteligentes integrados a tu línea oficial de WhatsApp Business API. Atienden 24/7, responden preguntas frecuentes y filtran prospectos antes de pasarlos a tus asesores comerciales.
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
                  Solicitar diagnóstico por WhatsApp
                  <FaArrowRight className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-sm font-medium">
                <Link href="/#faq">Preguntas frecuentes</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Capacidades del Servicio */}
      <section className="py-16 border-b border-line bg-card/50">
        <Container size="md">
          <h2 className="text-2xl font-semibold text-ink mb-8 text-center">
            Capacidades incluidas en la solución
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Conexión sobre tu número actual de WhatsApp Business",
              "Manejo de catálogos, horarios y preguntas frecuentes",
              "Calificación automática de presupuesto y necesidad",
              "Traspaso inmediato a asesor humano cuando el prospecto califica",
              "Historial y trazabilidad en la cuenta corporativa",
              "Capacitación de uso para tu equipo de ventas",
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
