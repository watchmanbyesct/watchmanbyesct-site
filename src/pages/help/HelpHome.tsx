import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'
import { HelpFooterChrome, HelpNav, HELP_GOLD, helpMaxW } from './HelpLayout'
import { HELP_PRODUCTS } from '../../lib/helpRegistry'

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div
      style={{
        background: '#0d0d0d',
        border: `1px solid ${hov ? 'rgba(212,168,67,0.3)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 24,
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 12px 32px rgba(212,168,67,0.1)' : 'none',
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

export default function HelpHome() {
  React.useEffect(() => {
    document.title = 'Help Center · Watchman by ESCT'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'Documentation and guides for Watchman Launch, Operations, and Finance.')
  }, [])

  return (
    <div style={{ background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .help-page-root { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>
      <HelpNav title="Help center" />
      <main className="help-page-root" style={{ flex: 1, padding: '100px 24px 64px' }}>
        <div style={helpMaxW}>
          <div style={{ marginBottom: 40, maxWidth: 640 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: HELP_GOLD, marginBottom: 12 }}>
              Knowledge base
            </p>
            <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
              Watchman Help Center
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
              Guides for the three Watchman products: training and enrollment (Launch), field and command-center operations (Operations), and financial workflows (Finance). Choose a product below.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
            {HELP_PRODUCTS.map((p) => (
              <Link key={p.id} to={`/help/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <BookOpen size={18} color={HELP_GOLD} />
                  </div>
                  <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{p.label}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, flex: 1 }}>{p.description}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontSize: 13, fontWeight: 600, color: HELP_GOLD }}>
                    Browse articles <ChevronRight size={14} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <HelpFooterChrome />
    </div>
  )
}
