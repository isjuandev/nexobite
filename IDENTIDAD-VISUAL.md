# IDENTIDAD VISUAL — NexoBite (Sistema "Instrumento" v6.1)

> Documento de marca. Describe lo que hoy se ve en el sitio (`www.nexobite.com`), verificado contra el código (`app/globals.css`, `components/`) y la landing en ejecución. El detalle técnico de implementación está en [`DESIGN.MD`](DESIGN.MD).

## Concepto visual

**NexoBite** proyecta la estética de un **instrumento**: software de producto sobrio, preciso y claro, pensado para dueños y gerentes de negocio que quieren vender más sin complicarse. La marca se parece al producto que vende, un asistente de WhatsApp y un panel donde el equipo opera.

Reglas fundamentales:

- **Modo oscuro exclusivo**, con una paleta calibrada de alto contraste.
- **Bordes ultrafinos de 1px** para estructurar tarjetas, tablas y divisores.
- **Verde señal** como color de acción y estado operativo.
- **Cobre** como acento de atención y dato, y como firma de marca en los corchetes `.instrument`.
- **Producto a la vista:** simuladores y maquetas reales en lugar de ilustraciones abstractas.
- **Lenguaje sin tecnicismos:** se habla de atender, ordenar y vender.

### Qué dejamos atrás
La identidad descarta los clichés de "IA": robots, cerebros digitales, redes neuronales, neón difuso, campos de partículas y telemetría ficticia de servidores. La historia visual es el flujo comercial:

`Web que capta → Asistente de WhatsApp que atiende y califica → Pantalla donde el equipo opera → Cierre de venta`

---

## Logotipo

- Marca **Nexobite**: monograma "N" con un punto de cobre y el nombre en Plus Jakarta Sans.
- Archivos oficiales en `public/`: `logo-mark-dark.svg` (el que usa el sitio, componente `BrandLogo`), `logo-mark-light.svg`, `nexobite-logo.png` y `og-image.png`/`og-image.svg` para redes sociales.
- No recolorear, deformar ni añadir efectos a los logotipos.

---

## Paleta de colores oficial (modo oscuro)

Cada token tiene un propósito operativo. Los valores son los definidos en `app/globals.css`.

### Superficie y tinta

| Rol | Variable CSS | Valor | Uso principal |
| --- | --- | --- | --- |
| **Papel / Canvas** | `--paper` | `#0E1013` | Fondo general del sitio — grafito casi negro |
| **Card / Superficie** | `--card` | `#16191D` | Tarjetas, paneles, simuladores y botón secundario |
| **Neutro** | `--secondary` / `--muted` | `#1E2227` | Fondos neutros de componentes |
| **Línea fina** | `--line` | `#262B31` | Borde estructural de 1px y divisores |
| **Línea fuerte** | `--line-strong` | `#383E46` | Bordes de botones outline, badges neutros y separadores |
| **Tinta principal** | `--ink` | `#EDEFF2` | Titulares y cifras — máxima legibilidad |
| **Tinta secundaria** | `--ink-soft` | `#B4BAC3` | Párrafos y descripciones |
| **Tinta atenuada** | `--ink-mute` | `#78808C` | Metadatos, etiquetas y microcopy |

### Acentos

| Rol | Variable CSS | Valor | Uso principal |
| --- | --- | --- | --- |
| **Verde señal** | `--signal` | `#1C8A76` | CTAs, estado activo, checks, palabra destacada de titulares, foco |
| **Verde señal profundo** | `--signal-deep` | `#146E5E` | Hover de botones verdes |
| **Verde señal suave** | `--signal-soft` | `#142824` | Burbujas del asistente, badges activos |
| **Cobre** | `--copper` | `#D6924E` | Cuellos de botella, plazos, chips de plan, corchetes `.instrument` |
| **Cobre suave** | `--copper-soft` | `#2E2216` | Fondo de chips y badges de cobre |
| **Alerta** | `--alert` | `#B23A34` | Cruces de la operación manual, acciones destructivas |
| **Alerta suave** | `--alert-soft` | `#381A18` | Fondo de estados de error |
| **Ámbar** | `--amber` / `--amber-soft` | `#C79A2E` / `#382C14` | Advertencias |

> Los tokens `paper-deep`, `card-hover`, `signal-hover` y `copper-deep` de versiones anteriores ya no forman parte del sistema.

### Proporción de uso
Predominan el carbón y las tintas neutras; el verde señal se reserva para lo accionable y confirmado; el cobre, para lo que merece atención. Ningún acento debe ocupar superficies grandes.

---

## Tipografía oficial

| Uso | Fuente | Clase | Detalle |
| --- | --- | --- | --- |
| **Titulares** | Plus Jakarta Sans | `font-sans` / `font-display` | h1 54px bold; h2 36px semibold; h3 16px semibold; tracking -0.015em a -0.025em |
| **Cuerpo** | Plus Jakarta Sans | `font-sans` | 16px, regular, interlineado 1.5, color `ink-soft` |
| **Precios** | Plus Jakarta Sans extrabold | `font-display font-extrabold tnum` | 30–36px, números tabulares |
| **Etiquetas técnicas** | JetBrains Mono | `font-mono` | Eyebrows, badges, chips, plazos, mensualidad, timestamps (10–11px) |

