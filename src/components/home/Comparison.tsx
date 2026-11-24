import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { HOME } from "@/content/content";

/** Antes y después (Comparacion en producción). */
export default function Comparison() {
  const c = HOME.comparison;
  return (
    <section className="section" aria-labelledby="comparison-title">
      <div className="container-page">
        <SectionHeading id="comparison-title" title={c.title} subtitle={c.subtitle} />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="reveal rounded-3xl border-2 border-red-200/50 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-500 text-2xl" aria-hidden="true">
                😰
              </span>
              <h3 className="text-2xl font-bold text-ink">{c.before.title}</h3>
            </div>
            <ul className="space-y-4">
              {c.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-500 text-white">
                    <Icon name="close" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative overflow-hidden rounded-3xl border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-lg md:p-8">
            <Icon name="sparkles" className="absolute top-4 right-4 h-8 w-8 animate-pulse text-yellow-500" />
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500 text-2xl" aria-hidden="true">
                🚀
              </span>
              <h3 className="text-2xl font-bold text-ink">{c.after.title}</h3>
            </div>
            <ul className="space-y-4">
              {c.after.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
