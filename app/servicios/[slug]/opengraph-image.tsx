import { notFound } from "next/navigation";
import { ogContentType, ogSize, renderOgImage } from "@/app/_og/og-template";
import { getService } from "@/lib/services";

export const alt = "NexoBite · Servicios de automatización y páginas web";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return renderOgImage({
    eyebrow: service.category,
    titleLead: service.hero.titleLead,
    titleAccent: service.hero.titleAccent,
  });
}
