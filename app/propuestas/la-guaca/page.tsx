import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";
import { BrandLogo } from "@/components/brand-logo";
import { CountUp, TypingText } from "@/components/deck-effects";
import { Line, Reveal } from "@/components/deck-parts";
import { ProposalDeck, type DeckSlide } from "@/components/proposal-deck";
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

const INVESTMENT = 990000;

const problems = [
  {
    title: "El límite del catálogo de WhatsApp",
    body: "Funciona excelente para clientes frecuentes, pero no atrae clientes nuevos por sí solo. Nadie puede encontrar un catálogo de WhatsApp buscando en Google.",
    proof: "catálogo motel temático armenia",
    result: "0 resultados del catálogo de WhatsApp",
  },
  {
    title: "El freno de la privacidad",
    body: "Muchos evitan agregar el contacto de un motel a su agenda personal. Y una lista de precios estática no genera el deseo de una experiencia web inmersiva y anónima.",
    prompt: true,
  },
  {
    title: "Turistas y visitantes nuevos",
    body: "El Eje Cafetero recibe miles de visitantes al mes. Quien llega por primera vez no tiene el WhatsApp de La Guaca: abre Google y busca. No aparecer ahí es dejarle la mesa servida a otros.",
    typing: true,
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

const extras = ["Licores", "Comidas", "Decoración", "Fechas especiales"];

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

const searchPhrases = ["Moteles en Armenia", "Moteles temáticos en el Quindío", "Motel con jacuzzi cerca"];

const h2Class =
  "text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl";
const leadClass = "max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg";

function Eyebrow({ children, i = 0 }: { children: React.ReactNode; i?: number }) {
  return (
    <Reveal i={i}>
      <span className="eyebrow">{children}</span>
    </Reveal>
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

function SearchBar({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-sm border border-line bg-paper px-3 py-2 font-mono text-label text-ink-soft">
      <span className="text-ink-mute">⌕ </span>
      {children}
    </p>
  );
}

function ProblemCard({ p, i }: { p: (typeof problems)[number]; i: number }) {
  return (
    <Reveal i={5 + i} className="h-full">
      <article className="h-full rounded-md border border-line bg-card p-6">
        <span className="font-mono text-label text-ink-mute">0{i + 1}</span>
        <h3 className="mb-3 mt-2 text-lg font-semibold text-ink">{p.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
        {p.proof && (
          <div className="space-y-2">
            <SearchBar>{p.proof}</SearchBar>
            <p className="font-mono text-label text-alert">{p.result}</p>
          </div>
        )}
        {p.prompt && (
          <div className="rounded-sm border border-line bg-paper p-3 text-xs text-ink-soft">
            ¿Guardar <b className="text-ink">“Motel”</b> en tus contactos?
            <div className="mt-2 flex gap-2 font-mono text-micro">
              <span className="rounded-sm border border-line px-2 py-1 text-ink-mute">Cancelar</span>
              <span className="rounded-sm border border-line px-2 py-1 text-ink-mute">Guardar</span>
            </div>
          </div>
        )}
        {p.typing && (
          <SearchBar>
            <TypingText phrases={searchPhrases} />
            <span className="deck-caret ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-signal" />
          </SearchBar>
        )}
      </article>
    </Reveal>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div className="instrument mx-auto w-full max-w-[290px] rounded-md border border-line bg-card p-2">
        <div className="relative h-[480px] overflow-hidden rounded-sm border border-line bg-paper">
          <div
            className="deck-scroller space-y-3 p-3"
            style={{ "--scroll": "-250px" } as React.CSSProperties}
          >
            <div className="flex items-center justify-between font-mono text-micro text-ink-mute">
              <span>MENÚ</span>
              <b className="font-semibold text-ink">LA GUACA</b>
              <span>24/7</span>
            </div>
            <div className="rounded-sm border border-line bg-card p-4">
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
              <div key={r.name} className="overflow-hidden rounded-sm border border-line bg-card">
                <div className="grid h-14 place-items-center bg-secondary font-mono text-micro text-ink-mute">
                  FOTO
                </div>
                <div className="flex items-center justify-between gap-2 px-3 py-2">
                  <div>
                    <b className="block font-mono text-micro text-ink">{r.name}</b>
                    <span className="text-label text-ink-mute">{r.detail}</span>
                  </div>
                  <i className="tnum font-mono text-xs font-semibold not-italic text-copper">{r.price}</i>
                </div>
              </div>
            ))}
            <p className="font-mono text-micro text-ink-mute">SERVICIOS ADICIONALES</p>
            <div className="flex flex-wrap gap-1.5 pb-2">
              {extras.map((e) => (
                <span key={e} className="rounded-sm border border-line px-2 py-1 text-label text-ink-soft">
                  {e}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-line bg-signal-soft px-4 py-2.5 text-xs text-ink">
            <FaWhatsapp className="h-4 w-4 text-signal" />
            ¿Hay disponibilidad?
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-label text-ink-mute">
        Maqueta ilustrativa. Las fotos reales llegan en la versión final.
      </p>
    </div>
  );
}

const slides: DeckSlide[] = [
  {
    label: "Portada",
    content: (
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow>Propuesta comercial · 2026</Eyebrow>
          <h1 className="mb-6 mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-[64px]">
            <Line i={1}>Posicionamiento</Line>
            <Line i={2}>y catálogo digital</Line>
            <Line i={3} className="text-signal">automatizado</Line>
          </h1>
          <Reveal i={5}>
            <p className={`${leadClass} mb-8`}>Transformando búsquedas de Google en habitaciones ocupadas.</p>
          </Reveal>
          <Reveal i={6}>
            <p className="font-mono text-label text-ink-mute">
              EXCLUSIVO PARA <b className="font-semibold text-ink">MOTEL LA GUACA</b>
            </p>
          </Reveal>
          <Reveal i={7} className="mt-3 flex items-center gap-2 font-mono text-label text-ink-mute">
            PRESENTADO POR
            <a href={siteConfig.url} target="_blank" rel="noopener noreferrer" aria-label="NexoBite">
              <BrandLogo markClassName="h-6 w-6" className="text-ink" />
            </a>
          </Reveal>
        </div>
        <Reveal i={2} kind="scale" className="hidden justify-self-center lg:col-span-4 lg:block">
          <Image
            src="/propuestas/la-guaca-logo.webp"
            alt="Logo Motel La Guaca"
            width={260}
            height={260}
            priority
            className="rounded-full border border-line-strong"
          />
        </Reveal>
      </div>
    ),
  },
  {
    label: "El problema",
    content: (
      <>
        <div className="mb-10 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>01 · El problema</Eyebrow>
            <h2 className={`${h2Class} mt-4`}>
              <Line i={1}>¿Cuántas parejas se van</Line>
              <Line i={2}>a la competencia <span className="text-copper">cada semana</span></Line>
              <Line i={3}>sin que lo notes?</Line>
            </h2>
          </div>
          <Reveal i={4}>
            <p className="text-pretty text-base leading-relaxed text-ink-soft">
              La Guaca tiene <strong className="text-ink">habitaciones temáticas</strong> únicas y un catálogo de WhatsApp muy bien estructurado. Pero hoy ese gran trabajo solo lo ven quienes <strong className="text-ink">ya tienen guardado el número del motel</strong>. Y en este sector el cliente decide por <strong className="text-ink">impulso, emoción y discreción</strong>.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </>
    ),
  },
  {
    label: "La solución",
    content: (
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>02 · La solución</Eyebrow>
          <h2 className={`${h2Class} mb-6 mt-4`}>
            <Line i={1}>Tu recepcionista</Line>
            <Line i={2}>y vitrina <span className="text-signal">VIP 24/7</span></Line>
          </h2>
          <Reveal i={3}>
            <p className={`${leadClass} mb-6`}>
              Una plataforma web <strong className="text-ink">moderna, rápida y pensada para la identidad de La Guaca</strong>: el complemento perfecto de su catálogo y el principal motor de tráfico hacia su WhatsApp.
            </p>
          </Reveal>
          <Reveal i={4} className="mb-8 flex flex-wrap gap-2.5">
            {["5 suites con precio visible", "Motor de tráfico a WhatsApp", "100% adaptada a celular"].map((t) => (
              <span key={t} className="badge b-active">
                <i />
                {t}
              </span>
            ))}
          </Reveal>
          <Reveal i={5}>
            <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Ver demostración en vivo
                <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </Reveal>
          <Reveal i={6}>
            <p className="mt-4 text-xs text-ink-mute">
              Las fotografías actuales son de referencia; en la versión final lucirán las instalaciones reales de La Guaca.
            </p>
          </Reveal>
        </div>
        <Reveal i={3} kind="right" className="lg:col-span-5">
          <PhoneMockup />
        </Reveal>
      </div>
    ),
  },
  {
    label: "Beneficios",
    content: (
      <>
        <Eyebrow>03 · Lo que gana el motel desde el día uno</Eyebrow>
        <h2 className={`${h2Class} mb-10 mt-4`}>
          <Line i={1}>Más clientes al chat, <span className="text-signal">ya convencidos</span></Line>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} i={2 + i} className="h-full">
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
            </Reveal>
          ))}
        </div>
      </>
    ),
  },
  {
    label: "Retorno de inversión",
    content: (
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>04 · Hagamos cuentas rápidas</Eyebrow>
          <h2 className={`${h2Class} mb-6 mt-4`}>
            <Line i={1}>¿Es un gasto</Line>
            <Line i={2}>o una <span className="text-copper">inversión?</span></Line>
          </h2>
          <Reveal i={3}>
            <p className={`${leadClass} mb-4`}>
              El valor de la plataforma no se mide por lo que cuesta hacerla, sino por <strong className="text-ink">la velocidad con la que se paga sola</strong>.
            </p>
          </Reveal>
          <Reveal i={4}>
            <p className={leadClass}>
              Con una habitación promedio de <strong className="tnum text-ink">$60.000 a $90.000 COP</strong>, bastan <strong className="text-ink">entre 11 y 17 parejas nuevas</strong> llegando desde Google para recuperar el 100% de la inversión. A partir de ahí, todo es ganancia neta.
            </p>
          </Reveal>
        </div>
        <Reveal i={3} kind="right">
          <RoiCalculator investment={INVESTMENT} min={50000} max={260000} step={5000} initialRate={65000} />
        </Reveal>
      </div>
    ),
  },
  {
    label: "Inversión",
    content: (
      <>
        <Eyebrow>05 · Inversión y acompañamiento</Eyebrow>
        <h2 className={`${h2Class} mb-10 mt-4`}>
          <Line i={1}>Llave en mano, <span className="text-signal">y a tu lado</span></Line>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal i={2} className="h-full">
            <article className="instrument h-full rounded-md border border-line bg-card p-6 sm:p-8">
              <p className="mb-4 font-mono text-label text-ink-mute">FASE 1 · DESARROLLO E IMPLEMENTACIÓN</p>
              <p className="mb-6 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold text-ink">
                  <CountUp to={INVESTMENT} />
                </span>
                <span className="font-mono text-label text-ink-mute">COP · pago único</span>
              </p>
              <Checks items={phase1} />
              <div className="mt-6 rounded-sm border border-copper/40 bg-copper-soft p-4 text-sm text-ink-soft">
                <p className="mb-1 font-mono text-label text-copper">BONO DE LANZAMIENTO</p>
                <strong className="text-ink">2 meses</strong> de soporte técnico y administración web sin costo.
              </div>
            </article>
          </Reveal>
          <Reveal i={3} className="h-full">
            <article className="h-full rounded-md border border-line bg-card p-6 sm:p-8">
              <p className="mb-4 font-mono text-label text-ink-mute">FASE 2 · SOPORTE ACTIVO Y MARKETING</p>
              <p className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold text-ink">
                  <CountUp to={100000} delay={750} />
                </span>
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
          </Reveal>
        </div>
      </>
    ),
  },
  {
    label: "Exclusividad",
    content: (
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal i={1} kind="scale" className="justify-self-center lg:col-span-5">
          <div className="relative grid aspect-square w-[min(340px,70vw)] place-items-center">
            <svg className="deck-ring absolute inset-0 h-full w-full" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="seal-circle" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
              </defs>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3.6" fill="#1C8A76">
                <textPath href="#seal-circle">UN SOLO MOTEL EN LA ZONA · EXCLUSIVIDAD ARMENIA ·</textPath>
              </text>
            </svg>
            <div className="instrument grid aspect-square w-2/3 place-items-center rounded-full border border-line bg-card text-center">
              <div>
                <b className="block font-display text-8xl font-extrabold leading-[0.8] text-signal">1</b>
                <small className="font-mono text-label uppercase text-ink-soft">aliado por zona</small>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Eyebrow>06 · Exclusividad y garantía de cupo</Eyebrow>
          <h2 className={`${h2Class} mb-6 mt-4`}>
            <Line i={1}>No competimos</Line>
            <Line i={2}><span className="text-copper">contra nosotros mismos</span></Line>
          </h2>
          <Reveal i={3}>
            <p className={`${leadClass} mb-4`}>
              Nuestro objetivo es que nuestro aliado domine las búsquedas locales. Por su trayectoria y el concepto único de sus habitaciones, <strong className="text-ink">La Guaca es el primer motel en Armenia al que le presentamos este proyecto.</strong>
            </p>
          </Reveal>
          <Reveal i={4}>
            <p className={`${leadClass} mb-8`}>
              Trabajaremos este posicionamiento con <strong className="text-ink">un solo motel en la zona</strong>. Reservamos la exclusividad y las condiciones de esta oferta por:
            </p>
          </Reveal>
          <Reveal i={5} className="flex gap-3">
            {[1, 2, 3].map((d, k) => (
              <div
                key={d}
                style={{ "--k": k } as React.CSSProperties}
                className={`deck-day grid h-[72px] w-[60px] place-items-center rounded-sm border ${
                  d === 3 ? "border-copper/60 bg-copper-soft" : "border-line bg-card"
                }`}
              >
                <div className="text-center">
                  <b className="tnum block font-mono text-3xl leading-none text-ink">{d}</b>
                  <small className="font-mono text-micro text-ink-mute">DÍA</small>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    ),
  },
  {
    label: "Contacto",
    content: (
      <div className="text-center">
        <Reveal i={0} kind="scale" className="mb-8 flex items-center justify-center gap-5">
          <Image
            src="/propuestas/la-guaca-logo.webp"
            alt="La Guaca"
            width={72}
            height={72}
            className="rounded-full border border-line-strong"
          />
          <span className="font-mono text-ink-mute">×</span>
          <BrandLogo markClassName="h-9 w-9" className="text-ink" />
        </Reveal>
        <h2 className={`${h2Class} mx-auto mb-6 max-w-3xl`}>
          <Line i={1}>Llenemos más habitaciones</Line>
          <Line i={2} className="text-signal">desde Google</Line>
        </h2>
        <Reveal i={3}>
          <p className={`${leadClass} mx-auto mb-8`}>
            Confirma hoy y en pocos días La Guaca tendrá su vitrina VIP 24/7 lista para recibir parejas nuevas cada semana.
          </p>
        </Reveal>
        <Reveal i={4} className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button size="lg" variant="signal" asChild className="group rounded-sm font-medium">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click">
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
        </Reveal>
        <Reveal i={5}>
          <p className="mt-8 font-mono text-label text-ink-mute">
            {siteConfig.url.replace("https://", "")} · {siteConfig.contact.phoneDisplay}
          </p>
        </Reveal>
      </div>
    ),
  },
];

export default function PropuestaLaGuacaPage() {
  return (
    <ProposalDeck
      slides={slides}
      brand={
        <span className="inline-flex items-center gap-3">
          <Image
            src="/propuestas/la-guaca-logo.webp"
            alt=""
            width={32}
            height={32}
            className="rounded-full border border-line"
          />
          <span className="font-display text-base font-bold text-ink">
            La <span className="text-signal">Guaca</span>
          </span>
        </span>
      }
    />
  );
}
