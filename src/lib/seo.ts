import type { Metadata } from "next";
import { SITE } from "@/config/site";

type PageSeo = { title: string; description: string; path: string };

/** Imagen Open Graph estática (public/og.png, 1200×630). */
export const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: SITE.name };

/** Metadata + Open Graph consistentes para cada página. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] },
  };
}

/** Serializa JSON-LD escapando "<" para evitar inyección de HTML. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
