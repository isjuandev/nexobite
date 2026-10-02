"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaArrowRight, FaCalendarCheck, FaFilter, FaListAlt } from "react-icons/fa";

const useCases = [
  {
    id: "cotizacion",
    tab: "1. Venta y Cotización",
    icon: FaFilter,
    title: "Calificación y Rango de Precios",
    description:
      "El asistente consulta los requerimientos, informa los rangos base y solicita los datos de contacto solo si el cliente tiene interés real.",
    chat: [
      {
        sender: "user",
        time: "11:15 AM",
        text: "Hola, me interesa conocer los precios de sus servicios.",
      },
      {
        sender: "bot",
        time: "11:15 AM",
        text: "¡Hola! Con gusto te paso la información. Para indicarte el plan exacto: ¿qué tipo de proyecto necesitas hoy?",
        chips: ["1. Chatbot WhatsApp", "2. Página Web", "3. Solución Integral"],
      },
      {
        sender: "user",
        time: "11:16 AM",
        text: "3. Solución Integral",
      },
      {
        sender: "bot",
        time: "11:16 AM",
        text: "Excelente. La Solución Integral combina Web + WhatsApp + CRM desde $3.490.000 COP. ¿Para qué empresa o sector sería?",
      },
    ],
    crmNote: "Lead registrado en CRM: Calificado · Interés: Integral · Origen: WhatsApp",
  },
  {
    id: "citas",
    tab: "2. Agendamiento de Citas",
    icon: FaCalendarCheck,
    title: "Reserva y Confirmación Automática",
    description:
      "Permite a tus prospectos elegir fecha y hora disponible sin llamadas ni mensajes de ida y vuelta.",
    chat: [
      {
        sender: "user",
        time: "03:20 PM",
        text: "Quisiera agendar una llamada con un asesor para revisar mi caso.",
      },
      {
        sender: "bot",
        time: "03:20 PM",
        text: "¡Perfecto! Tenemos estos horarios disponibles para mañana vía Google Meet:",
        chips: ["Mañana 10:00 AM", "Mañana 02:30 PM", "Mañana 04:00 PM"],
      },
      {
        sender: "user",
        time: "03:21 PM",
        text: "Mañana 02:30 PM",
      },
      {
        sender: "bot",
        time: "03:21 PM",
        text: "¡Listo! Tu llamada quedó agendada para mañana a las 2:30 PM. Te enviamos la invitación al calendario y un recordatorio 2 horas antes.",
      },
    ],
    crmNote: "Evento sincronizado en Google Calendar + Recordatorio programado",
  },
  {
    id: "catalogo",
    tab: "3. Catálogo y FAQs",
    icon: FaListAlt,
    title: "Respuestas Inmediatas a Dudas Frecuentes",
    description:
      "Envío instantáneo de menús, condiciones de entrega, horarios de atención y fichas en PDF.",
    chat: [
      {
        sender: "user",
        time: "08:45 PM",
        text: "¿Tienen catálogo de servicios y ubicación de atención?",
      },
      {
        sender: "bot",
        time: "08:45 PM",
        text: "¡Hola! Atendemos de forma remota en toda Colombia y presencial en Medellín. Aquí puedes ver nuestro catálogo completo y alcance:",
        chips: ["Descargar Catálogo PDF", "Ver Condiciones y SLA", "Hablar con un asesor"],
      },
      {
        sender: "user",
        time: "08:46 PM",
        text: "Descargar Catálogo PDF",
      },
      {
        sender: "bot",
        time: "08:46 PM",
        text: "📄 Aquí tienes el documento: [Catalogo_NexoBite_2026.pdf]. Si deseas cotizar una opción en particular, dime y te transfiero con un especialista.",
      },
    ],
    crmNote: "Contacto registrado: Prospecto consultó catálogo en horario nocturno (8:46 PM)",
  },
];

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const currentCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <section id="demo" className="border-b border-line bg-card/20 py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">03 · DEMOSTRACIÓN DE PRODUCTO</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Así interactúan tus clientes reales{" "}
            <span className="text-signal">con el sistema</span>
          </h2>
          <p className="mb-10 max-w-2xl text-pretty text-base text-ink-soft">
            Explora tres de los flujos más frecuentes implementados para empresas: cotización con filtro, reserva de citas y atención de dudas frecuentes.
          </p>
        </AnimatedSection>

        {/* Selector de Casos de Uso */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {useCases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono transition-all ${
                  activeTab === c.id
                    ? "bg-signal text-paper font-semibold"
                    : "bg-card border border-line text-ink-soft hover:text-ink hover:border-line-strong"
                }`}
              >
                <c.icon className="h-3.5 w-3.5" />
                <span>{c.tab}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Panel Interactivo del Mockup */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-md border border-line bg-card p-6 sm:p-8">
            {/* Descripción del flujo */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-copper px-2 py-0.5 rounded-sm bg-copper-soft border border-copper/30">
                FLUJO EN VIVO
              </span>
              <h3 className="text-2xl font-semibold text-ink">
                {currentCase.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                {currentCase.description}
              </p>
              <div className="pt-4 border-t border-line space-y-2">
                <p className="text-xs font-mono text-ink-mute">
                  INTEGRACIÓN DE SALIDA:
                </p>
                <p className="text-xs font-mono text-signal">
                  ✓ {currentCase.crmNote}
                </p>
              </div>
              <div className="pt-2">
                <Button size="sm" variant="signal" asChild className="rounded-sm">
                  <a
                    href="https://wa.me/+573009459026?text=Hola,%20quiero%20probar%20una%20demostraci%C3%B3n%20de%20este%20flujo%20por%20WhatsApp."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-1.5 h-3.5 w-3.5" />
                    Probar flujo similar en mi WhatsApp
                    <FaArrowRight className="ml-1.5 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Simulación del Chat en Vivo */}
            <div className="lg:col-span-7">
              <div className="rounded-md border border-line bg-paper-deep/80 overflow-hidden shadow-inner">
                <div className="px-4 py-2.5 bg-card border-b border-line flex items-center justify-between text-xs font-mono text-ink-mute">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal" />
                    Canal WhatsApp Verificado
                  </span>
                  <span>Simulación Interactiva</span>
                </div>

                <div className="p-4 sm:p-6 space-y-3.5 min-h-[320px] flex flex-col justify-center text-xs">
                  {currentCase.chat.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-start" : "items-end"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-ink-mute mb-1 px-1">
                        {msg.time}
                      </span>
                      <div
                        className={`p-3 rounded-md max-w-[85%] leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-card border border-line text-ink rounded-tl-none"
                            : "bg-signal-soft border border-signal/30 text-ink rounded-tr-none"
                        }`}
                      >
                        <p>{msg.text}</p>
                        {msg.chips && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {msg.chips.map((chip, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2 py-1 rounded-sm bg-card border border-line text-[11px] text-ink-soft font-mono"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
