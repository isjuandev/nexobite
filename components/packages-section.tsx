"use client";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";

const packages = [
  {
    name: "Lanzamiento Digital",
    description:
      "Empieza a atraer clientes y responder automáticamente desde el primer día.",
    impact:
      "Activa tu presencia digital y deja de perder oportunidades por falta de respuesta",
    price: "$892.500",
    originalPrice: "$1.050.000",
    savings: "Ahorras $157.500 (15%)",
    features: [
      "Sistema base de atención automatizada en WhatsApp",
      "Landing page enfocada en conversión (lista para captar leads)",
      "3 flujos para captura y calificación de prospectos",
      "Formulario + botón directo a WhatsApp",
      "Dominio + hosting por 1 año",
      "Capacitación para uso del sistema",
      "Plantillas de respuestas comerciales listas para usar",
      "Checklist de optimización para mejorar captación",
      "Entrega en 1-2 semanas",
    ],
    highlighted: false,
  },
  {
    name: "Sistema de Ventas",
    description:
      "Un sistema conectado para atraer, responder y convertir clientes de forma constante.",
    impact:
      "Convierte visitas y conversaciones en ventas con seguimiento automático",
    price: "$1.600.000",
    originalPrice: "$2.000.000",
    savings: "Ahorras $400.000 (20%)",
    features: [
      "Sistema de ventas automatizado (WhatsApp + Web)",
      "Sitio web corporativo optimizado para credibilidad y conversión",
      "6 flujos enfocados en cierre y seguimiento de leads",
      "CRM básico para organizar y no perder oportunidades",
      "Formulario + chat integrado para contacto inmediato",
      "SEO optimizado para atraer clientes locales",
      "Secuencias automáticas de seguimiento",
      "Reportes mensuales de conversaciones y conversiones",
      "Capacitación enfocada en uso comercial del sistema",
      "Entrega en 2-4 semanas",
    ],
    highlighted: true,
  },
  {
    name: "Escalamiento Automatizado",
    description:
      "Un ecosistema completo para crecer con procesos claros, automatizados y medibles.",
    impact:
      "Convierte tu negocio en una máquina de adquisición de clientes predecible",
    price: "$2.475.000",
    originalPrice: "$3.300.000",
    savings: "Ahorras $825.000 (25%)",
    features: [
      "Ecosistema completo multi-canal (WhatsApp + Web + Instagram)",
      "Sitio web de alto impacto con arquitectura orientada a ventas",
      "Flujos ilimitados para ventas, soporte y retención",
      "Automatizaciones avanzadas de seguimiento y recuperación de clientes",
      "Integraciones a medida con tus herramientas",
      "Dashboard con métricas clave de negocio",
      "Optimización mensual basada en datos",
      "Soporte prioritario + acompañamiento estratégico",
      "Entrega en 4-6 semanas",
    ],
    highlighted: false,
  },
];

export function PackagesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (carouselRef.current) {
      const popularIndex = 4;
      const cardWidth = carouselRef.current.scrollWidth / 9;
      carouselRef.current.scrollLeft =
        cardWidth * popularIndex - window.innerWidth * 0.075;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            const actualIndex = index % 3;
            setActiveIndex(actualIndex);
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0.6,
      }
    );

    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll("[data-index]");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      className="relative py-24 sm:py-32 overflow-hidden border-b border-border/50"
    >
      <ParticleField variant="mixed" density="high" speed="medium" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Paquetes Integrales
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Combina servicios
            </span>{" "}
            y simplifica tu crecimiento
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Integra desarrollo, automatización y contenido en un solo flujo de
            trabajo. Menos coordinación, más avance.
          </p>
        </AnimatedSection>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative pt-4">
          <button
            onClick={() => {
              if (carouselRef.current) {
                const cardWidth = carouselRef.current.scrollWidth / 9;
                const currentScroll = carouselRef.current.scrollLeft;
                carouselRef.current.scrollTo({
                  left: currentScroll - cardWidth,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            onClick={() => {
              if (carouselRef.current) {
                const cardWidth = carouselRef.current.scrollWidth / 9;
                const currentScroll = carouselRef.current.scrollLeft;
                carouselRef.current.scrollTo({
                  left: currentScroll + cardWidth,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          >
            <div className="flex gap-6 px-4">
              {[...packages, ...packages, ...packages].map((pkg, index) => (
                <div
                  key={`${pkg.name}-${index}`}
                  data-index={index}
                  className="snap-center shrink-0 w-[85vw] max-w-sm"
                >
                  <Card
                    className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${pkg.highlighted
                      ? "border-accent bg-card shadow-lg shadow-accent/20"
                      : "border-border/50 bg-card/50"
                      }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                        <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                        <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                          Más Popular
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-foreground">
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6 flex flex-col items-start gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                        <span className="text-3xl font-bold text-foreground">
                          {pkg.price}
                        </span>
                        <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                          ✓ {pkg.savings}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={`${feature}-${featureIndex}`}
                            className="flex items-start gap-3"
                          >
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={pkg.highlighted ? "gradient" : "outline"}
                        asChild
                      >
                        <a
                          href={`https://wa.me/+573009459026?text=${encodeURIComponent(`Hola, quiero empezar con el paquete ${pkg.name}. ¿Cómo seguimos?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pkg.highlighted ? "Empezar con este paquete" : "Empezar con este paquete"}
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / 9;
                    const targetIndex = index + 3;
                    carouselRef.current.scrollTo({
                      left: cardWidth * targetIndex - window.innerWidth * 0.075,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                  ? "w-8 bg-linear-to-r from-primary to-accent"
                  : "w-2 bg-muted hover:bg-muted-foreground"
                  }`}
                aria-label={`Ir a ${packages[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={index * 100}>
              <Card
                className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${pkg.highlighted
                  ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30"
                  : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                  }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                    <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                    <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      Más Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-foreground">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6 flex flex-col items-start gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      ✓ {pkg.savings}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={pkg.highlighted ? "gradient" : "default"}
                    asChild
                  >
                    <a
                      href={`https://wa.me/+573009459026?text=${encodeURIComponent(`Hola, quiero empezar con el paquete ${pkg.name}. ¿Cómo seguimos?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pkg.highlighted ? "Empezar con este paquete" : "Empezar con este paquete"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
