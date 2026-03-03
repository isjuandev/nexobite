"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { Container } from "@/components/container";

export function CtaSection() {
  return (
    <section className="relative border-b border-border/50 bg-secondary/30 py-24 sm:py-32 overflow-hidden">
      <ParticleField variant="primary" density="medium" speed="fast" />
      <Container className="relative z-10 text-center" size="md">
        <AnimatedSection>
          <div className="relative mb-6 inline-flex h-16 w-16 animate-float items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-accent/20">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent opacity-20 blur-xl" />
            <MessageCircle className="relative z-10 h-8 w-8 text-accent" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            ¿Listo para{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              impulsar tu negocio digital
            </span>
            ?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground">
            Agenda una consulta gratuita por WhatsApp con nuestro equipo.
            Te mostramos cómo un chatbot con IA o una página web profesional
            puede transformar tu negocio. Sin compromiso, sin letra pequeña.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Button size="lg" variant="gradient" asChild className="group">
            <a
              href="https://wa.me/+573009459026?text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita%20con%20NexoBite%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-white" />
              Chatea por WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
