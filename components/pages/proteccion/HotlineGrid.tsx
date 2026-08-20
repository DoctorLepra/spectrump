"use client";

import React from "react";
import { ShieldCheck, Phone, Globe, ExternalLink, Siren, HeartHandshake, Building2 } from "lucide-react";
import { OFFICIAL_HOTLINES } from "@/lib/data/hotlinesData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

const hotlineIcons = {
  police: Siren,
  teprotejo: HeartHandshake,
  icbf: ShieldCheck,
  fiscalia: Building2,
};

export function HotlineGrid() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]" id="canales-denuncia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// LÍNEAS OFICIALES DE REPORTE Y DENUNCIA"
            badgeVariant="cyan"
            title="Canales de Atención Ciudadana Inmediata en Colombia"
            subtitle="Si conoce o sospecha de situaciones que vulneren los derechos de niños, niñas y adolescentes en medios digitales, acuda de inmediato a estos canales oficiales del Estado colombiano."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICIAL_HOTLINES.map((hotline, idx) => {
            const IconComponent =
              hotlineIcons[hotline.iconType as keyof typeof hotlineIcons] || Siren;
            return (
              <FadeContent key={hotline.id} delay={0.15 + idx * 0.1} duration={0.6}>
                <SpotlightCard
                  className="p-8 sm:p-10 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="cyan" size="sm" dot>
                        {hotline.badge}
                      </Badge>
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="font-mono text-xs text-[#00D4FF] mb-1 font-semibold">
                      {hotline.entity}
                    </div>

                    <h3 className="text-2xl font-bold font-sans text-white mb-3">
                      {hotline.name}
                    </h3>

                    <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                      {hotline.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#1e1e1e]">
                      {hotline.phone && (
                        <div className="flex items-center gap-2 font-mono text-xs text-white bg-white/[0.04] p-3 rounded-lg border border-white/10">
                          <Phone className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                          <span className="font-bold">{hotline.phone}</span>
                        </div>
                      )}

                      {hotline.channelUrl && (
                        <a
                          href={hotline.channelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between font-mono text-xs text-zinc-300 hover:text-[#00D4FF] bg-white/[0.02] p-3 rounded-lg border border-white/5 hover:border-[#00D4FF]/30 transition-all group"
                        >
                          <span className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-[#00D4FF]" />
                            <span>{hotline.channelDisplayUrl}</span>
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}

                      {hotline.socialHandle && (
                        <div className="text-xs font-mono text-zinc-400 px-3 py-1.5">
                          Canal oficial: <span className="text-[#00D4FF]">{hotline.socialHandle}</span>
                        </div>
                      )}

                      {hotline.appNotice && (
                        <div className="text-xs font-mono text-zinc-400 px-3 py-1.5">
                          App Móvil: <span className="text-zinc-300">{hotline.appNotice}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                    <span>Atención 24 Horas</span>
                    <span className="text-emerald-400 font-semibold">Línea Gratuita y Confidencial</span>
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
