import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover-cyan" | "hover-solar" | "glass";
}

export function Card({
  className,
  variant = "hover-cyan",
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-[#111111] border border-[#222222] rounded-xl",
    "hover-cyan":
      "bg-[#111111] border border-[#222222] rounded-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.12)]",
    "hover-solar":
      "bg-[#111111] border border-[#222222] rounded-xl transition-all duration-300 hover:border-[#FFB703]/40 hover:shadow-[0_0_25px_rgba(255,183,3,0.12)]",
    glass:
      "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
