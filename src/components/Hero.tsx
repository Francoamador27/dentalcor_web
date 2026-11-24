import Link from "next/link";
import Icon from "./Icon";
import { SITE } from "@/config/site";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: string;
  secondaryCta?: { label: string; href: string };
  note?: string;
  showPreview?: boolean;
};

export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, note, showPreview }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div
        className={`container-page grid items-center gap-12 ${
          showPreview ? "py-16 md:py-24 lg:grid-cols-2" : "py-14 text-center md:py-20"
        }`}
      >
        <div className={`animate-fade-up space-y-6 ${showPreview ? "" : "mx-auto max-w-3xl"}`}>
          {eyebrow && (
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-100">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-balance text-ink md:text-5xl">{title}</h1>
          <p className={`text-lg text-pretty text-muted ${showPreview ? "max-w-xl" : "mx-auto max-w-2xl"}`}>{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className={`flex flex-col gap-3 sm:flex-row ${showPreview ? "" : "justify-center"}`}>
              {primaryCta && (
                <a href={SITE.signupUrl} className="btn-primary btn-lg">
                  {primaryCta}
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary btn-lg">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {note && <p className="text-sm text-muted">{note}</p>}
        </div>

        {showPreview && <AgendaPreview />}
      </div>
    </section>
  );
}

/** Ilustración liviana de una agenda (HTML/CSS, sin imágenes). */
function AgendaPreview() {
  const rows = [
    { time: "09:00", name: "Control", color: "bg-brand-500", status: "Confirmado" },
    { time: "09:30", name: "Limpieza", color: "bg-amber-500", status: "Turno enviado por WhatsApp" },
    { time: "10:30", name: "Ortodoncia", color: "bg-violet-500", status: "Confirmado" },
    { time: "11:00", name: "Extracción", color: "bg-brand-500", status: "Turno enviado por WhatsApp" },
  ];
  return (
    <div className="animate-fade-up [animation-delay:150ms]" aria-hidden="true">
      <div className="rounded-2xl bg-white p-5 shadow-xl shadow-brand-900/10 ring-1 ring-line">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold text-ink">Agenda de hoy</p>
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">3 profesionales</span>
        </div>
        <ul className="space-y-2.5">
          {rows.map((r) => (
            <li key={r.time} className="flex items-center gap-3 rounded-xl border border-line p-3">
              <span className="w-12 text-sm font-medium text-muted">{r.time}</span>
              <span className={`h-8 w-1 rounded-full ${r.color}`} />
              <span className="flex-1 text-sm font-medium text-ink">{r.name}</span>
              <span className="hidden text-xs text-muted sm:inline">{r.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
