"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ShinyText } from "@/components/react-bits/shiny-text";

const FALLBACK_CARDS = [
  { title: "Respuesta Ágil", description: "Atención en menos de 24h", icon: "Clock", color: "blue" },
  { title: "Cobertura Nacional", description: "Operaciones en toda Colombia", icon: "Globe", color: "emerald" },
  { title: "Licitaciones & RUP", description: "Cumplimiento normativo", icon: "ShieldCheck", color: "blue" }
];

export function ContactoHero({ data }: { data?: any }) {
  const title = data?.title || "Conectemos tu Próximo Proyecto con el";
  const badgeText = data?.badge_text || "Futuro";
  const backgroundImageUrl = data?.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80";

  let displayItems = data?.features_list && Array.isArray(data.features_list) && data.features_list.length > 0 
    ? data.features_list 
    : FALLBACK_CARDS;
  displayItems = displayItems.slice(0, 3);

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={backgroundImageUrl}
          alt="Contacto SPECTRUMP COLOMBIA"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-[1px]" />
      </div>

      {/* Radiant Glowing Accent Bulbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Original Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-tight sm:leading-tight">
              {title}{" "}
              <span className="inline-block py-1">
                <ShinyText
                  text={badgeText}
                  color="#38BDF8"
                  shineColor="#FFFFFF"
                  speed={2.5}
                  spread={120}
                />
              </span>
            </h1>

            {/* Cards Preserved (No description paragraph, max 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              {displayItems.map((item: any, idx: number) => {
                const IconComp = (LucideIcons as any)[item.icon] || LucideIcons.Clock;
                const color = idx % 2 === 0 ? 'blue' : 'emerald';
                const bgClass = color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400';

                return (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className={`p-2 rounded-xl ${bgClass}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-sans truncate">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 font-sans truncate" title={item.description}>{item.description}</p>
                    </div>
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
