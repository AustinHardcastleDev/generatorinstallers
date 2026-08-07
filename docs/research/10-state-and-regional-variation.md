# State and Regional Variation — Residential Home Standby Generators

**Internal research only. Not published content.** This file is the raw material for 50 state hub pages and their metro children. Nothing here is legal, code, or engineering advice, and nothing here should be republished verbatim. Every statistic below carries its year and its source URL. Where a state's rule could not be verified against a primary or near-primary source, the cell says **unverified** rather than inferring from a neighbor. Research date: **August 2026**.

Two structural warnings before anyone writes from this file:

1. **NEC adoption moves.** The table below reflects the state of play on **August 7, 2026**. Any state page that names an NEC edition needs a "verified as of" date and an annual re-check. Two states (Colorado, Maryland) had *conflicting* editions across otherwise reliable trackers on the day of research; both are flagged.
2. **NOAA's Billion-Dollar Disasters product was retired in May 2025.** It still covers 1980–2024 and remains authoritative for that window, but it will never be updated. Any page that leans on it must say "1980–2024" and must not imply a live feed. ([NESDIS notice, May 8, 2025](https://www.nesdis.noaa.gov/about/documents-reports/notice-of-changes/2025-notice-of-changes/billion-dollar-weather-and-climate-disasters))

---

## Executive summary

