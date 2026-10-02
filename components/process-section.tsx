import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaClipboardList, FaCogs, FaCheckDouble } from "react-icons/fa";

const steps = [
  {
    step: "01",
    timeframe: "Día 1 a 3",
    icon: FaClipboardList,
    title: "Diagnóstico y diseño del flujo comercial",
    description:
      "Analizamos cómo llegan tus clientes, cuáles son las preguntas más comunes y qué información es indispensable para calificar una venta. Definimos los guiones, la lógica del asistente y los puntos de contacto.",
    deliverable: "Mapa de conversación y catálogo de respuestas",
  },
  {
    step: "02",
    timeframe: "Día 4 a 10",
    icon: FaCogs,
    title: "Configuración técnica e integración",
    description:
      "Construimos los flujos de respuesta, conectamos el sistema a tu línea de WhatsApp Cloud API, enlazamos tu web y configuramos el almacenamiento automático de prospectos en tu CRM o base de datos.",
    deliverable: "Entorno integrado y pruebas de validación",
  },
  {
    step: "03",
    timeframe: "Día 11+",
    icon: FaCheckDouble,
    title: "Puesta en marcha y capacitación operativa",
    description:
      "Activamos el sistema en tu operación diaria, capacitamos a tu equipo en el uso del panel y monitoreamos el rendimiento inicial para afinar respuestas y asegurar estabilidad continua.",
    deliverable: "Capacitación práctica + monitoreo 24/7",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">05 · MÉTODO DE IMPLEMENTACIÓN</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Cómo integramos este sistema{" "}
            <span className="text-signal">en tu negocio</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Nosotros nos encargamos de todo el desarrollo, configuración e integración técnica. Tu equipo solo recibe los prospectos calificados.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="grid gap-6 md:grid-cols-3">
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
