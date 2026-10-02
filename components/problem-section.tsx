import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaClock, FaCopy, FaMoon, FaFolderMinus } from "react-icons/fa";

const problems = [
  {
    icon: FaClock,
    title: "Demoras en el primer contacto",
    description:
      "Cuando un cliente escribe pidiendo información y tarda 30 minutos o 2 horas en recibir respuesta, su interés disminuye o ya buscó a tu competidor. La velocidad del primer mensaje define la probabilidad de cierre.",
  },
  {
    icon: FaCopy,
    title: "Horas perdidas en preguntas repetitivas",
    description:
      "Tu equipo pasa buena parte del día copiando y pegando precios, ubicaciones o enviando los mismos archivos, en lugar de enfocarse en negociar y cerrar clientes calificados.",
  },
  {
    icon: FaMoon,
    title: "Oportunidades fuera de horario",
    description:
      "Gran parte de las consultas comerciales llegan en las noches, fines de semana o días festivos. Sin un sistema activo, esos contactos quedan en espera y muchos pierden el interés antes de la apertura.",
  },
  {
    icon: FaFolderMinus,
    title: "Falta de seguimiento y desorden comercial",
    description:
      "Los prospectos se acumulan en chats personales sin clasificar. Si un cliente no compra de inmediato, se pierde en el historial porque nadie tiene tiempo de retomar la conversación de forma manual.",
  },
];

export function ProblemSection() {
  return (
    <section id="problemas" className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">01 · EL COSTO DE LA ATENCIÓN MANUAL</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Dónde se pierden las ventas cuando la atención{" "}
            <span className="text-copper">depende de responder a mano</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Atender clientes por chat sin un sistema estructurado satura a tu equipo comercial y deja escapar oportunidades todos los días.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, index) => (
              <div
                key={p.title}
                className="flex flex-col justify-between rounded-md border border-line bg-card p-6 hover:border-line-strong transition-colors"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-copper-soft border border-copper/30 text-copper">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-ink-mute block mb-2">
                    CUELLO 0{index + 1}
                  </span>
                  <h3 className="mb-2.5 text-base font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