- **Heating fuel mix is the single best predictor of what a state's installs look like.** Census ACS 2024 1-year Table B25040 shows utility gas heating ranging from **78.9% in Utah** down to **3.7% in Hawaii, 5.9% in Florida, and 8.3% in Maine**. A Utah state page and a Florida state page are describing two almost unrelated purchase decisions. ([ACS 2024 1-yr B25040](https://data.census.gov/table/ACSDT1Y2024.B25040))
- **Florida is the extreme case and deserves its own playbook.** Only **5.9%** of Florida households heat with utility gas and **89.7%** heat with electricity (ACS 2024). Florida is a *propane-first* standby market in most of the state even though nobody there thinks of themselves as a propane household, because there is no heating load driving a gas meter to the house.
- **The propane-dominant states are Northern New England and the rural Upper Midwest/Plains.** ACS 2024 propane heating share: **New Hampshire 20.4%, Vermont 19.8%, Maine 16.0%, South Dakota 15.7%, Montana 13.7%, North Dakota 13.6%, Iowa 12.3%, Wisconsin 11.7%.** These are tank-sizing and refill-logistics markets, not gas-line-sizing markets.
- **Fuel oil is a Northeast-only story and it changes the sales conversation.** ACS 2024 fuel oil heating share: **Maine 50.3%, New Hampshire 37.0%, Vermont 35.5%, Connecticut 35.0%, Alaska 27.5%, Rhode Island 25.4%, Massachusetts 20.2%, New York 14.6%, Pennsylvania 12.8%.** An oil-heat house has no gas service and usually no propane tank either, so the standby generator forces a new fuel decision from scratch.
- **The states with the worst 2024 outage experience were not the states you would guess.** EIA Electric Power Annual 2024 (Table 11.3, all events): **South Carolina 52.3 hours, Maine 29.1, North Carolina 24.0, Florida 22.0, Texas 21.2, Georgia 20.5, West Virginia 19.4**, against a U.S. average of **10.2 hours**. ([EIA Table 11.3](https://www.eia.gov/electricity/annual/html/epa_11_03.html))
- **Maine is the standout non-hurricane state.** Maine customers averaged **29.1 hours** out in 2024 and **3.64 interruptions** — more outage time than Florida, North Carolina, or Texas in a year those three were hit by Helene, Milton, and Beryl. EIA attributes it to tree-fall on distribution lines. ([EIA Today in Energy, 2025](https://www.eia.gov/todayinenergy/detail.php?id=66744))
- **Frequency and duration are different arguments.** West Virginia's 2024 SAIDI *excluding* major events was **486 minutes (8.1 hours)** — the highest in the country — meaning West Virginians lose power routinely, not just in disasters. That is a different pitch from South Carolina's one-storm 52 hours. (EIA Table 11.3, 2024)
- **Long-run outage counts cluster in six states.** Climate Central's analysis of DOE Form OE-417 reports, 2000–2023: **Texas 210, Michigan 157, California 145, North Carolina 111, Ohio 88, Louisiana 85, Virginia 83, Georgia 83, Pennsylvania 82, Florida 77, Alabama 76.** 80% of all major U.S. outages in that window were weather-driven. ([Climate Central, Apr 24, 2024](https://www.climatecentral.org/climate-matters/weather-related-power-outages-rising))
- **NEC adoption is genuinely fragmented and it is a real differentiator for a state page.** As of **August 3, 2026**, NFPA counts the 2026 NEC in effect in six states, 2023 in 20, 2020 in 15, 2017 in three, 2008 in two, with **Arizona, Illinois, Mississippi, and Missouri having no statewide adoption at all**. Tennessee and Wisconsin are still on the **2017** edition; **D.C. is still on the 2014**. ([NFPA enforcement maps](https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps); [Mike Holt adoption list](https://www.mikeholt.com/necadoptionlist.php))
- **Two states have statutes that specifically stop an HOA from blocking a standby generator, and they are excellent state-page hooks.** Texas Property Code **§202.019** bars a POA from prohibiting or effectively restricting a permanently installed standby generator, and makes any *location* rule unenforceable if it raises install cost by more than **10%** or fuel/electrical connection cost by more than **20%**. Florida's 2024 HB 293 added **"exterior fixed generators" and "fuel storage tanks"** to the definition of hurricane protection under Fla. Stat. **§720.3035**, so an HOA may not deny a conforming application. ([Tex. Prop. Code §202.019](https://law.justia.com/codes/texas/property-code/title-11/chapter-202/section-202-019/); [Ch. 2024-205 summary](https://www.bosdun.com/2024/06/07/2024-statutory-update-hoas/))
- **Three states set noise limits by statute or state rule, which beats quoting a city ordinance.** Colorado C.R.S. **§25-12-103**: 55 dB(A) day / 50 dB(A) night at 25 ft beyond the property line for residential zones. Washington **WAC 173-60-040**: 55 dBA residential-to-residential, reduced **10 dBA** between 10 p.m. and 7 a.m. Minnesota Rules **7030.0040**: L50 of 60 daytime / 50 nighttime for NAC-1. ([CRS 25-12-103](https://codes.findlaw.com/co/title-25-health/co-rev-st-sect-25-12-103.html); [WAC 173-60-040](https://app.leg.wa.gov/WAC/default.aspx?cite=173-60-040); [MN 7030.0040](https://www.revisor.mn.gov/rules/7030.0040/))
- **Florida has an explicit residential-code wind rule for generators.** FBC Residential **M1905.2.4** requires a generator exposed to wind to be designed and installed to resist wind pressures at a minimum **120 mph ultimate design wind speed**, and if the manufacturer's instructions do not specify the anchoring method, a **Florida-licensed engineer must certify it**. Miami-Dade and Broward are the High-Velocity Hurricane Zone with Risk Category II speeds of **175 mph and 170 mph**. ([Leon County FL building dept.](https://cms.leoncountyfl.gov/Portals/0/DeptFiles/DSEM/Building/Generator%20Requirements%20for%20FBC%208th%20Edition%20(2023)%20and%20NEC%202020.pdf); [Kohler FBC white paper](https://resources.kohler.com/power/kohler/industrial/pdf/EnclosuresforHurricane%20RatingsWP.pdf))
- **Flood-zone elevation is a federal floor, not a coastal-state quirk.** 44 CFR **§60.3(a)(3)(iv)** requires new and substantially improved construction in flood-prone areas to have electrical and other service equipment designed or located to prevent water entering or accumulating during flooding; the IRC/IBC route to compliance runs through **ASCE 24**. FBC-R **M1905.2.2** points generators in flood hazard areas to **R322.1.6**. ([44 CFR 60.3](https://www.law.cornell.edu/cfr/text/44/60.3); [FEMA P-348](https://dwee.nebraska.gov/sites/default/files/floodplain/DigitalDeskReference/FEMANFIP/FEMAP348ProtectingBuildingUtilitySystemsFromFloodDamage2017.pdf))
- **Texas propane work is a separate license from a separate agency.** Installing, servicing, or repairing an LP-gas system in Texas requires a **Railroad Commission of Texas LP-Gas license** — not a TDLR electrical license and not a plumbing license. That is a checkable credential and a genuinely useful "how to vet your installer" angle on Texas pages. ([RRC licensing](https://www.rrc.texas.gov/alternative-fuels/liquefied-petroleum-gas-propane/certification-and-company-licensing/); [16 TAC §9.7](https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-9-7))
- **Labor cost varies about 2x across metros and that is the honest basis for regional pricing language.** BLS OEWS May 2023 mean hourly wage for electricians (SOC 47-2111): **San Jose $49.32 and San Francisco $49.15** at the top; **Dallas–Fort Worth $27.38, Miami–Fort Lauderdale $26.46** at the bottom of the large metros. State means run from **California $40.54 and Washington $42.61** down to **Florida $25.18 and Texas $27.09**. ([BLS OEWS 47-2111, May 2023](https://www.bls.gov/oes/2023/may/oes472111.htm))
- **Public Safety Power Shutoff is no longer a California-only concept.** It is regulated by rule in Oregon (OAR 860-024-0060 et seq. and OAR 860-300-0050), reported as PSOM in Nevada, and has now been used by **Xcel Energy in Colorado (first PSPS plan added after the Marshall Fire; events in 2024 and 2025)** and **Rocky Mountain Power in Utah (2022 and 2025)**. Colorado, Utah, Idaho, and Nevada state pages can legitimately talk about planned shutoffs. ([PNNL WMP analysis](https://wildfire.pnnl.gov/mitigationPlans/content/analysis/Public%20Safety%20Power%20Shutoffs%20in%20WMPs.pdf); [Oregon OAR Division 300](https://secure.sos.state.or.us/oard/displayDivisionRules.action?selectedDivision=6618))
---

## Regional profiles

### 1. Gulf Coast — Texas, Louisiana, Mississippi, Alabama, Florida Panhandle

**Hazard profile.** The highest-consequence, longest-duration outages in the country. Hurricane Ida (landfall Aug 29, 2021) collapsed Entergy transmission into New Orleans. Hurricane Beryl made landfall July 8, 2024 and knocked out **2.26 million CenterPoint customers** in Greater Houston; restoration ran **11 days**, and roughly **78,000 customers were still out after eight days**. Peak statewide Texas outages exceeded **2.6 million** and at least 23 people died. ([CenterPoint after-action](https://www.centerpointenergy.com/en-us/Documents/GHRI%20Tracker/CenterPoint_Beryl_After_Action_Final_Report.pdf); [Texas Tribune, Jul 25, 2024](https://www.texastribune.org/2024/07/25/texas-power-grid-puc-centerpoint-hurricane-beryl/)) Texas also carries a second, unrelated hazard: **Winter Storm Uri, February 2021**, when ERCOT shed **20,000 MW** — the largest manually controlled load shed in U.S. history — leaving **more than 4.5 million Texans** without power, some for four days, with **at least 210 deaths**. ([FERC/NERC final report, Nov 2021](https://www.nerc.com/globalassets/our-work/reports/event-reports/february_2021_cold_weather_report.pdf))

**Fuel profile.** Split and counter-intuitive. Texas is **35.4% utility gas / 60.5% electric**; Louisiana **33.0% / 63.7%**; Mississippi **30.5% gas, 9.8% propane, 57.8% electric**; Alabama **25.9% / 67.5%**. Gas distribution follows the metros; rural Gulf Coast is propane or all-electric (ACS 2024). Practically: Houston, Dallas, Baton Rouge and Jackson suburbs are natural-gas installs; rural south Louisiana and rural Mississippi are propane installs with a 250–500 gal tank decision attached.

**Buying drivers.** Multi-day heat-season outages with no A/C. This is the region where "how long will it run" beats "how quiet is it." Fuel-supply resilience is a real differentiator here because natural gas service is usually uninterrupted during a wind event, while propane refill trucks cannot reach flooded parishes. Texas additionally has the statutory HOA protection (§202.019) and the separate RRC LP-Gas license, both of which are strong, specific state-page content.

### 2. South Atlantic — Florida peninsula, Georgia, the Carolinas, Virginia

**Hazard profile.** Hurricane Helene (landfall 11:10 p.m. EDT Sept 26, 2024, Cat 4, 140 mph, near Perry, FL) produced a region-wide peak of **4.6 million customer outages on Sept 27, 2024**, with state peaks of **South Carolina 1,372,295 (43% of state customers), Florida 1,323,821, Georgia 1,100,015, North Carolina 1,004,273**. Ten states reported outages, including Ohio (330,464) and Indiana (114,114). Restoration in the Carolinas ran into October. ([DOE ESF-12 Sit Rep #1](https://www.energy.gov/sites/default/files/2024-09/TLP%20CLEAR_Helene_ESF%2012-Sit%20Rep_092724-%20CLEAN_PDF.pdf); [Sit Rep #11](https://www.energy.gov/sites/default/files/2024-10/Hurricane%20Helene%20Situation%20Report%2011.pdf)) Helene is also the event that broke the "coastal risk only" mental model — the worst damage was inland Appalachia.

**Fuel profile.** The most electric-dominant region in the country. Florida **5.9% gas / 89.7% electric**; South Carolina **25.1% / 69.7%**; North Carolina **25.0% gas, 5.4% propane, 66.0% electric**; Georgia **37.4% / 57.6%**; Virginia **32.6% / 57.7%** (ACS 2024). Georgia is the outlier with meaningfully more gas.

**Buying drivers.** Highest measured 2024 outage duration in the country (SC 52.3 hrs, NC 24.0, FL 22.0, GA 20.5). Florida layers on the strongest code overlay: FBC-R **M1905.2.4** wind design at ≥120 mph, **M1905.2.2** flood-hazard siting via R322.1.6, Florida Product Approval statewide, Miami-Dade NOA in the HVHZ, and the 2024 HOA hurricane-protection statute. A Florida metro page has more genuinely local substance available than almost any other market.

### 3. Southeast interior and Mid-South — Tennessee, Kentucky, Arkansas, northern Alabama/Georgia, western Carolinas

**Hazard profile.** Ice, not wind. Climate Central puts winter weather at **23% (398 events)** of all weather-driven major outages nationally 2000–2023, and the Ohio Valley region at **301 events** — third-highest. Kentucky's 2024 SAIDI was **10.8 hours** and West Virginia's **19.4**, both well above the 10.2-hour national average. ([Climate Central](https://www.climatecentral.org/climate-matters/weather-related-power-outages-rising); EIA Table 11.3, 2024)

**Fuel profile.** Mixed with a strong rural propane tail. Kentucky **34.6% gas / 6.6% propane / 55.4% electric**; Tennessee **30.2% / 3.3% / 64.6%**; Arkansas **36.6% / 5.9% / 54.1%**; West Virginia **39.4% / 5.0% / 48.2%** (ACS 2024).

**Buying drivers.** Cold-weather outages with electric heat and heat pumps that lose capacity exactly when the ice arrives. Note the code quirk: **Tennessee is still on the 2017 NEC** and **Wisconsin on the 2017**, so any Tennessee page that cites 2023 NEC section numbers (e.g., 445.19) will be wrong; Tennessee is on the 2020-and-earlier numbering (445.18).

### 4. Texas as its own region

Texas is large enough, and different enough, to be treated separately from the Gulf: it has hurricanes (Beryl 2024, Harvey 2017), inland derechos (the May 16, 2024 Houston derecho preceded Beryl by eight weeks and pre-stressed the tree canopy per CenterPoint's own after-action), and a winter-grid failure mode that no other state shares. It leads the nation in long-run major outage counts (**210** events, 2000–2023) and posted **21.2 hours** SAIDI in 2024. It is a 2023 NEC state (effective 9/1/2023) with a 2026 update projected for 9/1/2026 per NFPA. It is also the cheapest large labor market we can source: BLS OEWS May 2023 mean electrician wage **$27.09** statewide, **$28.33** in Houston, **$27.38** in DFW.

### 5. Midwest and Ohio Valley — Michigan, Ohio, Indiana, Illinois, Iowa, Wisconsin, Minnesota, Missouri

**Hazard profile.** Derechos and long-duration ice. The **August 10, 2020 Corn Belt derecho** did **$11.5B** in damage across a 90,000-square-mile footprint with gusts topping **140 mph** in Cedar Rapids; at least **1,000,000 customers** lost power, some for more than two weeks, and peak simultaneous outages reached **1.4 million**. ([NWS Chicago](https://www.weather.gov/lot/2020aug10); [NCEI Storm Events](https://www.ncei.noaa.gov/stormevents/eventdetails.jsp?id=919275)) Michigan's **March 28–31, 2025 northern Michigan ice storm** produced **0.75–1.5 inches of ice**, knocked out **nearly 200,000 customers**, left some without power **17–18 days**, triggered a 13-county state of emergency and 800+ National Guard troops, and drew a **$137 million** public-infrastructure damage estimate from Michigan State Police. ([Great Lakes Energy](https://www.gtlakes.com/ice-storm/); [Northern Express retrospective](https://www.northernexpress.com/news/feature/the-march-2025-ice-storm-a-retrospective/)) Michigan ranks **second nationally** in major weather outages 2000–2023 (**157**).

**Fuel profile.** The most gas-dominant region in the country and therefore the easiest install market. Illinois **75.5%** gas, Michigan **74.8%**, Ohio **64.0%**, Minnesota **65.3%**, Wisconsin **64.9%**, Iowa **59.7%**, Indiana **58.6%**, Missouri **49.0%** (ACS 2024). But the rural tail is real: Wisconsin **11.7%** propane, Minnesota **10.4%**, Iowa **12.3%**, Michigan **8.7%**.

**Buying drivers.** A gas-heated Midwest home already has the fuel infrastructure, so the incremental cost is lower and the sizing conversation is about the meter and the gas line, not a tank. The regulatory environment is unusually loose: **Illinois, Missouri, Indiana, and Kansas have no mandatory statewide electrician license** and Illinois has **no statewide NEC adoption**. Missouri's statewide electrical contractor license is expressly **optional** under §324.920.4 RSMo. That makes "how do I vet an installer" content more valuable in the Midwest than almost anywhere else. ([Missouri OSEC FAQ](https://pr.mo.gov/electricalcontractors-FAQ-Contractors.asp))

### 6. Northeast — New England, New York, New Jersey, Pennsylvania

**Hazard profile.** Nor'easters and tree fall. The Northeast logged **350** major weather outages 2000–2023, third among NOAA climate regions. But the defining metric is duration on rural distribution: **Maine 29.1 hours and 3.64 interruptions in 2024**, **New Hampshire 15.4 hours**, **Vermont 11.6 hours** — with Vermont's non-major-event SAIDI at **275 minutes**, meaning the outages are chronic, not just storm-driven. EIA attributes both Maine and Vermont explicitly to tree-fall on lines. Note the sharp contrast with the dense-grid states in the same region: **Massachusetts 1.7 hours, Rhode Island 1.7, Connecticut 2.6, New York 3.7, New Jersey 2.9** in 2024. (EIA Table 11.3, 2024; [EIA Today in Energy](https://www.eia.gov/todayinenergy/detail.php?id=66744))

**Fuel profile.** The only region where fuel oil dominates and where the propane share rivals the gas share. Maine: **8.3% gas / 16.0% propane / 50.3% oil**. Vermont: **19.8% / 19.8% / 35.5%**. New Hampshire: **22.2% / 20.4% / 37.0%**. Connecticut: **36.2% / 5.7% / 35.0%**. Contrast with New Jersey **74.0% gas** and New York **59.8% gas / 14.6% oil** (ACS 2024).

**Buying drivers.** Rural northern New England is the strongest propane-standby case in the country: high outage duration, high heating criticality (frozen pipes), and a household that already has propane or is willing to add a tank because oil is the alternative. Southern New England and the NY/NJ metro corridor are the opposite — short outages, dense gas service, and the motivation is Sandy-memory and sump pumps rather than routine reliability. **Massachusetts, Maine, and Minnesota are all on the 2026 NEC**, the newest cycle in the country.

### 7. West Coast and Intermountain — California, Oregon, Washington, Nevada, Colorado, Utah, Idaho

**Hazard profile.** Two distinct drivers. **Wildfire and PSPS** in California and increasingly inland: PG&E's Oct 9–12, 2019 shutoff was the largest to that date at approximately **729,000 customers across 35 counties**, described in CPUC filings as roughly two million individuals; the late-October 2019 event reached about **975,000 customer accounts in 38 counties**. ([PG&E CPUC compliance report](https://www.pge.com/assets/pge/docs/outages-and-safety/safety/PSPS-Report-Letter-10.09.19.pdf); [Joint Local Governments brief](https://docs.cpuc.ca.gov/PublishedDocs/Efile/G000/M350/K325/350325012.PDF)) **Windstorms and ice** in the Pacific Northwest: the January 13–20, 2024 Oregon ice storm took out **440,000 PGE customers plus about 146,000 Pacific Power customers**, some for roughly a week; the November 18–20, 2024 bomb cyclone (record-tying 942 mb) left about **650,000 people without power across western Washington**. ([KGW/PGE OPUC report](https://www.kgw.com/article/news/local/the-story/pge-rate-hike-power-outage-winter-storm-january-2024/283-93f2ccf9-c4ff-4e4d-942d-80cd83976788); [Nov 2024 bomb cyclone](https://en.wikipedia.org/wiki/November_2024_Northeast_Pacific_bomb_cyclone))

**Fuel profile.** Interior West is gas-heavy; coastal Northwest is electric. Utah **78.9%** gas (highest in the nation), Colorado **66.6%**, Nevada **61.1%**, California **60.6%**, New Mexico **63.2%**, Wyoming **59.1%**, Montana **49.9%**; but Oregon **37.5% gas / 54.0% electric** and Washington **32.7% / 60.0%** (ACS 2024). Montana **13.7%** and Wyoming **10.3%** propane mark the rural tail.

**Buying drivers.** PSPS is a *scheduled, repeatable* outage, which is a completely different sales argument from storm risk — the customer can be told in advance and still loses power. California adds the heaviest compliance layer: CSLB **C-10** required and any contract of **$500 or more** requires a license, plus, inside the City of Los Angeles, **LAMC §94.1217** requires an approved seismic gas shutoff or excess-flow shutoff valve downstream of the meter when a residential building permit valued over **$10,000** is issued, or when work involves replacing the gas meter — a plumbing permit is required each time an SGSOV is installed. ([CSLB C-10](https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10); [LAMC 94.1217](https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-186081)) Note that the Pacific Northwest is also the most expensive labor market in the country: Washington state mean electrician wage **$42.61/hr**, Seattle **$45.54**, Portland **$42.88** (BLS OEWS, May 2023).

### 8. Great Plains and Northern Rockies — Dakotas, Nebraska, Kansas, Oklahoma, Montana, Wyoming

**Hazard profile.** The lowest major-outage counts nationally (Northern Rockies and Plains: **24** events 2000–2023) but with high rural duration and blizzard/ice exposure. Nebraska is the surprise here with **10.7 hours** SAIDI in 2024. Oklahoma and Kansas carry ice-storm risk; both posted around **4.5–4.8 hours** in 2024.

**Fuel profile.** Gas in the towns, propane on the section roads. Kansas **63.2%** gas, Nebraska **58.7%**, Wyoming **59.1%**, Oklahoma **49.6%**, South Dakota **48.8%**, North Dakota **39.8%**; propane shares of **15.7% (SD), 13.6% (ND), 13.7% (MT), 10.3% (WY)** (ACS 2024).

**Buying drivers.** Distance from the utility and from the installer. Long rural feeders mean long restoration times and few installers per county — the directory value proposition is strongest here. **Kansas licensing moves to the State Fire Marshal on July 1, 2027**; before that date there is no statewide electrician license and the requirement is local. This is a genuinely newsworthy state-page callout, but note that the sentence changes on a known date — write it with the date attached rather than in the present tense, and re-check after the transition.

---

## State data table

**Sources and caveats for every column.**

- **Heating fuel columns:** U.S. Census Bureau, **American Community Survey 2024 1-year estimates, Table B25040 "House Heating Fuel"**, universe = occupied housing units. Percentages computed from raw estimates; retrieved via the Census Reporter API mirror of the ACS release on 2026-08-07. Verify against [data.census.gov/table/ACSDT1Y2024.B25040](https://data.census.gov/table/ACSDT1Y2024.B25040) before publishing any specific number. Columns do not sum to 100 — coal, solar, wood, other, and "no fuel used" are omitted except where called out in prose.
- **2024 SAIDI (hrs):** U.S. Energy Information Administration, **Electric Power Annual 2024, Table 11.3**, "Reliability Metrics Using Any Method of U.S. Distribution System by State," **all events including major event days**, converted from minutes to hours. [eia.gov/electricity/annual/html/epa_11_03.html](https://www.eia.gov/electricity/annual/html/epa_11_03.html). U.S. total for 2024 was **10.2 hours**.
- **Dominant outage driver:** editorial synthesis, not a sourced per-state ranking. Informed by Climate Central's 2000–2023 OE-417 analysis and the EIA 2024 reliability data. Do not publish as a statistic.
- **NEC edition in effect:** cross-checked between the [Mike Holt NEC Adoption List](https://www.mikeholt.com/necadoptionlist.php) and the [NFPA NEC enforcement maps](https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps), both read 2026-08-07, with the [IAEI table](https://www.iaei.org/page/nec-code-adoption) as a third check. Colorado and Maryland showed conflicts between trackers and are flagged. **Verify with the state board before publishing.**
- **Licensing note:** verified entries carry a specific statute, rule, or board scope. Everything marked **unverified** means a board exists but its scope for a residential generator install was not confirmed for this file. Do not fill these in by analogy.

| State | Utility gas % | Propane % | Electric % | Fuel oil % | 2024 SAIDI (hrs) | Dominant outage driver | NEC edition in effect | Licensing note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alabama | 25.9 | 4.9 | 67.5 | 0.1 | 4.7 | Hurricanes inland + tornado/severe | 2020 | State electrical contractor license (AL Board of Electrical Contractors) — details unverified |
| Alaska | 48.3 | 2.1 | 15.3 | 27.5 | 5.5 | Winter storms, remote grid | 2020 | State electrical administrator/certificate of fitness — unverified |
| Arizona | 34.2 | 2.6 | 59.1 | 0.1 | 1.5 | Monsoon microbursts, heat | None statewide (local) | ROC contractor license statewide; NEC edition set locally |
| Arkansas | 36.6 | 5.9 | 54.1 | 0.1 | 8.5 | Ice storms + severe/tornado | 2020 | State electrical licensing (Dept. of Labor) — unverified |
| California | 60.6 | 2.9 | 30.1 | 0.2 | 4.7 | Wildfire + PSPS | 2023 + CA amend. | CSLB C-10 required; work ≥$500 requires a license |
| Colorado | 66.6 | 4.5 | 25.5 | 0.2 | 4.3 | High wind, spring snow, PSPS (new) | 2026 (NFPA) / 2023 (Mike Holt) — conflict | State Electrical Board licenses electricians statewide — details unverified |
| Connecticut | 36.2 | 5.7 | 20.2 | 35.0 | 2.6 | Nor'easters, tropical remnants, tree fall | 2020 + CT amend. | State DCP electrical license (E-1/E-2) — unverified |
| Delaware | 41.3 | 10.4 | 39.1 | 6.8 | 1.9 | Coastal storms, severe | 2023 | State electrician licensing — unverified |
| District of Columbia | 45.0 | 1.0 | 49.9 | 0.8 | 0.5 | Severe summer storms | 2014 | DCRA/DLCP licensing — unverified |
| Florida | 5.9 | 0.9 | 89.7 | 0.2 | 22.0 | Hurricanes | 2020 | DBPR Electrical Contractors' Licensing Board (EC + specialty); local journeyman cards |
| Georgia | 37.4 | 3.6 | 57.6 | 0.2 | 20.5 | Hurricanes inland + ice (N. GA) | 2023 | State electrical contractor license via SCILB; no statewide journeyman license |
| Hawaii | 3.7 | 2.0 | 44.4 | 0.1 | 5.3 | Island grid, wind, volcanic | 2020 | State electrician licensing — unverified |
| Idaho | 52.6 | 5.2 | 35.1 | 0.9 | 3.9 | Winter storms, wildfire | 2023 | State Division of Building Safety licensing — unverified |
| Illinois | 75.5 | 3.8 | 18.9 | 0.1 | 2.6 | Derecho/severe summer storms | None statewide (local; 2008 fallback) | No statewide electrician license — city/county only |
| Indiana | 58.6 | 6.6 | 32.1 | 0.4 | 5.2 | Severe storms, ice | 2008 comm. / 2017 1–2 family | No statewide electrician license — city/county only |
| Iowa | 59.7 | 12.3 | 25.3 | 0.3 | 2.8 | Derecho, severe storms, ice | 2023 + IA amend. | State Electrical Examining Board licensing — unverified |
| Kansas | 63.2 | 7.9 | 26.9 | 0.2 | 4.8 | Ice storms, severe/tornado | None statewide (local) | Local licensing until 7/1/2027, then State Fire Marshal |
| Kentucky | 34.6 | 6.6 | 55.4 | 0.6 | 10.8 | Ice storms, tornado, flooding | 2023 | State electrical licensing (Dept. of Housing) — unverified |
| Louisiana | 33.0 | 2.0 | 63.7 | 0.1 | 12.1 | Hurricanes | 2020 | LSLBC "Electrical" classification required when work value exceeds $10,000 |
| Maine | 8.3 | 16.0 | 13.5 | 50.3 | 29.1 | Nor'easters, ice, tree fall | 2026 | State Electricians' Examining Board — unverified |
| Maryland | 42.9 | 3.7 | 45.4 | 5.8 | 2.0 | Severe summer storms, coastal | 2020 (Mike Holt) / 2023 (IAEI) — conflict | State + county electrical licensing — unverified |
| Massachusetts | 52.0 | 4.4 | 20.5 | 20.2 | 1.7 | Nor'easters, coastal wind | 2026 | Board of State Examiners of Electricians — unverified |
| Michigan | 74.8 | 8.7 | 12.5 | 0.8 | 7.8 | Ice storms, severe wind, tree fall | 2023 | LARA electrical licensing — unverified |
| Minnesota | 65.3 | 10.4 | 19.9 | 1.2 | 3.7 | Winter storms, severe wind | 2026 | DLI electrical licensing — unverified |
| Mississippi | 30.5 | 9.8 | 57.8 | 0.1 | 9.5 | Hurricanes + tornado | None statewide (local) | State contractor license; journeyman licensing local |
| Missouri | 49.0 | 8.5 | 39.2 | 0.1 | 3.7 | Ice storms, severe/tornado | None statewide (local) | Statewide electrical contractor license is optional (§324.920 RSMo); local licenses govern |
| Montana | 49.9 | 13.7 | 28.4 | 0.6 | 5.9 | Winter storms, wind | 2020 + MT amend. | State electrical board licensing — unverified |
| Nebraska | 58.7 | 7.4 | 31.8 | 0.3 | 10.7 | Severe/derecho, ice | 2023 | State Electrical Division licensing — unverified |
| Nevada | 61.1 | 2.7 | 33.0 | 0.3 | 2.6 | Wind, wildfire | None statewide (local) | NSCB contractor license; NEC edition set locally |
| New Hampshire | 22.2 | 20.4 | 11.9 | 37.0 | 15.4 | Ice, nor'easters, tree fall | 2023 | State Electricians' Board — unverified |
| New Jersey | 74.0 | 1.9 | 16.7 | 5.6 | 2.9 | Coastal storms, nor'easters | 2020 + NJ amend. | Board of Examiners of Electrical Contractors — unverified |
| New Mexico | 63.2 | 6.5 | 22.5 | 0.1 | 4.6 | Wind, wildfire | 2020 | CID electrical licensing — unverified |
| New York | 59.8 | 4.7 | 16.5 | 14.6 | 3.7 | Nor'easters, lake-effect, tropical remnants | 2023 | No statewide license — NYC and local jurisdictions license |
| North Carolina | 25.0 | 5.4 | 66.0 | 1.6 | 24.0 | Hurricanes (coast + mountain flooding), ice | 2020 + NC amend. | State Board of Examiners of Electrical Contractors licenses contractors; no state journeyman license |
| North Dakota | 39.8 | 13.6 | 41.0 | 2.0 | 1.7 | Blizzards, ice | 2023 | State Electrical Board — unverified |
| Ohio | 64.0 | 5.4 | 26.5 | 1.5 | 8.5 | Severe summer storms, ice | 2023 (res. w/ OH amend.) | OCILB electrical contractor license; residential often local |
| Oklahoma | 49.6 | 6.2 | 41.9 | 0.2 | 4.5 | Ice storms, severe/tornado | 2023 | CIB electrical licensing — unverified |
| Oregon | 37.5 | 1.4 | 54.0 | 1.2 | 9.8 | Ice storms, windstorms, PSPS | 2023 + OR amend. | BCD/CCB licensing — unverified |
| Pennsylvania | 52.0 | 5.2 | 26.0 | 12.8 | 5.6 | Winter storms, severe, tree fall | 2020 | No statewide electrician license — city/county only |
| Rhode Island | 53.4 | 4.9 | 14.2 | 25.4 | 1.7 | Coastal storms, nor'easters | 2023 | DBR electrical licensing — unverified |
| South Carolina | 25.1 | 3.2 | 69.7 | 0.4 | 52.3 | Hurricanes + ice | 2020 + SC amend. | State contractor license; journeyman local |
| South Dakota | 48.8 | 15.7 | 31.6 | 0.9 | 1.4 | Blizzards, ice | 2023 + SD amend. | State Electrical Commission — unverified |
| Tennessee | 30.2 | 3.3 | 64.6 | 0.2 | 4.6 | Ice storms, tornado, wind | 2017 + TN amend. | Board for Licensing Contractors; journeyman local |
| Texas | 35.4 | 2.7 | 60.5 | 0.1 | 21.2 | Hurricanes, derechos, winter events (ERCOT) | 2023 | TDLR electrical license statewide; separate RRC LP-Gas license for propane work |
| Utah | 78.9 | 2.5 | 16.7 | 0.1 | 2.0 | Wind, winter; PSPS (new) | 2023 | DOPL electrical licensing — unverified |
| Vermont | 19.8 | 19.8 | 11.8 | 35.5 | 11.6 | Ice, nor'easters, tree fall | 2020 + VT amend. | Electricians' Licensing Board — unverified |
| Virginia | 32.6 | 4.3 | 57.7 | 2.7 | 7.0 | Hurricane remnants, ice, severe | 2020 | DPOR tradesman/contractor licensing — unverified |
| Washington | 32.7 | 2.6 | 60.0 | 0.9 | 10.4 | Windstorms, ice | 2023 | L&I electrical licensing — unverified |
| West Virginia | 39.4 | 5.0 | 48.2 | 1.8 | 19.4 | Ice storms, tree fall, remnants | 2020 + WV amend. | State Fire Marshal electrician licensing — unverified |
| Wisconsin | 64.9 | 11.7 | 18.3 | 1.1 | 4.4 | Winter storms, severe wind | 2017 | DSPS electrical licensing — unverified |
| Wyoming | 59.1 | 10.3 | 24.2 | 0.1 | 2.3 | Blizzards, extreme wind | 2026 | State Electrical Board — unverified |

**Reading the table.** Three natural groupings fall out of the fuel columns and should drive template selection:

| Bucket | Definition | States | Editorial implication |
| --- | --- | --- | --- |
| Natural-gas-first | Utility gas ≥ 55% of heated homes | UT, IL, MI, NJ, CO, MN, WI, OH, KS, NM, NV, CA, NY, IA, WY, NE, IN | Lead with gas-line sizing, meter capacity, and the plumber-vs-electrician split. Fuel is effectively unlimited. |
| Mixed / metro-vs-rural split | Utility gas 25–55% | RI, ID, MA, PA, MT, OK, MO, SD, AK, DC, MD, DE, ND, WV, OR, GA, AR, CT, TX, KY, AZ, LA, WA, VA, MS, TN, AL, SC, NC | Metro pages should assume gas, rural county pages should assume propane. Same state, two different articles. |
| Propane-or-electric-first | Utility gas < 25% | NH, VT, ME, FL, HI | Lead with tank sizing, refill logistics, and runtime math. Gas is not an option for most buyers. |

Note that Florida and Maine land in the same bucket for opposite reasons — Florida because it has almost no heating load, Maine because it heats with oil. The advice diverges completely from there.

---

## Claims we can make

Each of these is written to be lifted, lightly edited, into a state or metro page. The source URL follows.

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

On state pages the durable layer is **heating-fuel mix, terrain, and storm type** — these barely move
between Census releases and they are what actually determine whether a state is a natural-gas or
propane market. Outage rankings and licensing rules sit on top of that and change more often.

1. **"In 2024, South Carolina electricity customers went without power for an average of 52.3 hours — more than five times the national average of 10.2 hours."** — U.S. EIA, Electric Power Annual 2024, Table 11.3. https://www.eia.gov/electricity/annual/html/epa_11_03.html

2. **"Maine customers averaged 29.1 hours without power in 2024 across an average of 3.6 separate interruptions — more outage time than Florida, North Carolina, or Texas experienced in the year of Helene, Milton, and Beryl. EIA attributes Maine's record largely to trees falling on distribution lines."** — U.S. EIA, Electric Power Annual 2024 Table 11.3 and EIA Today in Energy, 2025. https://www.eia.gov/electricity/annual/html/epa_11_03.html and https://www.eia.gov/todayinenergy/detail.php?id=66744

3. **"Eighty percent of major U.S. power outages reported between 2000 and 2023 were weather-related, and Texas (210 events), Michigan (157), California (145), North Carolina (111), and Ohio (88) reported the most."** — Climate Central analysis of DOE Form OE-417, published April 24, 2024. https://www.climatecentral.org/climate-matters/weather-related-power-outages-rising

4. **"Only 5.9% of Florida households heat primarily with utility gas, while 89.7% heat with electricity — which is why most Florida standby generators run on propane rather than a natural gas line."** — U.S. Census Bureau, ACS 2024 1-year estimates, Table B25040. https://data.census.gov/table/ACSDT1Y2024.B25040

5. **"Half of Maine households — 50.3% — still heat primarily with fuel oil, and only 8.3% heat with utility gas. That means a Maine standby generator almost always requires adding a propane tank, because there is usually no gas service at the house."** — U.S. Census Bureau, ACS 2024 1-year estimates, Table B25040. https://data.census.gov/table/ACSDT1Y2024.B25040

6. **"Utah has the highest natural gas heating penetration in the country at 78.9% of occupied homes, so most Utah installs connect to an existing gas meter rather than a new tank."** — U.S. Census Bureau, ACS 2024 1-year estimates, Table B25040. https://data.census.gov/table/ACSDT1Y2024.B25040

7. **"Under Texas Property Code §202.019, a property owners' association may not prohibit or effectively restrict a permanently installed standby generator, and any rule dictating the generator's location is unenforceable if it raises installation cost by more than 10% or the cost of connecting electrical and fuel lines by more than 20%."** — Texas Property Code §202.019. https://law.justia.com/codes/texas/property-code/title-11/chapter-202/section-202-019/

8. **"Florida's 2024 HB 293 added exterior fixed generators and fuel storage tanks to the statutory definition of 'hurricane protection,' so a Florida HOA cannot deny an application that conforms to the association's adopted hurricane protection specifications."** — Chapter 2024-205, Laws of Florida, amending Fla. Stat. §720.3035, effective May 28, 2024. https://www.bosdun.com/2024/06/07/2024-statutory-update-hoas/

9. **"Florida Building Code Residential Section M1905.2.4 requires a permanently installed standby generator exposed to wind to be designed and installed to resist wind pressures based on a minimum 120 mph ultimate design wind speed; if the manufacturer's instructions don't specify the anchoring method, a Florida-licensed engineer must certify it."** — Leon County, FL Development Support and Environmental Management, generator permitting guidance for FBC 8th Edition (2023). https://cms.leoncountyfl.gov/Portals/0/DeptFiles/DSEM/Building/Generator%20Requirements%20for%20FBC%208th%20Edition%20(2023)%20and%20NEC%202020.pdf

10. **"Colorado sets residential noise limits by statute: 55 dB(A) between 7 a.m. and 7 p.m. and 50 dB(A) overnight, measured 25 feet or more beyond the property line. Exceeding those levels is prima facie evidence of a public nuisance."** — C.R.S. §25-12-103. https://codes.findlaw.com/co/title-25-health/co-rev-st-sect-25-12-103.html

11. **"Washington's statewide environmental noise rule caps residential-to-residential noise at 55 dBA and drops that limit by another 10 dBA — to 45 dBA — between 10 p.m. and 7 a.m., which is why weekly exercise cycles should be scheduled midday."** — WAC 173-60-040. https://app.leg.wa.gov/WAC/default.aspx?cite=173-60-040

12. **"Federal floodplain rules at 44 CFR §60.3(a)(3)(iv) require new and substantially improved construction in flood-prone areas to have electrical and other service equipment designed or located so floodwater cannot enter or accumulate in it — which is why coastal and riverine jurisdictions make you elevate a generator pad."** — 44 CFR §60.3; FEMA P-348. https://www.law.cornell.edu/cfr/text/44/60.3 and https://www.fema.gov/ht/node/500084

13. **"Installing or servicing a propane system in Texas requires a Railroad Commission of Texas LP-Gas license — a separate credential from the TDLR electrical license your electrician holds. Ask for both."** — RRC LPG certification and company licensing; 16 TAC §9.7. https://www.rrc.texas.gov/alternative-fuels/liquefied-petroleum-gas-propane/certification-and-company-licensing/ and https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-9-7

14. **"Illinois, Indiana, Kansas, Missouri, New York, and Pennsylvania have no mandatory statewide electrician license — credentials are issued city by city — and Missouri's statewide electrical contractor license is explicitly optional under §324.920.4 RSMo. In these states, verifying the local license matters more than anywhere else."** — Missouri Office of Statewide Electrical Contractors FAQ. https://pr.mo.gov/electricalcontractors-FAQ-Contractors.asp

15. **"PG&E's October 9–12, 2019 Public Safety Power Shutoff de-energized roughly 729,000 customer accounts across 35 California counties — the largest planned shutoff to that date — and a follow-on event in late October reached about 975,000 accounts in 38 counties."** — PG&E PSPS compliance report to the CPUC; CPUC Joint Local Governments opening brief. https://www.pge.com/assets/pge/docs/outages-and-safety/safety/PSPS-Report-Letter-10.09.19.pdf and https://docs.cpuc.ca.gov/PublishedDocs/Efile/G000/M350/K325/350325012.PDF

16. **"During Winter Storm Uri in February 2021, ERCOT ordered 20,000 MW of rolling blackouts — the largest manually controlled load shed in U.S. history — and more than 4.5 million Texans lost power, some for as long as four days. At least 210 people died."** — FERC/NERC/Regional Entity final report, November 2021. https://www.nerc.com/globalassets/our-work/reports/event-reports/february_2021_cold_weather_report.pdf

17. **"Hurricane Helene produced a region-wide peak of 4.6 million customer outages on September 27, 2024, including 1.37 million in South Carolina — 43% of every customer in the state."** — U.S. DOE ESF-12 Hurricane Helene Situation Report #1. https://www.energy.gov/sites/default/files/2024-09/TLP%20CLEAR_Helene_ESF%2012-Sit%20Rep_092724-%20CLEAN_PDF.pdf

18. **"Hurricane Beryl left 2.26 million CenterPoint Energy customers in the Houston area without power on July 8, 2024. Full restoration took 11 days, and roughly 78,000 customers were still out after eight."** — CenterPoint Energy Hurricane Beryl After-Action Report. https://www.centerpointenergy.com/en-us/Documents/GHRI%20Tracker/CenterPoint_Beryl_After_Action_Final_Report.pdf

19. **"The March 28–31, 2025 northern Michigan ice storm coated three million acres in up to 1.5 inches of ice, cut power to nearly 200,000 customers, and left some residents without electricity for 17 to 18 days."** — Great Lakes Energy ice storm page; Northern Express retrospective. https://www.gtlakes.com/ice-storm/ and https://www.northernexpress.com/news/feature/the-march-2025-ice-storm-a-retrospective/

20. **"The August 10, 2020 Corn Belt derecho caused $11.5 billion in damage across a 90,000-square-mile footprint, with gusts topping 140 mph in Cedar Rapids and at least a million customers losing power — some for more than two weeks."** — NWS Chicago event summary. https://www.weather.gov/lot/2020aug10

21. **"Electrician labor costs roughly double across U.S. metros: the May 2023 BLS mean hourly wage for electricians was $49.32 in San Jose and $49.15 in San Francisco, against $27.38 in Dallas–Fort Worth and $26.46 in Miami–Fort Lauderdale."** — BLS Occupational Employment and Wage Statistics, May 2023, SOC 47-2111. https://www.bls.gov/oes/2023/may/oes472111.htm

22. **"In the City of Los Angeles, LAMC §94.1217 requires an approved seismic gas shutoff or excess-flow shutoff valve downstream of the gas meter when a residential alteration valued over $10,000 is permitted, or when work replaces the gas meter — and a plumbing permit is required each time one is installed."** — Los Angeles Municipal Code §94.1217.0. https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-186081

---

## Claims to avoid

- **"Your state requires X."** Unless the cell in the table above is verified, do not say it. Licensing scope for a *residential generator* specifically is narrower than "the state has an electrical board," and several states license the contractor but not the individual electrician.
- **"NEC 445.19 requires an emergency shutdown."** True only in 2023-and-later NEC states. In Tennessee (2017), Wisconsin (2017), D.C. (2014), and the 15 states still on the 2020 edition, the citation is **445.18(D)**, and in the 2008-era jurisdictions neither applies. Section-number citations must be gated on the state's edition.
- **"NOAA data shows [2025 or 2026] disaster costs."** The Billion-Dollar Disasters product stopped at calendar year 2024 and was retired in May 2025. Any post-2024 disaster-cost figure sourced to NOAA is wrong.
- **"State X offers a rebate or tax credit for home standby generators."** Make no incentive claim at all — the library deliberately holds no incentive data (see `09-alternatives-battery-solar-portable.md`). Note in particular that the state sales-tax holidays sometimes cited in this context apply to *portable* generators under price caps, never to a permanently installed standby unit, so even the "yes, sort of" version is wrong.
- **"HOAs can't stop you from installing a generator."** Only Texas (§202.019) and Florida (§720.3035 as amended in 2024) were verified to constrain HOA power over backup equipment. In the other 48 states, treat the CC&Rs as controlling unless we verify otherwise.
- **"Florida requires a Miami-Dade NOA for generators."** The NOA/HVHZ regime is Miami-Dade and Broward counties. Everywhere else in Florida, Florida Product Approval and the ASCE 7-22 map speed apply. Do not generalize HVHZ requirements to Tampa, Orlando, or Jacksonville.
- **"Homes in coastal states must elevate the generator X feet."** The federal rule is performance-based (44 CFR 60.3), and the elevation number comes from the local Flood Insurance Rate Map plus any local freeboard. There is no national number.
- **"[State] is a propane state" based on a neighbor.** New Hampshire is 20.4% propane and Massachusetts is 4.4% — adjacent states, entirely different markets. Always pull the ACS row.
- **"Utility gas share equals gas availability."** A household in Phoenix may have a gas main at the curb and still heat with a heat pump. The ACS heating-fuel share is a floor on gas availability, not a measure of it. Where we need true service-territory availability, we need utility customer-count data we have not yet pulled.
- **Statewide dB limits in states that don't have them.** Colorado, Washington, and Minnesota were verified. Most states have no statewide residential noise standard and the limit is municipal — which means a metro page can carry a real number but a state page usually cannot.

---

## Open questions / needs verification

1. **Which sixth state is on the 2026 NEC?** NFPA counted six on August 3, 2026; cross-referencing Mike Holt's list produced only five (Colorado, Maine, Massachusetts, Minnesota, Wyoming). Need the NFPA state-by-state table read directly.
2. **Colorado NEC conflict.** NFPA's summary showed Colorado at **2026 effective 8/1/2026**; Mike Holt and IAEI both still list **2023 effective 8/1/2023**. Confirm with the Colorado State Electrical Board.
3. **Maryland NEC conflict.** Mike Holt lists **2020 (5/29/2023)**; IAEI lists **2023 (3/1/2025)**. Confirm with the Maryland Department of Labor.
4. **All 30-plus "unverified" licensing cells** in the state table. Each needs a direct read of the board's scope-of-work language to confirm whether a residential standby generator install requires a state license, a local license, or both, and whether the gas connection requires a separate credential.
5. **Propane licensing outside Texas.** Texas RRC is verified. Florida (DACS), North Carolina, and most other states have separate LP-gas licensing regimes we have not confirmed. This is a strong "how to vet an installer" angle in every propane-heavy state and should be filled in.
6. **True natural gas service availability by state.** ACS heating share understates availability. EIA's residential natural gas customer counts by state (Form EIA-176) divided by occupied housing units would give a better availability proxy; the EIA API requires a key we did not have during this pass.
7. **BLS May 2025 OEWS wage data.** Only May 2023 is available in HTML; May 2024 and May 2025 exist as XLSX downloads that bls.gov blocked during this pass. Metro-level 2025 wages would materially improve the cost section.
8. **Actual installed-cost data by metro.** No credible primary source for regional standby generator installed cost was found. BLS wages are a defensible proxy; RSMeans city cost indexes would be better but are paywalled. Do not publish metro price ranges until we have a real basis.
9. **State-level building code adoption for the IRC/IFGC**, which governs the gas side and the flood-hazard siting reference. This varies independently of NEC adoption and was not mapped here.
10. **Whether any state beyond Texas and Florida constrains HOA authority over backup equipment.** A negative was found for Louisiana and Virginia in a general search, but that is not a verified negative. Worth a 50-state statutory scan.
11. **California seismic anchoring specifics for residential generators.** The LA City seismic gas shutoff valve requirement is verified. The separate question — what CBC/CRC anchorage the AHJ requires for the generator pad and enclosure itself in Seismic Design Category D/E — was not verified and should not be asserted.
12. **Michigan residential NEC edition.** Michigan adopted the 2023 NEC for commercial 3/12/2024 with one- and two-family dwellings following on 8/29/2025 per Mike Holt; IAEI's table still showed 2017 residential. Confirm with LARA.

---

## Sources

All URLs accessed **August 7, 2026** unless noted.

**Heating fuel and energy**

- U.S. Census Bureau, ACS 2024 1-year estimates, Table B25040 "House Heating Fuel" — every state heating-fuel percentage in this file. https://data.census.gov/table/ACSDT1Y2024.B25040 (retrieved programmatically via the Census Reporter API, `https://api.censusreporter.org/1.0/data/show/latest?table_ids=B25040&geo_ids=040|01000US`; release identified as `acs2024_1yr`)
- U.S. EIA, Electric Power Annual 2024, Table 11.3, Reliability Metrics by State — 2024 SAIDI/SAIFI for every state, with and without major event days. https://www.eia.gov/electricity/annual/html/epa_11_03.html
- U.S. EIA, Electric Power Annual 2024, Table 11.1 — national reliability trend, 2024 U.S. SAIDI of 611.3 minutes. https://eia.gov/electricity/annual/html/epa_11_01.html
- U.S. EIA, "Hurricanes in 2024 led to the most hours without power in the United States in 10 years," Today in Energy — the 11-hour national average, the Maine/Vermont tree-fall attribution, and the note that major events drove 80% of 2024 outage hours. https://www.eia.gov/todayinenergy/detail.php?id=66744
- U.S. EIA, Winter Fuels Outlook 2025–2026 — national shares of propane (5%) and heating oil, and the statement that more than 80% of heating-oil homes are in the Northeast. https://www.eia.gov/outlooks/steo/report/perspectives/2025/10-winterfuels/2025_winter_fuels.pdf
- U.S. EIA, Short-Term Energy Outlook winter fuels perspective, Oct 2024 — propane is 5% of U.S. households, mostly rural. https://www.eia.gov/outlooks/steo/report/perspectives/2024/10-winterfuels/article.php

**Hazards and outage history**

- Climate Central, "Weather-related Power Outages Rising," April 24, 2024 — outages by state and NOAA climate region, 2000–2023; the 80% weather share; the winter-weather 23% share. https://www.climatecentral.org/climate-matters/weather-related-power-outages-rising
- NOAA NESDIS, Notice of Changes: Billion Dollar Weather and Climate Disasters, May 8, 2025 — product retirement and the 1980–2024 archive location. https://www.nesdis.noaa.gov/about/documents-reports/notice-of-changes/2025-notice-of-changes/billion-dollar-weather-and-climate-disasters
- NOAA NCEI, U.S. Billion-Dollar Weather and Climate Disasters archive (1980–2024). https://www.ncei.noaa.gov/access/billions/
- FERC / NERC / Regional Entity Staff Report, "The February 2021 Cold Weather Outages in Texas and the South Central United States," November 2021 — 20,000 MW of load shed, 4.5 million Texans, at least 210 deaths, 1,045 generating units affected. https://www.nerc.com/globalassets/our-work/reports/event-reports/february_2021_cold_weather_report.pdf
- FERC news release on the final February 2021 report. https://ferc.gov/news-events/news/final-report-february-2021-freeze-underscores-winterization-recommendations
- U.S. DOE ESF-12, Hurricane Helene Situation Report #1, Sept 27, 2024 — 4.68 million customers out; state-by-state peaks. https://www.energy.gov/sites/default/files/2024-09/TLP%20CLEAR_Helene_ESF%2012-Sit%20Rep_092724-%20CLEAN_PDF.pdf
- U.S. DOE ESF-12, Hurricane Helene Situation Report #11, Oct 7, 2024 — restoration timeline and confirmed peak of 4.6 million. https://www.energy.gov/sites/default/files/2024-10/Hurricane%20Helene%20Situation%20Report%2011.pdf
- CenterPoint Energy, Hurricane Beryl After-Action Report — 2.26 million customers, 11-day restoration, 78,000 still out at day eight, the May 2024 derecho's role in tree stress. https://www.centerpointenergy.com/en-us/Documents/GHRI%20Tracker/CenterPoint_Beryl_After_Action_Final_Report.pdf
- CenterPoint Energy news release, July 9, 2024 — 2.26 million affected; measured gusts by county. https://www.centerpointenergy.com/en-us/corporate/about-us/news/1775
- Texas Tribune, July 25, 2024 — PUC investigative report, 2.6 million peak statewide, at least 23 deaths, $1.2–1.3B infrastructure damage. https://www.texastribune.org/2024/07/25/texas-power-grid-puc-centerpoint-hurricane-beryl/
- NWS Chicago, "August 10, 2020: Corn Belt Derecho" — $11.5B, 90,000 sq mi, 140 mph gusts, 1M+ customers, two-week restorations. https://www.weather.gov/lot/2020aug10
- NOAA NCEI Storm Events Database, Aug 10, 2020 derecho event detail — 1.4 million peak simultaneous outages. https://www.ncei.noaa.gov/stormevents/eventdetails.jsp?id=919275
- Great Lakes Energy, March 2025 ice storm information page — 0.25–1.5 in ice, ~3 million acres, nearly 200,000 out, 13-county disaster declaration. https://www.gtlakes.com/ice-storm/
- Northern Express, "The March 2025 Ice Storm, A Retrospective" — NWS Gaylord meteorologist on the 60-hour freezing rain duration; up to 18 days without power. https://www.northernexpress.com/news/feature/the-march-2025-ice-storm-a-retrospective/
- KGW, PGE report to the Oregon PUC on the January 2024 ice storm — 440,000 PGE and ~146,000 Pacific Power customers; roughly a week for some. https://www.kgw.com/article/news/local/the-story/pge-rate-hike-power-outage-winter-storm-january-2024/283-93f2ccf9-c4ff-4e4d-942d-80cd83976788
- November 2024 Northeast Pacific bomb cyclone summary — 942 mb, ~650,000 without power in western Washington. https://en.wikipedia.org/wiki/November_2024_Northeast_Pacific_bomb_cyclone *(secondary source; replace with an NWS event summary before publishing)*

**Codes and code adoption**

- NFPA, "Learn where the NEC is enforced" — national counts as of August 3, 2026 and the four no-statewide-adoption states. https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps
- Mike Holt Enterprises, NEC Adoption List — per-state edition and effective date. https://www.mikeholt.com/necadoptionlist.php
- IAEI, Code Adoption by State — third-party cross-check. https://www.iaei.org/page/nec-code-adoption
- 44 CFR §60.3, Flood plain management criteria for flood-prone areas — the (a)(3)(iv) service-equipment rule. https://www.law.cornell.edu/cfr/text/44/60.3
- FEMA, "Mechanical Equipment" NFIP guidance page. https://www.fema.gov/ht/node/500084
- FEMA P-348, Protecting Building Utility Systems From Flood Damage (2017) — the ASCE 24 / IMC pathway and design flood elevation concept. https://dwee.nebraska.gov/sites/default/files/floodplain/DigitalDeskReference/FEMANFIP/FEMAP348ProtectingBuildingUtilitySystemsFromFloodDamage2017.pdf
- FEMA, Comparison of Select NFIP and 2018 I-Code Requirements for Special Flood Hazard Areas — Zone V utility elevation requirement. https://www.fema.gov/sites/default/files/2020-07/fema_quick-ref-guide-nfip-2018-icodes-reqs-flood-areas.pdf
- Leon County, FL DSEM, "Generator Requirements for FBC 8th Edition (2023) and NEC 2020" — M1905.2.1 through M1905.2.5, including the 120 mph wind rule and the PE-certification fallback. https://cms.leoncountyfl.gov/Portals/0/DeptFiles/DSEM/Building/Generator%20Requirements%20for%20FBC%208th%20Edition%20(2023)%20and%20NEC%202020.pdf
- Kohler Power, "Florida Building Code" enclosure white paper — HVHZ Risk Category wind speeds for Miami-Dade (175 mph Risk Cat II) and Broward (170 mph). https://resources.kohler.com/power/kohler/industrial/pdf/EnclosuresforHurricane%20RatingsWP.pdf
- FEMA Coastal Construction Manual excerpt, "Installing Mechanical Equipment and Utilities" — recommendation to locate the generator and its fuel source above the design flood elevation. https://www.cedengineering.com/userfiles/S01-006%20-%20Coastal%20Construction%20-%20Installing%20Mechanical%20Equipment%20and%20Utilities%20-%20US.pdf

**Licensing**

- California CSLB, C-10 Electrical Contractor classification. https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10
- Louisiana State Licensing Board for Contractors, Electrical classification — the $10,000 project-value threshold. https://lslbc.gov/classifications_list/electrical/
- Railroad Commission of Texas, LPG Certification and Company Licensing. https://www.rrc.texas.gov/alternative-fuels/liquefied-petroleum-gas-propane/certification-and-company-licensing/
- 16 Tex. Admin. Code §9.7 — no person may engage in any LP-gas activity without a Commission license, with limited ultimate-consumer exceptions. https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-9-7
- Railroad Commission of Texas, LPG License Categories — Category D General Installers and Repairmen. https://www.rrc.state.tx.us/alternative-fuels/liquefied-petroleum-gas-propane/certification-and-company-licensing/licenses/categories/
- Missouri Division of Professional Registration, Office of Statewide Electrical Contractors FAQ — §324.920.3 and .4 RSMo, the optional statewide license. https://pr.mo.gov/electricalcontractors-FAQ-Contractors.asp

**HOA, noise, and siting**

- Texas Property Code §202.019, Standby Electric Generators. https://law.justia.com/codes/texas/property-code/title-11/chapter-202/section-202-019/
- Texas Property Code §202.019 (alternate text). https://texas.public.law/statutes/tex._prop._code_section_202.019
- Boswell and Dunlap LLP, 2024 Florida HOA statutory update — Chapter 2024-205 (HB 293), effective May 28, 2024, adding exterior generators and fuel storage tanks to "hurricane protection." https://www.bosdun.com/2024/06/07/2024-statutory-update-hoas/
- Fla. Stat. §720.3075, prohibited clauses in association documents — including the fuel-source and gas-appliance protections. https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799%2F0720%2FSections%2F0720.3075.html%2F
- C.R.S. §25-12-103, Maximum permissible noise levels — 55/50 dB(A) residential at 25 ft beyond the property line. https://codes.findlaw.com/co/title-25-health/co-rev-st-sect-25-12-103.html
- WAC 173-60-040, Maximum permissible environmental noise levels — 55 dBA Class A to Class A, minus 10 dBA from 10 p.m. to 7 a.m. https://app.leg.wa.gov/WAC/default.aspx?cite=173-60-040
- Minnesota Rules 7030.0040, Noise Standards — NAC-1 L50 60 day / 50 night. https://www.revisor.mn.gov/rules/7030.0040/
- City of Mill Valley, CA generator handout — a worked example of a municipal residential limit (45 dBA 9 p.m.–7 a.m., 50 dBA 7 a.m.–9 p.m. single-family) plus a written prolonged-outage exemption and a 9 a.m.–8 p.m. testing window. https://www.cityofmillvalley.gov/DocumentCenter/View/9174
- Los Angeles Municipal Code §94.1217.0, Seismic Gas Shutoff Valves — scope, the $10,000 residential alteration trigger, contractor licensing, and the permit requirement. https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-186081

**PSPS and utility programs**

- PNNL Wildfire Mitigation Plan analysis, "Public Safety Power Shutoffs in Wildfire Mitigation Plans" — the multi-state PSPS/PSOM landscape, including Xcel Colorado (2024, 2025) and Rocky Mountain Power Utah (2022, 2025). https://wildfire.pnnl.gov/mitigationPlans/content/analysis/Public%20Safety%20Power%20Shutoffs%20in%20WMPs.pdf
- Oregon Administrative Rules, Division 300 — PSPS definition and communication, notification, and reporting requirements. https://secure.sos.state.or.us/oard/displayDivisionRules.action?selectedDivision=6618
- OAR 860-024-0160, PSPS reporting requirements. https://oregon.public.law/rules/oar_860-024-0160
- PG&E, PSPS Report to the CPUC, October 9–12, 2019 de-energization event — 728,980 customers across 35 counties. https://www.pge.com/assets/pge/docs/outages-and-safety/safety/PSPS-Report-Letter-10.09.19.pdf
- CPUC, Joint Local Governments opening brief — ~729,000 accounts / roughly two million individuals in October 2019, and ~975,000 accounts in 38 counties in the late-October events. https://docs.cpuc.ca.gov/PublishedDocs/Efile/G000/M350/K325/350325012.PDF
- Xcel Energy Colorado, Public Safety Power Shutoffs customer page — notification timelines. https://co.my.xcelenergy.com/s/outage-safety/wildfires/power-shutoffs

**Cost and labor**

- BLS Occupational Employment and Wage Statistics, May 2023, SOC 47-2111 Electricians — national, state, and metropolitan mean hourly and annual wages. https://www.bls.gov/oes/2023/may/oes472111.htm
- BLS OEWS data tables index (May 2024 and May 2025 available as XLSX only). https://www.bls.gov/oes/current/oes472111.htm