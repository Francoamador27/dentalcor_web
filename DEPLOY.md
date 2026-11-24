# Deploy en Cloudflare Pages — paso a paso

## Cómo queda armado

Todo sigue en **un solo dominio**, `dentalcorsoftware.com.ar`. Un **Worker** de Cloudflare (`cloudflare-router/`) recibe cada visita y la manda al proyecto que corresponde:

| Ruta | Va a | Proyecto |
| --- | --- | --- |
| `/`, `/funciones`, `/paginas-web`, `/quienes-somos`, `/contacto` (+ sus archivos) | Web comercial | **dentalcor-web** (Pages, nuevo) |
| Todo lo demás: `/auth/login`, `/admin-dash`, `/superadmin-dash`, `/mi-cuenta`, `/select-tenant`, `/c/:slug`, `/editor-web`… | Admin | **el proyecto del admin** (Pages, el que ya tenés) |

Para tus clientes **no cambia nada**: entran por `dentalcorsoftware.com.ar/auth/login`, caen en `/admin-dash` o `/superadmin-dash` como siempre, no se tienen que volver a loguear y los links de las landings `/c/:slug` siguen iguales.

**No hay que tocar el backend** (CORS, `FRONTEND_URL` y Turnstile siguen igual, porque el dominio no cambia).

**Orden pensado para que no haya caída:** publicás todo en paralelo, lo probás, y el "corte" (paso 5) dura uno o dos minutos y se puede deshacer.

---

## Paso 1 — Subir la web comercial a GitHub

En una terminal, dentro de `dentalcor-web`:

```bash
git init
git add .
git commit -m "Web comercial DentalCor"
git branch -M main
```

Creá un repo **privado** vacío en GitHub (por ejemplo `dentalcor-web`) y conectalo:

```bash
git remote add origin https://github.com/TU-USUARIO/dentalcor-web.git
git push -u origin main
```

(Con `gh` instalado: `gh repo create dentalcor-web --private --source . --push`.)

---

## Paso 2 — Crear el proyecto de la web comercial en Pages

