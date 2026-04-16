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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm hover-glow transition-all cursor-default">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
              <span className="text-sm font-medium bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Automatización de ventas para negocios
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Automatizamos tu{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                WhatsApp para que cada
              </span>{" "}
               mensaje tenga respuesta
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Implementamos{" "}
              <span className="text-foreground font-medium">
                chatbots y automatización
              </span>{" "}
              para que respondas en segundos, organices tus conversaciones {" "}
              <span className="text-foreground font-medium">
                y conviertas más contactos en clientes
              </span>
              , sin depender de estar siempre disponible.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="gradient" asChild className="group">
                <a
                  href="https://wa.me/+573009459026?text=Hola,%20quiero%20revisar%20c%C3%B3mo%20estoy%20gestionando%20mis%20mensajes%20y%20si%20puedo%20mejorarlo."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Revisar mi caso por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover-lift bg-transparent border-accent/30 hover:border-accent hover:bg-accent/10"
              >
                <a href="#services">Ver cómo funcionaría en mi negocio</a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "+3x", label: "Retorno promedio" },
                { value: "<5s", label: "Tiempo de respuesta" },
                { value: "7 días", label: "Implementación" },
                { value: "24/7", label: "Atención automática" },
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
