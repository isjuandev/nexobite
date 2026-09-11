"use client";

import { FaCommentDots, FaLightbulb, FaRocket } from "react-icons/fa";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { Container } from "@/components/container";
const steps = [
  {
    icon: FaCommentDots,
    step: "01",
    title: "Entendemos tu operación",
    description:
      "Analizamos cómo llegan tus clientes y dónde se generan cuellos de botella.",
  },
  {
    icon: FaLightbulb,
    step: "02",
    title: "Diseñamos la automatización",
    description:
      "Definimos flujos de respuesta y organización adaptados a tu negocio.",
  },
  {
    icon: FaRocket,
    step: "03",
    title: "Implementamos y optimizamos",
    description:
      "Dejas de depender de respuestas manuales y empiezas a trabajar con un sistema más eficiente.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative border-b border-line bg-paper py-24 sm:py-32 overflow-hidden"
    >
      <ParticleField variant="subtle" density="low" speed="slow" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <span className="eyebrow">02 · DESPLIEGUE Y OPERACIÓN</span>
          </div>
          <h2 className="mb-4 text-center text-3xl font-semibold text-ink sm:text-4xl">
            Implementación calibrada en{" "}
            <span className="text-signal">tres fases exactas</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-base text-ink-soft">
            Flujo estructurado, sin ambigüedad técnica y con foco en resultados desde el primer día.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 150}>
              <div className="relative">
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-6 hidden h-px w-full bg-line-strong md:block"
                    style={{ width: "calc(100% - 48px)", left: "48px" }}
                  />
                )}
                <div className="group relative flex flex-col items-center text-center md:items-start md:text-left px-4">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-signal-soft border border-signal/30">
                    <step.icon className="h-5 w-5 text-signal" />
                  </div>
                  <div className="mb-2 inline-flex items-center gap-1 font-mono text-[11px] text-copper px-2 py-0.5 rounded-sm bg-card border border-line">
                    STAGE {step.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
