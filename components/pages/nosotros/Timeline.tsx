"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { TIMELINE_MILESTONES } from "@/lib/data/nosotrosData";
import { FadeContent } from "@/components/react-bits/fade-content";

export function Timeline() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052CC] font-sans text-xs font-bold uppercase tracking-wider">
              EVOLUCIÓN HISTÓRICA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
              Trayectoria y Madurez en el Mercado Colombiano
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Una década de crecimiento continuo, innovación en redes de transporte óptico e incursión en energías renovables.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <FadeContent key={item.year} delay={0.1 + idx * 0.08} duration={0.5}>
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-3xl font-extrabold text-[#0052CC]">
                      {item.year}
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#0052CC] uppercase px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  <div className="text-xs font-sans font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    {item.period}
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold font-sans text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-sans text-xs font-bold text-[#0052CC]">
                  <span>{item.highlightMetric}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
