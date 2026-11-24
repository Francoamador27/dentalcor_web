import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import YouTubeFacade from "@/components/YouTubeFacade";
import { SITE } from "@/config/site";
import { ABOUT_PAGE, HOME } from "@/content/content";
import { whatsappLink } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...ABOUT_PAGE.seo, path: "/quienes-somos" });

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/brand/logo-dentalcor.png`,
  description: ABOUT_PAGE.seo.description,
  email: SITE.email,
  address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    areaServed: "AR",
    availableLanguage: ["Spanish"],
  },
};

export default function QuienesSomosPage() {
  const a = ABOUT_PAGE;
  return (
    <>
      <JsonLd data={organizationJsonLd} />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-page py-14 text-center md:py-20">
          <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
            {a.eyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance text-ink md:text-5xl">
            {a.title} <span className="text-brand-gradient">{a.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-pretty text-muted">{a.subtitle}</p>
        </div>
      </section>

      <section className="section pt-4 md:pt-8">
        <div className="container-page grid gap-8 md:grid-cols-5">
          <div className="space-y-6 md:col-span-3">
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md">
              <YouTubeFacade videoId={HOME.about.youtubeId} title={HOME.about.videoTitle} />
            </div>

            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-ink">{a.mission.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{a.mission.text}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[
                  { ...a.services, icon: "code" as const },
                  { ...a.why, icon: "award" as const },
                ].map((block) => (
                  <div key={block.title} className="rounded-xl bg-slate-50 p-5">
                    <h3 className="flex items-center gap-2 font-semibold text-ink">
                      <Icon name={block.icon} className="h-5 w-5 text-brand-600" />
                      {block.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink(a.buttons.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <Icon name="whatsapp" className="h-5 w-5" />
                  {a.buttons.whatsapp}
                </a>
                <a href={`tel:${SITE.phone}`} className="btn-secondary">
                  <Icon name="phone" className="h-5 w-5" />
                  {a.buttons.call}
                </a>
                <Link href="/contacto" className="btn-secondary">
                  <Icon name="pin" className="h-5 w-5" />
                  {a.buttons.contact}
                </Link>
              </div>
            </article>
          </div>

          <aside className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-ink">{a.company.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-3">
                  <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-600" />
                  <strong className="text-ink">{SITE.address}</strong>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-600" />
                  <strong className="text-ink">{SITE.businessHours}</strong>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
                    WhatsApp: {SITE.whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href={`mailto:${SITE.email}`} className="text-brand-700 hover:underline">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-ink">{a.innovation.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{a.innovation.text}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {a.innovation.tags.map((tag) => (
                  <li key={tag} className="rounded-lg bg-brand-50 px-3 py-2 text-brand-800">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="bg-brand-gradient rounded-3xl px-6 py-12 text-center text-white md:px-12">
            <h2 className="mx-auto max-w-3xl text-2xl font-bold text-balance md:text-3xl">{a.cta.title}</h2>
            <p className="mt-3 text-blue-100">{a.cta.subtitle}</p>
            <a href={whatsappLink(a.buttons.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg mt-8">
              <Icon name="whatsapp" className="h-5 w-5" />
              {a.buttons.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
