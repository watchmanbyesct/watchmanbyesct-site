import React from 'react'
import { MapPin } from 'lucide-react'
import { WF_BRAND } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          <div>
            <SectionLabel>About the Maker</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: '#fff', marginBottom: 18, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Built by Owens F. Shepard{' '}
              <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>for</span>{' '}
              ESCT Holdings Inc.
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>
              Enterprise Security Consulting and Training Inc. is a NYS licensed security firm and certified training academy established in 1998. Owens F. Shepard, U.S. Army veteran, licensed investigator, and certified trainer, brings decades of field experience to the Watchman ecosystem.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
              Watchman was born from the operational reality of running a security company — the need for platforms built for compliance, training, and field operations from the inside out. Today the ecosystem spans an all-in-one Suite and specialized standalone products.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Rochester, NY, HQ', 'Kingston, NY', 'Manhattan, NYC'].map(loc => (
                <span key={loc} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 500, padding: '5px 11px', borderRadius: 999, background: 'rgba(201,160,48,0.05)', color: WF_BRAND, border: '1px solid rgba(201,160,48,0.18)' }}>
                  <MapPin size={10} /> {loc}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { value: '40+', label: 'Years in security' },
              { value: 'U.S. Army', label: 'Veteran' },
              { value: 'NYS', label: 'Licensed Private Investigator' },
              { value: 'Certified', label: 'Security Trainer' },
            ].map(s => (
              <Card key={s.label}>
                <p style={{ fontSize: 26, fontWeight: 700, color: WF_BRAND, marginBottom: 5 }}>{s.value}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
