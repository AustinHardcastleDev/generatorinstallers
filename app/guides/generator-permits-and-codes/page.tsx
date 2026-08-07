import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Generator Permits, Clearances, and Codes',
  description:
    'NEC 702, NFPA 37 clearances, manufacturer listings, and why your AHJ, not a blog, has the last word.',
  path: '/guides/generator-permits-and-codes',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Do I need a permit for a whole-house generator?',
    a: 'Yes, essentially always. Typical installs need two or three permits, electrical, gas/mechanical, sometimes building/zoning, plus multiple inspections (trench, rough, gas pressure test, final). Real municipal fees often run $150–$600 combined; permits are rarely why a quote is high.',
  },
  {
    q: 'How far does a generator need to be from the house?',
    a: 'NFPA 37 defaults to 5 ft from wall openings and combustible walls. Generac air-cooled units are listed for 18 in rear clearance to stationary walls via fire testing, but still require no operable windows within 5 ft of any point on the generator. Your manufacturer manual and AHJ win over blog shorthand.',
  },
  {
    q: 'What NEC article covers home standby generators?',
    a: 'Article 702, Optional Standby Systems. Key sections: 702.4 sizing, 702.5 listed transfer equipment, 702.7 signage. Article 445 covers generator disconnect and emergency shutdown (445.19 in 2023 NEC; 445.18(D) in 2020). NEC adoption varies by state, verify your edition.',
  },
  {
    q: 'Can my HOA block a standby generator?',
    a: 'Depends on state law. Texas Property Code §202.019 bars HOAs from prohibiting permanently installed standby generators and limits location rules that raise cost more than 10%. Florida’s 2024 hurricane-protection statute covers exterior fixed generators. Elsewhere, HOA rules are a separate layer from code.',
  },
  {
    q: 'What happens if I skip the permit?',
    a: 'California’s Transfer Disclosure Statement requires sellers to disclose unpermitted work, with real litigation over compliance costs. Miami-Dade charges double fees for unpermitted work. Insurance claim denial over permits is widely asserted but poorly sourced, we do not state it as fact.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Codes"
      title="Generator permits, clearances, and codes"
      lead="Home standby generators fall under NEC Article 702, not emergency systems. Clearances come from the manufacturer listing and your AHJ, not from a generic 5-foot rule copied across the internet."
      faqs={FAQS}
      slug="generator-permits-and-codes"
    >
      <h2>NEC Article 702: optional standby</h2>
      <p>
        Residential home standby is <strong>optional standby</strong> under NEC
        702, not Article 700 (emergency) or 701 (legally required). Practical
        difference: Articles 700/701 impose commissioning, testing, and
        recordkeeping; <strong>Article 702 imposes none</strong>. Nobody is
        legally required to maintain a home standby generator.
      </p>
      <p>
        Key provisions:
      </p>
      <ul>
        <li>
          <strong>702.4(B):</strong> with automatic transfer, size for full
          Article 220 load or use energy management per 750.30
        </li>
        <li>
          <strong>702.5:</strong> listed transfer equipment preventing
          inadvertent interconnection with utility
        </li>
        <li>
          <strong>702.7:</strong> signage at service equipment identifying the
          standby source
        </li>
        <li>
          <strong>445.19(C) (2023 NEC):</strong> emergency shutdown device
          outside the dwelling, on the generator enclosure satisfies it
        </li>
      </ul>
      <p>
        NEC adoption is fragmented (August 2026): 2023 NEC in 20 states, 2020 in
        15, Arizona/Illinois/Mississippi/Missouri with no statewide adoption.
        Cite the edition your AHJ enforces.
      </p>

      <h2>NFPA 37 vs manufacturer clearances</h2>
      <p>
        NFPA 37 baseline for outdoor engines: <strong>5 ft</strong> from wall
        openings and combustible walls. Manufacturers buy reduced clearances
        via fire-test exception (NFPA 37 §4.1.4.2.2).
      </p>
      <p>
        Generac air-cooled (SwRI listed): 18 in rear to stationary wall; 36 in
        front and ends; 60 in overhead; <strong>no operable windows within 5
        ft</strong> of any point on the generator. The 18-in rear figure does{' '}
        <em>not</em> reduce opening clearance, exhaust and intakes still
        matter.
      </p>
      <p>
        Kohler adds: no combustibles within 4 ft of exhaust end; furnace intakes
        ≥10 ft from exhaust end; CO detectors on each level of adjacent
        buildings per manual.
      </p>
      <p>
        Generac warns that a unit placed per NFPA spacing may still allow CO
        inside the structure, farther placement may be necessary.
      </p>

      <h2>Fuel-side codes: separate trade, separate permit</h2>
      <p>
        Natural gas: NFPA 54 / IFGC. Propane: NFPA 58 (10 ft setbacks for
        125–500 gal aboveground tanks from buildings and buildable property
        lines). Gas piping is a licensed plumbing/gas-fitting trade nearly
        everywhere, different from electrical.
      </p>
      <p>
        Generac cannot size gas lines, it provides BTU data and refers customers
        to a licensed plumber. Required inlet: 3.5–7 in. w.c. NG; 10–12 in. w.c.
        LP for Generac air-cooled units.
      </p>

      <h2>Permit and inspection sequence</h2>
      <p>Typical path:</p>
      <ol>
        <li>Building permit (unit/pad) where required</li>
        <li>Electrical permit (ATS, wiring)</li>
        <li>Plumbing/gas permit (fuel line, pressure test)</li>
        <li>Inspections: underground/trench → rough → gas pressure test → final</li>
      </ol>
      <p>
        Example fees: San Diego electrical “Generator Only” $176.57; Miami-Dade
        $11.28 per 10 kW ($227.90 minimum). Combined municipal fees commonly
        $150–$600, small relative to a $13k project.
      </p>
      <p>
        <strong>Who pulls permits:</strong> the contractor should. A contractor
        asking the homeowner to pull an owner permit shifts code liability, a
        legitimate red flag.
      </p>

      <h2>Utility notification</h2>
      <p>
        Open-transition ATS installs normally require utility notification, not
        an interconnection agreement, the generator never parallels the grid.
        Service-rated ATS equipment in the metering path needs utility approval
        on their equipment list.
      </p>

      <h2>Siting beyond NEC/NFPA</h2>
      <ul>
        <li>
          <strong>Noise ordinances:</strong> municipal, measured at property line
          (example: Loveland OH 55 dBA day / 50 night)
        </li>
        <li>
          <strong>Flood zones:</strong> equipment at or above BFE + 1 ft or
          designed to resist flood loads (44 CFR / IRC)
        </li>
        <li>
          <strong>Coastal wind:</strong> Florida FBC-R M1905.2.4 requires ≥120
          mph wind design for exposed generators; HVHZ higher
        </li>
        <li>
          <strong>Property-line setbacks:</strong> local zoning, not NFPA 37
        </li>
      </ul>

      <h2>Unpermitted work: real consequences</h2>
      <p>
        California Civil Code §1102.6 requires disclosure of alterations made
        without necessary permits on sale. Miami-Dade doubles fees for
        unpermitted generator work. These are citable. Generic “insurance will
        deny your claim” statements are not, we do not repeat them.
      </p>
      <p>
        Nothing here is legal or engineering advice. Your manufacturer
        installation manual and local AHJ have the last word.
      </p>
    </GuideLayout>
  )
}
