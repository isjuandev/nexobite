"use client";

import { useState } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <div
        className={`absolute bottom-20 right-0 w-80 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 ${isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-3">
          <div className="relative">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <MessageCircle className="relative z-10 h-5 w-5 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-foreground">
              Asistente NexoBite
            </div>
            <div className="text-xs text-muted-foreground">
              En línea - Responde instantáneamente
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex h-64 flex-col gap-3 overflow-y-auto p-4">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5">
            <p className="text-sm text-foreground">
              ¡Hola! Soy el asistente de IA de NexoBite. ¿En qué puedo ayudarte
              hoy?
            </p>
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5">
            <p className="text-sm text-foreground">
              Pregúntame sobre nuestros servicios, o haz clic abajo para chatear
              directamente con nuestro equipo por WhatsApp.
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="border-t border-border p-4">
          <Button
            className="w-full gap-2 group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 border-0"
            asChild
          >
            <a
              href="https://wa.me/+573009459026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-white" />
              Chatea por WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-accent/50 ${!isOpen ? "animate-pulse-glow" : ""
          }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
        <MessageCircle
          className={`relative z-10 h-6 w-6 text-white transition-all duration-300 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
        />
        <X
          className={`absolute z-10 h-6 w-6 text-white transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
        />

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-gradient-to-br from-primary to-accent opacity-20" />
        )}
      </button>
    </div>
  );
}
