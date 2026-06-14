import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import WatchmanLaunch from './pages/WatchmanLaunch'
import WatchmanOperations from './pages/WatchmanOperations'
import WatchmanFinance from './pages/WatchmanFinance'
import WatchmanHR from './pages/WatchmanHR'
import FieldAppDownload from './pages/FieldAppDownload'
import SignIn from './pages/SignIn'
import WatchmanCRM from './pages/WatchmanCRM'
import WatchmanContact from './pages/WatchmanContact'
import WatchmanAlert from './pages/WatchmanAlert'
import { CORE_SUITE_PRODUCTS, EXTENDED_SUITE_PRODUCTS, SUITE_PRODUCTS } from './config/suiteProducts'
import { WF_BRAND, WF_BRAND_DARK, WF_BG_PAGE, brandGradient, brandRgba } from './lib/brand'

const HelpHome = lazy(() => import('./pages/help/HelpHome'))
const HelpProductIndex = lazy(() => import('./pages/help/HelpProductIndex'))
const HelpArticle = lazy(() => import('./pages/help/HelpArticle'))
import { isSupabaseConfigured, supabase } from './lib/supabase'
import {
  Shield, BookOpen, Radio, FileText, Users, BarChart3,
  Bell, Check, ArrowRight, ChevronRight, Menu, X,
  ExternalLink, Building2, Church, Briefcase, MapPin
} from 'lucide-react'
const maxW = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

// ── Shared card ───────────────────────────────────────────────────────────────
function Card({ children, style = {}, highlight = false }: { children: React.ReactNode; style?: React.CSSProperties; highlight?: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        background: '#0d0d0d',
        border: `1px solid ${hov || highlight ? brandRgba(0.3) : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 24,
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? `0 12px 32px ${brandRgba(0.12)}` : highlight ? `0 0 32px ${brandRgba(0.08)}` : 'none',
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 12 }}>
      {children}
    </p>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />
}

const inputBase: React.CSSProperties = {
  width: '100%', padding: '11px 14px', borderRadius: 8,
  background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff', fontSize: 14, outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.15s',
}
const labelBase: React.CSSProperties = {
  display: 'block', fontSize: 12, fontWeight: 500,
  color: 'rgba(255,255,255,0.5)', marginBottom: 6,
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Help', href: '/help' },
    { label: 'Field app', href: '/field-app' },
    { label: 'Sign in', href: '/sign-in' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(6,6,6,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 0.25s',
    }}>
      <div style={{ ...maxW, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ padding: '7px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

          <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, textDecoration: 'none' }}>
            Request Demo
          </a>
          <button onClick={() => setOpen(!open)} className="show-mobile" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: 8 }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: '#060606', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '8px 24px 16px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '11px 8px', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '100px 24px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,160,48,0.1), transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 760, position: 'relative' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 999, border: `1px solid rgba(201,160,48,0.2)`, background: 'rgba(201,160,48,0.05)', marginBottom: 28 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: WF_BRAND, display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND }}>
            Built by security professionals
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          color: '#fff',
          marginBottom: 20,
        }}>
          Security operations, <span style={{ background: `linear-gradient(135deg,${WF_BRAND},#e8c06a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>elevated.</span>
        </h1>

        {/* Subhead */}
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 36px', fontWeight: 400 }}>
          Watchman is a purpose-built suite for security companies, nonprofits, and faith-based organizations—combining training, people operations, field execution, finance, and emergency response in one unified platform.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 64 }}>
          <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, textDecoration: 'none' }}>
            Request a Demo <ArrowRight size={16} />
          </a>
          <a href="#products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
            Explore Products <ChevronRight size={16} />
          </a>
        </div>

        {/* Logo below CTAs */}
        <div style={{ marginTop: 40 }}>
          <img
            src="/branding/watchman-by-esct.png"
            alt="Watchman by ESCT"
            style={{ width: 400, height: 400, objectFit: 'contain', display: 'block', margin: '0 auto', mixBlendMode: 'lighten' as any }}
          />
        </div>

      </div>
    </section>
  )
}

