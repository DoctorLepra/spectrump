"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS_LIST } from "@/lib/data/nosotrosData";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function CertificationsGrid() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// RESPALDO INSTITUCIONAL"
            badgeVariant="cyan"
            title="Acreditaciones, Sellos de Calidad y Registro Único"
            subtitle="Cumplimiento estricto de los estándares regulatorios nacionales e internacionales que avalan la solvencia técnica de nuestra infraestructura."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <FadeContent key={cert.id} delay={0.1 + idx * 0.08} duration={0.5}>
              <SpotlightCard
                className="p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00D4FF]/40 transition-all group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/25">
                      {cert.code}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-base font-bold font-sans text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-zinc-500 mb-3">
                    {cert.entity}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e1e1e] flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Certificación Vigente</span>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
