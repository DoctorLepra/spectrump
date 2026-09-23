"use client";

import React from "react";
import Image from "next/image";
import { FadeContent } from "@/components/react-bits/fade-content";

export function NosotrosHistoria({ data }: { data?: any }) {
  const logoUrl = data?.logo_url || "/logo.png";
  const paragraphHtml = data?.paragraph || `Somos una empresa privada que está conformada por un grupo de ingenieros y especialistas en <strong>Telecomunicaciones y Energías renovables</strong>, brindando los mejores estándares de calidad y servicios. Ofrecemos soluciones a nivel corporativo y gubernamental, consolidándonos como un <strong>aliado estratégico</strong> en el sector de la ingeniería, las comunicaciones y energía solar.`;

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Full-Color SPECTRUMP Logo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative h-40 sm:h-52 w-[420px] sm:w-[660px]">
                <Image
                  src={logoUrl}
                  alt="SPECTRUMP COLOMBIA S.A.S."
                  fill
                  className="object-contain object-center lg:object-left"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Paragraph Text */}
            <div className="lg:col-span-7 text-left">
              <p 
                className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed text-justify"
                dangerouslySetInnerHTML={{ __html: paragraphHtml }}
              />
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
