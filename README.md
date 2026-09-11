# Estac

Sitio corporativo de Estac: empresa tecnológica que ayuda a negocios a crecer digitalmente.

> Estac — un juego de palabras con *stack*.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Deploy

El sitio se exporta estático (`output: "export"` → carpeta `out`) y se publica con **GitHub Actions → GitHub Pages**. Cloudflare solo apunta el DNS de NIC Chile (`estac.cl`) hacia Pages.

### GitHub Pages

El workflow en `.github/workflows/deploy-pages.yml` construye sin `basePath` para dominio raíz.

Si publicas solo en `https://USER.github.io/estac_web`, define en el build:

```yaml
env:
  PAGES_BASE_PATH: /estac_web
```

### Formulario de contacto (sin backend)

Usamos [Web3Forms](https://web3forms.com): el navegador envía el mensaje por HTTPS a su API y llega a tu email.

1. Crea un Access Key en web3forms.com con el email donde quieres recibir los leads.
2. En el repo de GitHub: **Settings → Secrets and variables → Actions → New repository secret**

```text
Name:  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
Value: tu-access-key
```

3. Haz push a `main` (o `workflow_dispatch`) para que el build inyecte la variable.
4. En el dashboard de Web3Forms, restringe el dominio a `estac.cl` si está disponible en tu plan.

Sin ese secret, el formulario usa `mailto:` como respaldo.

Protecciones incluidas: honeypot anti-bot, validación de email, límites de largo y bloqueo de doble envío.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (estático en `out/`)
- `npm run start` — servir build
- `npm run lint` — ESLint

## Secciones

1. Hero
2. Servicios (Presencia Digital, Identidad de Marca, Software a Medida)
3. Cómo trabajamos
4. Sectores / para quién
5. Enfoque
6. CTA / contacto
