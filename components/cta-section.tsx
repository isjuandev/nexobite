"use client";

import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { Container } from "@/components/container";

export function CtaSection() {
  return (
    <section className="relative border-b border-line bg-card/40 py-24 sm:py-32 overflow-hidden">
      <ParticleField variant="subtle" density="low" speed="slow" />
      <Container className="relative z-10 text-center" size="md">
        <AnimatedSection>
          <div className="mb-3 flex justify-center">
            <span className="eyebrow">05 · DIAGNÓSTICO DIRECTO</span>
          </div>
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-signal-soft border border-signal/30 text-signal">
            <FaWhatsapp className="h-6 w-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="mb-4 text-3xl font-semibold text-ink sm:text-4xl">
            Empieza a gestionar tus mensajes{" "}
            <span className="text-signal">
              con precisión técnica
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mx-auto mb-10 max-w-xl text-pretty text-base text-ink-soft">
            Revisamos tu flujo actual de mensajes y diseñamos la arquitectura
            de automatización adecuada para tu operación.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
            <a
              href="https://wa.me/+573009459026?text=Hola,%20quiero%20revisar%20mi%20caso%20y%20ver%20c%C3%B3mo%20puedo%20implementar%20esto%20en%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" />
              Hablar con un especialista
              <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
