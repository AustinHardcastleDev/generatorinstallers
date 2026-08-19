import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlogArticleJsonLd } from '@/components/BlogArticleJsonLd'
import { BlogPostBody } from '@/components/BlogPostBody'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { ButtonLink } from '@/components/Button'
import {
  articleExcerpt,
  formatBlogDate,
  getBlogPost,
  getBlogSlugs,
  isBlogConfigured,
} from '@/lib/blog'
import { LIST_BASE } from '@/lib/site'
import { absoluteUrl, seoDescription, seoTitle } from '@/lib/seo'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const dynamicParams = false
export const runtime = 'nodejs'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  if (!isBlogConfigured()) return []

  try {
    const slugs = await getBlogSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch (error) {
    console.error('[blog] Failed to generate static params:', error)
    return []
  }
}

function blogPostMetadata(post: NonNullable<Awaited<ReturnType<typeof getBlogPost>>>): Metadata {
  const title = seoTitle(post.title)
  const description = seoDescription(articleExcerpt(post) || post.title)
  const url = absoluteUrl(`/blog/${post.slug}`)

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      publishedTime: post.created_at || undefined,
      modifiedTime: post.updated_at || undefined,
      images: post.image_url ? [{ url: post.image_url }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.image_url ? [post.image_url] : undefined,
    },
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await getBlogPost(slug)

    if (!post) {
      return {
        title: 'Article not found',
        robots: { index: false, follow: false },
      }
    }

    return blogPostMetadata(post)
  } catch (error) {
    console.error(`[blog] generateMetadata failed for "${slug}":`, error)
    return {
      title: 'Blog article',
      alternates: { canonical: `/blog/${slug}` },
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post?.html) notFound()

  const excerpt = articleExcerpt(post)
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ]

  return (
    <>
      <BlogArticleJsonLd post={post} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-10">
        <BreadcrumbListJsonLd items={crumbs} />
        <BreadcrumbNav items={crumbs} />

        <div className="meta meta-soft mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
          {post.created_at ? (
            <time dateTime={post.created_at}>{formatBlogDate(post.created_at)}</time>
          ) : null}
          {post.reading_time_minutes ? (
            <>
              <span className="text-[var(--color-border)]">·</span>
              <span>{post.reading_time_minutes} min read</span>
            </>
          ) : null}
        </div>

        <h1 className="t-display mt-4">{post.title}</h1>

        {excerpt ? <p className="t-body mt-6 text-[19px]">{excerpt}</p> : null}

        {post.image_url ? (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-[var(--color-border)] bg-[var(--color-panel)]">
            <Image
              src={post.image_url}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        ) : null}

        <BlogPostBody html={post.html} />

        {(post.tags?.length ?? 0) > 0 ? (
          <div className="mt-12 border-t border-[var(--color-border)] pt-8">
            <div className="eyebrow-bare">Topics</div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <li key={tag} className="tag-pill">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 rounded-card border border-[var(--color-ink)] bg-[var(--color-panel)] p-6">
          <h2 className="t-heading">Ready to find who to call?</h2>
          <p className="t-body-sm mt-2">
            Open your state page or search by ZIP for a distance-sorted list.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={LIST_BASE}>Browse by state</ButtonLink>
            <ButtonLink href={`${LIST_BASE}/near-me`} variant="secondary">
              Search near me
            </ButtonLink>
          </div>
        </div>

        <p className="mt-10 text-[14px] text-[var(--color-muted)]">
          <Link href="/blog" className="link">
            ← Back to all articles
          </Link>
        </p>
      </article>
    </>
  )
}
