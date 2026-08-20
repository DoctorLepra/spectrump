"use client";

import React from "react";
import { Lock, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";
import { HABEAS_DATA_POLICY } from "@/lib/data/normativaData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function HabeasDataNotice() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Habeas Data Card */}
          <FadeContent delay={0.1} duration={0.6}>
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="cyan" size="sm" dot>
                    PROTECCIÓN DE DATOS
                  </Badge>
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-4">
                  {HABEAS_DATA_POLICY.title}
                </h3>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                  {HABEAS_DATA_POLICY.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#1e1e1e]">
                  {HABEAS_DATA_POLICY.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-400 font-sans">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>Canal: habeasdata@spectrump.co</span>
                <span className="text-[#00D4FF]">Decreto 1377/2013</span>
              </div>
            </SpotlightCard>
          </FadeContent>

          {/* Neutralidad de Red Card */}
          <FadeContent delay={0.2} duration={0.6}>
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="cyan" size="sm" dot>
                    NEUTRALIDAD EN LA RED
                  </Badge>
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                    <Globe2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-4">
                  Compromiso Irrestricto con la Neutralidad de Red (CRC)
                </h3>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                  SPRECTRUMP COLOMBIA garantiza a todos los usuarios del sector estatal y corporativo el principio de neutralidad de internet de conformidad con la Resolución CRC 3502 de 2011 y la Ley 1450 de 2011.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#1e1e1e]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-400 font-sans">
                      No bloqueamos, degradamos ni ralentizamos arbitrariamente ningún tráfico legal de internet.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-400 font-sans">
                      Tratamiento equitativo de protocolos de enrutamiento y puertos TCP/UDP sin acuerdos de priorización discriminatorios.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-400 font-sans">
                      Transparencia absoluta en la gestión de tráfico ante situaciones excepcionales de congestión o contingencia de enlace.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>Resolución CRC 3502</span>
                <span className="text-emerald-400">100% Neutralidad</span>
              </div>
            </SpotlightCard>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
