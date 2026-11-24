# DentalCor Software — Web comercial

Sitio comercial estático de DentalCor Software, hecho con Next.js (App Router), TypeScript y Tailwind CSS.
El admin (React, Cloudflare Pages) es un proyecto aparte: este repo **no** tiene `/login`, `/admin` ni otras rutas de la app.

## Rutas

| Ruta             | Archivo                            |
| ---------------- | ---------------------------------- |
| `/`              | `src/app/page.tsx`                 |
| `/funciones`     | `src/app/funciones/page.tsx`       |
| `/paginas-web`   | `src/app/paginas-web/page.tsx`     |
| `/precios`       | `src/app/precios/page.tsx`         |
| `/quienes-somos` | `src/app/quienes-somos/page.tsx`   |
| `/contacto`      | `src/app/contacto/page.tsx`        |

La home replica las secciones de la web pública actual (hero con panel, funcionalidades en pestañas, quiénes somos con video, módulos, CTA, beneficios, antes/después y contacto), más la calculadora de ausentismo y las preguntas frecuentes.

También se generan `sitemap.xml` (`src/app/sitemap.ts`) y `robots.txt` (`src/app/robots.ts`) como archivos estáticos en el build.
`public/_redirects` redirige las URLs viejas (`/servicios`, `/servicios/*`, `/ejemplos`) para no perder posicionamiento.

## Dónde editar

- **Textos**: `src/content/content.ts` (home, funciones, planes y precios, FAQ, contacto, footer).
- **Dominio, WhatsApp, email y links al admin**: `src/config/site.ts`.
- **Imagen para redes (Open Graph)**: `public/og.png` (1200×630).
- **Colores y estilos base**: `src/app/globals.css` (`@theme`).
- **Componentes**: `src/components/` (Header, Footer, Hero, FeatureCard, PricingCard, FAQ, CTA, CostCalculator, ContactForm, Testimonials).

Buscá `TODO` en el proyecto para ver los placeholders y las funciones a confirmar.

## Correrlo localmente

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera la carpeta out/
npx serve out    # (opcional) previsualizar el build estático
```

## Deploy en Cloudflare Pages

> **Paso a paso completo (dominios, admin en `app.`, backend y verificación): ver [DEPLOY.md](DEPLOY.md).**

1. Subí este proyecto a un repositorio de GitHub o GitLab.
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elegí el repo.
3. Configuración del build:
   - Framework preset: `Next.js (Static HTML Export)` o `None`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Variable de entorno: `NODE_VERSION` = `20` (o superior)
4. Guardá y deployá. Cada push a la rama principal publica una versión nueva.

Cloudflare Pages sirve `precios.html` en `/precios` automáticamente (por eso `trailingSlash: false`).

### Links "Ingresar" y "Probar gratis"

Apuntan a `/auth/login` en la misma ventana (`SITE.loginUrl` y `SITE.signupUrl` en `src/config/site.ts`).
Esta web y el admin comparten el dominio `dentalcorsoftware.com.ar`: el Worker de `cloudflare-router/` manda las páginas comerciales a este proyecto y todo lo demás (`/auth/*`, `/admin-dash`, `/c/*`…) al admin. Detalle en [DEPLOY.md](DEPLOY.md).
