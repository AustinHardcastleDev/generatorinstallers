import { absoluteUrl } from '@/lib/seo'
import { articleExcerpt, type BlogArticle } from '@/lib/blog'

type BlogArticleJsonLdProps = {
  post: BlogArticle
}

export function BlogArticleJsonLd({ post }: BlogArticleJsonLdProps) {
  const description = articleExcerpt(post)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: description || undefined,
    image: post.image_url ? [post.image_url] : undefined,
    datePublished: post.created_at || undefined,
    dateModified: post.updated_at || post.created_at || undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
