import type { PinCategory } from './tokens'

export type GeneratorConfidence = 'explicit' | 'high' | 'medium'

export type InstallerReviewTagConfidence = 'single' | 'repeated' | 'strong'

export type InstallerReviewTag = {
  id: string
  label: string
  matchedReviewCount: number
  confidence: InstallerReviewTagConfidence
}

export type InstallerReviewSnippet = {
  reviewId: string
  rating: number | null
  publishedAt: string | null
  text: string
  matchedSignals: string[]
}

export type Installer = {
  id: string
  slug: string
  name: string
  city: string
  state: string
  stateAbbr: string
  stateSlug: string
  address: string
  phone: string
  emails?: string[]
  website: string
  lat: number | null
  lng: number | null
  reviewsCount: number
  totalScore: number | null
  categoryName: string
  categories: string[]
  generatorConfidence: GeneratorConfidence
  generatorReasoning: string
  generatorMentions: number
  dedicatedPage: string | null
  relatedMentions: {
    standby: number
    transferSwitch: number
    wholeHouse: number
  }
  brands: Record<string, number>
  primaryBrands: string[]
  writeup: string
  sourceKeywords: string[]
  reviewTags?: InstallerReviewTag[]
  generatorReviewCount?: number
  generatorReviewShare?: number
  generatorScopedTags?: InstallerReviewTag[]
  generatorReviewSnippets?: InstallerReviewSnippet[]
  /** Paid placement. Pins to the top of any result set and is labeled everywhere. */
  sponsored?: boolean
}

export type InstallerListItem = Pick<
  Installer,
  | 'id'
  | 'slug'
  | 'name'
  | 'city'
  | 'state'
  | 'stateAbbr'
  | 'stateSlug'
  | 'lat'
  | 'lng'
  | 'reviewsCount'
  | 'totalScore'
  | 'categoryName'
  | 'generatorConfidence'
  | 'writeup'
  | 'reviewTags'
  | 'primaryBrands'
  | 'generatorReviewCount'
  | 'sponsored'
> & {
  distanceMiles?: number
}

/** Minimum generator-specific review thresholds used in list filters. */
export const GENERATOR_REVIEW_FILTERS = [
  { id: '1', min: 1, label: '1+ generator reviews' },
  { id: '5', min: 5, label: '5+ generator reviews' },
  { id: '10', min: 10, label: '10+ generator reviews' },
] as const

export type GeneratorReviewFilterId =
  (typeof GENERATOR_REVIEW_FILTERS)[number]['id']

export function generatorReviewCount(
  installer: Pick<Installer, 'generatorReviewCount'>,
): number {
  return installer.generatorReviewCount || 0
}

export type InstallerMapItem = Pick<
  Installer,
  | 'id'
  | 'slug'
  | 'name'
  | 'city'
  | 'stateAbbr'
  | 'stateSlug'
  | 'lat'
  | 'lng'
  | 'reviewsCount'
  | 'totalScore'
  | 'generatorConfidence'
  | 'sponsored'
> & {
  distanceMiles?: number
}

export type StateMeta = {
  slug: string
  name: string
  abbr: string
  totalListings: number
  explicitCount: number
  highCount: number
  mediumCount: number
  withPhone?: number
  withEmail?: number
  withReviewTags?: number
  withGeneratorReviews?: number
  topCities: { city: string; count: number }[]
  allCities: string[]
}

/** Visual tier for pins and list-row left rules. */
export type SignalTier = 'dedicated' | 'repeated' | 'signal'

export function signalTier(confidence: GeneratorConfidence): SignalTier {
  return confidence === 'explicit'
    ? 'dedicated'
    : confidence === 'high'
      ? 'repeated'
      : 'signal'
}

export function confidenceRank(confidence: GeneratorConfidence): number {
  return confidence === 'explicit' ? 0 : confidence === 'high' ? 1 : 2
}

/** Sponsored wins over every signal tier on the map and in lists. */
export function pinCategory(
  installer: Pick<Installer, 'generatorConfidence' | 'sponsored'>,
): PinCategory {
  return installer.sponsored
    ? 'sponsored'
    : signalTier(installer.generatorConfidence)
}

function sponsoredRank(installer: { sponsored?: boolean }): number {
  return installer.sponsored ? 0 : 1
}

/**
 * Sponsored first, then generator-specific review count, then website signal,
 * then overall Google review count.
 */
export function sortInstallersBySignal<
  T extends Pick<
    Installer,
    | 'generatorConfidence'
    | 'reviewsCount'
    | 'generatorReviewCount'
    | 'slug'
    | 'sponsored'
  >,
>(list: T[]): T[] {
  return [...list].sort((a, b) => {
    const sponsor = sponsoredRank(a) - sponsoredRank(b)
    if (sponsor !== 0) return sponsor
    const gen =
      generatorReviewCount(b) - generatorReviewCount(a)
    if (gen !== 0) return gen
    const signal =
      confidenceRank(a.generatorConfidence) - confidenceRank(b.generatorConfidence)
    if (signal !== 0) return signal
    return (
      (b.reviewsCount || 0) - (a.reviewsCount || 0) || a.slug.localeCompare(b.slug)
    )
  })
}

/** Distance search: sponsored, distance, generator reviews, signal, Google reviews. */
export function sortInstallersByDistanceSignal<
  T extends Pick<
    Installer,
    | 'generatorConfidence'
    | 'reviewsCount'
    | 'generatorReviewCount'
    | 'sponsored'
  > & { distanceMiles: number },
>(list: T[]): T[] {
  return [...list].sort((a, b) => {
    const sponsor = sponsoredRank(a) - sponsoredRank(b)
    if (sponsor !== 0) return sponsor
    const d = a.distanceMiles - b.distanceMiles
    if (Math.abs(d) > 0.01) return d
    const gen =
      generatorReviewCount(b) - generatorReviewCount(a)
    if (gen !== 0) return gen
    const signal =
      confidenceRank(a.generatorConfidence) - confidenceRank(b.generatorConfidence)
    if (signal !== 0) return signal
    return (b.reviewsCount || 0) - (a.reviewsCount || 0)
  })
}

export function confidenceLabel(c: GeneratorConfidence): string {
  return c === 'explicit'
    ? 'Dedicated generator page'
    : c === 'high'
      ? 'Repeated site signal'
      : 'Generator signal found'
}

export function confidenceDescription(c: GeneratorConfidence): string {
  return c === 'explicit'
    ? 'Their website has a dedicated standby generator page. That is the strongest signal we track.'
    : c === 'high'
      ? 'Their website mentions whole-home backup work multiple times. Worth a first call if the rest of the fit checks out.'
      : 'Their website mentions generator work at least once. Use this as a starting point, then confirm scope directly.'
}
