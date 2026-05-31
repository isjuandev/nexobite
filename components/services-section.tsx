"use client";

import { FaRobot, FaGlobeAmericas, FaCode } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { Container } from "@/components/container";

const services = [
  {
    icon: FaRobot,
    title: "ChatBots con IA",
    description:
      "Automatiza tus conversaciones en WhatsApp o Instagram para responder al instante, organizar clientes y no dejar oportunidades sin seguimiento.",
    category: "Software",
  },
  {
    icon: FaGlobeAmericas,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web pensados para convertir visitas en ventas, integrados con WhatsApp o Instagram y optimizados para rendimiento.",
    category: "Software",
  },
  {
    icon: FaCode,
    title: "Software a Medida",
    description:
      "Desarrollamos herramientas que automatizan tareas repetitivas y te permiten operar con más control y menos fricción.",
    category: "Software",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden border-b border-border/50"
    >
      <ParticleField variant="accent" density="medium" speed="slow" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="brand-kicker mb-4 text-sm font-medium uppercase tracking-wider">
            Qué hacemos
          </div>
          <h2 className="mb-4 max-w-2xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
            <span className="brand-highlight">
              Soluciones diseñadas para convertir más,
            </span>{" "}
            no solo para “estar online”
          </h2>
          <p className="mb-16 max-w-2xl text-pretty text-lg text-muted-foreground">
            Trabajamos contigo para mejorar cómo llegan, se gestionan y se
            convierten tus clientes. Sin intermediarios y con foco en
            resultados reales.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mb-8">
            <h3 className="brand-highlight mb-6 text-xl font-bold">
              Desarrollo y Automatización
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === "Software")
                .map((service) => (
                  <Card
                    key={service.title}
                    className="group hover-lift border-border/50 bg-card/50 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:bg-card"
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary transition-all duration-300 group-hover:scale-110">
                        <service.icon className="h-6 w-6 text-foreground transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-foreground">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
