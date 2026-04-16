"use client";

import { useRef, useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { ParticleField } from "@/components/particle-field";

const categories = [
  {
    id: "chatbots",
    title: "Chatbots con IA",
    description:
      "Automatiza tu atención, convierte conversaciones en ventas y escala sin depender de tu equipo.",
    plans: [
      {
        name: "ESENCIAL",
        price: "$650.000",
        priceNote: "$120.000/mes",
        impact: "Deja de perder clientes y responde automáticamente 24/7",
        includes: [
          "Sistema base de atención automatizada en WhatsApp",
          "3 flujos diseñados para capturar y calificar leads",
          "Mensajes de bienvenida + respuestas automáticas inteligentes",
          "Integración directa con tu número de negocio",
          "1h de capacitación para uso y control del sistema",
          "Soporte en menos de 24h",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "AVANZADO",
        price: "$1.250.000",
        priceNote: "$200.000/mes",
        impact: "Convierte conversaciones en ventas con seguimiento automático",
        includes: [
          "Sistema de ventas automatizado en WhatsApp + Web",
          "6 flujos optimizados para conversión y cierre",
          "CRM integrado para seguimiento de prospectos",
          "Automatización de respuestas, filtros y oportunidades",
          "2h de capacitación operativa enfocada en ventas",
          "Reportes mensuales de rendimiento y oportunidades",
          "Soporte prioritario en menos de 4h",
        ],
        highlighted: true,
        savings: "Ahorras $250.000",
        originalPrice: "$1.500.000",
      },
      {
        name: "PREMIUM",
        price: "$2.100.000",
        priceNote: "$330.000/mes",
        impact: "Escala tu negocio con un sistema de ventas automatizado y optimizado constantemente",
        includes: [
          "Ecosistema completo de automatización multi-canal",
          "Flujos ilimitados para ventas, soporte y retención",
          "WhatsApp + Instagram + Web integrados",
          "Dashboard con métricas clave de negocio (leads, conversiones, atención)",
          "Optimización mensual basada en datos reales",
          "Integraciones a medida con tus herramientas",
          "Gestor de cuenta dedicado",
          "Soporte en menos de 1h",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
    ],
  },
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Sitios web diseñados para atraer clientes, generar confianza y convertir visitas en ventas.",
    plans: [
      {
        name: "ESENCIAL",
        price: "$400.000",
        priceNote: "Landing",
        impact: "Empieza a captar clientes con una página clara y directa",
        includes: [
          "Landing page enfocada en conversión (4-5 secciones)",
          "Estructura diseñada para generar contactos",
          "Botón de WhatsApp con CTA directa",
          "Formulario de captura de leads",
          "Diseño responsive (móvil + escritorio)",
          "Dominio + hosting por 1 año",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "AVANZADO",
        price: "$750.000",
        priceNote: "Web Corporativa",
        impact: "Posiciona tu negocio y genera confianza para vender más",
        includes: [
          "Sitio web de 3-5 páginas con estructura comercial",
          "Secciones optimizadas para credibilidad y conversión",
          "Galería o portafolio para prueba social",
          "Formulario conectado a tu operación",
          "SEO optimizado para búsquedas locales",
          "Google Analytics configurado",
          "Dominio + hosting por 1 año",
        ],
        highlighted: true,
        savings: "Ahorras $112.500 (15%)",
        originalPrice: "$862.500",
      },
      {
        name: "PREMIUM",
        price: "$1.200.000",
        priceNote: "Alto impacto",
        impact: "Convierte tu web en un canal constante de adquisición de clientes",
        includes: [
          "Sitio de 6-10 páginas con arquitectura orientada a ventas",
          "SEO avanzado para posicionamiento y tráfico orgánico",
          "Blog estratégico para atraer clientes de forma continua",
          "Optimización de velocidad para mejorar conversión",
          "Integración de chat o contacto inmediato",
          "Estructura pensada para escalar marketing y campañas",
          "Dominio + hosting por 1 año",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
    ],
  },
];

export function MiniPlansSection() {
  const [selected, setSelected] = useState(categories[0].id);
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Slider efecto y scroll al plan destacado
  useEffect(() => {
    if (carouselRef.current) {
      const popularIndex = 4; // Segundo set, segundo elemento
      const cardWidth = carouselRef.current.scrollWidth / 9;
      carouselRef.current.scrollLeft =
        cardWidth * popularIndex - window.innerWidth * 0.075;
    }
    const observer = new window.IntersectionObserver(
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
  }, [selected]);

  return (
    <section
      id="mini-plans"
      className="relative py-24 border-b border-border/50"
    >
      <ParticleField variant="mixed" density="medium" speed="medium" />
      <Container className="relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Planes por Servicio
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Elige
            </span>{" "}
            cómo quieres empezar
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Puedes comenzar con un servicio puntual o construir un sistema más
            completo según tu etapa.
          </p>
        </AnimatedSection>

        {/* Category buttons */}
        <div className="mb-8 relative">
          {/* Gradientes indicadores en móvil */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background to-transparent pointer-events-none z-10" />

          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 md:justify-center snap-x snap-proximity">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 snap-center ${selected === cat.id
                  ? "bg-linear-to-r from-primary to-accent text-white shadow-md"
                  : "bg-card/40 text-muted-foreground hover:bg-card/60"
                  }`}
                aria-pressed={selected === cat.id}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Indicador de scroll en móvil */}
          <div className="md:hidden flex justify-center gap-1.5 mt-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`h-1 rounded-full transition-all duration-300 ${selected === cat.id
                  ? "w-6 bg-linear-to-r from-primary to-accent"
                  : "w-1 bg-muted"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Slider móvil y grilla desktop */}
        {categories
          .filter((c) => c.id === selected)
          .map((cat, cIndex) => (
            <AnimatedSection key={cat.id} delay={cIndex * 40}>
              <div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>

                {/* Mobile slider */}
                <div className="lg:hidden relative pt-2">
                  {/* Navigation Arrows */}
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
                      {[...cat.plans, ...cat.plans, ...cat.plans].map(
                        (p, index) => (
                          <div
                            key={`${p.name}-${index}`}
                            data-index={index}
                            className="snap-center shrink-0 w-[85vw] max-w-sm"
                          >
                            <Card
                              className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${p.highlighted
                                ? "border-accent bg-card shadow-lg shadow-accent/20"
                                : "border-border/50 bg-card/50"
                                }`}
                            >
                              {p.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                                  <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                                  <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                    Más Popular
                                  </span>
                                </div>
                              )}
                              <CardHeader>
                                <CardTitle className="text-foreground">
                                  {p.name}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground">
                                  {p.priceNote}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="flex-1">
                                <div className="mb-6 flex flex-col items-start gap-2">
                                  {p.originalPrice && (
                                    <div className="text-sm text-muted-foreground line-through">
                                      {p.originalPrice}
                                    </div>
                                  )}
                                  <span className="text-3xl font-bold text-foreground">
                                    {p.price}
                                  </span>
                                  {p.savings && (
                                    <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                                      ✓ {p.savings}
                                    </div>
                                  )}
                                </div>
                                <ul className="space-y-3">
                                  {p.includes.map((inc, i) => (
                                    <li
                                      key={inc + i}
                                      className="flex items-start gap-3"
                                    >
                                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                      <span className="text-sm text-muted-foreground">
                                        {inc}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                              <CardFooter>
                                <Button
                                  className="w-full"
                                  variant={
                                    p.highlighted ? "gradient" : "default"
                                  }
                                  asChild
                                >
                                  <a
                                    href={`https://wa.me/+573009459026?text=${encodeURIComponent(`Hola, me interesa el plan ${p.name} de ${cat.title}. Quiero confirmar si es adecuado para mi negocio.`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {p.highlighted ? "Quiero este plan" : "Quiero este plan"}
                                  </a>
                                </Button>
                              </CardFooter>
                            </Card>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  {/* Scroll Indicator */}
                  <div className="flex justify-center gap-2 mt-2">
                    {cat.plans.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (carouselRef.current) {
                            const cardWidth =
                              carouselRef.current.scrollWidth / 9;
                            const targetIndex = index + 3;
                            carouselRef.current.scrollTo({
                              left:
                                cardWidth * targetIndex -
                                window.innerWidth * 0.075,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                          ? "w-8 bg-linear-to-r from-primary to-accent"
                          : "w-2 bg-muted hover:bg-muted-foreground"
                          }`}
                        aria-label={`Ir a ${cat.plans[index].name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop grid */}
                <div className="hidden lg:grid gap-6 lg:grid-cols-3">
                  {cat.plans.map((p) => (
                    <Card
                      key={p.name}
                      className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${p.highlighted
                        ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30"
                        : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                        }`}
                    >
                      {p.highlighted && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                          <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            Más Popular
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-foreground">
                          {p.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {p.priceNote}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 flex flex-col items-start gap-2">
                          {p.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              {p.originalPrice}
                            </div>
                          )}
                          <span className="text-2xl font-bold text-foreground">
                            {p.price}
                          </span>
                          {p.savings && (
                            <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                              ✓ {p.savings}
                            </div>
                          )}
                        </div>
                        <ul className="space-y-3">
                          {p.includes.map((inc) => (
                            <li key={inc} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span className="text-sm text-muted-foreground">
                                {inc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          variant={p.highlighted ? "gradient" : "default"}
                          asChild
                        >
                          <a
                            href={`https://wa.me/+573009459026?text=${encodeURIComponent(`Hola, me interesa el plan ${p.name} de ${cat.title}. Quiero confirmar si es adecuado para mi negocio.`)}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {p.highlighted ? "Quiero este plan" : "Quiero este plan"}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
      </Container>
    </section>
  );
}
