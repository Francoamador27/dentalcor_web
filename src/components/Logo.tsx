import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";

/** Logo de DentalCor (mismo que el admin): ícono + "DentalCor / Software Odontológico". */
export default function Logo({ variant = "color" }: { variant?: "color" | "blanco" }) {
  const white = variant === "blanco";
  return (
    <Link href="/" className="group flex items-center gap-2.5" title={`${SITE.name} — Inicio`}>
      <Image
        src={white ? "/brand/logo-icon-blanco.png" : "/brand/logo-icon.png"}
        alt=""
        width={117}
        height={160}
        priority
        className="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
      />
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-xl font-bold ${white ? "text-white" : "text-ink"}`}>DentalCor</span>
        <span className={`text-xs font-semibold ${white ? "text-brand-100" : "text-brand-600"}`}>
          Software Odontológico
        </span>
      </span>
    </Link>
  );
}
