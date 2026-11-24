import type { Tone } from "@/content/content";

/** Clases de Tailwind por tono (literales para que Tailwind las detecte). Mismos colores que el admin. */
export const TONES: Record<
  Tone,
  { text: string; bg: string; border: string; gradient: string }
> = {
  blue: { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", gradient: "from-blue-500 to-cyan-500" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", gradient: "from-emerald-500 to-teal-500" },
  violet: { text: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200", gradient: "from-purple-500 to-violet-500" },
  indigo: { text: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200", gradient: "from-indigo-500 to-blue-500" },
  orange: { text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", gradient: "from-orange-500 to-amber-500" },
  green: { text: "text-green-600", bg: "bg-green-50", border: "border-green-200", gradient: "from-green-500 to-emerald-500" },
  pink: { text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200", gradient: "from-pink-500 to-rose-500" },
  teal: { text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200", gradient: "from-teal-500 to-cyan-500" },
};
