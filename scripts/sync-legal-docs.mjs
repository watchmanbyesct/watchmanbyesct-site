#!/usr/bin/env node
/**
 * Sync legal markdown from product repositories into watchman-site/content/legal/.
 * Run from watchman-site: node scripts/sync-legal-docs.mjs
 */
import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteRoot = join(__dirname, '..')
const destRoot = join(siteRoot, 'content/legal')

const SOURCES = [
  { repo: join(siteRoot, '../esct-watchman-launch/esct-watchman'), slug: 'watchman-launch' },
  { repo: join(siteRoot, '../esct-watchman-operations'), slug: 'watchman-operations' },
  { repo: join(siteRoot, '../watchman-hr'), slug: 'watchman-hr' },
  { repo: join(siteRoot, '../watchman-id'), slug: 'watchman-id' },
  { repo: join(siteRoot, '../watchman-contact'), slug: 'watchman-contact' },
  { repo: join(siteRoot, '../watchman-crm'), slug: 'watchman-crm' },
  { repo: join(siteRoot, '../../Projects/watchman-bedcheck'), slug: 'watchman-bedcheck' },
  { repo: join(siteRoot, '../../Projects/watchman-finance'), slug: 'watchman-finance' },
  { repo: join(siteRoot, '../../Projects/watchman-exchange-web'), slug: 'watchman-exchange' },
  { repo: join(siteRoot, '../../Projects/watchman-exchange-mobile'), slug: 'watchman-exchange-mobile' },
  { repo: join(siteRoot, '../The New Watchman Suite'), slug: 'watchman-suite' },
  { repo: join(siteRoot, '../The New Watchman Suite'), slug: 'watchman-mail', subpath: 'watchman-mail' },
]

function copyProduct({ repo, slug, subpath }) {
  const folder = subpath ?? slug
  const srcDir = join(repo, 'legal', folder)
  const destDir = join(destRoot, slug)
  if (!existsSync(srcDir)) {
    console.warn(`skip missing: ${srcDir}`)
    return
  }
  mkdirSync(destDir, { recursive: true })
  for (const file of ['privacy.md', 'terms.md']) {
    cpSync(join(srcDir, file), join(destDir, file))
  }
  const eulaSrc = join(srcDir, 'EULA.md')
  if (existsSync(eulaSrc)) {
    cpSync(eulaSrc, join(destDir, 'eula.md'))
  }
  console.log(`synced ${slug}`)
}

mkdirSync(destRoot, { recursive: true })
for (const source of SOURCES) {
  copyProduct(source)
}

console.log(`Legal docs synced to ${destRoot}`)
console.log('Products:', readdirSync(destRoot).sort().join(', '))
