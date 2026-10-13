import { NextRequest, NextResponse } from "next/server";

interface LeadRequestBody {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  pageUrl?: unknown;
  source?: unknown;
  business?: unknown;
  /** Honeypot: los usuarios reales lo dejan vacío. */
  website?: unknown;
  attribution?: unknown;
}

const WEBHOOK_TIMEOUT_MS = 10_000;
const ALLOWED_SOURCES = new Set(["nexobite_chatbot_widget", "nexobite_landing_form"]);

// Límite por IP en memoria (por instancia): suficiente para frenar spam básico.
const RATE_LIMIT_WINDOW_MS = 10 * 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

function asTrimmedString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^\+?[0-9\s()-]{7,20}$/.test(phone);
}

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook no configurado. Define N8N_LEAD_WEBHOOK_URL." },
      { status: 500 }
    );
  }

  let body: LeadRequestBody;
  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Body inválido. Debe ser JSON." },
      { status: 400 }
    );
  }

  // Honeypot: responde ok sin reenviar para no revelar el filtro a los bots.
  if (asTrimmedString(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Intenta de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  const name = asTrimmedString(body.name, 120);
  const phone = asTrimmedString(body.phone, 40);
  const email = asTrimmedString(body.email, 160);
  const message = asTrimmedString(body.message, 2_000);
  const pageUrl = asTrimmedString(body.pageUrl, 500);

  if (name.length < 2) {
    return NextResponse.json(
      { error: "El nombre debe tener al menos 2 caracteres." },
      { status: 400 }
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Número de teléfono inválido." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Correo electrónico inválido." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "El mensaje debe tener al menos 10 caracteres." },
      { status: 400 }
    );
  }

  const requestedSource = asTrimmedString(body.source, 60);
  const source = ALLOWED_SOURCES.has(requestedSource)
    ? requestedSource
    : "nexobite_chatbot_widget";
  const business = asTrimmedString(body.business, 120);

  const attribution: Record<string, string> = {};
  if (body.attribution && typeof body.attribution === "object") {
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = asTrimmedString((body.attribution as Record<string, unknown>)[key], 80);
      if (value) attribution[key] = value;
    }
  }

  const payload = {
    source,
    createdAt: new Date().toISOString(),
    lead: {
      name,
      phone,
      email,
      message,
      business: business || null,
    },
    metadata: {
      pageUrl: pageUrl || null,
      attribution: Object.keys(attribution).length > 0 ? attribution : null,
      userAgent: request.headers.get("user-agent") ?? null,
      ip,
    },
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!webhookResponse.ok) {
      const detail = await webhookResponse.text().catch(() => "");
      return NextResponse.json(
        {
          error: `El webhook respondió con ${webhookResponse.status}. ${
            detail ? detail.slice(0, 250) : ""
          }`.trim(),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo conectar con el webhook de n8n." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
