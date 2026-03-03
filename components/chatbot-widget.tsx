"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
  X,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormValues {
  nombre: string;
  correo: string;
  negocio: string;
  telefono: string;
  descripcion: string;
}

const INITIAL_FORM: ContactFormValues = {
  nombre: "",
  correo: "",
  negocio: "",
  telefono: "",
  descripcion: "",
};

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://crm-api.nexobite.com";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<ContactFormValues>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.message || "No se pudo enviar tu información en este momento."
        );
      }

      setStatus("success");
      setStatusMessage(
        data?.message ||
        "¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto."
      );
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Inténtalo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setStatusMessage("");
    setForm(INITIAL_FORM);
  };

  const inputClasses = (field: string) =>
    `w-full rounded-lg border bg-background/50 pl-10 pr-3 py-2.5 text-sm text-foreground 
     outline-none transition-all duration-300 placeholder:text-muted-foreground/50
     ${focusedField === field
      ? "border-accent shadow-[0_0_0_3px_rgba(249,115,22,0.1)] bg-background"
      : "border-border/60 hover:border-border"
    }`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <div
        className={`absolute bottom-20 right-0 w-[360px] overflow-hidden rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-400 ease-out ${isOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}
        style={{
          boxShadow: isOpen
            ? "0 25px 60px -12px rgba(0,0,0,0.35), 0 0 40px -10px rgba(59,130,246,0.15)"
            : "none",
        }}
      >
        {/* Header */}
        <div className="relative overflow-hidden border-b border-border/30 px-5 py-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent" />
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-emerald-400 shadow-sm shadow-emerald-400/50" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-foreground tracking-tight">
                Soy Nex
              </div>
              <div className="text-xs text-muted-foreground">
                ¿En qué puedo ayudarte hoy?
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 text-muted-foreground transition-all duration-200 hover:bg-secondary/80 hover:text-foreground hover:scale-105 active:scale-95"
              aria-label="Cerrar formulario"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[65vh] overflow-y-auto">
          {status === "success" ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-4 ring-emerald-500/20">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {statusMessage}
                </p>
              </div>
              <Button
                onClick={resetForm}
                variant="outline"
                className="mt-2 gap-2 rounded-xl"
              >
                <Send className="h-4 w-4" />
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4 p-5">
              {/* Nombre */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-nombre"
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground/80"
                >
                  <User className="h-3 w-3 text-accent" />
                  Nombre <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                  <input
                    id="contact-nombre"
                    type="text"
                    value={form.nombre}
                    onChange={(e) => updateField("nombre", e.target.value)}
                    onFocus={() => setFocusedField("nombre")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses("nombre")}
                    placeholder="Tu nombre completo"
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>
              </div>

              {/* Correo */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-correo"
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground/80"
                >
                  <Mail className="h-3 w-3 text-accent" />
                  Correo electrónico <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                  <input
                    id="contact-correo"
                    type="email"
                    value={form.correo}
                    onChange={(e) => updateField("correo", e.target.value)}
                    onFocus={() => setFocusedField("correo")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses("correo")}
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
              </div>

              {/* Row: Negocio + Teléfono */}
              <div className="grid grid-cols-2 gap-3">
                {/* Negocio */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-negocio"
                    className="flex items-center gap-1.5 text-xs font-medium text-foreground/80"
                  >
                    <Building2 className="h-3 w-3 text-accent" />
                    Negocio
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                    <input
                      id="contact-negocio"
                      type="text"
                      value={form.negocio}
                      onChange={(e) => updateField("negocio", e.target.value)}
                      onFocus={() => setFocusedField("negocio")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("negocio")}
                      placeholder="Tu empresa"
                      maxLength={100}
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-telefono"
                    className="flex items-center gap-1.5 text-xs font-medium text-foreground/80"
                  >
                    <Phone className="h-3 w-3 text-accent" />
                    Teléfono
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                    <input
                      id="contact-telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => updateField("telefono", e.target.value)}
                      onFocus={() => setFocusedField("telefono")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("telefono")}
                      placeholder="+57 300..."
                    />
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-descripcion"
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground/80"
                >
                  <FileText className="h-3 w-3 text-accent" />
                  Descripción del problema o necesidad{" "}
                  <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/40" />
                  <textarea
                    id="contact-descripcion"
                    value={form.descripcion}
                    onChange={(e) => updateField("descripcion", e.target.value)}
                    onFocus={() => setFocusedField("descripcion")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses("descripcion")} h-24 resize-none !pl-10 pt-2.5`}
                    placeholder="Cuéntanos qué necesitas y cómo podemos ayudarte..."
                    required
                    minLength={10}
                    maxLength={2000}
                  />
                </div>
                <div className="text-right text-[10px] text-muted-foreground/50">
                  {form.descripcion.length}/2000
                </div>
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs text-red-400 flex items-start gap-2">
                  <X className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                variant="gradient"
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 rounded-xl py-6 text-sm font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar solicitud
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>

              {/* Privacy note */}
              <p className="text-center text-[10px] text-muted-foreground/40 leading-relaxed">
                Al enviar, aceptas que contactemos contigo para dar seguimiento a
                tu solicitud.
              </p>
            </form>
          )}
        </div>

        {/* Footer — WhatsApp CTA */}
        <div className="border-t border-border/30 px-5 py-3 bg-secondary/20">
          <Button
            className="w-full gap-2 rounded-xl text-xs font-medium hover:bg-transparent"
            variant="ghost"
            size="sm"
            asChild
          >
            <a
              href="https://wa.me/+573009459026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span className="text-muted-foreground">
                ¿Prefieres WhatsApp?{" "}
                <span className="text-foreground font-medium underline underline-offset-2">
                  Chatea con nosotros
                </span>
              </span>
            </a>
          </Button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-accent/50 ${!isOpen ? "animate-pulse-glow" : ""
          }`}
        aria-label={isOpen ? "Cerrar formulario" : "Abrir formulario de contacto"}
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
