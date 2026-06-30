import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { LegalFooterChrome, LegalNav, LEGAL_GOLD, legalMaxW } from './LegalLayout'
import {
  getLegalDocumentsForProduct,
  isLegalProductSlug,
  legalDocLabel,
  legalProductMeta,
  type LegalDocType,
} from '../../lib/legalRegistry'

export default function LegalProductIndex() {
  const { product: productParam } = useParams<{ product: string }>()
  const product = productParam && isLegalProductSlug(productParam) ? productParam : null
  const meta = product ? legalProductMeta(product) : undefined
  const docs = product ? getLegalDocumentsForProduct(product) : []

  React.useEffect(() => {
    if (meta) {
      document.title = `${meta.name} Legal · Watchman by ESCT`
    }
  }, [meta])

  if (!product) {
    return <Navigate to="/legal" replace />
  }

  if (!meta) {
    return <Navigate to="/legal" replace />
  }

  const docOrder: LegalDocType[] = ['privacy', 'terms', 'eula']

  return (
    <div style={{ background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LegalNav title="Legal" />
      <main className="legal-page-root" style={{ flex: 1, padding: '100px 24px 64px' }}>
        <div style={{ ...legalMaxW, maxWidth: 760 }}>
          <div style={{ marginBottom: 28 }}>
            <Link to="/legal" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
              Legal center
            </Link>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            {meta.name}
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 32 }}>{meta.description}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {docOrder.map((docType) => {
              const doc = docs.find((d) => d.docType === docType)
              if (!doc) return null
              return (
                <Link
                  key={docType}
                  to={`/legal/${product}/${docType}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: '#0d0d0d',
                    textDecoration: 'none',
                    color: '#fff',
                  }}
                >
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{legalDocLabel(docType)}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                      Version {doc.version} · Effective {doc.effectiveDate}
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: LEGAL_GOLD }}>Read</span>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <LegalFooterChrome />
    </div>
  )
}
