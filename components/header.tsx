"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";

const HOME_NAV_ITEMS = [
  { id: "services", label: "Servicios" },
  { id: "how-it-works", label: "Cómo Funciona" },
  { id: "mini-plans", label: "Planes" },
  { id: "packages", label: "Paquetes" },
] as const;

const PROPOSAL_NAV_ITEMS = [
  { id: "proposals", label: "Propuestas" },
  { id: "payment", label: "Opciones de Pago" },
  { id: "contact", label: "Contacto" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Detectar si estamos en una página de propuesta
  const isProposalPage = Boolean(pathname?.startsWith("/propuesta"));
  // Detectar si NO estamos en la página principal
  const isNotHomePage = pathname !== "/";

  // Determinar los ítems de navegación según el tipo de página
  const navItems = isProposalPage ? PROPOSAL_NAV_ITEMS : HOME_NAV_ITEMS;

  // Función reutilizable para smooth scroll o redirección
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      setIsMenuOpen(false);

      if (isNotHomePage && !isProposalPage) {
        router.push(`/#${sectionId}`);
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        const headerEl = document.getElementById("main-header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 72;
        const targetY =
          el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    },
    [isNotHomePage, isProposalPage, router]
  );

  // Cerrar menú con tecla Escape o clic fuera
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const headerEl = document.getElementById("main-header");
      if (headerEl && !headerEl.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll listener optimizado con requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Si estamos en una página sin secciones hash, resetear sección activa
      if (isNotHomePage && !isProposalPage) {
        setActiveSection("");
        ticking = false;
        return;
      }

      const headerEl = document.getElementById("main-header");
      const headerHeight = headerEl ? headerEl.offsetHeight : 72;
      const offsetThreshold = headerHeight + 64;
      const scrollPosition = currentScrollY + offsetThreshold;

      let currentSection = "";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const absoluteTop = el.getBoundingClientRect().top + currentScrollY;
        if (scrollPosition >= absoluteTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState(); // Ejecutar al montar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isProposalPage, isNotHomePage, navItems]);

  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Backdrop decorativo sin interceptar clicks */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm pointer-events-none" />

      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-xl border border-line-strong shadow-xs"
            : "bg-card/85 backdrop-blur-md border border-line"
        } rounded-md`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="NexoBite - Inicio"
          >
            <BrandLogo markClassName="h-8 w-8" />
          </Link>

          {/* Navegación Desktop */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const linkHref = isNotHomePage && !isProposalPage ? `/#${item.id}` : `#${item.id}`;

              return (
                <Link
                  key={item.id}
                  href={linkHref}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-signal transition-all duration-300 transform -translate-x-1/2 ${
                      isActive
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Acciones del Header */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-sm border border-line bg-paper/50 text-[11px] font-mono text-ink-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block animate-pulse" />
              <span>SYS.OPERATIONAL</span>
            </div>
            <Button
              variant="signal"
              size="sm"
              asChild
              className="rounded-sm font-medium text-xs px-3.5"
            >
              <a
                href="https://wa.me/+573009459026?text=Hola,%20quiero%20entender%20c%C3%B3mo%20puedo%20mejorar%20la%20atenci%C3%B3n%20de%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              type="button"
              className="relative rounded-sm p-2 text-ink transition-colors hover:bg-card border border-line"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="border-t border-line bg-card/98 backdrop-blur-md md:hidden rounded-b-md"
          >
            <nav
              className="flex flex-col gap-3 p-4"
              aria-label="Navegación móvil"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const linkHref = isNotHomePage && !isProposalPage ? `/#${item.id}` : `#${item.id}`;

                return (
                  <Link
                    key={item.id}
                    href={linkHref}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`text-sm py-2 transition-colors ${
                      isActive
                        ? "text-ink font-semibold underline decoration-signal decoration-2 underline-offset-4"
                        : "text-ink-soft font-medium hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Button variant="signal" asChild className="w-full rounded-sm mt-2">
                <a
                  href="https://wa.me/+573009459026?text=Hola,%20quiero%20entender%20c%C3%B3mo%20puedo%20mejorar%20la%20atenci%C3%B3n%20de%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
