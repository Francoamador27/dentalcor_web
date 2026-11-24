import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { WEB_PAGE } from "@/content/content";
import { whatsappLink } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...WEB_PAGE.seo, path: "/paginas-web" });

/** Páginas web para consultorios (PaginasWeb en producción). Mockups en HTML/CSS con datos ficticios. */
export default function PaginasWebPage() {
  const w = WEB_PAGE;
  const wa = whatsappLink(w.whatsappMessage);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-4 py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ffffff_0%,_transparent_60%)] opacity-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl animate-fade-up text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <Icon name="globe" className="h-4 w-4" />
            {w.hero.badge}
          </p>
          <h1 className="mb-6 text-4xl leading-tight font-bold text-balance text-white md:text-5xl">
            {w.hero.title}
            <span className="block text-cyan-300">{w.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">{w.hero.subtitle}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
              <Icon name="whatsapp" className="h-5 w-5" />
              {w.hero.whatsappCta}
            </a>
            <a href="#como-te-ven" className="btn btn-lg border border-white/30 bg-white/20 text-white backdrop-blur hover:bg-white/30">
              {w.hero.secondaryCta}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section bg-brand-50/50" aria-labelledby="web-benefits-title">
        <div className="container-page">
          <SectionHeading id="web-benefits-title" title={w.benefits.title} subtitle={w.benefits.subtitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {w.benefits.items.map((b) => (
              <FeatureCard key={b.title} feature={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Mockup del sitio */}
      <section className="section bg-slate-900" aria-labelledby="web-mockup-title">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="web-mockup-title" className="section-title text-white">
              {w.mockup.title}
            </h2>
            <p className="mt-3 text-white/60">{w.mockup.subtitle}</p>
          </div>
          <ClinicSiteMockup />
        </div>
      </section>

      {/* Google Search */}
      <section id="como-te-ven" className="section scroll-mt-20" aria-labelledby="web-search-title">
        <div className="container-page">
          <SectionHeading id="web-search-title" title={w.search.title} subtitle={w.search.subtitle} />
          <GoogleSearchMockup />
        </div>
      </section>

      {/* Google Maps */}
      <section className="section bg-brand-50/50" aria-labelledby="web-maps-title">
        <div className="container-page">
          <SectionHeading id="web-maps-title" title={w.maps.title} subtitle={w.maps.subtitle} />
          <GoogleMapsMockup />
        </div>
      </section>

      {/* Performance Max */}
      <section className="section relative overflow-hidden bg-slate-900" aria-labelledby="web-pmax-title">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 50%, #4285F4 0%, transparent 45%), radial-gradient(circle at 90% 20%, #EA4335 0%, transparent 40%), radial-gradient(circle at 50% 90%, #34A853 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
              <Icon name="target" className="h-4 w-4 text-yellow-400" />
              {w.pmax.badge}
            </p>
            <h2 id="web-pmax-title" className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {w.pmax.title}{" "}
              <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
                {w.pmax.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-white/60">{w.pmax.subtitle}</p>
          </div>

          <div className="mb-14 grid gap-6 md:grid-cols-2">
            {w.pmax.advantages.map((v) => (
              <div key={v.title} className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyan-300">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{v.description}</p>
              </div>
            ))}
          </div>

          <p className="mb-6 text-center text-sm text-white/50">{w.pmax.channelsTitle}</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {w.pmax.channels.map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-white p-4">
                <Icon name={c.icon} className="mb-2 h-6 w-6 text-brand-600" />
                <p className="font-bold text-ink">{c.label}</p>
                <p className="text-xs text-muted">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
              <Icon name="whatsapp" className="h-5 w-5" />
              {w.hero.whatsappCta}
            </a>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section" aria-labelledby="web-steps-title">
        <div className="container-page">
          <SectionHeading id="web-steps-title" title={w.steps.title} subtitle={w.steps.subtitle} />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {w.steps.items.map((step, i) => (
              <li key={step.title} className="reveal rounded-2xl border border-line bg-white p-6 text-center">
                <span className="bg-brand-gradient mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 font-bold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-900 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{w.cta.title}</h2>
          <p className="mb-8 text-lg text-white/80">{w.cta.subtitle}</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
            <Icon name="whatsapp" className="h-6 w-6" />
            {w.cta.button}
          </a>
        </div>
      </section>
    </>
  );
}

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-3 rounded-t-2xl bg-[#dee1e6] px-4 py-3">
      <span className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </span>
      <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 py-1.5">
        <span className="truncate text-xs font-medium text-slate-600">{url}</span>
        <span className="ml-auto shrink-0 text-[10px] font-semibold text-green-600">🔒 Seguro</span>
      </span>
    </div>
  );
}

function ClinicSiteMockup() {
  const m = WEB_PAGE.mockup;
  return (
    <div className="reveal mx-auto mt-12 max-w-4xl" aria-hidden="true">
      <BrowserBar url={m.domain} />
      <div className="overflow-hidden rounded-b-2xl border border-t-0 border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-brand-gradient grid h-9 w-9 place-items-center rounded-xl text-white">
              <Icon name="tooth" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm leading-tight font-extrabold text-ink">{m.clinicName}</p>
              <p className="text-[10px] font-semibold tracking-wide text-brand-600">{m.clinicTagline}</p>
            </div>
          </div>
          <span className="rounded-lg bg-green-500 px-3 py-1.5 text-xs font-bold text-white">Pedir turno</span>
        </div>
        <div className="bg-gradient-to-br from-brand-600 to-brand-900 px-8 py-10 text-white">
          <p className="text-2xl font-bold md:text-3xl">{m.heroTitle}</p>
          <p className="mt-2 max-w-md text-sm text-white/70">Atención personalizada con tecnología de última generación.</p>
          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1 text-xs text-white/80">4.9 · 143 reseñas en Google</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 bg-slate-50/50 px-6 py-6 sm:grid-cols-4">
          {m.services.map((s) => (
            <div key={s.name} className="rounded-xl border border-slate-100 bg-white p-3">
              <span className="text-2xl">{s.emoji}</span>
              <p className="mt-1 text-sm font-bold text-ink">{s.name}</p>
              <p className="text-[11px] text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoogleSearchMockup() {
  return (
    <div className="reveal mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl" aria-hidden="true">
      <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
        <span className="text-xl font-bold">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
        <span className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">
          <Icon name="search" className="h-4 w-4 text-slate-400" />
          {WEB_PAGE.search.query}
        </span>
      </div>
      <div className="space-y-4 p-5">
        <div className="rounded-xl border border-brand-200 bg-brand-50/40 p-4">
          <p className="text-xs text-slate-500">dra-garcia-odontologia.com.ar</p>
          <p className="text-lg text-[#1a0dab]">Consultorio García — Odontología en tu ciudad</p>
          <p className="text-sm text-slate-600">Ortodoncia, implantes y blanqueamiento. Pedí tu turno online o por WhatsApp. Atención de lunes a sábado.</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
            <Icon name="star" className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> 4,9 (143 reseñas)
          </div>
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="space-y-2 px-1 opacity-50">
            <div className="h-3 w-40 rounded bg-slate-200" />
            <div className="h-4 w-72 max-w-full rounded bg-slate-300" />
            <div className="h-3 w-full rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function GoogleMapsMockup() {
  return (
    <div className="reveal mx-auto mt-12 grid max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-2" aria-hidden="true">
      <div className="relative min-h-56 bg-[#e8eaed]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_2px,transparent_2px),linear-gradient(#fff_2px,transparent_2px)] bg-[size:48px_48px] opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <Icon name="pin" className="h-12 w-12 fill-[#EA4335] text-white" />
        </div>
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xl font-bold text-ink">Consultorio García — Odontología</p>
        <p className="flex items-center gap-1 text-sm text-slate-600">
          4,9
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          (143)
        </p>
        <p className="text-sm text-slate-500">Dentista · Abierto · Cierra a las 20:00</p>
        <div className="flex gap-2 pt-2">
          {["Cómo llegar", "Llamar", "Sitio web"].map((b) => (
            <span key={b} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-[#1a73e8]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
