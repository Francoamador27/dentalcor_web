import Icon from "../Icon";
import { HOME } from "@/content/content";

/** ¿Por qué elegir DentalCor? (Beneficios en producción), con testimonios y seguridad. */
export default function BenefitsSection() {
  const b = HOME.benefits;
  const t = HOME.testimonials;
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24" aria-labelledby="benefits-title">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Icon name="award" className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-bold text-white">{b.badge}</span>
          </p>
          <h2 id="benefits-title" className="mb-6 text-3xl font-bold text-white md:text-5xl">
            {b.title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">{b.subtitle}</p>
          <ul className="space-y-3">
            {b.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10">
                <Icon name="check" className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
                <span className="text-slate-200 md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {t.items.map((item) => (
            <figure key={item.name} className="reveal rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-colors hover:bg-white/15">
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="flex gap-1" role="img" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </span>
                {t.areExamples && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">{t.exampleLabel}</span>
                )}
              </div>
              <blockquote className="mb-4 text-lg leading-relaxed font-medium text-white">“{item.quote}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="bg-brand-gradient grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white">{item.initials}</span>
                <span>
                  <span className="block font-bold text-white">{item.name}</span>
                  <span className="text-sm text-slate-300">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}

          <div className="reveal rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-6 backdrop-blur-lg">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500">
                <Icon name="shield" className="h-6 w-6 text-white" />
              </span>
              <div>
                <p className="text-lg font-extrabold text-white">{b.security.title}</p>
                <p className="text-sm text-emerald-200">{b.security.subtitle}</p>
              </div>
            </div>
            <p className="leading-relaxed text-white/90">{b.security.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
