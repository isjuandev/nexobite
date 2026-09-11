import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/container";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <BrandLogo markClassName="h-8 w-8" />
            <p className="max-w-md text-center text-xs text-ink-mute md:text-left leading-relaxed">
              Infraestructura técnica de enrutamiento, chatbots y sistemas
              digitales para operaciones que exigen precisión.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/nexobite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-card text-ink-soft hover:text-signal hover:border-signal/50 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/+573009459026?text=Hola!%20Vengo%20desde%20la%20p%C3%A1gina%20web%20de%20NexoBite%20y%20me%20gustar%C3%ADa%20contactarlos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-card text-ink-soft hover:text-signal hover:border-signal/50 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
            <a
              href="https://wa.me/+573009459026?text=Hola,%20vengo%20desde%20la%20web%20y%20quiero%20mejorar%20c%C3%B3mo%20gestiono%20mis%20clientes."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-ink-soft hover:text-signal underline decoration-signal/50 underline-offset-4 transition-colors"
            >
              Iniciar canal en WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-ink-mute text-center md:text-left">
            © {new Date().getFullYear()} NexoBite · Infraestructura y Automatización
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-xs font-mono">
            <Link
              href="/#services"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Servicios
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/#mini-plans"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Planes
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/politica-de-privacidad"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Privacidad
            </Link>
            <span className="text-line-strong hidden md:inline">/</span>
            <Link
              href="/condiciones-del-servicio"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Condiciones
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
