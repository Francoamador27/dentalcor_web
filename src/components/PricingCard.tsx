import Icon from "./Icon";
import { SITE } from "@/config/site";
import { PRICING_PAGE, type Plan } from "@/content/content";
import { formatARS } from "@/lib/contact";

export default function PricingCard({ plan }: { plan: Plan }) {
  const hl = plan.highlighted;
  return (
    <article
      className={`reveal relative flex h-full flex-col rounded-2xl bg-white p-6 md:p-8 ${
        hl ? "shadow-xl shadow-brand-900/10 ring-2 ring-brand-600" : "ring-1 ring-line"
      }`}
    >
      {hl && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          Más elegido
        </span>
      )}
      <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted">{plan.description}</p>

      <div className="mt-6">
        <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
          {PRICING_PAGE.founder.badge}
        </span>
        <p className="mt-2 flex flex-wrap items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight text-ink">{formatARS(plan.founderPrice)}</span>
          <span className="text-sm text-muted">{PRICING_PAGE.perMonth}</span>
        </p>
        <p className="mt-1 text-sm text-muted">
          {PRICING_PAGE.regularPrice}: <s>{formatARS(plan.price)}</s>
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm text-ink">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            {f}
          </li>
        ))}
      </ul>

      <a href={SITE.signupUrl} className={`mt-8 ${hl ? "btn-primary" : "btn-secondary"}`}>
        {PRICING_PAGE.cta}
      </a>
    </article>
  );
}
