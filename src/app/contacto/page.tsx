import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import { CONTACT_PAGE } from "@/content/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...CONTACT_PAGE.seo, path: "/contacto" });

export default function ContactoPage() {
  return (
    <>
      <Hero title={CONTACT_PAGE.title} subtitle={CONTACT_PAGE.subtitle} />
      <section className="section pt-4 md:pt-8">
        <div className="container-page">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
