import { FaCheck } from "react-icons/fa";
import type { MockupKind } from "@/lib/services";

/** Marco común de las maquetas de producto de las páginas de servicio (`.instrument` = elemento principal de la vista). */
function MockupFrame({
  title,
  tag,
  children,
}: {
  title: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="instrument overflow-hidden rounded-md border border-line bg-card shadow-lg">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-xs font-medium text-ink">{title}</span>
          </div>
          <span className="rounded-sm border border-line bg-paper px-2 py-0.5 font-mono text-label text-ink-mute">
            {tag}
          </span>
        </div>
        {children}
      </div>
      <p className="mt-3 text-center font-mono text-label text-ink-mute">
        Maqueta ilustrativa. Los datos reales aparecen en tu cuenta.
      </p>
    </div>
  );
}

function Check({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-sm border border-line bg-paper px-2 py-1 text-label text-ink-soft">
      <FaCheck className="h-3 w-3 shrink-0 text-signal" />
      <span className="truncate">{label}</span>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <MockupFrame title="WhatsApp de tu negocio" tag="ASISTENTE ACTIVO">
      <div className="space-y-3.5 p-4 text-xs">
        <div className="flex flex-col items-start gap-1">
          <span className="pl-1 font-mono text-micro text-ink-mute">11:48 PM · Cliente nuevo</span>
          <div className="max-w-[85%] rounded-md rounded-tl-none border border-line bg-card p-3 leading-relaxed text-ink">
            Hola, ¿qué precio tiene el servicio y hasta qué hora atienden?
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="pr-1 font-mono text-micro text-signal">11:48 PM · Asistente</span>
          <div className="max-w-[90%] rounded-md rounded-tr-none border border-signal/30 bg-signal-soft p-3 leading-relaxed text-ink">
            ¡Hola! Te cuento los planes y te dejo agendada una llamada. ¿Cuál es tu presupuesto aproximado?
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="pl-1 font-mono text-micro text-ink-mute">11:49 PM · Cliente</span>
          <div className="max-w-[85%] rounded-md rounded-tl-none border border-line bg-card p-3 leading-relaxed text-ink">
            Quiero hablar con una persona.
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-sm border border-copper/50 px-2.5 py-1 font-mono text-label text-copper">
          → Chat pasado a tu asesor con el historial
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 border-t border-line p-3">
        <Check label="Cliente guardado" />
        <Check label="Asesor avisado" />
      </div>
    </MockupFrame>
  );
}

function WebMockup() {
  return (
    <MockupFrame title="tunegocio.com" tag="VISTA PREVIA">
      <div className="space-y-4 p-4">
        <div className="space-y-2 rounded-sm border border-line bg-paper p-4">
          <div className="h-2 w-1/3 rounded-sm bg-signal/60" />
          <div className="h-3 w-4/5 rounded-sm bg-ink/80" />
          <div className="h-3 w-3/5 rounded-sm bg-ink/80" />
          <div className="h-2 w-2/3 rounded-sm bg-line-strong" />
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-signal px-3 py-1.5 text-label font-semibold text-paper">
            Escríbenos por WhatsApp →
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Servicios", "Casos", "Contacto"].map((s) => (
            <div key={s} className="rounded-sm border border-line bg-paper p-3">
              <div className="mb-2 h-2 w-1/2 rounded-sm bg-copper/60" />
              <div className="mb-1 h-1.5 w-full rounded-sm bg-line-strong" />
              <div className="h-1.5 w-2/3 rounded-sm bg-line-strong" />
              <span className="mt-2 block font-mono text-micro text-ink-mute">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 border-t border-line p-3">
        <Check label="Se ve bien en celular" />
        <Check label="Botón directo al chat" />
      </div>
    </MockupFrame>
  );
}

function IntegracionesMockup() {
  const rows = [
    { step: "1", text: "Un cliente escribe por WhatsApp", state: "RECIBIDO", tone: "text-ink-mute" },
    { step: "2", text: "Se guarda en tu lista de clientes", state: "GUARDADO", tone: "text-signal" },
    { step: "3", text: "Tu equipo recibe el aviso", state: "AVISADO", tone: "text-signal" },
    { step: "4", text: "Se envía la confirmación al cliente", state: "ENVIADO", tone: "text-signal" },
  ];
  return (
    <MockupFrame title="Flujo conectado" tag="AUTOMÁTICO">
      <div className="space-y-2 p-4">
        {rows.map((r) => (
          <div
            key={r.step}
            className="flex items-center justify-between gap-3 rounded-sm border border-line bg-paper px-3 py-2.5"
          >
            <div className="flex items-center gap-3 text-xs text-ink-soft">
              <span className="font-mono text-micro text-ink-mute">PASO {r.step}</span>
              <span>{r.text}</span>
            </div>
            <span className={`shrink-0 font-mono text-micro font-semibold ${r.tone}`}>{r.state}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 border-t border-line p-3">
        <Check label="Sin copiar datos a mano" />
        <Check label="Nada se pierde" />
      </div>
    </MockupFrame>
  );
}

function SoftwareMockup() {
  return (
    <MockupFrame title="Cotizador de tu negocio" tag="A TU MEDIDA">
      <div className="space-y-3 p-4 text-xs">
        {[
          { label: "Tipo de servicio", value: "Selecciona una opción" },
          { label: "Cantidad", value: "—" },
          { label: "Fecha deseada", value: "—" },
        ].map((f) => (
          <div key={f.label} className="space-y-1">
            <span className="font-mono text-micro text-ink-mute">{f.label.toUpperCase()}</span>
            <div className="rounded-sm border border-line bg-paper px-3 py-2 text-ink-soft">{f.value}</div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-sm border border-copper/40 bg-copper-soft px-3 py-2.5">
          <span className="font-mono text-label text-copper">TOTAL ESTIMADO</span>
          <span className="tnum font-mono text-sm font-semibold text-ink">$ ———</span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-sm bg-signal px-3 py-1.5 text-label font-semibold text-paper">
          Enviar cotización →
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 border-t border-line p-3">
        <Check label="Con tus reglas y precios" />
        <Check label="Cotización por WhatsApp" />
      </div>
    </MockupFrame>
  );
}

export function ServiceMockup({ kind }: { kind: MockupKind }) {
  switch (kind) {
    case "whatsapp":
      return <WhatsAppMockup />;
    case "web":
      return <WebMockup />;
    case "integraciones":
      return <IntegracionesMockup />;
    case "software":
      return <SoftwareMockup />;
  }
}
