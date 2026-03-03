"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/particle-field";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <ParticleField variant="primary" density="high" speed="medium" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <Container className="relative z-10" size="md">
        <div className="text-center">
          <AnimatedSection>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-linear-to-r from-primary to-accent" />
              <span className="text-sm font-medium bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Soluciones Digitales Inteligentes
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Transformamos la{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                presencia digital
              </span>{" "}
              de tu negocio
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Somos una{" "}
              <span className="text-foreground font-medium">
                agencia de marketing digital y desarrollo web
              </span>{" "}
              en Colombia. Combinamos{" "}
              <span className="text-foreground font-medium">
                chatbots inteligentes con IA
              </span>
              , automatización y contenido visual de alto impacto para PYMEs y
              emprendedores que quieren vender más.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="gradient" asChild className="group">
                <a
                  href="https://wa.me/+573009459026?text=Hola!%20Quiero%20iniciar%20un%20proyecto%20con%20NexoBite%20y%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inicia tu Proyecto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover-lift bg-transparent border-accent/30 hover:border-accent hover:bg-accent/10"
              >
                <a href="#services">Ver Servicios</a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "100%", label: "Satisfacción del Cliente" },
                { value: "24/7", label: "Soporte IA" },
                { value: "2-3 sem", label: "Tiempo de Entrega" },
                { value: "3x", label: "ROI Promedio" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
