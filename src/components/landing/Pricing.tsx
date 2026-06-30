import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { WF_BRAND, brandRgba } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

const PLANS = [
  {
    name: 'Watchman Suite',
    price: 'Contact us',
    desc: 'Full platform — Launch, Academy, Operations, HR, Finance, and CRM with secure access by role.',
    features: [
      'All six Suite modules for your organization',
      'Launch public website and enrollment',
      'Operations mobile field app',
      'Client and trainee portals',
      'Multi-site with secure role access',
      'ESCT implementation support',
    ],
    cta: 'Request a Demo',
    href: '#demo',
    highlight: true,
  },
  {
    name: 'Standalone Product',
    price: 'Contact us',
    desc: 'Deploy a single Watchman product — Alert, Access, BedCheck, Facilities, ID, Contact, or Exchange.',
    features: [
      'Single product license',
      'Standalone deployment or Suite integration',
      'Native mobile apps where available',
      'Optional Suite connection later',
      'Implementation guidance',
      'Per-product support',
    ],
    cta: 'Request a Demo',
    href: '#demo',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Watchman Suite plus standalone products, custom integrations, dedicated support, and white-label options.',
    features: [
      'Everything in Watchman Suite',
      'Standalone products bundled',
      'Custom domains & branding',
      'Integration hub (payments, QuickBooks, payroll)',
      'Dedicated account manager',
      'SLA & priority support',
    ],
    cta: 'Talk to Sales',
    href: '#demo',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Pricing</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
            Flexible licensing for every need
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Suite, standalone, or enterprise — contact us for a quote tailored to your organization.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14, alignItems: 'start' }}>
          {PLANS.map(p => (
            <Card key={p.name} highlight={p.highlight} style={{ display: 'flex', flexDirection: 'column' }}>
              {p.highlight && <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 10 }}>Most Popular</p>}
              <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{p.name}</p>
              <p style={{ fontSize: 24, fontWeight: 700, color: p.highlight ? WF_BRAND : '#fff', marginBottom: 10 }}>{p.price}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{p.desc}</p>
              <ul style={{ display: 'grid', gap: 9, flex: 1, marginBottom: 22 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                    <Check size={13} color={WF_BRAND} style={{ flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a href={p.href} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                padding: '11px 18px', borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: 'none',
                ...(p.highlight ? { color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)` } : { color: WF_BRAND, background: brandRgba(0.07), border: `1px solid ${brandRgba(0.18)}` }),
              }}>
                {p.cta} <ArrowRight size={13} />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
