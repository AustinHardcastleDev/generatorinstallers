import { installers } from './installers'
import type { Installer } from './installer-model'
import {
  BRAND_TAGS,
  MIN_NATIONAL_BRAND_INSTALLERS,
  MIN_STATE_BRAND_INSTALLERS,
  getBrandBySlug,
  installerHasBrand,
  type BrandTag,
} from './brands'

type FAQItem = { q: string; a: string }

export const MIN_NATIONAL_TAG_INSTALLERS = MIN_NATIONAL_BRAND_INSTALLERS
export const MIN_STATE_TAG_INSTALLERS = MIN_STATE_BRAND_INSTALLERS

export type DirectoryTagKind = 'brand' | 'intent'

export type DirectoryTag = {
  slug: string
  id: string
  kind: DirectoryTagKind
  label: string
  shortLabel: string
  description: string
  /** Chip / nav group label */
  groupLabel: string
  eyebrow: string
  matches: (installer: Installer) => boolean
}

function hasReviewTag(installer: Installer, tagId: string): boolean {
  const tags = [
    ...(installer.generatorScopedTags || []),
    ...(installer.reviewTags || []),
  ]
  return tags.some((tag) => tag.id === tagId)
}

/** Prefer generator-scoped review tags only (not generic business reviews). */
function hasGeneratorScopedTag(installer: Installer, tagId: string): boolean {
  return (installer.generatorScopedTags || []).some((tag) => tag.id === tagId)
}

/** Cap for national tag HTML: state grid + first N cards, not the full set. */
export const NATIONAL_TAG_PREVIEW_LIMIT = 75
export const NATIONAL_TAG_MAP_LIMIT = 200

/** Intent filters backed by website / review signal (not brand). */
export const INTENT_TAGS: DirectoryTag[] = [
  {
    slug: 'whole-house',
    id: 'whole_house',
    kind: 'intent',
    label: 'Whole-house / standby',
    shortLabel: 'Whole-house',
    groupLabel: 'Job type',
    eyebrow: 'Whole-house signal',
    description:
      'Installers with whole-house or standby generator signal on their website or in tagged reviews. Confirm load calc, fuel path, and transfer-switch scope directly.',
    matches: (installer) => {
      const related = installer.relatedMentions || {
        standby: 0,
        transferSwitch: 0,
        wholeHouse: 0,
      }
      return (
        related.wholeHouse > 0 ||
        related.standby > 0 ||
        hasReviewTag(installer, 'whole_house_standby')
      )
    },
  },
  {
    slug: 'service',
    id: 'service',
    kind: 'intent',
    label: 'Service & maintenance',
    shortLabel: 'Service',
    groupLabel: 'Job type',
    eyebrow: 'Service signal',
    description:
      'Installers where generator-scoped reviews mention maintenance, service, or warranty support. Useful when you need ongoing care, not just a first install.',
    matches: (installer) =>
      hasGeneratorScopedTag(installer, 'maintenance_service') ||
      hasGeneratorScopedTag(installer, 'warranty_support'),
  },
]

function brandToDirectoryTag(brand: BrandTag): DirectoryTag {
  return {
    slug: brand.slug,
    id: brand.id,
    kind: 'brand',
    label: brand.label,
    shortLabel: brand.shortLabel,
    groupLabel: 'Brand',
    eyebrow: 'Brand signal',
    description: brand.description,
    matches: (installer) => installerHasBrand(installer, brand.id),
  }
}

export const DIRECTORY_TAGS: DirectoryTag[] = [
  ...INTENT_TAGS,
  ...BRAND_TAGS.map(brandToDirectoryTag),
]

export function getDirectoryTagBySlug(slug: string): DirectoryTag | undefined {
  return DIRECTORY_TAGS.find((tag) => tag.slug === slug)
}

export function getInstallersByTag(tag: DirectoryTag): Installer[] {
  return installers.filter((installer) => tag.matches(installer))
}

export function getInstallersByTagInState(
  tag: DirectoryTag,
  stateSlug: string,
): Installer[] {
  return installers.filter(
    (installer) =>
      installer.stateSlug === stateSlug && tag.matches(installer),
  )
}

export function directoryTagCounts(): {
  tag: DirectoryTag
  count: number
}[] {
  return DIRECTORY_TAGS.map((tag) => ({
    tag,
    count: getInstallersByTag(tag).length,
  })).filter((row) => row.count > 0)
}

export function intentTagCounts(): { tag: DirectoryTag; count: number }[] {
  return directoryTagCounts().filter((row) => row.tag.kind === 'intent')
}

