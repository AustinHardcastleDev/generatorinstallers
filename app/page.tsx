import Link from 'next/link'
import {
  installers,
  NATIONAL_EXPLICIT,
  REGIONS,
  states,
  TOTAL_INSTALLERS,
  TOTAL_STATES,
  sortInstallersBySignal,
  toInstallerListItem,
} from '@/lib/installers'
import { InstallerCard } from '@/components/InstallerCard'
import { InstallerLinkList } from '@/components/InstallerLinkList'
import { FAQ, FAQJsonLd, type FAQItem } from '@/components/FAQ'
import { SITE, LIST_BASE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import { ZipSearchForm } from '@/components/ZipSearchForm'
import { FinancingCta } from '@/components/FinancingCta'
import { ButtonLink } from '@/components/Button'
import { CountChip } from '@/components/CountChip'
import { GUIDES } from '@/lib/guides'
import { Container, SectionHeading } from '@/components/Section'
import { HeroGeneratorPhoto } from '@/components/GeneratorPhotos'
import { pickHomepageDiscoverySample } from '@/lib/internal-links'
import { brandCounts } from '@/lib/brands'
import { intentTagCounts } from '@/lib/directory-tags'

const discoverySample = pickHomepageDiscoverySample()

export const metadata = pageMetadata({
  title: 'Generator Installation Directory | Standby Generator Installers',
  description: SITE.description,
  path: '/',
})

const FAQS: FAQItem[] = [
  {
    q: 'How does GeneratorInstallerList decide who makes the list?',
    a: 'We cast a wide net, then check installer websites ourselves. A company stays on the list when their own site shows standby or whole-house generator signal: a dedicated page, repeated mentions, or at least one clear mention worth a first call. That is website signal, not a license check or endorsement.',
  },
  {
    q: 'What is a dedicated generator page?',
    a: 'A page on the installer’s own website about standby or whole-home generator work. It is the strongest website signal we track. You still need to verify licensing, insurance, references, and scope yourself.',
  },
  {
    q: 'Does it matter which generator brand I want?',
    a: 'No. Generac, Kohler, Cummins, Briggs & Stratton, whatever you have in mind, this directory is not tied to one manufacturer. We filter installer websites for real standby generator signal regardless of brand, then let you narrow by brand if you already have a preference.',
  },
  {
    q: 'Where should I search if I want installers near me?',
    a: 'Use the Near Me page for ZIP distance sorting. Standby crews often cover a wide radius, so a state or metro list is usually more useful than a single city name.',
  },
  {
    q: 'What should I ask before requesting a quote?',
    a: 'Ask who holds the electrical and gas licenses, how they size the unit, what the quote includes, who pulls permits, and how warranty service works. Use our questions-to-ask guide for a full checklist.',
  },
  {
    q: 'I am an installer. How do I get listed or correct an entry?',
    a: 'Open the For Installers page and send the correction or the URL that shows your standby generator work. Include enough detail for us to match the right listing.',
  },
]

const featured = sortInstallersBySignal(installers).slice(0, 6)

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <FAQJsonLd items={FAQS} />
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 md:pt-12 lg:px-10">
        <ZipSearchForm compact />
      </section>
      <StateGrid />
      <FeaturedInstallers />
      <DiscoveryInstallers />
      <BrandDiscovery />
      <HowItWorks />
      <BuyerGuides />
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
        <FinancingCta />
      </section>
      <PullQuote />
      <Container>
        <FAQ items={FAQS} />
      </Container>
      <ClosingCta />
    </>
  )
}

