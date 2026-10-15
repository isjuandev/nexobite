---
version: 6.1
name: NexoBite-Instrumento-design-system
description: NexoBite's design system "Instrumento" — a precision-engineered commercial and product UI aesthetic built on a dark carbon paper canvas (#0E1013), modular card surfaces (#16191D), hairline structural borders (#262B31), Signal Green operational action (#1C8A76) and copper focus accents (#D6924E). Documented from the real implementation (app/globals.css, components/ui, components/*) and verified against the running landing at desktop (1024px) and mobile (375px) widths.

colors:
  paper: "#0E1013"
  card: "#16191D"
  secondary: "#1E2227"
  line: "#262B31"
  line-strong: "#383E46"
  ink: "#EDEFF2"
  ink-soft: "#B4BAC3"
  ink-mute: "#78808C"
  signal: "#1C8A76"
  signal-deep: "#146E5E"
  signal-soft: "#142824"
  copper: "#D6924E"
  copper-soft: "#2E2216"
  alert: "#B23A34"
  alert-soft: "#381A18"
  amber: "#C79A2E"
  amber-soft: "#382C14"

typography:
  display-xxl:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.025em
    usage: "h1 del Hero (text-[54px]); escala en móvil"
  display-xl:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.11
    letterSpacing: -0.015em
    usage: "h2 de sección (text-4xl)"
  heading-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.015em
    usage: "h3 de tarjetas (la base de h1–h6 es 600 / -0.015em)"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    color: ink-soft
  body-sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  price:
    fontFamily: "Plus Jakarta Sans (font-display), sans-serif"
    fontSize: 30px / 36px
    fontWeight: 800
    fontVariantNumeric: "tabular-nums"
    letterSpacing: tight
    usage: "Precios de los planes (text-3xl sm:text-4xl font-extrabold tnum)"
  mono-eyebrow:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: 11px
    fontWeight: 600
    letterSpacing: 0.06em
    color: signal
  mono-badge:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: 11px
    fontWeight: 500
  mono-micro:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: 10px
    fontWeight: 600
    usage: "Chips de plan, etiquetas CUELLO/FASE/PASO, timestamps"

spacing:
  container-max: 1280px
  container-gutter: "16px / 24px / 32px (base / sm / lg)"
  section-y: 112px
  card-padding: 24px
  header-height: 56px

rounded:
  sm: 4px
  md: 8px
  lg: 12px

shadows:
  card: "0 1px 2px rgb(0 0 0 / 0.4)"
  focus: "0 0 0 3px rgba(28, 138, 118, 0.25)"
---

# NexoBite Design System: "Instrumento" (v6.1)

> **Fuente de verdad:** este documento describe lo que existe en el código. Los tokens viven en `app/globals.css` (`:root` y `@theme inline`), los botones en `components/ui/button.tsx` y las tarjetas en `components/ui/card.tsx`. Si cambias un valor en el código, actualiza este archivo. La sección 7 registra las deudas resueltas y las pendientes.

## 1. Filosofía

NexoBite vende automatización comercial: asistentes de WhatsApp, páginas web que convierten y un panel donde el equipo opera todo. La identidad **"Instrumento"** parece el software que se vende: sobria, de bordes finos y legible, sin la estética de "hype de IA" (robots, neón, partículas, telemetría de servidores).

Principios:

- **Modo oscuro exclusivo.** Lienzo grafito sin tinte azul (`#0E1013`) y superficies modulares (`#16191D`). No hay tema claro.
- **Producto antes que decoración.** Se muestran simuladores y maquetas (chat de WhatsApp, panel de la plataforma) en lugar de ilustraciones.
- **Verde Señal = acción y estado operativo.** CTAs, checks, "activo", texto destacado de los titulares.
- **Cobre = atención y dato.** Cuellos de botella, plazos, precios secundarios, chips de plan y los corchetes `.instrument`.
- **Líneas de 1px** (`border-line`) estructuran todo; casi no hay sombras.
- **Lenguaje sin tecnicismos.** La copy habla de "atender, ordenar y vender", no de infraestructura.

