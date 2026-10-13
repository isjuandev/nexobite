"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    OmniChat?: {
      tenantSlug: string;
      widgetBaseUrl: string;
      widgetPath: string;
      launcher: {
        position: "left" | "right";
        primaryColor: string;
        secondaryColor: string;
        iconColor: string;
        glowColor: string;
        pulseColor: string;
        shadowColor: string;
        size: number;
        iconSize: number;
        bottomOffset: number;
        sideOffset: number;
        showPulse: boolean;
      };
    };
  }
}

const WIDGET_BASE_URL = "https://app.nexobite.com";
const WIDGET_SRC = `${WIDGET_BASE_URL}/widget.js`;

export function ChatbotWidget() {
  useEffect(() => {
    window.OmniChat = {
      tenantSlug: "nexobite",
      widgetBaseUrl: WIDGET_BASE_URL,
      widgetPath: "/chat",
      launcher: {
        position: "right",
        primaryColor: "#1C8A76",
        secondaryColor: "#146356",
        iconColor: "#FFFFFF",
        glowColor: "#1C8A76",
        pulseColor: "#1C8A76",
        shadowColor: "#0E1013",
        size: 56,
        iconSize: 24,
        bottomOffset: 24,
        sideOffset: 24,
        showPulse: true,
      },
    };

    const injectShadowOverrides = () => {
      const host = document.getElementById("omnichat-widget-root");
      const shadow = host?.shadowRoot;
      if (!shadow) return false;

      if (!shadow.getElementById("nexobite-landing-ocw-overrides")) {
        const style = document.createElement("style");
        style.id = "nexobite-landing-ocw-overrides";
        style.textContent = `
          .ocw-panel {
            height: 640px !important;
            max-height: none !important;
            border: none !important;
            background: transparent !important;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45) !important;
            transform-origin: bottom right !important;
          }
          .ocw-panel:not(.open) {
            position: absolute !important;
            bottom: 72px !important;
            right: 0 !important;
            visibility: hidden !important;
          }
          .ocw-iframe {
            background: transparent !important;
            border-radius: 16px !important;
          }
          @media (max-height: 760px) {
            .ocw-panel.open {
              transform: translateY(0) scale(0.88) !important;
            }
          }
          @media (max-height: 680px) {
            .ocw-panel.open {
              transform: translateY(0) scale(0.8) !important;
            }
          }
        `;
        shadow.appendChild(style);
      }
      return true;
    };

    let observer: MutationObserver | null = null;

    const loadScript = () => {
      if (!injectShadowOverrides()) {
        observer = new MutationObserver(() => {
          if (injectShadowOverrides()) {
            observer?.disconnect();
            observer = null;
          }
        });
        observer.observe(document.body, { childList: true });
      }

      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${WIDGET_SRC}"]`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = WIDGET_SRC;
        script.async = true;
        script.addEventListener("load", () => {
          injectShadowOverrides();
        });
        document.body.appendChild(script);
      }
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadScript);
      } else {
        setTimeout(loadScript, 2500);
      }
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
}
