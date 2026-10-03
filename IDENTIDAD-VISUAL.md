# IDENTIDAD VISUAL — NexoBite (Sistema "Instrumento" v6.0)

## Concepto Visual y Filosofía
**NexoBite** proyecta una estética de **"Instrumento"**: software de producto de alta precisión, claridad operativa y foco en resultados comerciales. Diseñado para transmitir solidez a tomadores de decisiones comerciales (gerentes, directores y dueños de negocio).

Nuestra identidad opera bajo una regla fundamental: **Dark Mode Exclusivo**, con una paleta calibrada de alto contraste funcional, bordes estructurales ultrafinos de 1px, corchetes de hardware en cobre y verde señal como indicador de conversión y operatividad.

### Evolución v6.0: De "Hype de IA / Telemetría de Servidores" a "Producto y Negocio"
La identidad descarta los clichés superficiales de la industria (robots genéricos, canvas de partículas interactivas, fondos de neón difusos y telemetría ficticia de colas de jobs `p95`). 
La narrativa visual dominante se centra en **interfaces vivas de producto**:  
`Landing Page → Chatbot en WhatsApp Cloud API → Calificación automática de lead → CRM comercial → Cierre de venta`.

---

## Paleta de Colores Oficial (Modo Oscuro Exclusivo)

El sistema de colores no utiliza tonalidades genéricas de marketing; cada token tiene un propósito operacional:

### Tokens Base de Superficie y Tinta

| Token / Rol               | Variable CSS        | Código HEX / Valor | Uso Principal                                            |
| ------------------------- | ------------------- | ------------------ | -------------------------------------------------------- |
| **Papel / Canvas**        | `--paper`           | `#0E1013`          | Fondo estructural general — negro carbón profundo        |
| **Papel Profundo**        | `--paper-deep`      | `#08090B`          | Fondo de pantallas de software y consolas de chat        |
| **Card / Superficie**     | `--card`            | `#16191D`          | Contenedores modulares, tarjetas y paneles interactivos  |
| **Card Hover**            | `--card-hover`      | `#1C2025`          | Estado activo / hover de tarjetas y módulos              |
| **Línea Fina**            | `--line`            | `#262B31`          | Bordes estructurales de 1px, tablas y divisores          |
| **Línea Fuerte**          | `--line-strong`     | `#373E47`          | Bordes interactivos en foco, hover o cabeceras de tabla  |
| **Tinta Principal**       | `--ink`             | `#EDEFF2`          | Texto titular y cifras destacadas — máxima legibilidad    |
| **Tinta Secundaria**      | `--ink-soft`        | `#9AA2AD`          | Descripciones de servicios, párrafos y especificaciones  |
| **Tinta Atenuada**        | `--ink-mute`        | `#5D6571`          | Metadatos comerciales, etiquetas de paso y microcopy     |

### Colores Cromáticos y Acentos

| Color / Rol               | Variable CSS        | Código HEX / Valor | Uso Principal                                            |
| ------------------------- | ------------------- | ------------------ | -------------------------------------------------------- |
| **Verde Señal (Primario)**| `--signal`          | `#1C8A76`          | Color de acción primaria (CTA), estado 24/7 y confirmación de eventos |
| **Verde Señal Hover**     | `--signal-hover`    | `#146356`          | Estado hover/active de botones Signal                    |
| **Verde Señal Suave**     | `--signal-soft`     | `rgba(28,138,118,0.12)` | Burbujas de respuesta del bot, badges de estado activo y celdas ganadas |
| **Cobre (Secundario)**    | `--copper`          | `#D6924E`          | Corchetes `.instrument`, cuellos de botella y plazos de entrega |
| **Cobre Profundo**        | `--copper-deep`     | `#B8763A`          | Bordes de acento de cobre, sombras ténues de calibración |
| **Cobre Suave**           | `--copper-soft`     | `rgba(214,146,78,0.12)` | Fondos de alerta comercial y badges de plan destacado    |
| **Alerta / Pérdida**      | `--alert`           | `#B23A34`          | Iconos de dolor comercial y comparativas manuales (`FaTimes`) |

---

## Tipografía Oficial

El emparejamiento tipográfico combina claridad editorial contemporánea con rigor numérico y técnico:

| Uso                    | Fuente                 | Fuente CSS / Clase   | Pesos                | Detalle                                           |
| ---------------------- | ---------------------- | -------------------- | -------------------- | ------------------------------------------------- |
| **Display y Titulares**| **Plus Jakarta Sans**  | `font-sans`          | 600, 700, 800        | Títulos directos de negocio, letter-spacing: -0.02em |
| **Cuerpo de Texto**    | **Plus Jakarta Sans**  | `font-sans`          | 400, 500             | Textos informativos, line-height 1.6 cómodo       |
| **Precios y Métricas** | **JetBrains Mono**     | `font-mono`          | 400, 500, 600        | Precios en COP, tiempos de respuesta y entregables |

