"use client";

import { MessageSquare, Lightbulb, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { Container } from "@/components/container";
const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Entendemos tu operación",
    description:
      "Analizamos cómo llegan tus clientes y dónde se generan cuellos de botella.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Diseñamos la automatización",
    description:
      "Definimos flujos de respuesta y organización adaptados a tu negocio.",
  },
  {
    icon: Rocket,
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
      className="relative border-b border-border/50 bg-secondary/30 py-24 sm:py-32 overflow-hidden"
    >
      <ParticleField variant="subtle" density="low" speed="slow" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Cómo funciona
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Así implementamos
            </span>{" "}
            la automatización en tu negocio
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Proceso claro, sin complicaciones y enfocado en resultados desde el
            inicio.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 150}>
              <div className="relative">
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-12 hidden h-px w-full bg-border md:block"
                    style={{ width: "calc(100% - 48px)", left: "48px" }}
                  />
                )}
                <div className="group relative flex flex-col items-center text-center md:items-start md:text-left px-4">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/50">
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                    <step.icon className="relative z-10 h-6 w-6 text-white" />
                  </div>
                  <div className="mb-2 text-sm font-medium text-accent transition-colors duration-300 group-hover:text-accent">
                    {step.step}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
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
