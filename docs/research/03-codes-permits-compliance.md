# Codes, Permits, and Compliance — Residential Home Standby Generators

**Internal research only. Not published content.** This file exists so our writers can speak with grounded confidence about code and permitting. Nothing here may be presented to readers as legal advice, code advice, or an engineering opinion. Published copy must always defer to the manufacturer's installation manual and the local authority having jurisdiction (AHJ). Code section numbers below were verified against a real source; anything unverified is labeled as such. Research date: August 2026.

---

## Executive summary

- Home standby generators fall under **NEC Article 702, Optional Standby Systems** — not 700 (emergency) or 701 (legally required). Art. 702 sets no transfer-time limit; 700.12 requires 10 seconds, 701.12 requires 60. ([EC&M](https://www.ecmweb.com/national-electrical-code/code-basics/article/55285564/nec-requirements-for-emergency-and-standby-systems))
- Sec. 700.3 and 701.3 impose commissioning, periodic testing, and recordkeeping. **Article 702 imposes none.** Nobody is legally required to maintain a home standby generator — a defensible angle for maintenance-plan content. ([Mike Holt](https://www.mikeholt.com/newsletters.php?action=display&letterID=1914))
- Sec. 702.5 requires **listed** interconnection or transfer equipment that prevents inadvertent interconnection of sources. Sec. 702.7 requires signage at the service equipment identifying the standby source.
- Whether the generator is a **separately derived system** is decided by the transfer switch, not the generator: switched neutral → separately derived, grounded per 250.30(A). Solid neutral → not separately derived, 250.35(B) governs. ([ECMag](https://www.ecmag.com/magazine/articles/article-detail/codes-standards-generator-grounding-requirements-equipment-transfer-switches-and-system))
- **NFPA 37 baseline for outdoor engines is 5 ft** from wall openings (4.1.4.1) and 5 ft from combustible walls (4.1.4.2), with three exceptions: 1-hour fire rating, fire test, or engineering calculation. ([NFPA 37, 2024](https://normfile.com/nfpa/NFPA%2037-2024%20PDF.pdf))
- Manufacturers buy their way out via the fire-test exception. Generac air-cooled units are **listed by Southwest Research Institute for 18 in rear clearance**, 36 in front and ends, 60 in overhead. That comes from the listing, not from NFPA 37.
- The reduced wall clearance **does not** reduce the opening clearance — Generac still requires no operable window, door, or wall opening within 5 ft of any point of the generator.
- Kohler's residential manuals are stricter on intakes: no combustibles within 4 ft of the exhaust end, and **furnace and similar intakes at least 10 ft** from it. ([Kohler 8/10/12RESV](https://resources.kohler.com/power/kohler/residential/pdf/8RESVL_INSTALLATION.pdf))
- Fuel work is a separate trade, separate code (NFPA 54/IFGC for gas, NFPA 58 for propane), separate permit, usually a separate license. Generac explicitly refuses to size gas lines and refers customers to a licensed plumber.
- A typical install needs **two or three permits** and four inspections: underground trench, rough, gas pressure test, final.
- Real fee data: San Diego **$176.57** ("Generator Only"); National City, CA **$209.00**; Miami-Dade **$11.28 per 10 kW** against a **$227.90** minimum, plus a **double fee** for unpermitted work.
- Utilities generally require **notification** for open-transition standby even without an interconnection agreement, and they approve service-entrance-rated ATS equipment because it sits in the metering path.
- NEC adoption is fragmented as of **August 3, 2026**: 2026 NEC in 6 states, 2023 in 20, 2020 in 15, 2017 in 3, 2008 in 2, and four states (AZ, IL, MS, MO) with no statewide adoption. ([NFPA](https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps))
- The 2020→2023 renumbering matters: generator emergency shutdown moved from **445.18** to a new **445.19**.
- Unpermitted work is disclosable on sale in California by statute. That is a hard, citable consequence; the widely repeated "insurance will deny your claim" is not.

---

## Detailed findings

### 1. NEC articles governing a residential standby generator

**Article 702 — Optional Standby Systems** is the correct article. Verified provisions:

- **702.4(A)**: where load connection is manual, size for all loads intended to run at once. **702.4(B)**: where automatic, size for the full automatically connected load per Art. 220, or use an energy management system per Sec. 750.30 so capacity need only cover the maximum load the EMS will connect. This is the code basis for load-shed modules letting a 22 kW unit back a 200 A service.
- **702.5**: interconnection or transfer equipment required, must be listed, must prevent inadvertent interconnection of all sources. The 2023 edition broadened this to cover interconnection devices, not just transfer switches. 702.5(C) (field-marked SCCR) applies to *other than* dwelling units.
- **702.7**: signage at the service equipment giving type and location of the standby source; 702.7(B) a shock-hazard warning where removing a grounding/bonding connection could interrupt the grounding electrode path; 702.7(C) power-inlet warning signs.

Sources: [EC&M](https://www.ecmweb.com/national-electrical-code/code-basics/article/55285564/nec-requirements-for-emergency-and-standby-systems); [Mike Holt PDF](https://www.mikeholt.com/files/PDF/23_FREE_PDF_Generators_and_Standby_Power_Systems.pdf).

**Article 445 — Generators.** Verified: **445.11** nameplate marking, which must also indicate whether the neutral is bonded to the frame (and requires field marking if changed on site). **445.13(A)** conductors from output terminals to the first OCPD at ≥115% of nameplate current, with an exception for 100% where design prevents overloading — normally the manufacturer's problem since the OCPD ships with the unit. **445.18(A)** disconnect that simultaneously opens all ungrounded conductors and is lockable open per 110.25. ([EC&M Art. 445](https://www.ecmweb.com/national-electrical-code/code-basics/article/21273030/nec-requirements-for-generators))

**Emergency shutdown is cycle-dependent.** In the **2020 NEC** it is **445.18(D)**: for other than cord-and-plug-connected portable generators, an emergency shutdown device must be outside the dwelling unit at a readily accessible location. In the **2023 NEC** the same rule is **445.19(C)**, and a device on the exterior of the generator enclosure expressly satisfies it, labeled "Generator Emergency Shutdown" per 110.21(B). The 2023 edition also narrowed the >15 kW remote e-stop rule (445.19(B)) to exclude one- and two-family dwellings. ([UpCodes](https://up.codes/s/emergency-shutdown-in-one-and-two-family-dwelling-units); [ElectricalLicenseRenewal](https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/NEC-Content.php?sectionID=1514))

**Grounding: switched vs. solid neutral.** Per 250.30 Informational Note 1, an on-site generator is *not* separately derived if its grounded conductor is solidly interconnected with the service neutral — the case with an unswitched-neutral ATS. If the transfer equipment switches the neutral (or there is no neutral), it *is* separately derived and must be grounded per 250.30(A), including an unspliced system bonding jumper where the grounding electrode conductor terminates, per 250.30(A)(1). ([Mike Holt](https://www.mikeholt.com/newsletters.php?action=display&letterID=1237)) Otherwise 250.35(B) requires a supply-side bonding jumper to the first disconnecting means, sized per 250.102(C). ([ECMag](https://www.ecmag.com/magazine/articles/article-detail/codes-standards-generator-grounding-requirements-equipment-transfer-switches-and-system))

The field failure mode worth writing about: a generator with a factory neutral-to-frame bond paired with a solid-neutral ATS produces two simultaneous neutral-to-ground bonds and current on the grounding path. The fix is removing the generator bond (and field-marking per 445.11) or using switched-neutral transfer equipment. ([Cummins PT-6006](https://onan.xmsi.net/Cummins%20PT-6006%20Grounding%20AC%20Generators%20&%20Switched%20Neutral%20pt2.pdf))

### 2. NFPA 37 clearances — and why the manual wins

From the 2024 edition, Chapter 4:

- **4.1.4.1** — engines and their enclosures installed outdoors shall be at least 1.5 m (5 ft) from any openings in the walls of structures.
- **4.1.4.2** — at least 5 ft from structures having combustible walls, except per 4.1.4.2.1, .2, or .3.
- **4.1.4.2.1** — less than 5 ft permitted where all portions of structures closer than 5 ft have a 1-hour fire resistance rating.
- **4.1.4.2.2** — less than 5 ft permitted where a fire test demonstrates a fire originating at the engine will not ignite combustible structures; enclosures supplied with the engine must be included in the test.
- **4.1.4.2.3** — less than 5 ft permitted where calculations under engineering supervision demonstrate the same.
- **4.1.3** covers roofs and platforms with parallel language.

Verified from the [2024 text](https://normfile.com/nfpa/NFPA%2037-2024%20PDF.pdf); the [2018 edition](https://normfile.com/nfpa/NFPA%2037-2018%20PDF.pdf) has the same baseline with two rather than three exceptions.

**This is the most misunderstood point in the category.** Real manufacturer numbers, from actual manuals:

| Manufacturer / family | Clearance | Source |
| --- | --- | --- |
| Generac air-cooled | 18 in (457 mm) rear, to stationary wall/building | [Generac install guidelines](https://images.thdstatic.com/catalog/pdfImages/b9/b92db3fe-963a-4d1b-93fd-06733ecd3d39.pdf) |
| Generac air-cooled | 36 in (914 mm) front and ends, including shrubs and trees | same |
| Generac air-cooled | 60 in (1524 mm) overhead from any structure, overhang, projection | same |
| Generac air-cooled | No operable windows or wall openings within 5 ft of any point of the generator | same |
| Generac, roof/platform | 18 in from combustible walls, 5 ft from any operable opening, noncombustible surface 12 in beyond | [Guardian manual](https://truesourcegenerators.ca/wp-content/uploads/2023/09/Generac-Guardian-Series-Installation-Manual.pdf) |
| Kohler 8/10/12RESV | No plants/combustibles within 4 ft (1.2 m) of the exhaust end | [Kohler 8RESVL](https://resources.kohler.com/power/kohler/residential/pdf/8RESVL_INSTALLATION.pdf) |
| Kohler 8/10/12RESV | Furnace and similar intakes ≥10 ft (3 m) from the exhaust end | same |
| Kohler 24/30/38RCL | 3 ft (0.9 m) all sides; no windows, vents, or openings within 5 ft of the exhaust outlet in any direction | [Kohler TP-6905](https://www.electricgeneratorsdirect.com/manuals/kohler-903c2ea6b8bc3946398b02164dde0c60.pdf) |

Generac states the mechanism explicitly: Southwest Research Institute, a nationally recognized third-party testing and listing agency, tested the enclosure and "Based on this testing and the requirements of NFPA 37, Sec 4.1.4, the guidelines for installation of the generators listed above are changed to 18 in (457 mm)." A SwRI decal sits inside the enclosure next to the data decal — that decal is what an inspector should be shown.

Two caveats. *Consulting-Specifying Engineer* notes AHJs have argued there is no clear provision letting an inspector reject manufacturer "proof," and recommends keeping 5 ft where possible. ([CSE](https://www.csemag.com/defining-nfpa-37/)) And Generac's own manual qualifies the 18 in figure with "unless state or local codes dictate otherwise" — Georgetown, TX's generator checklist lists "5 ft min. Sec. 4.1.4 of NFPA 37" alongside manufacturer specs. ([Georgetown TX](https://www.georgetowntexas.gov/development_services/permits/other_permits/generator.php))

### 3. Exhaust and carbon monoxide

The exhaust/opening clearance is the one that does *not* shrink with the listing. Generac: no operable windows, doors, vents, window wells, or wall openings closer than locally adopted codes permit, with 5 ft illustrated as the guideline. ([Generac instruction sheet](https://productmanuals.generac.com/api/manualfiles/G0072580/A0005151099/0)) Kohler: no windows, air vents, or openings within 5 ft of the exhaust outlet in any direction, and furnace-type intakes at least 10 ft from the exhaust end. Kohler also directs installers to orient exhaust away from the building and to **install carbon monoxide detectors on each level of any adjacent building**. ([Kohler TP-7101](https://resources.kohler.com/power/kohler/residential/pdf/tp7101.pdf))

Soffit vents and fresh-air intakes function as "openings in the wall" and inspectors treat them that way, but no residential manual we found names soffit vents with a distinct number. Any soffit-specific distance is **unverified**.

### 4. Fuel-side codes

**Natural gas** is governed by NFPA 54 / ANSI Z223.1 or the IFGC depending on local adoption; IRC Chapter 24 carries fuel-gas provisions for one- and two-family dwellings. Sizing normally uses the longest-length method — measure from the meter to the most remote appliance and size every segment from that length. ([Hallam-ICS](https://www.hallam-ics.com/blog/natural-gas-pipe-sizing-nfpa-54-methods-pressure-drop-design-guide))

The generator is a large intermittent load added to an existing manifold, and the common failure is a line that looks fine but won't hold pressure at load. Generac's inlet requirement is **3.5–7 in water column for natural gas** and **10–12 in WC for LP vapor**, and Generac states plainly that it cannot size gas lines, tanks, or regulators — it provides BTU and pressure data and refers customers to a licensed plumber or the gas provider, sizing at 100% load. ([Generac Support](https://support.generac.com/articles/Knowledge/How-Do-I-Determine-the-Fuel-Line-Sizing-for-My-Air-Cooled-Home-Standby-Generator))

**Propane** is governed by NFPA 58. Verified separations: aboveground 125–500 gal → **10 ft** to important buildings and to the property line (Table 6.4.1.1). 501–2,000 gal → **25 ft**, reduced to **10 ft** for a single ASME container of 1,200 gal or less located at least 25 ft from any other container over 125 gal (**6.4.1.3**). Underground/mounded → no part less than **10 ft** from a building or a line of adjoining property that can be built upon (**6.4.2.3**). Any on-site-filled ASME tank must have its fill connection and fixed liquid level gauge at least 10 ft from an ignition source, a direct-vent appliance intake, or a mechanical ventilation intake. ([Minnesota SFM](https://dps.mn.gov/divisions/sfm/fire-code/fire-code-information-topic/lp-gas); [Tehama County reproduction of §6.4](https://www.tehama.gov/wp-content/uploads/2024/09/LPGasContainer-Requirements.pdf); [Guilford CT](https://cms5.revize.com/revize/guilfordct/Document_Center/Department/Building%20Department/building-Location-distances-of-propane-and-other-tanks-from-home-2.pdf))

Gas piping is a licensed plumbing/gas-fitting trade nearly everywhere and is generally a *different* license from electrical. Virginia certifies gas fitting as its own tradesman category. ([DPOR](https://www.dpor.virginia.gov/Boards/Tradesmen)) Massachusetts licenses gas fitters separately from LP installers through the Board of State Examiners of Plumbers and Gas Fitters. ([Mass.gov](https://www.mass.gov/apply-for-a-plumber-gas-fitter-or-liquified-petroleum-installer-license))

### 5. Permits and inspection sequence

Typical permit sets: **Trumbull, CT** requires a building permit for the unit, an electrical permit for wiring, and a plumbing permit for the gas line, each with its own fee, plus a survey showing distances to lot lines, a load calculation worksheet and line diagram, and department signoffs at both application and final. ([Trumbull](https://trumbull-ct.gov/DocumentCenter/View/7773/Generator-Information-PDF)) **Georgetown, TX** requires a generator permit plus electrical and plumbing permits filed under it. **Prince George County, VA** requires a separate gas permit showing tank location and dimensions to structures, generator, pad, driveways, and lot lines, plus the generator BTU rating. ([Prince George](https://cms1files.revize.com/princegeorgeva/document_center/Building%20Inspection%20Forms/Requirements%20for%20Stand-By%20Generator%20Permits.pdf))

Inspection sequence is consistently four steps: (1) **underground/trench** before backfill — Trumbull wants caution tape and tracer wire on site; (2) **rough** electrical and plumbing; (3) **gas pressure test** — Trumbull specifies 15 lb on a 30 lb gauge; (4) **final**, with the electrician present and access to the interior panel. ([Waco](https://content.govdelivery.com/attachments/TXWACO/2025/01/22/file_attachments/3139923/COW_RESIDENTIAL_GENERATOR_SUBMITTAL_REQUIREMENTS_CAV.pdf); [Irving TX](https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/7_Generator_Guidelines_RES_1751898855.pdf))

**Fees** are municipal. San Diego: "Generator Only" electrical permit **$176.57**. National City, CA: **$209.00** (Master Fee Schedule adopted 6/3/2025). Miami-Dade: **$11.28 per 10 kW** against a **$227.90** minimum, with a **double fee** for unpermitted work. A defensible published range for combined municipal fees is roughly **$150–$600**, always framed as varying by jurisdiction. **Timelines are unverified** — no authoritative aggregate data found.

**Who pulls them: the contractor should.** Irving states that only a licensed plumber and/or licensed electrician registered with the city may do this work, other than a homeowner on their own homestead. A contractor asking the homeowner to pull an owner permit is shifting code-compliance liability onto the homeowner — a legitimate red flag to teach readers.

### 6. Utility involvement

With an open-transition (break-before-make) ATS the generator never parallels the grid, so there is normally no interconnection agreement, relay review, or witness test — but there is usually a **notification** obligation. **OPPD** requires "notification and consultation for all standby generator installations" in a chapter scoped explicitly to non-parallel residential installs. ([OPPD](https://oppd.com/media/76706/meter-manual-chapter-11-customer-standby-generation-installs.pdf)) **NV Energy** requires notifying the local office of the unit's installation location. ([RE-6](https://www.nvenergy.com/publish/content/dam/nvenergy/brochures_arch/account-services/building-and-new-construction/electric-service-standards-south/re/ESRNPC-RE006.pdf)) **JEA** draws the line cleanly: 48 hours' notice and a witnessed initial interconnection for closed-transition units, and "open transition standby generators do not require such notice." ([JEA](https://www.jea.com/uploadedFiles/jeacom/Engineering_and_Construction/Electric_Development/Standby%20Generators%20v5%20(OPP).pdf)) **Georgia Power** publishes a non-exporting generator bulletin covering both modes, with intertie protection required only for closed transition. ([DB 18-23](https://www.georgiapower.com/content/dam/georgia-power/pdfs/business-pdfs/DB-18-23-Rev-1-6-21_external-only.pdf))

**Service-rated ATS.** It sits between the meter and the panel and contains the service disconnect, which is why it can back the whole house from one point and satisfies NEC emergency disconnect requirements without a separate device. Generac markets its integrated-meter models on that basis — and carries the warning: "Before selecting this switch, you must verify that this transfer switch is approved by your local Utility Service Provider." Utilities maintain approved-equipment lists for anything in the metering path; JEA additionally requires a lockable isolation device between its transformer and customer generation even where a service-entrance-rated ATS is used. ([Generac RXUW200A3](https://www.generac.com/residential-products/standby-generator-transfer-switches/automatic/rxuw200a3/))

**Gas meter upgrades.** Generator BTU demand often exceeds the existing meter and service. Waco's submittal requires the BTU rating used to size the gas *service* line to the meter — the point where the gas utility gets involved. How often an upgrade is triggered, and how long it takes, is unverified.

### 7. Siting constraints

**Property-line setbacks** come from local zoning, not from NFPA 37 or the NEC. Trumbull requires a survey showing distances to property lines; Georgetown's checklist includes setback verification per manufacturer specs.

**Noise ordinances** are municipal, dBA-based, and measured at the receiving property line. A real citable example: **Loveland, Ohio §1175.03** caps sound from a residential source at **55 dBA daytime and 50 dBA nighttime** at a residential receiving property, daytime defined as 7:00 a.m.–10:00 p.m. ([Loveland](https://codelibrary.amlegal.com/codes/loveland/latest/loveland_oh/0-0-0-17527)) Its exemptions include noise from work necessary to restore property to a safe condition. ([§509.08](https://codelibrary.amlegal.com/codes/loveland/latest/loveland_oh/0-0-0-8420)) A weekly exercise cycle is *not* emergency operation — which is where complaints actually originate.

**HOA restrictions.** Irving's guidance tells applicants to contact their HOA for deed-restriction requirements — a municipality confirming that HOA rules are a separate layer.

**Flood zones.** Under the NFIP, communities must require new and substantially improved residential structures in A zones to have the lowest floor at or above the base flood elevation (44 CFR 60.3(c)(2)). FEMA's utility guidance explains that under the IRC, mechanical and electrical equipment must be at or above the required elevation for the dwelling — **BFE plus 1 foot, or the design flood elevation, whichever is higher** — or else designed to resist flood loads and prevent water entry. The IMC and ASCE 24 Chapter 7 carry the parallel requirement. ([FEMA NFIP Unit 5](https://www.fema.gov/pdf/floodplain/nfip_sg_unit_5.pdf); [FEMA P-348](https://agents.floodsmart.gov/sites/default/files/media/document/2025-07/fema_nfip-p-348-protecting-building-utility-systems-from-flood-damage-2017.pdf)) This is why coastal installs sit on elevated platforms.

**Coastal wind ratings** exist, but the verified numbers are **industrial**, not residential. Kohler's industrial aluminum sound enclosures are certified to **186 mph** and steel enclosures analyzed to **150 mph**, tested to Florida Building Code TAS-201-94 (large missile, Level E), TAS-202-94, and TAS-203-94. ([Kohler G6159](https://resources.kohler.com/power/kohler/industrial/pdf/g6159.pdf)) Generac's industrial literature lists "up to 200 MPH wind kit options." Do not transfer these to residential units.

**California seismic anchoring.** The HCAI (formerly OSHPD) Special Seismic Certification Preapproval program covers **healthcare facilities**, not houses. It certifies that nonstructural components — generators, ATSs, fuel tanks — remain intact and operable after a design earthquake per ASCE 7 §13.2.2, verified by AC156 shake-table testing; Generac, Kohler, Cummins, and Caterpillar hold active generator OSP listings. ([HCAI OSP](https://hcai.ca.gov/facilities/building-safety/preapproval-programs/osp/); [PIN 55](https://hcai.ca.gov/wp-content/uploads/2025/06/PIN_55_Special-Seismic-Certification-Preapproval-OSP_080322_A.pdf)) For a single-family house, anchoring follows the manufacturer's instructions and the locally adopted residential code. NFPA 37 annex A.4.2 says only that siting should follow local codes and that seismic activity is a factor.

### 8. Consequences of an unpermitted install

The strongest sourcing is on **resale disclosure**, not insurance. California's statutory Transfer Disclosure Statement (Civil Code §1102.6) asks the seller directly whether they know of "Room additions, structural modifications, or other alterations or repairs made without necessary permits" and, separately, work "not in compliance with building codes." ([CA DRE RE-6](https://www.dre.ca.gov/files/pdf/re6.pdf)) Litigation over exactly this is real: in *Saunders v. Taylor* (1996) 42 Cal.App.4th 1538, buyers discovered during an appraisal that no permits existed for an enclosed-patio family room and were quoted $25,000 to bring it into compliance. ([Justia](https://law.justia.com/cases/california/court-of-appeal/4th/42/1538.html)) Civil Code §1102.6h, effective for offers accepted on or after July 1, 2024, adds that a seller accepting an offer within 18 months of taking title must disclose contractor-performed alterations, the contractor's contact information, and copies of any permits. ([FindLaw](https://codes.findlaw.com/ca/civil-code/civ-sect-1102-6h/))

**Failed inspection and penalties** are well sourced — Miami-Dade charges "a double fee for doing work without a permit." **Utility refusal** is real for closed-transition and for equipment in the metering path; JEA can require disconnection for unreported changes.

**Insurance claim denial is the weak link.** Everything we found asserting carriers deny claims over unpermitted work traces to marketing or legal-lead-generation sites — not a carrier policy form, a state insurance department bulletin, or a reported case. Do not publish it as fact.

### 9. Licensing: who may legally install

| State | Licensing body | Notable detail |
| --- | --- | --- |
| **Texas** | [TDLR](https://www.tdlr.texas.gov/electricians/exemptions.htm) | Exempts "a dwelling by a person who owns and resides in the dwelling" (Occ. Code §1305.003(a)(6)) — but municipal regulations may override, per §1305.201. |
| **Florida** | [Ch. 489 Part II](https://law.justia.com/codes/florida/title-xxxii/chapter-489/part-ii/section-489-503/) | Owner exemption requires signing a statutory acknowledgment; property may not be built for sale or lease, and the owner may not hire an unlicensed person as their electrical contractor. |
| **California** | [CSLB C-10](https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10) | C-10 Electrical Contractor defined at [16 CCR §832.10](https://www.law.cornell.edu/regulations/california/16-CCR-832.10). |
| **North Carolina** | [NCBEEC](https://ncbeec.org/) | Electrical contracting licensed under NCGS Ch. 87, Art. 4. |
| **Virginia** | [DPOR Tradesmen](https://www.dpor.virginia.gov/Boards/Tradesmen) | Certification is mandatory, not optional, and **gas fitting is its own category** separate from electrical and plumbing. |
| **Massachusetts** | [Board of Plumbers and Gas Fitters](https://www.mass.gov/apply-for-a-plumber-gas-fitter-or-liquified-petroleum-installer-license) | Separate apprentice/journeyman/master gas fitter licenses, a distinct LP installer license, and a gas fitting *business* license. |
| **Montana** | [DLI / IFGC framework](https://montanaplumbingauthority.com/montana-gas-line-plumbing-regulations) | IFGC adopted statewide; only licensed plumbers or mechanical contractors may alter gas piping. *(Secondary source — verify before publishing.)* |
| **AZ, IL, MS, MO** | Local only | No statewide NEC adoption; licensing and enforcement entirely local. ([NFPA](https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps)) |

The through-line: **state licensure and local permitting are two separate requirements, and satisfying one does not satisfy the other.**

---

## Claims we can make

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

In this file that means naming the **code article and what it requires** before naming the edition,
and always preserving the hedge about local adoption. Jurisdictions move between NEC cycles on their
own schedule, so "the 2023 NEC requires X" is safe while "the code requires X" is not.

1. "Home standby generators are covered by NEC Article 702, Optional Standby Systems, which — unlike Article 700 emergency systems or Article 701 legally required standby systems — sets no maximum transfer time and imposes no code-mandated testing or maintenance schedule." — https://www.ecmweb.com/national-electrical-code/code-basics/article/55285564/nec-requirements-for-emergency-and-standby-systems
2. "Under NEC Sec. 702.5, any connection between a generator and your home's wiring must go through listed interconnection or transfer equipment designed to prevent the utility and the generator from ever being connected at the same time." — same URL
3. "NFPA 37 generally requires an outdoor engine and its enclosure to sit at least 5 feet from openings in a wall and 5 feet from structures with combustible walls, but the standard allows shorter distances where fire testing, engineering calculations, or a 1-hour fire-rated wall demonstrate it is safe. Check your local AHJ, since some jurisdictions enforce the 5-foot baseline regardless." — https://normfile.com/nfpa/NFPA%2037-2024%20PDF.pdf
4. "Most residential air-cooled units sit far closer than 5 feet to the house because the manufacturer paid for third-party fire testing under the NFPA 37 exception. Per the manufacturer's manual, Generac air-cooled home standby generators are listed for 18 inches of rear clearance to a stationary wall, with 36 inches at the front and ends and 60 inches overhead." — https://images.thdstatic.com/catalog/pdfImages/b9/b92db3fe-963a-4d1b-93fd-06733ecd3d39.pdf
5. "The reduced wall clearance does not reduce the clearance to openings. Per the manufacturer's manual, Generac still requires that no operable window, door, or wall opening be within 5 feet of any point of the generator." — same URL
6. "Manufacturers set their own intake distances, and they are not all the same. Per Kohler's installation manual for its 8/10/12RESV units, furnace and similar intakes must be at least 10 feet from the exhaust end, and no plants or combustibles may be within 4 feet of it." — https://resources.kohler.com/power/kohler/residential/pdf/8RESVL_INSTALLATION.pdf
7. "Kohler's installation guidance directs installers to place carbon monoxide detectors on each level of any building adjacent to the generator — a good practice worth following regardless of manufacturer." — https://resources.kohler.com/power/kohler/residential/pdf/tp7101.pdf
8. "Whether a standby generator counts as a 'separately derived system' — which determines where the neutral is bonded — is decided by the transfer switch. In most jurisdictions, if the transfer equipment switches the neutral, the generator is separately derived and must be grounded per NEC 250.30(A); if the neutral stays solidly connected to the service neutral, it is not." — https://www.ecmag.com/magazine/articles/article-detail/codes-standards-generator-grounding-requirements-equipment-transfer-switches-and-system
9. "Generator manufacturers generally will not size your gas line. Generac's own support documentation states it cannot size gas lines, tanks, or regulators, and directs customers to a licensed plumber or their gas provider, with fuel supply sized for 100 percent load." — https://support.generac.com/articles/Knowledge/How-Do-I-Determine-the-Fuel-Line-Sizing-for-My-Air-Cooled-Home-Standby-Generator
10. "For a propane system, NFPA 58 generally requires an aboveground 125–500 gallon tank to be at least 10 feet from important buildings and from the property line, and a 501–2,000 gallon tank to be 25 feet — reduced to 10 feet for a single tank of 1,200 gallons or less sited at least 25 feet from any other tank over 125 gallons. Your local fire code official has the final word." — https://dps.mn.gov/divisions/sfm/fire-code/fire-code-information-topic/lp-gas
11. "Most jurisdictions require more than one permit for a standby generator — typically an electrical permit plus a gas or plumbing permit, and often a building or generator permit as well. Trumbull, Connecticut requires all three, each with its own fee." — https://trumbull-ct.gov/DocumentCenter/View/7773/Generator-Information-PDF
12. "Expect roughly four inspections, generally in this order: underground trench before backfill, rough electrical and plumbing, a gas pressure test, and a final with the electrician present. The exact sequence varies — check your local building department." — https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/7_Generator_Guidelines_RES_1751898855.pdf
13. "Permit fees are municipal and vary widely — San Diego charges $176.57 for a generator-only electrical permit, while Miami-Dade charges $11.28 per 10 kW against a $227.90 minimum. Look up your city's published fee schedule rather than relying on a national average." — https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103 · https://wwwx.miamidade.gov/resources/economy/building/documents/electrical-fee.pdf
14. "Skipping the permit can cost more than pulling it. Miami-Dade, for instance, charges a double fee for electrical work done without a permit." — https://wwwx.miamidade.gov/resources/economy/building/documents/electrical-fee.pdf
15. "In many states you are legally required to disclose unpermitted work when you sell. California's statutory Transfer Disclosure Statement asks sellers directly whether there are 'alterations or repairs made without necessary permits.'" — https://www.dre.ca.gov/files/pdf/re6.pdf
16. "Even though a standard home standby generator never runs in parallel with the grid, many utilities still require notification. Omaha Public Power District requires notification and consultation for all standby generator installations, and NV Energy requires the customer to notify its local office of the installation location." — https://oppd.com/media/76706/meter-manual-chapter-11-customer-standby-generation-installs.pdf · https://www.nvenergy.com/publish/content/dam/nvenergy/brochures_arch/account-services/building-and-new-construction/electric-service-standards-south/re/ESRNPC-RE006.pdf
17. "If your installer proposes a service-entrance-rated transfer switch — the type that sits between your meter and your panel and becomes your main disconnect — the utility usually has to approve that specific device. Generac itself instructs installers to verify utility approval before selecting one." — https://www.generac.com/residential-products/standby-generator-transfer-switches/automatic/rxuw200a3/
18. "The National Electrical Code is not uniform nationally. As of August 3, 2026, six states enforced the 2026 NEC, 20 the 2023, 15 the 2020, three the 2017, and two the 2008 — and four states have no statewide adoption at all. Confirm which cycle your jurisdiction is on." — https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps
19. "Licensing rules vary by state and are separate from permitting. Texas exempts a homeowner working on a dwelling they own and live in from state electrician licensing, but that exemption disappears where a city ordinance regulates the work." — https://www.tdlr.texas.gov/electricians/exemptions.htm

---

## Claims to avoid

- **"Code requires the generator to be 5 feet from the house."** False unqualified. NFPA 37's 5 ft figure has three exceptions, most listed residential units are permitted much closer, and NFPA 37 must be locally adopted to have force.
- **"Your generator must be 18 inches from the wall."** Never state a clearance without attributing it to a manufacturer's manual and a specific product family. 18 in is Generac air-cooled per the SwRI listing; Kohler uses different numbers and defers to model-specific dimension drawings.
- **"NEC Article 702 requires an automatic transfer switch."** It requires listed transfer or interconnection equipment; manual transfer is permitted for optional standby systems.
- **"NEC 445.18(D) requires an outdoor emergency shutdown."** Correct only on the 2020 cycle. On 2023 it is 445.19(C). Cite the cycle or cite neither.
- **"The generator must be bonded at the generator."** Depends entirely on the transfer switch. State the conditional, never the flat rule.
- **"Homeowners insurance will deny your claim if the generator wasn't permitted."** Unverified against any policy form, DOI bulletin, or reported case. Every source asserting it is content marketing. The safest available phrasing is that carriers may investigate permit history following a loss — and even that needs better sourcing.
- **"Generators are rated for 150–200 mph winds."** Those ratings are for industrial enclosures. Do not apply them to a residential air-cooled unit without a model-specific source.
- **"California requires seismic certification for residential generators."** HCAI/OSHPD OSP applies to healthcare facilities. Residential anchoring follows the manufacturer's instructions and local code.
- **"Permits take X weeks to approve."** No authoritative timeline data found. Do not publish a number.
- **"Any licensed electrician can do the whole job."** Gas piping is generally a separate license in a separate trade.
- **"Soffit vents must be N feet away."** No residential manual we found gives a soffit-specific number. Use "openings" language.

---

## Open questions / needs verification

1. **Insurance.** Is there any carrier policy form, state DOI bulletin, or reported case tying a denied claim to unpermitted electrical work specifically? Worth an hour in a DOI bulletin archive before we write about it.
2. **Permit approval timelines.** No credible aggregate source. Could be sampled from 20–30 city permitting portals for a defensible range.
3. **Gas meter upgrades.** How often does a 22–26 kW generator trigger a meter or service upgrade, and what does the utility charge?
4. **NFPA 37 local adoption.** It is not adopted everywhere, and where it is, it may come via the IFC or IMC rather than directly. Worth mapping for our top 10 states.
5. **Soffit vents and fresh-air intakes.** Need a manual or code section naming them specifically, or keep using generic "openings" language.
6. **Montana gas licensing.** Currently a secondary source; verify against Montana DLI directly.
7. **National City fee discrepancy.** The adopted 2025 schedule lists $209.00; an earlier table appeared to show $720 for up to 100 kW. Confirm before citing.
8. **Kohler residential wall clearance.** Kohler defers to model-specific dimension drawings rather than a single published number. To get a figure comparable to Generac's 18 in, pull the drawing for a specific model.
9. **NEC 2026 changes to Articles 702 and 445.** Six states are already on the 2026 cycle and we have not reviewed what changed.

---

## Sources

All accessed **August 7, 2026**.

**NEC / electrical**
- https://www.ecmweb.com/national-electrical-code/code-basics/article/55285564/nec-requirements-for-emergency-and-standby-systems — Art. 700/701/702 comparison; 702.4, 702.5, 702.7; 700.12 and 701.12 transfer times.
- https://www.ecmweb.com/national-electrical-code/code-basics/article/21273030/nec-requirements-for-generators — Art. 445: 445.11, 445.13(A), 445.18(A).
- https://www.mikeholt.com/files/PDF/23_FREE_PDF_Generators_and_Standby_Power_Systems.pdf — Art. 445 and 702 text; neutral-bonding marking requirement.
- https://www.mikeholt.com/newsletters.php?action=display&letterID=1914 — 700.3/701.3 testing vs. absence of maintenance requirements in 702.
- https://www.mikeholt.com/newsletters.php?action=display&letterID=1237 — 250.30 and Informational Note 1 on separately derived systems.
- https://www.ecmag.com/magazine/articles/article-detail/codes-standards-generator-grounding-requirements-equipment-transfer-switches-and-system — transfer switch determines SDS status; 250.35(B), 250.102(C).
- https://www.ecmag.com/magazine/articles/article-detail/codes-standards-standby — 250.35(A)/(B) for permanently installed optional standby.
- https://onan.xmsi.net/Cummins%20PT-6006%20Grounding%20AC%20Generators%20&%20Switched%20Neutral%20pt2.pdf — Cummins note on 4-pole switched neutral and SDS grounding.
- https://up.codes/s/emergency-shutdown-in-one-and-two-family-dwelling-units — confirms 2020 NEC 445.18(D) → 2023 NEC 445.19(C).
- https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/NEC-Content.php?sectionID=1514 — the 445.18/445.19 split and the 2023 one- and two-family exclusion in 445.19(B).
- https://www.nfpa.org/education-and-research/electrical/nec-enforcement-maps — NEC adoption by state as of Aug 3, 2026.
- https://www.mikeholt.com/necadoptionlist.php — per-state NEC edition and effective dates.

**NFPA 37 and clearances**
- https://normfile.com/nfpa/NFPA%2037-2024%20PDF.pdf — 2024 edition §4.1.3, §4.1.4, annex A.4.2.
- https://normfile.com/nfpa/NFPA%2037-2018%20PDF.pdf — 2018 edition, for comparison of exception structure.
- https://www.csemag.com/defining-nfpa-37/ — AHJ discretion over manufacturer fire-test "proof."

**Manufacturer manuals and product data**
- https://images.thdstatic.com/catalog/pdfImages/b9/b92db3fe-963a-4d1b-93fd-06733ecd3d39.pdf — Generac air-cooled: 18/36/60 in and 5 ft to openings; SwRI listing narrative.
- https://truesourcegenerators.ca/wp-content/uploads/2023/09/Generac-Guardian-Series-Installation-Manual.pdf — Generac Guardian roof/platform placement per NFPA 37 §4.1.3.
- https://productmanuals.generac.com/api/manualfiles/G0072580/A0005151099/0 — Generac instruction sheet clearance table.
- https://resources.kohler.com/power/kohler/residential/pdf/8RESVL_INSTALLATION.pdf — Kohler 8/10/12RESV: 4 ft combustibles, 10 ft furnace intakes.
- https://www.electricgeneratorsdirect.com/manuals/kohler-903c2ea6b8bc3946398b02164dde0c60.pdf — Kohler TP-6905: 3 ft all sides, 5 ft to openings from exhaust outlet.
- https://resources.kohler.com/power/kohler/residential/pdf/tp7101.pdf — Kohler TP-7101: CO detectors, building permit and utility locates, exhaust orientation.
- https://support.generac.com/articles/Knowledge/How-Do-I-Determine-the-Fuel-Line-Sizing-for-My-Air-Cooled-Home-Standby-Generator — NG 3.5–7 in WC, LP 10–12 in WC; Generac declines to size gas lines.
- https://www.generac.com/residential-products/standby-generator-transfer-switches/automatic/rxuw200a3/ — service-entrance-rated ATS; NEC emergency disconnect; utility approval warning.
- https://resources.kohler.com/power/kohler/industrial/pdf/g6159.pdf — Kohler industrial enclosure wind ratings (150/186 mph) and FBC TAS testing.
- https://legacy.genconnect.generac.com/Media/vwDoc.axd?d=3c2f1481-0d8e-457c-b191-03464ac1ed5c — Generac industrial enclosure wind kit options.

**Fuel gas and propane**
- https://www.hallam-ics.com/blog/natural-gas-pipe-sizing-nfpa-54-methods-pressure-drop-design-guide — NFPA 54 longest-length sizing method (secondary, technical).
- https://dps.mn.gov/divisions/sfm/fire-code/fire-code-information-topic/lp-gas — Minnesota SFM NFPA 58 separation table with section citations.
- https://www.tehama.gov/wp-content/uploads/2024/09/LPGasContainer-Requirements.pdf — verbatim NFPA 58 §6.4.1.1–6.4.2.3.
- https://cms5.revize.com/revize/guilfordct/Document_Center/Department/Building%20Department/building-Location-distances-of-propane-and-other-tanks-from-home-2.pdf — fill connection / ignition source / ventilation intake distances.
- https://montanaplumbingauthority.com/montana-gas-line-plumbing-regulations — Montana IFGC adoption and gas licensing (secondary; needs verification).

**Permits, fees, inspections**
- https://content.govdelivery.com/attachments/TXWACO/2025/01/22/file_attachments/3139923/COW_RESIDENTIAL_GENERATOR_SUBMITTAL_REQUIREMENTS_CAV.pdf — Waco TX submittal and inspection requirements; gas service sizing.
- https://www.georgetowntexas.gov/development_services/permits/other_permits/generator.php — Georgetown TX three-permit structure; 5 ft NFPA 37 note; setback verification.
- https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/7_Generator_Guidelines_RES_1751898855.pdf — Irving TX inspections; licensed-contractor requirement; homestead exemption; HOA note.
- https://trumbull-ct.gov/DocumentCenter/View/7773/Generator-Information-PDF — Trumbull CT three permits; site plan; 15 psi gas test; final inspection conditions.
- https://cms1files.revize.com/princegeorgeva/document_center/Building%20Inspection%20Forms/Requirements%20for%20Stand-By%20Generator%20Permits.pdf — Prince George VA separate gas permit and submittal contents.
- https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103 — San Diego MEP fee schedule, "Generator Only $176.57."
- https://www.nationalcityca.gov/home/showpublisheddocument/34868/638875937363270000 — National City CA Master Fee Schedule (adopted 6/3/2025), Generator Installation $209.00.
- https://wwwx.miamidade.gov/resources/economy/building/documents/electrical-fee.pdf — Miami-Dade $11.28/10 kW, $227.90 minimum, double fee for unpermitted work.

**Utility**
- https://oppd.com/media/76706/meter-manual-chapter-11-customer-standby-generation-installs.pdf — OPPD non-parallel standby; notification and consultation required.
- https://www.nvenergy.com/publish/content/dam/nvenergy/brochures_arch/account-services/building-and-new-construction/electric-service-standards-south/re/ESRNPC-RE006.pdf — NV Energy RE-6; notification of installation location; isolation requirement.
- https://www.jea.com/uploadedFiles/jeacom/Engineering_and_Construction/Electric_Development/Standby%20Generators%20v5%20(OPP).pdf — JEA open vs. closed transition; 48-hour witness notice; isolation device; disconnection for unreported changes.
- https://www.georgiapower.com/content/dam/georgia-power/pdfs/business-pdfs/DB-18-23-Rev-1-6-21_external-only.pdf — Georgia Power non-exporting generator interconnection bulletin.
- https://www.les.com/sites/default/files/requirements-emergency-generator.pdf — Lincoln Electric System emergency/standby generation requirements.

**Siting: noise, flood, wind, seismic**
- https://codelibrary.amlegal.com/codes/loveland/latest/loveland_oh/0-0-0-17527 — Loveland OH §1175.03 noise table, 55/50 dBA, daytime definition.
- https://codelibrary.amlegal.com/codes/loveland/latest/loveland_oh/0-0-0-8420 — Loveland OH §509.08 noise exemptions.
- https://www.fema.gov/pdf/floodplain/nfip_sg_unit_5.pdf — 44 CFR 60.3(c)(2) elevation requirement.
- https://agents.floodsmart.gov/sites/default/files/media/document/2025-07/fema_nfip-p-348-protecting-building-utility-systems-from-flood-damage-2017.pdf — FEMA P-348: utility equipment at BFE+1 ft or DFE; ASCE 24 Ch. 7 / §7.4.
- https://www.fema.gov/sites/default/files/2020-07/fema_quick-ref-guide-nfip-2018-icodes-reqs-flood-areas.pdf — NFIP vs. 2018 I-Codes/ASCE 24 comparison; DFE definition.
- https://hcai.ca.gov/facilities/building-safety/preapproval-programs/osp/ — HCAI OSP scope and active generator listings.
- https://hcai.ca.gov/wp-content/uploads/2025/06/PIN_55_Special-Seismic-Certification-Preapproval-OSP_080322_A.pdf — ASCE 7 §13.2.2 special seismic certification; CBC references.

**Unpermitted work and disclosure**
- https://www.dre.ca.gov/files/pdf/re6.pdf — California DRE reproduction of the statutory TDS (Civil Code §1102.6), items 4 and 5.
- https://law.justia.com/cases/california/court-of-appeal/4th/42/1538.html — *Saunders v. Taylor* (1996) 42 Cal.App.4th 1538.
- https://codes.findlaw.com/ca/civil-code/civ-sect-1102-6h/ — Civil Code §1102.6h, 18-month contractor/permit disclosure, effective July 1, 2024.

**Licensing**
- https://www.tdlr.texas.gov/electricians/exemptions.htm — Texas homeowner exemption §1305.003(a)(6); municipal override §1305.201.
- https://law.justia.com/codes/florida/title-xxxii/chapter-489/part-ii/section-489-503/ — Florida §489.503 owner exemption and required acknowledgment text.
- https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10 — CSLB C-10 classification.
- https://www.law.cornell.edu/regulations/california/16-CCR-832.10 — 16 CCR §832.10 regulatory text for C-10.
- https://ncbeec.org/ — NC State Board of Examiners of Electrical Contractors (NCGS Ch. 87, Art. 4).
- https://www.dpor.virginia.gov/Boards/Tradesmen — Virginia DPOR tradesman certification; gas fitting as separate category.
- https://www.mass.gov/apply-for-a-plumber-gas-fitter-or-liquified-petroleum-installer-license — Massachusetts plumber / gas fitter / LP installer licensing.