Narrativa del sitio: `Web que capta → Asistente de WhatsApp que atiende y califica → Pantalla donde el equipo opera → Cierre`.

---

## 2. Sistema de color

Todos los tokens están definidos como variables CSS y expuestos a Tailwind v4 como `bg-*`, `text-*`, `border-*`.

### Superficie y tinta

| Token | Valor | Uso real |
| --- | --- | --- |
| `paper` | `#0E1013` | Fondo de `html`/`body` y de las secciones |
| `card` | `#16191D` | Tarjetas, paneles, simuladores, botón `outline` |
| `secondary` / `muted` | `#1E2227` | Fondos neutros de shadcn (botón `secondary`) |
| `line` | `#262B31` | Borde estándar de 1px (también `--border`, `--input`) |
| `line-strong` | `#383E46` | Bordes de botón `outline`, badges neutros y separadores |
| `ink` | `#EDEFF2` | Titulares, cifras y texto de alto contraste |
| `ink-soft` | `#B4BAC3` | Párrafos y descripciones |
| `ink-mute` | `#78808C` | Metadatos, etiquetas, timestamps, microcopy |

### Acentos

| Token | Valor | Uso real |
| --- | --- | --- |
| `signal` | `#1C8A76` | Botón `signal`, `eyebrow`, checks, palabra destacada del h1/h2, anillo de foco, launcher del chat |
| `signal-deep` | `#146E5E` | Hover del botón `signal` y de los botones `default`/`primary` |
| `signal-soft` | `#142824` | Relleno de burbujas del asistente, badges activos, chips |
| `copper` | `#D6924E` | Iconos de "cuello de botella", plazos, chips de plan, corchetes `.instrument`, palabra destacada del h2 de Problemas |
| `copper-soft` | `#2E2216` | Fondo de chips y badges de cobre |
| `alert` | `#B23A34` | Cruces de la columna "a mano", botón `destructive` |
| `alert-soft` | `#381A18` | Fondo de estados de error (token disponible) |
| `amber` / `amber-soft` | `#C79A2E` / `#382C14` | Advertencias; punto del badge `.b-delayed` |

Variables semánticas shadcn: `--primary = signal`, `--accent = copper`, `--destructive = alert`, `--ring = signal`, `--border = line`, `--muted-foreground = ink-mute`.

> **Tokens que ya no existen:** `paper-deep`, `card-hover`, `signal-hover` y `copper-deep` aparecían en versiones anteriores de este documento pero no están definidos en el código. El hover del verde es `signal-deep`.

---

## 3. Tipografía

Fuentes cargadas con `next/font/google` en `app/layout.tsx` (variable fonts, `display: swap`):

- **Plus Jakarta Sans** → `--font-sans` y `--font-display` (`font-sans`, `font-display`). Titulares y texto corrido.
- **JetBrains Mono** → `--font-mono` (`font-mono`). Eyebrows, badges, chips, etiquetas y texto "de instrumento".

Escala observada:

| Rol | Tamaño / peso | Notas |
| --- | --- | --- |
| h1 Hero | 54px · 700 · lh 1.1 · -0.025em | Una palabra o frase en `text-signal` |
| h2 sección | 36px · 600 · lh 1.11 · -0.015em | Frase final destacada en `signal` (o `copper` en Problemas) |
| h3 tarjeta | 16px · 600 | Base global de h1–h6: 600 con -0.015em |
| Párrafo | 16px · 400 · lh 1.5 · `ink-soft` | |
| Eyebrow | mono 11px · 600 · 0.06em · `signal` | Prefijo `—` de 14px×1px (`.eyebrow::before`) |
| Badge | mono 11px · 500 | `.badge` |
| Micro / label | mono 10px (`text-micro`) y 11px (`text-label`) | Chips de plan, `CUELLO 01`, `FASE 01`, `PASO 01`, timestamps. Tokens `--text-micro` y `--text-label` en `@theme` |

