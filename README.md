# DeCarvalho (Next.js App Router)

Production-ready, SSG-first Next.js App Router site for a holding company with two sub-brands.

## Quickstart

```bash
# choose one
pnpm install
# or
npm install

pnpm dev
# or
npm run dev
```

Open http://localhost:3000

## Configure placeholders

Edit `/content/site.json`:
- `baseUrl` (canonical URLs + sitemap)
- `hubspot.portalId` and `hubspot.formGuid`

## Notes
- Static by default (local JSON content)
- No client components
- No API routes (sitemap/robots use App Router metadata routes)
