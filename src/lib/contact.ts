import { SITE } from "@/config/site";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function formatARS(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
