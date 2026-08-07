import Link from 'next/link'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { FAQ, FAQJsonLd, type FAQItem } from '@/components/FAQ'
import { ButtonLink } from '@/components/Button'
import { LIST_BASE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'The Deferred-Interest Trap on Generator Financing',
  description:
    'How dealer “same as cash” plans charge retroactive interest if the balance is not paid in full, and why minimum payments may not finish the job.',
  path: '/financing/deferred-interest-trap',
  type: 'article',
})

const CRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Financing', href: '/financing' },
  { label: 'Deferred-interest trap', href: '/financing/deferred-interest-trap' },
]

const FAQS: FAQItem[] = [
  {
    q: 'What is deferred interest on generator financing?',
    a: 'A promotional period (Generac’s published example: 18 months) where interest accrues but is waived only if the full promotional balance is paid before the period ends. If you miss that deadline, interest is charged retroactively from the purchase date at the standard purchase APR, not from the day you missed.',
  },
  {
    q: 'Is deferred interest the same as 0% APR?',
    a: 'No. True 0% APR means no interest if you make minimum payments on time. Deferred interest means the interest was accumulating silently and can all come due at once if the balance is not cleared in the promo window.',
  },
  {
    q: 'Why might minimum payments fail on a deferred-interest plan?',
    a: 'Generac’s disclosure states fixed promotional payments (2.50% of highest promo balance on the 18-month plan) may be insufficient to pay off the balance before the promo period ends. On a $13,000 project that is roughly $325/month. Verify your balance and term against the disclosure.',
  },
  {
    q: 'What is the alternative to deferred interest?',
    a: 'Generac also publishes a long fixed-APR plan (132 months at 9.99% APR in their disclosures, with payments at 1.25% of balance, roughly $163/month on $13,000). You pay interest from day one, but there is no retroactive cliff. Compare total cost of both structures.',
  },
  {
    q: 'What should I do before signing?',
    a: 'Get the written disclosure, calculate whether your planned payments clear the promo balance one month early, set a calendar reminder, and compare total financed cost to a credit union loan or cash. If the math is tight, the long fixed-APR plan may be safer than “same as cash.”',
  },
]

export default function DeferredInterestTrapPage() {
  return (
    <>
      <FAQJsonLd items={FAQS} />
      <BreadcrumbListJsonLd items={CRUMBS} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-10">
        <BreadcrumbNav items={CRUMBS} />
        <span className="eyebrow mt-8">Financing</span>
        <h1 className="t-display mt-4">The deferred-interest trap</h1>
        <p className="t-body mt-6 text-[19px]">
          &quot;Same as cash&quot; on a standby generator project is often
          deferred interest, not zero interest. The distinction matters on a
          $13,000 installed job because the penalty is retroactive.
        </p>

        <div className="prose-content mt-10">
          <h2>How the trap works</h2>
          <p>
            Generac&apos;s published Synchrony Project Card disclosures describe
            two promotional structures.           The 18-month plan is{' '}
            <strong>deferred interest</strong>: no interest only if the
            promotional balance is paid in full within 18 months. Otherwise, interest accrues
            from the <em>purchase date</em> at the standard purchase APR
            (26.99% in Generac&apos;s non-promotional disclosure as of August
            2025).
          </p>
          <p>
            That is not a late fee. It is years of interest applied at once to a
            balance you thought was interest-free.
          </p>

          <h2>Worked example (from published payment formulas)</h2>
          <p>
            On a <strong>$13,000</strong> installed project using Generac&apos;s
            published formulas:
          </p>
          <ul>
            <li>
              <strong>18-month deferred plan:</strong> 2.50% × $13,000 ≈{' '}
              <strong>$325/month</strong> fixed promotional payment, plus $29
              activation fee
            </li>
            <li>
              <strong>132-month fixed 9.99% APR plan:</strong> 1.25% × $13,000 ≈{' '}
              <strong>$163/month</strong>, interest from purchase date
            </li>
          </ul>
          <p>
            The cheaper monthly payment on the long plan costs more total
            interest, but it has no cliff. The higher payment on the 18-month
            plan only wins if you actually zero the balance before month 18.
          </p>

          <h2>Why minimum payments lie</h2>
          <p>
            Generac&apos;s disclosure explicitly warns that required minimum
            payments on the deferred plan may be insufficient to pay off the
            promotional balance before the period ends. Dealers quote the
            promotional payment; they rarely model the retroactive interest
            scenario on a whiteboard.
          </p>
          <p>
            Practical test: divide your promo balance by months remaining. Add
            a buffer. If you cannot commit to that payment, or a lump payoff,
            treat deferred interest as a bet you may lose.
          </p>

          <h2>Questions to ask the dealer</h2>
          <ol>
            <li>Is this deferred interest or true 0% APR?</li>
            <li>What is the standard purchase APR if I miss the promo deadline?</li>
            <li>Does the promotional payment guarantee payoff before the period ends?</li>
            <li>Are permits, gas work, and electrical all on the same financed ticket?</li>
            <li>What is the total of payments if I ride the full 132-month plan instead?</li>
          </ol>

          <h2>What we do not claim</h2>
          <p>
            APRs, fees, and program names change. We cite Generac&apos;s
            published disclosure structure as an example of how dealer plans
            work, not as a live rate quote for your dealer today. Read your
            specific agreement.
          </p>
          <p>
            We also make no tax credit, rebate, or insurance-discount claims.
            Those were researched and removed from our library because they turn
            on funding cycles we cannot track.
          </p>
        </div>

        <div className="mt-12 rounded-card border border-[var(--color-ink)] bg-[var(--color-panel)] p-6">
          <h2 className="t-heading">Nail the project before the payment plan</h2>
          <p className="t-body-sm mt-2">
            An itemized quote from a licensed installer beats a low monthly
            payment on the wrong scope. Start with researched installers in your
            state.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={LIST_BASE}>Browse by state</ButtonLink>
            <ButtonLink href="/financing" variant="secondary">
              Financing hub
            </ButtonLink>
          </div>
        </div>

        <FAQ items={FAQS} />
        <p className="mt-10 text-[14px] text-[var(--color-muted)]">
          <Link href="/financing" className="link">
            ← Generator financing guide
          </Link>
        </p>
      </article>
    </>
  )
}
