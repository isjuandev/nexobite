import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";

const metrics = [
  // Solo cifras que podemos respaldar. Cuando haya medición real de latencia y
  // disponibilidad (tarjeta de rendimiento del asistente en el panel), publicarla aquí.
  {
    value: "Automática",
    label: "Primera respuesta sin esperar a un asesor",
    note: "El asistente contesta cada chat al llegar, sin turnos ni colas",
  },
  {
    value: "Fuera de horario",
    label: "Cobertura de noches y fines de semana",
    note: "Guarda los datos del cliente aunque tu equipo no esté",
  },
  {
    value: "2 opciones",
    label: "Conexión oficial de WhatsApp o económica",
    note: "Eliges según tu presupuesto y el riesgo que quieras asumir",
  },
  {
    value: "0 hrs",
    label: "Tiempo perdido copiando respuestas",
    note: "Menús claros, catálogos y respuestas listas",
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
                <span className="font-display font-bold text-2xl sm:text-3xl text-ink tnum tracking-tight">
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
