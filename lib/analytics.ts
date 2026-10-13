import { track } from "@vercel/analytics";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const STORAGE_KEY = "nexobite_attribution";

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>>;

function readStorage(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Guarda los UTM de la primera visita de la sesión (si los hay). */
export function captureAttribution(): void {
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const attribution: Attribution = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 80);
    }
    if (Object.keys(attribution).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    }
  } catch {
    // sessionStorage puede no estar disponible (modo privado, bloqueo de cookies)
  }
}

export function getAttribution(): Attribution {
  return readStorage();
}

/** Texto corto "fuente/campaña" para agregar a los mensajes de WhatsApp. */
export function getReferenceLabel(): string {
  const { utm_source, utm_campaign } = readStorage();
  return [utm_source, utm_campaign].filter(Boolean).join("/");
}

export function trackEvent(
  name: string,
  props: Record<string, string | number | boolean | null> = {}
): void {
  try {
    track(name, { ...getAttribution(), ...props });
  } catch {
    // La analítica nunca debe romper la navegación
  }
}
