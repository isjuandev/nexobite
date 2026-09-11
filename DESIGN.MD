---
version: 5.0
name: NexoBite-Instrumento-design-system
description: NexoBite's design system "Instrumento" — a precision-engineered operational telemetry aesthetic built on a dark carbon paper canvas (#0E1013), modular card surfaces (#16191D), hairline structural borders (#262B31), Signal Green operational action (#1C8A76), and secondary copper calibration accents (#D6924E). The brand communicates mission-critical reliability, queue-level throughput, and software infrastructure precision.

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

typography:
  display-xxl:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  display-xl:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
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
    lineHeight: 1.55
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

# NexoBite Design System: "Instrumento"

## Executive Summary
NexoBite is an operational automation and intelligent software agency. The visual identity, codenamed **"Instrumento"**, rejects generic SaaS aesthetics (soft pill buttons, saturated gradients, consumer emojis) in favor of **hardware-grade precision, operational telemetry, and infrastructure observability**.

The system is built on:
- **Exclusive Dark Mode**: Deep carbon paper background (`#0E1013`) with structured card modules (`#16191D`).
- **Signal Green (`#1C8A76`)**: Action color representing `SYS.OPERATIONAL`, active job execution, and verified deliveries.
- **Copper (`#D6924E`)**: Secondary accent for calibration brackets (`.instrument`), savings indicators, and queue alerts.
- **Hairline Geometry (`#262B31`)**: 1px crisp borders, ticks, and calibration rulers.
- **Dual Typography**: Plus Jakarta Sans for structural headings and body text + JetBrains Mono with tabular numbers (`tnum`) for data, rates, prices, and metrics.

---

## Color System

### Base Palette (Dark Mode Only)
- **`colors.paper` (`#0E1013`)**: The primary canvas background. Pure dark carbon with zero blue tint.
- **`colors.card` (`#16191D`)**: Slightly elevated modular panels and service cards.
- **`colors.card-hover` (`#1C2025`)**: Hover state for interactive modules.
- **`colors.line` (`#262B31`)**: 1px structural hairpins and connectors.
- **`colors.line-strong` (`#373E47`)**: Focus state and interactive container borders.
- **`colors.ink` (`#EDEFF2`)**: Primary text and high-contrast numerical readouts.
- **`colors.ink-soft` (`#9AA2AD`)**: Secondary description text.
- **`colors.ink-mute` (`#5D6571`)**: Metadata, labels, and timestamps.

### Functional Accents
- **`colors.signal` (`#1C8A76`)**: The primary chromatic anchor for CTA buttons and operational dots.
- **`colors.signal-hover` (`#146356`)**: Active/hover state for Signal buttons.
- **`colors.signal-soft` (`rgba(28, 138, 118, 0.12)`)**: Low-opacity fill for technical icons and status badges.
- **`colors.copper` (`#D6924E`)**: Corner calibration brackets and promotional/savings indicators.
- **`colors.copper-soft` (`rgba(214, 146, 78, 0.12)`)**: Highlight card backgrounds and telemetry alerts.

---

## Typography

- **Display & Headings**: Plus Jakarta Sans (`600`, `700`, `800`) with `-0.02em` tracking.
- **Body & Captions**: Plus Jakarta Sans (`400`, `500`) with comfortable reading line-height.
- **Telemetry & Numbers**: JetBrains Mono (`400`, `500`, `600`) with mandatory `.tnum` (`font-variant-numeric: tabular-nums`) on all monetary values, percentages, queue counters, and timestamps.

---

## Core Components

### 1. The Instrument Frame (`.instrument`)
Featured cards mount technical copper brackets (`#D6924E`) in the 4 corners:
- 10px outer bracket arms with 1.5px stroke width.
- Reserved for primary plans, system readouts, and high-impact CTA containers.

### 2. Calibration Ruler (`.ruler`)
- Repetitive 1px tick marks (alternating 4px, 6px, 10px height) providing hardware alignment visual cues.

### 3. BullMQ Status Badges (`.badge`)
- `.badge.b-active`: Pulsing green telemetry indicator.
- `.badge.b-completed`: Solid signal green badge for validated capabilities.
- `.badge.b-copper`: Copper badge for discount percentages and priority tiers.

### 4. Technical Eyebrows (`.eyebrow`)
- Pattern: `01 · ARQUITECTURA DE SERVICIOS` in JetBrains Mono uppercase, letter-spacing `0.08em`, accompanied by an operational dot.

### 5. Buttons
- **`Button variant="signal"`**: Compact, 4px border radius (`rounded-sm`), `#1C8A76` background, `#0E1013` or `#EDEFF2` text.
- **`Button variant="outline"`**: 1px `#262B31` line, transparent background, `#EDEFF2` text.

---

## Rules and Constraints

1. **Dark Mode Only**: No light theme, no theme toggle.
2. **Logos Intact**: Pre-existing SVG logo marks (`logo-mark-dark.svg`, `logo-mark-light.svg`, `BrandLogo`) must remain unmodified.
3. **No Orange Accents in UI**: Orange has been completely eliminated from UI elements, replaced by Signal Green and Copper.
4. **Squared Radii**: Border radius is strictly `rounded-sm` (4px) or `rounded-md` (6px). Never pill-shaped buttons.