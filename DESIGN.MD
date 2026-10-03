---
version: 6.0
name: NexoBite-Instrumento-design-system
description: NexoBite's design system "Instrumento" — a precision-engineered commercial and product UI aesthetic built on a dark carbon paper canvas (#0E1013), structured modular card surfaces (#16191D), hairline structural borders (#262B31), Signal Green operational action (#1C8A76), and secondary copper focus accents (#D6924E). The system focuses on software product UI, live conversation sandboxes, lead qualification workflows, and commercial conversion, eliminating generic AI clichés and pseudo-hardware telemetry.

colors:
  paper: "#0E1013"
  paper-deep: "#08090B"
  card: "#16191D"
  card-hover: "#1C2025"
  line: "#262B31"
  line-strong: "#373E47"
  ink: "#EDEFF2"
  ink-soft: "#9AA2AD"
  ink-mute: "#5D6571"
  signal: "#1C8A76"
  signal-hover: "#146356"
  signal-soft: "rgba(28, 138, 118, 0.12)"
  copper: "#D6924E"
  copper-deep: "#B8763A"
  copper-soft: "rgba(214, 146, 78, 0.12)"
  alert: "#B23A34"
  alert-soft: "#381A18"

typography:
  display-xxl:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.03em
  display-xl:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  heading-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  mono-technical:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
  mono-tabular:
    fontFamily: "JetBrains Mono, monospace"
    fontVariantNumeric: "tabular-nums"
    fontSize: 13px
    fontWeight: 500

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 80px

rounded:
  sm: 4px
  md: 6px
  lg: 8px
---

# NexoBite Design System: "Instrumento" (v6.0)

## 1. Executive Summary & Philosophy

NexoBite designs and deploys commercial automation systems, intelligent WhatsApp infrastructure, and conversion-focused websites for companies and SMEs. 

The visual identity, codenamed **"Instrumento"**, rejects both generic SaaS fluff (saturated purple gradients, soft pill buttons, consumer emojis) and **generic "AI Hype" aesthetics** (floating particle fields, glowing neon halos, vintage robot heads, server queue telemetry).

Instead, "Instrumento" grounds itself in **real product interfaces, commercial workflows, and business outcomes**:
- **Narrativa central de producto:** `Web que capta → Chatbot en WhatsApp que califica → CRM que organiza → Cierre de ventas`.
- **Exclusive Dark Mode:** Lienzo de grafito profundo sin tintes azules (`#0E1013`) con superficies modulares (`#16191D`).
- **Signal Green (`#1C8A76`):** Color semántico de acción, estado operativo activo, mensajes verificados y conversión comercial.
- **Copper (`#D6924E`):** Acento secundario para focos de atención, plazos de entrega, cuellos de botella y marcos calibrados (`.instrument`).
- **Hairline Geometry (`#262B31`):** Bordes nítidos de 1px que estructuran tablas, interfaces y simuladores de software.
- **Tipografía Dual Estratégica:** `Plus Jakarta Sans` para lectura editorial de negocio + `JetBrains Mono` con números tabulares (`tnum`) para precios en COP, tasas de conversión y métricas.

---

## 2. Color System

### Base Palette (Dark Mode Only)
- **`colors.paper` (`#0E1013`)**: Canvas de fondo principal. Carbón oscuro puro.
- **`colors.paper-deep` (`#08090B`)**: Fondo de pantallas y ventanas simuladas de software.
- **`colors.card` (`#16191D`)**: Superficies elevadas, paneles interactivos y módulos de servicio.
- **`colors.card-hover` (`#1C2025`)**: Estado hover de módulos interactivos.
- **`colors.line` (`#262B31` / `border-line`)**: Delimitador estructural de 1px.
- **`colors.line-strong` (`#373E47`)**: Estados de foco, encabezados de tabla y bordes activos.
- **`colors.ink` (`#EDEFF2`)**: Texto principal de alto contraste y valores numéricos de precio.
- **`colors.ink-soft` (`#9AA2AD`)**: Texto descriptivo y explicaciones secundarias.
- **`colors.ink-mute` (`#5D6571`)**: Metadatos, etiquetas de estado, timestamps de chat y microcopy.

### Functional Accents
- **`colors.signal` (`#1C8A76`)**: Botones principales CTA, checks de entregables, estado 24/7 y confirmación de eventos.
- **`colors.signal-hover` (`#146356`)**: Estado hover de botones Signal.
- **`colors.signal-soft` (`rgba(28, 138, 118, 0.12)`)**: Relleno suave para burbujas de respuesta del asistente y badges operativos.
- **`colors.copper` (`#D6924E`)**: Badges de fases de proceso, agendamiento de citas, y brackets en el plan comercial recomendado.
- **`colors.copper-soft` (`rgba(214, 146, 78, 0.12)`)**: Relleno de fondo para indicadores de cuellos de botella y notas de advertencia.
- **`colors.alert` (`#B23A34`)**: Indicadores de operación manual deficiente y cruces de comparación (`FaTimes`).

---

## 3. Typography & Numerical Data

