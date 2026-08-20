"use client";

import React from "react";
import { Linkedin, Mail, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { TeamMember } from "@/lib/data/teamData";
import { Badge } from "@/components/shared/Badge";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";

interface ProfileCardProps {
  member: TeamMember;
}

export function ProfileCard({ member }: ProfileCardProps) {
  return (
    <SpotlightCard className="p-8 flex flex-col justify-between group">
      <div>
        {/* Header: Avatar Placeholder & Department */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0066FF] to-[#00D4FF] p-[1px] shadow-[0_0_20px_rgba(0,212,255,0.25)]">
            <div className="w-full h-full bg-[#111111] rounded-[15px] flex items-center justify-center font-mono text-lg font-bold text-[#00D4FF]">
              {member.avatarPlaceholder}
            </div>
          </div>

          <Badge variant="cyan" size="sm" dot>
            {member.department}
          </Badge>
        </div>

        {/* Name & Role */}
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-1 group-hover:text-[#00D4FF] transition-colors">
          {member.name}
        </h3>

        <div className="font-mono text-xs text-[#00D4FF] font-semibold mb-3">
          {member.role}
        </div>

        {/* Academic Credentials */}
        <div className="flex items-start gap-2 text-xs font-mono text-zinc-400 bg-white/[0.03] p-3 rounded-lg border border-white/5 mb-4">
          <Award className="w-4 h-4 text-[#FFB703] flex-shrink-0 mt-0.5" />
          <span>{member.credentials}</span>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Specialties Tags (Monospace Badges) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {member.specialties.map((spec, idx) => (
            <span
              key={idx}
              className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#111111] border border-[#222222] text-zinc-300 group-hover:border-[#00D4FF]/30 transition-colors"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Certifications & Contact Channels */}
      <div className="pt-4 border-t border-[#1e1e1e] flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{member.certifications[0]}</span>
        </div>

        <div className="flex items-center gap-2">
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#161616] flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.emailContact && (
            <a
              href={`mailto:${member.emailContact}`}
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#161616] flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
              aria-label={`Email de ${member.name}`}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
