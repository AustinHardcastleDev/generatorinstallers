import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'What Size Generator Do You Need?',
  description:
    'Skip the square-footage rule of thumb. Load calculations, locked-rotor amps, and when load management lets a smaller unit cover the house.',
  path: '/guides/what-size-generator',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'What size generator do I need for my house?',
    a: 'There is no square-footage answer. NEC Article 702 gives two compliant paths with an automatic transfer switch: size for the full Article 220 calculated load, or install a load-management system and size for the maximum load that system will allow on at once. Central AC locked-rotor amps (LRA × 240V) are usually the sizing driver.',
  },
  {
    q: 'Does a 2,000 sq ft home need a 22 kW generator?',
    a: 'Not automatically. Square footage enters the NEC optional calculation only as 3 VA per square foot for general lighting, one input among many. Two 2,500 sq ft homes can differ by 15 kW depending on HVAC, well pumps, heat type, and EV chargers.',
  },
  {
    q: 'What is load management and why does it matter?',
    a: 'Load management (Generac Smart Management Modules, smart ATS circuits, etc.) sheds non-essential loads when generator frequency drops. That is why a 22 kW unit can back a 200A service, the code explicitly permits sizing to the managed load, not the panel main breaker rating.',
  },
  {
    q: 'How do I size for central air conditioning?',
    a: 'Read locked-rotor amps (LRA) off the outdoor condenser data plate and multiply by 240 volts. That starting surge, not running watts or tonnage, determines whether the generator can start the compressor. Soft starters can cut inrush roughly in half.',
  },
  {
    q: 'Air-cooled or liquid-cooled?',
    a: 'Most suburban whole-house jobs use air-cooled units (10–28 kW). Liquid-cooled starts around 24–32 kW and costs more than double at the equipment level. The crossover is a budget and noise conversation, not a square-footage rule.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Sizing"
      title="What size generator do you need?"
      lead="Skip the square-footage cheat sheet. Sizing is a load calculation problem, and load management is why most homes do not need as many kilowatts as a straight NEC math exercise suggests."
      faqs={FAQS}
      slug="what-size-generator"
    >
      <h2>The code gives two legal paths</h2>
      <p>
        With an automatic transfer switch, NEC 702.4 requires one of two
        things: size the generator to carry the home&apos;s full calculated load
        under Article 220, or install an energy management system per 750.30 and
        size the generator to the maximum load that system will allow on at
        once.
      </p>
      <p>
        That second path is not a loophole, it is why load-shed modules exist.
        A straight Article 220 calculation sizes for service-entrance demand and
        routinely produces an oversized, uneconomical unit. Good installers
        document which method they used.
      </p>

      <h2>Central AC is almost always the driver</h2>
      <p>
        The number that matters is <strong>locked-rotor amps (LRA)</strong> off
        the outdoor condenser data plate, multiplied by 240 V, not tonnage,
        not square footage, not RLA.
      </p>
      <p>
        Well pumps are the second common surprise. A 1 HP submersible can surge
        4,000–6,000 watts at start against a running load that looks harmless
        on paper.
      </p>
      <p>
        Manufacturers publish motor-starting capacity (kVA at 240 V) for
        cross-brand comparison, but test conditions differ by brand. Treat
        kVA tables as directional, not gospel.
      </p>

      <h2>Load management in practice</h2>
      <p>
        Generac supports up to eight Smart Management Modules per system, each
        on a unique priority 1–8, shedding loads when frequency drops and
        restoring them in priority order. Generac&apos;s 200A smart ATS can
        separately manage up to four HVAC loads without added hardware.
      </p>
      <p>
        Some jurisdictions require load management whenever generator output is
        less than the panel main breaker rating. Ask whether your quote
        includes shedding modules or a smart ATS, and which circuits stay
        protected during an outage.
      </p>

      <h2>Common size classes, 2025–2026</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Typical use</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10–14 kW</td>
            <td>Essential circuits, smaller homes</td>
            <td>Often paired with a 16-circuit ATS</td>
          </tr>
          <tr>
            <td>18–22 kW</td>
            <td>Whole-house with load management</td>
            <td>Most common suburban install band</td>
          </tr>
          <tr>
            <td>24–28 kW air-cooled</td>
            <td>Large homes, multiple HVAC</td>
            <td>Generac 28 kW (2025) is largest air-cooled on market</td>
          </tr>
          <tr>
            <td>32 kW+ liquid-cooled</td>
            <td>Large estate, commercial-adjacent</td>
            <td>2.6× equipment cost step from largest air-cooled</td>
          </tr>
        </tbody>
      </table>

      <h2>Existing homes: the underused option</h2>
      <p>
        NEC 220.87 lets an electrician size from recorded demand data, a year
        of maximum demand, or the average of 15-minute peaks over at least 30
        days, instead of a paper calculation. On a retrofit, that can justify a
        smaller unit than a textbook Article 220 exercise.
      </p>

      <h2>What to ask on the first call</h2>
      <ul>
        <li>Was a load calculation performed? Which NEC method?</li>
        <li>What is the largest motor-starting load (usually AC LRA)?</li>
        <li>Does the quote include load management hardware?</li>
        <li>Whole-house (service-rated ATS) or essential-circuits subpanel?</li>
        <li>Natural gas or propane, and does the kW rating reflect derate on your fuel?</li>
      </ul>
      <p>
        Consumer Reports adds a sizing-economics point worth repeating: smaller
        units cost almost as much to install as larger ones, so the marginal
        cost of stepping up in kW is small relative to the total project, but
        only after the load calc confirms you need the capacity.
      </p>
    </GuideLayout>
  )
}
