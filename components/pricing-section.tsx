"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { FaCheck, FaArrowRight, FaTimes } from "react-icons/fa";

const plans = [
  {
    id: "start",
    name: "01 · START",
    subtitle: "Atención Inmediata Automática",
    target: "Para negocios locales y profesionales que pierden clientes por responder tarde o fuera de horario.",
    setupPrice: "$1.190.000",
    monthlyPrice: "$140.000",
    timeframe: "5 a 7 días hábiles",
    highlighted: false,
    badge: null,
    features: [
      "Conexión a 1 línea de WhatsApp (oficial o económica)",
      "Bienvenida inteligente + menú estructurado",
      "Hasta 15 respuestas a consultas frecuentes",
      "Calificación básica (nombre, necesidad, ciudad)",
      "Enrutamiento directo a asesor comercial",
      "1 hora de capacitación para tu equipo",
      "Monitoreo continuo y 2 ajustes mensuales de texto",
    ],
    ctaText: "Elegir Plan Start",
    whatsappMessage:
      "Hola NexoBite. Me interesa el Plan Start de atención para mi negocio. Quiero coordinar la implementación.",
  },
  {
    id: "sales",
    name: "02 · SALES",
    subtitle: "Sistema Comercial de Calificación",
    target: "Para empresas de servicios y B2B con flujo de consultas que necesitan filtrar prospectos y agendar citas solas.",
    setupPrice: "$1.890.000",
    monthlyPrice: "$220.000",
    timeframe: "10 a 14 días hábiles",
    highlighted: true,
    badge: "MÁS ELEGIDO · RECOMENDADO PARA B2B",
    features: [
      "Todo lo incluido en el Plan Start",
      "Asistente conversacional con base de conocimiento",
      "Filtro avanzado de presupuesto y urgencia",
      "Agendamiento automático en Google Calendar/Calendly",
      "Registro automático de prospectos en base de datos",
      "Secuencia de seguimiento automático a las 24 horas",
      "Optimización mensual de respuestas y soporte < 4h",
    ],
    ctaText: "Elegir Plan Sales",
    whatsappMessage:
      "Hola NexoBite. Me interesa el Plan Sales (Calificación y Agendamiento). Quiero revisar si se adapta a mi flujo comercial.",
  },
  {
    id: "scale",
    name: "03 · SCALE",
    subtitle: "Ecosistema Integral (Web + Chatbot + CRM)",
    target: "Para empresas que buscan una máquina comercial completa: captar en la web, atender en WhatsApp y centralizar en CRM.",
    setupPrice: "$3.490.000",
    monthlyPrice: "$290.000",
    timeframe: "20 a 25 días hábiles",
    highlighted: false,
    badge: "SOLUCIÓN TODO EN UNO",
    features: [
      "Sitio Web o Landing Page a medida en Next.js",
      "Sistema de WhatsApp Nivel SALES conectado a la web",
      "Integración con CRM Comercial (Kommo / HubSpot)",
      "Alertas automáticas de ventas a tu equipo",
      "Diseño responsive, SEO técnico y hosting primer año",
      "2 horas de capacitación comercial al equipo de ventas",
      "Mantenimiento integral de web, servidor y soporte < 2h",
    ],
    ctaText: "Elegir Plan Scale",
    whatsappMessage:
      "Hola NexoBite. Me interesa el Plan Scale integral (Web + WhatsApp + CRM). Quiero agendar un diagnóstico de mi proyecto.",
  },
];

const featureComparison = [
  { name: "Conexión WhatsApp (oficial o económica)", start: "✓ (1 línea)", sales: "✓ (1 línea)", scale: "✓ (1 línea)" },
  { name: "Respuestas automáticas fuera de horario", start: "✓", sales: "✓", scale: "✓" },
  { name: "Respuestas a dudas y catálogos", start: "Hasta 15", sales: "Ilimitadas", scale: "Ilimitadas" },
  { name: "Calificación avanzada con IA", start: "—", sales: "✓", scale: "✓" },
  { name: "Agendamiento en Calendario", start: "—", sales: "✓", scale: "✓" },
  { name: "Seguimiento automático a prospectos", start: "—", sales: "✓", scale: "✓" },
  { name: "Desarrollo Web / Landing Page", start: "—", sales: "—", scale: "✓ (Hasta 6 secciones)" },
  { name: "Integración con CRM Comercial", start: "—", sales: "Google Sheets", scale: "CRM Dedicado" },
  { name: "Tiempo de Implementación", start: "5–7 días", sales: "10–14 días", scale: "20–25 días" },
  { name: "Mantenimiento e infraestructura", start: "$140.000/mes", sales: "$220.000/mes", scale: "$290.000/mes" },
];