function Hero() {
  const liveExplicit = installers.filter(
    (i) => i.generatorConfidence === 'explicit',
  ).length
  const liveHigh = installers.filter((i) => i.generatorConfidence === 'high').length
  const liveMedium = installers.filter(
    (i) => i.generatorConfidence === 'medium',
  ).length

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <div className="grid items-end gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <span className="eyebrow">
            Est. 2026 · {TOTAL_INSTALLERS.toLocaleString()} installers ·{' '}
            {TOTAL_STATES} states
          </span>
          <h1 className="t-display mt-5">
            Generator installation, from someone who&apos;s done it before.
          </h1>
          <p className="t-body mt-8 max-w-2xl text-[19px]">
            Standby generator installation hides behind a dozen other job
            titles: electrician, HVAC shop, propane dealer. We checked
            installer websites in {TOTAL_STATES} states (
            {TOTAL_INSTALLERS.toLocaleString()} listings) for real generator
            installation experience, whatever brand they work with, and kept
            the list independent. No broker layer, no lead resale. Just a
            better place to start.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={LIST_BASE}>Browse by state</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              See the method
            </ButtonLink>
          </div>
        </div>
        <div className="md:border-l md:border-[var(--color-border)] md:pl-6">
          <HeroGeneratorPhoto />
          <div className="meta mt-6">What the research found</div>
          <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-[var(--color-body)]">
            <p>
              <span className="tabular text-[22px] font-extrabold text-[var(--color-ink)]">
                {NATIONAL_EXPLICIT.toLocaleString()}
              </span>{' '}
              installers nationwide with a dedicated generator page on their
              site.
            </p>
            <p>
              <span className="tabular text-[22px] font-extrabold text-[var(--color-ink)]">
                {liveExplicit}
              </span>{' '}
              dedicated, {liveHigh} repeated, {liveMedium} signal across the
              live directory.
            </p>
            <p className="text-[14px] text-[var(--color-muted)]">
              Website signal is a starting filter, not a license check, not an
              endorsement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StateGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="Start here"
        title="Pick the state where you're installing"
        subtitle={`${TOTAL_INSTALLERS.toLocaleString()} researched installers across ${TOTAL_STATES} states, sorted by website signal.`}
      />
      <div className="mt-12 grid gap-8">
        {Object.entries(REGIONS).map(([region, slugs]) => (
          <div key={region}>
            <div className="flex items-center gap-4">
              <span className="eyebrow-bare">{region}</span>
              <div className="rule flex-1" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {slugs.map((slug) => {
                const s = states[slug]
                if (!s) return null
                return (
                  <Link
                    key={slug}
                    href={`${LIST_BASE}/${slug}`}
                    className="card group block p-5"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="t-heading group-hover:underline">
                        {s.name}
                      </span>
                      <CountChip count={s.totalListings} />
                    </div>
                    <div className="meta meta-soft mt-2">
                      {s.explicitCount} dedicated
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedInstallers() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="National directory"
        title="Who to call first"
        subtitle="Sorted by generator-specific review count across all 50 states. Featured rows are labeled. Not an endorsement, just a better starting point."
        meta={`${featured.length} featured`}
      />
      <div className="mt-10 grid gap-4">
        {featured.map((installer) => (
          <InstallerCard
            key={installer.id}
            installer={toInstallerListItem(installer)}
            variant="featured"
          />
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href={LIST_BASE} variant="secondary">
          Browse all states →
        </ButtonLink>
      </div>
    </section>
  )
}

function DiscoveryInstallers() {
  return (
    <InstallerLinkList
      installers={discoverySample.map(toInstallerListItem)}
      title="One installer per state · rotates weekly"
      description="Beyond the featured cards above, this crawl-friendly index links one researched profile from every state. The set rotates weekly so more listings get direct homepage equity over time."
      eyebrow="Directory discovery"
      className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10"
      showConfidence={false}
    />
  )
}

function BrandDiscovery() {
  const intents = intentTagCounts()
  const brands = brandCounts()
  if (intents.length === 0 && brands.length === 0) return null
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      {intents.length > 0 ? (
        <>
          <SectionHeading
            eyebrow="Optional job-type filter"
            title="Whole-house install or ongoing service?"
            subtitle="Narrow the national directory by standby / whole-house signal or by shops with service and maintenance language in reviews."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {intents.map(({ tag, count }) => (
              <Link
                key={tag.slug}
                href={`${LIST_BASE}/tags/${tag.slug}`}
                className="rounded-btn border border-[var(--color-border)] px-4 py-2 text-[15px] font-semibold"
              >
                {tag.shortLabel}{' '}
                <span className="tabular text-[var(--color-muted)]">{count}</span>
              </Link>
            ))}
          </div>
        </>
      ) : null}
      {brands.length > 0 ? (
        <div className={intents.length > 0 ? 'mt-16' : undefined}>
          <SectionHeading
            eyebrow="Optional brand filter"
            title="Already know the brand?"
            subtitle="The directory is brand-agnostic. Generac buyers often search for dealers, installers, or service — that hub covers all three from website signal."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map(({ brand, count }) => (
              <Link
                key={brand.slug}
                href={`${LIST_BASE}/tags/${brand.slug}`}
                className="rounded-btn border border-[var(--color-border)] px-4 py-2 text-[15px] font-semibold"
              >
                {brand.slug === 'generac'
                  ? 'Generac dealers & installers'
                  : brand.label}{' '}
                <span className="tabular text-[var(--color-muted)]">{count}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'We cast a wide net',
      b: 'Electricians, HVAC shops, generator dealers, anyone who might install standby equipment for any brand.',
    },
    {
      n: '02',
      t: 'We check the website',
      b: 'Dedicated generator pages rank highest. Repeated mentions next. A single clear signal still makes the list.',
    },
    {
      n: '03',
      t: 'You make the calls',
      b: 'Licenses, load calc, fuel work, permits, warranty path: that verification is still yours. We just filter the noise.',
    },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="The method"
        title="Real website signal. Independent ranking."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="panel p-6">
            <div className="meta">{step.n}</div>
            <h3 className="t-heading mt-3">{step.t}</h3>
            <p className="t-body-sm mt-3">{step.b}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BuyerGuides() {
  const picks = GUIDES.filter((g) => g.phase === 'P0')
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="Buyer guides"
        title="Read before you request quotes"
        subtitle="Cost, sizing, and the first-call questions, written from primary sources, not installer blogs."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {picks.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card p-6">
            <span className="eyebrow-bare">{guide.eyebrow}</span>
            <h3 className="t-heading mt-3">{guide.title}</h3>
            <p className="t-body-sm mt-3">{guide.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/guides" className="link text-[16px] font-semibold">
          All buyer guides →
        </Link>
      </div>
    </section>
  )
}

function PullQuote() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-10">
      <blockquote className="max-w-3xl border-l-4 border-[var(--color-accent)] pl-6">
        <p className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[var(--color-ink)] sm:text-[32px]">
          Not an endorsement. A better place to start.
        </p>
        <footer className="meta mt-4">
          Website signal · Buyer-first research · Brand-agnostic
        </footer>
      </blockquote>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="band-dark mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-10">
        <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
          Start with your state.
        </h2>
        <p className="mt-4 max-w-xl text-[17px] text-[var(--color-band-body)]">
          {TOTAL_INSTALLERS.toLocaleString()} researched installers across{' '}
          {TOTAL_STATES} states, with unique market notes on every state page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={LIST_BASE}>Open the state list</ButtonLink>
          <ButtonLink href={`${LIST_BASE}/near-me`} variant="secondary">
            Search near me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

function HomeJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        publisher: { '@id': `${SITE.url}/#organization` },
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
