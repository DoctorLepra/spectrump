"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight, Sun, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isGreen?: boolean;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos", hasDropdown: true },
  { label: "Econecta", href: "/econecta", isGreen: true },
];

const PRODUCT_CARDS = [
  {
    title: "01. Generación & Conversión",
    route: "/productos?cat=paneles-solares",
    bgColor: "#061325",
    textColor: "#FFFFFF",
    icon: Sun,
    links: [
      { label: "Paneles solares", href: "/productos?cat=paneles-solares" },
      { label: "Inversores", href: "/productos?cat=inversores" },
      { label: "Controladores", href: "/productos?cat=controladores" },
    ],
  },
  {
    title: "02. Almacenamiento & Montaje",
    route: "/productos?cat=baterias",
    bgColor: "#091E42",
    textColor: "#FFFFFF",
    icon: Zap,
    links: [
      { label: "Baterías", href: "/productos?cat=baterias" },
      { label: "Estructuras", href: "/productos?cat=estructuras" },
    ],
  },
  {
    title: "03. Protección & Portátiles",
    route: "/productos?cat=proteccion-y-accesorios",
    bgColor: "#0F172A",
    textColor: "#FFFFFF",
    icon: ShieldCheck,
    links: [
      { label: "Protección y accesorios", href: "/productos?cat=proteccion-y-accesorios" },
      { label: "Equipos portátiles", href: "/productos?cat=equipos-portatiles" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isProductsOpen, setIsProductsOpen] = React.useState<boolean>(false);

  const headerRef = React.useRef<HTMLElement | null>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Close mobile drawer and dropdown on route change
  React.useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  // Handle scroll detection for subtle shadow elevation
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  const toggleProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsProductsOpen((prev) => !prev);
  };

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
    <header
      ref={headerRef}
      className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none"
    >
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

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 pointer-events-auto"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={toggleProducts}
                    className={cn(
                      "font-sans text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1 relative py-1 px-1 focus:outline-none cursor-pointer",
                      isProductsOpen || active
                        ? "text-[#0052CC] font-bold"
                        : "text-slate-700 hover:text-[#0052CC]"
                    )}
                    aria-expanded={isProductsOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        isProductsOpen && "rotate-180 text-[#0052CC]"
                      )}
                    />
                    {(active || isProductsOpen) && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#0052CC] rounded-full" />
                    )}
                  </button>
                </div>
              );
            }

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
            href="/contacto"
            className={cn(
              "font-sans text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95",
              isActive("/contacto")
                ? "bg-[#0040A8] text-white ring-2 ring-blue-400/50"
                : "bg-[#0052CC] hover:bg-[#0040A8] text-white"
            )}
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

      {/* Desktop Floating Submenu Panel for 'Productos' */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "hidden lg:block pointer-events-auto mt-3 transition-all duration-300 ease-out origin-top",
          isProductsOpen
            ? "opacity-100 translate-y-0 scale-100 visible"
            : "opacity-0 -translate-y-3 scale-98 invisible pointer-events-none"
        )}
      >
        <div className="bg-slate-950/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-5 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {PRODUCT_CARDS.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-4 flex flex-col justify-between border border-white/10 shadow-lg group hover:border-amber-400/50 transition-all"
                  style={{ backgroundColor: card.bgColor, color: card.textColor }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Link
                        href={card.route}
                        onClick={() => setIsProductsOpen(false)}
                        className="font-extrabold text-sm font-sans tracking-tight hover:text-amber-400 transition-colors flex items-center gap-1 group/title"
                      >
                        <span>{card.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
                      </Link>
                      <CardIcon className="w-4 h-4 text-amber-400 opacity-80" />
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      {card.links.map((lnk, lIdx) => (
                        <Link
                          key={lIdx}
                          href={lnk.href}
                          onClick={() => setIsProductsOpen(false)}
                          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 transition-colors group/lnk font-sans"
                        >
                          <ArrowUpRight className="w-3 h-3 text-amber-400 opacity-70 group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform" />
                          <span>{lnk.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Glassmorphic Drawer Menu */}
      {isOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-3xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 z-50 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={cn(
                        "font-sans text-base font-semibold py-2.5 px-4 rounded-2xl transition-colors flex items-center justify-between w-full text-left cursor-pointer",
                        active || isProductsOpen
                          ? "text-[#0052CC] bg-blue-50/80 font-bold"
                          : "text-slate-700 hover:bg-slate-100/80"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isProductsOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {isProductsOpen && (
                      <div className="pl-4 py-2 space-y-3 border-l-2 border-blue-500 ml-4">
                        {PRODUCT_CARDS.map((pCard, pIdx) => (
                          <div key={pIdx} className="space-y-1.5">
                            <Link
                              href={pCard.route}
                              onClick={() => {
                                setIsOpen(false);
                                setIsProductsOpen(false);
                              }}
                              className="text-xs font-bold text-slate-900 hover:text-[#0052CC] block py-0.5"
                            >
                              {pCard.title} →
                            </Link>
                            {pCard.links.map((pLnk, plIdx) => (
                              <Link
                                key={plIdx}
                                href={pLnk.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsProductsOpen(false);
                                }}
                                className="text-xs text-slate-600 hover:text-[#0052CC] block py-0.5 pl-2"
                              >
                                • {pLnk.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

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
              href="/contacto"
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
