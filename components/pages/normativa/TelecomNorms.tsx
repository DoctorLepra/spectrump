"use client";

import React from "react";
import { Scale, CheckCircle2, FileText, Radio } from "lucide-react";
import { TELECOM_REGULATIONS } from "@/lib/data/normativaData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function TelecomNorms() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// REGULACIÓN DE TELECOMUNICACIONES"
            badgeVariant="cyan"
            title="Marco Legal del Sector TIC en Colombia"
            subtitle="Cumplimiento estricto de las directrices expedidas por el Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) y la Comisión de Regulación de Comunicaciones (CRC)."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TELECOM_REGULATIONS.map((item, idx) => (
            <FadeContent key={item.id} delay={0.15 + idx * 0.1} duration={0.6}>
              <SpotlightCard
                className="p-8 sm:p-10 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="cyan" size="sm" dot>
                      {item.badge}
                    </Badge>
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                      <Radio className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#00D4FF] mb-2 font-medium">
                    {item.entity}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#1e1e1e]">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-zinc-400 font-sans">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>{item.docReference}</span>
                  </span>
                  <span className="text-emerald-400">Vigente</span>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
