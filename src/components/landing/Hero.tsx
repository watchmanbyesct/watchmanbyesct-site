import React from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { WATCHMAN_SUITE_LOGIN_URL } from '../../config/suite'
import { WF_BRAND } from '../../lib/brand'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '100px 24px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,160,48,0.1), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 820, position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(201,160,48,0.2)', background: 'rgba(201,160,48,0.05)', marginBottom: 28 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: WF_BRAND, display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND }}>
            The Watchman by ESCT Ecosystem
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', marginBottom: 20 }}>
          Security operations, training, and specialized platforms{' '}
          <span style={{ background: `linear-gradient(135deg,${WF_BRAND},#e8c06a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            built by practitioners.
          </span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', fontWeight: 400 }}>
          Choose <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Watchman Suite</strong> — an all-in-one platform with Launch, Academy, Operations, HR, Finance, and CRM — or deploy{' '}
          <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>standalone products</strong> that connect when you need them.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 64 }}>
          <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, textDecoration: 'none' }}>
            Request a Demo <ArrowRight size={16} />
          </a>
          <a href="#suite" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
            Explore Suite <ChevronRight size={16} />
          </a>
          <a href="#products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
            Browse Products <ChevronRight size={16} />
          </a>
        </div>
        <div style={{ marginTop: 40 }}>
          <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ width: 360, height: 360, objectFit: 'contain', display: 'block', margin: '0 auto', mixBlendMode: 'lighten' as React.CSSProperties['mixBlendMode'] }} />
        </div>
      </div>
    </section>
  )
}
