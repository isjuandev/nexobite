import { ogContentType, ogSize, renderOgImage } from "./_og/og-template";

export const alt = "NexoBite · Automatización de WhatsApp y páginas web para tu negocio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Automatización para PYMEs en Colombia",
    titleLead: "Tu WhatsApp y tu web",
    titleAccent: "vendiendo por ti",
  });
}
