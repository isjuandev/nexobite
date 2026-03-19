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
        primaryColor: "#2563EB",
        secondaryColor: "#ED8936",
        iconColor: "#FFFFFF",
        glowColor: "#ED8936",
        pulseColor: "#2563EB",
        shadowColor: "#0F172A",
        size: 56,
        iconSize: 24,
        bottomOffset: 24,
        sideOffset: 24,
        showPulse: true,
      },
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src=\"${WIDGET_SRC}\"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

