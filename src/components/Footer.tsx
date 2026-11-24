import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/config/site";
import { FOOTER } from "@/content/content";
import { whatsappLink } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[2fr_1fr_1.3fr]">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted">{FOOTER.tagline}</p>
        </div>
        <nav aria-label="Pie de página" className="space-y-2 text-sm">
          <p className="font-semibold text-ink">Sitio</p>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="block text-muted hover:text-ink">
              {link.label}
            </Link>
          ))}
          <a href={SITE.loginUrl} className="block text-muted hover:text-ink">
            Ingresar
          </a>
        </nav>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-ink">Contacto</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-ink">
            WhatsApp {SITE.whatsappDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="block text-muted hover:text-ink">
            {SITE.email}
          </a>
          <p className="text-muted">{SITE.address}</p>
          <p className="text-muted">{SITE.businessHours}</p>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {FOOTER.copyright}
      </div>
    </footer>
  );
}
