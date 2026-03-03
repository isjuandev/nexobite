import { NextRequest, NextResponse } from "next/server";

interface LeadRequestBody {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  pageUrl?: unknown;
}

const WEBHOOK_TIMEOUT_MS = 10_000;

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

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const payload = {
    source: "nexobite_chatbot_widget",
    createdAt: new Date().toISOString(),
    lead: {
      name,
      phone,
      email,
      message,
    },
    metadata: {
      pageUrl: pageUrl || null,
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
