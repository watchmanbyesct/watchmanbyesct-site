import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Scale } from 'lucide-react'
import { LegalFooterChrome, LegalNav, LEGAL_GOLD, legalMaxW } from './LegalLayout'
import { LEGAL_PRODUCTS } from '../../lib/legalRegistry'

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div
      style={{
        background: '#0d0d0d',
        border: `1px solid ${hov ? 'rgba(201,160,48,0.3)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 24,
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 12px 32px rgba(201,160,48,0.1)' : 'none',
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

export default function LegalHome() {
  React.useEffect(() => {
    document.title = 'Legal · Watchman by ESCT'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'Privacy policies, terms of service, and end user license agreements for Watchman products.')
  }, [])

  return (
    <div style={{ background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .legal-page-root { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>
      <LegalNav title="Legal" />
      <main className="legal-page-root" style={{ flex: 1, padding: '100px 24px 64px' }}>
        <div style={legalMaxW}>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: LEGAL_GOLD, marginBottom: 12 }}>
              Legal center
            </p>
            <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
              Watchman Product Legal Documents
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
              Privacy policies, terms of service, and end user license agreements for each Watchman product.
              Watchman platform software is owned by <strong style={{ color: 'rgba(255,255,255,0.65)' }}>ESCT Holding Inc.</strong>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {LEGAL_PRODUCTS.map((product) => (
              <Link key={product.slug} to={`/legal/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <Scale size={16} color={LEGAL_GOLD} />
                        <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', margin: 0 }}>{product.name}</h2>
                      </div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, margin: 0 }}>{product.description}</p>
                    </div>
                    <ChevronRight size={18} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0, marginTop: 2 }} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <LegalFooterChrome />
    </div>
  )
}
