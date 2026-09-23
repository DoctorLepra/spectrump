"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

const ECONECTA_PILLARS = [
  {
    icon: <LucideIcons.Sun className="w-5 h-5 text-[#38BDF8]" />,
    label: "Energía Solar Fotovoltaica",
  },
  {
    icon: <LucideIcons.Wifi className="w-5 h-5 text-[#38BDF8]" />,
    label: "Conectividad de Alta Calidad",
  },
  {
    icon: <LucideIcons.ShieldCheck className="w-5 h-5 text-[#38BDF8]" />,
    label: "Seguridad Integral",
  },
  {
    icon: <LucideIcons.Monitor className="w-5 h-5 text-[#38BDF8]" />,
    label: "Tecnología y Servicios Digitales",
  },
  {
    icon: <LucideIcons.Leaf className="w-5 h-5 text-[#4ADE80]" />,
    label: "Sostenibilidad e Impacto Social",
  },
];
export function EconectaSection({ data, items }: { data?: any, items?: any[] }) {
  // Prefer JSON items from data (CMS editor) over legacy section_items
  const customItems = data?.items && Array.isArray(data.items) && data.items.length > 0 ? data.items : null;
  const dbItems = items && items.length > 0 ? items : null;
  
  const displayItems = customItems || dbItems || ECONECTA_PILLARS;
  
  const videoUrl = data?.video_url || "/images/0824.mp4";
  const badgeText = data?.badge_text || "NUESTRA SOLUCIÓN DESTACADA";
  const paragraphHtml = data?.paragraph || `<strong class="text-white">ECONECTA</strong> es una estructura inteligente que integra <strong class="text-[#4ADE80]">energía solar</strong>, <strong class="text-[#38BDF8]">conectividad</strong>, <strong>seguridad</strong>, <strong>tecnología</strong> y servicios digitales para llevar soluciones sostenibles a comunidades y espacios que necesitan estar conectados.`;
  const logoUrl = data?.logo_url || "/econecta.png";
  const buttonText = data?.button_text || "CONOCER ECONECTA";

  return (
    <section className="relative w-full py-24 sm:py-32 bg-slate-950 text-white overflow-hidden border-y border-slate-800" id="econecta">
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
        {/* Dark Gradient Overlay for Maximum Text Contrast & Legibility */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/75 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="max-w-4xl space-y-7 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A34A]/20 border border-[#22C55E]/40 text-[#4ADE80] font-sans text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <LucideIcons.Leaf className="w-4 h-4 text-[#4ADE80]" />
              <span>{badgeText}</span>
            </div>

            {/* Brand Logo */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-start py-2">
              <Image
                src={logoUrl}
                alt="ECONECTA®"
                width={480}
                height={130}
                priority
                className="object-contain w-auto h-auto max-h-20 sm:max-h-28 md:max-h-36 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Description */}
            <p 
              className="text-base sm:text-xl text-slate-200 font-sans leading-relaxed max-w-2xl" 
              dangerouslySetInnerHTML={{ __html: paragraphHtml }} 
            />

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/econecta"
                className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 5 Attribute Badges Row */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {displayItems.map((pillar: any, idx: number) => {
                const isJsonItem = !!pillar.icon && typeof pillar.icon === 'string';
                const isDbItem = 'title' in pillar && !isJsonItem;
                const label = isJsonItem ? pillar.label : (isDbItem ? pillar.title : pillar.label);
                
                // Color Logic
                const isGreen = label.toLowerCase().includes('sostenibilidad') || (isDbItem && pillar.metadata?.icon === 'Leaf') || (isJsonItem && pillar.icon === 'Leaf');
                const iconColor = isGreen ? "text-[#4ADE80]" : "text-[#38BDF8]";

                // Icon Resolution
                let FinalIcon = null;
                if (isJsonItem) {
                  const IconComp = (LucideIcons as any)[pillar.icon] || LucideIcons.Sun;
                  FinalIcon = <IconComp className={`w-5 h-5 ${iconColor}`} />;
                } else if (isDbItem && pillar.metadata?.icon) {
                  const IconComp = (LucideIcons as any)[pillar.metadata?.icon] || LucideIcons.Sun;
                  FinalIcon = <IconComp className={`w-5 h-5 ${iconColor}`} />;
                } else {
                  FinalIcon = pillar.icon;
                }
                
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-[#22C55E]/50 transition-colors shadow-md"
                  >
                    <div className="mb-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                      {FinalIcon}
                    </div>
                    <span className="text-xs font-bold text-slate-200 font-sans leading-snug break-words w-full">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
