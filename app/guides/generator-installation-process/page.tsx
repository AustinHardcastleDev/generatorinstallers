import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'

export const metadata = pageMetadata({
  title: 'Generator Installation Process and Timeline',
  description:
    'What happens from consult to first automatic transfer, and why permits and the gas utility usually set the clock, not the factory.',
  path: '/guides/generator-installation-process',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'How long does a whole-house generator installation take?',
    a: 'End-to-end, plan on 4–8 weeks for a straightforward job. The physical install is often 1–2 days. Permits, gas utility coordination, and installer labor, not equipment lead time, usually set the schedule. Add 4–8 weeks if the gas meter or service must be upgraded.',
  },
  {
    q: 'Is there still a generator shortage?',
    a: 'Not nationally for residential air-cooled units. Pandemic-era factory backlogs are over. After regional storms, the constraint is local installer queues, dealers with inventory pre-sold for months, not factory output.',
  },
  {
    q: 'Who does what during installation?',
    a: 'Three trades: licensed electrician (ATS, panel, load calc), licensed gas fitter (pipe, pressure test), dealer crew (pad, set unit, startup). Excavation or concrete subs appear on long trench or flood-elevation jobs.',
  },
  {
    q: 'What happens at commissioning?',
    a: 'A good startup includes purged fuel lines, static and full-load gas pressure readings with a manometer, transfer switch test, and warranty registration. Generac warns a fluctuating pressure needle at load means undersized or restricted gas pipe.',
  },
  {
    q: 'When does the warranty clock start?',
    a: 'Generac: at successful startup and/or online activation, after permitting is complete. Kohler: commissioning date if registered by your dealer, otherwise shipment date. Do not activate before final inspection.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Process"
      title="Generator installation process and timeline"
      lead="Generac says installation usually takes hours; preparing for it takes multiple weeks. Here is the sequence, and where projects actually stall."
      faqs={FAQS}
      slug="generator-installation-process"
    >
      <h2>The durable rule: equipment is rarely the bottleneck</h2>
      <p>
        For residential air-cooled units, the machine is almost never what
        slows you down. <strong>Permits, the gas utility, and installer labor
        are.</strong> Factory backlogs from 2021–2022 are over; manufacturers
        added automation so storm surges no longer translate into six-month
        equipment waits.
      </p>
      <p>
        After a regional storm, expect installer queues to stretch, units may
        sit on dealer lots while crews are booked four weeks to four months out.
      </p>

      <h2>Phase-by-phase timeline</h2>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Typical duration</th>
            <th>Who</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consult / site survey</td>
            <td>1–3 days to schedule; 1–2 hrs onsite</td>
            <td>Dealer + electrician</td>
          </tr>
          <tr>
            <td>Load calculation + written quote</td>
            <td>1–3 days after visit</td>
            <td>Licensed electrician</td>
          </tr>
          <tr>
            <td>Permit application</td>
            <td>3–10 business days; 2–4 weeks in slower AHJs</td>
            <td>Contractor</td>
          </tr>
          <tr>
            <td>Gas meter / service upgrade (if needed)</td>
            <td>2–8 weeks</td>
            <td>Gas utility only</td>
          </tr>
          <tr>
            <td>Physical install</td>
            <td>1–2 days</td>
            <td>Dealer crew + trades</td>
          </tr>
          <tr>
            <td>Inspections + startup</td>
            <td>1–5 days after install</td>
            <td>AHJ + dealer technician</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>End to end: 4–8 weeks</strong> for a straightforward job with no
        utility or panel upgrade. Add weeks if gas service must be upsized.
      </p>

      <h2>The gas utility delay nobody mentions</h2>
      <p>
        A 22 kW unit adds roughly 300,000 BTU/hr against meters often rated
        250,000–400,000 BTU/hr. Utilities require a formal load form itemizing
        every appliance. Review can take 15 business days; upgrade work may run
        six weeks. Only the utility performs the meter work, your installer
        cannot shortcut this.
      </p>

      <h2>Install day: what happens</h2>
      <ol>
        <li>Pad prep (composite pad = no cure time; poured concrete = 3–7 days cure)</li>
        <li>Set the generator</li>
        <li>Gas line run, pressure test, connection (IFGC requirements)</li>
        <li>Electrical rough-in, ATS install, panel integration (main power off 2–4 hrs)</li>
        <li>Inspections, rough and/or final, electrical + gas</li>
        <li>Startup: load test, gas pressure under load, transfer test, registration</li>
        <li>Homeowner walkthrough: exercise schedule, monitoring app, manual transfer</li>
      </ol>

      <h2>Common mistakes that cause callbacks</h2>
      <p>Ranked by how often sources cite them:</p>
      <ol>
        <li>
          <strong>Undersized gas pipe.</strong> Generac names this the most
          common install error. Symptom: starts fine, derates minutes into a
          real outage.
        </li>
        <li>
          <strong>Meter capacity ignored.</strong> Perfect pipe run, starved unit.
        </li>
        <li>
          <strong>No real load calculation.</strong> NEC 702.4 is not optional.
        </li>
        <li>
          <strong>Wrong ATS type or neutral bonding.</strong> Service-rated vs
          non-service-rated changes where the bond lives.
        </li>
        <li>
          <strong>Clearance violations</strong>, too close to windows, under a
          deck without overhead clearance.
        </li>
        <li>
          <strong>Skipped permits.</strong> Creates resale disclosure risk in
          states like California.
        </li>
      </ol>

      <h2>What a good installer does that a weak one skips</h2>
      <ul>
        <li>Site visit before quoting</li>
        <li>Written load calculation in the proposal</li>
        <li>Gas load check against meter capacity before permits are filed</li>
        <li>Itemized quote with exclusions stated</li>
        <li>Permits pulled in the contractor&apos;s name</li>
        <li>Full-load commissioning with manometer on the gas line</li>
        <li>Warranty registration handed to you in writing</li>
      </ul>
      <p>
        Red flag shorthand: phone quote, no site visit, permits optional,
        single lump-sum line.
      </p>
    </GuideLayout>
  )
}
