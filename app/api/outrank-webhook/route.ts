import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'
import { upsertArticles, type OutrankWebhookArticle } from '@/lib/blog-store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const WEBHOOK_SECRET = process.env.OUTRANK_WEBHOOK_SECRET

// The blog is built as fully static pages that read Blob at build time. After
// persisting the incoming articles we trigger a redeploy so the newly-built
// site includes them. This keeps user requests off any live-render path, which
// Vercel's serverless runtime fails on for these routes.
async function triggerRedeploy(): Promise<boolean> {
  const hook = process.env.DEPLOY_HOOK_URL
  if (!hook) {
    console.error('[outrank-webhook] DEPLOY_HOOK_URL is not configured')
    return false
  }
  try {
    const res = await fetch(hook, { method: 'POST' })
    return res.ok
  } catch (error) {
    console.error('[outrank-webhook] Failed to trigger redeploy:', error)
    return false
  }
}

type OutrankWebhookPayload = {
  event_type?: string
  timestamp?: string
  data?: {
    articles?: OutrankWebhookArticle[]
  }
}

function isAuthorized(request: Request): boolean {
  if (!WEBHOOK_SECRET) return false

  const header = request.headers.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : ''
  if (!token) return false

  const provided = Buffer.from(token)
  const expected = Buffer.from(WEBHOOK_SECRET)
  if (provided.length !== expected.length) return false

  return timingSafeEqual(provided, expected)
}

export async function POST(request: Request) {
  if (!WEBHOOK_SECRET) {
    console.error('[outrank-webhook] OUTRANK_WEBHOOK_SECRET is not configured')
    return NextResponse.json(
      { ok: false, error: 'Webhook not configured' },
      { status: 500 },
    )
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  let payload: OutrankWebhookPayload
  try {
    payload = (await request.json()) as OutrankWebhookPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const articles = payload.data?.articles ?? []

  let savedSlugs: string[] = []
  try {
    savedSlugs = await upsertArticles(articles, payload.timestamp)
  } catch (error) {
    console.error('[outrank-webhook] Failed to persist articles:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to persist articles' },
      { status: 500 },
    )
  }

  // Rebuild the static site so the new/updated posts are included.
  const redeployed = savedSlugs.length > 0 ? await triggerRedeploy() : false

  console.log(
    `[outrank-webhook] Saved ${savedSlugs.length} article(s): ${savedSlugs.join(', ') || '(none)'} (event: ${payload.event_type || 'unknown'}); redeploy=${redeployed}`,
  )

  return NextResponse.json({
    ok: true,
    event: payload.event_type ?? null,
    saved: savedSlugs,
    redeployed,
  })
}
