"use client";

import React from "react";
import Link from "next/link";
import { Check, Zap, Wifi, Building2, Crown, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";
import { Hyperspeed } from "@/components/react-bits/hyperspeed";

interface Plan {
  id: string;
  speed: string;
  subtitle: string;
  description: string;
  price: string;
  featured?: boolean;
  tag?: string;
  icon: React.ReactNode;
  features: string[];
}

const CONNECTIVITY_PLANS: Plan[] = [
  {
    id: "50mbps",
    speed: "50 MBPS",
    subtitle: "Uso Básico y Residencial",
    description: "Ideal para navegación, videollamadas, estudio y uso básico en varios dispositivos.",
    price: "Desde $100.000",
    icon: <Wifi className="w-6 h-6 text-[#00D4FF]" />,
    features: [
      "Conexión de alta estabilidad",
      "Soporte técnico básico 24/7",
      "Navegación y videollamadas HD",
    ],
  },
  {
    id: "100mbps",
    speed: "100 MBPS",
    subtitle: "Opción Recomendada para Empresas",
    description: "La opción recomendada para empresas privadas, realizar streaming en 4K y descargas rápidas.",
    price: "Desde $500.000",
    featured: true,
    tag: "RECOMENDADO EMPRESAS",
    icon: <Building2 className="w-6 h-6 text-[#00D4FF]" />,
    features: [
      "Fibra óptica / enlace empresarial 1:1",
      "Streaming en 4K y descargas ultrarrápidas",
      "SLA garantizado del 99.9%",
      "Atención preferencial NOC 24/7",
    ],
  },
  {
    id: "200mbps",
    speed: "200 MBPS",
    subtitle: "Máximo Rendimiento Institucional",
    description: "Máximo rendimiento para entidades públicas, privadas, creadores de contenido y uso intensivo.",
    price: "Desde $750.000",
    icon: <Crown className="w-6 h-6 text-[#FFB703]" />,
    features: [
      "Ancho de banda dedicado de alto consumo",
      "Canal Dedicado Simétrico 1:1 & Redundancia",
      "Gestión multisitio y canal simétrico",
      "Monitoreo proactivo en tiempo real",
    ],
  },
];

export function ConnectivityPlans() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="planes">
      {/* Background React Bits Hyperspeed WebGL Animation */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-none overflow-hidden">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 12,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            speedUp: 3,
            carLightsFade: 0.2,
            totalSideLightSticks: 35,
            lightPairsPerRoadWay: 50,
            colors: {
              roadColor: 0x111111,
              islandColor: 0x181818,
              background: 0x000000,
              shoulderLines: 0x00ffff,
              brokenLines: 0x00d4ff,
              leftCars: [0x00ffff, 0x00d4ff, 0x0088ff],
              rightCars: [0x00d4ff, 0x33e5ff, 0x00ffff],
              sticks: 0x00ffff,
            },
          }}
        />
      </div>

      {/* Soft Dark Gradient Overlay over Hyperspeed */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              Planes de <span className="text-gradient-electric">Conectividad</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-mono leading-relaxed">
              Infraestructura de alta velocidad calibrada para cubrir exigencias desde consumo básico hasta operaciones gubernamentales y corporativas.
            </p>
          </div>
        </FadeContent>

        {/* 3 Pricing / Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CONNECTIVITY_PLANS.map((plan, idx) => (
            <FadeContent key={plan.id} delay={0.15 + idx * 0.15} duration={0.6}>
              <SpotlightCard
                spotlightColor={
                  plan.featured
                    ? "rgba(0, 212, 255, 0.25)"
                    : "rgba(255, 255, 255, 0.08)"
                }
                className={`p-7 sm:p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                  plan.featured
                    ? "border-[#00D4FF]/60 bg-zinc-950/95 shadow-[0_0_35px_rgba(0,212,255,0.2)] ring-1 ring-[#00D4FF]/50"
                    : "border-zinc-800/80 bg-zinc-950/80"
                }`}
              >
                <div>
                  {/* Top Featured Badge (Inside card so it never clips) */}
                  <div className="min-h-[28px] mb-2 flex items-center">
                    {plan.featured ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        <Zap className="w-3 h-3 fill-black" />
                        <span>{plan.tag}</span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                        PLAN {idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Plan Icon & Subtitle Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      {plan.icon}
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider text-right leading-tight max-w-[180px]">
                      {plan.subtitle}
                    </span>
                  </div>

                  {/* Plan Speed Title */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-3">
                    {plan.speed}
                  </h3>

                  {/* Plan Description with uniform height */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6 min-h-[56px] flex items-center">
                    {plan.description}
                  </p>

                  {/* Plan Price */}
                  <div className="mb-6 pt-4 border-t border-zinc-800/80">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#00D4FF] font-mono tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  {/* Plan Features with uniform height */}
                  <ul className="space-y-3 mb-8 min-h-[135px]">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs font-mono text-zinc-300">
                        <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <Link
                  href="/contacto"
                  className={`w-full py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.featured
                      ? "bg-gradient-electric text-black hover:opacity-95 shadow-glow-cyan-sm"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-200 hover:border-[#00D4FF]/40 hover:text-white"
                  }`}
                >
                  <span>Solicitar Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
