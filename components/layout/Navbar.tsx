"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isGreen?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Econecta", href: "/#econecta", isGreen: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll detection for subtle shadow elevation
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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
      {/* Floating Glassmorphic Pill Navbar */}
      <div
        className={cn(
          "relative pointer-events-auto transition-all duration-300 ease-in-out",
          "rounded-full px-6 py-1 flex items-center justify-between min-h-[50px]",
          "backdrop-blur-xl bg-white/70 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
          isScrolled && "bg-white/85 shadow-[0_12px_35px_rgb(0,82,204,0.12)] border-slate-300/80"
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none rounded-full py-0.5"
          aria-label="SPECTRUMP COLOMBIA SAS - Inicio"
        >
          <div className="relative h-10 sm:h-11 w-52 sm:w-60 transform scale-125 sm:scale-135 origin-left">
            <Image
              src="/logo.png"
              alt="SPECTRUMP COLOMBIA SAS"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Centrado Geométrico Perfecto) */}
        <nav
          className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 pointer-events-auto"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1 relative py-1 px-1",
                  item.isGreen
                    ? "text-[#16A34A] hover:text-[#15803D] font-extrabold uppercase"
                    : active
                    ? "text-[#0052CC] font-bold"
                    : "text-slate-700 hover:text-[#0052CC]"
                )}
              >
                <span>{item.label}</span>
                {active && !item.isGreen && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#0052CC] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contacto"
            className="bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full text-slate-700 hover:text-[#0052CC] hover:bg-slate-100/80 transition-colors focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Glassmorphic Drawer Menu */}
      {isOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-3xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 z-50">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-sans text-base font-semibold py-2.5 px-4 rounded-2xl transition-colors flex items-center justify-between",
                    item.isGreen
                      ? "text-[#16A34A] bg-emerald-50/80 font-extrabold"
                      : active
                      ? "text-[#0052CC] bg-blue-50/80 font-bold"
                      : "text-slate-700 hover:bg-slate-100/80"
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center shadow-md text-center"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
