import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const HELP_GOLD = '#d4a843'
export const helpMaxW: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

export function HelpNav({ title }: { title?: string }) {
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
      <div style={{ ...helpMaxW, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 12 }}>
          <img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
          {title && (
            <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)', borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: 12 }}>
              {title}
            </span>
          )}
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/help" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            Help center
          </Link>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Home
          </Link>
        </div>
      </div>
    </nav>
  )
}

export function HelpFooterChrome() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '28px 24px', marginTop: 'auto' }}>
      <div style={{ ...helpMaxW, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
          © {new Date().getFullYear()} ESCT Holdings Inc.
        </span>
        <Link to="/help" style={{ fontSize: 12, color: HELP_GOLD, textDecoration: 'none' }}>
          Help center
        </Link>
      </div>
    </footer>
  )
}
