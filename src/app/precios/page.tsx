import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { FAQS, PLANS, PRICING_PAGE } from "@/content/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...PRICING_PAGE.seo, path: "/precios" });

export default function PreciosPage() {
  return (
    <>
      <Hero title={PRICING_PAGE.title} subtitle={PRICING_PAGE.subtitle} />

      <section className="section pt-4 md:pt-8">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl bg-amber-50 p-5 text-center ring-1 ring-amber-200">
            <p className="font-semibold text-amber-900">{PRICING_PAGE.founder.badge}</p>
            <p className="mt-1 text-sm text-amber-900/80">{PRICING_PAGE.founder.text}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PLANS.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">{PRICING_PAGE.footnote}</p>
        </div>
      </section>

      <FAQ items={FAQS} title="Preguntas frecuentes" />
      <CTA />
    </>
  );
}
