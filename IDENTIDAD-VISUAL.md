# IDENTIDAD VISUAL — NexoBite (Sistema "Instrumento")

## Concepto Visual y Filosofía
**NexoBite** proyecta una estética de **"Instrumento"**: precisión operativa, sobriedad ingenieril y alta fidelidad técnica. Inspirada en consolas de telemetría, herramientas de laboratorio y software de infraestructura crítica (BullMQ, observabilidad de colas, racks de datos).

Nuestra identidad opera bajo una regla fundamental: **Dark Mode Exclusivo**, con una paleta calibrada de alto contraste funcional, líneas delgadas de un solo píxel, corchetes de hardware en cobre y verde señal como indicador de operatividad.

---

## Paleta de Colores Oficial (Modo Oscuro Exclusivo)

El sistema de colores no utiliza tonalidades genéricas de marketing; cada token tiene un propósito operacional:

### Tokens Base de Superficie y Tinta

| Token / Rol               | Variable CSS        | Código HEX / Valor | Uso Principal                                            |
| ------------------------- | ------------------- | ------------------ | -------------------------------------------------------- |
| **Papel / Canvas**        | `--paper`           | `#0E1013`          | Fondo estructural general — negro carbón profundo        |
| **Card / Superficie**     | `--card`            | `#16191D`          | Contenedores modulares, tarjetas y paneles               |
| **Card Hover**            | `--card-hover`      | `#1C2025`          | Estado activo / hover de tarjetas y módulos              |
| **Línea Fina**            | `--line`            | `#262B31`          | Bordes estructurales de 1px, rejillas y conectores       |
| **Línea Fuerte**          | `--line-strong`     | `#373E47`          | Bordes interactivos en foco o hover                      |
| **Tinta Principal**       | `--ink`             | `#EDEFF2`          | Texto titular y cifras destacadas — máxima legibilidad    |
| **Tinta Secundaria**      | `--ink-soft`        | `#9AA2AD`          | Descripciones de servicios, párrafos y especificaciones  |
| **Tinta Atenuada**        | `--ink-mute`        | `#5D6571`          | Etiquetas técnicas, metadatos y comentarios de código    |

### Colores Cromáticos y Acentos

| Color / Rol               | Variable CSS        | Código HEX / Valor | Uso Principal                                            |
| ------------------------- | ------------------- | ------------------ | -------------------------------------------------------- |
| **Verde Señal (Primario)**| `--signal`          | `#1C8A76`          | Color de acción primaria (CTA), estado operativo activo  |
| **Verde Señal Hover**     | `--signal-hover`    | `#146356`          | Estado presionado o suspendido de botones de señal       |
| **Verde Señal Suave**     | `--signal-soft`     | `rgba(28,138,118,0.12)` | Fondos de iconos técnicos, badges de estado activo |
| **Cobre (Secundario)**    | `--copper`          | `#D6924E`          | Corchetes de calibración `.instrument`, badges de ahorro |
| **Cobre Profundo**        | `--copper-deep`     | `#B8763A`          | Bordes de acento de cobre, sombras ténues de calibración |
| **Cobre Suave**           | `--copper-soft`     | `rgba(214,146,78,0.12)` | Fondos de advertencia técnica, badges de plan destacado |

---

## Tipografía Oficial

El emparejamiento tipográfico combina claridad editorial contemporánea con rigor numérico y técnico:

| Uso                    | Fuente                 | Fuente CSS / Clase   | Pesos                | Detalle                                           |
| ---------------------- | ---------------------- | -------------------- | -------------------- | ------------------------------------------------- |
| **Display y Titulares**| **Plus Jakarta Sans**  | `font-sans`          | 600, 700, 800        | Títulos concisos, letter-spacing: -0.02em         |
| **Cuerpo de Texto**    | **Plus Jakarta Sans**  | `font-sans`          | 400, 500             | Textos informativos, excelente legibilidad        |
| **Datos y Telemetría** | **JetBrains Mono**     | `font-mono`          | 400, 500, 600        | Precios, colas de jobs, IDs, métricas y badges    |

### Modificadores Numéricos
- **`.tnum` / Tabular Nums**: Se utiliza obligatoriamente en precios, contadores, latencias y cronómetros (`font-variant-numeric: tabular-nums`). Evita saltos de ancho durante transiciones numéricas.

---

## Componentes y Signos de Identidad "Instrumento"

### 1. Corchetes de Calibración (`.instrument`)
Las tarjetas más relevantes (planes recomendados, terminales de monitoreo, bloques de contacto) implementan corchetes en ángulo de cobre (`#D6924E`) en las 4 esquinas:
```css
.instrument {
  position: relative;
}
/* Genera brackets de precisión técnica con pseudo-elementos ::before y ::after */
```

### 2. Regla de Calibración (`.ruler`)
Escalas de medición milimétrica con marcas de graduación de 4px, 6px y 10px que acompañan widgets de telemetría y cabeceras de monitor.

### 3. Badges de Telemetría (Estados BullMQ)
Estilizados como monitores de colas de trabajos en segundo plano:
- `.badge.b-active`: Verde señal con punto pulsante (`active`).
- `.badge.b-completed`: Verde señal suave para entregas y métricas validadas.
- `.badge.b-waiting`: Tinta suave / estado en espera.
- `.badge.b-delayed`: Cobre suave para advertencias y latencias.
- `.badge.b-copper`: Cobre para planes destacados y porcentajes de ahorro.

### 4. Eyebrows Técnicos (`.eyebrow`)
Prefijos de sección con numeración de arquitectura:
- Formato: `01 · ARQUITECTURA DE SERVICIOS`, `02 · DESPLIEGUE Y OPERACIÓN`, etc.
- Punto indicador verde señal (`.eyebrow-dot`).

### 5. Botones Compactos
- **Radio de esquina**: 4px (`rounded-sm`), nunca redondeo completo (pill).
- **Variante `signal`**: Fondo `#1C8A76`, texto `#0E1013` o `#EDEFF2`, hover `#146356`.
- **Variante `outline`**: Fondo transparente, borde fino `#262B31`, hover `#16191D`.

---

## Reglas de la Marca

### Hacer
- Mantener la aplicación estrictamente en modo oscuro (`<html className="dark">`).
- Usar líneas finas de 1px (`border-line` = `#262B31`) para separar secciones y tarjetas.
- Utilizar `JetBrains Mono` con `.tnum` para cualquier dato cuantificable o estado de sistema.
- Reservar los corchetes `.instrument` exclusivamente para el elemento de mayor jerarquía visual de cada sección.
- Conservar los logotipos oficiales SVG (`logo-mark-dark.svg`, `logo-mark-light.svg`) sin alteraciones geométricas.

### No Hacer
- No implementar modo claro ni selectores de tema.
- No utilizar acentos naranjas fuera de los elementos de marca preexistentes en el logo.
- No utilizar botones redondeados tipo píldora (`rounded-full`) para CTAs principales.
- No utilizar gradientes estridentes ni sombras de colores pesadas que rompan la sobriedad técnica.

---

**Versión:** 5.0 (Identidad Visual "Instrumento")  
**Sistema:** Dark Mode Exclusivo · Next.js 16 + Tailwind CSS v4  
**Autor:** NexoBite DIGITAL
