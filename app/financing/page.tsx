import Link from 'next/link'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { FAQ, FAQJsonLd, type FAQItem } from '@/components/FAQ'
import { ButtonLink } from '@/components/Button'
import { FinancingCta } from '@/components/FinancingCta'
import { LIST_BASE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Standby Generator Financing Guide',
  description:
    'Dealer financing patterns for home standby generators: deferred-interest traps, long fixed-APR plans, and questions to ask before you sign. Lender-neutral, no rate promises.',
  path: '/financing',
})

const CRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Financing', href: '/financing' },
]

const guides = [
  {
    href: '/financing/deferred-interest-trap',
    title: 'The deferred-interest trap',
    body: 'Why “same as cash” dealer plans can charge retroactive interest, and how minimum payments may not pay off the balance in time.',
  },
  {
    href: '/guides/whole-house-generator-cost',
    title: 'Whole-house generator cost',
    body: 'Equipment is roughly 40–55% of the finished project. Understand the install line before you finance the sticker price.',
  },
  {
    href: '/guides/questions-to-ask-generator-installer',
    title: 'Questions to ask an installer',
    body: 'Itemized quotes, deposit caps, and warranty path: the conversation to have before financing locks in.',
  },
]

const FAQS: FAQItem[] = [
  {
    q: 'Can you finance a whole-house generator?',
    a: 'Yes. Dealer financing is common on standby generator projects. Plans vary by dealer and card issuer. Typical structures include deferred-interest promotions and long fixed-APR installment plans. Read the disclosure before you compare monthly payments to the cash quote.',
  },
  {
    q: 'What financing do Generac dealers offer?',
    a: 'Generac partners with Synchrony on the Project Card / Generac Credit Card. Published structures include an 18-month deferred-interest plan and a 132-month reduced-APR plan (9.99% APR in Generac’s disclosures as of 2025). Non-promotional purchase APR and fees are listed in the same disclosure. Verify current terms with the dealer.',
  },
  {
    q: 'Is dealer financing the same as a home improvement loan?',
    a: 'No. Dealer cards are usually closed-loop or promotional revolving credit tied to the purchase. Bank personal loans or HELOCs are separate products with different rates, terms, and approval paths. Compare total cost, not just the monthly payment on the dealer card.',
  },
  {
    q: 'Should I finance before or after I pick an installer?',
    a: 'After you have an itemized installed quote, not before. Financing the wrong scope (undersized unit, missing gas work, no permits) spreads a bad project over 11 years. Nail the project definition first, then compare payment structures.',
  },
  {
    q: 'Do we publish tax credits or rebates for generators?',
    a: 'No. Incentive programs change on legislative and funding cycles we cannot keep current. We make no tax credit or rebate claims. If incentives matter to you, check DSIRE and your tax advisor directly.',
  },
]

export default function FinancingHubPage() {
  return (
    <>
      <FAQJsonLd items={FAQS} />
      <BreadcrumbListJsonLd items={CRUMBS} />
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <BreadcrumbNav items={CRUMBS} />
        <span className="eyebrow mt-8">Financing field guide</span>
        <div className="mt-4 max-w-3xl">
          <h1 className="t-display">
            Plan the payment structure before deposits land.
          </h1>
          <p className="t-body mt-6 text-[19px]">
            Dealer financing often includes deferred-interest promotions and
            long fixed-APR installment plans. Both are easy to misread when
            the salesperson quotes a monthly payment on a $13,000 installed
            project.
          </p>
          <p className="t-body-sm mt-4">
            This is a lender-neutral planning guide. We do not quote live APRs
            or predict approval. Terms change and vary by dealer. Read the
            card disclosure and compare total cost to cash.
          </p>
        </div>

        <section className="mt-14 border-y border-[var(--color-ink)] py-8 md:grid md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          <div>
            <span className="eyebrow">The sequence</span>
            <h2 className="t-section mt-3">
              What to do before you sign dealer financing
            </h2>
            <p className="t-body-sm mt-4">
              Monthly payment is the last number, not the first. Structure the
              project, then structure the loan.
            </p>
          </div>
          <ol className="mt-6 space-y-4 t-body-sm md:mt-0">
            <li>
              <strong className="text-[var(--color-ink)]">1. Itemized installed quote.</strong>{' '}
              Separate generator, ATS, gas, electrical, permits, startup. Equipment is ~40–55% of the total.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">2. Compare cash vs financed total.</strong>{' '}
              Multiply the promotional payment by term; add activation fees; model deferred-interest failure.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">3. Read the disclosure.</strong>{' '}
              Deferred interest is not zero interest. Minimum payments may not retire the promo balance in time.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">4. Shop alternatives.</strong>{' '}
              Credit union personal loan, HELOC, or cash: dealer convenience has a price.
            </li>
          </ol>
        </section>

        <section className="mt-14">
          <div className="flex flex-wrap items-center gap-4">
            <span className="eyebrow">Read next</span>
            <div className="rule hidden min-w-8 flex-1 sm:block" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-card border border-[var(--color-border)] bg-[var(--color-panel)] p-6 transition-colors hover:border-[var(--color-ink)]"
              >
                <h2 className="t-heading">
                  {guide.title} →
                </h2>
                <p className="t-body-sm mt-3">{guide.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <FinancingCta
            title="Deferred interest is the clause worth reading twice."
            body="Generac’s published 18-month plan charges retroactive interest from the purchase date if the promo balance is not paid in full in time. Walk through the trap before you compare monthly payments."
            linkLabel="Read the deferred-interest guide →"
          />
        </div>

        <section className="mt-14 grid gap-6 border-t border-[var(--color-border)] pt-8 md:grid-cols-2">
          <div>
            <span className="eyebrow">Directory</span>
            <h2 className="t-heading mt-3">Pair financing math with installer due diligence.</h2>
            <p className="t-body-sm mt-3">
              Compare itemized quotes from installers whose websites show real
              standby generator signal.
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            <ButtonLink href={LIST_BASE}>Browse by state</ButtonLink>
            <ButtonLink href={`${LIST_BASE}/near-me`} variant="secondary">
              Search near me
            </ButtonLink>
            <ButtonLink href="/guides/whole-house-generator-cost" variant="secondary">
              Cost guide
            </ButtonLink>
          </div>
        </section>

        <FAQ title="Generator financing FAQs" items={FAQS} />
      </article>
    </>
  )
}
