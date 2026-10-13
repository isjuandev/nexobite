import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaGlobe, FaWhatsapp, FaCogs, FaCode, FaCheck } from "react-icons/fa";

const serviceModules = [
  {
    icon: FaGlobe,
    category: "CONSEGUIR CLIENTES",
    title: "Páginas Web",
    description:
      "Páginas web rápidas, con textos que convencen y botones que llevan al cliente directo a tu WhatsApp.",
    features: [
      "Diseño a tu medida, sin moldes genéricos",
      "Carga rápido en el celular",
      "Formularios simples que abren el chat",
      "Medimos cuánta gente te escribe desde tu web",
    ],
  },
  {
    icon: FaWhatsapp,
    category: "ATENDER CLIENTES",
    title: "Asistente para WhatsApp e Instagram",
    description:
      "Un asistente en tu WhatsApp, con conexión oficial o económica. Responde preguntas comunes, atiende de noche y averigua quién quiere comprar antes de pasárselo a tus asesores.",
    features: [
      "Usa tu número actual (oficial o económica)",
      "Catálogos, horarios y precios",
      "Averigua presupuesto y necesidad",
      "Pasa el chat a una persona al instante",
    ],
  },
  {
    icon: FaCogs,
    category: "ORDEN Y AUTOMATIZACIÓN",
    title: "Conectamos tus herramientas",
    description:
      "Unimos tus chats y tus ventas con las herramientas que ya usas, para que no tengas que pasar datos a mano.",
    features: [
      "Cada cliente interesado se guarda al instante",
      "Avisos a tu equipo por chat o correo",
      "Confirmaciones enviadas automáticamente",
      "Conexión entre las herramientas que uses",
    ],
  },
  {
    icon: FaCode,
    category: "A TU MEDIDA",
    title: "Programas hechos para tu negocio",
    description:
      "Aplicaciones web para cuando las herramientas comunes no alcanzan: cotizadores, pantallas para tus clientes o sistemas de reservas.",
    features: [
      "Construido con tecnología moderna y confiable",
      "Adaptado a la forma de trabajar de tu negocio",
      "Crece contigo y es tuyo",
      "Seguridad, copias de respaldo y soporte dedicado",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">06 · LO QUE HACEMOS</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Soluciones a la medida de lo que{" "}
            <span className="text-signal">tu negocio necesita hoy</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Puedes contratar todo junto o solo lo que necesites hoy, y sumar más cuando tu negocio crezca.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceModules.map((s) => (
              <div
                key={s.title}
                className="rounded-md border border-line bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-line-strong transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-signal-soft border border-signal/30 text-signal">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs text-copper px-2 py-0.5 rounded-sm bg-card border border-line">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-line space-y-2">
                  {s.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-ink-soft">
                      <FaCheck className="h-3 w-3 text-signal shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
