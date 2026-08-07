import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Questions to Ask a Generator Installer',
  description:
    'A first-call checklist: licenses, fuel work, load calc, permits, warranty path, and red flags from real complaints.',
  path: '/guides/questions-to-ask-generator-installer',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'What should I ask a generator installer on the first call?',
    a: 'Start with licenses (electrical and gas, separately), who pulls permits, whether a load calculation was performed, how the gas line was sized, who performs factory startup, and what happens for warranty service after the sale. Ask for an itemized quote, not a single lump sum.',
  },
  {
    q: 'Does the installer need to be factory authorized?',
    a: 'Not for installation legality, but it matters for warranty repairs. Generac warranty work must go through an Independent Authorized Service Dealer. Kohler requires a certified installer for factory startup and warranty registration. Ask who holds each license on your job.',
  },
  {
    q: 'Why do I need both an electrician and a plumber?',
    a: 'Consumer Reports frames it the same way we do: standby installs are two trades, electrical for the ATS and panel, licensed gas fitter for fuel piping and pressure test. One company on the contract does not mean one person did both sides.',
  },
  {
    q: 'What are red flags when hiring a generator installer?',
    a: 'Phone quotes with no site visit, suggesting permits be skipped, deposits above your state cap, door-to-door solicitation after storms, cash-only payment, and quotes that hide the install line item. BBB complaint themes often involve deposits paid then months of permit stalls.',
  },
  {
    q: 'How do I verify a license number?',
    a: 'Search the state board’s own portal, not an aggregator. Confirm the number matches the company name, status is active, and the classification fits the job. In split-license states (Massachusetts gas fitting, Texas LP-gas via Railroad Commission), verify both trades.',
  },
  {
    q: 'When should warranty activation happen?',
    a: 'After installation and required permitting are complete. Generac states units should not be activated until then, activating before final inspection burns the warranty clock. Confirm startup, registration, and who you call during the next regional outage.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Hiring"
      title="Questions to ask a generator installer"
      lead="A home standby install is legally two trades in most states. These are the questions that separate a thorough first call from a phone quote generated from square footage."
      faqs={FAQS}
      slug="questions-to-ask-generator-installer"
    >
      <h2>Licensing: verify both trades</h2>
      <p>
        The ATS, feeder, and panel work require a licensed electrician. Gas or LP
        piping, pressure test, and meter coordination require a licensed plumber
        or gas fitter, a different credential in Massachusetts, Virginia, and
        Texas (where LP-gas is Railroad Commission territory).
      </p>
      <p>
        Ask directly: <strong>&quot;Which parts do you self-perform, and who
        specifically holds the electrical license and gas license on my
        job?&quot;</strong> Subcontracting the gas side is normal. Hiding it is
        not.
      </p>

      <h2>Factory authorization: what it does and does not mean</h2>
      <p>
        &quot;Factory authorized&quot; is a commercial program, not a competency
        license. It usually means someone completed factory training and the
        company can register warranties and perform authorized repairs.
      </p>
      <ul>
        <li>
          <strong>Generac</strong> strongly recommends authorized dealers but
          does not require one to install. Warranty <em>repairs</em> must go
          through an Independent Authorized Service Dealer, with travel capped
          at 100 miles / 3 hours round trip.
        </li>
        <li>
          <strong>Kohler</strong> publishes a tier table: plain contractors can
          install non-certified but cannot perform factory startup or register
          warranty. Startup requires a certified installer.
        </li>
        <li>
          <strong>Cummins</strong> requires a certified electrician for warranty
          validity but supports buying online and hiring your own installer.
        </li>
      </ul>

      <h2>The quote checklist</h2>
      <p>A trustworthy proposal itemizes:</p>
      <ol>
        <li>Unit, brand, model, kW, fuel, ATS model and amperage</li>
        <li>Load calculation method (Article 220 vs 220.87 demand data)</li>
        <li>Gas, pipe size, run length, meter upgrade, propane tank if applicable</li>
        <li>Electrical, conductor sizing, panel work, grounding approach</li>
        <li>Pad and site prep</li>
        <li>Permits, count, fees, who files</li>
        <li>Startup, who performs it, after inspections</li>
        <li>Labor warranty separate from equipment warranty</li>
        <li>Payment schedule within your state&apos;s deposit cap</li>
      </ol>
      <p>
        Consumer Reports puts units at roughly $3,400–$7,000 while installation
        runs $5,000–$10,000+. When more than half the price is install, an
        unitemized line hides more than half the deal.
      </p>

      <h2>Technical questions that catch shortcuts</h2>
      <ul>
        <li>
          Was a gas load analysis submitted to the utility before we ordered
          equipment?
        </li>
        <li>
          Will you record gas pressure at full load during commissioning? (A
          fluctuating manometer needle means undersized pipe.)
        </li>
        <li>
          Service-rated ATS (whole-house) or essential-circuits subpanel?
        </li>
        <li>
          Who services this unit during a regional outage, you, or a third
          party?
        </li>
        <li>
          Is any scope subcontracted? To whom?
        </li>
      </ul>

      <h2>Red flags worth walking away from</h2>
      <ul>
        <li>No license numbers on the written proposal</li>
        <li>&quot;We don&apos;t need a permit for this&quot;</li>
        <li>Deposit above your state cap (California: $1,000 or 10%, whichever is less)</li>
        <li>Quote without a site visit</li>
        <li>Door-to-door crews after a storm, especially out-of-state plates</li>
        <li>Pressure to sign today; refusal to leave a written proposal</li>
        <li>Cash-only or payment to a personal account</li>
      </ul>
      <p>
        Post-disaster enforcement is real: Florida treats unlicensed contracting
        during a declared emergency as a third-degree felony. Missouri filed 23
        felony counts against a contractor targeting 2025 tornado victims.
      </p>

      <h2>After the sale</h2>
      <p>
        Ask who you call when the generator fails during the outage it was
        bought for. The dominant BBB complaint theme is not bad installation.
        It is disappearing: months of permit stalls after the deposit, and
        no-show service when the power is actually out.
      </p>
      <p>
        We did the installer research so you can start with a cleaner list.
        These questions are how you turn that list into a careful choice,
        not an endorsement, a better starting point.
      </p>
    </GuideLayout>
  )
}
