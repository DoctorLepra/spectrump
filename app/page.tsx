import React from "react";
import Link from "next/link";
import { ChevronDown, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { MetricsTicker } from "@/components/pages/home/MetricsTicker";
import { ServicesSection } from "@/components/pages/home/ServicesSection";
import { ConnectivityPlans } from "@/components/pages/home/ConnectivityPlans";
import { EconectaSection } from "@/components/pages/home/EconectaSection";
import { DifferentiatorsGrid } from "@/components/pages/home/DifferentiatorsGrid";
import { FadeContent } from "@/components/react-bits/fade-content";
import { Aurora } from "@/components/react-bits/aurora";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 sm:pt-36 pb-20 text-center relative overflow-hidden bg-black text-white w-full">
      {/* Real React Bits WebGL Aurora Background */}
      <div className="absolute top-0 left-0 right-0 h-[900px] z-0 pointer-events-none opacity-90 overflow-hidden">
        <Aurora
          colorStops={["#0066FF", "#00D4FF", "#0044cc"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.7}
        />
      </div>

      {/* Hero Section Container */}
      <FadeContent delay={0.1} duration={0.8}>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mb-16 px-4 sm:px-6 lg:px-8">
          {/* Main Title with Inter bold and gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto font-sans leading-tight">
            Conectividad y Energía Solar para el{" "}
            <span className="text-gradient-electric">Desarrollo Rural</span>
          </h1>

          {/* Monospace subtitle */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-mono leading-relaxed">
            Soluciones integrales de ingeniería, telecomunicaciones y infraestructura autosostenible en Colombia.
          </p>

          {/* Floating Scroll Down Indicator */}
          <a
            href="#servicios"
            className="mt-14 flex flex-col items-center justify-center gap-2 group cursor-pointer"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="font-mono text-xs text-zinc-400 group-hover:text-[#00D4FF] tracking-widest uppercase transition-colors">
              Conoce más
            </span>
            <br></br>
            <div className="animate-bounce p-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-[#00D4FF]/40 transition-colors">
              <ChevronDown className="w-5 h-5 text-[#00D4FF]" />
            </div>
          </a>

          {/* Trust verification pills */}
          <div className="mt-12 pt-8 border-t border-zinc-900/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
              MinTIC Registro TIC Habilitado
            </span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Zap className="w-4 h-4 text-[#FFB703]" />
              Certificación RETIE & Ley 1715
            </span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Ingeniería e Infraestructura Certificada
            </span>
          </div>
        </div>
      </FadeContent>

      {/* Real-time live metrics bar */}
      <div className="w-full relative z-10 text-left">
        <MetricsTicker />
      </div>

      {/* Core services overview */}
      <div className="w-full relative z-10 text-left">
        <ServicesSection />
      </div>

      {/* Connectivity Plans Section with Hyperspeed React Bits background */}
      <div className="w-full relative z-10 text-left">
        <ConnectivityPlans />
      </div>

      {/* Econecta® Section with AccordionGallery React Bits component */}
      <div className="w-full relative z-10 text-left">
        <EconectaSection />
      </div>

      {/* Competitive differentiators grid */}
      <div className="w-full relative z-10 text-left">
        <DifferentiatorsGrid />
      </div>
    </div>
  );
}
