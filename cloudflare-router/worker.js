/**
 * Router de dentalcorsoftware.com.ar (Cloudflare Worker).
 *
 * Un solo dominio, dos proyectos de Cloudflare Pages:
 *   - WEB_ORIGIN   → web comercial (Next.js estático, repo dentalcor-web)
 *   - ADMIN_ORIGIN → admin (React): /auth/login, /admin-dash, /superadmin-dash, /c/:slug, etc.
 *
 * Las rutas de la web comercial van a WEB_ORIGIN; todo lo demás va al admin.
 * Si agregás una página a la web comercial, sumala en WEB_PAGES.
 */

/**
 * Páginas de la web comercial (primer segmento de la URL).
 * "precios" ya no existe en la web, pero se deja acá para que responda 404 desde la web
 * (si fuera al admin, mostraría su página vieja de precios).
 */
const WEB_PAGES = new Set(["funciones", "paginas-web", "precios", "quienes-somos", "contacto"]);

/** Archivos sueltos de la web comercial. */
const WEB_FILES = new Set([
  "/",
  "/index.html",
  "/index.txt",
  "/og.png",
  "/sitemap.xml",
  "/robots.txt",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  // Archivos para buscadores y agentes de IA. Si no existen en la web, la web responde 404
  // (si fueran al admin, la SPA devolvería su HTML con 200 y se verían como archivos inválidos).
  "/llms.txt",
  "/llms-full.txt",
  "/ai-catalog.json",
  "/ai.txt",
  "/humans.txt",
  "/security.txt",
  // URLs viejas: la web comercial las redirige (public/_redirects).
  "/servicios",
  "/ejemplos",
]);

/** Carpetas de la web comercial. */
const WEB_PREFIXES = ["/_next/", "/brand/", "/servicios/", "/__next.", "/.well-known/"];

/** Dominios públicos válidos (para el encabezado que lee la Function /c/:slug del admin). */
const PUBLIC_HOSTS = new Set(["dentalcorsoftware.com.ar", "www.dentalcorsoftware.com.ar"]);

export function isWebPath(pathname) {
  if (WEB_FILES.has(pathname)) return true;
  if (WEB_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true;
  // /precios, /precios.txt (navegación de Next), /precios/__next...txt
  const firstSegment = (pathname.split("/")[1] || "").replace(/\.(html|txt)$/, "");
  return WEB_PAGES.has(firstSegment);
}

const router = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = isWebPath(url.pathname) ? env.WEB_ORIGIN : env.ADMIN_ORIGIN;
    const target = new URL(url.pathname + url.search, origin);

    const headers = new Headers(request.headers);
    if (PUBLIC_HOSTS.has(url.host)) headers.set("X-DentalCor-Host", url.host);

    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body: request.body,
      redirect: "manual",
    });

    const response = new Response(upstream.body, upstream);

    // Las redirecciones de Pages vuelven con el dominio *.pages.dev: lo cambiamos por el público.
    const location = response.headers.get("Location");
    if (location) {
      const next = new URL(location, target);
      if (next.host === target.host) {
        next.protocol = url.protocol;
        next.host = url.host;
        response.headers.set("Location", next.toString());
      }
    }

    // Que una eventual marca de *.pages.dev no le diga a Google que no indexe el dominio real.
    response.headers.delete("X-Robots-Tag");
    return response;
  },
};

export default router;
