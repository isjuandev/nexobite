import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaClipboardList, FaCogs, FaCheckDouble } from "react-icons/fa";

const steps = [
  {
    step: "01",
    timeframe: "Día 1 a 3",
    icon: FaClipboardList,
    title: "Entendemos tu negocio y planeamos las conversaciones",
    description:
      "Vemos cómo te escriben tus clientes, cuáles son las preguntas de siempre y qué necesitas saber para confirmar una venta. Escribimos juntos lo que dirá el asistente.",
    deliverable: "Guion de conversaciones y lista de respuestas",
  },
  {
    step: "02",
    timeframe: "Día 4 a 10",
    icon: FaCogs,
    title: "Lo armamos y lo probamos",
    description:
      "Preparamos las respuestas, conectamos el asistente a tu WhatsApp y a tu web, y dejamos que cada cliente interesado se guarde solo en tu sistema.",
    deliverable: "Todo conectado y probado contigo",
  },
  {
    step: "03",
    timeframe: "Día 11+",
    icon: FaCheckDouble,
    title: "Lo activamos y capacitamos a tu equipo",
    description:
      "Empezamos a usarlo en tu día a día, enseñamos a tu equipo a manejar la pantalla de control y vigilamos que funcione bien para mejorar las respuestas.",
    deliverable: "Capacitación práctica + vigilancia continua",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">05 · CÓMO TRABAJAMOS</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Cómo lo dejamos funcionando{" "}
            <span className="text-signal">en tu negocio</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Nosotros nos encargamos de todo. Tu equipo solo recibe a los clientes que están listos para comprar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="stagger grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative flex flex-col justify-between rounded-md border border-line bg-card p-6 hover:border-signal/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-signal-soft border border-signal/30 text-signal">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs text-copper px-2 py-0.5 rounded-sm bg-card border border-line">
                      {s.timeframe}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-ink-mute block mb-1">
                    PASO {s.step}
                  </span>
                  <h3 className="text-lg font-semibold text-ink mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-line">
                  <span className="text-xs font-mono text-ink-mute block">
                    ENTREGABLE:
                  </span>
                  <span className="text-xs font-mono text-signal">
                    ✓ {s.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
