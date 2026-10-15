import { ogContentType, ogSize, renderOgImage } from "@/app/_og/og-template";

export const alt = "NexoBite · Política de privacidad";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    titleLead: "Política de",
    titleAccent: "privacidad",
    footerNote: "NexoBite · Colombia",
  });
}
