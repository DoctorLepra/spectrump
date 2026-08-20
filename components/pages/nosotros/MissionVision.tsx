"use client";

import React from "react";
import { Target, Compass, FileCheck2, Award, Leaf, Headphones } from "lucide-react";
import {
  COMPANY_MISSION,
  COMPANY_VISION,
  CORPORATE_VALUES,
} from "@/lib/data/nosotrosData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

const valueIcons = {
  FileCheck2: FileCheck2,
  Award: Award,
  Leaf: Leaf,
  Headphones: Headphones,
};

export function MissionVision() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Misión Card */}
          <FadeContent delay={0.1} duration={0.6}>
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="cyan" size="sm" dot>
                    {COMPANY_MISSION.tag}
                  </Badge>
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                    <Target className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-4">
                  Nuestra Misión
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  {COMPANY_MISSION.content}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>Propósito Fundacional</span>
                <span className="text-[#00D4FF]">Impacto Nacional</span>
              </div>
            </SpotlightCard>
          </FadeContent>

          {/* Visión Card */}
          <FadeContent delay={0.2} duration={0.6}>
            <SpotlightCard
              spotlightColor="rgba(255, 183, 3, 0.15)"
              className="p-8 sm:p-10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="solar" size="sm" dot>
                    {COMPANY_VISION.tag}
                  </Badge>
                  <div className="w-12 h-12 rounded-xl bg-[#FB8500]/10 border border-[#FFB703]/30 flex items-center justify-center text-[#FFB703]">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-4">
                  Nuestra Visión
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  {COMPANY_VISION.content}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>Meta Estratégica 2030</span>
                <span className="text-[#FFB703]">Transición Energética</span>
              </div>
            </SpotlightCard>
          </FadeContent>
        </div>

        {/* Corporate Values Section */}
        <div>
          <FadeContent delay={0.1} duration={0.6}>
            <SectionHeader
              badge="// PILARES CORPORATIVOS"
              badgeVariant="cyan"
              title="Valores que Guían Nuestra Operación Diaria"
              subtitle="Principios éticos, técnicos y ambientales que rigen nuestras relaciones contractuales con el Estado colombiano y el sector privado."
              align="center"
            />
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORPORATE_VALUES.map((val, idx) => {
              const IconComp =
                valueIcons[val.iconName as keyof typeof valueIcons] || Award;
              return (
                <FadeContent key={val.id} delay={0.1 + idx * 0.08} duration={0.5}>
                  <SpotlightCard
                    className="p-6 sm:p-7 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xl font-extrabold text-[#00D4FF]">
                          {val.number}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300">
                          <IconComp className="w-4 h-4 text-[#00D4FF]" />
                        </div>
                      </div>

                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-2">
                        {val.tag}
                      </span>

                      <h3 className="text-base font-bold font-sans text-white mb-3">
                        {val.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </FadeContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
