# 🎨 IDENTIDAD VISUAL - NexoBite DIGITAL

## Concepto Visual y Filosofía
**NexoBite DIGITAL** proyecta una imagen premium, moderna y altamente tecnológica, centrada en la inteligencia artificial y el desarrollo de software vanguardista. 
Nuestra identidad visual se apoya en un enfoque **"Dark Mode First"** (Modo Oscuro por defecto), utilizando contrastes vibrantes, gradientes luminosos y micro-interacciones dinámicas que transmiten innovación, confianza y energía creativa.

---

## Paleta de Colores Oficial

El sistema de colores está diseñado para interfaces oscuras, garantizando accesibilidad visual y un aspecto futurista.

### Colores Principales (Modo Oscuro Predeterminado)

| Color                  | Variable CSS | Código HEX | Código RGB | Uso Principal                                  |
| ---------------------- | ------------ | ---------- | ---------- | ---------------------------------------------- |
| **Fondo Principal**     | `--background`| `#0f172a`  | `15, 23, 42`| Fondos generales - Azul espacial muy oscuro     |
| **Azul Brillante**      | `--primary`   | `#3b82f6`  | `59, 130, 246`| Color principal - Confianza, Tecnología (Anillos, bordes) |
| **Naranja Brillante**   | `--accent`    | `#fb923c`  | `251, 146, 60`| Color de acento - Llamados a la acción, Destacados, Glows |
| **Gris Claro Texto**    | `--foreground`| `#f8fafc`  | `248, 250, 252`| Texto principal - Máxima legibilidad            |
| **Fondo Tarjetas**      | `--card`      | `#1e293b`  | `30, 41, 59`| Superficies elevadas, paneles y cards          |

### Gradientes de Marca
El uso de gradientes es fundamental en la tipografía destacada y los fondos decorativos:
- **Texto Gradient**: `bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`. Usado consistentemente en títulos principales, badges y palabras clave.
- **Fondo Radial**: `bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background`. Usado para iluminar secciones de fondo sutilmente tras los componentes principales.

---

## Tipografía

### Jerarquía de Fuentes

| Elemento            | Fuente         | Peso             | Uso                                         |
| ------------------- | -------------- | ---------------- | ------------------------------------------- |
| **Títulos** (h1-h6) | **Poppins**    | Bold (700)       | Encabezados principales (`font-display`). Transmiten solidez y modernidad. |
| **Cuerpo**          | **Inter**      | Regular/Medium   | Texto general (`font-sans`), descripciones (`antialiased`). Transmite claridad técnica. |
| **Código/Técnico**  | **JetBrains Mono**| Regular       | Fragmentos de código, interfaces técnicas (`font-mono`). |

---

## Efectos, Animaciones y Micro-interacciones

La interfaz de NexoBite es viva y altamente reactiva a la interacción del usuario.

### Estilos de Interacción (Hover)
- **Hover Lift (`.hover-lift`)**: Los componentes se elevan suavemente (`-translate-y-1`) y aumentan su sombra exterior (`shadow-lg`) con una transición fluida de 300ms.
- **Hover Glow (`.hover-glow`)**: Genera un resplandor naranja vibrante y envolvente (`box-shadow: 0 0 20px rgba(var(--nexobite-orange), 0.4)`).
- **Link Underline (`.link-underline`)**: Línea inferior animada y estilizada que se expande de izquierda a derecha en los hipervínculos usando el color `--primary`.

### Animaciones Globales
- **Pulse Glow (`animate-pulse-glow`)**: Un pulso suave de sombra naranja (2s ease-in-out) para llamar la atención sobre elementos clave de interacción.
- **Float (`animate-float`)**: Flotación vertical sutil de 10px (6s ease-in-out) para elementos decorativos.
- **Particle Field (Campo de Partículas)**: Componente base para fondos interactivos en canvas. Dibuja partículas luminosas conectadas por nodos que reaccionan de manera elástica y magnética al movimiento del cursor, reforzando la sensación visual de "red neuronal" y conectividad IA.

---

## Estructura de Componentes Clave

### Botones Principales y CTA
- **Variante Gradient**: Usado para el llamado a la acción principal ("Inicia tu Proyecto"). Suele acompañarse de íconos direccionales (flechas) que se desplazan al interactuar (`group-hover:translate-x-1`).
- **Variante Outline**: Fondo transparente, borde sutil naranja (`border-accent/30`). Al hacer hover, el borde se ilumina completamente y el botón adquiere un fondo naranja muy tenue con efecto cristal (`hover:bg-accent/10`).

### Tarjetas (Cards) de Servicio / Producto
- **Fondo y Borde Base**: Tono base semi-transparente (`bg-card/50`) con un delineado sutil (`border-border/50`).
- **Estados Activos (Hover)**: Las tarjetas se iluminan y se elevan del fondo. El borde cambia de inmediato al color de acento (`hover:border-accent`), adquieren una sombra tintada (`hover:shadow-accent/20`) y el fondo cobra fuerza colorida (`hover:bg-card`).
- **Iconos en Cards**: Integrados de forma dinámica en una base cuadrada redondeada que crece al pasar el mouse (`group-hover:scale-110 group-hover:bg-primary/10`), mientras el ícono intercala dramáticamente su color de Naranja a Azul profundo (`text-accent group-hover:text-primary`).

### Elementos Destacados de Sección (Badges)
- Contenedores cápsula o píldora (`rounded-full`) que implementan fondos translúcidos y desenfocados (`backdrop-blur-sm`, `bg-secondary/50`) junto con delineados luminosos ligeros. Incluyen típicamente un pequeño punto indicador de luz parpadeante (`animate-pulse bg-gradient-to-r`).

---

## Espaciado, Formas y Accesibilidad

- **Border Radius Central**: `.5rem` (8px). Las interfaces principales utilizan bordes ligeramente curvos. Este radio equilibra un aspecto moderno y contemporáneo, evitando la rigidez corporativa excesiva así como la informalidad de los círculos extremos, afianzándose como una imagen enfocada de forma premium hacia soluciones tecnológicas B2B y emprendedoras.
- **Layout y Legibilidad**: Empleo de clases avanzadas para jerarquía y balance (`text-pretty`, `text-balance` frente a viudas y huérfanas). Construcción sobre fondos aislados (`isolation: isolate`) con fluidez unificada a lo largo del scroll (`scroll-behavior: smooth`).

---

**Última actualización:** Marzo 2026 (Reflejo del Repositorio de Código)  
**Versión:** 2.0 (Dark Mode First & Componentes Reactivos)  
**Autor:** NexoBite DIGITAL
