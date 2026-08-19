import 'server-only'
import { head, put } from '@vercel/blob'
import {
  INDEX_BLOB_PATH,
  postBlobPath,
  type BlogArticle,
  type BlogArticleSummary,
} from './blog'

// Raw article shape as delivered by the Outrank publish webhook.
export type OutrankWebhookArticle = {
  id?: string
  title?: string
  slug?: string
  meta_description?: string
  content_html?: string
  content_markdown?: string
  image_url?: string
  created_at?: string
  tags?: unknown
}

const WORDS_PER_MINUTE = 200

const PUT_OPTS = {
  access: 'public' as const,
  addRandomSuffix: false,
  allowOverwrite: true,
  contentType: 'application/json',
  cacheControlMaxAge: 0,
}

function estimateReadingMinutes(markdown: string, html: string): number {
  const source = markdown?.trim() || html.replace(/<[^>]+>/g, ' ')
  const words = source.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) return []
  return tags
    .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
    .filter(Boolean)
}

function normalizeArticle(
  raw: OutrankWebhookArticle,
  eventTimestamp: string | undefined,
): BlogArticle | null {
  const slug = raw.slug?.trim()
  const title = raw.title?.trim()
  const html = (raw.content_html || '').trim()
  if (!slug || !title || !html) return null

  const created = raw.created_at?.trim() || eventTimestamp || new Date().toISOString()
  const markdown = (raw.content_markdown || '').trim()

  return {
    id: raw.id?.trim() || slug,
    slug,
    title,
    meta_description: (raw.meta_description || '').trim(),
    html,
    content_markdown: markdown,
    image_url: (raw.image_url || '').trim(),
    tags: normalizeTags(raw.tags),
    created_at: created,
    updated_at: eventTimestamp?.trim() || created,
    reading_time_minutes: estimateReadingMinutes(markdown, html),
  }
}

function toSummary(article: BlogArticle): BlogArticleSummary {
  const { html: _html, content_markdown: _md, ...summary } = article
  return summary
}

async function readIndex(token: string): Promise<BlogArticleSummary[]> {
  try {
    const meta = await head(INDEX_BLOB_PATH, { token })
    const res = await fetch(meta.url, { cache: 'no-store' })
    if (!res.ok) return []
    const data = (await res.json()) as unknown
    return Array.isArray(data) ? (data as BlogArticleSummary[]) : []
  } catch {
    return []
  }
}

/**
 * Persist the articles from a webhook payload: one full-article blob per
 * article plus a rebuilt summary index. Returns the slugs written.
 */
export async function upsertArticles(
  rawArticles: OutrankWebhookArticle[],
  eventTimestamp?: string,
): Promise<string[]> {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) throw new Error('BLOB_READ_WRITE_TOKEN is not configured')

  const incoming = rawArticles
    .map((article) => normalizeArticle(article, eventTimestamp))
    .filter((article): article is BlogArticle => Boolean(article))

  if (incoming.length === 0) return []

  // Write each full article blob.
  await Promise.all(
    incoming.map((article) =>
      put(postBlobPath(article.slug), JSON.stringify(article), {
        ...PUT_OPTS,
        token,
      }),
    ),
  )

  // Merge into the summary index and rewrite it.
  const bySlug = new Map((await readIndex(token)).map((s) => [s.slug, s]))
  for (const article of incoming) {
    bySlug.set(article.slug, toSummary(article))
  }
  const index = Array.from(bySlug.values()).sort((a, b) => {
    const at = Date.parse(a.created_at) || 0
    const bt = Date.parse(b.created_at) || 0
    return bt - at
  })

  await put(INDEX_BLOB_PATH, JSON.stringify(index), { ...PUT_OPTS, token })

  return incoming.map((article) => article.slug)
}