**Números:** usa `.tnum` (`tabular-nums`) en precios, plazos y porcentajes. Los precios de los planes se renderizan en **Plus Jakarta Sans extrabold** (`font-display font-extrabold tnum`); la mensualidad y los plazos que los acompañan van en `font-mono`. Las cifras de la `MetricsBar` usan `font-display font-bold`.

---

## 4. Layout y espaciado

- **Contenedor:** `max-w-7xl` (1280px) con gutter `px-4 sm:px-6 lg:px-8` (`components/container.tsx`; también `max-w-3xl`, `5xl`, `1400px`).
- **Secciones:** `py-28` (112px) arriba y abajo; el Hero usa 112px arriba y 64px abajo y `MetricsBar` 40px. Las secciones con `id` tienen `scroll-margin-top: 100px` y la página `scroll-behavior: smooth`.
- **Tarjetas:** `p-6` (24px) a `p-8`, `rounded-md` (8px), borde `line`, fondo `card`.
- **Header:** fijo, `px-4 pt-4`, barra flotante `max-w-7xl` de 56px de alto con `backdrop-blur-sm` y borde fino.
- **Responsive:** móvil a 375px sin scroll horizontal; el Hero apila texto y simulador, los botones pasan a ancho completo y la navegación se reduce a un botón de menú.

Radios (`--radius-sm/md/lg`): 4px, 8px, 12px. `--radius` base de shadcn: 4px.

---

## 5. Componentes y patrones

### Header (`header.tsx`)
Barra flotante con logo (`BrandLogo`, `logo-mark-dark.svg`), navegación (`Qué hacemos · Míralo · Tu pantalla · Cómo Funciona · Servicios · Planes · Preguntas`), enlace `Iniciar sesión` (a `siteConfig.appLoginUrl`) y CTA `Revisión Gratis`. El enlace activo lleva subrayado de 2px en `signal`, que sigue la sección visible. En móvil, menú desplegable.

### Botones (`components/ui/button.tsx`)
Base: `rounded-sm`, `text-sm font-medium`, anillo de foco `ring-ring/50` de 3px. Tamaños: `default h-9`, `sm h-8`, `lg h-10`, `icon`.

| Variante | Estilo |
| --- | --- |
| `signal` | Fondo `signal`, texto `paper`, semibold; hover `signal-deep`. CTA comercial (WhatsApp, `FaArrowRight`) |
| `default` / `primary` | Fondo `ink`, texto `paper`; hover `signal-deep` con texto `ink` |
| `outline` | Fondo `card`, borde `line-strong`, texto `ink`; hover borde `ink` |
| `secondary` | Fondo `secondary`, borde `line` |
| `ghost` | Transparente, texto `ink-soft`; hover fondo `card` |
| `link` | Texto `ink`, subrayado `signal`; hover texto `signal` |
| `destructive` | `alert/80`; hover `alert` |

Prohibido el estilo píldora en botones. `rounded-full` solo se usa en puntos de estado, avatares e iconos circulares y en el botón flotante del chat.

### Tarjetas (`components/ui/card.tsx`)
`bg-card`, `rounded-md`, `border-line`, `shadow-xs`. La prop `instrument` añade los corchetes de cobre.

### Marco "Instrument" (`.instrument`)
Fondo `card`, borde `line`, `rounded-md` y **dos corchetes de cobre** (arriba-izquierda y abajo-derecha) de **12px de brazo y 2px de grosor**.

Uso real en la landing:
- El simulador de chat del Hero.
- La tarjeta del plan recomendado (`Plan Sales`).

También se aplica en `/propuesta-template` (`<Card instrument>` en los planes y opciones destacados) y en el contenedor de contacto de `/condiciones-del-servicio`. Reserva el marco para el elemento de mayor jerarquía de cada vista; no lo uses en tarjetas genéricas.

