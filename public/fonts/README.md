# Estructura de fuentes personalizadas

Usa `woff2` como formato principal. Si tienes compatibilidad legacy, agrega también `woff`.

## Estructura

- `public/fonts/custom/display/` -> Titulares (h1-h6)
- `public/fonts/custom/sans/` -> Texto general (p, botones, labels)
- `public/fonts/custom/mono/` -> Código o datos tabulares

## Convención de nombres

Recomendado:

- `NombreFuente-Regular.woff2`
- `NombreFuente-Medium.woff2`
- `NombreFuente-SemiBold.woff2`
- `NombreFuente-Bold.woff2`

Ejemplo:

- `public/fonts/custom/display/MiFuenteDisplay-Bold.woff2`
- `public/fonts/custom/sans/MiFuenteSans-Regular.woff2`
- `public/fonts/custom/mono/MiFuenteMono-Regular.woff2`

## Siguiente paso (integración)

Cuando tengas los archivos, se pueden registrar con `@font-face` en `app/globals.css` o con `next/font/local` en `app/layout.tsx`.
