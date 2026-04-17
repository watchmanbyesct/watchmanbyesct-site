import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { HelpFooterChrome, HelpNav, HELP_GOLD, helpMaxW } from './HelpLayout'
import { getHelpArticle, HELP_PRODUCTS, isHelpProductId } from '../../lib/helpRegistry'

export default function HelpArticle() {
  const { product: productParam, slug } = useParams<{ product: string; slug: string }>()
  const product = productParam && isHelpProductId(productParam) ? productParam : null
  const article = product && slug ? getHelpArticle(product, slug) : undefined
  const productMeta = product ? HELP_PRODUCTS.find((p) => p.id === product) : undefined

  React.useEffect(() => {
    if (article) {
      document.title = `${article.title} · Help · Watchman by ESCT`
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute('content', article.description || article.title)
    }
  }, [article])

  if (!product || !slug) {
    return <Navigate to="/help" replace />
  }

  if (!article) {
    return <Navigate to={`/help/${product}`} replace />
  }

  return (
    <div style={{ background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .help-page-root { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>
      <HelpNav title="Help center" />
      <main className="help-page-root help-md" style={{ flex: 1, padding: '100px 24px 64px' }}>
        <div style={{ ...helpMaxW, maxWidth: 760 }}>
          <div style={{ marginBottom: 28 }}>
            <Link to="/help" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginRight: 12 }}>
              Help
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <Link to={`/help/${product}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginLeft: 12 }}>
              {productMeta?.label ?? product}
            </Link>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>
          {article.updated && (
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>Updated {article.updated}</p>
          )}
          <div className="help-md-inner">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children, className }) => {
                  if (href?.startsWith('/')) {
                    return (
                      <Link to={href} className={className} style={{ color: HELP_GOLD, textDecoration: 'none' }}>
                        {children}
                      </Link>
                    )
                  }
                  return (
                    <a
                      href={href}
                      className={className}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: HELP_GOLD }}
                    >
                      {children}
                    </a>
                  )
                },
              }}
            >
              {article.body}
            </ReactMarkdown>
          </div>
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Link
              to={`/help/${product}`}
              style={{ fontSize: 14, fontWeight: 600, color: HELP_GOLD, textDecoration: 'none' }}
            >
              ← Back to {productMeta?.label ?? product} articles
            </Link>
          </div>
        </div>
      </main>
      <HelpFooterChrome />
    </div>
  )
}
