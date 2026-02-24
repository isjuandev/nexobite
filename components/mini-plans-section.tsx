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
    title: "Chatbots Automatizados",
    description: "Setup único + mensualidad. Soporte y escalamiento incluidos.",
    plans: [
      {
        name: "STARTER",
        price: "$649.900",
        priceNote: "$119.900/mes",
        includes: [
          "3 flujos conversacionales",
          "Integración WhatsApp",
          "1h capacitación",
          "Soporte básico por email",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "BUSINESS",
        price: "$1.249.900",
        priceNote: "$199.900/mes",
        includes: [
          "6 flujos conversacionales",
          "WhatsApp + Web",
          "CRM básico integrado",
          "2h capacitación",
          "Soporte prioritario",
          "Reportes mensuales",
        ],
        highlighted: true,
        savings: "Ahorras $250.000",
        originalPrice: "$1.499.900",
      },
      {
        name: "ENTERPRISE",
        price: "$2.099.900",
        priceNote: "$329.900/mes",
        includes: [
          "Flujos ilimitados",
          "Multi-canal completo",
          "Reportes + BI dashboard",
          "Soporte 24/7 prioritario",
          "Gestor de cuenta dedicado",
          "Integraciones a medida",
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
    description: "Sitios profesionales optimizados para PyMEs colombianas.",
    plans: [
      {
        name: "BÁSICO",
        price: "$397.900",
        priceNote: "Landing / Vitrina",
        includes: [
          "1 página, 4-5 secciones",
          "Dominio + Hosting 1 año",
          "Botón WhatsApp directo",
          "Responsive móvil",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "PROFESIONAL",
        price: "$649.900",
        priceNote: "Web Corporativa",
        includes: [
          "3-5 páginas",
          "Dominio + Hosting 1 año",
          "Galería / portafolio",
          "Formulario de contacto",
          "SEO básico",
          "Google Analytics",
        ],
        highlighted: true,
        savings: "Ahorras $150.000",
        originalPrice: "$799.900",
      },
      {
        name: "EMPRESARIAL",
        price: "$1.099.900",
        priceNote: "Alto impacto",
        includes: [
          "6-10 páginas",
          "Dominio + Hosting 1 año",
          "SEO avanzado",
          "Blog integrado",
          "Chat en vivo",
          "Velocidad optimizada",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
    ],
  },
  {
    id: "cm",
    title: "Community Management",
    description: "Gestión mensual de redes, contenido y comunidad activa.",
    plans: [
      {
        name: "STARTER",
        price: "$429.900/mes",
        priceNote: "Presencia básica",
        includes: [
          "1 plataforma",
          "8 posts diseñados",
          "8 stories",
          "Respuesta a comentarios",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "GROWTH",
        price: "$719.900/mes",
        priceNote: "Crecimiento",
        includes: [
          "2 plataformas",
          "12 posts diseñados",
          "4 reels editados",
          "Informe mensual",
          "Estrategia de contenido",
          "Gestión de mensajes",
        ],
        highlighted: true,
        savings: "Ahorras $130.000/mes",
        originalPrice: "$849.900/mes",
      },
      {
        name: "SCALE",
        price: "$1.199.900/mes",
        priceNote: "Estrategia completa",
        includes: [
          "3 plataformas",
          "20 posts diseñados",
          "8 reels + TikToks",
          "Pauta básica incluida",
          "Estrategia + calendario",
          "Reunión mensual",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
    ],
  },
  {
    id: "foto",
    title: "Fotografía de Producto",
    description: "Sesiones, edición profesional y formatos para e‑commerce.",
    plans: [
      {
        name: "ESENCIAL",
        price: "$199.900",
        priceNote: "Hasta 5 productos",
        includes: [
          "10 fotos web entregadas",
          "Edición color y luz",
          "Fondo blanco o neutro",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "PROFESIONAL",
        price: "$399.900",
        priceNote: "Hasta 12 productos",
        includes: [
          "25 fotos entregadas",
          "Retoque básico",
          "Fondo personalizable",
          "Entrega en 48h",
          "Formato web + RRSS",
        ],
        highlighted: true,
        savings: "Ahorras $100.000",
        originalPrice: "$499.900",
      },
      {
        name: "CATÁLOGO",
        price: "$699.900",
        priceNote: "Hasta 25 productos",
        includes: [
          "50 fotos entregadas",
          "RAW + alta resolución",
          "Retoque avanzado",
          "Múltiples ángulos",
          "Catálogo digital PDF",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
    ],
  },
  {
    id: "video",
    title: "Producción de Video",
    description: "Reels, TikToks y contenido corto con edición profesional.",
    plans: [
      {
        name: "BÁSICO",
        price: "$199.900",
        priceNote: "3 videos",
        includes: [
          "3 videos editados",
          "Subtítulos incluidos",
          "Música libre de regalías",
        ],
        highlighted: false,
        savings: null,
        originalPrice: null,
      },
      {
        name: "CREADOR",
        price: "$449.900",
        priceNote: "6 videos",
        includes: [
          "6 videos editados",
          "Edición dinámica premium",
          "Música stock curada",
          "Subtítulos animados",
          "Formatos multi-plataforma",
        ],
        highlighted: true,
        savings: "Ahorras $100.000",
        originalPrice: "$549.900",
      },
      {
        name: "VIRAL",
        price: "$849.900",
        priceNote: "12 videos",
        includes: [
          "12 videos editados",
          "Guión y concepto incluido",
          "Edición premium",
          "Thumbnails diseñados",
          "Estrategia de publicación",
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
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Planes por Servicio
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Personaliza
            </span>{" "}
            tu estrategia digital
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Elige el servicio que necesitas y el plan que mejor se ajuste a tu
            negocio. Todos incluyen soporte y capacitación.
          </p>
        </AnimatedSection>

        {/* Category buttons */}
        <div className="mb-8 relative">
          {/* Gradientes indicadores en móvil */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 md:justify-center snap-x snap-proximity">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 snap-center ${selected === cat.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
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
                    ? "w-6 bg-gradient-to-r from-primary to-accent"
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
                <div className="mb-4">
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
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap z-10">
                                  ⭐ Más Popular
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
                                    href="https://wa.me/+573009459026"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {p.highlighted ? "Empezar ahora" : "Contactar"}
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
                            ? "w-8 bg-gradient-to-r from-primary to-accent"
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
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white shadow-lg">
                          ⭐ Más Popular
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
                            href="https://wa.me/+573009459026"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {p.highlighted ? "Empezar ahora" : "Contactar"}
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