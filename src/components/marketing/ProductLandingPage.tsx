import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react'
import type { SuiteProduct } from '../../config/suiteProducts'
import { WF_BRAND, brandGradient, brandRgba } from '../../lib/brand'

export type LandingFeature = {
  icon: LucideIcon
  title: string
  desc: string
}

type ProductLandingPageProps = {
  product: SuiteProduct
  heroSubtitle: string
  heroBody: string
  sectionTitle: string
  sectionDesc: string
  features: LandingFeature[]
  closingTitle: string
  closingBody: string
  helpPath?: string
  primaryCtaLabel?: string
  closingCtaLabel?: string
  showSignIn?: boolean
}

function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(6,6,6,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
          <a
            href="/#demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 18px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              color: '#000',
              background: brandGradient,
              textDecoration: 'none',
            }}
          >
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        background: '#0d0d0d',
        border: `1px solid ${hov ? brandRgba(0.3) : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 24,
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? `0 12px 32px ${brandRgba(0.1)}` : 'none',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />
}

export default function ProductLandingPage({
  product,
  heroSubtitle,
  heroBody,
  sectionTitle,
  sectionDesc,
  features,
  closingTitle,
  closingBody,
  helpPath,
  primaryCtaLabel = 'Request a Demo',
  closingCtaLabel = 'Request Early Access',
  showSignIn = false,
}: ProductLandingPageProps) {
  React.useEffect(() => {
    document.title = `${product.name} · Watchman by ESCT`
  }, [product.name])

  return (
    <div
      style={{
        background: '#060606',
        minHeight: '100vh',
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        color: '#fff',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <Nav />

      <section
        style={{
          padding: '120px 24px 80px',
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${brandRgba(0.09)}, transparent 60%)`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '4px 12px',
              borderRadius: 999,
              border: `1px solid ${brandRgba(0.2)}`,
              background: brandRgba(0.05),
              marginBottom: 24,
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: product.statusColor, display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: product.statusColor }}>
              {product.statusLabel}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-0.025em', color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
            {product.name}
          </h1>
          <p style={{ fontSize: 20, fontWeight: 500, color: WF_BRAND, marginBottom: 20 }}>{heroSubtitle}</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 700, marginBottom: 36 }}>{heroBody}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={showSignIn ? product.loginUrl : '/#demo'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 28px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                color: '#000',
                background: brandGradient,
                textDecoration: 'none',
              }}
            >
              {primaryCtaLabel} <ArrowRight size={16} />
            </a>
            {helpPath ? (
              <Link
                to={helpPath}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 28px',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.85)',
                  border: `1px solid ${brandRgba(0.35)}`,
                  background: brandRgba(0.06),
                  textDecoration: 'none',
                }}
              >
                Help articles
              </Link>
            ) : null}
            {showSignIn ? (
              <Link
                to="/sign-in"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 28px',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                  textDecoration: 'none',
                }}
              >
                All platforms
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <Divider />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 12 }}>
            Core Capabilities
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            {sectionTitle}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, maxWidth: 640, lineHeight: 1.65 }}>{sectionDesc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {features.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: brandRgba(0.08),
                    border: `1px solid ${brandRgba(0.15)}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 14,
                  }}
                >
                  <Icon size={17} color={WF_BRAND} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
            {closingTitle}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 28 }}>{closingBody}</p>
          <a
            href={showSignIn ? '/#demo' : '/#demo'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              color: '#000',
              background: brandGradient,
              textDecoration: 'none',
            }}
          >
            {closingCtaLabel} <ArrowRight size={16} />
          </a>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>
            <CheckCircle2 size={13} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            Questions?{' '}
            <a href="mailto:info@watchmanbyesct.com" style={{ color: WF_BRAND, textDecoration: 'none' }}>
              info@watchmanbyesct.com
            </a>
          </p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
          Powered by Watchman by ESCT · © {new Date().getFullYear()} ESCT Holdings Inc.
        </div>
      </footer>
    </div>
  )
}
