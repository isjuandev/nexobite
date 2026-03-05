"use client";

// ============================================================
// 🎨 PLANTILLA DE PROPUESTA COMERCIAL — NexoBite
// ============================================================
// Instrucciones: Reemplaza todas las variables en CLIENT_CONFIG
// y en PROPOSALS con los datos del cliente.
// El resto del componente NO necesita modificarse.
// ============================================================

import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/particle-field";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

// ============================================================
// ✏️ CONFIGURACIÓN DEL CLIENTE — Editar aquí
// ============================================================
const CLIENT_CONFIG = {
  // Datos del cliente
  clientName: "NOMBRE DEL CLIENTE",         // Ej: "Villa La Pampa"
  projectTitle: "TÍTULO DEL PROYECTO",       // Ej: "NexoHotel Villa La Pampa"
  proposalDate: "DD de MES de YYYY",         // Ej: "24 de enero de 2026"
  validDays: 15,                             // Días de validez de la propuesta

  // Datos de contacto del ejecutivo
  executiveName: "NOMBRE EJECUTIVO",         // Ej: "Juan Diego Garcia"
  executivePhone: "+57 000 000 0000",        // Ej: "+57 311 683 9099"
  executivePhoneRaw: "573000000000",         // Sin espacios ni +, para WhatsApp
  executiveEmail: "contacto@nexobite.com",

  // Textos de la sección hero
  heroSubtitle: "Propuesta Exclusiva",
  heroDescription: "DESCRIPCIÓN BREVE DEL PROYECTO",  // Ej: "Transformación digital para tu hotel"

  // Textos de la sección de propuestas
  proposalsSectionTitle: "Soluciones Diseñadas",
  proposalsSectionSubtitle: "para NOMBRE DEL CLIENTE",
  proposalsSectionDescription: "Desde presencia básica hasta ecosistema digital completo. Elige el nivel perfecto para tu negocio.",

  // CTA final
  ctaTitle: "¿Listo para transformar",
  ctaHighlight: "NOMBRE DEL CLIENTE?",
  ctaDescription: "Agenda una reunión estratégica gratuita para revisar la propuesta en detalle",
};

// ============================================================
// ✏️ PLANES / PROPUESTAS — Editar aquí
// ============================================================
const proposals = [
  {
    id: "basic",
    name: "NOMBRE PLAN 1",                   // Ej: "Lanzamiento Digital"
    description: "DESCRIPCIÓN CORTA",        // Ej: "Ideal para negocios que arrancan"
    price: "$0.000.000",                     // Precio final con descuento
    originalPrice: "$0.000.000",             // Precio original (tachado)
    savings: "Ahorras $000.000 (15%)",       // Texto del badge de ahorro
    highlighted: false,
    features: [
      "Característica 1",
      "Característica 2",
      "Característica 3",
      // Agrega o elimina según el plan
    ],
  },
  {
    id: "intermediate",
    name: "NOMBRE PLAN 2",                   // Ej: "Presencia Completa"
    description: "DESCRIPCIÓN CORTA",
    price: "$0.000.000",
    originalPrice: "$0.000.000",
    savings: "Ahorras $000.000 (20%)",
    highlighted: true,                       // ← Este es el plan destacado "Más Popular"
    features: [
      "✅ Todo lo del Plan 1 incluido",
      "Característica exclusiva 1",
      "Característica exclusiva 2",
      // Agrega o elimina según el plan
    ],
  },
  {
    id: "premium",
    name: "NOMBRE PLAN 3",                   // Ej: "Transformación Total"
    description: "DESCRIPCIÓN CORTA",
    price: "$0.000.000",
    originalPrice: "$0.000.000",
    savings: "Ahorras $000.000 (25%)",
    highlighted: false,
    features: [
      "✅ Todo lo del Plan 2 incluido",
      "Característica exclusiva 1",
      "Característica exclusiva 2",
      // Agrega o elimina según el plan
    ],
  },
];

