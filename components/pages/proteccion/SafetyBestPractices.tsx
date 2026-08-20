"use client";

import React from "react";
import { SAFETY_RECOMMENDATIONS } from "@/lib/data/hotlinesData";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function SafetyBestPractices() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// GUÍA PEDAGÓGICA Y PREVENCIÓN"
            badgeVariant="cyan"
            title="Decálogo de Recomendaciones para Familias y Docentes"
            subtitle="Pautas prácticas orientadas a construir entornos digitales seguros, promover la ciudadanía digital responsable y mitigar riesgos en línea."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAFETY_RECOMMENDATIONS.map((item, idx) => (
            <FadeContent key={item.number} delay={0.1 + idx * 0.05} duration={0.5}>
              <SpotlightCard
                className="p-6 sm:p-7 flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/25 flex items-center justify-center text-[#00D4FF] font-mono font-extrabold text-base flex-shrink-0">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-sans text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                  <span>Categoría: {item.category}</span>
                  <span className="text-[#00D4FF]">Prevención Digital</span>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
