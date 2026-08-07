import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Standby vs Portable vs Battery Backup',
  description:
    'When each backup option fits, and the carbon monoxide case that makes portable backfeeding a non-starter.',
  path: '/guides/standby-vs-portable-vs-battery',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Standby vs portable generator, which is better?',
    a: 'Standby wins on automatic transfer, unlimited runtime on natural gas, and safety (permanently sited outdoors). Portable plus a code-compliant interlock costs roughly $2,000–$4,000 total but requires manual setup every outage. Portables kill about 100 Americans per year from CO, the highest of any consumer product under CPSC jurisdiction.',
  },
  {
    q: 'Is a home battery better than a generator?',
    a: 'Different tools. A single 13.5 kWh battery lasts hours at full rated power (Berkeley Lab: 2–2.7 hours at 5 kW continuous). A pipeline-fed standby runs indefinitely. Batteries shine with solar (daily recharge), short outages, and silent operation. Generators win on multi-day events, heavy HVAC loads, and winter when panels are snow-covered.',
  },
  {
    q: 'Can I backfeed through a dryer outlet?',
    a: 'No. NEC 702.5 requires listed transfer equipment that prevents inadvertent utility interconnection. Backfeeding energizes your panel illegally, endangers line workers, and creates fire and shock hazards. A code-compliant interlock kit runs $400–$900 installed.',
  },
  {
    q: 'When is a standby generator the wrong purchase?',
    a: 'If your outages average a few hours a year, a $13,000 standby is poor value. EIA data shows non-major-event interruptions routinely average about two hours per customer per year. A portable with interlock or a battery may fit better.',
  },
  {
    q: 'Can a generator charge a home battery?',
    a: 'Usually not. Tesla’s compatibility table lists charging Powerwall from an upstream generator as No. FranklinWH’s aGate is a notable exception with a generator module. Hybrid designs need planning upfront, not after both systems are installed.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Alternatives"
      title="Standby vs portable vs battery backup"
      lead="Three backup paths, three different failure modes. We mapped when each one fits, including when a standby generator is the wrong purchase."
      faqs={FAQS}
      slug="standby-vs-portable-vs-battery"
    >
      <h2>The core physical difference</h2>
      <p>
        A battery holds a fixed number of kilowatt-hours. A generator on a gas
        line manufactures kilowatt-hours for as long as fuel flows. That single
        sentence drives most of the comparison.
      </p>
      <p>
        Berkeley Lab found most paired residential battery systems are a single
        10 or 13.5 kWh unit at 5 kW rated output, a{' '}
        <strong>duration of 2 to 2.7 hours at full rated power</strong>. Real
        household loads stretch that, but batteries are hours-scale stores when
        pushed hard, not days-scale.
      </p>

      <h2>Head-to-head snapshot</h2>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Home battery (~13.5 kWh)</th>
            <th>Standby generator (NG/LP)</th>
            <th>Portable + interlock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Installed cost</td>
            <td>~$15,650 typical; ~$34k whole-home</td>
            <td>$8k–$16k (Generac); $13,534 Zonda 2025</td>
            <td>~$2k–$4k with interlock</td>
          </tr>
          <tr>
            <td>Automatic transfer</td>
            <td>Yes (with gateway)</td>
            <td>Yes (~10 sec)</td>
            <td>No, manual every outage</td>
          </tr>
          <tr>
            <td>Multi-day outage</td>
            <td>Needs solar to recharge</td>
            <td>Unlimited on natural gas</td>
            <td>Refuel every 8–12 hours</td>
          </tr>
          <tr>
            <td>Central AC</td>
            <td>Usually no (single unit)</td>
            <td>Yes (sized properly)</td>
            <td>Difficult while carrying everything else</td>
          </tr>
          <tr>
            <td>CO risk</td>
            <td>None</td>
            <td>Outdoor, code clearances</td>
            <td>~100 US deaths/year (CPSC)</td>
          </tr>
        </tbody>
      </table>

      <h2>When standby is the right answer</h2>
      <ul>
        <li>Natural gas service line to the house</li>
        <li>Outages measured in days, hurricane coasts, ice-storm belts, long rural feeders</li>
        <li>Well water, sump pump, septic pump, or medical equipment</li>
        <li>Homeowner cannot reliably deploy a portable at 2 a.m.</li>
        <li>Winter outages where solar recharge is unreliable</li>
      </ul>

      <h2>When battery is the right answer</h2>
      <ul>
        <li>Existing or planned solar on the roof</li>
        <li>Time-of-use rates where the battery earns money grid-up</li>
        <li>Frequent but short outages, silent automatic transfer beats engine noise</li>
        <li>Apartment, condo, or HOA constraints on outdoor combustion equipment</li>
      </ul>

      <h2>Portable path: honest labor math</h2>
      <p>
        A code-compliant hookup, interlock kit or manual transfer switch plus
        inlet box, runs roughly <strong>$1,400–$3,700 installed</strong>, plus
        the generator. Every outage requires going outside, fueling, starting,
        engaging the interlock, and refueling every 8–12 hours including
        overnight. Multiply by a five-day ice storm and the standby premium
        starts to look rational.
      </p>

      <h2>Carbon monoxide: the safety case</h2>
      <p>
        About <strong>100 consumers die every year</strong> in the US from CO
        poisoning caused by portable generators (CPSC, 2025). Generators are
        the single consumer product under CPSC jurisdiction associated with the
        most CO deaths.
      </p>
      <p>
        CPSC/NIST modeling of 511 real fatalities found UL 2201-compliant
        generators would avert nearly 100% of deaths; PGMA G300-compliant units
        about 87%. Both standards are voluntary; market conformance remains
        limited. Correct advice unchanged: outdoors only, at least 20 feet from
        the house, exhaust pointed away, working CO alarms on every level.
      </p>
      <p>
        Five percent of generator-related fatalities involved a unit that{' '}
        <em>was</em> outdoors, placed near a window, AC unit, or soffit vent.
        &quot;Outdoors&quot; is not automatically safe.
      </p>

      <h2>Backfeeding is lethal and illegal</h2>
      <p>
        A &quot;suicide cord&quot; from a portable into a dryer outlet energizes
        the panel backward, hazard to line workers, live exposed prongs, and
        destructive fault if utility power returns. NEC 702.5 requires listed
        transfer equipment. The compliant alternative costs hundreds, not
        thousands.
      </p>

      <h2>Hybrid: solar + battery + generator</h2>
      <p>
        For medically dependent households or multi-day winter outages, the belt-and-suspenders
        answer is battery for silent first-night coverage plus generator for
        day two and beyond without sun. Plan integration upfront, Tesla cannot
        charge Powerwall from an upstream generator; FranklinWH aGate can.
      </p>
    </GuideLayout>
  )
}
