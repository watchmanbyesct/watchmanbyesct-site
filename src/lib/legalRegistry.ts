export type LegalDocType = 'privacy' | 'terms' | 'eula'

export type LegalProductSlug =
  | 'watchman-launch'
  | 'watchman-suite'
  | 'watchman-mail'
  | 'watchman-operations'
  | 'watchman-hr'
  | 'watchman-finance'
  | 'watchman-id'
  | 'watchman-contact'
  | 'watchman-crm'
  | 'watchman-bedcheck'
  | 'watchman-exchange'
  | 'watchman-exchange-mobile'

export const LEGAL_CANONICAL_BASE_URL = 'https://www.watchmanbyesct.com'

export const LEGAL_PRODUCTS: {
  slug: LegalProductSlug
  name: string
  description: string
}[] = [
  { slug: 'watchman-launch', name: 'Watchman Launch', description: 'Public website, training enrollment, and launch platform.' },
  { slug: 'watchman-suite', name: 'Watchman Suite', description: 'Multi-tenant security operations suite.' },
  { slug: 'watchman-mail', name: 'Watchman Mail', description: 'Secure organizational mail and messaging.' },
  { slug: 'watchman-operations', name: 'Watchman Operations', description: 'Field operations, scheduling, patrol, and incident management.' },
  { slug: 'watchman-hr', name: 'Watchman HR', description: 'Recruiting, onboarding, and workforce records.' },
  { slug: 'watchman-finance', name: 'Watchman Finance', description: 'Accounting, payroll, and financial operations.' },
  { slug: 'watchman-id', name: 'Watchman ID', description: 'Identity, badging, and access credentials.' },
  { slug: 'watchman-contact', name: 'Watchman Contact', description: 'Contact management and communications.' },
  { slug: 'watchman-crm', name: 'Watchman CRM', description: 'Client and customer relationship management.' },
  { slug: 'watchman-bedcheck', name: 'Watchman BedCheck', description: 'Resident bed checks and facility compliance.' },
  { slug: 'watchman-exchange', name: 'Watchman Exchange', description: 'Professional network for the security industry (web).' },
  { slug: 'watchman-exchange-mobile', name: 'Watchman Exchange Mobile', description: 'Mobile app for Watchman Exchange.' },
]

export type LegalDocumentMeta = {
  product: LegalProductSlug
  docType: LegalDocType
  title: string
  effectiveDate: string
  owner: string
  version: string
  body: string
}

const DOC_FILE: Record<LegalDocType, string> = {
  privacy: 'privacy.md',
  terms: 'terms.md',
  eula: 'eula.md',
}

const rawModules = import.meta.glob<string>('../../content/legal/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseMetadata(raw: string): {
  title: string
  effectiveDate: string
  owner: string
  version: string
  body: string
} {
  const lines = raw.replace(/^\uFEFF/, '').split('\n')
  const title = lines.find((l) => l.startsWith('# '))?.slice(2).trim() ?? 'Legal Document'
  const effectiveDate = lines.find((l) => l.startsWith('Effective Date:'))?.replace('Effective Date:', '').trim() ?? ''
  const owner = lines.find((l) => l.startsWith('Owner:'))?.replace('Owner:', '').trim() ?? 'ESCT Holding Inc.'
  const version = lines.find((l) => l.startsWith('Version:'))?.replace('Version:', '').trim() ?? ''

  let body = raw.replace(/^\uFEFF/, '')
  const implIdx = body.indexOf('## Cursor Implementation Instructions')
  if (implIdx >= 0) body = body.slice(0, implIdx)

  body = body.replace(/^#\s+.+\n+/, '')
  const bodyLines = body.split('\n')
  const firstSection = bodyLines.findIndex((l) => /^##\s/.test(l))
  if (firstSection > 0) {
    body = bodyLines.slice(firstSection).join('\n')
  }

  return { title, effectiveDate, owner, version, body: body.trim() }
}

function parseKey(path: string): { product: LegalProductSlug; docType: LegalDocType } | null {
  const m = path.match(/\/content\/legal\/(watchman-[a-z-]+)\/(privacy|terms|eula)\.md$/)
  if (!m) return null
  const product = m[1] as LegalProductSlug
  const docType = m[2] as LegalDocType
  if (!LEGAL_PRODUCTS.some((p) => p.slug === product)) return null
  if (!DOC_FILE[docType]) return null
  return { product, docType }
}

function buildRegistry(): LegalDocumentMeta[] {
  const out: LegalDocumentMeta[] = []
  for (const [path, raw] of Object.entries(rawModules)) {
    const parsed = parseKey(path)
    if (!parsed || raw == null) continue
    const meta = parseMetadata(raw)
    out.push({
      product: parsed.product,
      docType: parsed.docType,
      title: meta.title,
      effectiveDate: meta.effectiveDate,
      owner: meta.owner,
      version: meta.version,
      body: meta.body,
    })
  }
  return out.sort((a, b) => a.product.localeCompare(b.product) || a.docType.localeCompare(b.docType))
}

const _all = buildRegistry()

export function getAllLegalDocuments(): LegalDocumentMeta[] {
  return _all
}

export function getLegalDocumentsForProduct(product: LegalProductSlug): LegalDocumentMeta[] {
  return _all.filter((d) => d.product === product)
}

export function getLegalDocument(product: LegalProductSlug, docType: LegalDocType): LegalDocumentMeta | undefined {
  return _all.find((d) => d.product === product && d.docType === docType)
}

export function isLegalProductSlug(s: string): s is LegalProductSlug {
  return LEGAL_PRODUCTS.some((p) => p.slug === s)
}

export function isLegalDocType(s: string): s is LegalDocType {
  return s === 'privacy' || s === 'terms' || s === 'eula'
}

export function legalDocLabel(docType: LegalDocType): string {
  switch (docType) {
    case 'privacy':
      return 'Privacy Policy'
    case 'terms':
      return 'Terms of Service'
    case 'eula':
      return 'End User License Agreement'
  }
}

export function legalProductMeta(slug: LegalProductSlug) {
  return LEGAL_PRODUCTS.find((p) => p.slug === slug)
}
