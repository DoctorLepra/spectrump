"use client";

import React from "react";
import {
  ShieldCheck,
  Users,
  BookOpen,
  Radio,
  FileText,
  Gavel,
  Network,
  ClipboardList,
  Scale,
  Landmark,
  Receipt,
  MapPin,
  BarChart3,
  Gauge,
  Sliders,
  FileCode,
  FileCheck,
  Baby,
} from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function NormativaConceptualMap({ data, items }: { data?: any, items?: any[] }) {
  const badgeText = data?.badge_text || "MARCO DE COMPLIANCE & REGULACIÓN";
  const title = data?.title || "Protección al Usuario y Normativa TIC";
  const subtitle = data?.subtitle || "Consulta completa de los 21 ejes normativos, régimen de protección al usuario y decretos de regulación del sector en Colombia.";

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden" id="normativa-mapa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052CC] font-sans text-xs font-bold uppercase tracking-wider inline-block">
              {badgeText}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeContent>

        {/* MAIN BENTO CONTAINER FRAME (Figma Bento Grid Style) */}
        <FadeContent delay={0.2} duration={0.8}>
          <div className="bg-slate-900 p-5 sm:p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl space-y-6">
            
            {/* Top Bento Stats Header Bar */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-[#38BDF8]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold font-sans text-base sm:text-lg">
                    Marco Regulatorio de Telecomunicaciones
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    SPECTRUMP COLOMBIA S.A.S. // Cumplimiento 100% de la Normativa Nacional
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                  21 ÍTEMS NORMADOS
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs">
                  CRC & MinTIC
                </span>
              </div>
            </div>

            {/* BENTO GRID: 3 EQUAL/ASYMMETRIC COLUMNS WITH ALL 21 ITEMS EXPLICITLY LISTED */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* BENTO COLUMN 1: Protección al Usuario (7 ÍTEMS COMPLETOS) */}
              <div className="lg:col-span-4 bg-emerald-950/40 border border-emerald-800/50 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:border-emerald-700/70 transition-all">
                <div>
                  {/* Column Badge */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-emerald-800/40">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <Users className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold font-sans text-white text-base">
                        Protección al Usuario
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      7 ÍTEMS
                    </span>
                  </div>

                  {/* All 7 Items Listed explicitly */}
                  <div className="space-y-2.5 font-sans">
                    {/* Item 1 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <Baby className="w-4 h-4" />
                      </div>
                      <span>Protección Infantil</span>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span>Contrato de Prestación de Servicios</span>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <Gavel className="w-4 h-4" />
                      </div>
                      <span>Resolución 5111 de 2017</span>
                    </div>

                    {/* Item 4 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <Network className="w-4 h-4" />
                      </div>
                      <span>Mapa Redes de Fibra Óptica</span>
                    </div>

                    {/* Item 5 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <ClipboardList className="w-4 h-4" />
                      </div>
                      <span>Presentar una PQR</span>
                    </div>

                    {/* Item 6 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <Scale className="w-4 h-4" />
                      </div>
                      <span>ley 1480 de 2011</span>
                    </div>

                    {/* Item 7 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-emerald-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <span>ley 679 de 2001</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BENTO COLUMN 2: Normativa (6 ÍTEMS COMPLETOS) */}
              <div className="lg:col-span-4 bg-blue-950/40 border border-blue-800/50 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:border-blue-700/70 transition-all">
                <div>
                  {/* Column Badge */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-blue-800/40">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold font-sans text-white text-base">
                        Normativa
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      6 ÍTEMS
                    </span>
                  </div>

                  {/* All 6 Items Listed explicitly */}
                  <div className="space-y-2.5 font-sans">
                    {/* Item 1 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-blue-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <span>Conoce tu factura</span>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-blue-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span>Mapa de Cobertura</span>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-blue-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span>Factores que limitan la Navegación</span>
                    </div>

                    {/* Item 4 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-blue-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <Gauge className="w-4 h-4" />
                      </div>
                      <span>Indicadores de Calidad de Internet</span>
                    </div>

                    {/* Item 5 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-blue-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <span>Prácticas de Gestión de Tráfico</span>
                    </div>

                    {/* Item 6 */}
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-900/60 text-xs font-bold text-slate-100 flex items-center gap-3 hover:border-blue-500/50 transition-all">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span>Mecanismos de Filtrado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BENTO COLUMN 3: Regulación Sector TIC (8 ÍTEMS COMPLETOS) */}
              <div className="lg:col-span-4 bg-purple-950/40 border border-purple-800/50 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:border-purple-700/70 transition-all">
                <div>
                  {/* Column Badge */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-purple-800/40">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        <Radio className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold font-sans text-white text-base">
                        Regulación Sector TIC
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      8 ÍTEMS
                    </span>
                  </div>

                  {/* All 8 Items Listed explicitly */}
                  <div className="space-y-2 font-sans">
                    {/* Item 1 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span className="truncate">Decreto 90 del 18 de Enero de 2018</span>
                      <FileCode className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 2 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5299 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 3 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5300 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 4 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5321 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 5 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5322 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 6 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5337 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 7 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5344 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>

                    {/* Item 8 */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-purple-900/60 text-xs font-bold text-slate-100 flex items-center justify-between hover:border-purple-500/50 transition-all">
                      <span>Resolución CRC 5397 de 2018</span>
                      <FileCheck className="w-4 h-4 text-purple-400 flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </FadeContent>
      </div>
    </section>
  );
}
