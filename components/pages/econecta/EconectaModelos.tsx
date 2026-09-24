"use client";

import React from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";
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

const FALLBACK_MODELOS = [
  {
    title: "ECONECTA® ESSENTIAL",
    badge: "Estructura Solar + Conectividad Base",
    image_url: "/images/essential.jpg",
    description: "La configuración base esencial de infraestructura inteligente para espacios que requieren energía solar y conectividad de alta confiabilidad.",
    icon: "Zap",
    feature_1: "Paneles solares, baterías e inversor",
    feature_2: "Router MikroTik y Access Point WiFi",
    feature_3: "Iluminación LED, tomas AC y USB-C",
    feature_4: "Bancas y mesas · instalación y garantía",
  },
  {
    title: "ECONECTA® SMART",
    badge: "Conectividad + Gestión Inteligente",
    image_url: "/images/smart.jpg",
    description: "Evoluciona la conectividad base integrando videovigilancia remota, pantallas digitales y herramientas avanzadas de administración.",
    icon: "Cpu",
    feature_1: "Todo lo del ESSENTIAL, y además:",
    feature_2: "Cámaras IP y monitoreo remoto",
    feature_3: "Pantalla informativa y gabinete inteligente",
    feature_4: "Portal cautivo y sistema de administración",
  },
  {
    title: "ECONECTA® CITY 1",
    badge: "Smart City & Territorios Inteligentes",
    image_url: "/images/city-1.jpg",
    description: "Equipamiento urbano de última generación con Inteligencia Artificial, sensores de entorno y gestión centralizada multiestación.",
    icon: "Radio",
    feature_1: "Todo lo del SMART, y además:",
    feature_2: "Inteligencia Artificial y analítica avanzada",
    feature_3: "Sensores ambientales y botón SOS",
    feature_4: "Megafonía IP y dashboard nacional",
  },
  {
    title: "ECONECTA® URBAN PRO",
    badge: "Máximo Rendimiento & Plataforma Integral",
    image_url: "/images/urban-pro.jpg",
    description: "Integra conectividad, energía solar, videovigilancia, información digital e inteligencia artificial en una única plataforma diseñada para impulsar ciudades y territorios más seguros, sostenibles y conectados.",
    icon: "Sparkles",
    feature_1: "Plataforma tecnológica de máxima capacidad territorial",
    feature_2: "Energía solar de alta potencia y banco de respaldo continuo",
    feature_3: "Videovigilancia 360° con Inteligencia Artificial aplicada",
    feature_4: "Información digital interactiva y analítica de datos en tiempo real",
  },
];

export function EconectaModelos({ data }: { data?: any }) {
  const displayItems = data?.models_list && Array.isArray(data.models_list) && data.models_list.length > 0 
    ? data.models_list 
    : FALLBACK_MODELOS;
  
  const title = data?.title || `Modelos`;
  const badgeText = data?.badge_text || `Elige el poste inteligente ideal`;
  const description = data?.description || "Modelos para todo tipo de entornos y circunstancias";
  
  return (
    <section id="modelos" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200/80 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
              {title} <span className="text-[#16A34A]">{badgeText}</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#16A34A] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 font-sans pt-2">
              {description}
            </p>
          </div>
        </FadeContent>

        {/* Models Cards Grid (2 Columns Desktop, 1 Column Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayItems.map((modelo: any, idx: number) => {
            const modelName = modelo.title;
            const modelImage = modelo.image_url || "/images/essential.jpg";
            const modelBadge = modelo.badge;
            const modelDesc = modelo.description;
            const IconComp = (LucideIcons as any)[modelo.icon] || Zap;

            const highlights = [modelo.feature_1, modelo.feature_2, modelo.feature_3, modelo.feature_4].filter(Boolean);

            const whatsappUrl = `https://wa.me/573209325989?text=${encodeURIComponent(
              `Hola SPECTRUMP, quisiera solicitar información técnica y cotización del modelo ${modelName}.`
            )}`;

            return (
              <FadeContent key={idx} delay={0.1 * idx} duration={0.6}>
                <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl overflow-hidden flex flex-col sm:flex-row items-stretch justify-between h-full hover:border-[#16A34A]/50 hover:shadow-xl hover:bg-white transition-all duration-300 group">
                  
                  {/* Left Column: Image (25% Width, Full Height Flush to Left Border) */}
                  <div className="relative w-full sm:w-1/4 min-h-[220px] sm:min-h-full bg-slate-900 shrink-0 overflow-hidden">
                    <Image
                      src={modelImage}
                      alt={modelName}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 15vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/40 via-transparent to-transparent opacity-50" />
                  </div>

                  {/* Right Column: Content (75% Width with Padding) */}
                  <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-4">
                      {/* Top: Icon & Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs group-hover:scale-105 transition-transform shrink-0">
                          <IconComp className="w-5 h-5 text-[#16A34A]" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-600 bg-white border border-slate-200/80 px-2.5 py-1 rounded-full uppercase tracking-wider text-right truncate">
                          {modelBadge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-sans group-hover:text-[#16A34A] transition-colors">
                          {modelName}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                          {modelDesc}
                        </p>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                        {highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button with WhatsApp Icon */}
                    <div className="pt-4 border-t border-slate-200/80">
                      <a
                         href={whatsappUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md active:scale-95"
                       >
                         <WhatsAppIcon className="w-4 h-4 fill-white" />
                         <span>Cotizar este Modelo</span>
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                       </a>
                    </div>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
