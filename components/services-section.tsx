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
      className="relative py-24 sm:py-32 overflow-hidden border-b border-line"
    >
      <ParticleField variant="subtle" density="low" speed="slow" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">01 · ARQUITECTURA DE SERVICIOS</span>
          </div>
          <h2 className="mb-4 max-w-2xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Soluciones diseñadas para{" "}
            <span className="text-signal">enrutar y convertir</span>,
            no solo para "estar online"
          </h2>
          <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
            Infraestructura técnica para capturar, organizar y atender clientes
            sin fricción. Sin intermediarios, con SLA claro y foco en precisión operativa.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group border-line bg-card hover:border-signal/50 transition-all rounded-md p-5"
              >
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-signal-soft border border-signal/25">
                      <service.icon className="h-5 w-5 text-signal" />
                    </div>
                    <span className="font-mono text-[11px] text-ink-mute">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-ink text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-ink-soft text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
