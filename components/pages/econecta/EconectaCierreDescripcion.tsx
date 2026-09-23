"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function EconectaCierreDescripcion({ data }: { data?: any }) {
  const videoUrl = data?.video_url || "/images/herpsection.mp4";
  const paragraphHtml = data?.paragraph || `Descubre <strong class="text-[#4ADE80] font-extrabold">ECONECTA</strong>, la solución integral de conectividad sostenible impulsada por el sol. Esta torre inteligente no solo provee Wi-Fi, sino que integra seguridad, servicios ciudadanos y una potente gestión de datos. Nuestro objetivo es claro: facilitar el acceso a la tecnología para democratizar la inclusión digital y conectar a todos, en todas partes.`;

  return (
    <section className="relative w-full py-16 sm:py-20 bg-slate-950 overflow-hidden border-b border-slate-800">
      {/* Background Video with Dark Overlay */}
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
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeContent delay={0.1} duration={0.6}>
          <div className="max-w-4xl mx-auto space-y-6 text-justify">
            <p 
              className="text-base sm:text-lg lg:text-xl text-slate-200 font-sans leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: paragraphHtml }}
            />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
