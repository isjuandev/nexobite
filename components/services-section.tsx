import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaGlobe, FaWhatsapp, FaCogs, FaCode, FaCheck } from "react-icons/fa";

const serviceModules = [
  {
    icon: FaGlobe,
    category: "CAPTACIÓN DIGITAL",
    title: "Desarrollo Web & Landing Pages",
    description:
      "Sitios web y páginas de aterrizaje ligeras en Next.js, con copywriting comercial persuasivo y botones que envían prospectos calificados directamente a WhatsApp.",
    features: [
      "Diseño a medida sin plantillas lentas",
      "Optimización Core Web Vitals y velocidad móvil",
      "Formularios inteligentes conectados a chat",
      "Configuración de Meta Pixel y analítica",
    ],
  },
  {
    icon: FaWhatsapp,
    category: "ATENCIÓN CONVERSACIONAL",
    title: "Chatbots para WhatsApp e Instagram",
    description:
      "Asistentes inteligentes integrados a tu línea oficial de WhatsApp Business API. Atienden 24/7, responden preguntas frecuentes y filtran prospectos antes de pasarlos a tus asesores.",
    features: [
      "Conexión sobre tu número actual oficial",
      "Manejo de catálogos, horarios y precios base",
      "Calificación de presupuesto y necesidad",
      "Traspaso inmediato a asesor humano",
    ],
  },
  {
    icon: FaCogs,
    category: "INTEGRACIÓN OPERATIVA",
    title: "Automatización de Procesos (CRM & APIs)",
    description:
      "Conectamos tus canales de venta con herramientas de gestión (Google Sheets, Kommo, HubSpot, Siigo o Alegra) para eliminar el traspaso manual de datos.",
    features: [
      "Sincronización instantánea de prospectos",
      "Alertas internas de ventas por chat o correo",
      "Disparo automático de confirmaciones",
      "Webhooks personalizados entre plataformas",
    ],
  },
  {
    icon: FaCode,
    category: "DESARROLLO AVANZADO",
    title: "Sistemas Web & Software a Medida",
    description:
      "Desarrollo de aplicaciones web para operaciones que exceden las herramientas comerciales estándar: cotizadores dinámicos, paneles de clientes o sistemas de reservas.",
    features: [
      "Desarrollo sobre stack Next.js + PostgreSQL",
      "Adaptado a las reglas específicas de tu negocio",
      "Arquitectura escalable y código propietario",
      "Seguridad, backups y soporte técnico dedicado",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">06 · SERVICIOS Y MODALIDADES</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Soluciones modulares adaptadas a lo que{" "}
            <span className="text-signal">tu negocio necesita hoy</span>
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Puedes implementar la solución comercial completa o contratar los módulos de forma individual según la madurez de tu operación.
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
