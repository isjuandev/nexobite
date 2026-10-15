# NexoBite

Landing y sitio comercial de **NexoBite**, agencia boutique colombiana de automatización y desarrollo digital para PYMEs. Es la vitrina de **NexoBite SaaS** (panel, bot multi-agente y widget de chat): presenta la oferta, monta el propio chat de NexoBite y lleva al visitante a WhatsApp. Construido con **Next.js 16**, **React 19** y **Tailwind CSS 4**, desplegado en Vercel (`www.nexobite.com`).

## Sobre el proyecto

El sitio está orientado a conversión: el visitante pasa de "ver qué hace la agencia" a "iniciar una conversación comercial" en el menor número de pasos. La oferta son **chatbots con IA para WhatsApp**, **páginas web para empresas** y **software a medida**, vendidos como servicio con implementación (no como autoservicio).

Todo CTA termina en WhatsApp (`wa.me/+573009459026`, con mensaje precargado según el plan elegido). Como alternativa, el widget de chat del SaaS está montado en todas las páginas y los leads se envían firmados a n8n.

La copy está escrita en lenguaje sin tecnicismos, pensada para dueños de negocio, no para perfiles técnicos.

## Características

- **Landing one-page** con las secciones: Hero (simulador de WhatsApp), Métricas, Problema, Soluciones, Demo de producto, Plataforma, Antes/Después, Proceso, Servicios, Planes, Testimonios (ocultos hasta tener casos reales validados), FAQ y CTA final.
- **4 páginas de servicio** optimizadas para SEO, generadas desde una plantilla (`/servicios/[slug]`): `automatizacion-whatsapp`, `paginas-web-para-empresas`, `integracion-de-herramientas` y `software-a-medida`. Cada una tiene Hero con maqueta, problema, qué incluye, proceso, precios o cotización, FAQ, CTA y JSON-LD.
- **Planes Start / Sales / Scale**, con implementación y mensualidad en COP y selector de conexión de WhatsApp (económica u oficial de Meta):

  | Plan | Implementación | Mensualidad | Entrega |
  | --- | --- | --- | --- |
  | Start | $1.190.000 | $140.000 | 5–7 días |
  | Sales (recomendado) | $1.890.000 | $220.000 | 10–14 días |
  | Scale | $3.490.000 | $290.000 | 20–25 días |

- **Widget de chat NexoBite** (OmniChat) montado en el layout, con tenant `nexobite` y estilos propios inyectados en su Shadow DOM.
- **Captura de leads** vía `POST /api/leads` → webhook de n8n, con honeypot, límite por IP, timeout y **firma HMAC v2**.
- **Analítica de conversiones**: `ConversionTracker` registra los eventos `data-analytics-event` en Vercel Analytics y propaga los UTM a los mensajes de WhatsApp. Además se usa Vercel Speed Insights.
- **SEO técnico**: `sitemap.xml`, `robots.txt`, JSON-LD (schema markup), Open Graph y Twitter, FAQ renderizado en servidor, cabeceras de seguridad y optimizaciones de LCP móvil.
- **Plantilla de propuestas comerciales** (`/propuesta-template`, no indexada) y páginas legales (privacidad y condiciones del servicio).
- **Identidad "Instrumento"** en Dark Mode exclusivo: verde señal `#1C8A76`, cobre `#D6924E`, carbón `#0E1013`, Plus Jakarta Sans y JetBrains Mono.

## Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Estilos | Tailwind CSS 4, tailwindcss-animate / tw-animate-css, shadcn/ui + Radix UI |
| Componentes | Embla Carousel, React Icons, CVA + Tailwind Merge |
| API | Next.js Route Handlers (`app/api/leads`) |
| Integraciones | n8n (leads), NexoBite SaaS (widget y panel), WhatsApp |
| Analítica | Vercel Analytics y Speed Insights |
| Despliegue | Vercel |
| Package manager | pnpm |

`package.json` declara además dependencias disponibles para usos futuros (react-hook-form, zod, recharts, sonner, vaul, date-fns, etc.).

## Estructura del proyecto

```
app/
├── api/leads/route.ts                      # Captura de leads → n8n (firmada con HMAC)
├── servicios/[slug]/page.tsx               # Plantilla de las 4 páginas de servicio
├── condiciones-del-servicio/               # Página legal
├── politica-de-privacidad/                 # Página legal
├── propuesta-template/                     # Plantilla de propuesta comercial
├── propuestas/la-guaca/                    # Propuesta a medida para un cliente (noindex)
├── layout.tsx                              # Layout raíz (SEO, fuentes, analytics, widget)
├── page.tsx                                # Landing principal
├── robots.ts / sitemap.ts                  # robots.txt y sitemap.xml
components/
├── ui/                                     # Botones y cards (shadcn/ui)
├── hero-section.tsx                        # Hero con simulador de WhatsApp
├── metrics-bar / problem / solutions / before-after / process / services
├── product-demo.tsx                        # Demo interactiva (carga diferida)
├── platform-section.tsx                    # Presentación del panel NexoBite
├── pricing-section.tsx                     # Planes y selector de conexión (carga diferida)
├── service-page.tsx / service-mockups.tsx  # Plantilla y maquetas de las páginas de servicio
├── faq-section.tsx / testimonials-section.tsx / cta-section.tsx
├── chatbot-widget.tsx                      # Widget OmniChat + overrides de Shadow DOM
├── conversion-tracker.tsx                  # Eventos de conversión y UTM
├── schema-markup.tsx                       # Datos estructurados JSON-LD
├── lead-form.tsx                           # Formulario alterno → /api/leads
├── animated-section / container / brand-logo
└── header.tsx / footer.tsx
lib/
├── site-config.ts                          # Datos oficiales de contacto y URLs (NAP)
├── faqs.ts                                 # Preguntas frecuentes de la landing (UI y JSON-LD)
├── services.ts                             # Contenido de las 4 páginas de servicio
├── plans.ts                                # Planes y precios en COP (fuente única)
├── analytics.ts                            # Eventos y atribución UTM
├── hmac.ts                                 # Firma HMAC v2 de peticiones a n8n
└── utils.ts                                # cn() y utilidades
docs/REPORTE-VINCULACION-SAAS.md            # Análisis de vinculación landing ↔ SaaS
public/                                     # Logomarcas y fuentes (las imágenes OG se generan en app/_og)
.agents/skills/ · .claude/skills/           # Skills de diseño y UI para agentes (ver abajo)
```