type ConnectionId = "economica" | "oficial";

/**
 * Las dos formas de conectar WhatsApp. Los precios de los planes son los mismos;
 * lo que cambia es el riesgo, los costos de Meta y la verificación requerida.
 * TODO (Usuario): si la conexión oficial tiene un recargo de implementación o mensual,
 * defínelo en `priceNote` y se mostrará bajo el selector.
 */
const connections: {
  id: ConnectionId;
  label: string;
  tag: string;
  summary: string;
  points: { ok: boolean; text: string }[];
  priceNote: string | null;
  whatsappText: string;
}[] = [
  {
    id: "economica",
    label: "Conexión económica",
    tag: "BAJO COSTO",
    summary: "Vinculas tu número escaneando un código, sin trámites con Meta.",
    points: [
      { ok: true, text: "Sin costos de mensajería de Meta" },
      { ok: true, text: "Puesta en marcha rápida, sin verificación de empresa" },
      { ok: false, text: "No es la API oficial: WhatsApp puede restringir o bloquear el número" },
      { ok: false, text: "Sin botones ni plantillas oficiales de Meta" },
    ],
    priceNote: null,
    whatsappText: "Prefiero la conexión económica.",
  },
  {
    id: "oficial",
    label: "API oficial de Meta",
    tag: "RECOMENDADA PARA OPERACIÓN CRÍTICA",
    summary: "WhatsApp Business Platform: la vía autorizada por Meta.",
    points: [
      { ok: true, text: "Número protegido contra bloqueos por uso automatizado" },
      { ok: true, text: "Plantillas, botones y listas oficiales" },
      { ok: true, text: "Estabilidad y soporte directo de Meta" },
      { ok: false, text: "Meta cobra por conversación (se paga aparte, en tu cuenta)" },
      { ok: false, text: "Requiere verificación del negocio con Meta" },
    ],
    priceNote: null,
    whatsappText: "Prefiero la API oficial de Meta.",
  },
];

