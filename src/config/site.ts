/**
 * Configuración general del sitio.
 * Editá acá el dominio, los datos de contacto y los links al admin.
 */
export const SITE = {
  name: "DentalCor Software",
  shortName: "DentalCor",
  // Dominio público (sin barra final). Lo comparten esta web y el admin, repartidos por el Worker de cloudflare-router/.
  url: "https://dentalcorsoftware.com.ar",
  locale: "es_AR",
  // WhatsApp comercial (formato wa.me: 549 + número sin 0 ni 15) y cómo se muestra en pantalla.
  whatsappNumber: "5493613873029",
  whatsappDisplay: "+54 9 361 387-3029",
  phone: "+5493613873029",
  // Casilla del dominio (es la que usan los SMTP del backend). TODO: confirmar que sea la de contacto comercial.
  email: "info@dentalcorsoftware.com.ar",
  address: "Córdoba, Argentina",
  businessHours: "Lunes a Viernes, 9 a 18 hs",
  // Login del admin, en el mismo dominio (el Worker lo manda al proyecto del admin). Usar <a>, no <Link>.
  loginUrl: "/auth/login",
  signupUrl: "/auth/login",
  trialDays: 30,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/funciones", label: "Funcionalidades" },
  { href: "/paginas-web", label: "Páginas Web" },
  { href: "/precios", label: "Precios" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Rutas de este sitio (sitemap). Si agregás una página, sumala también en cloudflare-router/worker.js. */
export const ROUTES = ["/", "/funciones", "/paginas-web", "/precios", "/quienes-somos", "/contacto"] as const;
