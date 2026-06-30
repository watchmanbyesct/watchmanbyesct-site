import React, { useState } from 'react'
import {
  Globe, BookOpen, Radio, Users, DollarSign, Briefcase,
  Contact, Bell, KeyRound, BedDouble, Building2, BadgeCheck, Share2,
  Smartphone, type LucideIcon,
} from 'lucide-react'
import {
  ECOSYSTEM_PRODUCTS,
  hasNativeApp,
  type EcosystemProduct,
  type ProductCategory,
} from '../../config/ecosystemProducts'
import { WF_BRAND, brandRgba } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

type Filter = 'all' | ProductCategory | 'mobile'

const ICONS: Record<string, LucideIcon> = {
  launch: Globe,
  academy: BookOpen,
  operations: Radio,
  hr: Users,
  finance: DollarSign,
  crm: Briefcase,
  contact: Contact,
  alert: Bell,
  access: KeyRound,
  'bed-check': BedDouble,
  facilities: Building2,
  id: BadgeCheck,
  exchange: Share2,
}

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'suite-module', label: 'Suite Modules' },
  { id: 'standalone', label: 'Standalone' },
  { id: 'community', label: 'Community' },
  { id: 'mobile', label: 'Mobile Apps' },
]

function scrollToProduct(product: EcosystemProduct) {
  const el = document.getElementById(`product-${product.id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  } else {
    document.getElementById(product.sectionAnchor)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function EcosystemMap() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = ECOSYSTEM_PRODUCTS.filter(p => {
    if (filter === 'all') return true
    if (filter === 'mobile') return hasNativeApp(p)
    return p.category === filter
  })

  return (
    <section id="ecosystem" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 36 }}>
          <SectionLabel>Ecosystem</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            One ecosystem, two paths
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 640, lineHeight: 1.7 }}>
            <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Watchman Suite</strong> is the all-in-one platform — one sign-in, shared data across modules.
            <strong style={{ color: 'rgba(255,255,255,0.65)' }}> Standalone products</strong> deploy independently and connect optionally.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
          {FILTERS.map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              style={{
                padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                border: `1px solid ${filter === f.id ? brandRgba(0.4) : 'rgba(255,255,255,0.1)'}`,
                background: filter === f.id ? brandRgba(0.12) : 'transparent',
                color: filter === f.id ? WF_BRAND : 'rgba(255,255,255,0.55)',
                fontFamily: 'inherit',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {filtered.map(product => {
            const Icon = ICONS[product.id] ?? Globe
            const isSuite = product.category === 'suite-module'
            const isCommunity = product.category === 'community'
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => scrollToProduct(product)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
              >
                <Card style={{ padding: 16, height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: brandRgba(0.08), border: `1px solid ${brandRgba(0.15)}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={15} color={WF_BRAND} />
                    </div>
                    {hasNativeApp(product) && <Smartphone size={12} color={WF_BRAND} style={{ opacity: 0.7 }} />}
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{product.name}</p>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: isSuite ? WF_BRAND : isCommunity ? '#60a5fa' : 'rgba(255,255,255,0.35)' }}>
                    {isSuite ? 'Suite' : isCommunity ? 'Community' : 'Standalone'}
                  </p>
                </Card>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
