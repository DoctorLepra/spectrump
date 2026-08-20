"use client";

import React from "react";
import { Shield, CheckCircle2, FileText, AlertTriangle } from "lucide-react";
import { LEGAL_FRAMEWORK } from "@/lib/data/hotlinesData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function LegalFramework() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// MARCO LEGAL VINCULANTE"
            badgeVariant="cyan"
            title="Mandato Legal de Protección a Menores en Redes Digitales"
            subtitle="En estricto cumplimiento de la legislación colombiana, SPRECTRUMP COLOMBIA implementa medidas obligatorias para prevenir, combatir y denunciar la explotación y el abuso infantil en medios electrónicos."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LEGAL_FRAMEWORK.map((law, idx) => (
            <FadeContent key={law.id} delay={0.1 + idx * 0.08} duration={0.5}>
              <SpotlightCard
                className="p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="cyan" size="sm" dot>
                      {law.badge}
                    </Badge>
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#00D4FF] mb-2 font-medium">
                    {law.entity}
                  </div>

                  <h3 className="text-xl font-bold font-sans text-white mb-4">
                    {law.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    {law.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#1e1e1e]">
                    {law.keyObligations.map((ob, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-400 font-sans">
                          {ob}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                  <span>Régimen Obligatorio ISP</span>
                  <span className="text-emerald-400">Cumplimiento 100%</span>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
