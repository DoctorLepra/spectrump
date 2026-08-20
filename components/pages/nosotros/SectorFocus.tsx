"use client";

import React from "react";
import { Building2, Landmark, CheckCircle2 } from "lucide-react";
import {
  PUBLIC_SECTOR_POINTS,
  ENTERPRISE_SECTOR_POINTS,
} from "@/lib/data/nosotrosData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function SectorFocus() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// CAPACIDAD Y ESPECIALIZACIÓN"
            badgeVariant="cyan"
            title="Enfoque Integral por Sectores de Mercado"
            subtitle="Diseñamos propuestas técnicas y modelos de negocio adaptados a las particularidades jurídicas y operativas de cada segmento."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Public Sector Column */}
          <FadeContent delay={0.15} duration={0.6}>
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="cyan" size="sm" dot>
                    SECTOR GUBERNAMENTAL
                  </Badge>
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                    <Landmark className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-3">
                  Sector Público & Educativo
                </h3>
                <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-8">
                  Despliegue e integración de redes de alta disponibilidad y soluciones de energía limpia adaptadas a las necesidades operativas de instituciones gubernamentales y académicas.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#1e1e1e]">
                  {PUBLIC_SECTOR_POINTS.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold font-sans text-zinc-200">
                          {pt.title}
                        </h4>
                        <p className="text-xs text-zinc-400 font-sans mt-0.5 leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>Habilitación Registro TIC</span>
                <span className="text-[#00D4FF]">Estándares MinTIC</span>
              </div>
            </SpotlightCard>
          </FadeContent>

          {/* Enterprise Sector Column */}
          <FadeContent delay={0.25} duration={0.6}>
            <SpotlightCard
              spotlightColor="rgba(255, 183, 3, 0.15)"
              className="p-8 sm:p-10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="solar" size="sm" dot>
                    SECTOR EMPRESARIAL
                  </Badge>
                  <div className="w-12 h-12 rounded-xl bg-[#FB8500]/10 border border-[#FFB703]/30 flex items-center justify-center text-[#FFB703]">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-3">
                  Corporaciones & Parques Industriales
                </h3>
                <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-8">
                  Soluciones de ultra-alta velocidad simétrica para Data Centers, sedes corporativas y matrices de autogeneración solar con respaldo de almacenamiento de energía BESS.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#1e1e1e]">
                  {ENTERPRISE_SECTOR_POINTS.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB703] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold font-sans text-zinc-200">
                          {pt.title}
                        </h4>
                        <p className="text-xs text-zinc-400 font-sans mt-0.5 leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>Eficiencia CAPEX / OPEX</span>
                <span className="text-[#FFB703]">Incentivos Ley 1715</span>
              </div>
            </SpotlightCard>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
