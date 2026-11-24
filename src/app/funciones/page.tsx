import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";
import { FEATURES, FEATURES_PAGE, MODULES } from "@/content/content";
import { TONES } from "@/lib/tones";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...FEATURES_PAGE.seo, path: "/funciones" });

export default function FuncionesPage() {
  return (
    <>
      <Hero title={FEATURES_PAGE.title} subtitle={FEATURES_PAGE.subtitle} primaryCta="Probar 30 días gratis" />

      <section className="section pt-4 md:pt-8" aria-labelledby="main-title">
        <div className="container-page">
          <SectionHeading id="main-title" title={FEATURES_PAGE.mainTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50" aria-labelledby="modules-detail-title">
        <div className="container-page">
          <SectionHeading id="modules-detail-title" title={FEATURES_PAGE.modulesTitle} subtitle={FEATURES_PAGE.modulesSubtitle} />

          <nav className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Ir a un módulo">
            {MODULES.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-brand-500/40 hover:text-brand-600"
              >
                <Icon name={m.icon} className="h-3.5 w-3.5" />
                {m.title}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-8">
            {MODULES.map((m) => {
              const t = TONES[m.tone];
              return (
                <article key={m.id} id={m.id} className={`reveal scroll-mt-24 overflow-hidden rounded-2xl border-2 bg-white ${t.border}`}>
                  <div className={`bg-gradient-to-r ${t.gradient} px-6 py-6 md:px-8`}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                        <Icon name={m.icon} className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white md:text-2xl">{m.title}</h3>
                        <p className="text-sm text-white/80">{m.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.4fr] md:p-8">
                    <p className="leading-relaxed text-muted">{m.description}</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {m.features.map((f) => (
                        <li key={f} className={`flex items-start gap-2 rounded-xl border p-3 text-sm ${t.bg} ${t.border}`}>
                          <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${t.text}`} />
                          <span className="text-slate-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
