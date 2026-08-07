export type GuideMeta = {
  slug: string
  title: string
  description: string
  eyebrow: string
  phase: 'P0' | 'P1' | 'P2'
  primaryKeyword: string
}

export const GUIDES: GuideMeta[] = [
  {
    slug: 'whole-house-generator-cost',
    title: 'Whole-house generator cost',
    description:
      'What a finished standby project actually costs: equipment vs labor, air-cooled vs liquid-cooled, and why two quotes on the same unit can differ by thousands.',
    eyebrow: 'Cost',
    phase: 'P0',
    primaryKeyword: 'whole house generator cost',
  },
  {
    slug: 'what-size-generator',
    title: 'What size generator do you need?',
    description:
      'Skip the square-footage rule of thumb. Load calculations, locked-rotor amps, and when load management lets a smaller unit cover the house.',
    eyebrow: 'Sizing',
    phase: 'P0',
    primaryKeyword: 'what size generator do i need',
  },
  {
    slug: 'questions-to-ask-generator-installer',
    title: 'Questions to ask a generator installer',
    description:
      'A first-call checklist: licenses, fuel work, load calc, permits, warranty path, and the red flags that show up in real complaints.',
    eyebrow: 'Hiring',
    phase: 'P0',
    primaryKeyword: 'questions to ask generator installer',
  },
  {
    slug: 'generator-installation-process',
    title: 'Generator installation process and timeline',
    description:
      'What happens from the consult to the first automatic transfer, and why permits and the gas utility usually set the clock, not the factory.',
    eyebrow: 'Process',
    phase: 'P1',
    primaryKeyword: 'home generator installation',
  },
  {
    slug: 'natural-gas-vs-propane-generator',
    title: 'Natural gas vs propane generators',
    description:
      'Runtime, derate, pipe and tank sizing, and how your state’s heating-fuel mix should shape the conversation.',
    eyebrow: 'Fuel',
    phase: 'P1',
    primaryKeyword: 'natural gas vs propane generator',
  },
  {
    slug: 'standby-vs-portable-vs-battery',
    title: 'Standby vs portable vs battery backup',
    description:
      'When each option fits, and the carbon monoxide case that makes portable plus dryer-outlet backfeeding a non-starter.',
    eyebrow: 'Alternatives',
    phase: 'P1',
    primaryKeyword: 'portable vs standby generator',
  },
  {
    slug: 'generator-maintenance-warranty',
    title: 'Generator maintenance and warranty',
    description:
      'Service intervals by brand, exercise cycles, what warranties actually cover, and why portable recalls are not home standby recalls.',
    eyebrow: 'Ownership',
    phase: 'P2',
    primaryKeyword: 'generator maintenance',
  },
  {
    slug: 'generator-permits-and-codes',
    title: 'Generator permits, clearances, and codes',
    description:
      'NEC 702, NFPA 37 clearances, manufacturer listings, and why your AHJ, not a blog, has the last word.',
    eyebrow: 'Codes',
    phase: 'P2',
    primaryKeyword: 'generator permit requirements',
  },
  {
    slug: 'transfer-switch-installation',
    title: 'Transfer switch and interlock kits',
    description:
      'Automatic vs manual transfer, interlock kits for portables, and why backfeeding through a dryer outlet violates the code.',
    eyebrow: 'Electrical',
    phase: 'P2',
    primaryKeyword: 'automatic transfer switch installation',
  },
]

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug)
}
