"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function EconectaDescripcion({ data }: { data?: any }) {
  const description = data?.description || `<strong class="text-slate-900 font-extrabold">ECONECTA®</strong> es una línea de soluciones de infraestructura inteligente desarrollada para responder a los desafíos de conectividad, transformación digital y sostenibilidad que enfrentan actualmente las entidades públicas, organizaciones privadas e instituciones educativas.`;

  return (
    <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <div className="max-w-4xl mx-auto space-y-6 text-justify">
            <p 
              className="text-base sm:text-lg lg:text-xl text-slate-700 font-sans leading-relaxed text-justify whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
