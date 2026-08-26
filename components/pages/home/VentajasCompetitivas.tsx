"use client";

import React from "react";
import { Zap, ShieldCheck, Globe, TrendingUp } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

const VENTAJAS = [
  {
    id: "ancho-de-banda",
    icon: <Zap className="w-5 h-5 text-[#0052CC]" />,
    topBadge: "100 GBPS MAX",
    tagline: "[ ANCHO DE BANDA 1:1 ]",
    title: "Velocidad & Capacidad Ultrarrápida",
    description:
      "Enlaces simétricos desde 100 Mbps hasta 100 Gbps sin compartición de reuso. Peering directo con los principales IXP de Colombia (NAP Colombia) y puntos de intercambio en EE.UU. para mínima latencia.",
    isGreen: false,
  },
  {
    id: "sla-contractual",
    icon: <ShieldCheck className="w-5 h-5 text-[#0052CC]" />,
    topBadge: "SLA 99.98%",
    tagline: "[ SLA 99.98% CONTRACTUAL ]",
    title: "Confiabilidad & Resiliencia Total",
    description:
      "Arquitectura de anillo de fibra óptica con conmutación automática de rutas BGP4 ante cortes de troncal, respaldada por sistemas solares híbridos sin interrupciones operativas.",
    isGreen: false,
  },
  {
    id: "cobertura-nacional",
    icon: <Globe className="w-5 h-5 text-[#0052CC]" />,
    topBadge: "PRESENCIA NACIONAL",
    tagline: "[ 32 DEPARTAMENTOS ]",
    title: "Cobertura Nacional Estratégica",
    description:
      "Presencia troncal en los principales corredores económicos del país y capacidad probada de despliegue en municipios apartados para proyectos de conectividad social y escuelas rurales.",
    isGreen: false,
  },
  {
    id: "ahorro-rentabilidad",
    icon: <TrendingUp className="w-5 h-5 text-[#16A34A]" />,
    topBadge: "HASTA 70% AHORRO",
    tagline: "[ LEY 1715 / INCENTIVOS ]",
    title: "Ahorro & Rentabilidad Certificada",
    description:
      "Estructuración técnica de proyectos solares con amortización acelerada, exención de aranceles de importación, exclusión de IVA y deducción de renta para optimizar el gasto de inversión CAPEX.",
    isGreen: true,
  },
];

export function VentajasCompetitivas() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 w-full relative overflow-hidden" id="ventajas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052CC] font-sans text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#0052CC] animate-pulse" />
              <span>¿POR QUÉ ELEGIR SPECTRUMP?</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight">
              Ventajas Competitivas que{" "}
              <span className="text-[#0052CC]">Marcan la Diferencia</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Garantías contractuales, robustez de ingeniería y beneficios financieros estructurados para maximizar el retorno de inversión.
            </p>
          </div>
        </FadeContent>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VENTAJAS.map((item, idx) => (
            <FadeContent key={item.id} delay={0.1 * idx} duration={0.6}>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Card Header Row: Icon & Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-xl border ${item.isGreen ? "bg-emerald-50 border-emerald-100" : "bg-blue-50 border-blue-100"}`}>
                      {item.icon}
                    </div>
                    <span className="bg-slate-100 text-slate-700 font-sans text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-200/60 uppercase tracking-wider">
                      {item.topBadge}
                    </span>
                  </div>

                  {/* Bracket Tagline */}
                  <span className={`font-sans text-xs font-bold block mb-2 ${item.isGreen ? "text-[#16A34A]" : "text-[#0052CC]"}`}>
                    {item.tagline}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 font-sans tracking-tight mb-3 group-hover:text-[#0052CC] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
