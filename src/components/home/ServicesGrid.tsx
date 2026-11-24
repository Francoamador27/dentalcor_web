import Link from "next/link";
import Icon from "../Icon";
import { HOME } from "@/content/content";
import { whatsappLink } from "@/lib/contact";

/** Grilla de módulos (ServiciosFront en producción). */
export default function ServicesGrid() {
  const s = HOME.services;
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white" aria-labelledby="services-title">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            {s.eyebrow}
          </p>
          <h2 id="services-title" className="section-title">
            {s.title}
            <span className="text-brand-gradient mt-1 block">{s.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted">{s.subtitle}</p>
          <div className="bg-brand-gradient mx-auto mt-6 h-1 w-32 rounded-full" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item) => (
            <Link
              key={item.title}
              href="/funciones"
              className="reveal group relative flex flex-col rounded-2xl border border-slate-100 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-2xl"
            >
              {item.highlight && (
                <span className="mb-4 self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{item.highlight}</span>
              )}
              <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
                Ver detalles
                <Icon name="chevron" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href={whatsappLink(s.ctaMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
            <Icon name="rocket" className="h-5 w-5" />
            {s.cta}
          </a>
          <p className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted">
            {s.footnote.map((f) => (
              <strong key={f} className="font-semibold">
                {f}
              </strong>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
