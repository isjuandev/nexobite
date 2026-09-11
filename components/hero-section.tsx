"use client";

import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/particle-field";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16">
      <ParticleField variant="primary" density="medium" speed="slow" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-signal/5 via-card/10 to-paper pointer-events-none" />

      <Container className="relative z-10" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <AnimatedSection>
              <div className="mb-4 flex items-center gap-3">
                <span className="eyebrow">SYS.STATUS · OPERATIONAL</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Cada mensaje se enruta con la{" "}
                <span className="text-signal font-bold">misma precisión</span>,
                sin importar el canal.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mb-8 max-w-xl text-pretty text-base text-ink-soft sm:text-lg leading-relaxed">
                NexoBite automatiza tu WhatsApp y canales de venta como una capa de
                infraestructura técnica: respuestas en segundos, cualificación
                exacta y seguimiento continuo sin fricción.
              </p>
              <div className="mb-8 flex flex-wrap gap-2.5">
                <span className="badge b-active">
                  <i />
                  tenant_id aislado
                </span>
                <span className="badge b-completed">
                  <i />
                  p95 118ms
                </span>
                <span className="badge b-waiting">
                  <i />
                  24/7 SLA garantizado
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
                  <a
                    href="https://wa.me/+573009459026?text=Hola,%20quiero%20revisar%20c%C3%B3mo%20estoy%20gestionando%20mis%20mensajes%20y%20si%20puedo%20mejorarlo."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a href="#services">Ver arquitectura de servicios</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5">
            <AnimatedSection delay={250}>
              <div className="instrument rounded-md border border-line bg-card p-1.5 shadow-sm">
                <div className="flex justify-between items-center px-4 py-3 border-b border-line bg-card/60">
                  <span className="flex items-center text-xs font-mono text-ink-mute">
                    <span className="w-2 h-2 rounded-full bg-signal inline-block mr-2 shadow-[0_0_0_3px_var(--signal-soft)] animate-pulse" />
                    QUEUE MONITOR
                  </span>
                  <span className="font-mono text-xs text-ink-mute">nx_8f21a</span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-line">
                  <div className="bg-card p-4">
                    <label className="font-mono text-[10px] text-ink-mute uppercase tracking-wider block mb-1.5">
                      Mensajes/seg
                    </label>
                    <div className="font-display font-extrabold text-3xl text-ink tnum">
                      42<small className="font-mono font-normal text-xs text-ink-mute ml-1">/s</small>
                    </div>
                  </div>
                  <div className="bg-card p-4">
                    <label className="font-mono text-[10px] text-ink-mute uppercase tracking-wider block mb-1.5">
                      Latencia p95
                    </label>
                    <div className="font-display font-extrabold text-3xl text-copper tnum">
                      118<small className="font-mono font-normal text-xs text-ink-mute ml-1">ms</small>
                    </div>
                  </div>
                  <div className="bg-card p-4">
                    <label className="font-mono text-[10px] text-ink-mute uppercase tracking-wider block mb-1.5">
                      Canales activos
                    </label>
                    <div className="font-display font-extrabold text-3xl text-ink tnum">
                      04
                    </div>
                  </div>
                  <div className="bg-card p-4">
                    <label className="font-mono text-[10px] text-ink-mute uppercase tracking-wider block mb-1.5">
                      Uptime SLA
                    </label>
                    <div className="font-display font-extrabold text-3xl text-signal tnum">
                      99.98<small className="font-mono font-normal text-xs text-ink-mute ml-1">%</small>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Ruler de calibración técnica */}
        <div className="ruler mt-14" aria-hidden="true">
          {Array.from({ length: 70 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
