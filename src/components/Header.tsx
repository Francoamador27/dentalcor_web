"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/config/site";
import { whatsappLink } from "@/lib/contact";

const WA_MESSAGE = "Hola, quiero saber más sobre su software odontológico";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur-lg">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700 aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={whatsappLink(WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-3"
            aria-label="Escribinos por WhatsApp"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
          </a>
          {/* /auth/login lo resuelve el admin existente: <a> normal, no <Link>. */}
          <a href={SITE.loginUrl} className="btn-ghost">
            Ingresar
          </a>
          <a href={SITE.signupUrl} className="btn-primary">
            Probar gratis
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="animate-fade-in border-t border-line bg-white xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Principal móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="rounded-lg px-3 py-3 font-medium text-ink hover:bg-brand-50 aria-[current=page]:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={SITE.loginUrl} className="btn-secondary">
                Ingresar
              </a>
              <a href={SITE.signupUrl} className="btn-primary">
                Probar gratis
              </a>
            </div>
            <a href={whatsappLink(WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2">
              <Icon name="whatsapp" className="h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
