# Estac

Sitio corporativo de Estac: empresa tecnológica que ayuda a negocios a crecer digitalmente.

> Estac — un juego de palabras con *stack*.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Deploy

El sitio se exporta estático (`output: "export"` → carpeta `out`).

### Cloudflare Pages (producción: https://estac.cl)

- Build command: `npm run build`
- Output directory: `out`
- Node: 22
- **No** definir `PAGES_BASE_PATH`

### GitHub Pages

El workflow en `.github/workflows/deploy-pages.yml` construye sin `basePath` para dominio raíz.

Si publicas solo en `https://USER.github.io/estac_web`, define en el build:

```yaml
env:
  PAGES_BASE_PATH: /estac_web
```

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
