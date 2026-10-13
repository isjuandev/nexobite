import { createHmac } from "node:crypto";

/**
 * Firma HMAC v2 interna de NexoBite (idéntica a la del SaaS y los workflows de n8n):
 * `v2=` + HMAC-SHA256 hex de `${timestamp}.${json canónico}`, con claves ordenadas.
 */
export function stableStringify(value: unknown): string {
  if (value === null || value === undefined) return JSON.stringify(null);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, nested]) => nested !== undefined)
      .sort(([a], [b]) => a.localeCompare(b));
    return `{${entries
      .map(([key, nested]) => `${JSON.stringify(key)}:${stableStringify(nested)}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

export function signedHeaders(payload: unknown, secret: string, now = Date.now()) {
  const timestamp = String(now);
  const digest = createHmac("sha256", secret)
    .update(`${timestamp}.${stableStringify(payload)}`)
    .digest("hex");
  return { "x-timestamp": timestamp, "x-signature": `v2=${digest}` };
}