export function PricingSection() {
  const [showMatrix, setShowMatrix] = useState(false);
  const [connectionId, setConnectionId] = useState<ConnectionId>("economica");
  const connection = connections.find((c) => c.id === connectionId) ?? connections[0];

  return (
    <section id="precios" className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3 text-center">
            <span className="eyebrow">07 · INVERSIÓN TRANSPARENTE Y PLANES</span>
          </div>
          <h2 className="mb-4 text-center text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Planes profesionales con{" "}
            <span className="text-signal">alcance e inversión definidos</span>
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-pretty text-base text-ink-soft">
            Precios netos en pesos colombianos (COP). Sin costes ocultos ni promociones artificiales. Desglosamos claramente la implementación inicial del soporte mensual.
          </p>
        </AnimatedSection>

        {/* Selector de conexión de WhatsApp */}
        <AnimatedSection delay={100}>
          <div className="mx-auto mb-10 max-w-3xl">
            <div
              role="radiogroup"
              aria-label="Tipo de conexión de WhatsApp"
              className="grid grid-cols-2 gap-2 rounded-md border border-line bg-paper-deep/70 p-1"
            >
              {connections.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="radio"
                  aria-checked={c.id === connectionId}
                  onClick={() => setConnectionId(c.id)}
                  className={`rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                    c.id === connectionId
                      ? "bg-card text-ink border border-signal/50"
                      : "text-ink-soft hover:text-ink border border-transparent"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-line bg-card p-5" aria-live="polite">
              <div className="mb-1 inline-flex items-center gap-1.5 rounded-sm border border-copper/40 bg-copper-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-copper">
                {connection.tag}
              </div>
              <p className="mb-3 text-sm text-ink-soft">{connection.summary}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {connection.points.map((p) => (
                  <li key={p.text} className="flex items-start gap-2 text-xs text-ink-soft">
                    {p.ok ? (
                      <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                    ) : (
                      <FaTimes className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" />
                    )}
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
              {connection.priceNote && (
                <p className="mt-3 border-t border-line pt-3 font-mono text-xs text-signal">
                  {connection.priceNote}
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* 3 Planes con Jerarquía Asimétrica */}
        <AnimatedSection delay={150}>
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`relative rounded-md flex flex-col justify-between p-6 sm:p-8 transition-all ${
                  p.highlighted
                    ? "instrument border border-signal bg-card shadow-xl lg:-translate-y-2"
                    : "border border-line bg-paper-deep/70 hover:border-line-strong"
                }`}
              >
                <div>
                  {p.badge && (
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-sm border border-signal/40 bg-signal-soft px-2.5 py-0.5 font-mono text-[10px] font-semibold text-signal">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal inline-block" />
                      {p.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="text-xs font-mono text-copper mt-1">
                    {p.subtitle}
                  </p>
                  <p className="text-xs text-ink-soft mt-3 leading-relaxed min-h-[40px]">
                    {p.target}
                  </p>

                  {/* Precios desglosados */}
                  <div className="my-6 py-5 border-y border-line space-y-1">
                    <span className="font-mono text-xs text-ink-mute block">
                      Implementación (Pago único):
                    </span>
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-ink tnum tracking-tight">
                      {p.setupPrice}
                      <span className="text-xs font-mono text-ink-mute font-normal ml-1">
                        COP
                      </span>
                    </div>
                    <span className="font-mono text-xs text-signal block pt-1.5">
                      + {p.monthlyPrice} COP / mes (Servidor y soporte)
                    </span>
                    <span className="font-mono text-[11px] text-ink-mute block pt-1">
                      ⏱ Entrega: {p.timeframe}
                    </span>
                  </div>

                  {/* Lista de Entregables */}
                  <div className="space-y-2.5 mb-8">
                    <span className="font-mono text-xs text-ink-mute uppercase tracking-wider block mb-2">
                      Qué incluye:
                    </span>
                    {p.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-soft">
                        <FaCheck className="h-3.5 w-3.5 text-signal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <Button
                    variant={p.highlighted ? "signal" : "outline"}
                    className="w-full rounded-sm font-medium"
                    asChild
                  >
                    <a
                      href={`https://wa.me/+573009459026?text=${encodeURIComponent(
                        `${p.whatsappMessage} ${connection.whatsappText}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-event="whatsapp_click"
                    >
                      {p.ctaText}
                      <FaArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Botón para alternar la Matriz Comparativa */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMatrix((prev) => !prev)}
            className="text-xs font-mono text-ink-soft hover:text-signal underline decoration-signal/40 underline-offset-4 transition-colors"
          >
            {showMatrix
              ? "▲ Ocultar tabla comparativa detallada"
              : "▼ Ver matriz comparativa técnica entre planes"}
          </button>
        </div>

        {/* Matriz Comparativa Detallada */}
        {showMatrix && (
          <AnimatedSection delay={100}>
            <div className="mt-8 overflow-x-auto rounded-md border border-line bg-card">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-line bg-card-hover font-mono uppercase text-ink-mute">
                  <tr>
                    <th className="py-3 px-4 font-medium">Capacidad / Entregable</th>
                    <th className="py-3 px-4 font-medium text-center">01 · START</th>
                    <th className="py-3 px-4 font-medium text-center text-signal">
                      02 · SALES
                    </th>
                    <th className="py-3 px-4 font-medium text-center">03 · SCALE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line font-mono">
                  {featureComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/40">
                      <td className="py-3 px-4 text-ink font-sans font-medium">
                        {row.name}
                      </td>
                      <td className="py-3 px-4 text-center text-ink-soft">
                        {row.start}
                      </td>
                      <td className="py-3 px-4 text-center text-signal bg-signal-soft/30 font-semibold">
                        {row.sales}
                      </td>
                      <td className="py-3 px-4 text-center text-ink-soft">
                        {row.scale}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
