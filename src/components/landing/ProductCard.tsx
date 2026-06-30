import React from 'react'
import { Check, ArrowRight, ExternalLink, Smartphone, FileDown } from 'lucide-react'
import { WATCHMAN_SUITE_LOGIN_URL } from '../../config/suite'
import { type EcosystemProduct, hasNativeApp } from '../../config/ecosystemProducts'
import { WF_BRAND, brandGradient, brandRgba } from '../../lib/brand'
import { Card } from './shared'

type ProductCardProps = {
  product: EcosystemProduct
  variant?: 'suite' | 'standalone' | 'community'
}

export default function ProductCard({ product, variant = 'suite' }: ProductCardProps) {
  const demoHref = `#demo?interest=${product.demoInterestKey}`

  return (
    <Card highlight={product.highlight} id={`product-${product.id}`} style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
      {product.screenshotUrl && (
        <div style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <img
            src={product.screenshotUrl}
            alt={`${product.name} screenshot`}
            loading="lazy"
            style={{ width: '100%', height: variant === 'suite' ? 200 : 180, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to bottom, transparent 55%, rgba(13,13,13,0.85) 100%)',
          }} />
          <p style={{
            position: 'absolute', left: 16, bottom: 12, margin: 0,
            fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND,
          }}>
            {product.name}
          </p>
        </div>
      )}

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: `${product.statusColor}15`, color: product.statusColor, border: `1px solid ${product.statusColor}30` }}>
            {product.statusLabel}
          </span>
          {variant === 'suite' && (
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: brandRgba(0.08), color: WF_BRAND, border: `1px solid ${brandRgba(0.2)}` }}>
              Included in Suite
            </span>
          )}
          {variant === 'standalone' && (
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
              Standalone
            </span>
          )}
          {product.integratesWithSuite && variant === 'standalone' && (
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: brandRgba(0.06), color: WF_BRAND, border: `1px solid ${brandRgba(0.15)}` }}>
              Connects to Suite
            </span>
          )}
          {hasNativeApp(product) && (
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: 'rgba(96,165,250,0.08)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Smartphone size={10} /> Mobile app
            </span>
          )}
        </div>

        <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>{product.name}</p>
        <p style={{ fontSize: 13, fontWeight: 500, color: WF_BRAND, marginBottom: 14 }}>{product.tagline}</p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{product.description}</p>

        {product.nativeAppNote && (
          <p style={{ fontSize: 12, color: 'rgba(96,165,250,0.85)', marginBottom: 16, lineHeight: 1.5, padding: '8px 12px', borderRadius: 8, background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)' }}>
            {product.nativeAppNote}
          </p>
        )}

        <ul style={{ display: 'grid', gap: 9, flex: 1, marginBottom: 22 }}>
          {product.features.slice(0, variant === 'standalone' ? 4 : 6).map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
              <Check size={13} color={WF_BRAND} style={{ flexShrink: 0 }} />{f}
            </li>
          ))}
        </ul>

        <div style={{ display: 'grid', gap: 10 }}>
          {product.publicUrl ? (
            <a href={product.publicUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: '#000', background: brandGradient, textDecoration: 'none' }}>
              {variant === 'community' ? 'Join free' : 'Visit public site'} <ExternalLink size={14} />
            </a>
          ) : variant === 'suite' ? (
            <a href={WATCHMAN_SUITE_LOGIN_URL}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: '#000', background: brandGradient, textDecoration: 'none' }}>
              Sign in to Suite <ArrowRight size={14} />
            </a>
          ) : (
            <a href={demoHref}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: '#000', background: brandGradient, textDecoration: 'none' }}>
              Request demo <ArrowRight size={14} />
            </a>
          )}

          {product.publicUrl && variant === 'suite' && (
            <a href={WATCHMAN_SUITE_LOGIN_URL}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: WF_BRAND, background: brandRgba(0.07), border: `1px solid ${brandRgba(0.18)}`, textDecoration: 'none' }}>
              Admin sign-in <ArrowRight size={14} />
            </a>
          )}

          {product.specSheetUrl && (
            <a href={product.specSheetUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '10px 20px', borderRadius: 8, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
              Download spec sheet <FileDown size={13} />
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