### Eyebrow (`.eyebrow`)
Mono 11px, `signal`, con línea de 14px antes del texto. Numerado: `01 · LO QUE CUESTA ATENDER A MANO`, `04 · ANTES Y DESPUÉS`, `07 · INVERSIÓN TRANSPARENTE Y PLANES`, `09 · HABLEMOS`. En el Hero va precedido de un punto de estado.

### Badges (`.badge`)
Mono 11px (`--text-label`), `rounded-sm`, borde del color del estado, punto de 6px. Solo existen los estados usados: activo, completado y en espera.

| Clase | Aspecto | Ejemplo en la landing |
| --- | --- | --- |
| `.b-active` | `signal-soft`, borde `signal/40` | `Contesta de noche y fines de semana` |
| `.b-completed` | Igual que activo | `Detecta quién sí quiere comprar` |
| `.b-waiting` | `card`, borde `line-strong`, punto `ink-mute` | `Funciona con tu número actual` |

Los puntos no tienen animación de pulso.

### Secciones de la landing (orden en `app/page.tsx`)
1. **Hero** — h1 con frase en `signal`, párrafo, tres badges, CTA `signal` + `outline` y nota "Sin costo · En 15 minutos…". A la derecha, simulador de WhatsApp con `.instrument`: burbuja del cliente (`card`/`paper`), burbujas del asistente en `signal-soft`, opciones rápidas, pie `TODO CONECTADO / HECHO AUTOMÁTICAMENTE`.
2. **MetricsBar** — 4 cifras separadas por líneas de 1px: `Automática`, `Fuera de horario`, `2 opciones`, `0 hrs`.
3. **Problemas** (`#problemas`) — 4 tarjetas `CUELLO 01–04` con icono en caja de `copper-soft`.
4. **Solución** (`#solucion`) — 3 tarjetas `FASE 01–03` con línea de estado en mono y `✓ ACTIVO`; barra de CTA inferior.
5. **Demo** (`#demo`, carga diferida) — pestañas (`Pedir un precio`, `Reservar una cita`, `Resolver dudas`) y simulador `Canal WhatsApp Verificado · Simulación Interactiva`.
6. **Plataforma** (`#plataforma`) — pestañas (`Chats`, `Agenda`, `Clientes`, `Resultados`) con maqueta del panel y la leyenda "Maqueta ilustrativa"; CTA `Ver la pantalla en una demo` y `Ya soy cliente: iniciar sesión`.
7. **Antes/Después** — tabla de 3 columnas (`ASPECTO OPERATIVO · ATENDIENDO A MANO · CON NEXOBITE`) con `×` en `copper`/`alert` y `✓` en `signal`.
8. **Proceso** (`#proceso`) — 3 pasos con chip de plazo (`Día 1 a 3`, `Día 4 a 10`, `Día 11+`) y bloque `ENTREGABLE`.
9. **Servicios** (`#servicios`) — 4 tarjetas (`Páginas Web`, `Asistente para WhatsApp e Instagram`, orden y automatización, a la medida) con etiqueta mono en la esquina y lista con checks.
10. **Precios** (`#precios`, carga diferida) — selector de conexión (económica u oficial) con su panel de pros y contras, y 3 planes: `01 · START`, `02 · SALES` (recomendado, `.instrument`, elevado en escritorio), `03 · SCALE`. Cada plan muestra implementación (precio `tnum`), mensualidad en mono, plazo, lista `QUÉ INCLUYE` y un CTA que abre WhatsApp con mensaje precargado. Matriz de comparación colapsable.
11. **Testimonios** — oculta hasta tener casos reales validados.
12. **FAQ** (`#faq`) — acordeón renderizado en servidor desde `lib/faqs.ts`.
13. **CTA** — eyebrow `09 · HABLEMOS`, botón `Hablar por WhatsApp` y formulario alterno (`LeadForm` → `/api/leads`).
14. **Footer** — logo, datos de contacto, redes y enlaces legales.

