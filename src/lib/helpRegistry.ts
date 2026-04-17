import matter from 'gray-matter'

export type HelpProductId = 'launch' | 'operations' | 'finance'

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

export interface HelpArticleMeta {
  product: HelpProductId
  slug: string
  title: string
  description: string
  order: number
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
    const { data, content } = matter(raw)
    const title = typeof data.title === 'string' ? data.title : parsed.slug
    const description = typeof data.description === 'string' ? data.description : ''
    const order = typeof data.order === 'number' ? data.order : 999
    const tags = Array.isArray(data.tags) ? data.tags.map(String) : undefined
    const updated = typeof data.updated === 'string' ? data.updated : undefined
    out.push({
      product: parsed.product,
      slug: parsed.slug,
      title,
      description,
      order,
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
