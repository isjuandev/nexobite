import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { FaGlobe, FaWhatsapp, FaDatabase, FaArrowRight } from "react-icons/fa";

const solutionPillars = [
  {
    step: "01",
    icon: FaGlobe,
    title: "1. Una web que te trae clientes por WhatsApp",
    description:
      "Creamos páginas web rápidas y claras que resuelven dudas y llevan al cliente directo a tu WhatsApp, ya sabiendo qué quiere cotizar.",
    highlight: "Sin formularios largos",
  },
  {
    step: "02",
    icon: FaWhatsapp,
    title: "2. Atención automática en WhatsApp",
    description:
      "Un asistente contesta al instante, envía catálogos o precios y averigua si el cliente realmente quiere comprar antes de pasar el chat a tu equipo.",
    highlight: "Respuesta automática sin esperar turno",
  },
  {
    step: "03",
    icon: FaDatabase,
    title: "3. Tus clientes ordenados en un solo lugar",
    description:
      "Cada contacto queda guardado en un solo lugar. Ningún cliente se queda perdido en el celular de un asesor y siempre sabes en qué punto va cada venta.",
    highlight: "Historial y seguimiento al día",
  },
];

export function SolutionsSection() {
  return (
    <section id="solucion" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">02 · CÓMO TE AYUDAMOS</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Todo conectado para{" "}
            <span className="text-signal">conseguir, atender y no perder clientes</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Armamos todo lo que tu negocio necesita para atender rápido y con orden, sin tareas repetitivas.
          </p>
        </AnimatedSection>

        {/* Pipeline visual conectado */}
        <AnimatedSection delay={150}>
          <div className="stagger grid gap-6 md:grid-cols-3">
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
                ¿Quieres ver cómo funcionaría en tu negocio?
              </p>
              <p className="text-xs text-ink-soft">
                Lo adaptamos a tus canales y servicios actuales.
              </p>
            </div>
            <Button variant="signal" size="sm" asChild className="rounded-sm shrink-0">
              <a
                href="https://wa.me/+573009459026?text=Hola,%20quiero%20ver%20c%C3%B3mo%20funcionar%C3%ADa%20esto%20en%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero verlo en mi negocio
                <FaArrowRight className="ml-1.5 h-3 w-3" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
