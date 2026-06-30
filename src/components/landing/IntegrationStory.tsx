import React from 'react'
import { ArrowRight } from 'lucide-react'
import { WF_BRAND } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

const DECISIONS = [
  {
    question: 'Need full security company operations?',
    answer: 'Watchman Suite',
    detail: 'Launch, Academy, Operations, HR, Finance, and CRM — one sign-in, shared data.',
    href: '#suite',
  },
  {
    question: 'Need welfare rounds for residential care?',
    answer: 'BedCheck standalone',
    detail: 'Verified welfare rounds with compliance reports — independent of guard operations.',
    href: '#product-bed-check',
  },
  {
    question: 'Need emergency mass notification?',
    answer: 'Alert standalone',
    detail: 'Enterprise critical event management with optional Operations integration.',
    href: '#product-alert',
  },
  {
    question: 'Building a security career network?',
    answer: 'Exchange',
    detail: 'Free professional network for the safety and security industry.',
    href: '#product-exchange',
  },
]

export default function IntegrationStory() {
  return (
    <section id="how-it-fits" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>How It Fits Together</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            Choose your path
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 640, lineHeight: 1.7, marginBottom: 32 }}>
            Watchman Suite modules share one organization workspace — clients, people, sites, and financial records flow between Launch, Operations, HR, and Finance. Standalone products like BedCheck, Alert, and ID deploy independently and connect when you need them.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 14, marginBottom: 40 }}>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 10 }}>Watchman Suite</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              One login · Flexible module access · Launch → Academy → HR → Operations → Finance → CRM
            </p>
          </Card>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>Standalone Products</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              Standalone deployment · Optional Suite integration · Alert, Access, BedCheck, Facilities, ID, Contact
            </p>
          </Card>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 10 }}>Community</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              Exchange — free professional network · Separate auth · Future Academy badge sync
            </p>
          </Card>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
          {DECISIONS.map(d => (
            <a key={d.answer} href={d.href} style={{ textDecoration: 'none' }}>
              <Card>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{d.question}</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: WF_BRAND, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                  → {d.answer} <ArrowRight size={14} />
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{d.detail}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
