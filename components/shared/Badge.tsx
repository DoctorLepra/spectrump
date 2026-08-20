import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "blue" | "solar" | "outline" | "subtle";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  pulse?: boolean;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, { badge: string; dot: string }> = {
  cyan: {
    badge:
      "border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.15)]",
    dot: "bg-[#00D4FF]",
  },
  blue: {
    badge:
      "border-[#0066FF]/40 bg-[#0066FF]/10 text-[#0066FF] shadow-[0_0_12px_rgba(0,102,255,0.15)]",
    dot: "bg-[#0066FF]",
  },
  solar: {
    badge:
      "border-[#FFB703]/30 bg-[#FFB703]/10 text-[#FFB703] shadow-[0_0_12px_rgba(255,183,3,0.15)]",
    dot: "bg-[#FFB703]",
  },
  outline: {
    badge: "border-[#222222] bg-[#111111]/90 text-zinc-300",
    dot: "bg-zinc-400",
  },
  subtle: {
    badge: "border-white/10 bg-white/5 text-zinc-300",
    dot: "bg-zinc-300",
  },
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, { badge: string; dot: string }> = {
  sm: {
    badge: "text-[10px] px-2 py-0.5 gap-1.5",
    dot: "w-1.5 h-1.5",
  },
  md: {
    badge: "text-xs px-2.5 py-1 gap-2",
    dot: "w-2 h-2",
  },
  lg: {
    badge: "text-sm px-3.5 py-1.5 gap-2.5",
    dot: "w-2.5 h-2.5",
  },
};

export function Badge({
  className,
  children,
  variant = "cyan",
  size = "md",
  dot = false,
  pulse = true,
  ...props
}: BadgeProps) {
  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono font-medium tracking-wider uppercase border transition-colors select-none",
        currentVariant.badge,
        currentSize.badge,
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "rounded-full inline-block flex-shrink-0",
            currentVariant.dot,
            currentSize.dot,
            pulse && "animate-pulse"
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
