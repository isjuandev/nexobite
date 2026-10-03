import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Container } from "@/components/container";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const hasAddress = Boolean(
    siteConfig.contact.address.streetAddress || siteConfig.contact.address.addressLocality
  );

  return (
    <footer className="border-t border-line bg-paper py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <BrandLogo markClassName="h-8 w-8" />
            <p className="max-w-md text-center text-xs text-ink-mute md:text-left leading-relaxed">
              Sistemas comerciales para WhatsApp y web: respuestas inmediatas,
              calificación automática y procesos de venta ordenados.
            </p>

            {/* Datos de contacto y ubicación visibles solo si están definidos en siteConfig */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-x-4 gap-y-1.5 text-xs text-ink-soft pt-1">
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-signal transition-colors font-mono"
                >
                  <FaEnvelope className="h-3 w-3 text-ink-mute" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}

              {siteConfig.contact.phoneDisplay && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-signal transition-colors font-mono"
                >
                  <FaPhoneAlt className="h-3 w-3 text-ink-mute" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              )}

              {hasAddress && (
                <span className="inline-flex items-center gap-1.5 text-ink-mute font-mono">
                  <FaMapMarkerAlt className="h-3 w-3" />
                  <span>
                    {siteConfig.contact.address.streetAddress
                      ? `${siteConfig.contact.address.streetAddress}, `
                      : ""}
                    {siteConfig.contact.address.addressLocality}
                    {siteConfig.contact.address.addressRegion
                      ? `, ${siteConfig.contact.address.addressRegion}`
                      : ""}
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-card text-ink-soft hover:text-signal hover:border-signal/50 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
              )}

              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-card text-ink-soft hover:text-signal hover:border-signal/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              )}

              {siteConfig.contact.whatsappUrl && (
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-card text-ink-soft hover:text-signal hover:border-signal/50 transition-colors"
                  aria-label="WhatsApp"
                  data-analytics-event="whatsapp_click"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              )}
            </div>
            {siteConfig.contact.whatsappUrl && (
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-ink-soft hover:text-signal underline decoration-signal/50 underline-offset-4 transition-colors"
                data-analytics-event="whatsapp_click"
              >
                Iniciar canal en WhatsApp →
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-ink-mute text-center md:text-left">
            © {new Date().getFullYear()} NexoBite · Automatización Comercial y Sistemas Web
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-xs font-mono">
            <Link
              href="/#servicios"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Servicios de Automatización
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/#precios"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Planes y Precios
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/#faq"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Preguntas Frecuentes (FAQ)
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/politica-de-privacidad"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Política de Privacidad
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/condiciones-del-servicio"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Condiciones del Servicio
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
