"use client";

import React from "react";
import { Filter, Users2, ShieldAlert, CheckCircle2 } from "lucide-react";
import { TECHNICAL_MEASURES } from "@/lib/data/hotlinesData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

const measureIcons = {
  "dns-filtering": Filter,
  "law-enforcement": Users2,
  "parental-controls": ShieldAlert,
};

export function SecurityMeasures() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// PROTOCOLOS Y ACCIONES TÉCNICAS"
            badgeVariant="cyan"
            title="Mecanismos Activos de Mitigación y Bloqueo"
            subtitle="Implementamos filtros automatizados en nuestros servidores DNS y mantenemos coordinación directa con las autoridades judiciales."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNICAL_MEASURES.map((item, idx) => {
            const IconComp =
              measureIcons[item.id as keyof typeof measureIcons] || Filter;
            return (
              <FadeContent key={item.id} delay={0.1 + idx * 0.08} duration={0.5}>
                <SpotlightCard
                  className="p-8 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/25 uppercase">
                        {item.tag}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-sans text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1e1e1e] flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.detail}</span>
                  </div>
                </SpotlightCard>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
