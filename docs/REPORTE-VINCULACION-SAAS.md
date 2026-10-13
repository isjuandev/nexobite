# Reporte general y de vinculación: Landing NexoBite ↔ NexoBite SaaS

Fecha: 2026-10-12 · Alcance: repos `nexobite/` (landing) y `nexobite-saas/` (plataforma) · Base: lectura de código y docs; no se ejecutó ninguno de los dos proyectos.

---

## 1. Qué es cada proyecto

### Landing (`nexobite/`)
- Next.js 16 + React 19 + Tailwind 4, desplegada en Vercel (`www.nexobite.com`). Dark mode "Instrumento" (carbón `#0E1013`, verde señal `#1C8A76`, cobre `#D6924E`).
- Página única: Hero con simulador de WhatsApp → Métricas → Problema → Soluciones → Demo de producto → Antes/Después → Proceso → Servicios → Precios → Testimonios (oculto) → FAQ → CTA.
- Más: dos landings de servicio (`/servicios/automatizacion-whatsapp`, `/servicios/paginas-web-para-empresas`), páginas legales, plantilla de propuesta comercial, SEO técnico (sitemap, JSON-LD, FAQ SSR) y `POST /api/leads` → webhook n8n.
- Conversión: **todo CTA termina en WhatsApp** (`wa.me/+573009459026` con mensaje precargado por plan).
- Oferta actual: **servicio con implementación**, no producto de autoservicio.

| Plan | Implementación (COP) | Mensual (COP) | Entrega |
|---|---|---|---|
| Start | 1.190.000 | 140.000 | 5–7 días |
| Sales (recomendado) | 1.890.000 | 220.000 | 10–14 días |
| Scale | 3.490.000 | 290.000 | 20–25 días |

### SaaS (`nexobite-saas/`)
- Monorepo Turbo/pnpm: `apps/api` (NestJS, TypeORM, Postgres, Redis, BullMQ, Socket.IO), `apps/web` (Next 15, panel), `apps/widget` (chat embebible), `apps/booking-widget`. Orquestación con n8n.
- **Multi-tenant**. Canales: WhatsApp, Instagram y webchat. Módulos: inbox y conversaciones, clientes, citas y servicios, comercio/pedidos, notificaciones, reportes, equipo, webhooks salientes, feature flags, admin de tenants y billing.
- Bot multi-agente: orquestador → agentes **Nex** (comercial), **FAQs**, **Appointments** y **Products** (compra conversacional). Escalado a humano por niveles (soft/escalate/critical).
- Ya corre en producción (Coolify, VM con Multipass). Tenants activos: `isjuandev`, `nexobite`, `nexobite-platform`.

---

## 2. Cómo se relacionan hoy

```
Landing (www)  ──CTA──►  WhatsApp de NexoBite ──► venta consultiva ──► implementación
      │                                                                    │
      │ /api/leads ─► n8n                                                  ▼
      └ chatbot-widget (NO montado) ─► nex.nexobite.com (tenant                SaaS (panel + bot + widget)
                                        "nexobite-platform")                 que opera la cuenta del cliente
```

| Punto de contacto | Estado |
|---|---|
| **Narrativa**: la landing dice "Web que capta → Chatbot WhatsApp que califica → CRM que organiza → Cierre". El SaaS es la implementación real de los 3 últimos pasos. | Conceptualmente alineado, pero **la landing nunca nombra ni muestra el SaaS** |
| **Widget**: `components/chatbot-widget.tsx` carga `nex.nexobite.com/widget.js` con tenant `nexobite-platform` y los colores de la marca. | Existe, pero **no está importado en el layout**: el producto no se usa en su propia vitrina |
| **Leads**: `/api/leads` envía a n8n (`N8N_LEAD_WEBHOOK_URL`), source `nexobite_chatbot_widget`. | Ningún formulario de la landing lo usa; todo va a WhatsApp |
| **Marca**: el panel del SaaS usa los mismos tokens (signal, copper, line, paper) y la misma tipografía. | Alineado en UI. `nexobite-saas/Documentacion/IDENTIDAD-VISUAL.md` sigue en azul/naranja (obsoleto) |
| **Acceso**: `/` del SaaS redirige a `/login`; `/register` dice "el registro se hace vía API". | **No existe camino público de alta ni de demo** |
| **Planes**: los de la landing (Start/Sales/Scale) no aparecen como planes en el SaaS que revisé (solo billing por tenant en admin). | Sin mapeo plan comercial ↔ feature flags/billing |
| **Integraciones prometidas**: la landing vende Google Calendar/Calendly, Google Sheets y CRM Kommo/HubSpot. | El SaaS ya trae agenda, clientes, inbox y reportes propios. **Se vende lo que se podría reemplazar por tu propio producto** |

**Conclusión de vinculación:** hoy la landing vende *servicios de implementación de NexoBite* y el SaaS es el motor interno que los entrega. El cliente no lo ve. Para que la landing presente el SaaS hay que decidir el posicionamiento (sección 4) y hacer visible el producto.

---

