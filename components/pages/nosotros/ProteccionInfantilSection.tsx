"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { Baby, PhoneCall, ExternalLink } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function ProteccionInfantilSection({ data }: { data?: any }) {
  const title = data?.title || "Protección Infantil y Seguridad Digital";
  const subtitle = data?.subtitle || "En SPECTRUMP COLOMBIA S.A.S. asumimos un compromiso ético y legal estricto en la prevención y erradicación de la explotación, pornografía y abuso sexual de menores en redes de internet.";
  const backgroundImageUrl = data?.image_url || "/proteccion-infantil.jpg";
  const leftTitle = data?.marco_title || "Marco Legal y Preventivo";
  const leftSubtitle = data?.marco_badge || "Ley 679 de 2001 | Decreto 1524 de 2002 | Decreto 67 de 2003";
  const leftParagraphHtml = data?.marco_description || `Dando cumplimiento al marco normativo colombiano (Ley 679 de 2001, Decreto 1524 de 2002 y Resoluciones de la CRC), <strong class="text-white font-bold">SPECTRUMP COLOMBIA S.A.S.</strong> despliega mecanismos de protección técnica y protocolos de bloqueo para prevenir que las redes de telecomunicaciones sean utilizadas para la difusión de contenidos ilícitos que atenten contra niños, niñas y adolescentes.`;

  const defaultFeatures = [
    { icon: 'Lock', title: 'Filtrado Técnico DNS de Red', description: 'Bloqueo de dominios e IP notificadas en las listas oficiales del MinTIC y Policía Nacional.', colorClass: 'text-emerald-400' },
    { icon: 'AlertTriangle', title: 'Reporte Obligatorio a Autoridades', description: 'Notificación inmediata a la Fiscalía y CAI Virtual ante cualquier detección de material ilegal.', colorClass: 'text-amber-400' },
    { icon: 'CheckCircle2', title: 'Promoción del Control Parental', description: 'Recomendaciones activas de herramientas de filtrado y supervisión para padres y administradores.', colorClass: 'text-blue-400' }
  ];
  
  const features = data?.marco_features && Array.isArray(data.marco_features) && data.marco_features.length > 0 ? data.marco_features : defaultFeatures;

  const canalesTitle = data?.canales_title || "Canales Oficiales de Denuncia";
  const canalesSubtitle = data?.canales_subtitle || "Líneas de atención inmediata en Colombia";
  
  const defaultCanales = [
    { title: 'Te Protejo Colombia', description: 'Portal web oficial & App Te Protejo', url: 'https://teprotejo.org' },
    { title: 'ICBF (Bienestar Familiar)', description: 'Línea Gratuita Nacional: 01 8000 918080', url: 'LÍNEA 141' },
    { title: 'Policía Nacional - CAI Virtual', description: 'Línea Emergencias: 123', url: 'caivirtual.policia.gov.co' },
    { title: 'Fiscalía General de la Nación', description: 'Línea Gratuita Nacional: 01 8000 919748', url: 'LÍNEA 122' }
  ];
  
  const canales = data?.canales_list && Array.isArray(data.canales_list) && data.canales_list.length > 0 ? data.canales_list : defaultCanales;

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80" id="proteccion-infantil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Without Badge) */}
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeContent>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Legal Commitment Card with Background Image (7 Cols) */}
          <FadeContent delay={0.2} duration={0.8} className="lg:col-span-7 h-full">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl min-h-[500px] flex flex-col justify-between p-7 sm:p-9 text-white group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
              />
              {/* Dark Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70" />

              {/* Card Content */}
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <Baby className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-sans">
                      {leftTitle}
                    </h3>
                    <span className="text-xs text-emerald-400 font-mono font-bold">
                      {leftSubtitle}
                    </span>
                  </div>
                </div>

                <p 
                  className="text-slate-200 text-sm sm:text-base font-sans leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{ __html: leftParagraphHtml }}
                />

                {/* Technical Obligations List */}
                <div className="space-y-3 pt-2 font-sans">
                  {features.map((feature: any, index: number) => {
                    const Icon = (LucideIcons as any)[feature.icon] || LucideIcons.CheckCircle2;
                    const colors = ['text-emerald-400', 'text-amber-400', 'text-blue-400'];
                    const colorClass = feature.colorClass || colors[index % colors.length];
                    return (
                      <div key={index} className="flex items-start gap-3 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 shadow-md">
                        <Icon className={`w-5 h-5 ${colorClass} flex-shrink-0 mt-0.5`} />
                        <div>
                          <strong className="block text-xs text-white font-bold mb-0.5">{feature.title}</strong>
                          <span className="text-xs text-slate-300">{feature.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/20 mt-6 flex items-center justify-between font-sans relative z-10">
                <span className="text-xs text-slate-300 font-medium">SPECTRUMP Colombia S.A.S.</span>
                <span className="px-3 py-1 bg-emerald-500/30 backdrop-blur-md text-emerald-300 border border-emerald-400/40 rounded-full text-xs font-bold">
                  Compromiso de Protección Total
                </span>
              </div>
            </div>
          </FadeContent>

          {/* Right Column: Direct Reporting Channels Card (5 Cols, Without Document Button) */}
          <FadeContent delay={0.3} duration={0.8} className="lg:col-span-5 h-full">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-sans">
                      {canalesTitle}
                    </h3>
                    <span className="text-xs text-slate-500 font-sans">{canalesSubtitle}</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  {canales.map((canal: any, index: number) => {
                    const urlStr = canal.url || '';
                    const isWebUrl = urlStr.startsWith('http') || urlStr.includes('.com') || urlStr.includes('.org') || urlStr.includes('.co') || urlStr.includes('www.');
                    const isPhoneNum = !isNaN(Number(urlStr.replace(/\D/g, ''))) && urlStr.replace(/\D/g, '').length > 2 && !isWebUrl && !urlStr.toUpperCase().includes('LÍNEA') && !urlStr.toUpperCase().includes('LINEA');
                    
                    const cleanHref = isWebUrl 
                      ? (urlStr.startsWith('http') ? urlStr : `https://${urlStr}`) 
                      : (isPhoneNum ? `tel:${urlStr.replace(/\D/g, '')}` : undefined);
                    
                    const shortDisplayUrl = isWebUrl ? urlStr.replace(/^https?:\/\//, '').replace(/\/$/, '') : urlStr;

                    if (cleanHref) {
                      return (
                        <a
                          key={index}
                          href={cleanHref}
                          target={isWebUrl ? "_blank" : undefined}
                          rel={isWebUrl ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all group"
                        >
                          <div>
                            <strong className="block text-slate-900 font-bold text-sm">{canal.title}</strong>
                            <span className="text-slate-500">{canal.description}</span>
                          </div>
                          <span className="text-[#0052CC] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-right">
                            {shortDisplayUrl} {isWebUrl ? <ExternalLink className="w-3.5 h-3.5" /> : <PhoneCall className="w-3.5 h-3.5" />}
                          </span>
                        </a>
                      );
                    } else {
                      return (
                        <div key={index} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <strong className="text-slate-900 font-bold text-sm">{canal.title}</strong>
                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-extrabold text-[11px] whitespace-nowrap ml-2">
                              {shortDisplayUrl}
                            </span>
                          </div>
                          <span className="text-slate-500 block">{canal.description}</span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </FadeContent>

        </div>
      </div>
    </section>
  );
}
