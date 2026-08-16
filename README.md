# NexoBite

Sitio web corporativo y de captación de clientes de **NexoBite**, agencia boutique colombiana de automatización y desarrollo digital para PYMEs. Construido con **Next.js 16**, **React 19** y **Tailwind CSS 4**.

## Sobre el proyecto

NexoBite es una landing page orientada a conversión que presenta la oferta de servicios de la agencia: **chatbots con IA para WhatsApp**, **desarrollo web** y **software a medida**. El sitio está pensado para que un visitante pase de "ver qué hace la agencia" a "iniciar una conversación comercial" en el menor número de pasos posible: todos los CTAs conducen directamente a WhatsApp.

El sitio incluye una plantilla de **propuestas comerciales** reutilizable, páginas legales (política de privacidad y condiciones del servicio) y una ruta API para la captura de leads hacia n8n.

## Características

- **Landing page one-page** con secciones: Hero, Servicios, Cómo funciona, Planes por Servicio, Paquetes Integrales y CTA final.
- **Planes por servicio** (Chatbots con IA y Desarrollo Web) en tres niveles (Esencial / Avanzado / Premium) con precios en COP.
- **Paquetes integrales** con carrusel (Embla) en móvil y grilla en escritorio.
- **Captura de leads hacia n8n** mediante la API interna `POST /api/leads`, que valida la información y la reenvía a un webhook.
- **Integración con WhatsApp** en todos los puntos de contacto (`wa.me`) y widget de chatbot (OmniChat) listo para montar.
- **SEO completo**: `sitemap.xml`, `robots.txt`, schema markup (JSON-LD), metadata Open Graph y Twitter, título/descripción por página.
- **Analítica** de Vercel (`@vercel/analytics`).
- **Encabezados de seguridad** vía `next.config.ts` (nosniff, X-Frame-Options, Referrer-Policy).
- **Tema oscuro** inspirado en Supabase, con color primario naranja `#FF7400` y tipografías Satoshi (display/cuerpo) y JetBrains Mono (técnica).

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
├── hero-section.tsx            # Hero con estadísticas
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
public/                         # Imágenes, logos y fuentes (Satoshi)
```

## Configuración de entorno

Copia `.env.local` (ver `.env.example` o crea uno) y define el webhook de n8n:

```bash
N8N_LEAD_WEBHOOK_URL=http://localhost:5678/webhook/ventas
```

Si la variable no está definida, la API `/api/leads` responde `500` con un mensaje claro. El payload que recibe el webhook tiene la siguiente forma:

```json
{
  "source": "nexobite_chatbot_widget",
  "createdAt": "2026-08-16T12:00:00.000Z",
  "lead": { "name": "...", "phone": "...", "email": "...", "message": "..." },
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

- El widget de chatbot (`components/chatbot-widget.tsx`) integra el widget **OmniChat** de `nex.nexobite.com`. Actualmente está disponible para montar pero no se importa en el layout.
- La marca usa **naranja** (`#FF7400`) como color primario y texto near-black (`#171717`) sobre los CTAs naranjas. La guía completa está en `IDENTIDAD-VISUAL.md` y `DESIGN.MD`.

## Portfolio

> **NexoBite** — Sitio web comercial para una agencia de automatización de ventas para PYMEs colombianas. Landing page one-page en Next.js 16 y Tailwind CSS 4 con planes de precios en COP, paquetes integrales y carruseles responsive. Integra captura de leads hacia n8n vía API Route, CTAs directos a WhatsApp, widget de chatbot OmniChat y SEO completo (sitemap, robots, schema JSON-LD y Open Graph). Diseño oscuro inspirado en Supabase con acento naranja, tipografías Satoshi/JetBrains Mono y animaciones de entrada por scroll.