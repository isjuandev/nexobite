# NexoBite

Sitio web corporativo y de captación de clientes de **NexoBite**, agencia boutique colombiana de automatización y desarrollo digital para PYMEs. Construido con **Next.js 16**, **React 19** y **Tailwind CSS 4**.

## Sobre el proyecto

NexoBite es una landing page orientada a conversión que presenta la oferta de servicios de la agencia: **chatbots con IA para WhatsApp**, **desarrollo web** y **software a medida**. El sitio está pensado para que un visitante pase de "ver qué hace la agencia" a "iniciar una conversación comercial" en el menor número de pasos posible: todos los CTAs conducen directamente a WhatsApp.

El sitio incluye una plantilla de **propuestas comerciales** reutilizable, páginas legales (política de privacidad y condiciones del servicio) y una ruta API para la captura de leads hacia n8n.

## Características

- **Landing one-page** con secciones: Hero, Métricas, Problema, Solución, Demostración, Plataforma, Antes/Después, Proceso, Servicios, Planes, FAQ y CTA final (los testimonios se muestran solo cuando hay casos reales validados).
- **Planes Start / Sales / Scale** con implementación y mensualidad en COP, y selector de **conexión de WhatsApp** (económica u oficial de Meta).
- **Plataforma NexoBite**: sección que presenta el panel (bandeja, agenda, clientes, reportes) y enlace de inicio de sesión (`siteConfig.appLoginUrl`).
- **Captura de leads**: CTAs a WhatsApp y formulario alterno que envía a `POST /api/leads` → webhook de n8n (con honeypot y límite por IP).
- **Analítica de conversiones**: `ConversionTracker` registra los `data-analytics-event` en Vercel Analytics y propaga los UTM a los mensajes de WhatsApp.
- **SEO completo**: `sitemap.xml`, `robots.txt`, schema markup (JSON-LD), Open Graph y Twitter, FAQ renderizado en servidor.
- **Páginas de servicio, legales y plantilla de propuestas** (`/propuesta-template`).
- **Identidad "Instrumento" (Dark Mode exclusivo)**: verde señal `#1C8A76`, cobre `#D6924E`, carbón `#0E1013`, Plus Jakarta Sans y JetBrains Mono.

## Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Estilos | Tailwind CSS 4, Tailwind Animate, shadcn/ui + Radix UI |
| Componentes | Embla Carousel, React Icons, CVA + Tailwind Merge |
| API | Next.js Route Handlers (`app/api/leads`) |
| Despliegue | Vercel |
| Package manager | pnpm |

El resto de dependencias declaradas (react-hook-form, zod, recharts, sonner, vaul, date-fns, etc.) están disponibles para usos futuros en `package.json`.

## Estructura del proyecto

```
app/
├── api/leads/route.ts          # API de captura de leads hacia n8n
├── condiciones-del-servicio/   # Página legal de condiciones
├── politica-de-privacidad/     # Página legal de privacidad
├── propuesta-template/         # Plantilla de propuesta comercial
├── layout.tsx                  # Layout raíz (SEO, fuentes, analytics)
├── page.tsx                    # Landing page principal
├── robots.ts                   # robots.txt
└── sitemap.ts                  # sitemap.xml
components/
├── ui/                         # Botones y cards (shadcn/ui)
├── hero-section.tsx            # Hero con simulador de WhatsApp
├── platform-section.tsx        # Presentación del panel NexoBite
├── pricing-section.tsx         # Planes Start/Sales/Scale y selector de conexión
├── lead-form.tsx               # Formulario de contacto → /api/leads
├── conversion-tracker.tsx      # Eventos de conversión y UTM
├── services-section.tsx        # Servicios (Chatbots, Web, Software)
├── how-it-works-section.tsx    # Proceso en 3 pasos
├── mini-plans-section.tsx      # Planes por servicio
├── packages-section.tsx        # Paquetes integrales
├── cta-section.tsx             # Llamado a la acción final
├── chatbot-widget.tsx          # Widget OmniChat (nex.nexobite.com)
├── particle-field.tsx          # Fondo de partículas
├── schema-markup.tsx           # Datos estructurados JSON-LD
├── header.tsx / footer.tsx     # Navegación y pie de página
└── brand-logo.tsx / container.tsx / animated-section.tsx
lib/utils.ts                    # Utilidades (cn, Tailwind Merge)
public/                         # Imágenes y logomarcas oficiales
```

## Configuración de entorno

Copia `.env.local` (ver `.env.example` o crea uno) y define el webhook de n8n:

```bash
N8N_LEAD_WEBHOOK_URL=https://n8n.nexobite.com/webhook/landing/leads
# Mismo valor que N8N_INTERNAL_WEBHOOK_KEY del SaaS: firma cada lead (HMAC v2) para que n8n lo acepte
N8N_LEAD_WEBHOOK_SECRET=
```

Si falta alguna de las dos variables, la API `/api/leads` responde `500` con un mensaje claro. El workflow de n8n (`wf-v2-landing-leads`) verifica la firma y registra el lead en el SaaS (`POST /internal/leads`). El payload que recibe el webhook tiene la siguiente forma (`source` es `nexobite_chatbot_widget` o `nexobite_landing_form`):

```json
{
  "source": "nexobite_chatbot_widget",
  "createdAt": "2026-08-16T12:00:00.000Z",
  "lead": { "name": "...", "phone": "...", "email": "...", "message": "...", "business": "..." },
  "metadata": { "pageUrl": "...", "userAgent": "...", "ip": "..." }
}
```

## Cómo empezar

Requisitos: Node.js 20+, pnpm.

```bash
# Instalar dependencias
pnpm install

# Levantar el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

### Scripts disponibles

| Script | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm start` | Servidor de producción |
| `pnpm lint` | ESLint |

## Plantilla de propuesta comercial

`/propuesta-template` es una plantilla para generar propuestas de venta por cliente. Para usarla, edita los objetos `CLIENT_CONFIG`, `proposals` y `paymentOptions` al inicio de `app/propuesta-template/page.tsx` (los datos del cliente, planes, precios y opciones de pago). El resto del componente no requiere modificaciones. La página no está indexada (`robots.ts` la excluye del sitemap).

## Notas

- El widget de chat (`components/chatbot-widget.tsx`) carga `https://app.nexobite.com/widget.js` con el tenant `nexobite` y está montado en el layout. Los colores del panel del chat se configuran en el canal webchat del SaaS; los del botón flotante, en este componente.
- La identidad visual **"Instrumento"** opera exclusivamente en Dark Mode con Verde Señal (`#1C8A76`), Cobre (`#D6924E`), Papel Carbón (`#0E1013`) y líneas finas (`#262B31`). La guía completa está en `IDENTIDAD-VISUAL.md` y `DESIGN.MD`.

## Portfolio

> **NexoBite** — Sitio web comercial para una agencia de automatización de ventas para PYMEs colombianas. Landing page one-page en Next.js 16 y Tailwind CSS 4 con planes de precios en COP, paquetes integrales y carruseles responsive. Integra captura de leads hacia n8n vía API Route, CTAs directos a WhatsApp, widget de chatbot OmniChat y SEO completo (sitemap, robots, schema JSON-LD y Open Graph). Diseño de precisión técnica "Instrumento" en Dark Mode exclusivo con verde señal, acentos de cobre, tipografías Plus Jakarta Sans / JetBrains Mono y corchetes de hardware.