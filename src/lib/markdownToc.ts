/*
 * Watchman by ESCT
 *
 * Copyright © 2026 Owens F. Shepard. All rights reserved.
 *
 * Created and developed by Owens F. Shepard for use within the Watchman by ESCT
 * product ecosystem and for commercialization through ESCT Holdings Incorporated,
 * subject to written intellectual property ownership, licensing, and authorization
 * agreements.
 *
 * No ownership rights, copyright rights, license rights, sublicensing rights,
 * distribution rights, or commercialization rights are granted by this file except
 * as expressly authorized in writing by Owens F. Shepard or the lawful copyright
 * owner.
 *
 * This source code, including its structure, organization, design, logic,
 * workflows, interfaces, documentation, and related materials, is confidential
 * and proprietary. Unauthorized copying, modification, distribution, disclosure,
 * reverse engineering, or use is strictly prohibited.
 */

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
