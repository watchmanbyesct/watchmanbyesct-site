import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { HelpFooterChrome, HelpNav, HELP_GOLD, helpMaxW } from './HelpLayout'
import {
  getHelpArticlesForProduct,
  HELP_PRODUCTS,
  isHelpProductId,
  type HelpProductId,
} from '../../lib/helpRegistry'

export default function HelpProductIndex() {
  const { product: productParam } = useParams<{ product: string }>()
  const product = productParam && isHelpProductId(productParam) ? productParam : null

  const meta = product ? HELP_PRODUCTS.find((p) => p.id === product) : null
  const articles = product ? getHelpArticlesForProduct(product) : []
  const byOrder = (a: (typeof articles)[0], b: (typeof articles)[0]) =>
    a.order - b.order || a.title.localeCompare(b.title)
  const howTos = articles.filter((a) => a.kind === 'how-to').sort(byOrder)
  const guides = articles.filter((a) => a.kind !== 'how-to').sort(byOrder)

  React.useEffect(() => {
    if (meta) {
      document.title = `${meta.label} · Help · Watchman by ESCT`
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute('content', meta.description)
    }
  }, [meta])

  if (!product || !meta) {
    return <Navigate to="/help" replace />
  }

  return (
    <div style={{ background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .help-page-root { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>
      <HelpNav title="Help center" />
      <main className="help-page-root" style={{ flex: 1, padding: '100px 24px 64px' }}>
        <div style={helpMaxW}>
          <div style={{ marginBottom: 32 }}>
            <Link to="/help" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 16, display: 'inline-block' }}>
              ← All products
            </Link>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: HELP_GOLD, marginBottom: 12 }}>
              {meta.label}
            </p>
            <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
              Help articles
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 560, lineHeight: 1.6 }}>{meta.description}</p>
          </div>

          <nav className="help-index-toc" aria-label="Page sections">
            <p className="help-index-toc-title">Jump to</p>
            <div className="help-index-toc-row">
              {howTos.length > 0 && <a href="#how-to-guides">How-to guides ({howTos.length})</a>}
              <a href="#product-guides">Product guides ({guides.length})</a>
            </div>
          </nav>

          {howTos.length > 0 && (
            <section id="how-to-guides" style={{ marginBottom: 36, scrollMarginTop: 88 }}>
              <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: HELP_GOLD, marginBottom: 14 }}>
                How-to guides
              </h2>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
                {howTos.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/help/${product}/${a.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        padding: '16px 18px',
                        borderRadius: 10,
                        background: '#0d0d0d',
                        border: '1px solid rgba(212,168,67,0.22)',
                        textDecoration: 'none',
                        color: '#fff',
                        transition: 'border-color 0.15s',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: HELP_GOLD, display: 'block', marginBottom: 6 }}>How-to</span>
                        <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{a.title}</p>
                        {a.description && (
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{a.description}</p>
                        )}
                      </div>
                      <ChevronRight size={18} color={HELP_GOLD} style={{ flexShrink: 0 }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section id="product-guides" style={{ scrollMarginTop: 88 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
              {howTos.length > 0 ? 'Product guides & reference' : 'All articles'}
            </h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {guides.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/help/${product}/${a.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      padding: '16px 18px',
                      borderRadius: 10,
                      background: '#0d0d0d',
                      border: '1px solid rgba(255,255,255,0.08)',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'border-color 0.15s',
                    }}
                  >
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{a.title}</p>
                      {a.description && (
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{a.description}</p>
                      )}
                    </div>
                    <ChevronRight size={18} color={HELP_GOLD} style={{ flexShrink: 0 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <HelpFooterChrome />
    </div>
  )
}
