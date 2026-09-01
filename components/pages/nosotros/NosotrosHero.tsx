"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ShinyText } from "@/components/react-bits/shiny-text";

export function NosotrosHero() {
  return (
    <section className="relative w-full pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Infraestructura y Conectividad SPECTRUMP"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <FadeContent delay={0.1} duration={0.8}>
          {/* Main Heading with ShinyText on "Compromiso de País" */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.15] text-center">
            Ingeniería y Conectividad con{" "}
            <ShinyText
              text="Compromiso de País"
              color="#0088FF"
              shineColor="#FFFFFF"
              speed={2.5}
              spread={120}
            />
          </h1>
        </FadeContent>
      </div>
    </section>
  );
}
