import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaChevronDown } from "react-icons/fa";
import { faqs, type FaqItem } from "@/lib/faqs";

interface FaqSectionProps {
  items?: FaqItem[];
  eyebrow?: string;
  titleLead?: string;
  titleAccent?: string;
  intro?: string;
}

export function FaqSection({
  items = faqs,
  eyebrow = "08 · TUS DUDAS",
  titleLead = "Preguntas frecuentes sobre la",
  titleAccent = "forma de trabajar y el servicio",
  intro = "Todo lo que necesitas saber sobre tu número, los tiempos, los pagos y el soporte.",
}: FaqSectionProps) {
  return (
    <section id="faq" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="md">
        <AnimatedSection>
          <div className="mb-3 text-center">
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="mb-4 text-center text-balance text-3xl font-semibold text-ink sm:text-4xl">
            {titleLead}{" "}
            <span className="text-signal">{titleAccent}</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-pretty text-base text-ink-soft">
            {intro}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="space-y-3">
            {items.map((faq, index) => (
              <details
                key={index}
                className="group rounded-md border border-line bg-card overflow-hidden transition-colors"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-medium text-ink hover:text-signal transition-colors cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm sm:text-base font-semibold">
                    {faq.q}
                  </span>
                  <FaChevronDown
                    className="h-3.5 w-3.5 text-ink-mute shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-signal"
                  />
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm text-ink-soft leading-relaxed border-t border-line/50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-mono text-ink-mute">
              ¿Tienes una duda específica sobre tu caso?{" "}
              <a
                href="https://wa.me/+573009459026?text=Hola,%20tengo%20una%20pregunta%20espec%C3%ADfica%20sobre%20mi%20negocio%20antes%20de%20iniciar."
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-4"
              >
                Pregúntanos directo por WhatsApp →
              </a>
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

