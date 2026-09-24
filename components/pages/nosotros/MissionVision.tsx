"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { COMPANY_VISION } from "@/lib/data/nosotrosData";
import { FadeContent } from "@/components/react-bits/fade-content";

const NEW_CORPORATE_VALUES = [
  {
    id: "calidad",
    title: "Calidad",
    description:
      "Mantenemos los más altos estándares técnicos y normativos en la ejecución de cada proyecto, garantizando durabilidad, precisión y excelencia en nuestros entregables.",
    icon: <LucideIcons.Award className="w-6 h-6 text-[#0052CC]" />,
  },
  {
    id: "competitividad",
    title: "Competitividad",
    description:
      "Optimizamos recursos e inversiones mediante modelos eficientes y costos altamente rentables que maximizan el retorno y valor para nuestros clientes.",
    icon: <LucideIcons.TrendingUp className="w-6 h-6 text-[#0052CC]" />,
  },
  {
    id: "servicio",
    title: "Servicio",
    description:
      "Ofrecemos acompañamiento integral, atención personalizada y soporte continuo, priorizando la satisfacción y las necesidades de cada organización.",
    icon: <LucideIcons.Headphones className="w-6 h-6 text-[#0052CC]" />,
  },
  {
    id: "innovacion",
    title: "Innovación",
    description:
      "Integramos tecnologías de vanguardia en telecomunicaciones y energías renovables para desarrollar soluciones eficientes, inteligentes y de futuro.",
    icon: <LucideIcons.Lightbulb className="w-6 h-6 text-[#16A34A]" />,
  },
];

export function MissionVision({ data, valoresData, items }: { data?: any, valoresData?: any, items?: any[] }) {
  // Use CMS items if available, else DB items, else fallback
  const customItems = valoresData?.items && Array.isArray(valoresData.items) && valoresData.items.length > 0 ? valoresData.items : null;
  const dbItems = items && items.length > 0 ? items : null;
  const displayValues = customItems || dbItems || NEW_CORPORATE_VALUES;
  
  const misionText = data?.mision || "Diseñar, fabricar e implementar soluciones de infraestructura tecnológica que integren conectividad, energía renovable, seguridad electrónica y servicios digitales, contribuyendo al desarrollo sostenible de las comunidades.";
  const misionTag1 = data?.mision_tag1 || "Infraestructura Sostenible";
  const misionTag2 = data?.mision_tag2 || "Desarrollo Comunitario";

  const visionText = data?.vision || COMPANY_VISION.content;
  const visionTag1 = data?.vision_tag1 || "Meta Estratégica 2030";
  const visionTag2 = data?.vision_tag2 || "Transición Energética";

  const politicaText = data?.politica || "Prestar y ofrecer servicios de diseño, construcción y mantenimiento en las áreas de Ingeniería, Telecomunicaciones y Energías Renovables, óptima en el cumplimiento del tiempo, normas vigentes, satisfaciendo eficazmente los requerimientos y necesidades de nuestros clientes garantizando la entrega de un servicio de calidad.";
  const politicaTag1 = data?.politica_tag1 || "Calidad Certificada";
  const politicaTag2 = data?.politica_tag2 || "Cumplimiento Garantizado";
  
  const valoresTitle = valoresData?.valores_title || "Valores que guían nuestra operación diaria";
  const valoresSubtitle = valoresData?.valores_subtitle || "Principios éticos, técnicos y ambientales que rigen nuestras relaciones contractuales con el Estado colombiano y el sector privado.";

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission, Vision & Policy 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Nuestra Misión */}
          <FadeContent delay={0.1} duration={0.6}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052CC]">
                    <LucideIcons.Target className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold font-sans text-slate-900 mb-4">
                  Nuestra Misión
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {misionText}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between font-sans text-xs font-bold text-slate-500">
                <span>{misionTag1}</span>
                <span className="text-[#0052CC]">{misionTag2}</span>
              </div>
            </div>
          </FadeContent>

          {/* Card 2: Nuestra Visión */}
          <FadeContent delay={0.2} duration={0.6}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#16A34A]">
                    <LucideIcons.Compass className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold font-sans text-slate-900 mb-4">
                  Nuestra Visión
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {visionText}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between font-sans text-xs font-bold text-slate-500">
                <span>{visionTag1}</span>
                <span className="text-[#16A34A]">{visionTag2}</span>
              </div>
            </div>
          </FadeContent>

          {/* Card 3: Nuestra Política */}
          <FadeContent delay={0.3} duration={0.6}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052CC]">
                    <LucideIcons.ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold font-sans text-slate-900 mb-4">
                  Nuestra Política
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {politicaText}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between font-sans text-xs font-bold text-slate-500">
                <span>{politicaTag1}</span>
                <span className="text-[#0052CC]">{politicaTag2}</span>
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Corporate Values Section */}
        <div>
          <FadeContent delay={0.1} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                {valoresTitle}
              </h2>
              <p className="text-base text-slate-600 font-sans leading-relaxed">
                {valoresSubtitle}
              </p>
            </div>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayValues.map((val: any, idx: number) => {
              const isJsonItem = !!val.icon && typeof val.icon === 'string';
              const isDbItem = 'title' in val && !isJsonItem;
              
              const titleText = isJsonItem ? val.title : (isDbItem ? val.title : val.title);
              const descText = isJsonItem ? val.description : (isDbItem ? val.description : val.description);
              const iconColor = titleText.toLowerCase().includes('innov') ? 'text-[#16A34A]' : 'text-[#0052CC]';

              let FinalIcon = null;
              if (isJsonItem) {
                const IconComp = (LucideIcons as any)[val.icon] || LucideIcons.Award;
                FinalIcon = <IconComp className={`w-6 h-6 ${iconColor}`} />;
              } else if (isDbItem && val.metadata?.icon) {
                const IconComp = (LucideIcons as any)[val.metadata.icon] || LucideIcons.Award;
                FinalIcon = <IconComp className={`w-6 h-6 ${iconColor}`} />;
              } else {
                FinalIcon = val.icon;
              }

              return (
                <FadeContent key={val.id || idx} delay={0.1 * idx} duration={0.6}>
                  <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                    <div>
                      <div className="mb-4 p-3 rounded-xl bg-white border border-slate-200/80 w-fit">
                        {FinalIcon}
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 font-sans mb-2 group-hover:text-[#0052CC] transition-colors">
                        {titleText}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                        {descText}
                      </p>
                    </div>
                  </div>
                </FadeContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
