import { absoluteUrl } from './seo'

/** Shared editorial provenance for buyer guides. */
export const GUIDE_REVIEWED_LABEL = 'Reviewed August 2026'
export const GUIDE_DATE_PUBLISHED = '2026-06-01'
export const GUIDE_DATE_MODIFIED = '2026-08-07'

export const GUIDE_AUTHOR = {
  name: 'GeneratorInstallerList editorial team',
  url: '/about',
}

export type GuideSource = {
  label: string
  href: string
}

/** Default citations used across cost / sizing / process guides. */
export const DEFAULT_GUIDE_SOURCES: GuideSource[] = [
  {
    label: 'Consumer Reports — home standby generator buying guidance',
    href: 'https://www.consumerreports.org/appliances/generators/',
  },
  {
    label: 'Generac — home standby installed-cost guidance',
    href: 'https://www.generac.com/',
  },
  {
    label: 'NFPA 37 — installation of stationary combustion engines',
    href: 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=37',
  },
  {
    label: 'NEC Article 702 — optional standby systems',
    href: 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70',
  },
]

export function guideArticleJsonLd({
  title,
  description,
  slug,
  sources = DEFAULT_GUIDE_SOURCES,
}: {
  title: string
  description: string
  slug: string
  sources?: GuideSource[]
}) {
  const url = absoluteUrl(`/guides/${slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: GUIDE_DATE_PUBLISHED,
    dateModified: GUIDE_DATE_MODIFIED,
    author: {
      '@type': 'Organization',
      name: GUIDE_AUTHOR.name,
      url: absoluteUrl(GUIDE_AUTHOR.url),
    },
    publisher: {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: 'GeneratorInstallerList',
      url: absoluteUrl('/'),
    },
    citation: sources.map((source) => source.href),
  }
}
