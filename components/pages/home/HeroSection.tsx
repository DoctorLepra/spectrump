"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ShinyText } from "@/components/react-bits/shiny-text";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-24 bg-slate-950">
      {/* Background Video with Dark Overlay (100% Full Viewport Bleed) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src="/images/herpsection.mp4" type="video/mp4" />
        </video>
        {/* Centered Dark Overlay for Readability */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/75 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            {/* Hero Main Heading (2 Lines Centered with React Bits ShinyText) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.15] text-center">
              Tecnología que{" "}
              <ShinyText
                text="conecta,"
                color="#0088FF"
                shineColor="#FFFFFF"
                speed={2.5}
                spread={120}
              />
              <br className="hidden sm:block" />{" "}
              energía que{" "}
              <ShinyText
                text="transforma."
                color="#38BDF8"
                shineColor="#FFFFFF"
                speed={2.5}
                spread={120}
              />
            </h1>

            {/* Subtitle Centered */}
            <p className="text-base sm:text-xl text-slate-200 font-sans leading-relaxed max-w-2xl mx-auto text-center">
              Soluciones integrales de ingeniería, conectividad, energía y tecnología para proyectos que generan impacto y construyen un futuro más sostenible.
            </p>

            {/* Centered CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#servicios"
                className="bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                CONOCE NUESTROS SERVICIOS
              </Link>

              <Link
                href="/#econecta"
                className="border-2 border-[#22C55E] bg-slate-950/40 hover:bg-[#16A34A]/20 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-lg backdrop-blur-sm transition-all"
              >
                CONOCE ECONECTA
              </Link>
            </div>
          </div>
        </FadeContent>
      </div>

      {/* Scroll Down "Explorar" Indicator (Navigates to #historia) */}
      <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center pointer-events-auto">
        <a
          href="#historia"
          className="group flex flex-col items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white transition-colors focus:outline-none animate-bounce"
          aria-label="Explorar la historia de SPECTRUMP"
        >
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
            Explorar
          </span>
          <div className="p-2 rounded-full border border-white/25 bg-slate-950/50 backdrop-blur-md group-hover:border-[#0088FF]/70 transition-colors shadow-lg">
            <ChevronDown className="w-4 h-4 text-[#38BDF8]" />
          </div>
        </a>
      </div>
    </section>
  );
}