// ============================================================
// ✏️ OPCIONES DE PAGO — Editar montos si es necesario
// ============================================================
const paymentOptions = [
  {
    name: "Pago Único",
    desc: "Máximo ahorro",
    highlight: false,
    price: "5%",
    priceLabel: "descuento adicional",
    features: [
      "Pago del 100% al firmar contrato",
      "Descuento del 5% automático aplicado",
      "Prioridad en la cola de desarrollo",
      "Ideal para presupuestos aprobados",
    ],
  },
  {
    name: "Plan 50/50",
    desc: "Equilibrio perfecto",
    highlight: true,
    price: "50%",
    priceLabel: "al inicio",
    features: [
      "50% al firmar contrato",
      "50% a la entrega final",
      "Balance entre inversión y riesgo",
      "Opción más elegida por clientes",
    ],
  },
  {
    name: "Plan 30/40/30",
    desc: "Máxima flexibilidad",
    highlight: false,
    price: "3",
    priceLabel: "pagos",
    features: [
      "30% al firmar contrato",
      "40% a mitad del proyecto",
      "30% a la entrega final",
      "Ideal para proyectos extensos",
    ],
  },
];

// ============================================================
// 🚫 NO EDITAR DEBAJO DE ESTA LÍNEA
// ============================================================

function buildWALink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function PropuestaCliente() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const paymentCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [activePaymentIndex, setActivePaymentIndex] = useState(1);

  useEffect(() => {
    const scrollToPopular = (ref: React.RefObject<HTMLDivElement | null>, count: number) => {
      if (ref.current) {
        const popularIndex = count + 1;
        const cardWidth = ref.current.scrollWidth / (count * 3);
        ref.current.scrollLeft = cardWidth * popularIndex - window.innerWidth * 0.075;
      }
    };

    scrollToPopular(carouselRef, proposals.length);
    scrollToPopular(paymentCarouselRef, paymentOptions.length);

    const makeObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      attr: string,
      count: number,
      setter: (i: number) => void
    ) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute(attr) || "0");
              setter(index % count);
            }
          });
        },
        { root: ref.current, threshold: 0.6 }
      );
      ref.current?.querySelectorAll(`[${attr}]`).forEach((c) => observer.observe(c));
      return observer;
    };

    const o1 = makeObserver(carouselRef, "data-index", proposals.length, setActiveIndex);
    const o2 = makeObserver(paymentCarouselRef, "data-payment-index", paymentOptions.length, setActivePaymentIndex);

    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, count: number, dir: 1 | -1) => {
    if (ref.current) {
      const cardWidth = ref.current.scrollWidth / (count * 3);
      ref.current.scrollTo({ left: ref.current.scrollLeft + dir * cardWidth, behavior: "smooth" });
    }
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, count: number, index: number) => {
    if (ref.current) {
      const cardWidth = ref.current.scrollWidth / (count * 3);
      ref.current.scrollTo({
        left: cardWidth * (index + count) - window.innerWidth * 0.075,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleField variant="mixed" density="medium" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {CLIENT_CONFIG.heroSubtitle}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {CLIENT_CONFIG.projectTitle}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Cliente: {CLIENT_CONFIG.clientName}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Fecha: {CLIENT_CONFIG.proposalDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Válida por: {CLIENT_CONFIG.validDays} días</span>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Propuestas ────────────────────────────────────── */}
      <section id="proposals" className="relative py-24 overflow-hidden border-b border-border/50">
        <ParticleField variant="mixed" density="high" speed="medium" />
        <Container className="relative z-10">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {CLIENT_CONFIG.proposalsSectionTitle}
              </span>{" "}
              {CLIENT_CONFIG.proposalsSectionSubtitle}
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
              {CLIENT_CONFIG.proposalsSectionDescription}
            </p>
          </AnimatedSection>

          {/* Mobile */}
          <div className="lg:hidden relative pt-4">
            <button onClick={() => scrollCarousel(carouselRef, proposals.length, -1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all" aria-label="Anterior">
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button onClick={() => scrollCarousel(carouselRef, proposals.length, 1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all" aria-label="Siguiente">
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
            <div ref={carouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              <div className="flex gap-6 px-4">
                {[...proposals, ...proposals, ...proposals].map((p, index) => (
                  <div key={`${p.id}-${index}`} data-index={index} className="snap-center shrink-0 w-[85vw] max-w-sm">
                    <Card className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${p.highlighted ? "border-accent bg-card shadow-lg shadow-accent/20" : "border-border/50 bg-card/50"}`}>
                      {p.highlighted && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                          <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            Más Popular
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-foreground">{p.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{p.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-6 flex flex-col items-start gap-2">
                          <span className="text-sm text-muted-foreground line-through">{p.originalPrice}</span>
                          <span className="text-3xl font-bold text-foreground">{p.price}</span>
                          <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                            ✓ {p.savings}
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {p.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span className="text-sm text-muted-foreground">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={p.highlighted ? "gradient" : "outline"} asChild>
                          <a href={buildWALink(CLIENT_CONFIG.executivePhoneRaw, `Hola! Me interesa el plan "${p.name}" (${p.price}) para ${CLIENT_CONFIG.clientName}. Me gustaría recibir más información.`)} target="_blank" rel="noopener noreferrer">
                            {p.highlighted ? "Empezar ahora" : "Seleccionar Plan"}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              {proposals.map((_, i) => (
                <button key={i} onClick={() => scrollTo(carouselRef, proposals.length, i)} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-linear-to-r from-primary to-accent" : "w-2 bg-muted hover:bg-muted-foreground"}`} aria-label={`Ir a ${proposals[i].name}`} />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid gap-8 lg:grid-cols-3">
            {proposals.map((p, index) => (
              <AnimatedSection key={p.id} delay={index * 100}>
                <Card className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${p.highlighted ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30" : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"}`}>
                  {p.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                      <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                      <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        Más Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-foreground">{p.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6 flex flex-col items-start gap-2">
                      <span className="text-sm text-muted-foreground line-through">{p.originalPrice}</span>
                      <span className="text-3xl font-bold text-foreground">{p.price}</span>
                      <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        ✓ {p.savings}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={p.highlighted ? "gradient" : "default"} asChild>
                      <a href={buildWALink(CLIENT_CONFIG.executivePhoneRaw, `Hola! Me interesa el plan "${p.name}" (${p.price}) para ${CLIENT_CONFIG.clientName}. Me gustaría recibir más información.`)} target="_blank" rel="noopener noreferrer">
                        {p.highlighted ? "Empezar ahora" : "Seleccionar Plan"}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Opciones de Pago ──────────────────────────────── */}
      <section id="payment" className="relative py-20 bg-linear-to-b from-primary/5 to-transparent border-b border-border/50">
        <ParticleField variant="mixed" density="medium" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Opciones de Inversión
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Facilidades de Pago
              </span>{" "}
              que se ajustan a tu presupuesto
            </h2>
            <p className="text-muted-foreground">
              Elige la modalidad que mejor funcione para tu flujo de caja
            </p>
          </AnimatedSection>

          {/* Mobile */}
          <div className="lg:hidden relative pt-4">
            <button onClick={() => scrollCarousel(paymentCarouselRef, paymentOptions.length, -1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all" aria-label="Anterior">
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button onClick={() => scrollCarousel(paymentCarouselRef, paymentOptions.length, 1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all" aria-label="Siguiente">
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
            <div ref={paymentCarouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              <div className="flex gap-6 px-4">
                {[...paymentOptions, ...paymentOptions, ...paymentOptions].map((opt, index) => (
                  <div key={`${opt.name}-${index}`} data-payment-index={index} className="snap-center shrink-0 w-[85vw] max-w-sm">
                    <Card className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${opt.highlight ? "border-accent bg-card shadow-lg shadow-accent/20" : "border-border/50 bg-card/50"}`}>
                      {opt.highlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                          <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            Más Popular
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-foreground">{opt.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{opt.desc}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-accent">{opt.price}</span>
                          <span className="text-lg text-muted-foreground ml-2">{opt.priceLabel}</span>
                        </div>
                        <ul className="space-y-3">
                          {opt.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span className="text-sm text-muted-foreground">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={opt.highlight ? "gradient" : "default"} asChild>
                          <a href={buildWALink(CLIENT_CONFIG.executivePhoneRaw, `Hola! Me interesa la opción de pago "${opt.name}" para el proyecto de ${CLIENT_CONFIG.clientName}. ¿Podemos revisar los detalles?`)} target="_blank" rel="noopener noreferrer">
                            {opt.highlight ? "Seleccionar" : "Consultar"}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              {paymentOptions.map((_, i) => (
                <button key={i} onClick={() => scrollTo(paymentCarouselRef, paymentOptions.length, i)} className={`h-2 rounded-full transition-all duration-300 ${activePaymentIndex === i ? "w-8 bg-linear-to-r from-primary to-accent" : "w-2 bg-muted hover:bg-muted-foreground"}`} aria-label={`Opción ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {paymentOptions.map((opt, index) => (
              <AnimatedSection key={opt.name} delay={(index + 1) * 100}>
                <Card className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${opt.highlight ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30" : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"}`}>
                  {opt.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/80 px-4 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                      <span className="h-2 w-2 animate-pulse-glow rounded-full bg-linear-to-r from-primary to-accent" />
                      <span className="text-xs font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        Más Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-foreground">{opt.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{opt.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-accent">{opt.price}</span>
                      <span className="text-lg text-muted-foreground ml-2">{opt.priceLabel}</span>
                    </div>
                    <ul className="space-y-3">
                      {opt.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={opt.highlight ? "gradient" : "default"} asChild>
                      <a href={buildWALink(CLIENT_CONFIG.executivePhoneRaw, `Hola! Me interesa la opción de pago "${opt.name}" para el proyecto de ${CLIENT_CONFIG.clientName}. ¿Podemos revisar los detalles?`)} target="_blank" rel="noopener noreferrer">
                        {opt.highlight ? "Seleccionar" : "Consultar"}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Final ─────────────────────────────────────── */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <ParticleField variant="mixed" density="low" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="relative rounded-2xl bg-card overflow-hidden border border-accent shadow-2xl shadow-accent/20">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem]" />
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 px-6 py-16 md:px-12 md:py-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {CLIENT_CONFIG.ctaTitle}{" "}
                    <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      {CLIENT_CONFIG.ctaHighlight}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    {CLIENT_CONFIG.ctaDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105" asChild>
                      <a href={buildWALink(CLIENT_CONFIG.executivePhoneRaw, `Hola! Quisiera agendar una reunión para revisar la propuesta de ${CLIENT_CONFIG.projectTitle} en detalle. ¿Cuándo podemos coordinar?`)} target="_blank" rel="noopener noreferrer">
                        Agendar Reunión
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-border hover:bg-accent/10 hover:border-accent backdrop-blur-sm transition-all hover:scale-105">
                      Descargar PDF
                    </Button>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border hover:border-accent/50 hover:bg-card transition-all">
                    <div className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Contacto</div>
                    <div className="text-foreground font-bold text-lg">{CLIENT_CONFIG.executiveName}</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border hover:border-accent/50 hover:bg-card transition-all">
                    <div className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Teléfono</div>
                    <a href={`tel:+${CLIENT_CONFIG.executivePhoneRaw}`} className="text-foreground font-bold text-lg hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      {CLIENT_CONFIG.executivePhone}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border hover:border-accent/50 hover:bg-card transition-all">
                    <div className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Email</div>
                    <a href={`mailto:${CLIENT_CONFIG.executiveEmail}`} className="text-foreground font-bold text-lg hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      {CLIENT_CONFIG.executiveEmail}
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