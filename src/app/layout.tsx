import type { Metadata, Viewport } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/config/site";
import { HOME } from "@/content/content";
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
  // App instalable (PWA): el manifest lo sirve el admin (vía el Worker) y su
  // start_url es /admin-dash. Así, aunque alguien agregue DentalCor a la
  // pantalla de inicio desde esta portada, el ícono abre la app y no la web.
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "DentalCor", statusBarStyle: "default" },
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${comfortaa.variable} h-full antialiased`}>
      <head>
        {/* Si la web se abre como app instalada (ícono en la pantalla de inicio),
            ir directo al panel: un ícono agregado desde esta portada abría la
            web comercial en vez de la app. Corre antes de pintar la página. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              // Freno anti-bucle: como mucho una redirección cada 15 s por sesión.
              "try{if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){var k='dc_pwa_redirect',t=Number(sessionStorage.getItem(k)||0);if(Date.now()-t>15000){sessionStorage.setItem(k,String(Date.now()));location.replace('/admin-dash')}}}catch(e){}",
          }}
        />
      </head>
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
