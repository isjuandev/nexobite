# IDENTIDAD VISUAL - NexoBite DIGITAL

## Concepto Visual y Filosofía
**NexoBite DIGITAL** proyecta una imagen premium, moderna y altamente tecnológica, centrada en la inteligencia artificial y el desarrollo de software vanguardista.
Nuestra identidad visual se apoya en un enfoque **"Dark Mode First"** (Modo Oscuro por defecto), inspirado en el design system de Supabase: minimalista, con una paleta casi monocromática y un unico color chromatico — **emerald green** — como evento visual principal.

---

## Paleta de Colores Oficial

El sistema de colores está diseñado para interfaces oscuras, garantizando accesibilidad visual y un aspecto futurico.

### Colores Principales (Modo Oscuro Predeterminado)

| Color                      | Variable CSS           | Codigo HEX | Uso Principal                                          |
| -------------------------- | ---------------------- | ---------- | ------------------------------------------------------ |
| **Fondo Principal**        | `--background`         | `#1c1c1c`  | Fondos generales — Canvas Night                        |
| **Fondo Elevado**          | `--card`               | `#202020`  | Superficies elevadas, paneles y cards                  |
| **Emerald Primario**       | `--primary`            | `#3ecf8e`  | Color principal — CTA, acentos, indicadores            |
| **Emerald Deep**           | `--brand-emerald-deep` | `#24b47e`  | Estado presionado de botones                           |
| **Emerald Soft**           | `--brand-emerald-soft` | `#4ade80`  | Acentos suaves, chart highlights                       |
| **Texto Primario**         | `--foreground`         | `#ffffff`  | Texto principal — Maxima legibilidad                   |
| **Texto Secundario**       | `--muted-foreground`   | `#9a9a9a`  | Texto helper, captions                                 |
| **Borde**                  | `--border`             | `#2a2a2a`  | Bordes de cards, separadores                           |
| **Texto en Boton Verde**   | `--primary-foreground` | `#171717`  | Texto near-black sobre fondo emerald (NO blanco)       |

### Escala de Tinta (Texto)
- **Ink** (`#171717`): Texto near-black para botones sobre emerald
- **Ink Mute** (`#707070`): Texto terciario
- **Ink Mute 2** (`#9a9a9a`): Texto helper secundario
- **Ink Faint** (`#b2b2b2`): Texto deshabilitado / placeholder

### Gradientes de Marca
El uso de gradientes es fundamental en la tipografia destacada y los fondos decorativos:
- **Texto Gradient**: `bg-gradient-to-r from-primary to-brand-emerald-soft bg-clip-text text-transparent`. Usado en titulos principales y badges.
- **Fondo Radial**: `bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-card to-background`. Usado para iluminar secciones de fondo sutilmente.

---

## Tipografia

### Jerarquia de Fuentes

| Elemento            | Fuente         | Peso             | Uso                                                             |
| ------------------- | -------------- | ---------------- | --------------------------------------------------------------- |
| **Titulos** (h1-h6) | **Satoshi**    | Medium (500)     | Encabezados principales (`font-display`). Letter-spacing: -0.02em |
| **Cuerpo**          | **Satoshi**    | Regular (400)    | Texto general (`font-sans`). Antialiased.                       |
| **Codigo/Technico**  | **JetBrains Mono** | Regular       | Fragmentos de codigo, interfaces tecnicas (`font-mono`).         |

### Principios Tipograficos
- **Peso 500 en display.** El mid-weight se lee como ingenierizado, no decorativo.
- **Letter-spacing negativo en display.** -0.02em en titulos — comprime las formas redondeadas humanistas en densidad editorial.
- **Mono para codigo.** System mono families — sin webfont propietaria.

---

## Efectos, Animaciones y Micro-interacciones

La interfaz de NexoBite es viva y altamente reactiva a la interaccion del usuario.

### Estilos de Interaccion (Hover)
- **Hover Lift (`.hover-lift`)**: Los componentes se elevan suavemente (`-translate-y-1`) y aumentan su sombra exterior (`shadow-lg`) con una transicion fluida de 300ms.
- **Hover Glow (`.hover-glow`)**: Genera un resplandor emerald vibrante (`box-shadow: 0 0 20px rgba(62, 207, 142, 0.4)`).
- **Link Underline (`.link-underline`)**: Linea inferior animada que se expande de izquierda a derecha usando el color `--primary` (emerald).

### Animaciones Globales
- **Pulse Glow (`animate-pulse-glow`)**: Un pulso suave de sombra emerald (2s ease-in-out) para llamar la atencion sobre elementos clave.
- **Float (`animate-float`)**: Flotacion vertical sutil de 10px (6s ease-in-out) para elementos decorativos.
- **Particle Field (Campo de Particulas)**: Componente base para fondos interactivos en canvas. Dibuja particulas luminosas conectadas por nodos que reaccionan de manera elastica y magnetica al movimiento del cursor.

---

## Estructura de Componentes Clave

### Botones Principales y CTA
- **Boton Primario Verde**: Fondo emerald (`#3ecf8e`), texto near-black (`#171717`), border-radius 6px. El verde se lee como "encendido" con texto oscuro — la eleccion idiosincratica de la marca.
- **Variante Outline**: Fondo transparente, borde `#c7c7c7`. Al hacer hover, el borde se ilumina y el boton adquiere fondo emerald tenue.
- **Variante On-Dark**: Fondo `#1c1c1c`, texto blanco — para CTAs en superficies oscuras.

### Tarjetas (Cards) de Servicio / Producto
- **Fondo y Borde Base**: `#202020` con borde `#2a2a2a`, border-radius 12px.
- **Estados Activos (Hover)**: Borde emerald, sombra tintada emerald, fondo se intensifica.
- **Iconos en Cards**: Integrados en base cuadrada redondeada con fondo emerald, icono near-black.

### Elementos Destacados de Seccion (Badges)
- Contenedores capsula o pildora (`rounded-full`) con fondos translucidos y bordes sutiles. Incluyen un pequeno punto indicador de luz parpadeante emerald.

---

## Espaciado, Formas y Accesibilidad

- **Border Radius Central**: 6px para botones, 12px para cards, 16px para modales. Bordes ligeramente curvos — modernos pero tecnico.
- **Sistema de Espaciado**: Base 8px con sub-tokens 2px, 4px, 12px para trabajo fino.
- **Padding de Seccion**: 64-96px en superficies de marketing.
- **Layout y Legibilidad**: Empleo de clases avanzadas para jerarquia y balance (`text-pretty`, `text-balance`). Construccion sobre fondos aislados (`isolation: isolate`) con fluidez unificada a lo largo del scroll.

---

## Reglas de la Marca

### Hacer
- Reservar emerald (`#3ecf8e`) para CTAs rellenos y acentos — debe aparecer escasamente.
- Renderir display en peso 500 con letter-spacing negativo.
- Usar 6px de border-radius para botones — forma cuadrada-ish, nunca pill.
- Usar near-black (`#171717`) en botones verdes — NO blanco.
- Usar system mono para cada bloque de codigo.

### No Hacer
- No introducir colores de acento adicionales como colores de sistema — purpuras, amarillos y rosados solo en logos de integraciones y puntos de chart.
- No subir el peso display arriba de 500.
- No usar botones con border-radius pill.
- No usar texto blanco en boton emerald.
- No agregar gradientes ambientales a los hero — el fondo oscuro es el diseno.

---

**Ultima actualizacion:** Junio 2026 (Migracion a Supabase-inspired Design System)
**Version:** 3.0 (Emerald Dark Mode — Supabase-inspired)
**Autor:** NexoBite DIGITAL