export function nationalTagQualifies(tag: DirectoryTag): boolean {
  return getInstallersByTag(tag).length >= MIN_NATIONAL_TAG_INSTALLERS
}

export function stateTagQualifies(
  stateSlug: string,
  tag: DirectoryTag,
): boolean {
  return (
    getInstallersByTagInState(tag, stateSlug).length >= MIN_STATE_TAG_INSTALLERS
  )
}

export function getStateDirectoryTags(stateSlug: string): DirectoryTag[] {
  return DIRECTORY_TAGS.filter((tag) => stateTagQualifies(stateSlug, tag))
}

export function getStateCountsForTag(
  tag: DirectoryTag,
): { stateSlug: string; stateName: string; stateAbbr: string; count: number }[] {
  const counts = new Map<
    string,
    { stateSlug: string; stateName: string; stateAbbr: string; count: number }
  >()

  for (const installer of installers) {
    if (!tag.matches(installer)) continue
    const existing = counts.get(installer.stateSlug)
    if (existing) {
      existing.count += 1
      continue
    }
    counts.set(installer.stateSlug, {
      stateSlug: installer.stateSlug,
      stateName: installer.state,
      stateAbbr: installer.stateAbbr,
      count: 1,
    })
  }

  return [...counts.values()]
    .filter((entry) => entry.count >= MIN_STATE_TAG_INSTALLERS)
    .sort((a, b) => b.count - a.count)
}

export function getTopStateLinksForTag(
  tag: DirectoryTag,
  limit = 12,
): { stateSlug: string; stateName: string; stateAbbr: string; count: number }[] {
  return getStateCountsForTag(tag).slice(0, limit)
}

/** Generac hub: dealer + installer + service language. Other brands stay simple. */
export function getTagSeoTitle(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): string {
  if (tag.slug === 'generac') {
    if (stateName) {
      if (count <= 0) return `Generac Dealers & Installers in ${stateName}`
      if (count === 1) return `1 Generac Dealer & Installer in ${stateName}`
      return `${count} Generac Dealers & Installers in ${stateName}`
    }
    return 'Generac Dealers & Installers'
  }

  if (tag.slug === 'whole-house') {
    if (stateName) {
      return count > 0
        ? `${count} Whole-House Installers in ${stateName}`
        : `Whole-House Installers in ${stateName}`
    }
    return 'Whole-House Generator Installers'
  }

  if (tag.slug === 'service') {
    if (stateName) {
      return count > 0
        ? `${count} Generator Service Pros in ${stateName}`
        : `Generator Service in ${stateName}`
    }
    return 'Generator Service & Maintenance'
  }

  if (stateName) {
    return count > 0
      ? `${count} ${tag.shortLabel} Installers in ${stateName}`
      : `${tag.shortLabel} Installers in ${stateName}`
  }
  return `${tag.label} Generator Installation`
}

export function getTagMetaDescription(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): string {
  const where = stateName ? ` in ${stateName}` : ' across the national directory'
  if (tag.slug === 'generac') {
    return `${count.toLocaleString()} researched Generac dealers, installers, and service shops${where}. Website brand signal only — confirm authorized dealer status and warranty path directly.`
  }
  if (tag.slug === 'whole-house') {
    return `${count.toLocaleString()} researched installers${where} with whole-house or standby generator signal. Sorted by website signal and generator-specific reviews.`
  }
  if (tag.slug === 'service') {
    return `${count.toLocaleString()} researched installers${where} with generator service or maintenance language in reviews. Starting filter, not an endorsement.`
  }
  return `${count.toLocaleString()} researched installers with ${tag.label} website signal${where}. ${tag.description}`
}

export function getTagH1(tag: DirectoryTag, stateName?: string): string {
  if (tag.slug === 'generac') {
    return stateName
      ? `Generac dealers and installers in ${stateName}`
      : 'Generac dealers and installers'
  }
  if (tag.slug === 'whole-house') {
    return stateName
      ? `Whole-house generator installation in ${stateName}`
      : 'Whole-house generator installers'
  }
  if (tag.slug === 'service') {
    return stateName
      ? `Generator service and maintenance in ${stateName}`
      : 'Generator service and maintenance'
  }
  return stateName
    ? `${tag.label} generator installation in ${stateName}`
    : `${tag.label} generator installation`
}

