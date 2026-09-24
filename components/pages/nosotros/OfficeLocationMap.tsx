"use client";

import React from "react";
import { Map, MapControls, MapMarker } from "@/components/ui/map";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function OfficeLocationMap({ data }: { data?: any }) {
  const title = data?.title || "Ubicación de Nuestras Oficinas";
  const description = data?.description || data?.subtitle || "Encuentra la sede central de operaciones, centro de ingeniería y soporte de SPECTRUMP COLOMBIA S.A.S.";
  const address = data?.address || "Carrera 15 # 93 - 60, Bogotá D.C.";
  const phone = data?.phone || "+57 (601) 745-8900";
  const email = data?.email || "contacto@spectrump.com.co";
  const hours = data?.hours || "Lunes a Viernes: 8:00 AM - 5:30 PM";
  
  // SPECTRUMP Office Coordinates: 6°11'25.9"N 67°29'37.4"W (lng: -67.493708, lat: 6.190538) - used for map rendering
  let officeCoords: [number, number] = [-67.493708, 6.190538];
  
  if (data?.coordinates) {
    const parts = data.coordinates.split(',').map((s: string) => parseFloat(s.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      // User inputs Lat, Lng. Map expects Lng, Lat
      officeCoords = [parts[1], parts[0]];
    }
  }

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80" id="ubicacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              {description}
            </p>
          </div>
        </FadeContent>

        {/* Single Row Layout: Map (Left) + Text Details (Right) Side-by-Side */}
        <FadeContent delay={0.2} duration={0.8}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Side: Interactive Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 h-[430px]">
              <Map center={officeCoords} zoom={15} grayscale className="w-full h-full relative">
                <MapMarker coordinates={officeCoords} title="SPECTRUMP COLOMBIA S.A.S." />
                <MapControls />
              </Map>
            </div>

            {/* Right Side: Text Items directly aligned without card box */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-5">
              <div className="space-y-5">
                {/* Item 1: Dirección */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[#0052CC] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Dirección de nuestras oficinas
                    </strong>
                    <span className="text-base font-bold text-slate-900 leading-snug block">
                      {address}
                    </span>
                    <span className="text-xs text-slate-500 font-sans">Colombia</span>
                  </div>
                </div>

                {/* Item 2: Contacto */}
                <a href={`https://wa.me/${phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[#0052CC] flex-shrink-0 group-hover:bg-[#0052CC] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 group-hover:text-blue-500 transition-colors">
                      Número de contacto
                    </strong>
                    <span className="text-base font-bold text-slate-900 leading-snug block group-hover:text-[#0052CC] transition-colors">
                      {phone}
                    </span>
                    <span className="text-xs text-slate-500 font-sans">WhatsApp disponible</span>
                  </div>
                </a>

                {/* Item 3: Correo */}
                <a href={`mailto:${email}`} className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[#0052CC] flex-shrink-0 group-hover:bg-[#0052CC] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 group-hover:text-blue-500 transition-colors">
                      Correo Institucional
                    </strong>
                    <span className="text-base font-bold text-slate-900 leading-snug block group-hover:text-[#0052CC] transition-colors break-all">
                      {email}
                    </span>
                  </div>
                </a>

                {/* Item 4: Horario */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[#0052CC] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Horario de Atención
                    </strong>
                    <span className="text-base font-bold text-slate-900 leading-snug block">
                      {hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button aligned to the bottom right */}
              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/place/6%C2%B011'25.9%22N+67%C2%B029'37.4%22W/@6.190538,-67.493708,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <span>Ver Ubicación en Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
