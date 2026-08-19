import Image from 'next/image'
import Link from 'next/link'
import {
  articleExcerpt,
  formatBlogDate,
  type BlogArticleSummary,
} from '@/lib/blog'

type BlogCardProps = {
  post: BlogArticleSummary
}

export function BlogCard({ post }: BlogCardProps) {
  const excerpt = articleExcerpt(post)
  const primaryTag = post.tags?.[0]

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block min-w-0 overflow-hidden rounded-card border border-[var(--color-border)] bg-[var(--color-panel)] transition-colors hover:border-[var(--color-ink)]"
    >
      {post.image_url ? (
        <div className="relative aspect-[16/9] border-b border-[var(--color-border)] bg-[var(--color-page)]">
          <Image
            src={post.image_url}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        <div className="meta meta-soft flex flex-wrap items-center gap-x-3 gap-y-1">
          {post.created_at ? (
            <time dateTime={post.created_at}>{formatBlogDate(post.created_at)}</time>
          ) : null}
          {post.reading_time_minutes ? (
            <>
              <span className="text-[var(--color-border)]">·</span>
              <span>{post.reading_time_minutes} min read</span>
            </>
          ) : null}
          {primaryTag ? (
            <>
              <span className="text-[var(--color-border)]">·</span>
              <span>{primaryTag}</span>
            </>
          ) : null}
        </div>
        <h2 className="t-heading mt-3">{post.title}</h2>
        {excerpt ? <p className="t-body-sm mt-3">{excerpt}</p> : null}
        <div className="mt-5 text-[15px] font-semibold text-[var(--color-ink)]">
          Read →
        </div>
      </div>
    </Link>
  )
}
