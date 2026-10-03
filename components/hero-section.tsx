import { FaArrowRight, FaWhatsapp, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const whatsappUrl =
    siteConfig.contact.whatsappUrl ||
    "https://wa.me/+573009459026?text=Hola.%20Quiero%20revisar%20c%C3%B3mo%20gestionamos%20hoy%20nuestros%20mensajes%20en%20WhatsApp%20y%20ver%20c%C3%B3mo%20podemos%20automatizar%20la%20atenci%C3%B3n%20y%20el%20seguimiento.";

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-28 pb-16 border-b border-line">
      <Container className="relative z-10" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Copy y CTAs (Renderizado inmediato en SSR para garantizar LCP < 2.5s) */}
          <div className="lg:col-span-7 text-left">
            <div className="mb-4 flex items-center gap-2">
              <span className="eyebrow flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-signal inline-block" />
                SISTEMA COMERCIAL PARA WHATSAPP Y WEB
              </span>
            </div>

            {/* Elemento LCP: Renderizado de inmediato sin opacity-0 ni retrasos de hidratación JS */}
            <h1 className="mb-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[54px]">
              Tu negocio debería vender, no pasar el día{" "}
              <span className="text-signal">respondiendo mensajes</span>.
            </h1>

            <p className="mb-7 max-w-xl text-pretty text-base text-ink-soft sm:text-lg leading-relaxed">
              Automatizamos tus conversaciones en WhatsApp y tus canales de captación para responder al instante, calificar prospectos y organizar tu proceso comercial sin depender de tareas manuales.
            </p>

            <div className="mb-8 flex flex-wrap gap-2.5">
              <span className="badge b-active">
                <i />
                Respuesta inmediata 24/7
              </span>
              <span className="badge b-completed">
                <i />
                Calificación automática de prospectos
              </span>
              <span className="badge b-waiting">
                <i />
                Integrado a tu número actual
              </span>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="whatsapp_click"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Revisar mi caso por WhatsApp
                    <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-sm font-medium bg-card hover:border-ink hover:text-ink"
                >
                  <a href="#proceso">Ver cómo funciona el sistema</a>
                </Button>
              </div>
              <p className="mt-3 text-xs font-mono text-ink-mute">
                Sin costo · Diagnóstico directo de tu flujo actual en 15 minutos.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Mockup Visual de Demostración (WhatsApp + Calificación) */}
          <div className="lg:col-span-5">
            <div className="instrument rounded-md border border-line bg-card shadow-lg overflow-hidden">
              {/* Header del Mockup */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-card-hover">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
                  </span>
                  <span className="font-mono text-xs font-medium text-ink">
                    WhatsApp Cloud API
                  </span>
                </div>
                <span className="font-mono text-[11px] text-ink-mute px-2 py-0.5 rounded-sm bg-paper border border-line">
                  24/7 ONLINE
                </span>
              </div>

              {/* Conversación Real Simulada */}
              <div className="p-4 space-y-3.5 text-xs bg-paper-deep/60 min-h-[300px] flex flex-col justify-center">
                {/* Mensaje entrante de cliente */}
                <div className="flex flex-col items-start gap-1">
                  <span className="font-mono text-[10px] text-ink-mute pl-1">
                    10:42 PM · Prospecto entrante
                  </span>
                  <div className="bg-card border border-line rounded-md rounded-tl-none p-3 max-w-[85%] text-ink leading-relaxed">
                    Hola, quiero cotizar la automatización de atención para mi empresa.
                  </div>
                </div>

                {/* Respuesta del asistente con filtro */}
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-[10px] text-signal pr-1">
                    10:42 PM · Asistente NexoBite (&lt; 2s)
                  </span>
                  <div className="bg-signal-soft border border-signal/30 rounded-md rounded-tr-none p-3 max-w-[90%] text-ink leading-relaxed">
                    <p className="mb-2">
                      ¡Hola! Con gusto te oriento. Para calcular el flujo adecuado: ¿cuántas consultas reciben al día?
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="px-2 py-1 rounded-sm bg-card border border-line text-[11px] text-ink-soft">
                        1. Menos de 30 msgs
                      </span>
                      <span className="px-2 py-1 rounded-sm bg-signal/20 border border-signal text-[11px] text-ink font-medium">
                        2. 30 a 100 msgs ✓
                      </span>
                    </div>
                  </div>
                </div>

                {/* Agendamiento automático */}
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-[10px] text-signal pr-1">
                    10:43 PM · Asistente NexoBite
                  </span>
                  <div className="bg-signal-soft border border-signal/30 rounded-md rounded-tr-none p-3 max-w-[90%] text-ink leading-relaxed">
                    <p className="mb-1.5 font-medium text-ink">
                      Excelente. Calificas para atención prioritaria.
                    </p>
                    <p className="text-ink-soft text-[11px]">
                      ¿Te reservo espacio para una demo personalizada mañana?
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-card border border-copper/50 text-copper font-mono text-[11px]">
                      📅 Horario elegido: Mañana 3:30 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer de Integración CRM */}
              <div className="p-3 border-t border-line bg-card/90 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-mute">
                  <span className="text-copper">SISTEMA INTEGRADO</span>
                  <span className="text-signal">EVENTOS CONFIRMADOS</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-ink-soft bg-paper px-2 py-1 rounded-sm border border-line">
                    <FaCheck className="h-3 w-3 text-signal shrink-0" />
                    <span className="truncate">Lead creado en CRM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-ink-soft bg-paper px-2 py-1 rounded-sm border border-line">
                    <FaCheck className="h-3 w-3 text-signal shrink-0" />
                    <span className="truncate">Cita en Google Calendar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
