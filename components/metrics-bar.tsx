import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";

const metrics = [
  {
    value: "< 3 seg",
    label: "Tiempo de primera respuesta",
    note: "Vs. 2 horas promedio en atención manual",
  },
  {
    value: "24/7",
    label: "Disponibilidad operativa continua",
    note: "Captura clientes de noche y fines de semana",
  },
  {
    value: "100%",
    label: "Línea oficial sin riesgo de bloqueo",
    note: "Conectado directamente a WhatsApp Cloud API",
  },
  {
    value: "0 hrs",
    label: "Tiempo perdido copiando respuestas",
    note: "Menús claros, catálogos y filtro automático",
  },
];

export function MetricsBar() {
  return (
    <section className="border-b border-line bg-paper py-8 sm:py-10">
      <Container size="lg">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-line">
            {metrics.map((m, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index === 0
                    ? "md:pr-6"
                    : index === metrics.length - 1
                    ? "md:pl-6"
                    : "md:px-6"
                }`}
              >
                <span className="font-display font-bold text-3xl sm:text-4xl text-ink tnum tracking-tight">
                  {m.value}
                </span>
                <span className="mt-1 text-sm font-medium text-ink-soft">
                  {m.label}
                </span>
                <span className="mt-1 text-xs text-ink-mute">
                  {m.note}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
