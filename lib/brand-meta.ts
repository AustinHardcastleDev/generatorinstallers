/**
 * Client-safe brand metadata. Must not import installer JSON or other
 * server-only data modules — FilteredInstallers and other client components
 * import from here.
 */

/** Minimum matches before a national brand tag page is treated as a crawl surface. */
export const MIN_NATIONAL_BRAND_INSTALLERS = 10
/** Minimum matches before a state×brand tag page is emitted. */
export const MIN_STATE_BRAND_INSTALLERS = 3

export type BrandTag = {
  slug: string
  id: string
  label: string
  shortLabel: string
  description: string
}

/**
 * Whatever brand you're looking at, you can find an installer here.
 * Backed by website `primaryBrands` signal in the national directory.
 */
export const BRAND_TAGS: BrandTag[] = [
  {
    slug: 'generac',
    id: 'generac',
    label: 'Generac',
    shortLabel: 'Generac',
    description:
      'Shops whose websites show Generac signal — dealers, installers, and service techs. Website mention is not an authorized-dealer certification check.',
  },
  {
    slug: 'kohler',
    id: 'kohler',
    label: 'Kohler',
    shortLabel: 'Kohler',
    description:
      'Installers whose websites show Kohler generator signal. Confirm authorized dealer status and warranty path directly.',
  },
  {
    slug: 'cummins',
    id: 'cummins',
    label: 'Cummins',
    shortLabel: 'Cummins',
    description:
      'Installers whose websites show Cummins Onan or related standby equipment signal.',
  },
  {
    slug: 'briggs-stratton',
    id: 'briggs_stratton',
    label: 'Briggs & Stratton',
    shortLabel: 'Briggs & Stratton',
    description:
      'Installers whose websites show Briggs & Stratton standby generator signal.',
  },
]

export function getBrandBySlug(slug: string): BrandTag | undefined {
  return BRAND_TAGS.find((b) => b.slug === slug)
}

export function getBrandById(id: string): BrandTag | undefined {
  return BRAND_TAGS.find((b) => b.id === id)
}
