import type { Metadata, Viewport } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/config/site";
import { HOME, PLANS } from "@/content/content";
import { OG_IMAGE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["700"], variable: "--font-comfortaa", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: HOME.seo.title, template: `%s | ${SITE.name}` },
  description: HOME.seo.description,
  applicationName: SITE.name,
  keywords: [
    "software odontológico",
    "sistema para consultorio odontológico",
    "agenda odontológica",
    "odontograma",
    "historia clínica odontológica",
    "turnos dentista",
    "Argentina",
  ],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: "/",
    title: HOME.seo.title,
    description: HOME.seo.description,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

const prices = PLANS.map((p) => p.founderPrice);

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Software de gestión odontológica",
  operatingSystem: "Web",
  url: SITE.url,
  inLanguage: "es-AR",
  description: HOME.seo.description,
  areaServed: { "@type": "Country", name: "Argentina" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "ARS",
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
    offerCount: PLANS.length,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${comfortaa.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={softwareJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
