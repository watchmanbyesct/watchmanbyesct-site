import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WATCHMAN_SUITE_LOGIN_URL } from '../../config/suite'
import { HELP_CENTER_ENABLED } from '../../config/features'
import { WF_BRAND, brandRgba } from '../../lib/brand'
import { maxW } from './shared'

const links = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Suite', href: '#suite' },
  { label: 'Products', href: '#products' },
  { label: 'Mobile Apps', href: '#mobile' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  ...(HELP_CENTER_ENABLED ? [{ label: 'Help', href: '/help' }] : []),
  { label: 'Field app', href: '/field-app' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(6,6,6,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 0.25s',
    }}>
      <div style={{ ...maxW, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ padding: '7px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
              {l.label}
            </a>
          ))}
          <a href={WATCHMAN_SUITE_LOGIN_URL} style={{ padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: WF_BRAND, textDecoration: 'none', border: `1px solid ${brandRgba(0.25)}` }}>
            Sign in
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#demo" className="hide-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, textDecoration: 'none' }}>
            Request Demo
          </a>
          <button onClick={() => setOpen(!open)} className="show-mobile" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: 8 }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: '#060606', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '8px 24px 16px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '11px 8px', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <a href={WATCHMAN_SUITE_LOGIN_URL} onClick={() => setOpen(false)}
            style={{ display: 'block', padding: '11px 8px', fontSize: 15, fontWeight: 600, color: WF_BRAND, textDecoration: 'none' }}>
            Sign in to Suite
          </a>
        </div>
      )}
    </nav>
  )
}
