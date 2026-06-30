import React from 'react'
import { Smartphone, Apple, Play } from 'lucide-react'
import { NATIVE_APPS } from '../../config/ecosystemProducts'
import { WF_BRAND, brandGradient, brandRgba } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

function PlatformBadge({ platform }: { platform: 'ios' | 'android' | 'pwa' }) {
  const labels = { ios: 'iPhone', android: 'Android', pwa: 'Web app' }
  const icons = { ios: Apple, android: Play, pwa: Smartphone }
  const Icon = icons[platform]
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <Icon size={10} /> {labels[platform]}
    </span>
  )
}

export default function NativeApps() {
  return (
    <section id="mobile" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Mobile Apps</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            Field-ready mobile experiences
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 640, lineHeight: 1.7 }}>
            Most Suite modules run in the browser. These mobile apps extend field and on-the-go workflows — guards on patrol, welfare rounds, emergency response, and professional networking.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
          {NATIVE_APPS.map(app => (
            <Card key={app.id}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Smartphone size={18} color="#60a5fa" />
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{app.name}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 14 }}>{app.purpose}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {app.platforms.map(p => <PlatformBadge key={p} platform={p} />)}
              </div>
              {app.href && (
                <a href={app.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 8, fontWeight: 600, fontSize: 12, color: app.href.startsWith('/') ? '#000' : WF_BRAND, background: app.href.startsWith('/') ? brandGradient : brandRgba(0.07), border: app.href.startsWith('/') ? 'none' : `1px solid ${brandRgba(0.18)}`, textDecoration: 'none' }}>
                  {app.href.startsWith('/') ? 'Install field app' : 'Visit Exchange'}
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
