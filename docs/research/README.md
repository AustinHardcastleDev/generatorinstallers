# Generator installation research library

**Internal only. Nothing in `docs/` is ever served.** Next.js only publishes routes under `app/`
and static assets under `public/`. This directory is committed for the team's reference and is not
reachable from the site, the sitemap, or any build output.

Compiled August 2026. Roughly 61,000 words across ten briefs, built from ~423 distinct sources.

## Why this exists

We rank installers we have never met, on evidence scraped from their websites. The only thing that
justifies that position is being genuinely more careful than the content farms we compete with.
These briefs are the raw material for FAQ blocks, buyer guides, and the state-page copy — and,
just as importantly, the record of what we refused to claim.

## The files

| File | Covers |
|---|---|
| `01-equipment-and-sizing.md` | Standby vs portable, air- vs liquid-cooled, load calculations, ATS types, brand landscape |
| `02-costs-and-pricing.md` | Equipment vs installed pricing, line-item breakdown, financing, resale value, ownership costs |
| `03-codes-permits-compliance.md` | NEC 702/445/250, NFPA 37 clearances, gas codes, permits, utility notification, siting law |
| `04-fuel-systems.md` | Natural gas vs propane, BTU demand and meter upgrades, pipe sizing, tank sizing, consumption tables |
| `05-installation-process-and-timeline.md` | Phase-by-phase process, realistic timelines, pads, commissioning, common install failures |
| `06-maintenance-warranty-lifespan.md` | Manufacturer service intervals, exercise cycles, warranty terms by brand, lifespan, CPSC recalls |
| `07-choosing-an-installer.md` | Licensing by state, authorized-dealer programs, quote anatomy, red flags, complaint patterns |
| `08-outage-data-and-market.md` | EIA reliability data with a complete 50-state table, market penetration, demand cycles |
| `09-alternatives-battery-solar-portable.md` | Batteries vs generators, portables, carbon monoxide safety |
| `10-state-and-regional-variation.md` | Heating-fuel mix by state, regional hazards, NEC adoption, HOA and noise law, 51-row data table |

Every brief follows the same shape: executive summary, detailed findings, **claims we can make**
(citable sentences ready to drop into copy), **claims to avoid**, open questions, and sources.

## How to use it when writing

Pull sentences from the "Claims we can make" sections rather than paraphrasing the body — those
were written to be publishable and each carries its source. Before publishing any statistic, check
it against the "Claims to avoid" list below. When a claim touches code, permitting, or licensing,
keep the hedge that the research attached to it; AHJ variation is real and flattening it is how we
would get something wrong.

Four precision habits worth keeping:

- **Write principle-first.** This is the most important one, and every "Claims we can make" section
  now repeats it. Lead with the durable point and let the dated figure follow as support. "Equipment
  is roughly 40–55% of a finished project, which is why the same generator can produce quotes
  thousands of dollars apart" survives a price cycle. "A Generac 22kW costs $6,979" does not. A
  sentence built the first way degrades into "roughly"; built the second way it degrades into false.
- **Every statistic carries its year.** "In 2024" is not optional garnish; outage data swings hard
  year to year.
- **Name the metric variant.** EIA publishes SAIDI two ways. IEEE-method 2024 SAIDI is 662.6
  minutes; "any method" is 611.3. Pick one convention site-wide and state it.
- **Separate hard requirement from manufacturer requirement from common practice.** This
  distinction is the single most common failure in competitor content, and it is where our
  credibility is cheapest to win.

### What this library deliberately does not contain

Three categories were researched and then deleted, because they change faster than a directory of
this size can be audited and because none of them earn their keep on a buyer-facing page:

- **Incentives, rebates, and tax credits.** See the dedicated section below.
- **Quarterly and annual company financials** — segment revenue, shipment growth, dealer counts,
  penetration percentages, consultation volume. These restate every ninety days and describe one
  manufacturer's channel rather than the market. What survives in `08` is the *pattern*: demand
  spikes after storms and decays through quiet years, which the company states in its own standing
  SEC risk factors.
- **Current-conditions lead times and backlogs.** What survives in `05` is the mechanism — permits,
  gas utility coordination, and installer labor are the constraints, essentially never the equipment
  — plus Hurricane Helene as a documented case study of what a storm does to a local install queue.

If a page genuinely needs any of this, go to the primary source and date it explicitly. Do not
reintroduce it here.

## Do not publish these

Consolidated from the ten "claims to avoid" sections. Each of these is either untraceable or false,
and all of them appear routinely in competitor content.

- **"A generator adds 3-5% to your home's value, according to Consumer Reports."** Untraceable.
  Consumer Reports says no such thing. Use the Zonda Cost vs. Value figure instead (below).
- **"Generac generators were recalled."** Every Generac recall from 2021 through 2026, including
  the April 2026 carburetor recall, covers **portable** units. No home standby generator has been
  recalled since 2007. Conflating these would be defamatory-adjacent and is trivially checkable.
- **"Insurance will deny your claim if the install was unpermitted."** No primary sourcing exists.
  The defensible consequence is resale disclosure, which is statutory in some states.
