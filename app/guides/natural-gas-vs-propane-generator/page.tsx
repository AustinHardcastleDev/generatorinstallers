import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Natural Gas vs Propane Generators',
  description:
    'Runtime, derate, pipe and tank sizing, and how your state’s heating-fuel mix should shape the standby generator conversation.',
  path: '/guides/natural-gas-vs-propane-generator',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Is natural gas or propane better for a standby generator?',
    a: 'Natural gas wins on runtime (pipeline-fed, no tank limit) and usually fuel cost per BTU. Propane wins where no gas service exists, rates higher kW on the same engine, and survived some 2024 hurricanes when delivery trucks could not. Your house’s existing fuel infrastructure should drive the conversation.',
  },
  {
    q: 'Why does my generator produce less power on natural gas?',
    a: 'Most air-cooled units derate on natural gas because propane carries about 2.5× the energy per cubic foot at the mixer’s fixed throughput. A Generac 24 kW unit rates 24 kW on LP but 21 kW on NG, a 12.5% drop. Some smaller models rate the same on both fuels.',
  },
  {
    q: 'What size propane tank do I need?',
    a: 'Plan on 80% usable capacity (a “500 gallon” tank holds ~400 gallons). At full load a 24 kW Generac burns about 3.9 gal/hr on LP, roughly 4 days at full load from a 500-gallon tank, longer at typical partial loads. Cold weather vaporization, not tank size, is the winter constraint.',
  },
  {
    q: 'Who sizes the gas line?',
    a: 'A licensed plumber or gas fitter, not the generator manufacturer. Generac states it cannot size gas lines and requires pipe sized for full load with no diversity factor. Generators run at 100% load; household NFPA 54 tables assume appliances do not all run at once.',
  },
  {
    q: 'Can I convert between natural gas and propane later?',
    a: 'Most air-cooled units are field-convertible (Generac: orange fuel knob rotation plus controller menu change). LP requires a primary regulator that is often not included with the generator. Confirm what your quote includes before assuming conversion is free.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Fuel"
      title="Natural gas vs propane generators"
      lead="Pipeline gas and on-site propane solve the same problem with different infrastructure, economics, and failure modes. Here is how to read the tradeoff for your house."
      faqs={FAQS}
      slug="natural-gas-vs-propane-generator"
    >
      <h2>Head-to-head: what changes</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Natural gas</th>
            <th>Propane (LP)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Runtime during outage</td>
            <td>Effectively unlimited on pipeline</td>
            <td>Tank-limited; needs refill logistics</td>
          </tr>
          <tr>
            <td>Generator kW rating</td>
            <td>Lower (derated)</td>
            <td>Higher, kW on the box is usually LP</td>
          </tr>
          <tr>
            <td>Fuel cost per BTU (2026 national avg)</td>
            <td>~$16/MMBtu</td>
            <td>~$29/MMBtu, roughly 1.8× more</td>
          </tr>
          <tr>
            <td>Disaster continuity</td>
            <td>Underground lines survive most wind events</td>
            <td>Tank is full or it is not; delivery can stall</td>
          </tr>
          <tr>
            <td>Install complexity</td>
            <td>Pipe sizing + possible meter upgrade</td>
            <td>Tank, setbacks (NFPA 58), regulator, fill access</td>
          </tr>
        </tbody>
      </table>

      <h2>The derate is real, but not universal</h2>
      <p>
        Example: Generac 24 kW rates 24,000 W on LP and 21,000 W on NG (12.5%
        derate). Generac 14 kW rates 14,000 W on both. Size the unit on the
        fuel you will actually use, not the LP number on the brochure.
      </p>

      <h2>Gas line sizing: the #1 install failure</h2>
      <p>
        NFPA 54 sizing tables assume load diversity, not everything runs at
        once. A generator runs at 100% with no fudge factor. Undersized pipe
        is the most frequently cited install error: the unit starts, then
        derates or shuts down minutes into a real outage.
      </p>
      <p>
        Required inlet pressure at the generator (Generac air-cooled):{' '}
        <strong>3.5–7.0 in. w.c. natural gas; 10–12 in. w.c. LP vapor.</strong>{' '}
        Commissioning should record pressure at full load. A fluctuating
        manometer needle means trouble.
      </p>
      <p>
        Long runs and large units often need 2 psi service from the utility with
        a step-down regulator near the unit, customer/contractor responsibility
        in many territories.
      </p>

      <h2>Propane tank math</h2>
      <p>
        NFPA 58 setbacks: aboveground 125–500 gallon tanks need{' '}
        <strong>10 ft</strong> from important buildings and buildable property
        lines; 501–2,000 gallon tanks need 25 ft (reducible under specific
        conditions).
      </p>
      <p>
        Own vs lease: leasing is $0 upfront with annual rent and an exclusive-supply
        clause, a competitor cannot fill a tank they do not own. Buying breaks
        even against leasing over roughly 3–5 years at high annual usage; leasing
        wins below ~500 gal/yr (vendor estimates, confirm with local suppliers).
      </p>

      <h2>Regional reality check</h2>
      <p>
        Florida (~90% electric heat, ~6% utility gas): standby installs are
        propane-first in most of the peninsula even when homeowners do not
        identify as propane users. Midwest gas-heated states (Illinois ~75%
        gas): the incremental project is pipe and meter, not a new tank.
      </p>
      <p>
        2024 hurricanes: natural gas distribution largely held; propane delivery
        struggled in winter 2025–26 in some markets. Both facts belong in the
        same conversation, fuel choice is location and season dependent.
      </p>

      <h2>What to confirm in your quote</h2>
      <ul>
        <li>Which fuel the kW rating assumes</li>
        <li>Who sizes and installs the gas line or propane system</li>
        <li>Whether a meter upgrade or 2 psi service is in scope</li>
        <li>Tank size, placement, and own vs lease (LP only)</li>
        <li>Full-load pressure test at commissioning</li>
      </ul>
    </GuideLayout>
  )
}
