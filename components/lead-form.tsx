"use client";

import { useState, type FormEvent } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getAttribution, trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-sm border border-line px-3 py-2 text-sm text-ink placeholder:text-ink-mute focus:border-signal focus:outline-none";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          business: data.get("business"),
          message: data.get("message"),
          website: data.get("website"),
          source: "nexobite_landing_form",
          pageUrl: window.location.href,
          attribution: getAttribution(),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "No pudimos enviar tus datos. Escríbenos por WhatsApp.");
      }

      trackEvent("lead_submitted", { section: "cta", page: window.location.pathname });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos enviar tus datos.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-md border border-signal/40 bg-signal-soft p-5 text-sm text-ink"
      >
        <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
        <p>Recibimos tus datos. Te contactaremos el siguiente día hábil.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs text-ink-soft">
          Nombre
          <input name="name" required minLength={2} maxLength={120} autoComplete="name" className={`${inputClass} mt-1`} />
        </label>
        <label className="block text-xs text-ink-soft">
          WhatsApp
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+57 300 000 0000" className={`${inputClass} mt-1`} />
        </label>
        <label className="block text-xs text-ink-soft">
          Correo
          <input name="email" type="email" required maxLength={160} autoComplete="email" className={`${inputClass} mt-1`} />
        </label>
        <label className="block text-xs text-ink-soft">
          Tu negocio (opcional)
          <input name="business" maxLength={120} autoComplete="organization" className={`${inputClass} mt-1`} />
        </label>
      </div>
      <label className="block text-xs text-ink-soft">
        ¿Qué quieres mejorar en tu atención?
        <textarea name="message" required minLength={10} maxLength={2000} rows={3} className={`${inputClass} mt-1 resize-none`} />
      </label>

      {/* Honeypot anti-spam: oculto para personas y lectores de pantalla */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          No llenar este campo
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="text-xs text-alert">
          {error}
        </p>
      )}

      <Button type="submit" variant="outline" disabled={status === "sending"} className="w-full rounded-sm font-medium">
        {status === "sending" ? "Enviando..." : "Quiero que me contacten"}
        <FaArrowRight className="ml-2 h-3 w-3" />
      </Button>
      <p className="text-center text-label text-ink-mute">
        Usamos tus datos solo para contactarte, según nuestra{" "}
        <a href="/politica-de-privacidad" className="underline underline-offset-2 hover:text-ink-soft">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
