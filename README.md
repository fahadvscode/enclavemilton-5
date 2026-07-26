# The Enclave Milton — Site E (`theenclavesundial.ca`)

Independent marketing site for **The Enclave Milton Sundial Homes** / **Sundial Homes The Enclave** / **Sundial Homes Milton**. Same floor-plan data, registration API, and Supabase `enclave` table as Sites A–D — distinct editorial visual design (Fraunces + Source Sans 3).

| | |
|---|---|
| Canonical | `https://www.theenclavesundial.ca` |
| Sitemap (Search Console) | `https://www.theenclavesundial.ca/sitemap.xml` |
| Supabase `source` | `theenclavesundial.ca` |
| `form_name` | `Site E Registration` (hidden) |
| Leads table | `public.enclave` (shared) |

## Local

```bash
npm install
cp .env.example .env.local   # add SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

## Vercel production env checklist

Set all three for working registration (service role is server-only — never `NEXT_PUBLIC_*`):

| Variable | Required |
|----------|----------|
| `SUPABASE_URL` | Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (same project URL) |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes |

Optional:

- `REGISTRATION_WEBHOOK_URL` — POST lead JSON after Supabase insert
- `REGISTRATION_FORWARD_URL` — fallback forward if Supabase vars missing (prefer direct Supabase on Vercel)

## Deploy

1. Link a **new** Vercel project for Site E (do not connect `theenclavesundial.ca` until DNS is ready).
2. Add env vars above.
3. `npm run vercel:deploy`

Framework: Next.js (`vercel.json`). Build command: `npm run build` (runs `prebuild` SEO file generation).
