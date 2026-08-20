"use client";

import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { TIMELINE_MILESTONES } from "@/lib/data/nosotrosData";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function Timeline() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// EVOLUCIÓN HISTÓRICA"
            badgeVariant="cyan"
            title="Trayectoria y Madurez en el Mercado Colombiano"
            subtitle="Una década de crecimiento continuo, innovación en redes de transporte óptico e incursión en energías renovables."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <FadeContent key={item.year} delay={0.1 + idx * 0.08} duration={0.5}>
              <SpotlightCard
                className="p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00D4FF]/40 transition-all flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-[#00D4FF]">
                      {item.year}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase px-2 py-0.5 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/20">
                      {item.tag}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-zinc-500 mb-2">
                    {item.period}
                  </div>

                  <h3 className="text-base font-bold font-sans text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-[#00D4FF]">
                  <span>{item.highlightMetric}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
