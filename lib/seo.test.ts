import { describe, expect, it } from 'vitest'
import { seoDescription, seoTitle, truncateText } from './seo'
import { getProfileSeoTitle } from './profile-copy'
import type { Installer } from './installer-model'

describe('seo helpers', () => {
  it('truncates on word boundaries', () => {
    expect(truncateText('alpha beta gamma', 12)).toBe('alpha beta…')
  })

  it('keeps short titles intact', () => {
    expect(seoTitle('12 Generator Installers in Ohio')).toBe(
      '12 Generator Installers in Ohio',
    )
  })

  it('caps descriptions without mid-word cuts when possible', () => {
    const long =
      'Compare 120 Ohio standby generator installers with website signal research notes and dedicated generator pages across the state market.'
    const out = seoDescription(long)
    expect(out.length).toBeLessThanOrEqual(155)
    expect(out.endsWith('…') || out.length <= 155).toBe(true)
  })
})

describe('getProfileSeoTitle', () => {
  it('preserves Generator Installer and location when the name is long', () => {
    const installer = {
      name: 'Very Long Named Electrical Contracting Services of Metro Atlanta LLC',
      city: 'Marietta',
      stateAbbr: 'GA',
      state: 'Georgia',
    } as Pick<Installer, 'name' | 'city' | 'stateAbbr' | 'state'>
    const title = getProfileSeoTitle(installer as Installer)
    expect(title).toContain('Generator Installer in Marietta, GA')
    expect(title.length).toBeLessThan(90)
  })
})
