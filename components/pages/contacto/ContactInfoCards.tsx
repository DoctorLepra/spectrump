"use client";

import React from "react";
import { FileText, Briefcase, Server, MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { DIRECT_CHANNELS, HEADQUARTERS_LOCATION } from "@/lib/data/contactData";
import { Badge } from "@/components/shared/Badge";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";

const channelIcons = {
  FileText: FileText,
  Briefcase: Briefcase,
  Server: Server,
};

export function ContactInfoCards() {
  return (
    <div className="space-y-6">
      {/* Sede Principal Card */}
      <SpotlightCard className="p-8">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="cyan" size="sm" dot>
            SEDE PRINCIPAL BOGOTÁ
          </Badge>
          <div className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
            <MapPin className="w-4 h-4" />
          </div>
        </div>

        <h3 className="text-xl font-bold font-sans text-white mb-2">
          Oficinas Corporativas & Centro de Ingeniería
        </h3>

        <div className="space-y-3 font-mono text-xs text-zinc-300 mb-6">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
            <span>{HEADQUARTERS_LOCATION.address}, {HEADQUARTERS_LOCATION.city}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
            <span>PBX Bogotá: {HEADQUARTERS_LOCATION.phonePBX}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
            <span>Línea Gratuita Nacional: {HEADQUARTERS_LOCATION.tollFreeNational}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>WhatsApp Comercial: {HEADQUARTERS_LOCATION.whatsapp}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
            <a href={`mailto:${HEADQUARTERS_LOCATION.emailGeneral}`} className="hover:text-[#00D4FF] transition-colors">
              {HEADQUARTERS_LOCATION.emailGeneral}
            </a>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-500 pt-1">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Lunes a Viernes de 8:00 AM a 6:00 PM (Hora Colombia)</span>
          </div>
        </div>
      </SpotlightCard>

      {/* 3 Specialized Channels Grid */}
      <div className="grid grid-cols-1 gap-4">
        {DIRECT_CHANNELS.map((ch) => {
          const IconComp = channelIcons[ch.iconName as keyof typeof channelIcons] || FileText;
          return (
            <SpotlightCard
              key={ch.id}
              className="p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-semibold text-[#00D4FF]">
                    {ch.badge}
                  </span>
                  <IconComp className="w-4 h-4 text-zinc-400" />
                </div>

                <h4 className="text-sm font-bold font-sans text-white mb-1">
                  {ch.department}
                </h4>

                <p className="text-xs text-zinc-400 font-sans mb-3">
                  {ch.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1e1e1e] flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <a
                  href={`mailto:${ch.email}`}
                  className="text-[#00D4FF] hover:underline"
                >
                  {ch.email}
                </a>
                <span className="text-zinc-400">{ch.phone}</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
