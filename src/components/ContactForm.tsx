"use client";

import { useRef, type FormEvent } from "react";
import Icon from "./Icon";
import { CONTACT_PAGE } from "@/content/content";
import { mailtoLink, whatsappLink } from "@/lib/contact";

type Channel = "whatsapp" | "email";

/** Sin backend: arma el mensaje y abre WhatsApp o el cliente de correo. */
export default function ContactForm() {
  const f = CONTACT_PAGE.form;
  const channel = useRef<Channel>("whatsapp");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [`Nombre: ${get("name")}`, `Consultorio/clínica: ${get("clinic")}`];
    if (get("phone")) lines.push(`Teléfono: ${get("phone")}`);
    lines.push("", get("message"));
    const text = lines.join("\n");

    if (channel.current === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(f.subject, text);
    }
  }

  const input =
    "mt-2 w-full rounded-xl border border-line px-3 py-2.5 text-ink outline-none focus:ring-2 focus:ring-brand-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-white p-6 md:p-8">
      <h2 className="text-xl font-semibold text-ink">{f.title}</h2>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">{f.name}</label>
        <input id="name" name="name" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor="clinic" className="text-sm font-medium text-ink">{f.clinic}</label>
        <input id="clinic" name="clinic" required autoComplete="organization" className={input} />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">{f.phone}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={input} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">{f.message}</label>
        <textarea id="message" name="message" rows={4} required placeholder={f.messagePlaceholder} className={input} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <button type="submit" onClick={() => (channel.current = "whatsapp")} className="btn-whatsapp">
          <Icon name="whatsapp" className="h-5 w-5" />
          {f.sendWhatsapp}
        </button>
        <button type="submit" onClick={() => (channel.current = "email")} className="btn-secondary">
          <Icon name="mail" className="h-5 w-5" />
          {f.sendEmail}
        </button>
      </div>
      <p className="text-xs text-muted">{f.note}</p>
    </form>
  );
}
