import { ogContentType, ogSize, renderOgImage } from "@/app/_og/og-template";

export const alt = "NexoBite · Condiciones del servicio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    titleLead: "Condiciones",
    titleAccent: "del servicio",
    footerNote: "NexoBite · Colombia",
  });
}
