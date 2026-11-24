import ContactForm from "./ContactForm";
import Icon from "./Icon";
import { SITE } from "@/config/site";
import { CONTACT_PAGE } from "@/content/content";
import { whatsappLink } from "@/lib/contact";

/** Datos de contacto + formulario (WhatsApp / mailto). Se usa en la home y en /contacto. */
export default function ContactBlock() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
      <div className="space-y-6">
        <div className="bg-brand-gradient rounded-2xl p-6 text-white md:p-8">
          <p className="text-lg font-semibold">La forma más rápida</p>
          <p className="mt-2 text-blue-100">{SITE.whatsappDisplay}</p>
          <a
            href={whatsappLink(CONTACT_PAGE.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-lg mt-6 w-full"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {CONTACT_PAGE.whatsappCta}
          </a>
        </div>
        <ul className="space-y-4 rounded-2xl border border-line bg-white p-6 md:p-8">
          <li className="flex items-center gap-3 text-muted">
            <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-600" />
            <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-700 hover:underline">
              {SITE.email}
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-600" />
            <a href={`tel:${SITE.phone}`} className="hover:text-ink">
              {SITE.whatsappDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-600" />
            {SITE.address}
          </li>
          <li className="flex items-center gap-3 text-muted">
            <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-600" />
            {SITE.businessHours}
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
}
