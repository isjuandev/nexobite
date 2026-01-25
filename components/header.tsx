"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Detectar si estamos en una página de propuesta
  const isProposalPage = pathname?.startsWith("/propuesta-");

  // Función reutilizable para smooth scroll
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    const header = document.querySelector("header");
    if (el) {
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const y =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Obtener la altura del header para ajustar el offset
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const offset = headerHeight + 100; // Agregar margen adicional

      // Determinar las secciones según el tipo de página
      const sections = isProposalPage 
        ? ["proposals", "payment", "contact"]
        : ["services", "how-it-works", "mini-plans", "packages"];
      
      const scrollPosition = window.scrollY + offset;

      // Encontrar la sección actual basándose en la posición de scroll
      let currentSection = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        const absoluteTop = top + window.scrollY;

        if (scrollPosition >= absoluteTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll(); // Ejecutar al montar
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProposalPage]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Backdrop adicional para asegurar que nada se vea por encima */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm" />

      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled
            ? "bg-card backdrop-blur-xl shadow-lg shadow-primary/5 border border-border/50"
            : "bg-card/95 backdrop-blur-lg border border-border/30"
        } rounded-2xl`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex h-9 w-9 items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 overflow-hidden">
              <Image
                src="/nexobite-logo.png"
                alt="Nexobite Logo"
                width={32}
                height={32}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NEXOBITE
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {isProposalPage ? (
              // Navegación para páginas de propuestas
              <>
                <Link
                  href="#proposals"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("proposals");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "proposals"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Propuestas</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "proposals"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
                <Link
                  href="#payment"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("payment");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "payment"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Opciones de Pago</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "payment"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "contact"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Contacto</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "contact"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
              </>
            ) : (
              // Navegación normal para la página principal
              <>
                <Link
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "services"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Servicios</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "services"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
                <Link
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("how-it-works");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "how-it-works"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Cómo Funciona</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "how-it-works"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
                <Link
                  href="#mini-plans"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("mini-plans");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "mini-plans"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Planes</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "mini-plans"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
                <Link
                  href="#packages"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("packages");
                  }}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === "packages"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>Paquetes</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === "packages"
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="gradient"
              asChild
              className="relative overflow-hidden"
            >
              <a
                href="https://wa.me/+573116839099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Contáctanos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </a>
            </Button>
          </div>

          <button
            className="relative text-foreground md:hidden hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm md:hidden rounded-b-2xl">
            <nav className="flex flex-col gap-4 p-4">
              {isProposalPage ? (
                // Navegación móvil para páginas de propuestas
                <>
                  <Link
                    href="#proposals"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "proposals"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("proposals");
                      setIsMenuOpen(false);
                    }}
                  >
                    Propuestas
                  </Link>
                  <Link
                    href="#payment"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "payment"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("payment");
                      setIsMenuOpen(false);
                    }}
                  >
                    Opciones de Pago
                  </Link>
                  <Link
                    href="#contact"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "contact"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                      setIsMenuOpen(false);
                    }}
                  >
                    Contacto
                  </Link>
                </>
              ) : (
                // Navegación móvil normal
                <>
                  <Link
                    href="#services"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "services"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                      setIsMenuOpen(false);
                    }}
                  >
                    Servicios
                  </Link>
                  <Link
                    href="#how-it-works"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "how-it-works"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("how-it-works");
                      setIsMenuOpen(false);
                    }}
                  >
                    Cómo Funciona
                  </Link>
                  <Link
                    href="#mini-plans"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "mini-plans"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("mini-plans");
                      setIsMenuOpen(false);
                    }}
                  >
                    Planes
                  </Link>
                  <Link
                    href="#packages"
                    className={`text-sm font-medium transition-colors py-2 ${
                      activeSection === "packages"
                        ? "text-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("packages");
                      setIsMenuOpen(false);
                    }}
                  >
                    Paquetes
                  </Link>
                </>
              )}
              <Button variant="gradient" asChild className="w-full">
                <a
                  href="https://wa.me/+573116839099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
