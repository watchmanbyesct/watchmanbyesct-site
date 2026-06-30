import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { WF_BRAND, brandGradient } from '../lib/brand'

export default function HelpUnavailable() {
  useEffect(() => {
    document.title = 'Help Center · Watchman by ESCT'
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#060606', display: 'flex', flexDirection: 'column', fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      <header style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/">
          <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 32, width: 'auto' }} />
        </Link>
      </header>
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ maxWidth: 440, textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 16 }}>
            Help Center
          </p>
          <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
            Documentation is being updated
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 28 }}>
            We&apos;re refreshing help docs for the full Watchman ecosystem. Check back soon, or reach out if you need assistance now.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link to="/#demo" style={{ padding: '11px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#000', background: brandGradient, textDecoration: 'none' }}>
              Request a demo
            </Link>
            <Link to="/" style={{ padding: '11px 22px', borderRadius: 8, fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
              Back to home
            </Link>
          </div>
          <p style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.28)' }}>
            <a href="mailto:info@watchmanbyesct.com" style={{ color: WF_BRAND, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
          </p>
        </div>
      </main>
    </div>
  )
}
