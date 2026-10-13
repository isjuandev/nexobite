import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaClock, FaCopy, FaMoon, FaFolderMinus } from "react-icons/fa";

const problems = [
  {
    icon: FaClock,
    title: "Demoras en el primer contacto",
    description:
      "Cuando un cliente escribe pidiendo información y tarda 30 minutos o 2 horas en recibir respuesta, su interés disminuye o ya buscó a tu competidor. Quien responde primero suele quedarse con la venta.",
  },
  {
    icon: FaCopy,
    title: "Horas perdidas en preguntas repetitivas",
    description:
      "Tu equipo pasa buena parte del día copiando y pegando precios, ubicaciones o enviando los mismos archivos, en lugar de dedicarse a conversar con quienes sí quieren comprar.",
  },
  {
    icon: FaMoon,
    title: "Oportunidades fuera de horario",
    description:
      "Gran parte de las consultas comerciales llegan en las noches, fines de semana o días festivos. Sin alguien que conteste, esos contactos quedan esperando y muchos pierden el interés antes de la apertura.",
  },
  {
    icon: FaFolderMinus,
    title: "Clientes que se olvidan y desorden",
    description:
      "Los interesados se acumulan en chats personales, sin orden. Si un cliente no compra de inmediato, se pierde entre los mensajes porque nadie tiene tiempo de volver a escribirle.",
  },
];

export function ProblemSection() {
  return (
    <section id="problemas" className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">01 · LO QUE CUESTA ATENDER A MANO</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Dónde se pierden las ventas cuando la atención{" "}
            <span className="text-copper">depende de responder a mano</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Atender los chats uno por uno agota a tu equipo y hace que se te escapen clientes todos los días.
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
