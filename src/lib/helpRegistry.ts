export type HelpProductId = 'launch' | 'operations' | 'finance'

/** Minimal frontmatter parser (no eval); our help files use simple key: value YAML. */
function parseSimpleFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const text = raw.replace(/^\uFEFF/, '')
  if (!text.startsWith('---\n')) {
    return { data: {}, content: text }
  }
  const end = text.indexOf('\n---\n', 4)
  if (end === -1) {
    return { data: {}, content: text }
  }
  const block = text.slice(4, end)
  const content = text.slice(end + 5)
  const data: Record<string, unknown> = {}
  for (const line of block.split('\n')) {
    const idx = line.indexOf(':')
    if (idx <= 0) continue
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (!key) continue
    if (val.startsWith('"') && val.endsWith('"')) {
      try {
        data[key] = JSON.parse(val) as string
      } catch {
        data[key] = val.slice(1, -1)
      }
    } else if (/^-?\d+$/.test(val)) {
      data[key] = parseInt(val, 10)
    } else {
      data[key] = val
    }
  }
  return { data, content }
}

export const HELP_PRODUCTS: { id: HelpProductId; label: string; description: string }[] = [
  {
    id: 'launch',
    label: 'Watchman Launch',
    description: 'Training enrollment, public site, checkout, and academy administration.',
  },
  {
    id: 'operations',
    label: 'Watchman Operations',
    description: 'Command center, guard field app, scheduling, incidents, DAR, patrol, and client portal.',
  },
  {
    id: 'finance',
    label: 'Watchman Finance',
    description: 'GL, AR/AP, payroll, banking, integrations, and platform governance.',
  },
]

export type HelpArticleKind = 'how-to' | 'guide'

export interface HelpArticleMeta {
  product: HelpProductId
  slug: string
  title: string
  description: string
  order: number
  /** `how-to` = step-by-step task articles; `guide` = overview/reference (default). */
  kind: HelpArticleKind
  tags?: string[]
  updated?: string
  body: string
}

const rawModules = import.meta.glob<string>('../../content/help/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseKey(path: string): { product: HelpProductId; slug: string } | null {
  const m = path.match(/\/content\/help\/(launch|operations|finance)\/([^/]+)\.md$/)
  if (!m) return null
  return { product: m[1] as HelpProductId, slug: m[2] }
}

function buildRegistry(): HelpArticleMeta[] {
  const out: HelpArticleMeta[] = []
  for (const [path, raw] of Object.entries(rawModules)) {
    const parsed = parseKey(path)
    if (!parsed || raw == null) continue
    const { data, content } = parseSimpleFrontmatter(raw)
    const title = typeof data.title === 'string' ? data.title : parsed.slug
    const description = typeof data.description === 'string' ? data.description : ''
    const order = typeof data.order === 'number' ? data.order : 999
    const tags = Array.isArray(data.tags) ? data.tags.map(String) : undefined
    const updated = typeof data.updated === 'string' ? data.updated : undefined
    const kindRaw = data.kind
    const kind: HelpArticleKind =
      kindRaw === 'how-to' ? 'how-to' : 'guide'
    out.push({
      product: parsed.product,
      slug: parsed.slug,
      title,
      description,
      order,
      kind,
      tags,
      updated,
      body: content.trim(),
    })
  }
  return out.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
}

const _all = buildRegistry()

export function getAllHelpArticles(): HelpArticleMeta[] {
  return _all
}

export function getHelpArticlesForProduct(product: HelpProductId): HelpArticleMeta[] {
  return _all.filter((a) => a.product === product)
}

export function getHelpArticle(product: HelpProductId, slug: string): HelpArticleMeta | undefined {
  return _all.find((a) => a.product === product && a.slug === slug)
}

export function isHelpProductId(s: string): s is HelpProductId {
  return s === 'launch' || s === 'operations' || s === 'finance'
}
