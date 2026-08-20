"use client";

import React from "react";
import { Mail, Phone, Building2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { PQR_INFO } from "@/lib/data/normativaData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

const channelIcons = {
  Mail: Mail,
  Phone: Phone,
  Building2: Building2,
};

export function PQRBanner() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-[#1e1e1e]" id="pqr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// ATENCIÓN DE PETICIONES Y RECURSOS"
            badgeVariant="cyan"
            title="Sistema Integral de Radicación PQR"
            subtitle={PQR_INFO.description}
            align="center"
          />
        </FadeContent>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PQR_INFO.channels.map((channel, idx) => {
            const IconComponent =
              channelIcons[channel.iconName as keyof typeof channelIcons] || Mail;
            return (
              <FadeContent key={idx} delay={0.1 + idx * 0.08} duration={0.5}>
                <SpotlightCard
                  className="p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00D4FF]/40 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/25 flex items-center justify-center text-[#00D4FF] mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold font-sans text-white mb-1">
                      {channel.type}
                    </h3>

                    <div className="font-mono text-xs text-[#00D4FF] font-semibold mb-3">
                      {channel.detail}
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-4">
                      {channel.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1e1e1e] flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>{channel.timing}</span>
                  </div>
                </SpotlightCard>
              </FadeContent>
            );
          })}
        </div>

        {/* SLA Banner for PQR */}
        <FadeContent delay={0.3} duration={0.6}>
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#0066FF]/10 via-[#00D4FF]/10 to-transparent border border-[#00D4FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold font-sans text-white">
                  Término Legal de Respuesta: {PQR_INFO.responseTerm}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans">
                  Conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA) y la Circular Única de la SIC.
                </p>
              </div>
            </div>

            <Button
              href="/contacto?asunto=pqr"
              variant="outline"
              size="md"
              className="font-mono text-xs whitespace-nowrap flex-shrink-0"
              rightIcon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
            >
              Radicar PQR Online
            </Button>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