## 3. Hallazgos que afectan la venta (re-auditoría vigente, 2026-10-12, con SSH y tests)

Fuente: `nexobite-saas/docs/qa/auditoria-codigo-vs-reporte-2026-10-12.md`. Ahora incluye evidencia de producción: sondeos externos, lectura por SSH de la VM y la suite del API (172 suites, 2014 tests, en verde). No se pudo leer Coolify, n8n ni la base de datos de negocio.

**Cerrado (se puede apoyar en ello):**
- Citas, pedidos, stock, handoff a humano, fuera de alcance y promesa de asesor: corregidos en código, con tests.
- **Seguridad del bot verificada en producción:** `HMAC_ALLOW_LEGACY_API_KEY=false` y `EVOLUTION_WEBHOOK_TOKEN_ENFORCE=true`; el API rechaza peticiones sin firma (401).
- **DNS** fijado en Docker y 0 errores de resolución en 48 h.
- **Planes (TX-9):** explicado. Start/Sales/Scale equivalen a `esencial/avanzado/premium` y hay un módulo único de nombres (`plan-names`). El catálogo de producción ya cobra $140.000 / $220.000 / $290.000 al mes, igual que la landing.
- **Tono:** "usted" configurable por tenant (`brand_tone`), con rutas pendientes.
- Los dos tenants propios operan: `isjuandev` por Evolution (opción económica) y `nexobite` por API oficial. Sirven como caso real de cada nivel.

**Sigue abierto:**
1. **No hay medición de latencia ni disponibilidad.** Sin ella no usar "24/7" ni "< 3 seg" (ver tabla).
2. **Sin probar en producción:** duplicados de órdenes (hay lógica de 15 min pero solo un test con mock), reintento `soft` con cambio de tema y "quiero" ambiguo.
3. **Webhook público de n8n:** acepta la llamada (200) y verifica la firma dentro del workflow; no se confirmó que rechace lo no firmado. Retención de `execution_data` sin revisar.
4. **Tono:** faltan adapter de Evolution, confirmación pública, devoluciones y billing.
5. **Despliegue desfasado:** `app.nexobite.com` corre un commit atrás de `main`. Disco de la VM al 76 %.
6. **Pendiente menor:** confirmar que el plan guardado sea `premium` y no un `scale` que no mapee.

**Efecto en la landing:**

| Elemento de la landing | Estado | Acción |
|---|---|---|
| Seguridad del bot | Respaldada: firma de webhooks y autenticación | Se puede afirmar, sin ir más lejos (no decir "a prueba de ataques") |
| Demo con agenda y compra | Código corregido y tests en verde; falta prueba real | Habilitar tras probar en producción duplicados y reintentos; mientras, demo guiada |
| "100 % línea oficial sin riesgo de bloqueo" | Solo cierto con API oficial | Mostrarlo solo en el nivel oficial; en el económico, explicar el riesgo |
| "< 3 seg" y "24/7" | Sin medición | Medir y publicar el dato real; no repetir hasta entonces |
| Precios mensuales | Coinciden con el catálogo ($140k/$220k/$290k) | Mantener |
| Testimonios | Pendientes por decisión | Seguir ocultos |
| Mención del panel | Aprobada | Incluir |

Otros pendientes de la landing (sin cambios): analítica de conversión sin verificar, `pnpm-workspace.yaml` con valores inválidos, README desactualizado y TODOs de `site-config.ts`.

---

## 4. Decisión de posicionamiento (la que define todo lo demás)

| Opción | Mensaje | Cuándo elegirla |
|---|---|---|
| **A. Agencia + plataforma propia (recomendada hoy)** | "Sistema comercial para WhatsApp: lo implementamos nosotros sobre la plataforma NexoBite" | El producto todavía tiene defectos críticos y no hay alta self-serve. Mantiene el modelo de venta consultiva y sube el valor percibido |
| **B. SaaS puro** | "Crea tu cuenta, conecta WhatsApp, activa el bot" | Requiere onboarding self-serve, billing, planes en el producto y estabilidad. No está listo |
| **C. Híbrido por etapas** | A ahora; "Solicitar acceso" y pilotos después | Es la ruta natural A → B |

Recomiendo **A con vista a C**: la landing deja de decir "automatizamos tus conversaciones" y pasa a "plataforma NexoBite + implementación llave en mano", mostrando el panel.

---

## 5. Cómo hacer que la landing venda más

