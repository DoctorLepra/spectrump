"use client";

import React from "react";
import { TEAM_MEMBERS } from "@/lib/data/teamData";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProfileCard } from "./ProfileCard";
import { FadeContent } from "@/components/react-bits/fade-content";

export function TeamGrid() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.6}>
          <SectionHeader
            badge="// PERFILES Y ESPECIALIDADES"
            badgeVariant="cyan"
            title="Liderazgo Ejecutivo, Legal y de Ingeniería"
            subtitle="Profesionales con amplia trayectoria en contratación pública SECOP II, diseño de redes de fibra óptica y sistemas solares fotovoltaicos."
            align="center"
          />
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <FadeContent key={member.id} delay={0.1 + idx * 0.08} duration={0.5}>
              <ProfileCard member={member} />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
