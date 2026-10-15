import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site-config";

interface CtaSectionProps {
  eyebrow?: string;
  titleLead?: string;
  titleAccent?: string;
  description?: string;
  message?: string;
}

export function CtaSection({
  eyebrow = "09 · HABLEMOS",
  titleLead = "Revisemos cómo responde tu negocio hoy y dónde",
  titleAccent = "puedes recuperar tiempo y ventas",
  description = "Conversemos por WhatsApp. Revisamos cómo atiendes hoy a tus clientes, vemos dónde se te escapan ventas y te mostramos cómo solucionarlo, antes de que tomes cualquier decisión.",
  message = "Hola, estuve revisando los planes de NexoBite y quiero coordinar una revisión de 15 minutos para la atención de mi negocio.",
}: CtaSectionProps) {
  return (
    <section className="relative border-b border-line bg-card/40 py-20 sm:py-28 overflow-hidden">
      <Container className="relative z-10 text-center" size="md">
        <AnimatedSection>
          <div className="mb-3 flex justify-center">
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-signal-soft border border-signal/30 text-signal">
            <FaWhatsapp className="h-6 w-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl text-balance">
            {titleLead}{" "}
            <span className="text-signal">{titleAccent}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mx-auto mb-8 max-w-xl text-pretty text-base text-ink-soft leading-relaxed">
            {description}
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
              href={`${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" />
              Hablar por WhatsApp
              <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mx-auto mt-12 max-w-xl border-t border-line pt-10 text-left">
            <h3 className="mb-1 text-center text-lg font-semibold text-ink">
              ¿Prefieres que te escribamos nosotros?
            </h3>
            <p className="mb-6 text-center text-sm text-ink-soft">
              Déjanos tus datos y te contactamos el siguiente día hábil.
            </p>
            <LeadForm />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
