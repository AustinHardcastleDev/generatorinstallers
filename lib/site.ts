export const SITE = {
  name: 'GeneratorInstallerList',
  domain: 'www.generatorinstallerlist.com',
  url: 'https://www.generatorinstallerlist.com',
  tagline: "Find someone who's done this before.",
  description:
    'A buyer-first directory of standby generator installers across 50 states. We filter the noise across electricians, HVAC shops, and generator companies so you can find someone who has actually installed a whole-home generator before, for any brand.',
}

/** Base path for the directory. Mirrors /builders on the sibling site. */
export const LIST_BASE = '/installers'

export const NAV = [
  { href: '/', label: 'Home' },
  { href: LIST_BASE, label: 'States' },
  { href: `${LIST_BASE}/near-me`, label: 'Near Me' },
  { href: '/financing', label: 'Financing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/for-installers', label: 'For Installers' },
]

/** Top nav omits States and For Installers so the bar stays one line on mobile. */
export const HEADER_NAV = NAV.filter(
  (item) => item.href !== LIST_BASE && item.href !== '/for-installers',
)
