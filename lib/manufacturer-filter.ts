/**
 * Drop generator manufacturers / OEM corporate locations from the buyer
 * directory. Independent dealers and installers stay, even when they mention
 * a brand in their name.
 */

const OEM_HOST_SUFFIXES = [
  'generac.com',
  'cummins.com',
  'briggsandstratton.com',
  'kohler.com',
  'kohlerpower.com',
  'rehlko.com',
  'caterpillar.com',
  'cat.com',
  'championpowerequipment.com',
  'firmanpowerequipment.com',
  'generacmobileproducts.com',
]

const OEM_CORP_CATEGORIES = new Set([
  'Manufacturer',
  'Corporate office',
  'Warehouse',
  'Distribution service',
])

const OEM_NAME_PATTERNS: RegExp[] = [
  /^cummins(\s+sales\s+and\s+service|\s+inc\.?|\s+onan|\s+power-gen)?$/i,
  /^generac(\s+power\s+systems|\s+power\s+products|\s+distribution|\s+mobile|\s+oshkosh|\s+clean\s+energy|\s+customer|\s+janesville)?/i,
  /^briggs\s*&\s*stratton(\s+corporation|\s*,?\s*llc)?$/i,
  /^kohler(\s+generator\s+warehouse|\s+power)?$/i,
  /^rehlko\b/i,
  /^champion\s+power\s+equipment\b/i,
  /^firman\s+power\s+equipment\b/i,
]

function websiteHost(website: string | null | undefined): string {
  if (!website) return ''
  try {
    const host = new URL(website).hostname.toLowerCase()
    return host.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export function isOemCorporateWebsite(website: string | null | undefined): boolean {
  const host = websiteHost(website)
  if (!host) return false
  return OEM_HOST_SUFFIXES.some(
    (suffix) => host === suffix || host.endsWith(`.${suffix}`),
  )
}

function nameLooksLikeOemCorporate(name: string): boolean {
  const trimmed = name.trim()
  return OEM_NAME_PATTERNS.some((pattern) => pattern.test(trimmed))
}

export function isManufacturerListing(installer: {
  name: string
  categoryName?: string | null
  website?: string | null
}): boolean {
  const category = (installer.categoryName || '').trim()
  if (category === 'Manufacturer') return true
  if (isOemCorporateWebsite(installer.website)) return true
  if (
    OEM_CORP_CATEGORIES.has(category) &&
    nameLooksLikeOemCorporate(installer.name)
  ) {
    return true
  }
  if (nameLooksLikeOemCorporate(installer.name) && isOemCorporateWebsite(installer.website)) {
    return true
  }
  // Catch OEM corp names even when Google used a looser category.
  if (nameLooksLikeOemCorporate(installer.name) && category !== 'Electrician') {
    // Keep local dealers like "Michigan Generac" / "Generac of Georgia"
    // (Electrician / Electric generator shop with a dealer-style name).
    if (
      category === 'Electric generator shop' ||
      category === 'HVAC contractor' ||
      category === 'Electrical installation service'
    ) {
      return false
    }
    if (
      /distribution|warehouse|corporate|headquarters|customer contact|engineering center|工厂/i.test(
        installer.name,
      )
    ) {
      return true
    }
  }
  return false
}

export function withoutManufacturers<T extends {
  name: string
  categoryName?: string | null
  website?: string | null
}>(installers: T[]): T[] {
  return installers.filter((installer) => !isManufacturerListing(installer))
}
