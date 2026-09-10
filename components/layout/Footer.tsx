import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#061325] text-slate-300 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Logo & Short Intro */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative h-[60px] sm:h-[72px] w-[240px] sm:w-[300px]">
                <Image
                  src="/logo.png"
                  alt="SPECTRUMP COLOMBIA SAS"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  priority
                />
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Soluciones integrales de ingeniería, conectividad, energía solar y tecnología para proyectos que generan impacto y construyen un futuro más sostenible en Colombia.
            </p>
          </div>

          {/* Column 2: Empresa */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros#normativa-mapa" className="hover:text-white transition-colors">
                  Normativa
                </Link>
              </li>
              <li>
                <Link href="/nosotros#proteccion-infantil" className="hover:text-white transition-colors">
                  Protección infantil
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Servicios */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Conectividad
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Energía Solar
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Ingeniería Aplicada
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ECONECTA (Highlighted Green) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-sm font-extrabold text-[#16A34A] uppercase tracking-wider">
              ECONECTA
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>
                <Link href="/#econecta" className="hover:text-white transition-colors">
                  Información
                </Link>
              </li>
              <li>
                <Link href="/#econecta" className="hover:text-white transition-colors">
                  Modelos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contacto */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>
                <a href="mailto:info@spectrump.com" className="hover:text-white transition-colors">
                  info@spectrump.com
                </a>
              </li>
              <li>
                <a href="tel:+573101234567" className="hover:text-white transition-colors">
                  +57 310 123 4567
                </a>
              </li>
              <li className="text-slate-400">Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <div>
            © {new Date().getFullYear()} SPECTRUMP COLOMBIA SAS. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn de SPECTRUMP COLOMBIA SAS"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Facebook de SPECTRUMP COLOMBIA SAS"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram de SPECTRUMP COLOMBIA SAS"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
