"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ShinyText } from "@/components/react-bits/shiny-text";

export function ServiciosHero({ data }: { data?: any }) {
  const title = data?.title || "Servicios de Conectividad &";
  const badgeText = data?.badge_text || "Energía Solar Corporativa";
  const imageUrl = data?.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
      {/* High-Resolution Infrastructure Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      {/* Dark Overlay for Maximum Contrast */}
      <div className="absolute inset-0 bg-slate-950/80 z-0" />

      {/* Radiant Glowing Accent Bulbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeContent delay={0.1} duration={0.8}>
          {/* Main Title (No Badge, No Subtitle Paragraph) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-normal sm:leading-tight lg:leading-[1.25] mb-10 pb-2">
            {title}{" "}
            {badgeText && (
              <span className="inline-block py-1">
                <ShinyText
                  text={badgeText}
                  color="#0088FF"
                  shineColor="#FFFFFF"
                  speed={2.5}
                  spread={120}
                />
              </span>
            )}
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/573209325989?text=${encodeURIComponent("Quisiera conocer más información acerca de los servicios de SPECTRUMP")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Solicitar Cotización de Proyecto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#catalogo-servicios"
              className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-sans text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explorar Portafolio</span>
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
