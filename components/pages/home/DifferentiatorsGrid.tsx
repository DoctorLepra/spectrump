"use client";

import React from "react";
import { Zap, ShieldCheck, Globe, TrendingUp } from "lucide-react";
import { DIFFERENTIATORS } from "@/lib/data/servicesData";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

const iconMap = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  TrendingUp: TrendingUp,
};

export function DifferentiatorsGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="¿POR QUÉ ELEGIR SPRECTRUMP?"
            badgeVariant="cyan"
            title="Ventajas Competitivas que Marcan la Diferencia"
            subtitle="Garantías contractuales, robustez de ingeniería y beneficios financieros estructurados para maximizar el retorno de inversión."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff, idx) => {
            const IconComponent = iconMap[diff.iconName as keyof typeof iconMap] || Zap;
            return (
              <FadeContent key={diff.id} delay={0.1 + idx * 0.08} duration={0.5}>
                <SpotlightCard
                  className="p-6 sm:p-7 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/25 flex items-center justify-center text-[#00D4FF]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-400">
                        {diff.badge}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-[#00D4FF] font-semibold tracking-wider uppercase block mb-2">
                      {diff.tag}
                    </span>

                    <h3 className="text-lg font-bold font-sans text-white mb-3">
                      {diff.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {diff.description}
                    </p>
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
