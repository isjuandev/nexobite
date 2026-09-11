"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaCheck, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

type Category = (typeof categories)[number];

function MobilePlansCarousel({ category }: { category: Category }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [carouselRef, carouselApi] = useEmblaCarousel({
    loop: true,
    startIndex: 1,
  });

  const handleSelect = useCallback(() => {
    if (carouselApi) {
      setActiveIndex(carouselApi.selectedScrollSnap());
    }
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", handleSelect);
    carouselApi.on("reInit", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
      carouselApi.off("reInit", handleSelect);
    };
  }, [carouselApi, handleSelect]);

  return (
    <div className="relative pt-2 lg:hidden">
      <button
        type="button"
        onClick={() => carouselApi?.scrollPrev()}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/50 bg-card/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-card"
        aria-label="Anterior"
      >
        <FaChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        type="button"
        onClick={() => carouselApi?.scrollNext()}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/50 bg-card/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-card"
        aria-label="Siguiente"
      >
        <FaChevronRight className="h-6 w-6 text-foreground" />
      </button>

      <div ref={carouselRef} className="overflow-hidden pb-8">
        <div className="flex gap-6 px-4">
          {category.plans.map((plan) => (
            <div
              key={plan.name}
              className="min-w-0 shrink-0 basis-[85vw] max-w-sm"
            >
              <Card
                instrument={plan.highlighted}
                className={`group relative mt-4 flex h-full flex-col transition-all rounded-md p-5 ${
                  plan.highlighted
                    ? "border-signal/50 bg-card shadow-sm"
                    : "border-line bg-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border border-signal/40 bg-card px-2.5 py-0.5 shadow-xs font-mono text-[10px] font-semibold text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal inline-block" />
                    RECOMENDADO
                  </div>
                )}
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-ink text-base font-semibold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-ink-mute font-mono text-xs">
                    {plan.priceNote}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-0 pb-5">
                  <div className="mb-5 flex flex-col items-start gap-1">
                    {plan.originalPrice && (
                      <div className="font-mono text-xs text-ink-mute line-through">
                        {plan.originalPrice}
                      </div>
                    )}
                    <span className="text-3xl font-extrabold text-ink font-display tnum">
                      {plan.price}
                    </span>
                    {plan.savings && (
                      <div className="inline-flex items-center gap-1 rounded-sm border border-copper/30 bg-copper-soft px-2 py-0.5 font-mono text-[11px] font-medium text-copper mt-1">
                        ✓ {plan.savings}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-2.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <FaCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary-foreground" />
                        <span className="text-xs text-ink-soft leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-0">
                  <Button
                    className="w-full rounded-sm font-medium"
                    variant={plan.highlighted ? "signal" : "outline"}
                    asChild
                  >
                    <a
                      href={`https://wa.me/+573009459026?text=${encodeURIComponent(
                        `Hola, me interesa el plan ${plan.name} de ${category.title}. Quiero confirmar si es adecuado para mi negocio.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quiero este plan
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {category.plans.map((plan, index) => (
          <button
            type="button"
            key={plan.name}
            onClick={() => carouselApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
              ? "w-6 bg-signal"
              : "w-1.5 bg-line-strong hover:bg-ink-mute"
              }`}
            aria-label={`Ir a ${plan.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export function MiniPlansSection() {
  const [selected, setSelected] = useState(categories[0].id);

  return (
    <section
      id="mini-plans"
      className="relative py-24 border-b border-line bg-paper"
    >
      <ParticleField variant="subtle" density="low" speed="slow" />
      <Container className="relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <span className="eyebrow">03 · PLANES POR SERVICIO</span>
          </div>
          <h2 className="mb-4 text-center text-3xl font-semibold text-ink sm:text-4xl">
            Arquitectura y planes según tu{" "}
            <span className="text-signal">etapa operativa</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-pretty text-base text-ink-soft">
            Comienza con un flujo puntual o despliega el stack completo de atención y captación.
          </p>
        </AnimatedSection>

        {/* Category buttons */}
        <div className="mb-10 relative">
          <div className="mx-auto flex w-max gap-2 p-1 rounded-sm border border-line bg-card/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`rounded-sm px-4 py-1.5 text-xs font-mono transition-all duration-200 ${
                  selected === cat.id
                    ? "bg-ink text-paper font-semibold shadow-xs"
                    : "text-ink-mute hover:text-ink hover:bg-card"
                }`}
                aria-pressed={selected === cat.id}
              >
                {cat.title}
              </button>
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
                  <h3 className="text-lg font-semibold text-ink">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-ink-soft">
                    {cat.description}
                  </p>
                </div>

                <MobilePlansCarousel category={cat} />

                {/* Desktop grid */}
                <div className="hidden lg:grid gap-6 lg:grid-cols-3">
                  {cat.plans.map((p) => (
                    <Card
                      key={p.name}
                      instrument={p.highlighted}
                      className={`group relative flex h-full flex-col rounded-md p-6 transition-all ${
                        p.highlighted
                          ? "border-signal/50 bg-card shadow-sm"
                          : "border-line bg-card hover:border-line-strong"
                      }`}
                    >
                      {p.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border border-signal/40 bg-card px-2.5 py-0.5 shadow-xs font-mono text-[10px] font-semibold text-signal">
                          <span className="h-1.5 w-1.5 rounded-full bg-signal inline-block" />
                          RECOMENDADO
                        </div>
                      )}
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-ink text-base font-semibold">
                          {p.name}
                        </CardTitle>
                        <CardDescription className="text-ink-mute font-mono text-xs">
                          {p.priceNote}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 p-0 pb-6">
                        <div className="mb-5 flex flex-col items-start gap-1">
                          {p.originalPrice && (
                            <div className="font-mono text-xs text-ink-mute line-through">
                              {p.originalPrice}
                            </div>
                          )}
                          <span className="text-3xl font-extrabold text-ink font-display tnum">
                            {p.price}
                          </span>
                          {p.savings && (
                            <div className="inline-flex items-center gap-1 rounded-sm border border-copper/30 bg-copper-soft px-2 py-0.5 font-mono text-[11px] font-medium text-copper mt-1">
                              ✓ {p.savings}
                            </div>
                          )}
                        </div>
                        <ul className="space-y-3">
                          {p.includes.map((inc) => (
                            <li key={inc} className="flex items-start gap-2.5">
                              <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary-foreground" />
                              <span className="text-xs text-ink-soft leading-relaxed">
                                {inc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="p-0">
                        <Button
                          className="w-full rounded-sm font-medium"
                          variant={p.highlighted ? "signal" : "outline"}
                          asChild
                        >
                          <a
                            href={`https://wa.me/+573009459026?text=${encodeURIComponent(
                              `Hola, me interesa el plan ${p.name} de ${cat.title}. Quiero confirmar si es adecuado para mi negocio.`
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Quiero este plan
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
