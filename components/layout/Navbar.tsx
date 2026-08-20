"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/Button";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Normativa", href: "/normativa" },
  { label: "Protección Infantil", href: "/proteccion-infantil" },
  { label: "Equipo", href: "/equipo" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll detection for glassmorphic elevation
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key to close menu
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle window resize (auto close mobile menu on desktop breakpoint)
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
      {/* Floating Glassmorphic Pill Navbar */}
      <div
        className={cn(
          "pointer-events-auto transition-all duration-300 ease-in-out",
          "rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between",
          "backdrop-blur-xl bg-black/65 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        )}
      >
        {/* Logo & Brand Identity */}
        <Link
          href="/"
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded-full px-1 py-0.5"
          aria-label="SPRECTRUMP COLOMBIA - Inicio"
        >
          <Image
            src="/logo.png"
            alt="SPRECTRUMP COLOMBIA"
            width={180}
            height={44}
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Monospace) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200",
                  active
                    ? "text-[#00D4FF] font-bold drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]"
                    : "text-zinc-400 hover:text-[#00D4FF]"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden lg:flex items-center">
          <Button
            href="/contacto"
            variant="gradient"
            size="sm"
            className="rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider font-semibold shadow-glow-cyan-sm"
            rightIcon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
          >
            Contacto
          </Button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]",
              isOpen
                ? "border-[#00D4FF]/60 bg-[#00D4FF]/10 text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                : "border-white/15 bg-white/5 text-zinc-300 hover:text-white hover:border-zinc-500"
            )}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="pointer-events-auto lg:hidden mt-3 rounded-2xl border border-white/15 bg-black/90 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 duration-200 p-4 space-y-4"
        >
          {/* Route Links List */}
          <nav className="flex flex-col space-y-1" aria-label="Navegación móvil">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 font-mono text-sm tracking-wide transition-colors",
                    active
                      ? "text-[#00D4FF] font-bold"
                      : "text-zinc-400 hover:text-[#00D4FF]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {active ? (
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Section */}
          <div className="pt-3 border-t border-white/10">
            <Button
              href="/contacto"
              variant="gradient"
              size="md"
              className="w-full justify-center rounded-xl font-mono text-xs uppercase tracking-wider font-semibold shadow-glow-cyan-sm"
              onClick={() => setIsOpen(false)}
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
