import Link from 'next/link'
import { ButtonLink } from '@/components/Button'
import { LIST_BASE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Generator Installer Blog',
  description:
    'Field notes and buyer research from GeneratorInstallerList. Articles coming soon, start with the buyer guides.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
      <nav className="meta meta-soft break-words">
        <Link href="/" className="hover:text-[var(--color-ink)]">
          Home
        </Link>
        <span className="mx-2 text-[var(--color-border)]">/</span>
        <span className="text-[var(--color-ink)]">Blog</span>
      </nav>
      <span className="eyebrow mt-8">Field notes</span>
      <h1 className="t-display mt-4">
        Generator research, explained in plain language.
      </h1>
      <p className="t-body mt-6 max-w-3xl text-[19px]">
        Longer-form articles on local market reality, installer scope, and the
        questions buyers ask once they have a few installers in mind.
      </p>

      <div className="mt-12 rounded-card border border-[var(--color-border)] bg-[var(--color-panel)] p-6 sm:p-8">
        <h2 className="t-heading">Articles are on the way.</h2>
        <p className="t-body-sm mt-4 max-w-2xl">
          The blog is wired up, and the first posts are not published yet. In
          the meantime, the buyer guides cover cost, sizing, fuel, permits, and
          hiring: the research we did so you do not have to start from zero.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/guides">Browse buyer guides</ButtonLink>
          <ButtonLink href={LIST_BASE} variant="secondary">
            Browse installers
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
