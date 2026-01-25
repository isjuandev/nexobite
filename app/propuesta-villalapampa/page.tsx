"use client";

import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/particle-field";
import { Check, ChevronLeft, ChevronRight, Crown, Star, Sparkles } from "lucide-react";

const proposals = [
  {
    id: "basic",
    name: "Lanzamiento Digital",
    description: "Transforme su alojamiento con tecnología inteligente",
    price: "$1.699.900",
    priceNote: "IVA incluido - Pago único",
    highlighted: false,
    features: [
      "Landing Page Profesional (3-5 Secciones)",
      "Secciones: Inicio, Habitaciones, Servicios, Ubicación, Contacto",
      "Diseño responsivo optimizado",
      "Dominio + Hosting Premium (1 año incluido)",
      "Formulario de contacto y reservas",
      "ChatBot - WhatsApp 3 flujos conversacionales: Tarifas, Disponibilidad, Servicios",
      "Respuestas automáticas 24/7",
      "Hasta 100 conversaciones/mes",
      "Fotografía ESENCIAL (10 fotos editadas HD)",
      "3 Videos BÁSICO para redes sociales",
      "Configuración de perfiles en Instagram y Facebook",
      "Capacitación completa (3 horas)",
      "Soporte técnico por 30 días",
      "Entrega: 2-3 semanas",
    ],
  },
  {
    id: "intermediate",
    name: "Presencia Completa",
    description: "La solución completa para hoteles profesionales",
    price: "$3.199.900",
    priceNote: "Ahorro de $731.100 (18%) vs. comprar por separado",
    highlighted: true,
    features: [
      "✅ Todo lo del Plan Básico incluido",
      "Web Corporativa PROFESIONAL (6-8 páginas)",
      "Sistema de reservas online integrado",
      "Calendario de disponibilidad en tiempo real",
      "Integración con pasarelas de pago seguras",
      "ChatBot - WhatsApp 6 flujos conversacionales avanzados",
      "Multi-canal: WhatsApp + Instagram",
      "CRM básico integrado",
      "Fotografía PROFESIONAL (25 fotos editadas HD)",
      "Sesión de 4 horas en sus instalaciones",
      "6 Videos CREADOR (Reels/TikToks con edición dinámica)",
      "Community Management STARTER (1 mes)",
      "8 posts diseñados + 8 stories",
      "SEO básico optimizado",
      "Capacitación completa (5 horas)",
      "Soporte prioritario por 60 días",
      "Entrega: 3-4 semanas",
    ],
  },
  {
    id: "premium",
    name: "Transformación Total",
    description: "La solución definitiva para máxima rentabilidad",
    price: "$5.499.900",
    priceNote: "Ahorro de $2.109.000 (27%) vs. comprar por separado",
    highlighted: false,
    features: [
      "✅ Todo lo del Plan Completo incluido",
      "Web EMPRESARIAL (10+ páginas, alto impacto)",
      "Versión multiidioma (Español + Inglés)",
      "Sistema de gestión hotelera integrado",
      "Dashboard administrativo con métricas en tiempo real",
      "Reportes de ocupación, ventas y analytics",
      "ChatBot - WhatsApp 12 flujos conversacionales avanzados",
      "Multi-canal completo: WhatsApp + Instagram + Facebook",
      "CRM avanzado + automatización",
      "Reportes y Business Intelligence",
      "Conversaciones ilimitadas",
      "Fotografía CATÁLOGO (50 fotos + RAW)",
      "Sesión completa de 8 horas",
      "12 Videos VIRAL (Guión + Edición premium)",
      "Community Management GROWTH (3 meses)",
      "36 posts profesionales + 12 Reels producidos",
      "Gestión activa de 2 plataformas",
      "Respuesta a comentarios y mensajes",
      "Google Hotel Ads configurado",
      "Email Marketing (hasta 1000 contactos)",
      "SEO avanzado + estrategia de contenido",
      "Capacitación VIP personalizada (8 horas)",
      "Soporte premium por 90 días",
      "Consultoría estratégica trimestral",
      "Entrega: 6-8 semanas",
    ],
  }
];