export function getTagIntro(
  tag: DirectoryTag,
  count: number,
  totalNational: number,
  stateName?: string,
): string {
  const countLabel = count.toLocaleString()
  if (tag.slug === 'generac') {
    if (stateName) {
      return `${countLabel} researched shops in ${stateName} whose websites show Generac signal — useful whether you are looking for a Generac dealer, installer, or service tech. Website mention is not the same as authorized dealer status; confirm training, warranty registration, and service coverage with Generac and the shop.`
    }
    return `${countLabel} of ${totalNational.toLocaleString()} researched installers whose websites show Generac signal. Buyers usually search for Generac dealers, installers, or service near them — this list is a website-signal shortlist for all three. It is not an authorized-dealer directory. Confirm dealer status, warranty path, and recent installs directly.`
  }
  if (tag.slug === 'whole-house') {
    const scope = stateName
      ? `in ${stateName}`
      : `of ${totalNational.toLocaleString()} researched nationally`
    return `${countLabel} installers ${scope} with whole-house or standby generator signal on their website or in tagged reviews. ${tag.description}`
  }
  if (tag.slug === 'service') {
    const scope = stateName
      ? `in ${stateName}`
      : `of ${totalNational.toLocaleString()} researched nationally`
    return `${countLabel} installers ${scope} with generator-scoped review tags for maintenance, service, or warranty support. ${tag.description}`
  }
  if (stateName) {
    return `${countLabel} researched installers in ${stateName} whose websites show ${tag.label} signal. ${tag.description}`
  }
  return `${countLabel} of ${totalNational.toLocaleString()} researched installers whose websites show ${tag.label} signal. ${tag.description}`
}

export function getTagFaqs(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): FAQItem[] {
  if (tag.slug === 'generac') {
    return [
      {
        q: stateName
          ? `Does a Generac mention mean they are an authorized dealer in ${stateName}?`
          : 'Does a Generac mention mean they are an authorized dealer?',
        a: 'Not necessarily. We record Generac language that appears on installer websites. Authorized dealer status, Premier dealer status, training, and warranty registration still need to be confirmed with Generac and the shop.',
      },
      {
        q: 'What is the difference between a Generac dealer, installer, and service shop?',
        a: 'Dealers often sell equipment and may install. Installers focus on the electrical and fuel work. Service shops handle maintenance and repairs. Many companies do more than one. This list surfaces shops with Generac website signal so you can ask which roles they actually cover.',
      },
      {
        q: stateName
          ? `How many ${stateName} shops show Generac signal?`
          : 'How many shops show Generac signal?',
        a: `${count.toLocaleString()} researched installers${stateName ? ` in ${stateName}` : ''} have Generac on their website primary brand list.`,
      },
      {
        q: 'Are these recommendations?',
        a: 'No. Brand-filtered website signal is a starting filter, not an endorsement.',
      },
    ]
  }

  if (tag.slug === 'whole-house') {
    return [
      {
        q: 'What counts as whole-house or standby signal?',
        a: 'Website language about whole-house or standby generators, or tagged Google reviews that mention whole-house standby work. It is research signal, not a guarantee they will size or install for your home.',
      },
      {
        q: 'Is this different from portable generator shops?',
        a: 'Yes. This filter favors standby / whole-house language. Confirm they do automatic transfer switches, fuel connections, and permitted installs — not only portable units.',
      },
      {
        q: 'Are these recommendations?',
        a: 'No. Independently researched listings, not endorsements.',
      },
    ]
  }

  if (tag.slug === 'service') {
    return [
      {
        q: 'Does this mean they offer a maintenance plan?',
        a: 'Not automatically. These shops have generator-scoped review tags for maintenance, service, or warranty support — not generic business reviews alone. Ask what contracts, response times, and parts access look like for your unit.',
      },
      {
        q: 'Can I use this list if I already own a generator?',
        a: 'Yes. Many buyers need service more than a new install. Still confirm brand training and whether they service your model.',
      },
      {
        q: 'Are these recommendations?',
        a: 'No. Generator-scoped review filters are a starting point, not endorsements.',
      },
    ]
  }

  const brand = getBrandBySlug(tag.slug)
  return [
    {
      q: `Does a ${tag.label} mention mean they are an authorized dealer${stateName ? ` in ${stateName}` : ''}?`,
      a: 'Not necessarily. We record brand names that appear on installer websites. Authorized dealer status, training, and warranty registration still need to be confirmed with the manufacturer and the shop.',
    },
    {
      q: 'Why filter by brand at all if the directory is brand-agnostic?',
      a: 'Because you might already know what you want. The directory itself does not favor any manufacturer. This filter just makes it faster to find installers who mention the brand you have in mind.',
    },
    {
      q: 'Are these recommendations?',
      a: 'No. Brand-filtered website signal is a starting filter, not an endorsement.',
    },
    ...(brand
      ? []
      : [
          {
            q: 'How is this list built?',
            a: tag.description,
          },
        ]),
  ]
}
