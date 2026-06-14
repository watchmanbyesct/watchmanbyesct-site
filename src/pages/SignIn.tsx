import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SUITE_PRODUCTS } from '../config/suiteProducts'
import { WF_BG_APP, WF_BRAND, WF_BRAND_LIGHT, brandRgba } from '../lib/brand'

export default function SignIn() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: WF_BG_APP,
        color: '#fff',
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(30,45,82,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,82,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <nav
        style={{
          position: 'relative',
          zIndex: 10,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(10,10,10,0.96)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
          </Link>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
        </div>
      </nav>

      <main style={{ position: 'relative', zIndex: 10, maxWidth: 1120, margin: '0 auto', padding: '72px 24px 96px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <img
            src="/watchman-brand.png"
            alt="Watchman by ESCT"
            style={{ width: 112, height: 112, objectFit: 'contain', margin: '0 auto 24px' }}
          />
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Select your platform
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginTop: 12, maxWidth: 520, marginInline: 'auto' }}>
            Sign in with your product-specific credentials. Each Watchman app uses the same tenant identity with module-gated access.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {SUITE_PRODUCTS.map((product) => (
            <article
              key={product.id}
              style={{
                background: '#111111',
                border: '1px solid #222222',
                borderRadius: 16,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <h2 style={{ fontSize: 17, fontWeight: 600 }}>{product.name.replace('Watchman ', '')}</h2>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: 999,
                    background: `${product.statusColor}15`,
                    color: product.statusColor,
                    border: `1px solid ${product.statusColor}30`,
                  }}
                >
                  {product.statusLabel}
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, flex: 1 }}>{product.tagline}</p>
              <a
                href={product.loginUrl}
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  color: WF_BG_APP,
                  background: WF_BRAND,
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = WF_BRAND_LIGHT
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = WF_BRAND
                }}
              >
                Sign in
              </a>
              {product.hasLandingPage ? (
                <Link
                  to={product.landingPath}
                  style={{
                    marginTop: 10,
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 500,
                    color: brandRgba(0.85),
                    textDecoration: 'none',
                  }}
                >
                  Learn more
                </Link>
              ) : null}
            </article>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 40, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
          Powered by Watchman by ESCT · Need access?{' '}
          <a href="/#demo" style={{ color: WF_BRAND, textDecoration: 'none' }}>
            Request a demo
          </a>
        </p>
      </main>
    </div>
  )
}
