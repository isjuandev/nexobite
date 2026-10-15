"use client";

import { useState } from "react";
import {
  FaInbox,
  FaCalendarCheck,
  FaChartLine,
  FaUserFriends,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const views = [
  {
    id: "inbox",
    tab: "Chats",
    icon: FaInbox,
    title: "Todos tus chats en un solo lugar",
    description:
      "WhatsApp, Instagram y el chat de tu web llegan al mismo lugar. El asistente responde y, cuando el cliente pide una persona o la consulta lo requiere, el chat pasa a tu asesor con todo el historial.",
    points: [
      "Conversaciones asignadas a cada asesor",
      "Pasa del asistente a una persona sin perder la conversación",
      "Notas internas y estado de cada chat",
    ],
  },
  {
    id: "agenda",
    tab: "Agenda",
    icon: FaCalendarCheck,
    title: "Citas que se agendan y se recuerdan solas",
    description:
      "El asistente propone horarios según tu disponibilidad real, agenda, reagenda o cancela y envía recordatorios al cliente. Tú ves la agenda de tu equipo en la pantalla.",
    points: [
      "Horarios disponibles por asesor o servicio",
      "Reagendar y cancelar desde la conversación",
      "Recordatorios automáticos al cliente",
    ],
  },
  {
    id: "clientes",
    tab: "Clientes",
    icon: FaUserFriends,
    title: "Cada cliente, con su historial",
    description:
      "Cada contacto queda registrado con sus conversaciones, citas y pedidos. Sabes quién preguntó qué y en qué punto del proceso está.",
    points: [
      "Ficha de cada cliente con todo su historial",
      "Etiquetas para organizar y dar seguimiento",
      "Catálogo y pedidos si vendes productos",
    ],
  },
  {
    id: "reportes",
    tab: "Resultados",
    icon: FaChartLine,
    title: "Mira cómo va tu atención",
    description:
      "Un resumen con chats, citas e ingresos del periodo, y cómo trabaja el asistente, para decidir con números y no a ojo.",
    points: [
      "Chats y citas por semana o mes",
      "Cómo trabajan el asistente y tu equipo",
      "Encuestas para saber si tus clientes quedaron contentos",
    ],
  },
] as const;

export function PlatformSection() {
  const [activeId, setActiveId] = useState<(typeof views)[number]["id"]>(views[0].id);
  const view = views.find((v) => v.id === activeId) ?? views[0];

  return (
    <section id="plataforma" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">TU PANTALLA DE CONTROL</span>
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            No solo un asistente: una pantalla donde{" "}
            <span className="text-signal">tu equipo opera todo</span>
          </h2>
          <p className="mb-10 max-w-2xl text-pretty text-base text-ink-soft">
            Todo funciona en nuestra plataforma. Recibes acceso a una pantalla para atender, agendar y ver resultados, sin andar entre herramientas sueltas.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div role="tablist" aria-label="Módulos del panel" className="mb-6 flex flex-wrap gap-2">
            {views.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={v.id === activeId}
                onClick={() => setActiveId(v.id)}
                className={`flex items-center gap-2 rounded-sm px-4 py-2 font-mono text-xs transition-all ${
                  v.id === activeId
                    ? "bg-signal font-semibold text-paper"
                    : "border border-line bg-card text-ink-soft hover:border-line-strong hover:text-ink"
                }`}
              >
                <v.icon className="h-3.5 w-3.5" />
                {v.tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 items-center gap-8 rounded-md border border-line bg-card p-6 sm:p-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5" role="tabpanel">
              <h3 className="text-2xl font-semibold text-ink">{view.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{view.description}</p>
              <ul className="space-y-2.5 border-t border-line pt-4">
                {view.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs text-ink-soft">
                    <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="sm" variant="signal" asChild className="rounded-sm">
                  <a
                    href={`${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
                      "Hola NexoBite. Quiero ver la pantalla de control en una demostración."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="whatsapp_click"
                  >
                    Ver la pantalla en una demo
                    <FaArrowRight className="ml-1.5 h-3 w-3" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="rounded-sm">
                  <a href={siteConfig.appLoginUrl} data-analytics-event="login_click">
                    Ya soy cliente: iniciar sesión
                  </a>
                </Button>
              </div>
            </div>

            {/* Vista ilustrativa del panel (maqueta, no datos reales) */}
            <div className="lg:col-span-7" aria-hidden="true">
              <div className="overflow-hidden rounded-md border border-line shadow-inner">
                <div className="flex items-center justify-between border-b border-line bg-card px-4 py-2.5 font-mono text-xs text-ink-mute">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    NexoBite · {view.tab}
                  </span>
                  <span>Vista ilustrativa</span>
                </div>
                <div className="flex min-h-[300px]">
                  <div className="hidden w-36 shrink-0 space-y-1 border-r border-line p-3 sm:block">
                    {views.map((v) => (
                      <div
                        key={v.id}
                        className={`flex items-center gap-2 rounded-sm px-2 py-1.5 text-label ${
                          v.id === activeId ? "bg-signal-soft text-signal" : "text-ink-mute"
                        }`}
                      >
                        <v.icon className="h-3 w-3" />
                        {v.tab}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 space-y-2.5 p-4">
                    {activeId === "inbox" &&
                      [
                        ["Cliente nuevo", "Hola, ¿tienen disponibilidad esta semana?", "Asistente"],
                        ["Consulta de precio", "¿Cuánto cuesta el servicio completo?", "Asistente"],
                        ["Pide hablar con alguien", "Prefiero hablar con una persona", "Asesor"],
                      ].map(([name, msg, who]) => (
                        <div key={name} className="rounded-sm border border-line bg-card p-3">
                          <div className="flex items-center justify-between text-label">
                            <span className="font-medium text-ink">{name}</span>
                            <span className="rounded-sm bg-signal-soft px-1.5 py-0.5 font-mono text-signal">{who}</span>
                          </div>
                          <p className="mt-1 text-label text-ink-soft">{msg}</p>
                        </div>
                      ))}
                    {activeId === "agenda" &&
                      [
                        ["Lun", "09:00", "Cita de revisión"],
                        ["Mar", "11:30", "Consulta inicial"],
                        ["Jue", "15:00", "Seguimiento"],
                      ].map(([day, hour, label]) => (
                        <div key={day} className="flex items-center gap-3 rounded-sm border border-line bg-card p-3">
                          <span className="font-mono text-label text-copper tnum">{day} {hour}</span>
                          <span className="text-label text-ink-soft">{label}</span>
                          <span className="ml-auto rounded-sm bg-signal-soft px-1.5 py-0.5 font-mono text-micro text-signal">Agendada</span>
                        </div>
                      ))}
                    {activeId === "clientes" &&
                      [
                        ["Cliente A", "3 conversaciones · 1 cita"],
                        ["Cliente B", "1 conversación · interesado"],
                        ["Cliente C", "2 conversaciones · 1 pedido"],
                      ].map(([name, info]) => (
                        <div key={name} className="rounded-sm border border-line bg-card p-3">
                          <p className="text-label font-medium text-ink">{name}</p>
                          <p className="mt-0.5 font-mono text-label text-ink-mute">{info}</p>
                        </div>
                      ))}
                    {activeId === "reportes" && (
                      <div className="grid grid-cols-2 gap-2.5">
                        {["Conversaciones", "Citas", "Clientes contentos", "Chats pasados a un asesor"].map((label) => (
                          <div key={label} className="rounded-sm border border-line bg-card p-3">
                            <p className="font-mono text-micro uppercase text-ink-mute">{label}</p>
                            <div className="mt-2 h-1.5 w-full rounded-sm bg-line">
                              <div className="h-1.5 w-2/3 rounded-sm bg-signal" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-center font-mono text-label text-ink-mute">
                Maqueta ilustrativa. Los datos reales aparecen en tu pantalla.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
