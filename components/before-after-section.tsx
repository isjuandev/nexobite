import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaTimes, FaCheck } from "react-icons/fa";

const comparisons = [
  {
    criterion: "Primer tiempo de respuesta",
    before: "Minutos u horas, sujeto a disponibilidad del personal.",
    after: "Inmediato (menos de 3 segundos), en cualquier momento del día.",
  },
  {
    criterion: "Atención nocturna y festivos",
    before: "Bandeja pausada hasta la siguiente jornada laboral; leads fríos.",
    after: "El sistema atiende, informa, califica y toma los datos del prospecto.",
  },
  {
    criterion: "Filtro de prospectos",
    before: "El asesor invierte tiempo valioso con curiosos sin presupuesto.",
    after: "El sistema califica requerimientos y entrega los prospectos listos para cierre.",
  },
  {
    criterion: "Tareas repetitivas",
    before: "Copiar y pegar listas de precios, catálogos y políticas manualmente.",
    after: "Automatizadas con menús claros, PDFs y respuestas estructuradas.",
  },
  {
    criterion: "Seguimiento comercial",
    before: "Inconsistente; depende de la memoria de cada vendedor.",
    after: "Recordatorios programados para reactivar conversaciones pendientes.",
  },
  {
    criterion: "Organización de datos",
    before: "Dispersa en los chats individuales de cada teléfono personal.",
    after: "Centralizada en un panel comercial o CRM con etapas claras de venta.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">04 · COMPARATIVA DE GESTIÓN</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            La diferencia entre operar a mano y contar con{" "}
            <span className="text-signal">un sistema estructurado</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Compara el impacto directo de automatizar tu flujo de atención frente a continuar dependiendo de respuestas manuales.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="overflow-x-auto rounded-md border border-line bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line bg-card-hover font-mono text-xs uppercase text-ink-mute">
                <tr>
                  <th className="py-4 px-6 font-medium">Aspecto Operativo</th>
                  <th className="py-4 px-6 font-medium text-alert">
                    Operación Manual Habitual
                  </th>
                  <th className="py-4 px-6 font-medium text-signal">
                    Operación con NexoBite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparisons.map((c, index) => (
                  <tr key={index} className="hover:bg-paper/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-ink font-sans">
                      {c.criterion}
                    </td>
                    <td className="py-4 px-6 text-ink-soft">
                      <div className="flex items-start gap-2.5">
                        <FaTimes className="h-3.5 w-3.5 text-alert shrink-0 mt-0.5" />
                        <span>{c.before}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-ink bg-signal-soft/30 font-medium">
                      <div className="flex items-start gap-2.5">
                        <FaCheck className="h-3.5 w-3.5 text-signal shrink-0 mt-0.5" />
                        <span>{c.after}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
