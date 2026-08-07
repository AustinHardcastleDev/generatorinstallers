import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Generator Maintenance and Warranty',
  description:
    'Service intervals by brand, exercise cycles, what warranties actually cover, and why portable recalls are not home standby recalls.',
  path: '/guides/generator-maintenance-warranty',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'How often does a standby generator need maintenance?',
    a: 'Generac air-cooled: oil and filter every 2 years or 200 hours (Schedule A); spark plugs and valve clearance every 4 years or 400 hours (Schedule B). Kohler RCA calls for annual oil. Break-in service at first 25 hours is commonly missed, and required.',
  },
  {
    q: 'Does a standby generator need to exercise?',
    a: 'Yes. Generac air-cooled: 5 minutes weekly/biweekly/monthly in Quiet-Test low speed. Kohler RCA default: 20 minutes. Exercise drives off moisture, relubricates the engine, and tests starting, but schedule it away from bedroom windows.',
  },
  {
    q: 'How long do whole-house generators last?',
    a: 'No manufacturer publishes residential engine-hour life expectancy. Third-party estimates span 800–15,000 hours for air-cooled, a range too wide to cite. Warranties cap at 2,000 hours, functionally unreachable at typical 10–30 run-hours per year.',
  },
  {
    q: 'Can I do maintenance myself?',
    a: 'Generac and Champion allow owner-performed maintenance if documented; warranty repairs must go through authorized dealers. Kohler discourages DIY; Cummins requires a technician for valve clearance and system tests. Read your manual before assuming DIY preserves warranty.',
  },
  {
    q: 'Are Generac recalls a reason to avoid standby units?',
    a: 'No, context matters. CPSC recorded two home standby recalls pre-2010. Every Generac recall from 2021 onward is portable-only, including a 2026 GP-series carburetor recall. Do not conflate portable recall news with home standby equipment.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Ownership"
      title="Generator maintenance and warranty"
      lead="Year count on a warranty badge misleads. Oil intervals, exercise duration, and what labor travel actually covers differ more across brands than the marketing suggests."
      faqs={FAQS}
      slug="generator-maintenance-warranty"
    >
      <h2>Maintenance: brand schedules differ more than you expect</h2>
      <p>
        Generac air-cooled (10–26 kW): Schedule A every{' '}
        <strong>2 years or 200 hours</strong>, oil, filter, battery check.
        Schedule B every <strong>4 years or 400 hours</strong> adds air filter,
        spark plugs, valve clearance. Annual oil changes are dealer service-plan
        structure, not a manufacturer requirement, unless ambient stays below
        40°F or above 85°F continuously (then yearly or 100 hours).
      </p>
      <p>
        Kohler RCA: <strong>annual</strong> oil on 20/26 kW models, roughly
        twice Generac’s interval. Cummins RS: oil at first 25 hours{' '}
        <em>and again</em> at 100 hours break-in.
      </p>
      <p>
        Every brand requires break-in service at first 25 hours. Homeowners
        routinely miss it.
      </p>

      <h2>Exercise cycles and neighbor noise</h2>
      <table>
        <thead>
          <tr>
            <th>Brand / product</th>
            <th>Default duration</th>
            <th>Exercise noise (23 ft)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Generac air-cooled</td>
            <td>5 minutes</td>
            <td>55–57 dB(A) Quiet-Test vs 67 dB(A) loaded</td>
          </tr>
          <tr>
            <td>Kohler RCA</td>
            <td>20 minutes</td>
            <td>56 dB(A) exercise vs 67 dB(A) full speed</td>
          </tr>
          <tr>
            <td>Kohler 26 kW EcoExercise</td>
            <td>90 seconds monthly</td>
            <td>Conversation-level (manufacturer claim)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Exercise fuel cost is trivial on natural gas (~$14/year upper bound for
        a 24 kW Generac) but adds up on propane for long-cycle brands (~$109/year
        upper bound for Kohler 26RCA at 20 min/week). Schedule exercise for
        weekday mid-morning; biweekly or monthly is manufacturer-supported.
      </p>

      <h2>Battery: the #1 no-start cause, with caveats</h2>
      <p>
        A ten-year study of 300 emergency gensets found starter-battery failure
        at ≥30% of total failures, but that is commercial/institutional data,
        not residential standby statistics. Generac support cites 3–5 year
        battery life; Protector liquid-cooled manuals print replace every 3
        years (2 in extreme conditions).
      </p>
      <p>
        Do not use external trickle chargers against Generac’s integrated smart
        charger, the manual says so explicitly.
      </p>

      <h2>Warranty: compare terms, not years</h2>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Standard term</th>
            <th>What matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Generac air-cooled</td>
            <td>5 years</td>
            <td>Parts+labor+travel yrs 1–2; parts only yr 3; major components yrs 4–5; 100 mi travel cap</td>
          </tr>
          <tr>
            <td>Kohler RCA</td>
            <td>5 years</td>
            <td>Parts, labor, travel all 5 years; 200 mi round trip per repair</td>
          </tr>
          <tr>
            <td>Cummins RS</td>
            <td>5 years / 2,000 hr</td>
            <td>Certified electrician required for warranty</td>
          </tr>
          <tr>
            <td>Champion</td>
            <td>10 years</td>
            <td>Parts-only after year 2; dealer activation required</td>
          </tr>
          <tr>
            <td>Briggs PowerProtect</td>
            <td>7 years (10 dealer DX)</td>
            <td>Parts, labor, travel comprehensive</td>
          </tr>
        </tbody>
      </table>
      <p>
        All majors cap at <strong>2,000 hours</strong>, unreachable at typical
        residential runtime (EIA: 11 hours total interruption in 2024 nationwide,
        most of that storm-driven).
      </p>
      <p>
        Extended warranties (Generac: 7-year ~$735, 10-year ~$1,035 air-cooled)
        must be purchased within the first year. Remote monitoring is not a
        warranty condition, Generac Mobile Link Basic is free.
      </p>

      <h2>Recalls: portable is not standby</h2>
      <p>
        CPSC recorded exactly two recalls touching home standby equipment, both
        pre-2010. Generac recalls from 2021 onward are portable-only. When you
        see recall headlines, check the product class before it spooks a standby
        purchase decision.
      </p>

      <h2>Ownership cost summary</h2>
      <ul>
        <li>Professional maintenance visit: $171–$396 (Angi 2026, average $274)</li>
        <li>Annual upkeep all-in: $200–$600</li>
        <li>DIY Generac maintenance kit (20–22 kW): ~$30 at retail</li>
        <li>Mobile Link Premium monitoring: $5.49/mo web (single generator)</li>
      </ul>
      <p>
        Article 702 imposes no legally required maintenance or testing for
        optional standby, unlike emergency systems under NEC 700. Maintenance is
        a reliability choice, not a code obligation, but warranty claims require
        proof schedules were followed.
      </p>
    </GuideLayout>
  )
}
