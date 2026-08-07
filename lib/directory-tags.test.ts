import { describe, expect, it } from 'vitest'
import {
  getDirectoryTagBySlug,
  getInstallersByTag,
  getTagSeoTitle,
  NATIONAL_TAG_PREVIEW_LIMIT,
} from './directory-tags'

describe('directory tags', () => {
  it('scopes the service tag to generator-scoped review tags', () => {
    const tag = getDirectoryTagBySlug('service')
    expect(tag).toBeTruthy()
    const matches = getInstallersByTag(tag!)
    expect(matches.length).toBeGreaterThan(500)
    expect(matches.length).toBeLessThan(3000)
    for (const installer of matches.slice(0, 50)) {
      const scoped = installer.generatorScopedTags || []
      const ok = scoped.some(
        (t) => t.id === 'maintenance_service' || t.id === 'warranty_support',
      )
      expect(ok).toBe(true)
    }
  })

  it('keeps state names in service SEO titles', () => {
    const tag = getDirectoryTagBySlug('service')!
    const title = getTagSeoTitle(tag, 42, 'Tennessee')
    expect(title).toContain('Tennessee')
    expect(title).toContain('42')
  })

  it('exports a national preview cap under 100', () => {
    expect(NATIONAL_TAG_PREVIEW_LIMIT).toBeLessThanOrEqual(100)
    expect(NATIONAL_TAG_PREVIEW_LIMIT).toBeGreaterThanOrEqual(50)
  })
})
