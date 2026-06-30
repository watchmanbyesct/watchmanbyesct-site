import React from 'react'
import { ArrowRight } from 'lucide-react'
import { WATCHMAN_ESCT_WEBSITE_URL } from '../../config/suite'
import { SUITE_MODULES } from '../../config/ecosystemProducts'
import { WF_BRAND, brandRgba } from '../../lib/brand'
import ProductCard from './ProductCard'
import { maxW, SectionLabel } from './shared'

const INTEGRATION_FLOW = [
  { step: 'Launch', desc: 'Prospects enroll in training and apply for careers' },
  { step: 'Academy', desc: 'Trainees complete courses and earn certificates' },
  { step: 'HR', desc: 'New hires onboard with credentials and personnel records' },
  { step: 'Operations', desc: 'Guards deploy to sites with schedules and post orders' },
  { step: 'Finance', desc: 'Time and contracts flow to invoicing and payroll' },
  { step: 'CRM', desc: 'Sales pipeline and client portal tie it all together' },
]

export default function SuiteModules() {
  return (
    <section id="suite" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Watchman Suite</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            All-in-one platform modules
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 720, lineHeight: 1.7, marginBottom: 24 }}>
            One platform. One sign-in. Turn modules on as you need them. Launch is your public front door at{' '}
            <a href={WATCHMAN_ESCT_WEBSITE_URL} target="_blank" rel="noopener noreferrer" style={{ color: WF_BRAND, textDecoration: 'none' }}>esctroc.com</a>
            {' '}— Academy, Operations, HR, Finance, and CRM are staff portals inside Suite.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0, padding: '16px 20px', borderRadius: 10, background: brandRgba(0.04), border: `1px solid ${brandRgba(0.12)}`, overflowX: 'auto' }}>
            {INTEGRATION_FLOW.map((item, i) => (
              <React.Fragment key={item.step}>
                <div style={{ minWidth: 100, padding: '4px 8px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: WF_BRAND, marginBottom: 2 }}>{item.step}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4, maxWidth: 120 }}>{item.desc}</p>
                </div>
                {i < INTEGRATION_FLOW.length - 1 && (
                  <ArrowRight size={14} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0, margin: '0 4px' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 18 }}>
          {SUITE_MODULES.map(m => (
            <ProductCard key={m.id} product={m} variant="suite" />
          ))}
        </div>
      </div>
    </section>
  )
}
