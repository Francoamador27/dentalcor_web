import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import ModulesTabs from "@/components/home/ModulesTabs";
import AboutSection from "@/components/home/AboutSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import CostCalculator from "@/components/CostCalculator";
import CTA from "@/components/CTA";
import BenefitsSection from "@/components/home/BenefitsSection";
import Comparison from "@/components/home/Comparison";
import FAQ from "@/components/FAQ";
import ContactBlock from "@/components/ContactBlock";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { FAQS, HOME } from "@/content/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ ...HOME.seo, path: "/" }),
  title: { absolute: HOME.seo.title },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

/** Mismo orden de secciones que la home en producción, más calculadora y FAQ. */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <HomeHero />
      <ModulesTabs />
      <AboutSection />
      <ServicesGrid />
      <CostCalculator />
      <CTA />
      <BenefitsSection />
      <Comparison />
      <FAQ items={FAQS} title={HOME.faq.title} />
      <section id="contacto" className="section bg-gradient-to-br from-slate-50 via-blue-50/40 to-white" aria-labelledby="contact-title">
        <div className="container-page">
          <p className="mb-3 text-center text-sm font-semibold text-brand-700">{HOME.contact.eyebrow}</p>
          <SectionHeading id="contact-title" title={HOME.contact.title} subtitle={HOME.contact.subtitle} />
          <div className="mt-10">
            <ContactBlock />
          </div>
        </div>
      </section>
    </>
  );
}
