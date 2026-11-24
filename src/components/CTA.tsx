import Icon from "./Icon";
import { SITE } from "@/config/site";
import { HOME } from "@/content/content";
import { whatsappLink } from "@/lib/contact";

/** CTA final (Cta en producción). */
export default function CTA() {
  const c = HOME.cta;
  return (
    <section className="section">
      <div className="container-page max-w-5xl">
        <div className="reveal relative">
          <div className="bg-brand-gradient absolute -inset-2 rounded-[2rem] opacity-60 blur-2xl" aria-hidden="true" />
          <div className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-2xl md:p-12">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur">
                <Icon name="rocket" className="h-4 w-4 text-white" />
                <span className="text-sm font-bold text-white">{c.badge}</span>
              </p>
              <h2 className="mb-4 text-3xl font-bold text-balance text-white md:text-5xl">{c.title}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-blue-100 md:text-2xl">{c.subtitle}</p>

              <a href={SITE.signupUrl} className="btn btn-lg bg-white text-brand-600 shadow-2xl hover:bg-slate-50">
                <Icon name="rocket" className="h-5 w-5" />
                {c.button}
                <Icon name="arrow" className="h-5 w-5" />
              </a>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-blue-100">
                {c.checks.map((check) => (
                  <li key={check} className="flex items-center gap-2 font-semibold">
                    <Icon name="check" className="h-5 w-5" />
                    {check}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-blue-100">
                {c.whatsappLabel}{" "}
                <a
                  href={whatsappLink(c.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-white underline transition-colors hover:text-yellow-300"
                >
                  {SITE.whatsappDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