- **Headlines & Display:** Plus Jakarta Sans (`600`, `700`, `800`) con tracking `-0.02em` a `-0.03em`. Enfoque en claridad y tono conversacional directo sin hipérboles de marketing.
- **Body & Paréntesis explicativos:** Plus Jakarta Sans (`400`, `500`) con interlineado generoso (`line-height: 1.6`) para máxima legibilidad ejecutiva.
- **Datos Comerciales & Telemetría:** JetBrains Mono (`400`, `500`, `600`) obligatorio con `tabular-nums` (`.tnum`) en todos los precios en COP (`$1.190.000`, `$1.890.000`, `$3.490.000`), tiempos de entrega y porcentajes.

---

## 4. UI Patterns & Component Guidelines

### 1. The Instrument Frame (`.instrument`)
Brackets esquineros en color cobre (`#D6924E`) de 8px de brazo y 1.5px de grosor.  
**Regla de uso estricta:** Reservado **únicamente** para:
- El simulador de chat en vivo del Hero.
- La tarjeta de precio del plan recomendado (`Plan Sales`).
- El contenedor de diagnóstico del CTA final.
*Prohibido aplicarlo en tarjetas genéricas para evitar ruido visual militar/sci-fi.*

### 2. Live Product Mockups (Simuladores de Interfaz)
Sustituyen a cualquier ilustración abstracta o imagen decorativa:
- **WhatsApp Cloud API Sandbox:** Ventana de chat real con cabecera de estado, timestamps (`10:42 PM`), burbujas de mensaje del cliente (`#20252B`) y respuestas del bot (`rgba(28, 138, 118, 0.15)`), chips de opción rápida y pie de integración CRM confirmada.
- **Tablero CRM & Lead Pipeline:** Fichas de prospectos con estado, valor estimado y canal de origen.

### 3. Métricas de Impacto de Negocio (`MetricsBar`)
Franja horizontal con divisores de 1px en `#262B31`. Muestra cifras reales de valor de negocio (`< 3 seg`, `24/7`, `100% oficial`, `0 hrs`), reemplazando la regla de 70 divisiones obsoleta (`.ruler`).

### 4. Tablas de Comparación Bipolar (`BeforeAfterSection`)
Tabla de 2 columnas de alto contraste:
- Columna izquierda: *Operación Manual Habitual* con iconos rojos `FaTimes` y fondo tenue.
- Columna derecha: *Operación con NexoBite* con iconos verdes `FaCheck`, tipografía bold y fondo `rgba(28, 138, 118, 0.08)`.

### 5. Arquitectura de Pricing Asimétrico (`PricingSection`)
- **3 Planes Nucleares:** `01 · START` (Atención básica), `02 · SALES` (Calificación con IA y agenda - Destacado), y `03 · SCALE` (Web + WhatsApp + CRM).
- **Desglose transparente:** Separación visible entre pago único de implementación y mensualidad de servidor/soporte en COP.
- **Cero promociones artificiales:** Prohibidos precios tachados del tipo *"Antes $X / Ahora $Y"*.
- **Matriz técnica colapsable:** Tabla interactiva desplegable para comparar capacidades fila por fila sin saturar el primer vistazo.

### 6. Badges y Eyebrows
- **Eyebrow:** `01 · EL COSTO DE LA ATENCIÓN MANUAL` en JetBrains Mono uppercase, letter-spacing `0.08em`.
- **Status Badges (`.badge`):**
  - `.badge.b-active`: Micro-punto verde con pulso sutil (ej: `Respuesta inmediata 24/7`).
  - `.badge.b-completed`: Punto verde sólido (ej: `Calificación automática de prospectos`).
  - `.badge.b-waiting`: Punto cobre tenue (ej: `Integrado a tu número actual`).

### 7. Botones Comerciales
- **`Button variant="signal"`**: 4px radius (`rounded-sm`), fondo `#1C8A76`, texto `#0E1013` en negrita, icono `FaWhatsapp` o `FaArrowRight`.
- **`Button variant="outline"`**: 1px `#373E47`, fondo `#16191D`, texto `#EDEFF2`, hover a border `#EDEFF2`.

---

## 5. Prohibited Elements (Anti-Patterns)

1. **NO "AI Hype" Visuals:** Quedan prohibidos robots, cerebros digitales, redes neuronales vectoriales, circuitos, planetas o ilustraciones de ciencia ficción.
2. **NO Particle Canvas:** Prohibido el uso de `ParticleField` o bucles `requestAnimationFrame` que consuman CPU/GPU en decoraciones no funcionales.
3. **NO Fake Server Telemetry:** Prohibido mostrar monitores de colas con latencia de red (`p95 118ms`, `tenant_id`, `QUEUE MONITOR`) como gancho comercial; la telemetría debe ser de métricas comerciales.
4. **NO Artificial Discounts:** Prohibidas tachaduras promocionales o mensajes de escasez ficticia.
5. **NO Pill Buttons:** Todos los botones interactivos mantienen radio cuadrado moderno de 4px (`rounded-sm`).
6. **Dark Mode Exclusivo:** La identidad no implementa temas claros.