### Números
Usar `.tnum` (`font-variant-numeric: tabular-nums`) en precios (`$1.190.000`, `$1.890.000`, `$3.490.000`), mensualidades, plazos y porcentajes para que las cifras queden alineadas.

### Énfasis en titulares
Cada titular de sección cierra con una frase de color: **verde señal** en casi todo el sitio y **cobre** en la sección de problemas ("depende de responder a mano").

---

## Componentes y signos de identidad

### 1. Corchetes de calibración (`.instrument`)
Dos corchetes de cobre (esquina superior izquierda e inferior derecha) de **12px de brazo y 2px de grosor** sobre una tarjeta con borde fino.

Úsalos solo en el elemento de mayor jerarquía de cada vista:
1. El simulador de chat del Hero.
2. La tarjeta del plan recomendado (`Plan Sales`).
3. En páginas internas (propuesta comercial, contacto de condiciones del servicio), el plan u opción destacada.

### 2. Interfaces de producto (mockups)
- **Simulador de WhatsApp** (Hero y Demo): cabecera de estado, timestamps, mensaje del cliente en superficie `card`, respuestas del asistente en `signal-soft`, opciones rápidas y pie `TODO CONECTADO / HECHO AUTOMÁTICAMENTE`.
- **Panel de la plataforma** (sección "Tu pantalla"): pestañas Chats, Agenda, Clientes y Resultados, siempre con la leyenda "Maqueta ilustrativa".

### 3. Barra de métricas (`MetricsBar`)
Cuatro mensajes de valor separados por líneas de 1px: `Automática`, `Fuera de horario`, `2 opciones`, `0 hrs`.

### 4. Tabla Antes/Después
Tres columnas: *Aspecto operativo*, *Atendiendo a mano* (cruces `×`) y *Con NexoBite* (checks `✓` en verde señal).

### 5. Badges de estado (`.badge`)
Pequeñas etiquetas mono con punto de color:
- `b-active` / `b-completed`: verde señal (`Contesta de noche y fines de semana`, `Detecta quién sí quiere comprar`).
- `b-waiting`: neutro (`Funciona con tu número actual`).

### 6. Eyebrows (`.eyebrow`)
Prefijo de sección en mono, verde señal, con una línea de 14px y numeración: `01 · LO QUE CUESTA ATENDER A MANO`, `04 · ANTES Y DESPUÉS`, `07 · INVERSIÓN TRANSPARENTE Y PLANES`, `09 · HABLEMOS`.

### 7. Etiquetas de proceso
Tarjetas numeradas en mono: `CUELLO 01–04` (cobre), `FASE 01–03`, `PASO 01–03` con chip de plazo y bloque `ENTREGABLE`.

### 8. Botones
- **Radio:** 4px (`rounded-sm`); nunca píldora.
- **`signal`:** fondo `#1C8A76`, texto `#0E1013` semibold, hover `#146E5E`; icono `FaWhatsapp` o `FaArrowRight`.
- **`outline`:** fondo `card`, borde `#383E46`, texto `#EDEFF2`; hover con borde `#EDEFF2`.
- **`default`:** fondo `#EDEFF2` con texto `#0E1013`; hover a verde profundo.

### 9. Header y chat
- Header flotante de barra fina con logo, navegación, `Iniciar sesión` y el CTA `Revisión Gratis`.
- Botón de chat circular de 56px en la esquina inferior derecha, en verde señal con icono blanco.

---

## Reglas de la marca

### Hacer
- Mantener el sitio en modo oscuro (`<html className="dark">`).
- Estructurar con líneas de 1px (`border-line`).
- Usar `.tnum` en precios, plazos y porcentajes.
- Mostrar precios netos en COP, separando implementación única y mensualidad, sin tachaduras.
- Reservar `.instrument` para el elemento principal de cada vista.
- Mostrar producto real (simuladores y maquetas) en lugar de arte decorativo.
- Conservar los logotipos SVG sin alteraciones.
- Escribir en lenguaje claro, sin tecnicismos.

### No hacer
- No implementar modo claro ni selector de tema.
- No usar gráficos de "hype de IA" (robots, cerebros, redes neuronales, circuitos).
- No usar campos de partículas ni animaciones decorativas continuas.
- No mostrar telemetría ficticia de backend (`p95`, `tenant_id`) como argumento comercial.
- No usar botones tipo píldora.
- No usar gradientes estridentes ni halos de neón.
- No inventar testimonios ni descuentos: los testimonios se publican solo con casos reales validados.

---

**Versión:** 6.1 (sincronizada con el código el 2026-10-15)
**Sistema:** Modo oscuro exclusivo · Next.js 16 + Tailwind CSS v4
**Autor:** NexoBite DIGITAL
