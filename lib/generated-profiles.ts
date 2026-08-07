import generatedData from './data/generated-profiles.json'
import type { Installer } from './installer-model'

export type GeneratedProfileCopy = {
  subhead: string
  lead: string
  reviewSummary: string | null
  faqGeneratorAnswer: string
  metaDescription: string
  generatedAt: string
  model: string
}

const generated = generatedData as Record<string, GeneratedProfileCopy>

export function getGeneratedProfile(
  installer: Pick<Installer, 'id'>,
): GeneratedProfileCopy | undefined {
  return generated[installer.id]
}

export function hasGeneratedProfile(installer: Pick<Installer, 'id'>): boolean {
  return Boolean(generated[installer.id]?.lead)
}

export function generatedProfileCount(): number {
  return Object.keys(generated).length
}
