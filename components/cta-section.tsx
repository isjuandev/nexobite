import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";

export function CtaSection() {
  return (
    <section className="relative border-b border-line bg-card/40 py-20 sm:py-28 overflow-hidden">
      <Container className="relative z-10 text-center" size="md">
        <AnimatedSection>
          <div className="mb-3 flex justify-center">
            <span className="eyebrow">09 · DIAGNÓSTICO COMERCIAL</span>
          </div>
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-signal-soft border border-signal/30 text-signal">
            <FaWhatsapp className="h-6 w-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl text-balance">
            Revisemos cómo responde tu negocio hoy y dónde{" "}
            <span className="text-signal">puedes recuperar tiempo y ventas</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mx-auto mb-8 max-w-xl text-pretty text-base text-ink-soft leading-relaxed">
            Conversemos por WhatsApp. Analizamos tu flujo actual de atención, identificamos cuellos de botella y te mostramos cómo estructurar una solución a la medida de tu operación antes de tomar cualquier decisión.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs font-mono text-ink-mute">
            <span>✓ Sin compromiso</span>
            <span>·</span>
            <span>✓ Respuesta en minutos</span>
            <span>·</span>
            <span>✓ Asesoría personalizada</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
            <a
              href="https://wa.me/+573009459026?text=Hola,%20estuve%20revisando%20los%20planes%20de%20NexoBite%20y%20quiero%20coordinar%20un%20diagn%C3%B3stico%20de%2015%20minutos%20para%20la%20atenci%C3%B3n%20de%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" />
              Iniciar diagnóstico por WhatsApp
              <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