// ── Platform ──────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: BookOpen, title: 'Training Management', desc: 'DCJS-compliant course enrollment, scheduling, attendance, and certificate generation, end to end.' },
  { icon: Radio, title: 'Operations Control', desc: 'Shift scheduling, post orders, incident reporting, and real-time guard management from one dashboard.' },
  { icon: FileText, title: 'Compliance & Records', desc: 'Automated documentation, audit trails, and regulatory reporting aligned to NYS requirements.' },
  { icon: Users, title: 'Multi-Tenant Ready', desc: 'Each client organization gets an isolated workspace with role-based access control.' },
  { icon: Bell, title: 'Notifications & Alerts', desc: 'SMS and email alerts for training reminders, incident escalation, and operational updates.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Executive dashboards, KPI tracking, and exportable reports for leadership and compliance.' },
]

function Platform() {
  return (
    <section id="platform" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>The Platform</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Everything your operation needs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 460, lineHeight: 1.65 }}>
            One platform replacing disconnected spreadsheets, paper logs, and legacy software.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(201,160,48,0.08)', border: '1px solid rgba(201,160,48,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon size={17} color={WF_BRAND} />
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Products ──────────────────────────────────────────────────────────────────
function Products() {
  const toCard = (p: (typeof SUITE_PRODUCTS)[number]) => ({
    badge: p.statusLabel,
    badgeColor: p.statusColor,
    name: p.name,
    tagline: p.tagline,
    desc: p.description,
    features: p.features,
    cta: 'Learn More',
    href: p.landingPath,
    external: false,
    highlight: p.highlight ?? false,
  })

  const core = CORE_SUITE_PRODUCTS.map(toCard)
  const extended = EXTENDED_SUITE_PRODUCTS.map(toCard)

  return (
    <section id="products" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Products</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            One suite, seven platforms
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 720, lineHeight: 1.7 }}>
            Each Watchman product is designed to stand on its own—yet they share one tenant identity, module entitlements, and integration contracts so training, people, operations, finance, and emergency response reinforce the same standards from the first application to the final invoice.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 18 }}>
          {core.map(p => (
            <Card key={p.name} highlight={p.highlight} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: `${p.badgeColor}15`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`, display: 'inline-block', marginBottom: 20 }}>
                {p.badge}
              </span>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>{p.name}</p>
              <p style={{ fontSize: 13, fontWeight: 500, color: WF_BRAND, marginBottom: 14 }}>{p.tagline}</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 22 }}>{p.desc}</p>
              <ul style={{ display: 'grid', gap: 9, flex: 1, marginBottom: 26 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                    <Check size={13} color={WF_BRAND} style={{ flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a href={p.href} target={p.external ? '_blank' : undefined} rel="noopener"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: '#000', background: brandGradient, textDecoration: 'none' }}>
                {p.cta} <ArrowRight size={14} />
              </a>
            </Card>
          ))}
        </div>

        {extended.length > 0 ? (
          <div style={{ marginTop: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 16 }}>
              Extended suite
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 18 }}>
              {extended.map(p => (
                <Card key={p.name} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: `${p.badgeColor}15`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`, display: 'inline-block', marginBottom: 20 }}>
                    {p.badge}
                  </span>
                  <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>{p.name}</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: WF_BRAND, marginBottom: 14 }}>{p.tagline}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 22 }}>{p.desc}</p>
                  <ul style={{ display: 'grid', gap: 9, flex: 1, marginBottom: 26 }}>
                    {p.features.slice(0, 4).map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                        <Check size={13} color={WF_BRAND} style={{ flexShrink: 0 }} />{f}
                      </li>
                    ))}
                  </ul>
                  <a href={p.href}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: WF_BRAND, background: brandRgba(0.07), border: `1px solid ${brandRgba(0.18)}`, textDecoration: 'none' }}>
                    {p.cta} <ArrowRight size={14} />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

// ── Who We Serve ──────────────────────────────────────────────────────────────
const SEGMENTS = [
  { icon: Briefcase, title: 'Security Companies', desc: 'Built for NYS licensed security firms managing guards, sites, training, and compliance.' },
  { icon: Church, title: 'Faith-Based Organizations', desc: 'Mission-aware security programs designed with sensitivity and community in mind.' },
  { icon: Building2, title: 'Nonprofits & Human Services', desc: 'Scalable security and safety management for mission-driven organizations.' },
  { icon: Users, title: 'Corporate & Enterprise', desc: 'Multi-site security operations and training programs for larger organizations.' },
]

