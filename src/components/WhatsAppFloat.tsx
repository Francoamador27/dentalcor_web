import Icon from "./Icon";
import { whatsappLink } from "@/lib/contact";

const MESSAGE = "Hola, quiero saber más sobre DentalCor Software";

/** Botón flotante de WhatsApp (mismo estilo que las landings de clínicas del admin). Sin JavaScript. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed right-5 z-50 flex items-center gap-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))]"
    >
      <span className="pointer-events-none hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg ring-1 ring-line transition-all duration-200 group-hover:opacity-100 md:block">
        ¿Hablamos por WhatsApp?
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </span>
    </a>
  );
}
