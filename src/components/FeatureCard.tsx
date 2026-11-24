import Icon from "./Icon";
import type { Feature } from "@/content/content";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="reveal h-full rounded-2xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-900/5">
      <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
        <Icon name={feature.icon} />
      </span>
      <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
      <p className="mt-2 text-muted">{feature.description}</p>
      {feature.bullets && (
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {feature.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
