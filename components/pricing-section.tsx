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
    subtitle: "Respuesta Inmediata a tus Clientes",
    target: "Para negocios locales y profesionales que pierden clientes por responder tarde o fuera de horario.",
    setupPrice: "$1.190.000",
    monthlyPrice: "$140.000",
    timeframe: "5 a 7 días hábiles",
    highlighted: false,
    badge: null,
    features: [
      "Funciona con 1 número de WhatsApp (oficial o económico)",
      "Saludo automático y menú de opciones claro",
      "Hasta 15 respuestas a las preguntas más comunes",
      "Pide los datos básicos (nombre, qué necesita, ciudad)",
      "Pasa el chat directo a tu asesor",
      "1 hora de capacitación para tu equipo",
      "Vigilamos que todo funcione y cambiamos textos 2 veces al mes",
    ],
    ctaText: "Elegir Plan Start",
    whatsappMessage:
      "Hola NexoBite. Me interesa el Plan Start de atención para mi negocio. Quiero coordinar la implementación.",
  },
  {
    id: "sales",
    name: "02 · SALES",
    subtitle: "Ventas y Citas Automáticas",
    target: "Para empresas de servicios que reciben muchas consultas y quieren saber quién sí va a comprar y agendar citas sin esfuerzo.",
    setupPrice: "$1.890.000",
    monthlyPrice: "$220.000",
    timeframe: "10 a 14 días hábiles",
    highlighted: true,
    badge: "MÁS ELEGIDO · IDEAL PARA EMPRESAS DE SERVICIOS",
    features: [
      "Todo lo incluido en el Plan Start",
      "Asistente que conoce tu negocio y responde como tú",
      "Identifica quién tiene presupuesto y prisa por comprar",
      "Agenda las citas solo, directo en tu calendario",
      "Guarda cada cliente interesado automáticamente",
      "Vuelve a escribirle al cliente a las 24 horas",
      "Mejoramos las respuestas cada mes y te atendemos en menos de 4 horas",
    ],
    ctaText: "Elegir Plan Sales",
    whatsappMessage:
      "Hola NexoBite. Me interesa el Plan Sales (ventas y citas automáticas). Quiero revisar si se adapta a mi negocio.",
  },
  {
    id: "scale",
    name: "03 · SCALE",
    subtitle: "Todo en Uno (Página Web + WhatsApp + Registro de Clientes)",
    target: "Para empresas que quieren todo resuelto: conseguir clientes en la web, atenderlos en WhatsApp y tenerlos ordenados en un solo lugar.",
    setupPrice: "$3.490.000",
    monthlyPrice: "$290.000",
    timeframe: "20 a 25 días hábiles",
    highlighted: false,
    badge: "SOLUCIÓN TODO EN UNO",
    features: [
      "Página web hecha a tu medida, rápida y moderna",
      "Todo lo del Plan Sales, conectado a tu página web",
      "Tus clientes organizados en un sistema de ventas profesional",
      "Aviso inmediato a tu equipo cuando llega un cliente",
      "Se ve bien en celular, te encuentran en Google y el primer año de alojamiento va incluido",
      "2 horas de capacitación para tu equipo de ventas",
      "Mantenimiento de tu web y tu sistema, con atención en menos de 2 horas",
    ],
    ctaText: "Elegir Plan Scale",
    whatsappMessage:
      "Hola NexoBite. Me interesa el Plan Scale (Página web + WhatsApp + registro de clientes). Quiero agendar una revisión de mi caso.",
  },
];

const featureComparison = [
  { name: "Conexión de WhatsApp (oficial o económica)", start: "✓ (1 línea)", sales: "✓ (1 línea)", scale: "✓ (1 línea)" },
  { name: "Respuestas automáticas fuera de horario", start: "✓", sales: "✓", scale: "✓" },
  { name: "Respuestas a dudas y catálogos", start: "Hasta 15", sales: "Ilimitadas", scale: "Ilimitadas" },
  { name: "Detecta quién sí quiere comprar", start: "—", sales: "✓", scale: "✓" },
  { name: "Citas automáticas en tu calendario", start: "—", sales: "✓", scale: "✓" },
  { name: "Seguimiento automático a interesados", start: "—", sales: "✓", scale: "✓" },
  { name: "Página web hecha a tu medida", start: "—", sales: "—", scale: "✓ (Hasta 6 secciones)" },
  { name: "Registro y orden de tus clientes", start: "—", sales: "Hoja simple", scale: "Sistema de ventas completo" },
  { name: "Tiempo para dejarlo listo", start: "5–7 días", sales: "10–14 días", scale: "20–25 días" },
  { name: "Mantenimiento mensual", start: "$140.000/mes", sales: "$220.000/mes", scale: "$290.000/mes" },
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
    summary: "Conectas tu número escaneando un código, sin trámites con WhatsApp.",
    points: [
      { ok: true, text: "Sin cobros extra de WhatsApp por mensajes" },
      { ok: true, text: "Listo rápido, sin verificar tu empresa" },
      { ok: false, text: "No es la vía oficial: WhatsApp podría limitar o bloquear tu número" },
      { ok: false, text: "Sin botones ni mensajes preaprobados de WhatsApp" },
    ],
    priceNote: null,
    whatsappText: "Prefiero la conexión económica.",
  },
  {
    id: "oficial",
    label: "Conexión oficial de WhatsApp",
    tag: "RECOMENDADA SI WHATSAPP ES CLAVE PARA TUS VENTAS",
    summary: "La vía autorizada por WhatsApp (Meta), la más segura.",
    points: [
      { ok: true, text: "Tu número protegido contra bloqueos" },
      { ok: true, text: "Botones, listas y mensajes oficiales de WhatsApp" },
      { ok: true, text: "Más estable y con soporte de WhatsApp" },
      { ok: false, text: "WhatsApp cobra por conversación (se paga aparte, en tu cuenta)" },
      { ok: false, text: "Hay que verificar tu negocio ante WhatsApp" },
    ],
    priceNote: null,
    whatsappText: "Prefiero la conexión oficial de WhatsApp.",
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
            Planes claros con{" "}
            <span className="text-signal">lo que incluyen y lo que cuestan</span>
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-pretty text-base text-ink-soft">
            Precios netos en pesos colombianos (COP). Sin costos ocultos. Te separamos claramente lo que pagas una sola vez para dejarlo listo y lo que pagas cada mes para mantenerlo funcionando.
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
                      Dejarlo listo (pago único):
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
              : "▼ Comparar los planes en detalle"}
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
