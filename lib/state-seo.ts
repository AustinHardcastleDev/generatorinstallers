import type { StateMeta } from '@/lib/installer-model'

/** Count-led SERP title for state directory pages. */
export function getStateSeoTitle(state: StateMeta): string {
  const n = state.totalListings
  if (n <= 0) return `Generator Installer Research in ${state.name}`
  if (n === 1) return `1 Generator Installer in ${state.name}`
  return `${n} Generator Installers in ${state.name}`
}

/**
 * Direct-response meta description for state directory pages.
 * Soft-capped to 155 chars by pageMetadata / seoDescription.
 */
export function getStateMetaDescription(state: StateMeta): string {
  const n = state.totalListings
  if (n <= 0) {
    return `We’re researching standby generator installers in ${state.name}. Check back as listings are added, or browse nearby states for shops with real website signal.`
  }
  if (n === 1) {
    return `1 ${state.name} installer with standby generator signal on their website. Use it as a starting point, then verify licensing, references, and fit yourself.`
  }
  const pageProof =
    state.explicitCount === 1
      ? '1 dedicated generator page'
      : `${state.explicitCount} dedicated generator pages`
  return `Compare ${n} ${state.name} standby generator installers. ${pageProof}. Website signal research, not paid rankings.`
}
