import { BlogCard } from '@/components/BlogCard'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { ButtonLink } from '@/components/Button'
import { getBlogPosts, isBlogConfigured } from '@/lib/blog'
import { LIST_BASE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = pageMetadata({
  title: 'Generator Installer Blog',
  description:
    'Field notes and buyer research from GeneratorInstallerList. Local market reality, installer scope, and the questions buyers ask once they have a few installers in mind.',
  path: '/blog',
})

const CRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
]

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const configured = isBlogConfigured()

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
      <BreadcrumbListJsonLd items={CRUMBS} />
      <BreadcrumbNav items={CRUMBS} />
      <span className="eyebrow mt-8">Field notes</span>
      <h1 className="t-display mt-4">
        Generator research, explained in plain language.
      </h1>
      <p className="t-body mt-6 max-w-3xl text-[19px]">
        Longer-form articles on local market reality, installer scope, and the
        questions buyers ask once they have a few installers in mind.
      </p>

      {posts.length > 0 ? (
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-card border border-[var(--color-border)] bg-[var(--color-panel)] p-6 sm:p-8">
          <h2 className="t-heading">Articles are on the way.</h2>
          <p className="t-body-sm mt-4 max-w-2xl">
            The blog is wired up and waiting for the first publish from Outrank.
            In the meantime, the buyer guides cover cost, sizing, fuel, permits,
            and hiring: the research we did so you do not have to start from
            zero.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/guides">Browse buyer guides</ButtonLink>
            <ButtonLink href={LIST_BASE} variant="secondary">
              Browse installers
            </ButtonLink>
          </div>
          {configured ? null : process.env.NODE_ENV === 'development' ? (
            <p className="meta meta-soft mt-6 max-w-2xl border-t border-[var(--color-border)] pt-6 font-mono text-[12px] leading-relaxed">
              Dev note: add BLOB_READ_WRITE_TOKEN and BLOB_BASE_URL to
              .env.local (run <code>vercel env pull</code>). See
              docs/outrank-setup.md.
            </p>
          ) : null}
        </div>
      )}
    </section>
  )
}