### Pricing
- Tres planes con implementación única y mensualidad separadas, siempre en COP: Start `$1.190.000` + `$140.000`/mes; Sales `$1.890.000` + `$220.000`/mes; Scale `$3.490.000` + `$290.000`/mes.
- Sin precios tachados, descuentos ni escasez ficticia.

### Widget de chat (`chatbot-widget.tsx`)
Botón flotante circular de 56px en la esquina inferior derecha (`signal`, icono blanco, offset 24px, pulso activado). El panel se carga desde `app.nexobite.com` dentro de un Shadow DOM; la landing inyecta overrides (altura 640px, sin marco doble, escala 0.88/0.8 en pantallas bajas). Los colores del panel se configuran en el canal webchat del SaaS.

### Páginas de servicio
`/servicios/automatizacion-whatsapp` y `/servicios/paginas-web-para-empresas`: Hero centrado con eyebrow, h1 con acento `signal`, dos CTAs y rejilla "Lo que incluye" de tarjetas con check. Mientras estén en borrador muestran una franja superior `BORRADOR DE SERVICIO · ESTADO: NO INDEXADO` en `copper`.

### Movimiento
- `AnimatedSection`: al entrar en viewport, fade-in con desplazamiento de 24px (`translate-y-6` → 0) en 500ms `ease-out`, con `delay` opcional; respeta `prefers-reduced-motion`.
- Transiciones de color y borde en botones y tarjetas (`transition-colors`). No hay animaciones decorativas continuas ni keyframes propios.

---

## 6. Prohibiciones (anti-patrones)

1. **Nada de estética "hype de IA":** robots, cerebros digitales, redes neuronales, circuitos, planetas o ciencia ficción.
2. **Sin canvas animado decorativo** en ninguna página (no hay `<canvas>` ni `ParticleField` en el proyecto).
3. **Sin telemetría falsa de servidores** (`p95`, `tenant_id`, monitores de cola); las métricas son de negocio.
4. **Sin descuentos artificiales** ni escasez ficticia.
5. **Sin botones tipo píldora** en CTAs.
6. **Sin tema claro** ni selector de tema.
7. **Sin gradientes estridentes ni halos de neón.**

---

## 7. Registro de sincronización

Auditoría del 2026-10-15. Todas las diferencias entre la intención del sistema y el código se corrigieron en el mismo cambio:

| Hallazgo | Resolución |
| --- | --- |
| `ParticleField` (canvas con `requestAnimationFrame`) en las páginas legales y en `/propuesta-template` | Eliminado el componente y todos sus usos |
| Componentes huérfanos `mini-plans-section`, `packages-section`, `how-it-works-section` | Eliminados |
| Clase inexistente `hover:bg-signal-hover` en `/condiciones-del-servicio` | Cambiada a `hover:bg-signal-deep` |
| Utilidades sin uso (`.ruler`, `.hover-lift`, `.hover-glow`, `.link-underline`, `.brand-highlight`, `.brand-kicker`) y keyframes `pulse-glow`/`float` | Eliminados de `globals.css` |
| Badges heredados de BullMQ (`.b-failed`, `.b-delayed`) y comentario de "estados de cola" | Eliminados; quedan `.b-active`, `.b-completed` y `.b-waiting` |
| Variante de botón `gradient` sin gradiente | Eliminada |
| Tamaños `text-[10px]`/`text-[11px]` repetidos 45 veces | Reemplazados por los tokens `text-micro` y `text-label` |
| `--font-display` apunta a Plus Jakarta Sans | Se mantiene a propósito: es un alias semántico para titulares y precios |

**Pendiente:** ninguno conocido.

---

**Versión:** 6.1 (sincronizada con el código el 2026-10-15) · **Stack:** Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui + Radix
