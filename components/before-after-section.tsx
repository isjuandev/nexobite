import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaTimes, FaCheck } from "react-icons/fa";

const comparisons = [
  {
    criterion: "Primer tiempo de respuesta",
    before: "Minutos u horas, sujeto a disponibilidad del personal.",
    after: "Inmediato y automático, sin depender de que haya alguien disponible.",
  },
  {
    criterion: "Atención nocturna y festivos",
    before: "Los chats esperan hasta el día siguiente y el cliente se enfría.",
    after: "El asistente atiende, informa y guarda los datos del cliente.",
  },
  {
    criterion: "Saber quién sí va a comprar",
    before: "El asesor pierde tiempo con curiosos que no van a comprar.",
    after: "El asistente averigua qué necesitan y te pasa solo a los que están listos para comprar.",
  },
  {
    criterion: "Tareas repetitivas",
    before: "Copiar y pegar a mano listas de precios, catálogos y condiciones.",
    after: "Se resuelven solas con menús claros, PDFs y respuestas listas.",
  },
  {
    criterion: "Seguimiento comercial",
    before: "Inconsistente; depende de la memoria de cada vendedor.",
    after: "Mensajes programados que retoman las conversaciones pendientes.",
  },
  {
    criterion: "Orden de tus clientes",
    before: "Regados en los chats del celular de cada persona.",
    after: "Todos en un solo lugar, con claridad de en qué punto va cada venta.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">04 · ANTES Y DESPUÉS</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            La diferencia entre operar a mano y contar con{" "}
            <span className="text-signal">un asistente que trabaja por ti</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Mira qué cambia en tu día a día cuando la atención deja de ser manual.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="overflow-x-auto rounded-md border border-line bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line font-mono text-xs uppercase text-ink-mute">
                <tr>
                  <th className="py-4 px-6 font-medium">Aspecto Operativo</th>
                  <th className="py-4 px-6 font-medium text-alert">
                    Atendiendo a mano
                  </th>
                  <th className="py-4 px-6 font-medium text-signal">
                    Con NexoBite
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