export default function PropuestaVillaPampa() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const paymentCarouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Comienza en el plan más popular
  const [activePaymentIndex, setActivePaymentIndex] = useState(1); // Comienza en la opción más popular (50/50)

  useEffect(() => {
    // Scroll inicial al plan más popular (segundo elemento = index 4 en el array triplicado)
    if (carouselRef.current) {
      const popularIndex = 4; // Segundo set, segundo elemento (Presencia Completa)
      const cardWidth = carouselRef.current.scrollWidth / 9; // 3 propuestas x 3 repeticiones
      carouselRef.current.scrollLeft =
        cardWidth * popularIndex - window.innerWidth * 0.075;
    }

    // Scroll inicial para opciones de pago (opción 50/50 es la más popular)
    if (paymentCarouselRef.current) {
      const popularPaymentIndex = 4; // Segundo set, segundo elemento (Plan 50/50)
      const cardWidth = paymentCarouselRef.current.scrollWidth / 9; // 3 opciones x 3 repeticiones
      paymentCarouselRef.current.scrollLeft =
        cardWidth * popularPaymentIndex - window.innerWidth * 0.075;
    }

    // Intersection Observer para detectar tarjeta visible en propuestas
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            const actualIndex = index % 3; // Mapear al índice real (0-2)
            setActiveIndex(actualIndex);
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0.6,
      }
    );

    // Intersection Observer para detectar tarjeta visible en opciones de pago
    const paymentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-payment-index") || "0"
            );
            const actualIndex = index % 3; // Mapear al índice real (0-2)
            setActivePaymentIndex(actualIndex);
          }
        });
      },
      {
        root: paymentCarouselRef.current,
        threshold: 0.6,
      }
    );

    // Observar todas las tarjetas de propuestas
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll("[data-index]");
      cards.forEach((card) => observer.observe(card));
    }

    // Observar todas las tarjetas de opciones de pago
    if (paymentCarouselRef.current) {
      const cards = paymentCarouselRef.current.querySelectorAll("[data-payment-index]");
      cards.forEach((card) => paymentObserver.observe(card));
    }

    return () => {
      observer.disconnect();
      paymentObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleField variant="mixed" density="medium" speed="slow" />        
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Propuesta Exclusiva
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NexoHotel Villa La Pampa
            </h1>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Cliente: Villa La Pampa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Fecha: 24 de enero de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Válida por: 15 días</span>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Proposals Carousel Section */}
      <section id="proposals" className="relative py-24 overflow-hidden border-b border-border/50">
        <ParticleField variant="mixed" density="high" speed="medium" />
        <Container className="relative z-10">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                3 Soluciones Diseñadas
              </span>{" "}
              para Villa La Pampa
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
              Desde presencia básica hasta ecosistema digital completo. Elige el nivel perfecto para tu hotel.
            </p>
          </AnimatedSection>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative pt-4">
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
                {/* Duplicar propuestas para efecto infinito */}
                {[...proposals, ...proposals, ...proposals].map((proposal, index) => {
                  return (
                    <div
                      key={`${proposal.name}-${index}`}
                      data-index={index}
                      className="snap-center shrink-0 w-[85vw] max-w-sm"
                    >
                      <Card
                        className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${
                          proposal.highlighted
                            ? "border-accent bg-card shadow-lg shadow-accent/20"
                            : "border-border/50 bg-card/50"
                        }`}
                      >
                        {proposal.highlighted && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap z-10">
                            Más Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-foreground">
                            {proposal.name}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {proposal.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <div className="mb-6">
                            <span className="text-3xl font-bold text-foreground">
                              {proposal.price}
                            </span>
                            <div className="mt-2 text-xs font-medium text-accent">
                              {proposal.priceNote}
                            </div>
                          </div>
                          <ul className="space-y-3">
                            {proposal.features.map((feature, featureIndex) => (
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
                            variant={proposal.highlighted ? "gradient" : "outline"}
                            asChild
                          >
                            <a
                              href="https://wa.me/+573102817988"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Seleccionar Plan
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-2">
              {proposals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (carouselRef.current) {
                      const cardWidth = carouselRef.current.scrollWidth / 9;
                      const targetIndex = index + 3; // Usar el segundo set de tarjetas
                      carouselRef.current.scrollTo({
                        left: cardWidth * targetIndex - window.innerWidth * 0.075,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-gradient-to-r from-primary to-accent"
                      : "w-2 bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir a ${proposals[index].name}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid gap-8 lg:grid-cols-3">
            {proposals.map((proposal, index) => {
              return (
                <AnimatedSection key={proposal.id} delay={index * 100}>
                  <Card
                    className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${
                      proposal.highlighted
                        ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30"
                        : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                    }`}
                  >
                    {proposal.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg">
                        Más Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-foreground">{proposal.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {proposal.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-foreground">
                          {proposal.price}
                        </span>
                        <div className="mt-2 text-xs font-medium text-accent">
                          {proposal.priceNote}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {proposal.features.map((feature) => (
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
                        variant={proposal.highlighted ? "gradient" : "default"}
                        asChild
                      >
                        <a
                          href="https://wa.me/+573102817988"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Seleccionar Plan
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Payment Options */}
      <section id="payment" className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent border-b border-border/50">
        <ParticleField variant="mixed" density="medium" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Opciones de Inversión
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Facilidades de Pago
              </span>{" "}
              que se ajustan a tu presupuesto
            </h2>
            <p className="text-muted-foreground">
              Elige la modalidad que mejor funcione para tu flujo de caja
            </p>
          </AnimatedSection>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative pt-4">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                if (paymentCarouselRef.current) {
                  const cardWidth = paymentCarouselRef.current.scrollWidth / 9;
                  const currentScroll = paymentCarouselRef.current.scrollLeft;
                  paymentCarouselRef.current.scrollTo({
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
                if (paymentCarouselRef.current) {
                  const cardWidth = paymentCarouselRef.current.scrollWidth / 9;
                  const currentScroll = paymentCarouselRef.current.scrollLeft;
                  paymentCarouselRef.current.scrollTo({
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
              ref={paymentCarouselRef}
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            >
              <div className="flex gap-6 px-4">
                {/* Duplicar opciones para efecto infinito */}
                {[
                  { name: "Pago Único", desc: "Máximo ahorro", highlight: false, price: "5%", priceLabel: "descuento adicional", features: ["Pago del 100% al firmar contrato", "Descuento automático aplicado", "Prioridad en la cola de desarrollo", "Ideal para presupuestos aprobados"] },
                  { name: "Plan 50/50", desc: "Equilibrio perfecto", highlight: true, price: "50%", priceLabel: "al inicio", features: ["50% al firmar contrato", "50% a la entrega final", "Balance entre inversión y riesgo", "Opción más elegida por clientes"] },
                  { name: "Plan 30/40/30", desc: "Máxima flexibilidad", highlight: false, price: "3", priceLabel: "pagos", features: ["30% al firmar contrato", "40% a mitad del proyecto", "30% a la entrega final", "Ideal para proyectos extensos"] },
                  { name: "Pago Único", desc: "Máximo ahorro", highlight: false, price: "5%", priceLabel: "descuento adicional", features: ["Pago del 100% al firmar contrato", "Descuento automático aplicado", "Prioridad en la cola de desarrollo", "Ideal para presupuestos aprobados"] },
                  { name: "Plan 50/50", desc: "Equilibrio perfecto", highlight: true, price: "50%", priceLabel: "al inicio", features: ["50% al firmar contrato", "50% a la entrega final", "Balance entre inversión y riesgo", "Opción más elegida por clientes"] },
                  { name: "Plan 30/40/30", desc: "Máxima flexibilidad", highlight: false, price: "3", priceLabel: "pagos", features: ["30% al firmar contrato", "40% a mitad del proyecto", "30% a la entrega final", "Ideal para proyectos extensos"] },
                  { name: "Pago Único", desc: "Máximo ahorro", highlight: false, price: "5%", priceLabel: "descuento adicional", features: ["Pago del 100% al firmar contrato", "Descuento automático aplicado", "Prioridad en la cola de desarrollo", "Ideal para presupuestos aprobados"] },
                  { name: "Plan 50/50", desc: "Equilibrio perfecto", highlight: true, price: "50%", priceLabel: "al inicio", features: ["50% al firmar contrato", "50% a la entrega final", "Balance entre inversión y riesgo", "Opción más elegida por clientes"] },
                  { name: "Plan 30/40/30", desc: "Máxima flexibilidad", highlight: false, price: "3", priceLabel: "pagos", features: ["30% al firmar contrato", "40% a mitad del proyecto", "30% a la entrega final", "Ideal para proyectos extensos"] },
                ].map((option, index) => (
                  <div
                    key={`${option.name}-${index}`}
                    data-payment-index={index}
                    className="snap-center shrink-0 w-[85vw] max-w-sm"
                  >
                    <Card
                      className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${
                        option.highlight
                          ? "border-accent bg-card shadow-lg shadow-accent/20"
                          : "border-border/50 bg-card/50"
                      }`}
                    >
                      {option.highlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap z-10">
                          Más Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-foreground">{option.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {option.desc}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-accent">{option.price}</span>
                          <span className="text-lg text-muted-foreground ml-2">{option.priceLabel}</span>
                        </div>
                        <ul className="space-y-3">
                          {option.features.map((feature, featureIndex) => (
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
                          variant={option.highlight ? "gradient" : "default"}
                          asChild
                        >
                          <a
                            href="https://wa.me/+573116839099"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {option.highlight ? "Seleccionar" : "Consultar"}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (paymentCarouselRef.current) {
                      const cardWidth = paymentCarouselRef.current.scrollWidth / 9;
                      const targetIndex = index + 3; // Usar el segundo set de tarjetas
                      paymentCarouselRef.current.scrollTo({
                        left: cardWidth * targetIndex - window.innerWidth * 0.075,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activePaymentIndex === index
                      ? "w-8 bg-gradient-to-r from-primary to-accent"
                      : "w-2 bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir a opción ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <Card className="group relative flex h-full flex-col hover-lift transition-all duration-300 border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <CardTitle className="text-foreground">Pago Único</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Máximo ahorro
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">5%</span>
                    <span className="text-lg text-muted-foreground ml-2">descuento adicional</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Pago del 100% al firmar contrato
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Descuento automático aplicado
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Prioridad en la cola de desarrollo
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Ideal para presupuestos aprobados
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default" asChild>
                    <a href="https://wa.me/+573116839099" target="_blank" rel="noopener noreferrer">
                      Consultar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group relative flex h-full flex-col hover-lift transition-all duration-300 border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap">
                  Más Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">Plan 50/50</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Equilibrio perfecto
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">50%</span>
                    <span className="text-lg text-muted-foreground ml-2">al inicio</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        50% al firmar contrato
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        50% a la entrega final
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Balance entre inversión y riesgo
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Opción más elegida por clientes
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="gradient" asChild>
                    <a href="https://wa.me/+573116839099" target="_blank" rel="noopener noreferrer">
                      Seleccionar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="group relative flex h-full flex-col hover-lift transition-all duration-300 border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <CardTitle className="text-foreground">Plan 30/40/30</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Máxima flexibilidad
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">3</span>
                    <span className="text-lg text-muted-foreground ml-2">pagos</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        30% al firmar contrato
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        40% a mitad del proyecto
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        30% a la entrega final
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Ideal para proyectos extensos
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default" asChild>
                    <a href="https://wa.me/+573116839099" target="_blank" rel="noopener noreferrer">
                      Consultar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <ParticleField variant="mixed" density="low" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="relative rounded-2xl bg-card overflow-hidden border border-accent shadow-2xl shadow-accent/20">
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 px-6 py-16 md:px-12 md:py-20">
                {/* Content */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    ¿Listo para transformar <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Villa La Pampa?
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Agenda una reunión estratégica gratuita para revisar la propuesta en detalle
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button 
                      size="lg" 
                      className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105"
                      asChild
                    >
                      <a
                        href="https://wa.me/+573116839099"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar Reunión
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-border hover:bg-accent/10 hover:border-accent backdrop-blur-sm transition-all hover:scale-105"
                    >
                      Descargar PDF
                    </Button>
                  </div>
                </div>

                {/* Contact Info Cards */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border hover:border-accent/50 hover:bg-card transition-all">
                    <div className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Contacto</div>
                    <div className="text-foreground font-bold text-lg">Juan Diego Garcia</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border hover:border-accent/50 hover:bg-card transition-all">
                    <div className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Teléfono</div>
                    <a 
                      href="tel:+573116839099" 
                      className="text-foreground font-bold text-lg hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    >
                      +57 311 683 9099
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border hover:border-accent/50 hover:bg-card transition-all">
                    <div className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Email</div>
                    <a 
                      href="mailto:contacto@nexobite.com" 
                      className="text-foreground font-bold text-lg hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    >
                      contacto@nexobite.com
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
