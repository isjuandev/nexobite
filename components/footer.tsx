import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/container";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <BrandLogo markClassName="h-8 w-8" />
            <p className="max-w-md text-center text-sm text-muted-foreground md:text-left">
              Automatización, desarrollo y sistemas digitales para negocios que
              buscan operar mejor y vender más.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/nexobite"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 rounded-full bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
              <FaInstagram className="relative z-10 h-6 w-6 text-foreground" />
            </a>
            <a
              href="https://wa.me/+573009459026?text=Hola!%20Vengo%20desde%20la%20p%C3%A1gina%20web%20de%20NexoBite%20y%20me%20gustar%C3%ADa%20contactarlos."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              aria-label="WhatsApp"
            >
              <div className="absolute inset-0 rounded-full bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
              <FaWhatsapp className="relative z-10 h-6 w-6 text-foreground" />
            </a>
            </div>
            <a
              href="https://wa.me/+573009459026?text=Hola,%20vengo%20desde%20la%20web%20y%20quiero%20mejorar%20c%C3%B3mo%20gestiono%20mis%20clientes."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} NexoBite. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </Link>
            <span className="text-muted-foreground hidden md:inline">·</span>
            <Link
              href="/#mini-plans"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Planes
            </Link>
            <span className="text-muted-foreground hidden md:inline">·</span>
            <Link
              href="/politica-de-privacidad"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidad
            </Link>
            <span className="text-muted-foreground hidden md:inline">·</span>
            <Link
              href="/condiciones-del-servicio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Condiciones del Servicio
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