### Modificadores Numéricos
- **`.tnum` / Tabular Nums**: Obligatorio en precios (`$1.190.000`, `$1.890.000`, `$3.490.000`), mensualidades, tiempos de entrega y porcentajes (`font-variant-numeric: tabular-nums`). Evita desalineación de cifras numéricas.

---

## Componentes y Signos de Identidad "Instrumento"

### 1. Corchetes de Calibración (`.instrument`)
Brackets angulares en cobre (`#D6924E`) de 8px de brazo y 1.5px de grosor.  
**Regla de uso quirúrgico:** Reservados **exclusivamente** para:
1. El marco del simulador de chat interactivo del Hero.
2. La tarjeta de precio del plan comercial recomendado (`Plan Sales`).
3. El contenedor central del CTA de diagnóstico final.

### 2. Live Product Mockups (Interfaces de Producto)
Reemplazan cualquier arte abstracto o decorativo:
- **WhatsApp Cloud API Sandbox:** Ventana de chat con foto oficial, burbujas de prospecto entrante y respuestas estructuradas del asistente con opciones en botones y pie de integración CRM.
- **Tablero CRM & Lead Pipeline:** Fichas de prospectos con estado, canal de origen y valor estimado.

### 3. Barra de Telemetría Comercial (`MetricsBar`)
Franja horizontal de alto impacto con 4 métricas tangibles de negocio (`< 3 seg`, `24/7`, `100% oficial`, `0 hrs perdidas`), reemplazando la regla ornamental milimétrica obsoleta (`.ruler`).

### 4. Tabla Bipolar Antes/Después (`BeforeAfterSection`)
Tabla de 2 columnas de alto contraste:
- Columna izquierda: *Operación Manual Habitual* (iconos rojos `FaTimes`).
- Columna derecha: *Operación con NexoBite* (iconos verdes `FaCheck`, fondo suave `rgba(28, 138, 118, 0.08)`).

### 5. Badges Operativos de Estado (`.badge`)
- `.badge.b-active`: Micro-punto verde pulsante (`Respuesta inmediata 24/7`).
- `.badge.b-completed`: Punto verde sólido (`Calificación automática de prospectos`).
- `.badge.b-waiting`: Punto cobre tenue (`Integrado a tu número actual`).

### 6. Eyebrows Comerciales (`.eyebrow`)
Prefijos de sección con numeración arquitectónica:
- Formato: `01 · EL COSTO DE LA ATENCIÓN MANUAL`, `02 · ARQUITECTURA DE ATENCIÓN`, `07 · INVERSIÓN TRANSPARENTE`, etc.
- Punto indicador verde señal (`.eyebrow-dot`).

### 7. Botones Comerciales
- **Radio de esquina**: 4px (`rounded-sm`), nunca redondeo completo (pill).
- **Variante `signal`**: Fondo `#1C8A76`, texto `#0E1013` en negrita, icono `FaWhatsapp` o `FaArrowRight`.
- **Variante `outline`**: Fondo transparente, borde fino `#373E47`, hover a `#EDEFF2`.

---

## Reglas de la Marca

### Hacer
- Mantener la aplicación estrictamente en modo oscuro (`<html className="dark">`).
- Usar líneas finas de 1px (`border-line` = `#262B31`) para estructurar tablas, tarjetas y divisores.
- Utilizar `JetBrains Mono` con `.tnum` para cualquier precio, moneda COP o tiempo de entrega.
- Reservar los corchetes `.instrument` exclusivamente para los 3 elementos de máxima jerarquía.
- Presentar precios transparentes y netos (desglosando implementación única de mensualidad), sin tachaduras artificiales.
- Conservar los logotipos oficiales SVG (`logo-mark-dark.svg`, `logo-mark-light.svg`) intactos.

### No Hacer
- No implementar modo claro ni selectores de tema.
- No utilizar elementos gráficos de "hype de IA" (robots, cerebros digitales, redes neuronales, circuitos).
- No utilizar animaciones de partículas en canvas (`ParticleField`) ni bucles continuos de GPU.
- No mostrar telemetría ficticia de backend (`p95 118ms`, `tenant_id`) como argumento comercial.
- No utilizar botones redondeados tipo píldora (`rounded-full`) para CTAs.
- No utilizar gradientes estridentes ni halos de neón que rompan la sobriedad ejecutiva.

---

**Versión:** 6.0 (Identidad Visual y de Producto "Instrumento")  
**Sistema:** Dark Mode Exclusivo · Next.js 16 + Tailwind CSS v4  
**Autor:** NexoBite DIGITAL