- **"The grid is failing."** Falsifiable with our own source. Everyday reliability has been roughly
  flat for a decade; major-event outage hours have tripled. The true version is a better story.
- **Flat clearance numbers without attribution.** Generac's 18-inch rear clearance is a Southwest
  Research Institute fire-test listing, not a code minimum, and it never applies to windows, doors,
  or vents.
- **Any incentive, rebate, or tax-credit claim at all** — federal, state, or utility, for generators
  or for batteries. This material was researched and then deleted from the library on purpose; see
  "Incentives" below. Send readers to [DSIRE](https://www.dsireusa.org/) and their tax advisor.
- **Pandemic-era lead times.** The 40-45 week figures circulating in 2026 trade press are for data
  center gensets. Home standby equipment is not backordered; permits and gas utilities are the
  real bottleneck.
- **Square footage as a sizing method.** It enters the code calculation only as a 3 VA/ft² lighting
  term. Air conditioner locked-rotor amps drive the size.
- **Untraceable market-size figures.** Paid research firm numbers are resold without primary
  sourcing. Generac's SEC filings are the citable alternative.
- **Cross-brand motor-starting comparisons.** Manufacturers quote peak kVA under different voltage
  dip assumptions, so a comparison table would be misleading.
- **Generic lifespan-in-hours claims.** Third-party estimates for air-cooled units span 800 to
  15,000 hours. All four majors cap warranties at 2,000 hours, which residential duty cycles never
  approach.

## Incentives — deliberately excluded

The library originally carried a full incentives section: federal Sections 25D and 48E, California
SGIP, Connecticut Energy Storage Solutions, Maryland RCES, NYSERDA residential storage, the
Massachusetts and Rhode Island utility dispatch programs, and the state sales-tax holidays that
apply to portable generators. **All of it has been deleted.**

The reasoning is that incentive programs turn on legislation and on funding cycles that reopen,
exhaust, and restructure faster than we can audit a directory of this size, and a stale incentive
figure is the one class of error that costs a reader real money rather than merely misinforming
them. Keeping the research would have invited a writer to use it.

**The site therefore makes no incentive, rebate, or tax-credit claim of any kind, for generators or
for batteries.** Where a page must acknowledge the question, point readers to
[DSIRE](https://www.dsireusa.org/) and their own tax advisor. One qualitative point remains safe:
subsidy programs of this kind attach to energy storage, not to fuel-burning generators. Never
attach a dollar figure, a program name, or a deadline to that sentence.

## Spot-checked directly

Two load-bearing numbers were verified against primary sources beyond the researcher's citation,
because they will appear on many pages:

- **Zonda 2025 Cost vs. Value Report** — "Backup Power Generator" debuted at rank 7 of 28 projects:
  $13,534 job cost, $12,902 resale value, **95.3% recouped**, exceeding 100% in storm-prone
  regions. Confirmed on zondahome.com. This is the honest replacement for the fake 3-5% claim.
- **EIA Electric Power Annual 2024** — the average US customer lost **about 11 hours** of service in
  2024, nearly double the prior decade's average, with major events (Beryl, Helene, Milton)
  accounting for **80%** of those hours. Confirmed on eia.gov.

## Re-verify before publishing

What remains in the library after the deletions above is durable enough to build on, but four things
still go stale on a known schedule. Each is kept because removing it would cost more than maintaining
it — these are the differentiators, not the filler.

- **EIA reliability data** — publishes each October with the prior year's figures and changes every
  state page number. Because 2024 was an outlier hurricane year, the next edition will show a sharp
  drop; write the trend claim (flat everyday reliability, worsening major events) rather than the
  single-year total, and the copy will survive the refresh.
- **Pricing and MSRPs** — captured 2026; expect drift. Lead with the 40–55% equipment-to-project
  ratio, which holds across price cycles.
- **NEC adoption by state** — jurisdictions move between the 2020, 2023, and 2026 cycles on their
  own schedule, and about thirty licensing cells in the state table are still marked unverified.
  Always name the edition and keep the local-adoption hedge.
- **Kansas electrician licensing** — moves to the State Fire Marshal on July 1, 2027. The state page
  copy changes on that date.

**CPSC carbon monoxide rulemaking** deserves a separate note: a mandatory shutoff rule has been in
process since 2023 and may land at any time. Write about UL 2201 and ANSI/PGMA G300 as industry
standards with poor market conformance — a durable, sourced statement — rather than asserting that
no federal requirement exists.

## Known gaps

Briggs & Stratton and Champion maintenance schedules were not retrieved. Meter-upgrade cost has no
defensible national figure. The install-mistake ranking reflects how often sources mention each
failure, not measured callback frequency — do not present it as statistical. Two state-level
conflicts remain open in `07`: Louisiana's residential licensing threshold and the Massachusetts
Guaranty Fund cap.

The most valuable gap is an opportunity: nobody has real data on permit turnaround or current
backlog by market. We have 9,331 installers. Surveying them would produce proprietary data no
competitor can match.
