"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "¿Puedo utilizar mi número actual de WhatsApp?",
    a: "Sí. El sistema se vincula a tu línea actual de WhatsApp Business o corporativa mediante la API oficial. No tienes que cambiar de número ni pierdes tu historial de chats o tu base de contactos habituales.",
  },
  {
    q: "¿El asistente reemplaza a mi equipo comercial?",
    a: "No. El sistema está diseñado para asumir las tareas mecánicas y repetitivas: saludar, responder preguntas frecuentes de catálogo y precios, filtrar clientes sin presupuesto y recopilar datos básicos. Cuando el cliente está calificado o solicita hablar con una persona, la conversación se transfiere de inmediato a tu asesor para la negociación final.",
  },
  {
    q: "¿Qué ocurre si un usuario hace una pregunta que el sistema no conoce?",
    a: "El sistema no inventa información. Si una consulta sale de su base de conocimiento predefinida, orienta al usuario y notifica a tu equipo para que un asesor humano tome el control del chat y responda con precisión.",
  },
  {
    q: "¿Qué incluye exactamente el costo mensual de mantenimiento?",
    a: "Cubre los recursos de infraestructura en la nube para mantener tu asistente y tu web activos 24/7, el monitoreo operativo, copias de seguridad de datos, ajustes menores a textos o precios y soporte técnico ante cualquier eventualidad. Los consumos directos de la API de Meta por volumen de mensajes se gestionan directamente en la cuenta de cada cliente.",
  },
  {
    q: "¿Necesito conocimientos técnicos para operar el sistema?",
    a: "Ninguno. Nosotros nos encargamos de todo el desarrollo, configuración e integración técnica. Al momento de la entrega, te brindamos una sesión práctica de capacitación para que tú y tu equipo comprendan cómo visualizar prospectos, asignar chats y realizar seguimiento con total facilidad.",
  },
  {
    q: "¿Cuáles son los tiempos de entrega y cómo se formaliza el trabajo?",
    a: "Los proyectos toman entre 5 y 25 días hábiles, según el plan acordado. Formalizamos cada servicio con propuesta técnica detallada, acuerdo de alcance y pagos divididos por fases (anticipo inicial y saldo contra entrega y validación de funcionamiento).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="md">
        <AnimatedSection>
          <div className="mb-3 text-center">
            <span className="eyebrow">08 · RESOLUCIÓN DE DUDAS COMERCIALES</span>
          </div>
          <h2 className="mb-4 text-center text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Preguntas frecuentes sobre la{" "}
            <span className="text-signal">implementación y el servicio</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-pretty text-base text-ink-soft">
            Todo lo que necesitas tener claro sobre integración, números, garantías y soporte.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-md border border-line bg-card overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-medium text-ink hover:text-signal transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold">
                      {faq.q}
                    </span>
                    <FaChevronDown
                      className={`h-3.5 w-3.5 text-ink-mute shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-signal" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-ink-soft leading-relaxed border-t border-line/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-mono text-ink-mute">
              ¿Tienes una duda específica sobre tu caso?{" "}
              <a
                href="https://wa.me/+573009459026?text=Hola,%20tengo%20una%20pregunta%20espec%C3%ADfica%20sobre%20mi%20negocio%20antes%20de%20iniciar."
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-4"
              >
                Pregúntanos directo por WhatsApp →
              </a>
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
