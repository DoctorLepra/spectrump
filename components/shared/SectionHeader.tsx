import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge, BadgeProps } from "./Badge";

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: string;
  badgeVariant?: BadgeProps["variant"];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  gradientHighlight?: string;
}

export function SectionHeader({
  className,
  badge,
  badgeVariant = "cyan",
  title,
  subtitle,
  align = "center",
  ...props
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignmentClasses[align],
        className
      )}
      {...props}
    >
      {badge && (
        <Badge
          variant={badgeVariant}
          size="sm"
          dot
          className="mb-4"
        >
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-zinc-400 font-mono leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
