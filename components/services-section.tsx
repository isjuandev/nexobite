"use client";

import { Bot, Globe, Share2, Camera, Video, Code } from "lucide-react";
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
    icon: Bot,
    title: "ChatBots con IA",
    description:
      "Asistente virtual 24/7 en WhatsApp que responde preguntas, agenda citas, envía cotizaciones y captura leads automáticamente.",
    category: "Software",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Páginas web modernas y responsivas: Portafolio, Blog, Tiendas en Línea. Optimizadas para SEO y dispositivos móviles.",
    category: "Software",
  },
  {
    icon: Code,
    title: "Software a Medida",
    description:
      "Aplicaciones web personalizadas con React, Next.js y .NET para automatizar y optimizar tus procesos de negocio.",
    category: "Software",
  },
  {
    icon: Share2,
    title: "Community Management",
    description:
      "Gestión de redes sociales, estrategia de contenido, calendario editorial y crecimiento orgánico de tu comunidad digital.",
    category: "Marketing",
  },
  {
    icon: Camera,
    title: "Fotografía de Producto",
    description:
      "Sesiones fotográficas profesionales para productos, servicios y marca. Edición y retoque de alta calidad.",
    category: "Marketing",
  },
  {
    icon: Video,
    title: "Producción de Video",
    description:
      "Producción de Reels y TikToks que capturan atención. Edición profesional con tendencias actuales.",
    category: "Marketing",
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
          <div className="mb-4 text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestros Servicios
          </div>
          <h2 className="mb-4 max-w-2xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Código + Creatividad
            </span>{" "}
            bajo un mismo techo
          </h2>
          <p className="mb-16 max-w-2xl text-pretty text-lg text-muted-foreground">
            Somos un equipo boutique que no terceriza nada. Hablas directo con
            quien hace el trabajo. Todo tu marketing digital en un solo lugar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mb-8">
            <h3 className="mb-6 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                        <service.icon className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-primary" />
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

        <AnimatedSection delay={200}>
          <div>
            <h3 className="mb-6 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Marketing y Contenido Digital
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === "Marketing")
                .map((service) => (
                  <Card
                    key={service.title}
                    className="group hover-lift border-border/50 bg-card/50 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:bg-card"
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                        <service.icon className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-primary" />
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