1. Cloudflare → **Workers & Pages** → **Create** → pestaña **Pages** → **Connect to Git**.
2. Elegí el repo `dentalcor-web`.
3. Configuración del build:
   - **Project name:** `dentalcor-web` (si usás otro nombre, cambialo también en `cloudflare-router/wrangler.toml`)
   - **Production branch:** `main`
   - **Framework preset:** `Next.js (Static HTML Export)` (o `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. **Environment variables** → `NODE_VERSION` = `22`.
5. **Save and Deploy**.

**No le agregues ningún dominio propio a este proyecto.** Queda solo en `https://dentalcor-web.pages.dev`; el dominio real lo va a atender el Worker.

Probalo en `https://dentalcor-web.pages.dev`: que abran las 6 páginas, los botones de WhatsApp y que `/servicios` redirija a `/funciones`.

---

## Paso 3 — Publicar el ajuste del admin

Modifiqué **un solo archivo** del admin: `functions/c/[slug].js` (9 líneas). Sirve para que, detrás del Worker, el link canónico y la vista previa de las landings `/c/:slug` usen `dentalcorsoftware.com.ar` y no la dirección `*.pages.dev`. Si no hay Worker delante, funciona igual que antes.

Commiteá y publicá ese archivo en el admin como hacés siempre (si el admin está conectado a Git, alcanza con el push):

```bash
git add "functions/c/[slug].js"
git commit -m "Landing /c/:slug: usar el dominio público detrás del router"
git push
```

Después anotá el dominio `*.pages.dev` del admin: Cloudflare → **Workers & Pages** → proyecto del admin → figura arriba (algo como `dentalcorsoftware.pages.dev`).

---

## Paso 4 — Crear el Worker y probarlo

1. Abrí `cloudflare-router/wrangler.toml` y reemplazá `ADMIN_ORIGIN` por el `*.pages.dev` del admin que anotaste:

   ```toml
   ADMIN_ORIGIN = "https://dentalcorsoftware.pages.dev"   # ← el tuyo
   ```

2. Publicá el Worker:

   ```bash
   cd cloudflare-router
   npx wrangler login      # abre el navegador para autorizar tu cuenta de Cloudflare
   npx wrangler deploy
   ```

   Al final te muestra una URL tipo `https://dentalcor-router.TU-CUENTA.workers.dev`.

### Probalo en esa URL

- [ ] `/`, `/funciones`, `/paginas-web`, `/quienes-somos`, `/contacto` muestran la **web nueva**.
- [ ] Navegar entre esas páginas con el menú funciona sin errores.
- [ ] `/auth/login` muestra la **pantalla de login del admin**.
- [ ] `/c/ALGUNA-CLINICA` carga la landing de la clínica (la estructura; ver nota).
- [ ] `/servicios` redirige a `/funciones` dentro de la misma URL de prueba.

> **Nota:** en la URL de prueba el login y los datos de la API **no** van a funcionar (el backend solo acepta pedidos desde `dentalcorsoftware.com.ar`). Es esperable: acá solo probás que cada ruta vaya al proyecto correcto. El login se prueba en el paso 6.

---

## Paso 5 — El corte: el dominio pasa al Worker

Hacelo en un horario tranquilo. La caída es de uno o dos minutos.

1. **Proyecto del admin** → **Custom domains** → quitá `dentalcorsoftware.com.ar` y `www.dentalcorsoftware.com.ar` (menú `…` → **Remove**).
2. **DNS → Records**: si quedaron registros `CNAME` (o `A`/`AAAA`) para `dentalcorsoftware.com.ar` o `www`, **borralos** (el Worker necesita crear los suyos).
3. En `cloudflare-router/wrangler.toml` descomentá el bloque `routes`:

   ```toml
   routes = [
     { pattern = "dentalcorsoftware.com.ar", custom_domain = true },
     { pattern = "www.dentalcorsoftware.com.ar", custom_domain = true },
   ]
   ```

   y publicá de nuevo:

   ```bash
   npx wrangler deploy
   ```

4. En Cloudflare → **Workers & Pages** → `dentalcor-router` → **Settings → Domains & Routes** tienen que figurar los dos dominios. Esperá a que el certificado quede activo (1 a 5 minutos).

> **No toques `api.dentalcorsoftware.com.ar`**: es el backend y no pasa por el Worker.

---

## Paso 6 — Verificación final

- [ ] `https://dentalcorsoftware.com.ar` muestra la web nueva (si ves la vieja, probá en incógnito).
- [ ] `https://www.dentalcorsoftware.com.ar` también.
- [ ] **Login de clínica**: `https://dentalcorsoftware.com.ar/auth/login` → iniciás sesión → caés en `/admin-dash`. La agenda y los pacientes cargan.
- [ ] **Login de superadmin** → caés en `/superadmin-dash`.
- [ ] Si un usuario ya estaba logueado antes del corte, sigue logueado.
- [ ] Recargá la página (F5) estando en `/admin-dash/pacientes`: tiene que seguir en el admin, no mostrar un 404.
- [ ] `https://dentalcorsoftware.com.ar/c/ALGUNA-CLINICA` muestra la landing. Mandá el link por WhatsApp: la vista previa tiene que mostrar nombre e imagen de la clínica.
- [ ] "Olvidé mi contraseña": el link del email abre `/auth/reset-password` y funciona.
- [ ] El botón "Ingresar" de la web nueva lleva al login.
- [ ] `https://dentalcorsoftware.com.ar/sitemap.xml` y `/robots.txt` cargan.

### Google Search Console

1. Propiedad `dentalcorsoftware.com.ar` → **Sitemaps** → enviá `https://dentalcorsoftware.com.ar/sitemap.xml`.
2. **Inspección de URLs** → pedí indexar la home.

> El **robots.txt administrado por Cloudflare** (el que bloquea bots de IA) se sigue agregando arriba del de la web.

---

## Si algo sale mal (volver atrás)

1. Workers & Pages → `dentalcor-router` → **Settings → Domains & Routes** → quitá `dentalcorsoftware.com.ar` y `www`.
2. **Proyecto del admin** → **Custom domains** → volvé a agregar `dentalcorsoftware.com.ar` y `www`.

En unos minutos todo queda como antes (el ajuste del paso 3 no afecta al admin sin Worker).

---

## Para tener en cuenta

- **Plan gratis de Workers:** 100.000 requests por día, y cada archivo (imágenes, JS, CSS) cuenta como una. Para un SaaS chico alcanza de sobra; mirá **Workers → dentalcor-router → Metrics** la primera semana. Si te acercás al límite, el plan pago cuesta USD 5 por mes.
- **Si agregás una página nueva a la web comercial**, sumala en `WEB_PAGES` de `cloudflare-router/worker.js` y hacé `npx wrangler deploy`. Si no, el Worker la manda al admin.
- **Páginas públicas viejas dentro del admin:** el login del admin tiene su propio menú (Inicio, Funcionalidades, Páginas Web…). Como el admin es una SPA, esos links muestran las páginas viejas sin recargar. Conviene cambiarlos en el admin (`Header.jsx` y `Footer.jsx`) por links que recarguen la página (`<a href>` o `<Link reloadDocument>`), así llevan a la web nueva.

---

## Cómo publicar cambios a partir de ahora

- **Web comercial:** editás (por ejemplo `src/content/content.ts`) → `git add . && git commit -m "..." && git push`. Cloudflare Pages publica solo en 1 a 2 minutos.
- **Admin:** como siempre, nada cambia.
- **Worker:** solo si cambiás `cloudflare-router/`: `cd cloudflare-router && npx wrangler deploy`.
