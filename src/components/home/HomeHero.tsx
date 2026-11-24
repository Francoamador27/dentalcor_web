import Icon from "../Icon";
import DashboardMockup from "./DashboardMockup";
import { SITE } from "@/config/site";
import { HOME } from "@/content/content";
import { whatsappLink } from "@/lib/contact";
import { TONES } from "@/lib/tones";

/** Hero de la home (equivalente a FeatureSection en producción). */
export default function HomeHero() {
  const h = HOME.hero;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-14 pt-14 pb-16 lg:grid-cols-2 lg:pt-20 lg:pb-20">
        <div className="animate-fade-up space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 shadow-md backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-sm font-bold text-slate-800">{h.badge}</span>
          </p>

          <div>
            <h1 className="mb-5 text-4xl leading-[1.1] font-bold tracking-tight text-balance text-ink lg:text-5xl xl:text-6xl">
              {h.title} <span className="text-brand-gradient">{h.titleHighlight}</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted lg:text-xl">
              {h.subtitle} <strong className="text-slate-800">{h.subtitleStrong}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {h.outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <span className={`mb-3 grid h-9 w-9 place-items-center rounded-xl ${TONES[o.tone].bg} ${TONES[o.tone].text}`}>
                  <Icon name={o.icon} className="h-4 w-4" />
                </span>
                <p className="mb-1 text-sm font-extrabold text-ink">{o.title}</p>
                <p className="text-xs leading-relaxed text-slate-500">{o.description}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-xs font-bold tracking-widest text-slate-500 uppercase">{h.pillsTitle}</p>
            <ul className="flex flex-wrap gap-2">
              {h.pills.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-brand-500/40 hover:text-brand-600"
                >
                  <Icon name={p.icon} className="h-3.5 w-3.5" />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-brand-gradient absolute -inset-0.5 rounded-2xl opacity-40 blur" aria-hidden="true" />
            <div className="bg-brand-gradient relative flex items-center justify-between gap-4 rounded-2xl px-6 py-5 text-white">
              <div className="space-y-1">
                <p className="flex flex-wrap items-center gap-2">
                  <Icon name="rocket" className="h-5 w-5 text-yellow-300" />
                  <span className="text-lg font-extrabold">{h.offerTitle}</span>
                  <span className="rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-extrabold text-slate-900">{h.offerBadge}</span>
                </p>
                <p className="text-sm text-white/80">{h.offerText}</p>
              </div>
              <Icon name="check" className="h-8 w-8 shrink-0 text-white/40" />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={SITE.signupUrl} className="btn-primary btn-lg">
              {h.primaryCta}
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a href={whatsappLink(h.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
              <Icon name="whatsapp" className="h-5 w-5" />
              {h.whatsappCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {h.trust.map((t) => (
              <span key={t.label} className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur">
                <Icon name={t.icon} className={`h-4 w-4 ${TONES[t.tone].text}`} />
                <span className="text-xs font-bold text-slate-700">{t.label}</span>
              </span>
            ))}
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-xs font-bold text-slate-600">{h.rating}</span>
            </span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
