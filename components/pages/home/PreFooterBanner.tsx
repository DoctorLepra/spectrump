"use client";

import React from "react";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function PreFooterBanner({ data }: { data?: any }) {
  const title = data?.title || "Trabajamos juntos por un futuro más conectado y sostenible.";
  const subtitle = data?.subtitle || "¿Listo para llevar conectividad, seguridad e infraestructura de energía solar a donde más se necesita?";
  const buttonText = data?.button_text || "CONTÁCTANOS";
  
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.8}>
          {/* Glassmorphic Dark Navy Card */}
          <div className="relative bg-[#0B2545] rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Large Faded Person Icon Aligned to the Left Background */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 text-white select-none">
              <Users className="w-80 h-80 sm:w-[440px] sm:h-[440px]" />
            </div>

            {/* Subtle Gradient Glow in Card Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-emerald-500/10 pointer-events-none" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              {/* Left Column Text */}
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans tracking-tight leading-tight">
                  {title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  {subtitle}
                </p>
              </div>

              {/* Right Column CTA Button */}
              <div className="flex-shrink-0 pt-2 lg:pt-0">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
