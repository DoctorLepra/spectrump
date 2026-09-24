"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function EconectaHero({ data }: { data?: any }) {
  const videoUrl = data?.video_url || "/images/0824.mp4";
  const description = data?.description || `La solución integral y autosostenible que fusiona <strong class="text-[#4ADE80]">energía solar</strong>, <strong class="text-[#38BDF8]">conectividad</strong>, <strong class="text-white">videovigilancia</strong> y <strong class="text-white">servicios digitales</strong> para comunidades y proyectos de alto impacto.`;
  const logoUrl = data?.logo_url || "/econecta.png";

  const whatsappUrl = `https://wa.me/573209325989?text=${encodeURIComponent(
    "Hola SPECTRUMP, quisiera solicitar información técnica y cotizar una solución con ECONECTA®."
  )}`;

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
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Centered Dark Overlay for Readability */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/75 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            
            {/* ECONECTA Logo as Hero Title (+35% Larger) */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl flex items-center justify-center py-2">
              <img
                src={logoUrl}
                alt="ECONECTA®"
                className="object-contain w-auto h-auto max-h-32 sm:max-h-44 md:max-h-56 lg:max-h-64 drop-shadow-[0_12px_36px_rgba(0,0,0,0.7)]"
              />
            </div>

            {/* Subtitle Centered */}
            <p 
              className="text-base sm:text-xl text-slate-200 font-sans leading-relaxed max-w-2xl mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Centered CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>{data?.primary_button_text || "COTIZAR SOLUCIÓN ECONECTA"}</span>
              </a>

              <a
                href="#caracteristicas"
                className="border-2 border-[#0088FF] bg-slate-950/40 hover:bg-[#0088FF]/20 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-lg backdrop-blur-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <span>{data?.secondary_button_text || "CONOCER CARACTERÍSTICAS"}</span>
              </a>
            </div>
          </div>
        </FadeContent>
      </div>

      {/* Scroll Down Explorar Indicator */}
      <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center pointer-events-auto">
        <a
          href="#caracteristicas"
          className="group flex flex-col items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white transition-colors focus:outline-none animate-bounce"
          aria-label="Explorar la solución ECONECTA"
        >
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
            Explorar
          </span>
          <div className="p-2 rounded-full border border-white/25 bg-slate-950/50 backdrop-blur-md group-hover:border-[#22C55E]/70 transition-colors shadow-lg">
            <ChevronDown className="w-4 h-4 text-[#4ADE80]" />
          </div>
        </a>
      </div>
    </section>
  );
}
