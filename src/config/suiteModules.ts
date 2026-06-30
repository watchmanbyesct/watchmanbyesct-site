/*
 * Watchman by ESCT — backward-compatible re-exports from ecosystemProducts
 */

import {
  SUITE_MODULES,
  type EcosystemProduct,
} from './ecosystemProducts'

export type SuiteModuleStatus = 'live' | 'coming-q4-2026'

export type SuiteModule = {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  status: SuiteModuleStatus
  statusLabel: string
  statusColor: string
  highlight?: boolean
  publicUrl?: string
}

function toSuiteModule(p: EcosystemProduct): SuiteModule {
  return {
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    features: p.features,
    status: 'live',
    statusLabel: p.statusLabel,
    statusColor: p.statusColor,
    highlight: p.highlight,
    publicUrl: p.publicUrl,
  }
}

export const LIVE_SUITE_MODULES: SuiteModule[] = SUITE_MODULES.map(toSuiteModule)

/** @deprecated Roadmap modules moved to standalone products section */
export const ROADMAP_SUITE_MODULES: SuiteModule[] = []
