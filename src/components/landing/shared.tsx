import React, { useState } from 'react'
import { WF_BRAND, brandRgba } from '../../lib/brand'

export const maxW = { maxWidth: 1200, margin: '0 auto' as const, padding: '0 24px' }

export const inputBase: React.CSSProperties = {
  width: '100%', padding: '11px 14px', borderRadius: 8,
  background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff', fontSize: 14, outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.15s',
}

export const labelBase: React.CSSProperties = {
  display: 'block', fontSize: 12, fontWeight: 500,
  color: 'rgba(255,255,255,0.5)', marginBottom: 6,
}

export function Card({ children, style = {}, highlight = false, id }: {
  children: React.ReactNode
  style?: React.CSSProperties
  highlight?: boolean
  id?: string
}) {
  const [hov, setHov] = useState(false)
  return (
    <div
      id={id}
      style={{
        background: '#0d0d0d',
        border: `1px solid ${hov || highlight ? brandRgba(0.3) : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 24,
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? `0 12px 32px ${brandRgba(0.12)}` : highlight ? `0 0 32px ${brandRgba(0.08)}` : 'none',
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 12 }}>
      {children}
    </p>
  )
}

export function Divider() {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />
}

export function LandingStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@600;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; color: #fff; background: #060606; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
      h1, h2, h3, h4 { font-family: 'Syne', 'DM Sans', sans-serif; }
      ::selection { background: rgba(201,160,48,0.22); }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #000; }
      ::-webkit-scrollbar-thumb { background: #6b5520; border-radius: 2px; }
      .hide-mobile { display: flex; }
      .show-mobile { display: none; }
      .about-grid { grid-template-columns: 1fr 1fr; }
      .demo-form-grid { grid-template-columns: 1fr 1fr; }
      @media (max-width: 768px) {
        .hide-mobile { display: none !important; }
        .show-mobile { display: block !important; }
        .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .demo-form-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  )
}
