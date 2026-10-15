import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";
import { AnimatedSection } from "@/components/animated-section";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { RoiCalculator } from "@/components/roi-calculator";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Propuesta para Motel La Guaca",
  description:
    "Propuesta de posicionamiento y catálogo digital automatizado para Motel La Guaca, por NexoBite.",
  robots: { index: false, follow: false },
};

const DEMO_URL = "https://la-guaca.nexobite.com/";
const whatsappLink = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
  "Hola NexoBite, queremos avanzar con la propuesta para La Guaca"
)}`;

const INVESTMENT = 700000;

const problems = [
  {
    title: "El límite del catálogo de WhatsApp",
    body: "Funciona excelente para clientes frecuentes, pero no atrae clientes nuevos por sí solo. Nadie puede encontrar un catálogo de WhatsApp buscando en Google.",
    proof: "catálogo motel temático armenia → 0 resultados del catálogo de WhatsApp",
  },
  {
    title: "El freno de la privacidad",
    body: "Muchos evitan agregar el contacto de un motel a su agenda personal. Y una lista de precios estática no genera el deseo de una experiencia web inmersiva y anónima.",
    proof: "¿Guardar “Motel” en tus contactos? → Cancelar",
  },
  {
    title: "Turistas y visitantes nuevos",
    body: "El Eje Cafetero recibe miles de visitantes al mes. Quien llega por primera vez no tiene el WhatsApp de La Guaca: abre Google y busca. No aparecer ahí es dejarle la mesa servida a otros.",
    proof: "motel cerca de mí en armenia → otros moteles",
  },
];

const benefits = [
  {
    title: "Un embudo directo a tu WhatsApp",
    body: "La web capta a quienes buscan en internet, los enamora con temáticas, precios y servicios, y los envía con un clic al WhatsApp del motel: más personas, y ya convencidas de reservar.",
    funnel: ["Google", "Web", "WhatsApp"],
  },
  {
    title: "Discreción que vende",
    body: "Sin guardar números ni dejar rastro en su agenda, el cliente explora todas las habitaciones desde su celular de forma 100% privada, lo que aumenta el deseo de visitar el motel.",
  },
  {
    title: "Presencia en Google",
    body: "SEO local para que, cuando alguien busque moteles en Armenia o el Quindío, La Guaca tenga la mejor opción de aparecer y capte clientes nuevos que hoy no llegan al WhatsApp.",
  },
  {
    title: "Más ventas de habitaciones de alto valor",
    body: "Pasar de una lista de precios en WhatsApp a una galería web interactiva hace que los jacuzzis y las temáticas especiales destaquen, y el cliente se antoje de las suites más costosas.",
  },
  {
    title: "Catálogo de servicios adicionales",
    body: "Licores, comidas, decoración para fechas especiales y adicionales exhibidos con claridad, para aumentar el consumo promedio por habitación.",
  },
];

const rooms = [
  { name: "SUITE", detail: "Jacuzzi + Silla del amor", price: "$115.000" },
  { name: "ESPECIAL", detail: "Jacuzzi + Turco privado", price: "$133.000" },
  { name: "SUPER", detail: "Jacuzzi XL + Pista y luces", price: "$150.000" },
  { name: "PRESIDENCIAL", detail: "Columpio + Muro de caricias", price: "$255.000" },
];

const phase1 = [
  "Diseño 100% personalizado con fotos reales, precios y temáticas de La Guaca.",
  "Dominio oficial (.com) y hosting de alta velocidad incluidos el primer año.",
  "SEO local para búsquedas en Armenia y el Quindío.",
  "Botones directos a WhatsApp por cada habitación temática.",
];

const phase2 = [
  "Servidor mantenido: la página carga rápido y no se cae.",
  "Actualización de precios, fotos o servicios cuando lo requieras.",
  "Pop-ups y secciones de temporada para nuevas temáticas y promociones.",
];

const seasons = ["San Valentín", "Amor y Amistad", "Halloween", "Entre semana"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function H2({ lead, accent, tone = "signal" }: { lead: string; accent: string; tone?: "signal" | "copper" }) {
  return (
    <h2 className="mb-4 max-w-3xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
      {lead} <span className={tone === "copper" ? "text-copper" : "text-signal"}>{accent}</span>
    </h2>
  );
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
          <FaCheck className="mt-1 h-3 w-3 shrink-0 text-signal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PhoneMockup() {
  return (
    <div>
      <div className="instrument mx-auto w-full max-w-[300px] overflow-hidden rounded-md border border-line bg-card">
        <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-micro text-ink-mute">
          <span>MENÚ</span>
          <b className="font-semibold text-ink">LA GUACA</b>
          <span>24/7</span>
        </div>
        <div className="space-y-3 p-4">
          <div className="rounded-sm border border-line bg-paper p-4">
            <p className="font-mono text-micro text-copper">ARMENIA · KM 2 VÍA MONTENEGRO</p>
            <p className="mt-2 text-base font-semibold leading-snug text-ink">
              Cinco horas de intimidad total
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              Jacuzzi caliente en cada suite, garaje privado y total discreción.
            </p>
            <span className="mt-3 inline-block rounded-sm bg-signal px-2.5 py-1.5 font-mono text-micro font-semibold text-paper">
              VER DISPONIBILIDAD POR WHATSAPP
            </span>
          </div>
          <p className="font-mono text-micro text-ink-mute">ELIGE EL NIVEL DE TU FANTASÍA</p>
          {rooms.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between gap-3 rounded-sm border border-line bg-paper px-3 py-2.5"
            >
              <div>
                <b className="block font-mono text-micro text-ink">{r.name}</b>
                <span className="text-label text-ink-mute">{r.detail}</span>
              </div>
              <i className="tnum font-mono text-xs font-semibold not-italic text-copper">{r.price}</i>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-line bg-signal-soft px-4 py-3 text-xs text-ink">
          <FaWhatsapp className="h-4 w-4 text-signal" />
          ¿Hay disponibilidad?
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-label text-ink-mute">
        Maqueta ilustrativa. Las fotos reales llegan en la versión final.
      </p>
    </div>
  );
}

export default function PropuestaLaGuacaPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <Container size="lg" className="flex items-center justify-between py-3">
          <span className="inline-flex items-center gap-3">
            <Image
              src="/propuestas/la-guaca-logo.webp"
              alt="Logo Motel La Guaca"
              width={36}
              height={36}
              className="rounded-full border border-line"
            />
            <span className="font-display text-base font-bold text-ink">
              La <span className="text-signal">Guaca</span>
            </span>
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-label text-ink-mute">
            <span className="hidden sm:inline">PROPUESTA DE</span>
            <BrandLogo showWordmark={false} markClassName="h-6 w-6" />
          </span>
        </Container>
      </header>

      <main className="bg-paper">
        {/* Portada */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="lg" className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow>Propuesta comercial · 2026</Eyebrow>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[58px]">
                Posicionamiento y catálogo digital <span className="text-signal">automatizado</span>
              </h1>
              <p className="mb-8 max-w-xl text-pretty text-lg text-ink-soft">
                Transformando búsquedas de Google en habitaciones ocupadas.
              </p>
              <p className="font-mono text-label text-ink-mute">
                EXCLUSIVO PARA <b className="font-semibold text-ink">MOTEL LA GUACA</b> · PRESENTADO POR NEXOBITE
              </p>
            </div>
            <div className="hidden justify-center lg:col-span-4 lg:flex">
              <Image
                src="/propuestas/la-guaca-logo.webp"
                alt=""
                width={240}
                height={240}
                className="rounded-full border border-line-strong"
                priority
              />
            </div>
          </Container>
        </section>

        {/* 01 El problema */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="lg">
            <AnimatedSection>
              <Eyebrow>01 · El problema</Eyebrow>
              <H2 lead="¿Cuántas parejas se van a la competencia cada semana" accent="sin que lo notes?" tone="copper" />
              <p className="mb-14 max-w-2xl text-pretty text-base text-ink-soft">
                La Guaca tiene habitaciones temáticas únicas y un catálogo de WhatsApp muy bien estructurado. Pero hoy ese gran trabajo solo lo ven quienes ya tienen guardado el número del motel. Y en este sector el cliente decide por impulso, emoción y discreción.
              </p>
            </AnimatedSection>
            <div className="grid gap-4 md:grid-cols-3">
              {problems.map((p, i) => (
                <AnimatedSection key={p.title}>
                  <article className="h-full rounded-md border border-line bg-card p-6">
                    <span className="font-mono text-label text-ink-mute">0{i + 1}</span>
                    <h3 className="mb-3 mt-2 text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                    <p className="rounded-sm border border-line bg-paper px-3 py-2 font-mono text-label text-ink-mute">
                      {p.proof}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* 02 La solución */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="lg" className="grid items-center gap-12 lg:grid-cols-12">
            <AnimatedSection className="lg:col-span-7">
              <Eyebrow>02 · La solución</Eyebrow>
              <H2 lead="Tu recepcionista y vitrina" accent="VIP 24/7" />
              <p className="mb-6 max-w-xl text-pretty text-base text-ink-soft">
                Una plataforma web moderna, rápida y pensada para la identidad de La Guaca: el complemento perfecto de su catálogo y el principal motor de tráfico hacia su WhatsApp.
              </p>
              <div className="mb-8 flex flex-wrap gap-2.5">
                {["5 suites con precio visible", "Motor de tráfico a WhatsApp", "100% adaptada a celular"].map((t) => (
                  <span key={t} className="badge b-active">
                    <i />
                    {t}
                  </span>
                ))}
              </div>
              <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  Ver demostración en vivo
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="mt-4 text-xs text-ink-mute">
                Las fotografías actuales son de referencia; en la versión final lucirán las instalaciones reales de La Guaca.
              </p>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5">
              <PhoneMockup />
            </AnimatedSection>
          </Container>
        </section>

        {/* 03 Beneficios */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="lg">
            <AnimatedSection>
              <Eyebrow>03 · Lo que gana el motel desde el día uno</Eyebrow>
              <H2 lead="Más clientes al chat," accent="ya convencidos" />
            </AnimatedSection>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <AnimatedSection key={b.title}>
                  <article className="h-full rounded-md border border-line bg-card p-6">
                    <span className="tnum font-mono text-label text-signal">0{i + 1}</span>
                    <h3 className="mb-3 mt-2 text-lg font-semibold text-ink">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{b.body}</p>
                    {b.funnel && (
                      <div className="mt-5 flex items-center gap-2 font-mono text-label">
                        {b.funnel.map((step, j) => (
                          <span key={step} className="flex items-center gap-2">
                            {j > 0 && <span className="text-ink-mute">→</span>}
                            <span
                              className={
                                j === b.funnel!.length - 1
                                  ? "rounded-sm border border-signal/40 bg-signal-soft px-2 py-1 text-signal"
                                  : "rounded-sm border border-line bg-paper px-2 py-1 text-ink-soft"
                              }
                            >
                              {step}
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* 04 ROI */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="lg" className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <Eyebrow>04 · Hagamos cuentas rápidas</Eyebrow>
              <H2 lead="¿Es un gasto o una" accent="inversión?" tone="copper" />
              <p className="mb-4 max-w-xl text-pretty text-base text-ink-soft">
                El valor de la plataforma no se mide por lo que cuesta hacerla, sino por la velocidad con la que se paga sola.
              </p>
              <p className="max-w-xl text-pretty text-base text-ink-soft">
                Con una habitación promedio de <strong className="tnum text-ink">$60.000 a $90.000 COP</strong>, bastan <strong className="text-ink">10 a 12 parejas nuevas</strong> llegando desde Google para recuperar el 100% de la inversión. A partir de la pareja 13, todo es ganancia neta.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <RoiCalculator investment={INVESTMENT} min={50000} max={260000} step={5000} initialRate={65000} />
            </AnimatedSection>
          </Container>
        </section>

        {/* 05 Inversión */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="lg">
            <AnimatedSection>
              <Eyebrow>05 · Inversión y acompañamiento</Eyebrow>
              <H2 lead="Llave en mano," accent="y a tu lado" />
            </AnimatedSection>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <AnimatedSection>
                <article className="instrument h-full rounded-md border border-line bg-card p-6 sm:p-8">
                  <p className="mb-4 font-mono text-label text-ink-mute">FASE 1 · DESARROLLO E IMPLEMENTACIÓN</p>
                  <p className="mb-6 flex items-baseline gap-2">
                    <span className="tnum font-display text-5xl font-extrabold text-ink">$700.000</span>
                    <span className="font-mono text-label text-ink-mute">COP · pago único</span>
                  </p>
                  <Checks items={phase1} />
                  <div className="mt-6 rounded-sm border border-copper/40 bg-copper-soft p-4 text-sm text-ink-soft">
                    <p className="mb-1 font-mono text-label text-copper">BONO DE LANZAMIENTO</p>
                    <strong className="text-ink">2 meses</strong> de soporte técnico y administración web sin costo.
                  </div>
                </article>
              </AnimatedSection>
              <AnimatedSection>
                <article className="h-full rounded-md border border-line bg-card p-6 sm:p-8">
                  <p className="mb-4 font-mono text-label text-ink-mute">FASE 2 · SOPORTE ACTIVO Y MARKETING</p>
                  <p className="mb-2 flex items-baseline gap-2">
                    <span className="tnum font-display text-5xl font-extrabold text-ink">$100.000</span>
                    <span className="font-mono text-label text-ink-mute">COP / mes · desde el mes 3</span>
                  </p>
                  <p className="mb-6 text-sm text-ink-soft">Menos que dos ratos de habitación al mes.</p>
                  <Checks items={phase2} />
                  <div className="mt-6 flex flex-wrap gap-2">
                    {seasons.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm border border-line bg-paper px-2.5 py-1 font-mono text-label text-ink-soft"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* 06 Exclusividad */}
        <section className="border-b border-line py-20 sm:py-28">
          <Container size="md">
            <AnimatedSection>
              <Eyebrow>06 · Exclusividad y garantía de cupo</Eyebrow>
              <H2 lead="No competimos" accent="contra nosotros mismos" tone="copper" />
              <p className="mb-4 max-w-2xl text-pretty text-base text-ink-soft">
                Nuestro objetivo es que nuestro aliado domine las búsquedas locales. Por su trayectoria y el concepto único de sus habitaciones, <strong className="text-ink">La Guaca es el primer motel en Armenia al que le presentamos este proyecto.</strong>
              </p>
              <p className="mb-8 max-w-2xl text-pretty text-base text-ink-soft">
                Trabajaremos este posicionamiento con <strong className="text-ink">un solo motel en la zona</strong>. Reservamos la exclusividad y las condiciones de esta oferta por:
              </p>
              <div className="inline-flex items-center gap-3 rounded-sm border border-copper/40 bg-copper-soft px-5 py-3">
                <span className="tnum font-display text-4xl font-extrabold text-copper">3</span>
                <span className="font-mono text-label text-ink-soft">DÍAS DESDE QUE RECIBES ESTA PROPUESTA</span>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* 07 Cierre */}
        <section className="py-20 sm:py-28">
          <Container size="md" className="text-center">
            <AnimatedSection>
              <h2 className="mx-auto mb-4 max-w-2xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
                Llenemos más habitaciones <span className="text-signal">desde Google</span>
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-pretty text-base text-ink-soft">
                Confirma hoy y en pocos días La Guaca tendrá su vitrina VIP 24/7 lista para recibir parejas nuevas cada semana.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="whatsapp_click"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Quiero avanzar
                    <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-sm font-medium">
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                    Ver demo otra vez
                  </a>
                </Button>
              </div>
              <p className="mt-8 font-mono text-label text-ink-mute">
                {siteConfig.url.replace("https://", "")} · {siteConfig.contact.phoneDisplay}
              </p>
            </AnimatedSection>
          </Container>
        </section>
      </main>
    </>
  );
}
