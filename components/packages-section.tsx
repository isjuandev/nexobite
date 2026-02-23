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
      "Para negocios que arrancan de cero y necesitan presencia básica.",
    // Web Básica $397.900 + Foto Esencial $199.900 + Video Básico $199.900 + CM parcial ~$107.900
    price: "$769.900",
    originalPrice: "$905.900",
    savings: "Ahorras $136.000 (15%)",
    features: [
      "Landing Page Básica (1 página)",
      "Sesión de fotos Esencial (10 fotos)",
      "10 posts diseñados para redes",
      "1 Reel/TikTok de obsequio 🎁",
      "Dominio + Hosting por 1 año",
      "Formulario de contacto",
      "Capacitación de 2 horas",
      "Entrega en 2-3 semanas",
    ],
    highlighted: false,
  },
  {
    name: "Presencia Completa",
    description: "Todo lo que necesitas: web + redes + automatización.",
    // Web Profesional $649.900 + Chatbot Business setup $1.249.900 + mensualidad ×3 ($199.900×3=$599.700) + CM Growth $719.900 + Foto Profesional $399.900 + Video Creador $449.900
    price: "$3.255.900",
    originalPrice: "$4.069.200",
    savings: "Ahorras $813.300 (20%)",
    features: [
      "Web Portafolio Profesional (3-5 páginas)",
      "ChatBot Business (setup + 3 meses)",
      "Community Management Growth (1 mes)",
      "Sesión de fotos Profesional (25 fotos)",
      "Pack Videos Creador (6 videos)",
      "Dominio + Hosting premium por 1 año",
      "Calendario editorial incluido",
      "Capacitación completa",
      "Entrega en 4-6 semanas",
    ],
    highlighted: true,
  },
  {
    name: "Transformación Total",
    description: "Todo incluido para máximo impacto y escalamiento.",
    // Web Empresarial $1.099.900 + Chatbot Enterprise setup $2.099.900 + mensualidad ×3 ($329.900×3=$989.700) + CM Scale ×3 ($1.199.900×3=$3.599.700) + Foto Catálogo $699.900 + Video Viral $849.900
    price: "$7.004.900",
    originalPrice: "$9.339.000",
    savings: "Ahorras $2.334.100 (25%)",
    features: [
      "Web Empresarial (6-10 páginas + SEO avanzado)",
      "ChatBot Enterprise (setup + 3 meses)",
      "Community Management Scale (3 meses)",
      "Sesión de fotos Catálogo (50 fotos)",
      "Pack Videos Viral (12 videos)",
      "Dominio + Hosting premium por 1 año",
      "Reportes y BI completo",
      "Soporte prioritario",
      "Entrega en 6-8 semanas",
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
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Paquetes Integrales
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ahorra hasta 25%
            </span>{" "}
            combinando servicios
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Todo incluido: desarrollo, contenido, capacitación y soporte. Un
            solo proveedor, comunicación directa, precios transparentes.
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
                    className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${
                      pkg.highlighted
                        ? "border-accent bg-card shadow-lg shadow-accent/20"
                        : "border-border/50 bg-card/50"
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap z-10">
                        ⭐ Más Popular
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
                          href="https://wa.me/+573116839099"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pkg.highlighted ? "Empezar ahora" : "Contactar"}
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-gradient-to-r from-primary to-accent"
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
                className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30"
                    : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg">
                    ⭐ Más Popular
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
                      href="https://wa.me/+573116839099"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pkg.highlighted ? "Empezar ahora" : "Contactar"}
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