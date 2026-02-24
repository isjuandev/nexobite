import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md overflow-hidden">
              <Image
                src="/nexobite-logo.png"
                alt="Nexobite Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NEXOBITE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/nexobite"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
              <Instagram className="relative z-10 h-6 w-6 text-white" />
            </a>
            <a
              href="https://wa.me/+573009459026"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
              aria-label="WhatsApp"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
              <MessageCircle className="relative z-10 h-6 w-6 text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} NexoBite. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/politica-de-privacidad"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Política de Privacidad y Seguridad
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