## Configuración de entorno

Crea un `.env.local` (ignorado por git) con:

```bash
N8N_LEAD_WEBHOOK_URL=https://n8n.nexobite.com/webhook/landing/leads
# Mismo valor que N8N_INTERNAL_WEBHOOK_KEY del SaaS: firma cada lead (HMAC v2) para que n8n lo acepte
N8N_LEAD_WEBHOOK_SECRET=
```

Si falta alguna de las dos variables, `/api/leads` responde `500` con un mensaje claro. Cada envío incluye las cabeceras `x-timestamp` y `x-signature` (`v2=` + HMAC-SHA256 hex de `${timestamp}.${json canónico}`), idénticas a las del SaaS. El workflow de n8n (`wf-v2-landing-leads`) verifica la firma y registra el lead en el SaaS (`POST /internal/leads`).

Payload que recibe el webhook (`source` es `nexobite_chatbot_widget` o `nexobite_landing_form`):

```json
{
  "source": "nexobite_chatbot_widget",
  "createdAt": "2026-08-16T12:00:00.000Z",
  "lead": { "name": "...", "phone": "...", "email": "...", "message": "...", "business": "..." },
  "metadata": { "pageUrl": "...", "userAgent": "...", "ip": "..." }
}
```

Los datos de contacto, la URL del sitio y el enlace de inicio de sesión del panel (`appLoginUrl`) viven en `lib/site-config.ts`. Deben coincidir con el Perfil de Google Business para mantener la coherencia NAP del SEO local.

## Cómo empezar

Requisitos: Node.js 20+ y pnpm.

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Script | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm start` | Servidor de producción |
| `pnpm lint` | ESLint |
| `pnpm analyze` | Build con análisis del bundle (`ANALYZE=true`) |

## Widget de chat

`components/chatbot-widget.tsx` carga `https://app.nexobite.com/widget.js` con el tenant `nexobite` y está montado en `app/layout.tsx`. Los colores del botón flotante se configuran en este componente; los del panel del chat, en el canal webchat del SaaS. Para evitar doble marco y recortes, el componente inyecta estilos dentro del Shadow DOM del widget (`#omnichat-widget-root`) y escala el panel en pantallas de poca altura.

## Plantilla de propuesta comercial

`/propuesta-template` genera propuestas por cliente. Edita los objetos `CLIENT_CONFIG`, `proposals` y `paymentOptions` al inicio de `app/propuesta-template/page.tsx` (datos del cliente, planes, precios y opciones de pago); el resto no requiere cambios. La página está excluida del sitemap.

## Skills para agentes

El repo incluye skills de diseño instalados con `npx skills` en `.agents/skills/`, enlazados desde `.claude/skills/` (el estado queda en `skills-lock.json`): `ui-ux-pro-max`, `frontend-design` y la colección de `emilkowalski/skills` (animación, `emil-design-eng`, `break-ui`, `mobile-native`, entre otros). Para actualizarlos: `npx skills@latest update`.

## Documentación de diseño

- [`IDENTIDAD-VISUAL.md`](IDENTIDAD-VISUAL.md): identidad de marca "Instrumento" (v6.1), sincronizada con el código.
- [`DESIGN.MD`](DESIGN.MD): sistema de diseño y arquitectura comercial.
- [`docs/REPORTE-VINCULACION-SAAS.md`](docs/REPORTE-VINCULACION-SAAS.md): cómo se relacionan la landing y NexoBite SaaS.

## Portfolio

> **NexoBite** — Sitio comercial para una agencia de automatización de ventas para PYMEs colombianas, vitrina de su plataforma SaaS. Next.js 16 y Tailwind CSS 4 con landing one-page, páginas de servicio, planes en COP y SEO completo (sitemap, JSON-LD, Open Graph, FAQ SSR). Integra el widget de chat propio montado en Shadow DOM, captura de leads firmados con HMAC hacia n8n, CTAs a WhatsApp con atribución UTM y analítica de conversiones. Diseño de precisión técnica "Instrumento" en Dark Mode exclusivo con verde señal, acentos de cobre y tipografías Plus Jakarta Sans / JetBrains Mono.
