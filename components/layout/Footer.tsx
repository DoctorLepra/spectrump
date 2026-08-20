import * as React from "react";
import Link from "next/link";
import {
  Radio,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
  Linkedin,
  Youtube,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/shared/Badge";

export function Footer() {
  return (
    <footer className="w-full bg-black text-zinc-400 relative overflow-hidden border-t border-[#1e1e1e]">
      {/* Cyan Gradient Glowing Separator Line */}
      <div
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_15px_rgba(0,212,255,0.5)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Description (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded-lg"
              aria-label="SPRECTRUMP COLOMBIA - Inicio"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#00D4FF] p-[1px] shadow-[0_0_12px_rgba(0,212,255,0.3)]">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <Radio className="w-4 h-4 text-[#00D4FF]" />
                </div>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-sans font-extrabold tracking-tight text-white text-lg uppercase">
                  SPRECTRUMP
                </span>
                <span className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase font-semibold">
                  COLOMBIA
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-sm">
              Infraestructura de telecomunicaciones por licitación estatal y matrices de generación solar fotovoltaica para el progreso del sector corporativo y gubernamental de Colombia.
            </p>

            {/* Regulatory Accreditation Badges */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <Badge variant="cyan" size="sm" dot>
                  MinTIC REGISTRO TIC N° 9600xxxx
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Vigilado MinTIC / CRC / SIC</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#222222] bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all"
                aria-label="LinkedIn de SPRECTRUMP COLOMBIA"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#222222] bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all font-mono text-xs font-bold"
                aria-label="Cuenta X de SPRECTRUMP COLOMBIA"
              >
                𝕏
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#222222] bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all"
                aria-label="Canal YouTube de SPRECTRUMP COLOMBIA"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links Grid (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="text-[#00D4FF]">//</span> Navegación
            </h3>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-[#00D4FF] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-zinc-400 hover:text-[#00D4FF] transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/normativa"
                  className="text-zinc-400 hover:text-[#00D4FF] transition-colors"
                >
                  Normativa
                </Link>
              </li>
              <li>
                <Link
                  href="/proteccion-infantil"
                  className="text-zinc-400 hover:text-[#00D4FF] transition-colors"
                >
                  Protección Infantil
                </Link>
              </li>
              <li>
                <Link
                  href="/equipo"
                  className="text-zinc-400 hover:text-[#00D4FF] transition-colors"
                >
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-zinc-400 hover:text-[#00D4FF] transition-colors"
                >
                  Contacto & PQR
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Soluciones Especializadas (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="text-[#00D4FF]">//</span> Soluciones
            </h3>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link
                  href="/contacto?servicio=internet-licitacion"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-[#0066FF] group-hover:text-[#00D4FF] transition-colors">›</span>
                  Internet Dedicado Simétrico
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto?servicio=licitaciones"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-[#0066FF] group-hover:text-[#00D4FF] transition-colors">›</span>
                  Licitaciones SECOP II
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto?servicio=energia-solar"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-[#FB8500] group-hover:text-[#FFB703] transition-colors">›</span>
                  Energía Solar Fotovoltaica
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto?servicio=bess"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-[#FB8500] group-hover:text-[#FFB703] transition-colors">›</span>
                  Sistemas de Respaldo BESS
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto?servicio=noc"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-[#00D4FF]">›</span>
                  Monitoreo NOC 24/7/365
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Metadata in Monospace (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="text-[#00D4FF]">//</span> Contacto & Sede
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  Carrera 7 # 71-21, Torre B, Piso 12, Bogotá D.C., Colombia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                <span className="text-zinc-300">PBX: +57 (601) 745-8900</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
                <span className="text-zinc-300">Línea Nacional: 01 8000 910 247</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                <a
                  href="mailto:contacto@spectrump.co"
                  className="text-zinc-300 hover:text-[#00D4FF] transition-colors"
                >
                  contacto@spectrump.co
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-zinc-500">
                <Clock className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                <span>L-V: 08:00 - 18:00 COT | NOC: 24/7/365</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Monospace Tags */}
        <div className="py-6 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-zinc-400">[ LEY 679/2001 ]</span>
            <span className="text-zinc-400">[ LEY 1341/2009 ]</span>
            <span className="text-zinc-400">[ LEY 1715/2014 ]</span>
            <span className="text-zinc-400">[ LEY 1978/2019 ]</span>
            <span className="text-zinc-400">[ HABEAS DATA LEY 1581/2012 ]</span>
          </div>

          <div className="text-zinc-500">
            <span>Régimen Integral de Protección al Usuario CRC</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & NIT */}
        <div className="pt-6 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>
            © 2026 SPRECTRUMP COLOMBIA S.A.S. E.S.P. NIT 901.458.712-4. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link
              href="/normativa"
              className="hover:text-zinc-400 transition-colors"
            >
              Marco Legal
            </Link>
            <span>•</span>
            <Link
              href="/proteccion-infantil"
              className="hover:text-zinc-400 transition-colors"
            >
              Protección Infantil
            </Link>
            <span>•</span>
            <Link
              href="/contacto"
              className="hover:text-zinc-400 transition-colors"
            >
              PQR & Atención
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
