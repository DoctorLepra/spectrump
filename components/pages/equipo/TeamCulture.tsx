"use client";

import React from "react";
import { ShieldCheck, HardHat, CheckCircle2, Award } from "lucide-react";
import { CULTURE_HIGHLIGHTS } from "@/lib/data/teamData";
import { Badge } from "@/components/shared/Badge";
import { FadeContent } from "@/components/react-bits/fade-content";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";

export function TeamCulture() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SpotlightCard className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0066FF]/10 via-[#00D4FF]/5 to-transparent border border-[#00D4FF]/30 relative overflow-hidden">
            <div className="max-w-3xl">
              <Badge variant="cyan" size="sm" dot className="mb-4">
                // SEGURIDAD INDUSTRIAL Y MATRÍCULAS
              </Badge>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-white mb-4">
                {CULTURE_HIGHLIGHTS.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed mb-8">
                {CULTURE_HIGHLIGHTS.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CULTURE_HIGHLIGHTS.badges.map((badgeText, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111]/80 border border-[#222222] text-xs font-mono text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                    <span>{badgeText}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
}