### Alta prioridad (impacto alto, esfuerzo bajo-medio)
1. **Mostrar el producto real.** Sustituir los mockups por capturas del panel (inbox con conversación, agenda de citas, reportes, ficha de cliente) y una sección "Lo que verás cada día". Es el mayor gap entre landing y SaaS.
2. **Demo interactiva real, con guardarraíles.** Montar `ChatbotWidget` (tenant `nexobite-platform`) con un guion acotado (FAQs + precio + "agenda una llamada"), sin agendamiento ni compras abiertas hasta corregir los bugs. CTA del hero: *"Hablá con el asistente ahora"* + *"Agenda un diagnóstico de 15 min"*.
3. **Prueba social aunque sea pequeña.** Usar los tenants propios como casos honestos: "Operando NexoBite con NexoBite" con métricas reales sacadas del dashboard de `reports` (tiempo de primera respuesta, conversaciones, citas). Conseguir 2–3 pilotos con testimonio a cambio de descuento.
4. **Corregir claims** (sección 3.1) con cifras medidas. Un número real defendible vende más que uno redondo.
5. **Segunda vía de conversión:** formulario corto (nombre, WhatsApp, rubro, volumen de mensajes) conectado a `/api/leads`, además de WhatsApp. Añadir honeypot/rate-limit al endpoint antes de exponerlo (hoy no tiene).
6. **Medición completa:** eventos por plan y sección, UTM propagados al mensaje de WhatsApp (`ref=utm_source`), GA4 o Pixel, Search Console. Sin esto no sabrás qué canal convierte.

### Prioridad media
7. **Calculadora de ROI.** Leads/mes × % que hoy se pierde por demora × ticket promedio = ventas recuperadas vs. costo del plan. Convierte el precio de "gasto" a "inversión".
8. **Reordenar la oferta alrededor del producto.** En Sales/Scale reemplazar "Google Sheets / Kommo / HubSpot" por "Panel NexoBite: inbox, clientes, agenda y reportes incluidos". Menos dependencias de terceros y refuerza el SaaS.
9. **Landings por vertical** (clínicas/odontología, inmobiliarias, restaurantes, e-commerce). Tienes el agente **Products** (compra conversacional con catálogo y pago) que la landing no menciona y es diferenciador para tiendas. Cada vertical = mejor SEO y mensaje más específico.
10. **Reducir riesgo percibido:** prueba piloto de 14 días o garantía de satisfacción, aclarar que los costos de Meta se pagan aparte (ya está en el FAQ, súbelo a la sección de precios), y mostrar "qué pasa si falla" (escalado a humano).
11. **Confianza:** sección de seguridad y datos (Habeas Data, aislamiento multi-tenant, exportación y borrado de datos, que son funciones existentes en `settings`), más perfil de LinkedIn y dirección/horario en `site-config.ts` (también mejora SEO local).
12. **Plan de contenido SEO:** casos de uso, "cómo automatizar WhatsApp Business en Colombia", comparativas (vs. contratar un asesor), guías de API oficial de Meta.

### Ya funciona bien (mantener)
- CTAs claros con mensaje precargado por plan, precios transparentes en COP con tipografía tabular, FAQ que responde objeciones reales, SEO técnico sólido, coherencia visual fuerte.

---

## 6. Plan de vinculación técnica

| Paso | Qué | Dónde |
|---|---|---|
| 1 | Definir subdominios: `www` (landing), `app` (panel), `api`, `nex` (widget), `n8n` | DNS / Coolify / Vercel |
| 2 | Enlace "Iniciar sesión" y "Solicitar acceso" en el header de la landing | `components/header.tsx` |
| 3 | Montar `ChatbotWidget` condicionado a flag de entorno | `app/layout.tsx` |
| 4 | Formulario de captación → `/api/leads` con validación anti-spam | landing + `app/api/leads/route.ts` |
| 5 | Planes Start/Sales/Scale ya mapeados en el SaaS (módulo `plan-names`); falta que 'Elegir plan' termine en alta de tenant | `nexobite-saas` módulos `feature-flags`, `admin` |
| 6 | Alta de tenant asistida (script/endpoint interno) para que "Elegir plan" termine en cuenta creada, no solo en chat | `nexobite-saas` (`auth/register` hoy es solo API) |
| 7 | Unificar identidad: actualizar el IDENTIDAD-VISUAL.md del SaaS a "Instrumento" | `nexobite-saas/Documentacion/` |
| 8 | Pendientes de la re-auditoría: medir latencia y disponibilidad, probar en producción duplicados y reintentos, confirmar rechazo de n8n sin firma, desplegar `main` | `nexobite-saas` / Coolify |

---

## 7. Hoja de ruta sugerida

- **Semana 1:** corregir claims (selector de conexión, quitar métricas sin respaldo), montar widget con guion acotado, formulario + `/api/leads`, medición y UTM, limpiar `pnpm-workspace.yaml` y README.
- **Semana 2–3:** capturas reales del panel, sección "Producto", calculadora de ROI, reorientar planes al panel NexoBite.
- **Mes 2:** 2–3 pilotos con casos reales, landings por vertical, página de seguridad.
- **En paralelo (bloqueante para escalar):** resolver hallazgos 🔴 de la auditoría del SaaS.

## 8. Decisiones tomadas (2026-10-12)
- **Posicionamiento:** agencia con plataforma propia (opción A).
- **Dos niveles de conexión:** económica (Evolution) y premium (API oficial de Meta). La oferta, los claims y el precio deben distinguirlos.
- **Pilotos y testimonios:** pendientes; la sección sigue oculta.
- **Panel:** se puede mencionar públicamente.
- **Auditoría:** re-auditoría con evidencia de producción hecha (sección 3). Falta medir latencia/disponibilidad y probar duplicados y reintentos.
