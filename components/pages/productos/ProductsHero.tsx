"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ShinyText } from "@/components/react-bits/shiny-text";

export function ProductsHero({ data }: { data?: any }) {
  const title = data?.title || "Catálogo de Equipos &";
  const badgeText = data?.badge_text || "Energía Solar Fotovoltaica";
  const description = data?.description || "Suministro de hardware especializado, módulos de alta eficiencia, inversores certificados RETIE y sistemas de almacenamiento para proyectos en toda Colombia.";
  const imageUrl = data?.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={imageUrl}
          alt="Catálogo de Productos Solares SPECTRUMP"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-[1px]" />
      </div>

      {/* Radiant Glowing Accent Bulbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <FadeContent delay={0.1} duration={0.8}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-normal sm:leading-tight lg:leading-[1.25] mb-6">
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

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto text-justify sm:text-center">
            {description}
          </p>
        </FadeContent>
      </div>
    </section>
  );
}
