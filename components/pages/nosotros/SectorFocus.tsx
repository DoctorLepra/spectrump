"use client";

import React from "react";
import { Building2, Landmark, CheckCircle2 } from "lucide-react";
import {
  PUBLIC_SECTOR_POINTS,
  ENTERPRISE_SECTOR_POINTS,
} from "@/lib/data/nosotrosData";
import { FadeContent } from "@/components/react-bits/fade-content";

export function SectorFocus() {
  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052CC] font-sans text-xs font-bold uppercase tracking-wider">
              CAPACIDAD Y ESPECIALIZACIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
              Enfoque Integral por Sectores de Mercado
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Diseñamos propuestas técnicas y modelos de negocio adaptados a las particularidades jurídicas y operativas de cada segmento.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Public Sector Column */}
          <FadeContent delay={0.15} duration={0.6}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0052CC] font-sans text-xs font-bold uppercase tracking-wider">
                    SECTOR GUBERNAMENTAL
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052CC]">
                    <Landmark className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold font-sans text-slate-900 mb-3">
                  Sector Público & Educativo
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed mb-8">
                  Despliegue e integración de redes de alta disponibilidad y soluciones de energía limpia adaptadas a las necesidades operativas de instituciones gubernamentales y académicas.
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  {PUBLIC_SECTOR_POINTS.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold font-sans text-slate-900">
                          {pt.title}
                        </h4>
                        <p className="text-xs text-slate-600 font-sans mt-0.5 leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Enterprise Sector Column */}
          <FadeContent delay={0.25} duration={0.6}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#16A34A] font-sans text-xs font-bold uppercase tracking-wider">
                    SECTOR PRIVADO Y CORPORATIVO
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#16A34A]">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold font-sans text-slate-900 mb-3">
                  Sector Empresarial e Industrial
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed mb-8">
                  Conectividad dedicada 1:1, seguridad electrónica avanzada y parques solares corporativos diseñados para maximizar la continuidad operativa y la eficiencia CAPEX.
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  {ENTERPRISE_SECTOR_POINTS.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold font-sans text-slate-900">
                          {pt.title}
                        </h4>
                        <p className="text-xs text-slate-600 font-sans mt-0.5 leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
