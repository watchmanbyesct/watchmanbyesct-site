import GithubSlugger from 'github-slugger'

export interface MarkdownTocItem {
  depth: 2 | 3
  text: string
  id: string
}

/** Build TOC from `##` / `###` headings; skips fenced ``` blocks. IDs match `rehype-slug` (github-slugger). */
export function extractMarkdownToc(markdown: string): MarkdownTocItem[] {
  const slugger = new GithubSlugger()
  const toc: MarkdownTocItem[] = []
  const parts = markdown.split(/^```/m)
  for (let i = 0; i < parts.length; i += 2) {
    const chunk = parts[i] ?? ''
    for (const line of chunk.split('\n')) {
      const m = line.match(/^(#{2,3})\s+(.+)$/)
      if (!m) continue
      const depth = m[1].length as 2 | 3
      if (depth !== 2 && depth !== 3) continue
      let text = m[2].trim().replace(/\s+#+\s*$/, '').trim()
      if (!text) continue
      toc.push({ depth, text, id: slugger.slug(text) })
    }
  }
  return toc
}
