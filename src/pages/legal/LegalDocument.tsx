import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { LegalFooterChrome, LegalNav, LEGAL_GOLD, legalMaxW } from './LegalLayout'
import {
  getLegalDocument,
  isLegalDocType,
  isLegalProductSlug,
  legalDocLabel,
  legalProductMeta,
} from '../../lib/legalRegistry'

export default function LegalDocument() {
  const { product: productParam, docType: docTypeParam } = useParams<{ product: string; docType: string }>()
  const product = productParam && isLegalProductSlug(productParam) ? productParam : null
  const docType = docTypeParam && isLegalDocType(docTypeParam) ? docTypeParam : null
  const doc = product && docType ? getLegalDocument(product, docType) : undefined
  const productMeta = product ? legalProductMeta(product) : undefined

  React.useEffect(() => {
    if (doc) {
      document.title = `${doc.title} · Watchman by ESCT`
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute('content', `${doc.title} for ${productMeta?.name ?? product}`)
    }
  }, [doc, productMeta, product])

  if (!product || !docType) {
    return <Navigate to="/legal" replace />
  }

  if (!doc || !productMeta) {
    return <Navigate to={`/legal/${product}`} replace />
  }

  const siblings = (['privacy', 'terms', 'eula'] as const).filter((d) => d !== docType)

  return (
    <div style={{ background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .legal-page-root { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>
      <LegalNav title="Legal" />
      <main className="legal-page-root help-md" style={{ flex: 1, padding: '100px 24px 64px' }}>
        <div style={{ ...legalMaxW, maxWidth: 760 }}>
          <div style={{ marginBottom: 28 }}>
            <Link to="/legal" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginRight: 12 }}>
              Legal
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <Link to={`/legal/${product}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginLeft: 12 }}>
              {productMeta.name}
            </Link>
          </div>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: LEGAL_GOLD, marginBottom: 10 }}>
            {legalDocLabel(docType)}
          </p>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            {doc.title.replace(/^Watchman .+ /, '')}
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
            Effective Date: {doc.effectiveDate} · {doc.owner}
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 32 }}>
            Version: {doc.version}
          </p>

          <div className="help-md-inner">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={{
                a: ({ href, children, className }) => {
                  if (href?.startsWith('/')) {
                    return (
                      <Link to={href} className={className} style={{ color: LEGAL_GOLD, textDecoration: 'none' }}>
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
                      style={{ color: LEGAL_GOLD }}
                    >
                      {children}
                    </a>
                  )
                },
              }}
            >
              {doc.body}
            </ReactMarkdown>
          </div>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Related documents for {productMeta.name}:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {siblings.map((s) => (
                <Link
                  key={s}
                  to={`/legal/${product}/${s}`}
                  style={{ fontSize: 13, color: LEGAL_GOLD, textDecoration: 'none' }}
                >
                  {legalDocLabel(s)}
                </Link>
              ))}
              <Link to={`/legal/${product}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                All {productMeta.name} legal
              </Link>
            </div>
          </div>
        </div>
      </main>
      <LegalFooterChrome />
    </div>
  )
}
