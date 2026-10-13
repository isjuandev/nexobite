"use client";

import { useEffect } from "react";
import { captureAttribution, getReferenceLabel, trackEvent } from "@/lib/analytics";

/**
 * Registra clics en cualquier elemento con `data-analytics-event`, indicando la
 * sección y el texto del botón, y propaga la fuente (UTM) en los mensajes de WhatsApp
 * para saber qué canal trajo cada conversación.
 */
export function ConversionTracker() {
  useEffect(() => {
    captureAttribution();

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const element = target?.closest<HTMLElement>("[data-analytics-event]");
      if (!element) return;

      const name = element.dataset.analyticsEvent;
      if (!name) return;

      trackEvent(name, {
        section: element.closest("section[id], header, footer")?.id || element.tagName.toLowerCase(),
        label: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60),
        page: window.location.pathname,
      });

      if (element instanceof HTMLAnchorElement) {
        const ref = getReferenceLabel();
        if (!ref) return;
        try {
          const url = new URL(element.href);
          if (url.hostname === "wa.me" && !element.dataset.refApplied) {
            const text = url.searchParams.get("text") ?? "";
            url.searchParams.set("text", `${text} (ref: ${ref})`.trim());
            element.href = url.toString();
            element.dataset.refApplied = "true";
          }
        } catch {
          // href inválido: se deja tal cual
        }
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
