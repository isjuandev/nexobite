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

const WIDGET_SRC = "https://nex.nexobite.com/widget.js";

export function ChatbotWidget() {
  useEffect(() => {
    window.OmniChat = {
      tenantSlug: "nexobite-platform",
      widgetBaseUrl: "https://nex.nexobite.com",
      widgetPath: "/chat",
      launcher: {
        position: "right",
        primaryColor: "#1C8A76",
        secondaryColor: "#146E5E",
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

    const loadScript = () => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${WIDGET_SRC}"]`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = WIDGET_SRC;
        script.async = true;
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
  }, []);

  return null;
}
