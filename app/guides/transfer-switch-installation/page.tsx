import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Transfer Switch and Interlock Kits',
  description:
    'Automatic vs manual transfer, interlock kits for portables, and why backfeeding through a dryer outlet violates the code.',
  path: '/guides/transfer-switch-installation',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'What is an automatic transfer switch (ATS)?',
    a: 'An ATS monitors utility voltage, starts the generator after a delay, transfers load when the generator is up to spec, then retransfers to utility when power stabilizes. Residential ATSs are open-transition, a brief break in power during transfer. Standby generators require a listed ATS under NEC 702.5.',
  },
  {
    q: 'Service-rated vs non-service-rated ATS, what is the difference?',
    a: 'Service-rated (service-entrance) switches include the utility disconnect and install between meter and main panel, whole-house backup from one point. Non-service-rated switches install downstream, typically feeding an essential-circuits subpanel. The choice drives generator sizing and neutral bonding.',
  },
  {
    q: 'What is a generator interlock kit?',
    a: 'A mechanical or electrical interlock on your main panel that prevents the main breaker and generator breaker from being on simultaneously. It is the code-compliant budget path for portables, roughly $400–$900 installed plus an exterior inlet box.',
  },
  {
    q: 'Can I use a dryer outlet to backfeed my portable generator?',
    a: 'No. NEC 702.5 requires listed transfer equipment preventing inadvertent utility interconnection. Backfeeding creates line-worker hazard, live exposed prongs, and panel fault risk if utility returns. Consumer Reports calls suicide cords “rogue products” not listed by any NRTL.',
  },
  {
    q: 'What ATS amperage do I need?',
    a: '100, 150, and 200A cover most single-family homes; 400A on large services. Essential-circuit products sell by circuit count, Generac packages 10–14 kW units with 16-circuit switches. Match ATS amperage to your service, not just generator kW.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Electrical"
      title="Transfer switch and interlock kits"
      lead="Transfer equipment is what separates a standby install from a hazard. Here is how automatic switches, manual switches, and interlock kits differ, and why the dryer-outlet shortcut fails on every level."
      faqs={FAQS}
      slug="transfer-switch-installation"
    >
      <h2>Why transfer equipment is non-negotiable</h2>
      <p>
        NEC 702.5 requires interconnection or transfer equipment that is listed
        and prevents inadvertent interconnection of all power sources. Optional
        standby systems with fixed or portable generators need this, the narrow
        exception for supervised temporary portable connections does not cover
        homeowner backfeeding.
      </p>
      <p>
        Violation modes from backfeeding through a dryer outlet:
      </p>
      <ol>
        <li>
          Power flows past the meter onto the distribution system where crews
          assume conductors are dead
        </li>
        <li>
          Exposed male plug prongs are energized, shock hazard
        </li>
        <li>
          Utility return onto an out-of-phase generator is a destructive fault
          inside the service panel
        </li>
      </ol>
      <p>
        The compliant interlock path costs <strong>$400–$900 installed</strong>{' '}
       , not a reason to improvise.
      </p>

      <h2>Automatic transfer switch (standby path)</h2>
      <p>
        Monitors utility, signals generator start, transfers load after voltage
        and frequency stabilize, retransfers after utility stabilizes, shuts
        generator down. Residential units are <strong>open transition</strong>,
        with a brief power break during transfer (~10 seconds total including generator
        start).
      </p>
      <h3>Service-rated vs non-service-rated</h3>
      <ul>
        <li>
          <strong>Service-rated (service-entrance):</strong> contains utility
          service disconnect; mounts between meter and main panel; becomes the
          service disconnect; neutral-to-ground bonding moves into the switch.
          Generac RXSW line is service-entrance rated.
        </li>
        <li>
          <strong>Non-service-rated:</strong> no main breaker; mounts downstream;
          feeds essential-circuits subpanel. Generac RXSC line is not
          service-entrance rated.
        </li>
      </ul>
      <p>
        Whole-house vs partial-house is largely an ATS decision, not just
        generator kW.
      </p>

      <h3>Smart ATS features worth asking about</h3>
      <ul>
        <li>Load management for up to four HVAC circuits (Generac 200A smart ATS)</li>
        <li>Integration with Smart Management Modules for larger loads</li>
        <li>Utility approval for service-entrance models in the metering path</li>
        <li>Withstand rating (Generac 200A: 22,000A at 240V)</li>
      </ul>

      <h2>Manual transfer switch (portable middle path)</h2>
      <p>
        A 6–10 circuit manual switch runs <strong>$1,000–$2,200 installed</strong>{' '}
        plus inlet box and permit. You choose which circuits receive power,
        which is useful when central AC is off the table. Still requires going outside to
        start the portable and flip the switch every outage.
      </p>

      <h2>Interlock kit (budget portable path)</h2>
      <p>
        Mechanical interlock on the main panel: main breaker and generator
        breaker cannot both be on. Paired with an exterior L14-30 or L14-50 inlet
        and cord to the portable. Total compliant hookup often{' '}
        <strong>$1,400–$3,700 installed</strong> including permit, plus the
        generator purchase.
      </p>
      <p>
        Sized correctly (7,500–12,000 running watts), an interlock can carry
        furnace blower, refrigerator, well pump, lights, and one 240V load.
        Starting central AC while everything else runs is usually off the table.
      </p>

      <h2>Grounding and neutral: the field failure mode</h2>
      <p>
        Whether the generator is a separately derived system depends on the
        transfer switch, switched neutral vs solid neutral. Two simultaneous
        neutral-to-ground bonds produce current on the grounding path. Fix:
        remove factory generator bond (with field marking per 445.11) or use
        switched-neutral transfer equipment.
      </p>
      <p>
        Service-rated ATS installs make the main panel a subpanel, isolate the
        neutral bar. Non-service-rated: bond stays at main panel; never add a
        second. This is where good installers earn their fee.
      </p>

      <h2>Retail ATS pricing context</h2>
      <p>
        Component reference (retail, not installed): Generac 200A smart ATS
        $699–$809; 200A ATS + 20-circuit load center $1,299; 100A + 16-circuit
        $589. ATS installation labor commonly $600–$2,500 depending on panel
        complexity, another reason install exceeds equipment cost.
      </p>

      <h2>Bottom line</h2>
      <p>
        Standby generators ship with or specify an automatic transfer switch.
        Portable owners need a listed interlock or manual switch, full stop. We
        did the installer research for the install side; the electrical code
        requirements are the same whether you hire from our list or elsewhere.
      </p>
    </GuideLayout>
  )
}
