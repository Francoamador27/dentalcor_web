import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page max-w-2xl text-center">
        <p className="text-sm font-bold tracking-widest text-brand-700 uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">Esta página no existe</h1>
        <p className="mt-4 text-lg text-muted">Puede que el link esté mal escrito o que la página ya no esté disponible.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary btn-lg">
            Ir al inicio
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
          <a href={whatsappLink("Hola, quiero saber más sobre DentalCor Software")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
            <Icon name="whatsapp" className="h-5 w-5" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
