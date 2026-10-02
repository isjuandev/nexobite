import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { FaGlobe, FaWhatsapp, FaDatabase, FaArrowRight } from "react-icons/fa";

const solutionPillars = [
  {
    step: "01",
    icon: FaGlobe,
    title: "1. Captación web orientada a conversación",
    description:
      "Desarrollamos páginas web y landing pages rápidas y claras, estructuradas para resolver dudas y dirigir prospectos directamente a WhatsApp con el contexto exacto de lo que desean cotizar.",
    highlight: "Cero fricción en formularios",
  },
  {
    step: "02",
    icon: FaWhatsapp,
    title: "2. Atención y filtro automático en WhatsApp",
    description:
      "Implementamos asistentes conversacionales que responden en segundos, entregan catálogos o precios y califican si el cliente tiene presupuesto real antes de pasar la conversación a tu equipo.",
    highlight: "Respuestas 24/7 en < 3 seg",
  },
  {
    step: "03",
    icon: FaDatabase,
    title: "3. Conexión con CRM y herramientas de venta",
    description:
      "Centralizamos cada contacto generado en un tablero comercial o CRM. Ningún número queda aislado en el celular de un asesor y cada etapa del embudo queda registrada para facilitar el cierre.",
    highlight: "Historial y seguimiento ordenado",
  },
];

export function SolutionsSection() {
  return (
    <section id="solucion" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">02 · ARQUITECTURA DE ATENCIÓN Y CAPTACIÓN</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Un sistema conectado para{" "}
            <span className="text-signal">captar, atender y dar seguimiento</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Diseñamos e implementamos la infraestructura comercial para que tu empresa opere con rapidez y orden, sin depender de tareas manuales repetitivas.
          </p>
        </AnimatedSection>

        {/* Pipeline visual conectado */}
        <AnimatedSection delay={150}>
          <div className="grid gap-6 md:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <div
                key={pillar.step}
                className="relative rounded-md border border-line bg-card p-6 flex flex-col justify-between hover:border-signal/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-signal-soft border border-signal/30 text-signal">
                      <pillar.icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs text-ink-mute">
                      FASE {pillar.step}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-mono">
                  <span className="text-copper">{pillar.highlight}</span>
                  <span className="text-signal">✓ ACTIVO</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-md border border-line bg-card/60 p-6">
            <div>
              <p className="text-sm font-semibold text-ink">
                ¿Quieres saber cómo se integraría en tu negocio?
              </p>
              <p className="text-xs text-ink-soft">
                Diseñamos el flujo específico para tus canales y servicios actuales.
              </p>
            </div>
            <Button variant="signal" size="sm" asChild className="rounded-sm shrink-0">
              <a
                href="https://wa.me/+573009459026?text=Hola,%20quiero%20conocer%20c%C3%B3mo%20se%20integrar%C3%ADa%20el%20sistema%20comercial%20en%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
              >
                Diseñar mi sistema comercial
                <FaArrowRight className="ml-1.5 h-3 w-3" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
