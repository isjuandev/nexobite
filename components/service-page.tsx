import Link from "next/link";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { ServiceMockup } from "@/components/service-mockups";
import { FaqSchema, ServiceSchema } from "@/components/schema-markup";
import { siteConfig } from "@/lib/site-config";
import { plans } from "@/lib/plans";
import { services, type Service } from "@/lib/services";

const whatsappLink = (message: string) =>
  `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;

function SectionHeading({
  eyebrow,
  lead,
  accent,
  accentTone = "signal",
  intro,
}: {
  eyebrow: string;
  lead: string;
  accent: string;
  accentTone?: "signal" | "copper";
  intro: string;
}) {
  return (
    <AnimatedSection>
      <div className="mb-3">
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
        {lead}{" "}
        <span className={accentTone === "copper" ? "text-copper" : "text-signal"}>{accent}</span>
      </h2>
      <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">{intro}</p>
    </AnimatedSection>
  );
}

function Hero({ service }: { service: Service }) {
  const { hero } = service;
  return (
    <section className="relative border-b border-line bg-paper pt-32 pb-16 sm:pt-36 sm:pb-24">
      <Container size="lg" className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="eyebrow">{service.category}</span>
          </div>
          <h1 className="mb-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[54px]">
            {hero.titleLead} <span className="text-signal">{hero.titleAccent}</span>
          </h1>
          <p className="mb-7 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {hero.lead}
          </p>
          <div className="mb-8 flex flex-wrap gap-2.5">
            {hero.badges.map((b) => (
              <span key={b.label} className={`badge b-${b.tone}`}>
                <i />
                {b.label}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
              <a
                href={whatsappLink(hero.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_click"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                {hero.ctaLabel}
                <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-sm font-medium">
              <a href="#proceso">Ver cómo trabajamos</a>
            </Button>
          </div>
          <p className="mt-3 font-mono text-xs text-ink-mute">
            Sin costo · En 15 minutos revisamos tu caso.
          </p>
        </div>
        <div className="lg:col-span-5">
          <ServiceMockup kind={hero.mockup} />
        </div>
      </Container>
    </section>
  );
}

function Problem({ service }: { service: Service }) {
  const { problem } = service;
  return (
    <section className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <SectionHeading
          eyebrow="01 · EL PROBLEMA"
          lead={problem.titleLead}
          accent={problem.titleAccent}
          accentTone="copper"
          intro={problem.intro}
        />
        <AnimatedSection delay={150}>
          <div className="stagger grid gap-6 md:grid-cols-3">
            {problem.items.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col rounded-md border border-line bg-card p-6 transition-colors hover:border-line-strong"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-copper/30 bg-copper-soft text-copper">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="mb-2 block font-mono text-xs text-ink-mute">
                  CUELLO {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2.5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

function Includes({ service }: { service: Service }) {
  const { includes } = service;
  return (
    <section className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <SectionHeading
          eyebrow="02 · LO QUE INCLUYE"
          lead={includes.titleLead}
          accent={includes.titleAccent}
          intro={includes.intro}
        />
        <AnimatedSection delay={150}>
          <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includes.items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-md border border-line bg-card p-5 transition-colors hover:border-line-strong"
              >
                <FaCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-signal" />
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

function Process({ service }: { service: Service }) {
  const { process } = service;
  return (
    <section id="proceso" className="border-b border-line bg-card/30 py-20 sm:py-28">
      <Container size="lg">
        <SectionHeading
          eyebrow="03 · CÓMO TRABAJAMOS"
          lead="Cómo lo dejamos funcionando"
          accent="en tu negocio"
          intro={process.intro}
        />
        <AnimatedSection delay={150}>
          <div className="stagger grid gap-6 md:grid-cols-3">
            {process.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col justify-between rounded-md border border-line bg-card p-6 transition-colors hover:border-signal/40"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-signal/30 bg-signal-soft text-signal">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className="rounded-sm border border-line bg-card px-2 py-0.5 font-mono text-xs text-copper">
                      {step.chip}
                    </span>
                  </div>
                  <span className="mb-1 block font-mono text-xs text-ink-mute">
                    PASO {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2.5 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                </div>
                <div className="border-t border-line pt-4">
                  <span className="block font-mono text-xs text-ink-mute">ENTREGABLE:</span>
                  <span className="font-mono text-xs text-signal">✓ {step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/** Para servicios sin precio fijo publicado: explica cómo se cotiza (sin inventar valores). */
function Quote({ service }: { service: Service }) {
  const scale = plans.find((p) => p.id === "scale");
  const showScale = service.slug === "paginas-web-para-empresas" && scale;
  const steps = [
    {
      title: "Revisión gratis de 15 minutos",
      description: "Hablamos de tu negocio y de lo que necesitas resolver, sin compromiso.",
    },
    {
      title: "Propuesta por escrito",
      description: "Recibes lo que incluye, el plazo de entrega y el valor, todo claro antes de empezar.",
    },
    {
      title: "Pago en dos partes",
      description: "Un anticipo al empezar y el saldo cuando recibas todo funcionando y lo hayas revisado.",
    },
  ];
  return (
    <section id="precios" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <SectionHeading
          eyebrow="04 · CÓMO COTIZAMOS"
          lead="Un precio claro"
          accent="después de revisar tu caso"
          intro="Cada negocio es distinto, por eso no publicamos un precio único. Antes de empezar sabes exactamente qué recibes y cuánto cuesta. Precios netos en pesos colombianos (COP)."
        />
        <AnimatedSection delay={150}>
          <div className="stagger grid gap-6 md:grid-cols-3">
            {steps.map((s, index) => (
              <div key={s.title} className="rounded-md border border-line bg-card p-6">
                <span className="mb-2 block font-mono text-xs text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.description}</p>
              </div>
            ))}
          </div>

          {showScale && (
            <div className="mt-6 flex flex-col gap-4 rounded-md border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="mb-1 block font-mono text-xs text-signal">
                  ¿LA QUIERES CONECTADA AL ASISTENTE Y AL REGISTRO DE CLIENTES?
                </span>
                <p className="text-sm text-ink-soft">
                  El Plan Scale incluye página web, asistente de WhatsApp y registro de clientes, con entrega
                  en {scale.timeframe}.
                </p>
                <p className="mt-2 font-mono text-xs text-ink-mute">
                  <span className="tnum font-semibold text-ink">{scale.setupPrice}</span> pago único ·{" "}
                  <span className="tnum">{scale.monthlyPrice}</span> / mes
                </p>
              </div>
              <Button variant="outline" asChild className="shrink-0 rounded-sm font-medium">
                <Link href="/servicios/automatizacion-whatsapp#precios">
                  Ver los planes
                  <FaArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}

function RelatedServices({ current }: { current: Service }) {
  const others = services.filter((s) => s.slug !== current.slug);
  return (
    <section className="border-b border-line bg-paper py-16 sm:py-20">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3">
            <span className="eyebrow">07 · OTROS SERVICIOS</span>
          </div>
          <h2 className="mb-10 max-w-3xl text-balance text-2xl font-semibold text-ink sm:text-3xl">
            Puedes sumar más <span className="text-signal">cuando tu negocio crezca</span>
          </h2>
          <div className="stagger grid gap-4 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group flex flex-col rounded-md border border-line bg-card p-5 transition-colors hover:border-line-strong"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-signal/30 bg-signal-soft text-signal">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <span className="rounded-sm border border-line bg-card px-2 py-0.5 font-mono text-micro text-copper">
                    {s.category}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink">{s.shortName}</h3>
                <p className="mb-4 text-sm leading-relaxed text-ink-soft">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs text-signal">
                  Ver el servicio
                  <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export function ServicePage({ service }: { service: Service }) {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <Hero service={service} />
      <Problem service={service} />
      <Includes service={service} />
      <Process service={service} />
      {service.pricing === "plans" ? (
        <PricingSection eyebrow="04 · INVERSIÓN TRANSPARENTE Y PLANES" />
      ) : (
        <Quote service={service} />
      )}
      <FaqSection
        items={service.faqs}
        eyebrow="05 · TUS DUDAS"
        titleLead="Preguntas frecuentes sobre"
        titleAccent="este servicio"
        intro="Lo que más nos preguntan antes de empezar."
      />
      <CtaSection
        eyebrow="06 · HABLEMOS"
        titleLead={service.finalCta.titleLead}
        titleAccent={service.finalCta.titleAccent}
        description={service.finalCta.description}
        message={service.finalCta.message}
      />
      <RelatedServices current={service} />
      <Footer />
      <ServiceSchema
        name={service.shortName}
        description={service.metaDescription}
        path={`/servicios/${service.slug}`}
      />
      <FaqSchema items={service.faqs} />
    </main>
  );
}
