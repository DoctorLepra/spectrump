"use client";

import React from "react";
import { HERO_METRICS } from "@/lib/data/servicesData";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ShinyText } from "@/components/react-bits/shiny-text";

export function MetricsTicker() {
  return (
    <section className="w-full bg-[#0a0a0a] border-y border-[#1e1e1e] py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_METRICS.map((metric, idx) => (
            <FadeContent key={metric.id} delay={0.05 * idx} duration={0.4}>
              <SpotlightCard
                className="p-5 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#00D4FF] transition-colors">
                      {metric.value}
                    </span>
                    {metric.trend && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">
                        {metric.trend}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-sm font-sans font-semibold text-zinc-200">
                    {metric.label}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-zinc-500">
                    {metric.detail}
                  </p>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
