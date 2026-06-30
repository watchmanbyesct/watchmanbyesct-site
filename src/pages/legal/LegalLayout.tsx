import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { WF_BRAND } from '../../lib/brand'

export { WF_BRAND as LEGAL_GOLD } from '../../lib/brand'
export const legalMaxW: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

export function LegalNav({ title }: { title?: string }) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(6,6,6,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div style={{ ...legalMaxW, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 12 }}>
          <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
          {title && (
            <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)', borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: 12 }}>
              {title}
            </span>
          )}
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/legal" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            Legal center
          </Link>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Home
          </Link>
        </div>
      </div>
    </nav>
  )
}

export function LegalFooterChrome() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '28px 24px', marginTop: 'auto' }}>
      <div style={{ ...legalMaxW, fontSize: 11, color: 'rgba(255,255,255,0.28)', textAlign: 'center', lineHeight: 1.6 }}>
        Copyright 2026 ESCT Holding Inc. All rights reserved. Watchman and related product names are products of ESCT Holding Inc.
      </div>
    </footer>
  )
}
