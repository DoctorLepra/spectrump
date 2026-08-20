"use client";

import React from "react";
import { SunMedium, CheckCircle2, FileText, Zap } from "lucide-react";
import { SOLAR_REGULATIONS } from "@/lib/data/normativaData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function EnergyNorms() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// MARCO DE TRANSICIÓN ENERGÉTICA"
            badgeVariant="solar"
            title="Regulación de Energía Solar Fotovoltaica y RETIE"
            subtitle="Marco legal para la autogeneración a pequeña escala, interconexión a la red CREG y beneficios tributarios de la Ley 1715."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLAR_REGULATIONS.map((item, idx) => (
            <FadeContent key={item.id} delay={0.1 + idx * 0.08} duration={0.5}>
              <SpotlightCard
                spotlightColor="rgba(255, 183, 3, 0.15)"
                className="p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="solar" size="sm" dot>
                      {item.badge}
                    </Badge>
                    <div className="w-10 h-10 rounded-lg bg-[#FB8500]/10 border border-[#FFB703]/30 flex items-center justify-center text-[#FFB703]">
                      <SunMedium className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#FFB703] mb-2 font-medium">
                    {item.entity}
                  </div>

                  <h3 className="text-xl font-bold font-sans text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#1e1e1e]">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FFB703] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-400 font-sans">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#FFB703]" />
                    <span>{item.docReference}</span>
                  </span>
                  <span className="text-emerald-400">Certificado</span>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
