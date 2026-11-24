import Link from "next/link";
import Icon from "../Icon";
import YouTubeFacade from "../YouTubeFacade";
import { HOME } from "@/content/content";

/** Quiénes somos con video (sección "ComoComprar" en la home de producción). */
export default function AboutSection() {
  const a = HOME.about;
  return (
    <section id="quienes-somos" className="section bg-white pt-4 md:pt-8" aria-labelledby="about-title">
      <div className="container-page">
        <div className="mb-10 text-center">
          <h2 id="about-title" className="section-title text-brand-600">
            {a.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-brand-600" />
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="reveal flex flex-col gap-4">
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md">
              <YouTubeFacade videoId={a.youtubeId} title={a.videoTitle} />
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 leading-relaxed text-muted shadow-sm">
              {a.videoText.map((p) => (
                <p key={p} className="mb-2 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="reveal rounded-2xl border border-slate-200 p-6 shadow-sm md:ml-6">
            <span className="mb-4 inline-block h-2 w-16 rounded-full bg-brand-600" />
            <h3 className="mb-3 text-2xl font-bold text-ink">{a.cardTitle}</h3>
            {a.cardText.map((p) => (
              <p key={p} className="mb-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <ul className="mt-2 grid gap-3 sm:grid-cols-2">
              {a.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-brand-600" />
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/quienes-somos" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-600 hover:underline">
              {a.more}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
