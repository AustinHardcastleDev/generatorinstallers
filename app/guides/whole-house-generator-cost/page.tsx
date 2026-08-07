import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Whole-House Generator Cost',
  description:
    'What a finished standby project actually costs: equipment vs labor, air-cooled vs liquid-cooled, and why two quotes on the same unit can differ by thousands.',
  path: '/guides/whole-house-generator-cost',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'How much does a whole-house generator cost installed?',
    a: 'Generac’s own installed-cost guidance runs $8,000–$16,000 including the generator. Consumer Reports puts installation alone at about $5,000–$10,000 or more. Zonda’s 2025 Cost vs. Value Report pegs a national backup-generator job at $13,534. Your quote depends on gas runs, panel work, and site conditions, not the sticker on the unit.',
  },
  {
    q: 'Why do two quotes on the same generator differ so much?',
    a: 'The generator itself is roughly 40–55% of a finished project. The rest is electrical work, gas piping, the pad, permits, and labor. A long gas run, buried propane tank, or 200-amp panel upgrade can swing a quote by thousands while the model number stays identical.',
  },
  {
    q: 'Is installation really more than the generator?',
    a: 'Often, yes. Consumer Reports found installation can cost more than the unit itself, and that smaller units cost almost as much to install as larger ones. That is why stepping up in kW is sometimes a small marginal cost relative to the total project.',
  },
  {
    q: 'Does a standby generator pay for itself at resale?',
    a: 'Zonda’s 2025 report, the first edition to include backup generators, estimates 95.3% of cost recouped nationally ($13,534 job cost, $12,902 resale value). That is a near-wash, not a profit. Regional recovery moves more than job cost: South Atlantic 96.5% versus East North Central 90.5%, while those regions’ job costs differed only about 5%. We do not repeat unverified “adds 3–5% to home value” claims.',
  },
  {
    q: 'Why do quotes differ so much by market?',
    a: 'Equipment MSRP is national. Local quotes move with electrician labor rates, whether the house already has natural gas or needs a propane tank, site access, and whether a recent storm booked every crew for weeks. Ask for itemized local quotes, not a national average from a blog.',
  },
  {
    q: 'What ongoing costs should I plan for?',
    a: 'Angi’s 2026 data puts a professional maintenance visit at $171–$396 (average $274) and annual upkeep at $200–$600. Generac Mobile Link basic monitoring is free for up to two generators. Fuel cost during outages is real but depends on load and fuel type.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Cost"
      title="Whole-house generator cost"
      lead="The number on the generator sticker is not the number you write the check for. We did the research on what a finished standby project actually costs, and why two quotes on the same unit can differ by thousands."
      faqs={FAQS}
      slug="whole-house-generator-cost"
    >
      <h2>The durable rule: equipment is less than half the project</h2>
      <p>
        The generator itself accounts for roughly <strong>40–55%</strong> of
        what a finished home standby project costs. The rest is electrical
        work, gas work, the pad, permits, and labor. That ratio is why comparing
        equipment prices alone tells a buyer almost nothing, and why two
        installers quoting the same 22 kW unit can land thousands of dollars
        apart.
      </p>
      <p>
        Generac’s own guidance puts total home standby installation costs,
        including the generator, at <strong>$8,000–$16,000</strong>. A Generac
        22 kW Guardian with a whole-house transfer switch carries an MSRP of
        $6,979 for equipment alone, before any installation labor.
      </p>

      <h2>What the independent anchors say</h2>
      <p>
        Consumer Reports puts units in its ratings at roughly $3,400 to nearly
        $7,000, with installation at about $5,000 to $10,000 or more, often
        exceeding the unit cost. Zonda’s 2025 Cost vs. Value Report, the first
        edition to include backup generators, puts the national average job cost
        at <strong>$13,534</strong> with an estimated resale value of $12,902
        (95.3% recouped).
      </p>
      <table>
        <thead>
          <tr>
            <th>Size class</th>
            <th>Typical equipment (unit + ATS)</th>
            <th>Typical fully installed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>~10 kW (essential circuits)</td>
            <td>$3,600–$4,500</td>
            <td>$7,000–$11,000</td>
          </tr>
          <tr>
            <td>14–18 kW</td>
            <td>$4,600–$6,300</td>
            <td>$8,500–$14,000</td>
          </tr>
          <tr>
            <td>22–26 kW air-cooled (most common whole-house)</td>
            <td>$6,100–$7,900</td>
            <td>$10,000–$18,000</td>
          </tr>
          <tr>
            <td>32 kW+ liquid-cooled</td>
            <td>$15,700–$28,300</td>
            <td>$21,000–$40,000+</td>
          </tr>
        </tbody>
      </table>
      <p>
        Installed ranges are synthesized from manufacturer MSRPs and
        Consumer Reports / Generac anchors. Treat them as ranges, not averages.
      </p>

      <h2>Air-cooled vs liquid-cooled: a different price class</h2>
      <p>
        Moving from the largest air-cooled unit to the smallest liquid-cooled one
        more than doubles equipment cost. Kohler lists its 26 kW air-cooled
        26RCA at $7,445 MSRP; its 24 kW liquid-cooled 24RCLA lists at $17,900.
        Generac’s 28 kW air-cooled runs $8,159 against a 32 kW liquid-cooled
        single-phase at $21,099 MSRP, though street pricing on liquid-cooled
        units can run thousands below MSRP.
      </p>
      <p>
        Liquid-cooled is not a bigger version of the same thing. It is a
        1,800-rpm engine class with different pad, gas, and electrical
        requirements. Most suburban whole-house jobs stay air-cooled.
      </p>

      <h2>What drives a quote to the high end</h2>
      <p>
        Ranked by how much they move the number:
      </p>
      <ol>
        <li>
          <strong>Electrical service or panel upgrade.</strong> A home on 100A
          or 150A service needing a 200A upgrade adds a full sub-project. This
          is the most common reason two quotes on the same unit differ by
          $4,000+.
        </li>
        <li>
          <strong>Long gas runs.</strong> At roughly $12–$25 per foot installed,
          a 60-foot run from meter to pad is $720–$1,500 in gas work alone.
        </li>
        <li>
          <strong>Buried propane tank instead of natural gas.</strong> An
          underground 500-gallon install can add $1,500–$5,000 versus a gas
          tie-in.
        </li>
        <li>
          <strong>Difficult access.</strong> Rock, tight side yards, and
          back-yard placements requiring equipment raise excavation and
          placement labor.
        </li>
        <li>
          <strong>Gas meter upsizing.</strong> A 22 kW Generac pulls 327 ft³/hr
          of natural gas at full load, which can exceed an older meter’s
          capacity. Utility lead time may matter more than the fee.
        </li>
      </ol>

      <h2>Why your market changes the number</h2>
      <p>
        Equipment MSRP is national. A Generac 22 kW costs the same at the
        factory whether it ships to Nashville or Naples. What changes is
        everything wrapped around it: electrician and plumber rates, whether the
        house already has natural gas, how far the pad sits from the meter, and
        whether a storm just booked every crew for six weeks.
      </p>
      <p>
        <strong>Regional variation in installed price is driven mainly by labor
        markets and site conditions, not by permit fees or equipment
        prices.</strong>
      </p>
      <p>
        BLS data (May 2023) puts mean electrician wages from about $25/hr in
        Florida and $27/hr in Texas to $40/hr in California and $42/hr in
        Washington. Metro spreads are wider: San Jose and San Francisco near
        $49/hr versus Dallas–Fort Worth at $27/hr. The same unit in a
        high-labor market with strict permitting will quote higher than in a
        gas-rich Midwest suburb with straightforward access.
      </p>
      <p>
        Fuel mix shapes the project as much as wages. High utility-gas states
        (Illinois ~75%, Michigan ~75%, Ohio ~64%) already have meter
        infrastructure, so the incremental cost is pipe sizing and possibly a
        meter upgrade. Propane-heavy rural markets (New Hampshire, Vermont,
        Maine, upper Midwest) usually mean a 250–500 gallon ASME tank and
        refill logistics. Electric-heat extremes like Florida (~90% electric
        heat) are propane-first for many standby installs even when the
        homeowner does not think of themselves as a propane household.
      </p>
      <p>
        After a major storm, local installer queues stretch. Units do not cost
        more overnight; crews are booked. One western North Carolina county saw
        generator permit requests jump from 17 in three months pre-Helene to
        177 over the following eight months.
      </p>

      <h2>What we do not claim</h2>
      <p>
        We do not repeat “adds 3–5% to home value” or “pays for itself”
        language. Those claims do not trace to Consumer Reports or Zonda data.
        We do not cite state-by-state “average installation cost” tables from
        aggregator sites. They apply a labor multiplier to a national figure,
        not collected quotes, and look more authoritative than they are.
      </p>
      <p>
        Outage exposure is better framed with duration than dollar estimates.
        US electricity customers averaged <strong>11 hours</strong> without
        power in 2024 (EIA), nearly double the prior decade’s average, with
        state spread from under 2 hours in some states to roughly 53 hours in
        South Carolina. Whether that justifies the project is location-dependent,
        not universal.
      </p>
    </GuideLayout>
  )
}
