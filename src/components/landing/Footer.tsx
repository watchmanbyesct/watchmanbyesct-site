import React from 'react'
import { Link } from 'react-router-dom'
import { WATCHMAN_SUITE_LOGIN_URL, WATCHMAN_ESCT_WEBSITE_URL } from '../../config/suite'
import { EXCHANGE_WEB_URL } from '../../config/ecosystemProducts'
import { HELP_CENTER_ENABLED } from '../../config/features'
import { maxW } from './shared'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '36px 24px' }}>
      <div style={{ ...maxW, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 32, width: 'auto' }} />
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>Rochester · Kingston · Manhattan</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
          {HELP_CENTER_ENABLED && (
            <Link to="/help" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Help center</Link>
          )}
          <a href={WATCHMAN_SUITE_LOGIN_URL} style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Sign in</a>
          <a href="/field-app" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Field app</a>
          <a href={WATCHMAN_ESCT_WEBSITE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Launch site</a>
          <a href={EXCHANGE_WEB_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Exchange</a>
          <Link to="/legal" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Legal</Link>
          <Link to="/legal/watchman-suite/privacy" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Privacy</Link>
          <Link to="/legal/watchman-suite/terms" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Terms</Link>
          <Link to="/legal/watchman-suite/eula" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>EULA</Link>
        </div>
      </div>
      <div style={{ ...maxW, marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: 11, color: 'rgba(255,255,255,0.18)', textAlign: 'center' }}>
        Copyright 2026 ESCT Holding Inc. All rights reserved. Watchman and related product names are products of ESCT Holding Inc.
      </div>
    </footer>
  )
}
