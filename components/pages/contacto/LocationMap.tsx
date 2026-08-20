"use client";

import React from "react";
import { MapPin, ExternalLink, Activity, Radio, Navigation } from "lucide-react";
import { HEADQUARTERS_LOCATION } from "@/lib/data/contactData";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";

export function LocationMap() {
  const { coordinates, status, networkPoints } = HEADQUARTERS_LOCATION;

  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SpotlightCard className="p-8 sm:p-12 rounded-2xl bg-[#111111] border border-[#222222] relative overflow-hidden">
            {/* Cybernetic map grid canvas representation */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Top Bar: Title, GPS & Network Status */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1e1e1e] mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="cyan" size="sm" dot>
                      GEOLOCALIZACIÓN & COBERTURA
                    </Badge>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white">
                    Centro de Control de Red y Sede Principal
                  </h3>
                </div>

                {/* Coordinates Monospace Display */}
                <div className="font-mono text-xs text-zinc-400 bg-[#0a0a0a] p-3.5 rounded-xl border border-[#222222] space-y-1">
                  <div className="text-[#00D4FF] font-semibold">
                    LAT: {coordinates.lat} | LONG: {coordinates.long}
                  </div>
                  <div className="text-zinc-500">
                    ALTITUD: {coordinates.altitude} · {coordinates.city}
                  </div>
                </div>
              </div>

              {/* Simulated Interactive Radar & Node Visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Radar Simulation Area (7 cols) */}
                <div className="lg:col-span-7 relative h-72 sm:h-80 rounded-xl bg-[#0a0a0a] border border-[#222222] flex items-center justify-center overflow-hidden group">
                  {/* Concentric Radar Rings */}
                  <div className="absolute w-64 h-64 rounded-full border border-[#00D4FF]/10 animate-ping opacity-25" style={{ animationDuration: "4s" }} />
                  <div className="absolute w-48 h-48 rounded-full border border-[#00D4FF]/20" />
                  <div className="absolute w-32 h-32 rounded-full border border-[#00D4FF]/30" />
                  <div className="absolute w-16 h-16 rounded-full border border-[#00D4FF]/40" />

                  {/* Central Bogotá Pin with Pulse */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-8 h-8 rounded-full bg-[#00D4FF]/30 animate-pulse" />
                      <div className="w-4 h-4 rounded-full bg-[#00D4FF] shadow-[0_0_15px_#00D4FF] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      </div>
                    </div>
                    <div className="mt-3 px-3 py-1 rounded bg-black/90 border border-[#00D4FF]/40 text-[11px] font-mono text-[#00D4FF] font-bold shadow-lg">
                      Bogotá D.C. (Torre B - Piso 12)
                    </div>
                  </div>

                  {/* Satellite Points */}
                  <div className="absolute top-8 right-12 flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Nodo Noroccidente (Medellín)</span>
                  </div>
                  <div className="absolute bottom-10 left-12 flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Nodo Suroccidente (Cali)</span>
                  </div>
                  <div className="absolute top-8 left-14 flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Salida Submarina (Barranquilla)</span>
                  </div>
                </div>

                {/* Network Node List & Maps Action (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
                    // Puntos Troncales de Interconexión
                  </h4>

                  <div className="space-y-2 font-mono text-xs">
                    {networkPoints.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Radio className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span className="text-white font-medium">{pt.city}</span>
                          <span className="text-zinc-500 text-[11px]">({pt.type})</span>
                        </div>
                        <span className="text-emerald-400 text-[10px]">{pt.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://maps.google.com/?q=4.6534,-74.0565"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#222222] bg-[#0a0a0a] text-zinc-300 font-mono text-xs hover:border-[#00D4FF]/40 hover:text-white transition-all shadow-sm group"
                    >
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
}
