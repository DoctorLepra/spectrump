import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility function to merge Tailwind CSS class names with clsx and tailwind-merge.
 * Prevents class collision and allows clean conditional class composition.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats Colombian currency amounts into standard Colombian Peso format (COP)
 */
export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats data bandwidth and energy metrics with monospace-friendly units
 */
export function formatMetric(value: number, unit: string): string {
  return `${new Intl.NumberFormat("es-CO").format(value)} ${unit}`;
}
