"use client";

import React from "react";
import Link from "next/link";
import { Radio, SunMedium, ArrowRight, CheckCircle2 } from "lucide-react";
import { MAIN_SERVICES } from "@/lib/data/servicesData";
import { Badge } from "@/components/shared/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function ServicesSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-16 text-left border-b border-zinc-900 pb-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
                Infraestructura inteligente para{" "}
                <span className="text-gradient-electric">comunidades conectadas</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-zinc-300 font-mono leading-relaxed">
                En <span className="text-white font-semibold">SPECTRUMP COLOMBIA S.A.S.</span> transformamos los territorios mediante la implementación de redes de alta velocidad y sistemas de energía solar de alta confiabilidad. Contamos con amplia trayectoria ejecutando proyectos de conectividad de gran envergadura en zonas apartadas, cerrando la brecha digital y mejorando la calidad de vida de las comunidades.
              </p>
            </div>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {MAIN_SERVICES.map((service, idx) => {
            const isSolar = service.category === "solar";
            return (
              <FadeContent key={service.id} delay={0.15 + idx * 0.15} duration={0.6}>
                <SpotlightCard
                  spotlightColor={
                    isSolar
                      ? "rgba(255, 183, 3, 0.15)"
                      : "rgba(0, 212, 255, 0.15)"
                  }
                  className="p-8 sm:p-10 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <Badge
                        variant={isSolar ? "solar" : "cyan"}
                        size="sm"
                        dot
                      >
                        {service.tag}
                      </Badge>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                          isSolar
                            ? "bg-[#FB8500]/10 border-[#FFB703]/30 text-[#FFB703]"
                            : "bg-[#0066FF]/10 border-[#00D4FF]/30 text-[#00D4FF]"
                        }`}
                      >
                        {isSolar ? (
                          <SunMedium className="w-6 h-6" />
                        ) : (
                          <Radio className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Key Points List */}
                    <div className="space-y-3.5 pt-4 border-t border-[#1e1e1e] mb-8">
                      {service.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isSolar ? "text-[#FFB703]" : "text-[#00D4FF]"
                            }`}
                          />
                          <span className="text-xs sm:text-sm text-zinc-300 font-sans">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA Action */}
                  <div className="pt-6 border-t border-[#1e1e1e]">
                    <Link
                      href={service.ctaHref}
                      className={`inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold transition-all group ${
                        isSolar
                          ? "text-[#FFB703] hover:text-[#FB8500]"
                          : "text-[#00D4FF] hover:text-[#0066FF]"
                      }`}
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
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
