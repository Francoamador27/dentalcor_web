import type { Tone } from "@/content/content";

/**
 * Clases de Tailwind por tono (literales para que Tailwind las detecte). Mismos colores que el admin.
 * El texto usa el tono -700 para que tenga contraste suficiente sobre los fondos -50 (WCAG AA).
 */
export const TONES: Record<
  Tone,
  { text: string; bg: string; border: string; gradient: string }
> = {
  blue: { text: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200", gradient: "from-blue-500 to-cyan-500" },
  emerald: { text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", gradient: "from-emerald-500 to-teal-500" },
  violet: { text: "text-violet-700", bg: "bg-violet-50", border: "border-violet-200", gradient: "from-purple-500 to-violet-500" },
  indigo: { text: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200", gradient: "from-indigo-500 to-blue-500" },
  orange: { text: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200", gradient: "from-orange-500 to-amber-500" },
  green: { text: "text-green-700", bg: "bg-green-50", border: "border-green-200", gradient: "from-green-500 to-emerald-500" },
  pink: { text: "text-pink-700", bg: "bg-pink-50", border: "border-pink-200", gradient: "from-pink-500 to-rose-500" },
  teal: { text: "text-teal-700", bg: "bg-teal-50", border: "border-teal-200", gradient: "from-teal-500 to-cyan-500" },
};
