"use client";

import React from "react";
import { SunMedium, Wifi, ShieldCheck, Monitor } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

const CARACTERISTICAS = [
  {
    id: "energia-solar",
    title: "Energía Solar",
    icon: <SunMedium className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "conectividad",
    title: "Conectividad",
    icon: <Wifi className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "videovigilancia",
    title: "Videovigilancia",
    icon: <ShieldCheck className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "servicios-digitales",
    title: "Servicios Digitales",
    icon: <Monitor className="w-8 h-8 text-[#0052CC]" />,
  },
];

export function EconectaCaracteristicas() {
  return (
    <section id="caracteristicas" className="scroll-mt-24 py-12 sm:py-16 bg-white border-b border-slate-200/80 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Grid with Vertical Dividers matching Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {CARACTERISTICAS.map((item, idx) => (
            <FadeContent key={item.id} delay={0.08 * idx} duration={0.6}>
              <div className="pt-6 sm:pt-0 px-4 text-center flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform">
                <div className="mb-4 p-4 rounded-2xl bg-blue-50/80 text-[#0052CC] group-hover:bg-blue-100/80 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-sans group-hover:text-[#0052CC] transition-colors">
                  {item.title}
                </h3>
              </div>
            </FadeContent>
          ))}
        </div>

      </div>
    </section>
  );
}