function WhoWeServe() {
  return (
    <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Who We Serve</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            Built for organizations that protect people and assets
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
          {SEGMENTS.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(201,160,48,0.08)', border: '1px solid rgba(201,160,48,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon size={18} color={WF_BRAND} />
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Launch', price: 'Contact us',
    desc: 'Watchman Launch training enrollment for security academies and organizations.',
    features: ['Unlimited course sessions', 'Online enrollment & payments', 'Student records', 'Email notifications', 'Admin dashboard', 'DCJS compliance tools'],
    cta: 'Get Started', href: '#demo', highlight: false,
  },
  {
    name: 'HR', price: 'Contact us',
    desc: 'Watchman HR for recruiting, onboarding, and workforce records tied to training and deployment.',
    features: ['Careers and applicant pipeline', 'References and background workflows', 'Onboarding and credential readiness', 'Employee records with governed access', 'Hiring analytics', 'Connected to Launch and Operations'],
    cta: 'Request Demo', href: '#demo', highlight: false,
  },
  {
    name: 'Operations', price: 'Contact us',
    desc: 'Watchman Operations for security guard companies and multi-site deployments.',
    features: ['Guard scheduling', 'Post order management', 'Incident reporting', 'Client portal', 'Mobile field access', 'Multi-site support'],
    cta: 'Request Demo', href: '#demo', highlight: true,
  },
  {
    name: 'Finance', price: 'Contact us',
    desc: 'Watchman Finance for billing workflows, reconciliation, payroll readiness, and financial visibility.',
    features: ['Client invoicing workflows', 'Payment tracking and reconciliation', 'Payroll readiness support', 'Labor and service cost visibility', 'Financial exports and reporting', 'Role-based finance controls'],
    cta: 'Request Demo', href: '#demo', highlight: false,
  },
  {
    name: 'Enterprise', price: 'Custom',
    desc: 'Full Watchman suite with CRM, Contact, Alert, custom integrations, dedicated support, and white-label options.',
    features: ['Everything in Launch, HR, Operations, and Finance', 'CRM, Contact, and Alert modules', 'Custom integrations', 'White-label options', 'Dedicated account manager', 'SLA guarantee'],
    cta: 'Talk to Sales', href: '#demo', highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Pricing</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Contact us for a quote tailored to your organization's needs.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: 14, alignItems: 'start', maxWidth: 960, margin: '0 auto' }}>
          {PLANS.map(p => (
            <Card key={p.name} highlight={p.highlight} style={{ display: 'flex', flexDirection: 'column' }}>
              {p.highlight && (
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND, marginBottom: 10 }}>Most Popular</p>
              )}
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
                ...(p.highlight
                  ? { color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)` }
                  : { color: WF_BRAND, background: 'rgba(201,160,48,0.07)', border: `1px solid rgba(201,160,48,0.18)` }),
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

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
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
              Enterprise Security Consulting and Training Inc. is a NYS licensed security firm and DCJS-certified training academy established in 1998. Owens F. Shepard, U.S. Army veteran, licensed investigator, and DCJS-certified trainer, brings decades of field experience to every product ESCT builds.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
              Watchman was born from the operational reality of running a security company, the need for a platform built for compliance, training, and field operations from the inside out.
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
              { value: 'DCJS', label: 'Certified Trainer' },
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

// ── Demo Form ─────────────────────────────────────────────────────────────────
function DemoForm() {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', organization: '', role: '', product_interest: 'all', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.first_name || !form.last_name || !form.email || !form.organization) {
      setError('Please fill in all required fields.'); return
    }
    if (!isSupabaseConfigured()) {
      setError('Demo requests are temporarily unavailable. Please email info@watchmanbyesct.com directly.')
      return
    }
    setLoading(true); setError('')
    const { error: dbErr } = await supabase.from('demo_requests').insert({
      ...form,
      source: 'watchmanbyesct.com',
      status: 'new',
    })
    if (dbErr) { setError('Something went wrong. Please email info@watchmanbyesct.com directly.'); setLoading(false); return }
    setSuccess(true); setLoading(false)
  }

  return (
    <section id="demo" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,160,48,0.04), transparent)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 620, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
            Request a demo
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
            Tell us about your organization and we'll schedule a personalized walkthrough.
          </p>
        </div>

        {success ? (
          <Card style={{ textAlign: 'center', padding: 48 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(201,160,48,0.08)', border: '1px solid rgba(201,160,48,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
              <Check size={22} color={WF_BRAND} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Request received</h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>We'll be in touch within one business day.</p>
          </Card>
        ) : (
          <Card style={{ padding: 28 }}>
            {error && (
              <div style={{ padding: '11px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.18)', color: '#fca5a5', fontSize: 13, marginBottom: 18 }}>
                {error}
              </div>
            )}
            <form onSubmit={submit} style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={labelBase}>First Name *</label><input style={inputBase} value={form.first_name} onChange={set('first_name')} placeholder="Owens" required /></div>
                <div><label style={labelBase}>Last Name *</label><input style={inputBase} value={form.last_name} onChange={set('last_name')} placeholder="Shepard" required /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={labelBase}>Email *</label><input style={inputBase} type="email" value={form.email} onChange={set('email')} placeholder="you@org.com" required /></div>
                <div><label style={labelBase}>Phone</label><input style={inputBase} type="tel" value={form.phone} onChange={set('phone')} placeholder="(585) 484-7745" /></div>
              </div>
              <div><label style={labelBase}>Organization *</label><input style={inputBase} value={form.organization} onChange={set('organization')} placeholder="Your organization name" required /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={labelBase}>Your Role</label><input style={inputBase} value={form.role} onChange={set('role')} placeholder="CEO, Director, etc." /></div>
                <div>
                  <label style={labelBase}>Product Interest</label>
                  <select style={inputBase} value={form.product_interest} onChange={set('product_interest')}>
                    <option value="all">All products</option>
                    <option value="launch">Watchman Launch</option>
                    <option value="operations">Watchman Operations</option>
                    <option value="hr">Watchman HR</option>
                    <option value="finance">Watchman Finance</option>
                    <option value="crm">Watchman CRM</option>
                    <option value="contact">Watchman Contact</option>
                    <option value="alert">Watchman Alert</option>
                    <option value="enterprise">Full suite / Enterprise</option>
                  </select>
                </div>
              </div>
              <div><label style={labelBase}>Message</label><textarea style={{ ...inputBase, minHeight: 88, resize: 'vertical' }} value={form.message} onChange={set('message')} placeholder="Tell us what you're looking to solve..." /></div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'inherit' }}>
                {loading ? 'Submitting...' : 'Submit Request →'}
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
                We respond within one business day ·{' '}
                <a href="mailto:info@watchmanbyesct.com" style={{ color: WF_BRAND, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
              </p>
            </form>
          </Card>
        )}
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '36px 24px' }}>
      <div style={{ ...maxW, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 32, width: 'auto' }} />
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>Rochester · Kingston · Manhattan</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
          <Link to="/sign-in" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Sign in</Link>
          <Link to="/help" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Help center</Link>
          <a href="/field-app" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Field app</a>
          <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>esctroc.com</a>
          <a href="https://esctroc.com/privacy" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Privacy</a>
          <a href="https://esctroc.com/terms" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
      <div style={{ ...maxW, marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: 11, color: 'rgba(255,255,255,0.18)', textAlign: 'center' }}>
        Powered by Watchman by ESCT · © {new Date().getFullYear()} ESCT Holdings Inc. All rights reserved. Developed by Owens F. Shepard. E.S.C.T. USPTO Reg. No. 8,075,647
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
function Home() {
  return (
    <div style={{ background: '#060606', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; color: #fff; background: #060606; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4 { font-family: 'Syne', 'DM Sans', sans-serif; }
        ::selection { background: rgba(201,160,48,0.22); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #6b5520; border-radius: 2px; }
        .hide-mobile { display: flex; }
        .show-mobile { display: none; }
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <Divider />
      <Platform />
      <Divider />
      <Products />
      <Divider />
      <WhoWeServe />
      <Divider />
      <Pricing />
      <Divider />
      <About />
      <Divider />
      <DemoForm />
      <Footer />
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
function HelpRouteFallback() {
  return (
    <div style={{
      minHeight: '100vh', background: '#060606', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <span style={{ color: WF_BRAND, fontSize: 14, fontWeight: 500 }}>Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<HelpRouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<WatchmanLaunch />} />
        <Route path="/operations" element={<WatchmanOperations />} />
        <Route path="/finance" element={<WatchmanFinance />} />
        <Route path="/hr" element={<WatchmanHR />} />
        <Route path="/crm" element={<WatchmanCRM />} />
        <Route path="/contact" element={<WatchmanContact />} />
        <Route path="/alert" element={<WatchmanAlert />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/field-app" element={<FieldAppDownload />} />
        <Route path="/help" element={<HelpHome />} />
        <Route path="/help/:product" element={<HelpProductIndex />} />
        <Route path="/help/:product/:slug" element={<HelpArticle />} />
      </Routes>
    </Suspense>
  )
}

