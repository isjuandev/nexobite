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
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <main className="min-h-screen bg-paper flex flex-col relative overflow-hidden">
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-line">
        <ParticleField variant="subtle" density="low" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                {CLIENT_CONFIG.heroSubtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink">
              {CLIENT_CONFIG.projectTitle}
            </h1>
            <p className="text-sm md:text-base text-ink-soft max-w-2xl mx-auto">
              {CLIENT_CONFIG.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-xs font-mono text-ink-soft pt-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-card border border-line">
                <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>CLIENTE: {CLIENT_CONFIG.clientName}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-card border border-line">
                <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                <span>FECHA: {CLIENT_CONFIG.proposalDate}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-card border border-line">
                <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>VALIDEZ: {CLIENT_CONFIG.validDays} DÍAS</span>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Propuestas ────────────────────────────────────── */}
      <section id="proposals" className="relative py-20 overflow-hidden border-b border-line">
        <ParticleField variant="subtle" density="low" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="flex justify-center">
              <span className="eyebrow">01 · SOLUCIONES DISEÑADAS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              {CLIENT_CONFIG.proposalsSectionTitle}{" "}
              <span className="text-signal">{CLIENT_CONFIG.proposalsSectionSubtitle}</span>
            </h2>
            <p className="text-sm text-ink-soft">
              {CLIENT_CONFIG.proposalsSectionDescription}
            </p>
          </AnimatedSection>

          {/* Mobile */}
          <div className="lg:hidden relative pt-4">
            <button onClick={() => scrollCarousel(carouselRef, proposals.length, -1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card border border-line rounded-sm p-2 shadow-xs hover:border-line-strong transition-colors" aria-label="Anterior">
              <FaChevronLeft className="h-4 w-4 text-ink" />
            </button>
            <button onClick={() => scrollCarousel(carouselRef, proposals.length, 1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card border border-line rounded-sm p-2 shadow-xs hover:border-line-strong transition-colors" aria-label="Siguiente">
              <FaChevronRight className="h-4 w-4 text-ink" />
            </button>
            <div ref={carouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              <div className="flex gap-6 px-4">
                {[...proposals, ...proposals, ...proposals].map((p, index) => (
                  <div key={`${p.id}-${index}`} data-index={index} className="snap-center shrink-0 w-[85vw] max-w-sm">
                    <Card instrument={p.highlighted} className="group relative flex h-full flex-col mt-4">
                      {p.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 rounded-sm border border-copper/40 bg-card px-2.5 py-0.5 shadow-xs whitespace-nowrap">
                          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                          <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-copper">
                            Recomendado
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-ink text-lg">{p.name}</CardTitle>
                        <CardDescription className="text-ink-soft text-xs">{p.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-6 flex flex-col items-start gap-1">
                          <span className="text-xs font-mono text-ink-mute line-through">{p.originalPrice}</span>
                          <span className="text-3xl font-semibold font-mono tnum text-ink">{p.price}</span>
                          <div className="badge b-copper font-mono text-[11px] mt-1">
                            {p.savings}
                          </div>
                        </div>
                        <ul className="space-y-2.5">
                          {p.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                              <span className="text-xs text-ink-soft leading-relaxed">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={p.highlighted ? "signal" : "outline"} asChild>
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
                <button key={i} onClick={() => scrollTo(carouselRef, proposals.length, i)} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-6 bg-signal" : "w-1.5 bg-line-strong hover:bg-ink-mute"}`} aria-label={`Ir a ${proposals[i].name}`} />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid gap-6 lg:grid-cols-3">
            {proposals.map((p, index) => (
              <AnimatedSection key={p.id} delay={index * 100}>
                <Card instrument={p.highlighted} className="group relative flex h-full flex-col">
                  {p.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 rounded-sm border border-copper/40 bg-card px-2.5 py-0.5 shadow-xs whitespace-nowrap">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                      <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-copper">
                        Recomendado
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-ink text-lg">{p.name}</CardTitle>
                    <CardDescription className="text-ink-soft text-xs">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6 flex flex-col items-start gap-1">
                      <span className="text-xs font-mono text-ink-mute line-through">{p.originalPrice}</span>
                      <span className="text-3xl font-semibold font-mono tnum text-ink">{p.price}</span>
                      <div className="badge b-copper font-mono text-[11px] mt-1">
                        {p.savings}
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                          <span className="text-xs text-ink-soft leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={p.highlighted ? "signal" : "outline"} asChild>
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
      <section id="payment" className="relative py-20 border-b border-line">
        <ParticleField variant="subtle" density="low" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="flex justify-center">
              <span className="eyebrow">02 · ESQUEMA DE PAGOS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              Facilidades de Pago <span className="text-copper">flexibles</span>
            </h2>
            <p className="text-sm text-ink-soft">
              Elige la modalidad que mejor funcione para tu flujo de caja
            </p>
          </AnimatedSection>

          {/* Mobile */}
          <div className="lg:hidden relative pt-4">
            <button onClick={() => scrollCarousel(paymentCarouselRef, paymentOptions.length, -1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card border border-line rounded-sm p-2 shadow-xs hover:border-line-strong transition-colors" aria-label="Anterior">
              <FaChevronLeft className="h-4 w-4 text-ink" />
            </button>
            <button onClick={() => scrollCarousel(paymentCarouselRef, paymentOptions.length, 1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card border border-line rounded-sm p-2 shadow-xs hover:border-line-strong transition-colors" aria-label="Siguiente">
              <FaChevronRight className="h-4 w-4 text-ink" />
            </button>
            <div ref={paymentCarouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              <div className="flex gap-6 px-4">
                {[...paymentOptions, ...paymentOptions, ...paymentOptions].map((opt, index) => (
                  <div key={`${opt.name}-${index}`} data-payment-index={index} className="snap-center shrink-0 w-[85vw] max-w-sm">
                    <Card instrument={opt.highlight} className="group relative flex h-full flex-col mt-4">
                      {opt.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 rounded-sm border border-copper/40 bg-card px-2.5 py-0.5 shadow-xs whitespace-nowrap">
                          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                          <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-copper">
                            Más Elegido
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-ink text-lg">{opt.name}</CardTitle>
                        <CardDescription className="text-ink-soft text-xs">{opt.desc}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-6 flex items-baseline gap-2">
                          <span className="text-4xl font-semibold font-mono tnum text-ink">{opt.price}</span>
                          <span className="text-xs font-mono text-ink-soft">{opt.priceLabel}</span>
                        </div>
                        <ul className="space-y-2.5">
                          {opt.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                              <span className="text-xs text-ink-soft leading-relaxed">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={opt.highlight ? "signal" : "outline"} asChild>
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
                <button key={i} onClick={() => scrollTo(paymentCarouselRef, paymentOptions.length, i)} className={`h-1.5 rounded-full transition-all duration-300 ${activePaymentIndex === i ? "w-6 bg-signal" : "w-1.5 bg-line-strong hover:bg-ink-mute"}`} aria-label={`Opción ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paymentOptions.map((opt, index) => (
              <AnimatedSection key={opt.name} delay={(index + 1) * 100}>
                <Card instrument={opt.highlight} className="group relative flex h-full flex-col">
                  {opt.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 rounded-sm border border-copper/40 bg-card px-2.5 py-0.5 shadow-xs whitespace-nowrap">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                      <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-copper">
                        Más Elegido
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-ink text-lg">{opt.name}</CardTitle>
                    <CardDescription className="text-ink-soft text-xs">{opt.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-4xl font-semibold font-mono tnum text-ink">{opt.price}</span>
                      <span className="text-xs font-mono text-ink-soft">{opt.priceLabel}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {opt.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                          <span className="text-xs text-ink-soft leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={opt.highlight ? "signal" : "outline"} asChild>
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
        <ParticleField variant="subtle" density="low" speed="slow" />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="instrument relative rounded-md bg-card overflow-hidden border border-line p-8 md:p-14 shadow-xs">
              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <div className="flex justify-center">
                  <span className="eyebrow">03 · SIGUIENTE PASO</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink leading-tight">
                  {CLIENT_CONFIG.ctaTitle}{" "}
                  <span className="text-signal">
                    {CLIENT_CONFIG.ctaHighlight}
                  </span>
                </h2>
                <p className="text-sm md:text-base text-ink-soft">
                  {CLIENT_CONFIG.ctaDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button size="lg" variant="signal" asChild>
                    <a href={buildWALink(CLIENT_CONFIG.executivePhoneRaw, `Hola! Quisiera agendar una reunión para revisar la propuesta de ${CLIENT_CONFIG.projectTitle} en detalle. ¿Cuándo podemos coordinar?`)} target="_blank" rel="noopener noreferrer">
                      Agendar Reunión
                      <FaChevronRight className="w-3.5 h-3.5 ml-2" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    Descargar PDF
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-line">
                <div className="bg-paper rounded-sm p-4 border border-line">
                  <div className="text-[11px] text-ink-mute font-mono uppercase tracking-wider mb-1">Contacto</div>
                  <div className="text-ink font-mono text-sm">{CLIENT_CONFIG.executiveName}</div>
                </div>
                <div className="bg-paper rounded-sm p-4 border border-line">
                  <div className="text-[11px] text-ink-mute font-mono uppercase tracking-wider mb-1">Teléfono</div>
                  <a href={`tel:+${CLIENT_CONFIG.executivePhoneRaw}`} className="text-ink font-mono text-sm hover:text-signal transition-colors inline-flex items-center gap-1.5 group">
                    {CLIENT_CONFIG.executivePhone}
                    <FaChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-signal" />
                  </a>
                </div>
                <div className="bg-paper rounded-sm p-4 border border-line">
                  <div className="text-[11px] text-ink-mute font-mono uppercase tracking-wider mb-1">Email</div>
                  <a href={`mailto:${CLIENT_CONFIG.executiveEmail}`} className="text-ink font-mono text-sm hover:text-signal transition-colors inline-flex items-center gap-1.5 group">
                    {CLIENT_CONFIG.executiveEmail}
                    <FaChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-signal" />
                  </a>
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
