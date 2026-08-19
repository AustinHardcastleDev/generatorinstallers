# Outrank blog setup

GeneratorInstallerList uses [Outrank](https://outrank.so/) to generate articles. Outrank only allows a **single integration**, so we use its **publish webhook** (not the pull API): Outrank pushes each article to us, we store it in **Vercel Blob**, and then trigger a **redeploy** so the freshly-built static site includes it.

Why static + redeploy instead of dynamic rendering? Vercel's serverless runtime throws a hidden "Server Components render" error on any *live* render of the blog routes (it only reproduces on Vercel, never locally). Prebuilt (static) pages render perfectly, so the blog is built entirely at deploy time and never rendered on a user request.

## Architecture at a glance

```
Outrank ──(publish webhook)──▶ /api/outrank-webhook ──▶ Vercel Blob
                                          │              ├─ blog/index.json          (card summaries)
                                          │              └─ blog/posts/<slug>.json   (full article)
                                          │
                                          └──(POST deploy hook)──▶ Vercel redeploy
                                                                        │
                                                    build reads Blob ──▶ static /blog, /blog/[slug], /sitemap.xml
```

- The webhook validates the request, writes one full-article blob per article, and rebuilds `blog/index.json`.
- It then POSTs the Vercel **deploy hook** to trigger a production rebuild.
- The build reads Blob (`force-static`, `dynamicParams = false`) and prerenders every blog page. User requests are always served from prebuilt output — no live render, no render-time fetch.
- A new/updated article is live once the redeploy finishes (~1–2 min).

## What is already done in this repo

- Blob-backed build-time data layer (`lib/blog.ts`) + write helper (`lib/blog-store.ts`)
- Webhook endpoint that persists articles and triggers a redeploy (`app/api/outrank-webhook/route.ts`)
- Static blog index at `/blog`, article pages at `/blog/[slug]`
- Site nav + footer links, sitemap entries, editorial styling for article HTML
- The Vercel Blob store (`generator-blog`) is created and linked to the project
- A Vercel deploy hook (`outrank-publish`, `master`) is created and wired into the webhook

## Environment variables

Set in Vercel and pull locally with `vercel env pull`:

```bash
BLOB_READ_WRITE_TOKEN=...          # auto-provisioned for the linked generator-blog store
BLOB_BASE_URL=https://<store>.public.blob.vercel-storage.com   # public base for build-time reads
OUTRANK_WEBHOOK_SECRET=a_long_random_string
DEPLOY_HOOK_URL=https://api.vercel.com/v1/integrations/deploy/<proj>/<hook>
```

- `BLOB_READ_WRITE_TOKEN` — managed automatically by Vercel for the linked store. Used by the webhook to write blobs. Don't hand-edit it.
- `BLOB_BASE_URL` — public base URL of the Blob store; used to read `index.json`/`posts/*.json` at build.
- `OUTRANK_WEBHOOK_SECRET` — any long random string (e.g. `openssl rand -hex 32`). Must match the **Access token** on the Outrank webhook.
- `DEPLOY_HOOK_URL` — the Vercel deploy hook the webhook POSTs to after saving articles. Treat it as a secret (anyone with it can trigger a deploy).

Keep all of these server-side only. Never use a `NEXT_PUBLIC_` prefix.

## Outrank webhook configuration

Set it up in Outrank → **Integrations → Webhook**:

1. **Webhook URL:** `https://www.generatorinstallerlist.com/api/outrank-webhook`
2. **Access token:** the exact value of `OUTRANK_WEBHOOK_SECRET` (Outrank sends it as `Authorization: Bearer <token>`)
3. Save, then use Outrank's "Send test" button — it should return `200`.

What the endpoint does on each call:

- Verifies the `Authorization: Bearer` token against `OUTRANK_WEBHOOK_SECRET` (returns `401` if it doesn't match)
- Writes each article in the payload to Blob (full article + rebuilt index)
- POSTs `DEPLOY_HOOK_URL` to trigger a redeploy
- Returns `200` with the list of saved slugs and `redeployed: true/false`

## Publishing workflow

1. Outrank generates an article in your dashboard
2. Review/edit if needed
3. Click **Publish**
4. Outrank calls the webhook → article is stored in Blob → a redeploy is triggered
5. When the redeploy finishes (~1–2 min), the article is live on `/blog`, `/blog/<slug>`, and `/sitemap.xml`

## Backfilling existing articles

Articles published **before** the webhook was pointed here won't be in Blob (Outrank only pushes on new publishes). To load them, re-publish each one in Outrank (fires the webhook).

## Google Search Console

Submit your main sitemap (`/sitemap.xml`), which includes blog post URLs.

## Troubleshooting

**New post not appearing after publish**

- Confirm the article is **published** in Outrank (not just drafted)
- Check Vercel function logs for `[outrank-webhook]` lines: they show `saved: [...]` and `redeploy=true`
- Confirm a new deployment started in the Vercel dashboard around publish time; wait for it to finish (~1–2 min)
- If `redeploy=false`, confirm `DEPLOY_HOOK_URL` is set in the production environment

**Webhook returns 401**

- The `Authorization: Bearer` token from Outrank doesn't match `OUTRANK_WEBHOOK_SECRET` in Vercel. Re-copy the value into both places (watch for trailing spaces).

**Webhook returns 500 ("Webhook not configured")**

- `OUTRANK_WEBHOOK_SECRET` isn't set in the Vercel environment serving the request. Add it and redeploy.

**Webhook returns 500 ("Failed to persist articles")**

- `BLOB_READ_WRITE_TOKEN` is missing or the Blob store was unlinked. Confirm the `generator-blog` store is linked to the project.

**Empty blog index after a build**

- Confirm `BLOB_BASE_URL` is set and `blog/index.json` exists in the Blob store (Vercel dashboard → Storage → generator-blog).

**Images not loading**

- Outrank featured images are usually hosted on `cdnimg.co`. Add any new image hosts to `images.remotePatterns` in `next.config.ts` if Outrank changes CDN domains.
