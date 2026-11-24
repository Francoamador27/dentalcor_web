import type { Faq } from "@/content/content";

/** Acordeón nativo con <details>: sin JavaScript. */
export default function FAQ({ items, title }: { items: Faq[]; title: string }) {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container-page max-w-3xl">
        <h2 id="faq-title" className="section-title text-center">
          {title}
        </h2>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
          {items.map((item) => (
            <details key={item.question} className="group p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                {item.question}
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
