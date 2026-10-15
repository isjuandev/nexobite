# CLAUDE.md

Landing y sitio comercial de **NexoBite** (agencia colombiana de automatización de WhatsApp y páginas web para PYMEs). Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui + Radix · pnpm. Despliegue en Vercel.

## Comandos

```bash
pnpm install       # dependencias
pnpm dev           # http://localhost:3000
pnpm lint          # ESLint
pnpm build         # build de producción (valida tipos)
pnpm analyze       # build con análisis del bundle
```

No hay pruebas automáticas: antes de dar un cambio por terminado, ejecuta `pnpm lint` y `pnpm build`, y revisa la página en el navegador (escritorio y 375px).

## Documentos de referencia (léelos antes de tocar UI)

- `DESIGN.MD`: sistema de diseño "Instrumento" (tokens, tipografía, componentes, prohibiciones). Es la fuente de verdad técnica.
- `IDENTIDAD-VISUAL.md`: guía de marca.
- `README.md`: visión general, entorno y estructura.
- `docs/REPORTE-VINCULACION-SAAS.md`: relación entre esta landing y NexoBite SaaS.

**Regla de sincronización:** si cambias un token, un componente base o un patrón visual, actualiza `DESIGN.MD` (y `IDENTIDAD-VISUAL.md` si afecta la marca) en el mismo commit.

## Reglas de diseño (resumen)

- **Solo modo oscuro.** Nada de tema claro ni selector de tema.
- Usa los tokens de `app/globals.css` (`bg-paper`, `bg-card`, `border-line`, `text-ink`, `text-ink-soft`, `text-ink-mute`, `signal`, `signal-deep`, `copper`, `alert`). No escribas hex sueltos en componentes.
- Botones con `rounded-sm` (4px), nunca píldora. Variante `signal` para CTAs comerciales.
- Bordes de 1px (`border-line`); casi sin sombras.
- Precios y cifras con `.tnum`; precios de planes en `font-display font-extrabold`; etiquetas técnicas en `font-mono` con `text-micro` (10px) o `text-label` (11px).
- `.instrument` (corchetes de cobre) solo para el elemento principal de una vista (simulador del Hero, plan recomendado).
- Prohibido: robots/cerebros/circuitos, canvas de partículas, telemetría falsa (`p95`, `tenant_id`), precios tachados, gradientes estridentes o neón.
- Se muestra producto real (simuladores, maquetas) en lugar de ilustraciones abstractas.

## Contenido y copy

- Todo el texto del sitio va en **español de Colombia**, en lenguaje claro y sin tecnicismos (atender, ordenar, vender).
- Los CTAs terminan en WhatsApp (`siteConfig.contact.whatsappUrl`) con mensaje precargado. Los datos de contacto y URLs viven en `lib/site-config.ts`; no los repitas en componentes.
- Planes y precios (COP) están en `lib/plans.ts` (los muestra `components/pricing-section.tsx`): Start $1.190.000 + $140.000/mes, Sales $1.890.000 + $220.000/mes, Scale $3.490.000 + $290.000/mes. Si cambian, actualiza también FAQ (`lib/faqs.ts`), README y `DESIGN.MD`.
- Las FAQ viven en `lib/faqs.ts` y alimentan tanto la UI como el JSON-LD.
- No inventes testimonios, cifras ni descuentos. `TestimonialsSection` devuelve `null` mientras `testimonials` esté vacío.

## Estructura clave

- `app/page.tsx`: orden de las secciones de la landing. `ProductDemo` y `PricingSection` se cargan con `dynamic`.
- `app/servicios/[slug]`: las 4 páginas de servicio salen de `lib/services.ts` + `components/service-page.tsx`. Para añadir o editar un servicio, cambia solo `lib/services.ts` (y la maqueta en `service-mockups.tsx` si hace falta). Están indexadas y en el sitemap.
- `app/propuesta-template`: plantilla de propuesta; no indexada.
- `app/propuestas/[cliente]`: propuestas a medida (hoy `la-guaca`), `noindex` y excluidas en `robots.ts`. **Tienen estilo propio, exento de las reglas de diseño de arriba** (ver `DESIGN.MD`), pero con los colores de marca. El contenido está en `deck.html`; los activos del cliente, en `public/propuestas/`.
- `app/api/leads/route.ts`: recibe leads → webhook de n8n firmado con HMAC v2 (`lib/hmac.ts`). Requiere `N8N_LEAD_WEBHOOK_URL` y `N8N_LEAD_WEBHOOK_SECRET` en `.env.local` (nunca los subas al repo).
- `components/chatbot-widget.tsx`: widget de chat del SaaS; inyecta estilos en su Shadow DOM.  No se carga en rutas `/propuesta*`.
- `components/animated-section.tsx`: fade-in al hacer scroll (respeta `prefers-reduced-motion`).
- `components/ui/`: solo `button` y `card` (shadcn adaptados). Añade componentes nuevos con los tokens del sistema.

## Convenciones de código

- Alias `@/` para imports. Server Components por defecto; `"use client"` solo cuando haga falta (estado, efectos, eventos).
- Estilos con Tailwind y `cn()` (`lib/utils.ts`); evita CSS nuevo en `globals.css` salvo tokens o utilidades de identidad reutilizables.
- Eventos de analítica con el atributo `data-analytics-event` (los recoge `ConversionTracker`).
- Una sección nueva de la landing sigue el patrón existente: `section` con `id` si se enlaza desde el header, `Container`, eyebrow numerado, h2 con frase final de color y contenido dentro de `AnimatedSection`.
- Commits en español con prefijo convencional (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).

## Skills del repo

Instalados con `npx skills` en `.agents/skills/` (enlazados desde `.claude/skills/`): `ui-ux-pro-max`, `frontend-design` y la colección de `emilkowalski/skills` (animación, `emil-design-eng`, `break-ui`, `mobile-native`, etc.). Úsalos para diseñar secciones y animaciones, respetando siempre las reglas de `DESIGN.MD`: si un skill sugiere algo que las contradice (tema claro, gradientes, partículas), gana `DESIGN.MD`.
