import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "gradient" | "outline" | "ghost" | "secondary" | "solar";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  external?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  gradient:
    "bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:brightness-110 active:scale-[0.98] border-0",
  outline:
    "border border-[#222222] bg-[#111111]/80 backdrop-blur-sm text-zinc-300 hover:border-[#00D4FF]/60 hover:text-white hover:bg-[#161616] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  secondary:
    "bg-[#161616] text-zinc-200 border border-[#222222] hover:bg-[#222222] hover:text-white active:scale-[0.98]",
  solar:
    "bg-gradient-to-r from-[#FB8500] to-[#FFB703] text-black font-semibold shadow-[0_0_20px_rgba(255,183,3,0.25)] hover:shadow-[0_0_30px_rgba(255,183,3,0.45)] hover:brightness-110 active:scale-[0.98]",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
  icon: "w-10 h-10 p-0 rounded-lg justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "gradient",
      size = "md",
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      external = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
