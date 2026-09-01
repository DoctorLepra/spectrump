"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS_LIST } from "@/lib/data/nosotrosData";
import { FadeContent } from "@/components/react-bits/fade-content";

export function CertificationsGrid() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052CC] font-sans text-xs font-bold uppercase tracking-wider">
              RESPALDO INSTITUCIONAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
              Acreditaciones, Sellos de Calidad y Registro Único
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Cumplimiento estricto de los estándares regulatorios nacionales e internacionales que avalan la solvencia técnica de nuestra infraestructura.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <FadeContent key={cert.id} delay={0.1 + idx * 0.08} duration={0.5}>
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0052CC] border border-blue-100 uppercase tracking-wider">
                      {cert.code}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#16A34A] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold font-sans text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-sans font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                    {cert.entity}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-sans font-bold text-[#16A34A]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Certificación Vigente</span>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
