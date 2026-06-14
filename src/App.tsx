import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import FieldAppDownload from './pages/FieldAppDownload'
import { WATCHMAN_SUITE_LOGIN_URL, WATCHMAN_ESCT_WEBSITE_URL } from './config/suite'
import { LIVE_SUITE_MODULES, ROADMAP_SUITE_MODULES, type SuiteModule } from './config/suiteModules'
import { WF_BRAND, brandGradient, brandRgba } from './lib/brand'

const HelpHome = lazy(() => import('./pages/help/HelpHome'))
const HelpProductIndex = lazy(() => import('./pages/help/HelpProductIndex'))
const HelpArticle = lazy(() => import('./pages/help/HelpArticle'))
import { isSupabaseConfigured, supabase } from './lib/supabase'
import {
  BookOpen, Radio, FileText, Users, BarChart3,
  Bell, Check, ArrowRight, ChevronRight, Menu, X,
  Building2, Church, Briefcase, MapPin, ExternalLink,
} from 'lucide-react'

const maxW = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url)
  }, [url])
  return (
    <div style={{ minHeight: '100vh', background: '#060606', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: WF_BRAND, fontSize: 14 }}>Redirecting to sign in…</span>
    </div>
  )
}

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
    { label: 'Modules', href: '#modules' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Help', href: '/help' },
    { label: 'Field app', href: '/field-app' },
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
          <a href={WATCHMAN_SUITE_LOGIN_URL} style={{ padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: WF_BRAND, textDecoration: 'none', border: `1px solid ${brandRgba(0.25)}` }}>
            Sign in
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#demo" className="hide-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, textDecoration: 'none' }}>
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
          <a href={WATCHMAN_SUITE_LOGIN_URL} onClick={() => setOpen(false)}
            style={{ display: 'block', padding: '11px 8px', fontSize: 15, fontWeight: 600, color: WF_BRAND, textDecoration: 'none' }}>
            Sign in to Suite
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '100px 24px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,160,48,0.1), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 760, position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 999, border: `1px solid rgba(201,160,48,0.2)`, background: 'rgba(201,160,48,0.05)', marginBottom: 28 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: WF_BRAND, display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: WF_BRAND }}>
            Built by security professionals
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', marginBottom: 20 }}>
          Security operations, <span style={{ background: `linear-gradient(135deg,${WF_BRAND},#e8c06a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>unified.</span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 36px', fontWeight: 400 }}>
          Watchman Suite is ESCT&apos;s multi-tenant platform for security organizations. <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Launch</strong> is your public front door; <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Academy, Operations, HR, and Finance</strong> are the staff portals your team opens after one sign-in.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 64 }}>
          <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, textDecoration: 'none' }}>
            Request a Demo <ArrowRight size={16} />
          </a>
          <a href={WATCHMAN_SUITE_LOGIN_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
            Sign in to Suite <ChevronRight size={16} />
          </a>
          <a href="#modules" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
            Explore Modules <ChevronRight size={16} />
          </a>
        </div>
        <div style={{ marginTop: 40 }}>
          <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ width: 400, height: 400, objectFit: 'contain', display: 'block', margin: '0 auto', mixBlendMode: 'lighten' as React.CSSProperties['mixBlendMode'] }} />
        </div>
      </div>
    </section>
  )
}

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
          <SectionLabel>Watchman Suite</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Everything your operation needs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 520, lineHeight: 1.65 }}>
            One platform replacing disconnected spreadsheets, paper logs, and legacy silos — with shared clients, people, sites, and financial records.
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

function ModuleCard({ module, roadmap = false }: { module: SuiteModule; roadmap?: boolean }) {
  return (
    <Card highlight={module.highlight} style={{ display: 'flex', flexDirection: 'column', opacity: roadmap ? 0.92 : 1 }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: `${module.statusColor}15`, color: module.statusColor, border: `1px solid ${module.statusColor}30`, display: 'inline-block', marginBottom: 20, width: 'fit-content' }}>
        {module.statusLabel}
      </span>
      <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>{module.name}</p>
      <p style={{ fontSize: 13, fontWeight: 500, color: WF_BRAND, marginBottom: 14 }}>{module.tagline}</p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 22 }}>{module.description}</p>
      <ul style={{ display: 'grid', gap: 9, flex: 1, marginBottom: 26 }}>
        {(roadmap ? module.features.slice(0, 4) : module.features).map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
            <Check size={13} color={WF_BRAND} style={{ flexShrink: 0 }} />{f}
          </li>
        ))}
      </ul>
      {roadmap ? (
        <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: WF_BRAND, background: brandRgba(0.07), border: `1px solid ${brandRgba(0.18)}`, textDecoration: 'none' }}>
          Request early access <ArrowRight size={14} />
        </a>
      ) : module.publicUrl ? (
        <div style={{ display: 'grid', gap: 10 }}>
          <a href={module.publicUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: '#000', background: brandGradient, textDecoration: 'none' }}>
            Visit public site <ExternalLink size={14} />
          </a>
          <a href={WATCHMAN_SUITE_LOGIN_URL}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: WF_BRAND, background: brandRgba(0.07), border: `1px solid ${brandRgba(0.18)}`, textDecoration: 'none' }}>
            Admin sign-in <ArrowRight size={14} />
          </a>
        </div>
      ) : (
        <a href={WATCHMAN_SUITE_LOGIN_URL}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, color: '#000', background: brandGradient, textDecoration: 'none' }}>
          Sign in to Suite <ArrowRight size={14} />
        </a>
      )}
    </Card>
  )
}

function SuiteModules() {
  return (
    <section id="modules" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Watchman Suite</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            Live modules
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 680, lineHeight: 1.7 }}>
            Launch is your public front door at{' '}
            <a href={WATCHMAN_ESCT_WEBSITE_URL} target="_blank" rel="noopener noreferrer" style={{ color: WF_BRAND, textDecoration: 'none' }}>esctroc.com</a>.
            Academy, Operations, HR, and Finance are staff portals inside Suite — one tenant, module-gated access after sign-in.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 18 }}>
          {LIVE_SUITE_MODULES.map(m => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  return (
    <section id="roadmap" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Roadmap</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            Coming Q4 2026
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 640, lineHeight: 1.7 }}>
            Additional Suite modules in development — module-gated per tenant, integrated with Operations and HR data.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18 }}>
          {ROADMAP_SUITE_MODULES.map(m => (
            <ModuleCard key={m.id} module={m} roadmap />
          ))}
        </div>
      </div>
    </section>
  )
}

const SEGMENTS = [
  { icon: Briefcase, title: 'Security Companies', desc: 'Built for NYS licensed security firms managing guards, sites, training, and compliance.' },
  { icon: Church, title: 'Faith-Based Organizations', desc: 'Mission-aware security programs designed with sensitivity and community in mind.' },
  { icon: Building2, title: 'Nonprofits & Human Services', desc: 'Scalable security and safety management for mission-driven organizations.' },
  { icon: Users, title: 'Corporate & Enterprise', desc: 'Multi-site security operations and training programs for larger organizations.' },
]

function WhoWeServe() {
  return (
    <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
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

const PLANS = [
  {
    name: 'Watchman Suite', price: 'Contact us',
    desc: 'Full multi-tenant platform — Launch public site, Academy, Operations, HR, and Finance with role-based access.',
    features: ['All live Suite modules for your tenant', 'Launch public website & enrollment', 'Operations mobile field app', 'Client & trainee portals', 'Multi-site and RBAC', 'ESCT implementation support'],
    cta: 'Request a Demo', href: '#demo', highlight: true,
  },
  {
    name: 'Enterprise', price: 'Custom',
    desc: 'Watchman Suite with roadmap modules, custom integrations, dedicated support, and white-label options.',
    features: ['Everything in Watchman Suite', 'Early access to Q4 2026 modules', 'Custom domains & branding', 'Integration hub (Stripe, QBO, payroll)', 'Dedicated account manager', 'SLA & priority support'],
    cta: 'Talk to Sales', href: '#demo', highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Pricing</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>One platform license. Contact us for a quote tailored to your organization.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 14, alignItems: 'start', maxWidth: 720, margin: '0 auto' }}>
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

function About() {
  return (
    <section id="about" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
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
              Enterprise Security Consulting and Training Inc. is a NYS licensed security firm and DCJS-certified training academy established in 1998. Owens F. Shepard, U.S. Army veteran, licensed investigator, and DCJS-certified trainer, brings decades of field experience to Watchman Suite.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
              Watchman Suite was born from the operational reality of running a security company — the need for a platform built for compliance, training, and field operations from the inside out.
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

function DemoForm() {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', organization: '', role: '', product_interest: 'suite', message: '' })
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
    const { error: dbErr } = await supabase.from('demo_requests').insert({ ...form, source: 'watchmanbyesct.com', status: 'new' })
    if (dbErr) { setError('Something went wrong. Please email info@watchmanbyesct.com directly.'); setLoading(false); return }
    setSuccess(true); setLoading(false)
  }

  return (
    <section id="demo" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,160,48,0.04), transparent)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 620, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>Request a demo</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Tell us about your organization and we&apos;ll schedule a personalized walkthrough.</p>
        </div>
        {success ? (
          <Card style={{ textAlign: 'center', padding: 48 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(201,160,48,0.08)', border: '1px solid rgba(201,160,48,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
              <Check size={22} color={WF_BRAND} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Request received</h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>We&apos;ll be in touch within one business day.</p>
          </Card>
        ) : (
          <Card style={{ padding: 28 }}>
            {error && <div style={{ padding: '11px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.18)', color: '#fca5a5', fontSize: 13, marginBottom: 18 }}>{error}</div>}
            <form onSubmit={submit} style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={labelBase}>First Name *</label><input style={inputBase} value={form.first_name} onChange={set('first_name')} required /></div>
                <div><label style={labelBase}>Last Name *</label><input style={inputBase} value={form.last_name} onChange={set('last_name')} required /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={labelBase}>Email *</label><input style={inputBase} type="email" value={form.email} onChange={set('email')} required /></div>
                <div><label style={labelBase}>Phone</label><input style={inputBase} type="tel" value={form.phone} onChange={set('phone')} /></div>
              </div>
              <div><label style={labelBase}>Organization *</label><input style={inputBase} value={form.organization} onChange={set('organization')} required /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={labelBase}>Your Role</label><input style={inputBase} value={form.role} onChange={set('role')} /></div>
                <div>
                  <label style={labelBase}>Interest</label>
                  <select style={inputBase} value={form.product_interest} onChange={set('product_interest')}>
                    <option value="suite">Watchman Suite (full platform)</option>
                    <option value="launch">Launch (public website)</option>
                    <option value="academy">Academy (training module)</option>
                    <option value="operations">Operations &amp; field app</option>
                    <option value="hr">HR &amp; recruiting</option>
                    <option value="finance">Finance &amp; billing</option>
                    <option value="bed-check">Bed Check (Q4 2026)</option>
                    <option value="alert">Alert (Q4 2026)</option>
                    <option value="access">Access (Q4 2026)</option>
                    <option value="facilities">Facilities (Q4 2026)</option>
                    <option value="id">ID (Q4 2026)</option>
                    <option value="enterprise">Enterprise / custom</option>
                  </select>
                </div>
              </div>
              <div><label style={labelBase}>Message</label><textarea style={{ ...inputBase, minHeight: 88, resize: 'vertical' }} value={form.message} onChange={set('message')} placeholder="Tell us what you're looking to solve..." /></div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'inherit' }}>
                {loading ? 'Submitting...' : 'Submit Request →'}
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
                We respond within one business day · <a href="mailto:info@watchmanbyesct.com" style={{ color: WF_BRAND, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
              </p>
            </form>
          </Card>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '36px 24px' }}>
      <div style={{ ...maxW, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <img src="/branding/watchman-by-esct.png" alt="Watchman by ESCT" style={{ height: 32, width: 'auto' }} />
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>Rochester · Kingston · Manhattan</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
          <Link to="/help" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Help center</Link>
          <a href={WATCHMAN_SUITE_LOGIN_URL} style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Sign in</a>
          <a href="/field-app" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Field app</a>
          <a href={WATCHMAN_ESCT_WEBSITE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Launch site</a>
          <a href="https://esctroc.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Privacy</a>
          <a href="https://esctroc.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
      <div style={{ ...maxW, marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: 11, color: 'rgba(255,255,255,0.18)', textAlign: 'center' }}>
        © {new Date().getFullYear()} ESCT Holdings Inc. All rights reserved. Developed by Owens F. Shepard. E.S.C.T. USPTO Reg. No. 8,075,647
      </div>
    </footer>
  )
}

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
      <SuiteModules />
      <Divider />
      <Roadmap />
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

function HelpRouteFallback() {
  return (
    <div style={{ minHeight: '100vh', background: '#060606', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <span style={{ color: WF_BRAND, fontSize: 14, fontWeight: 500 }}>Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<HelpRouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<ExternalRedirect url={WATCHMAN_SUITE_LOGIN_URL} />} />
        <Route path="/launch" element={<Navigate to="/#modules" replace />} />
        <Route path="/academy" element={<Navigate to="/#modules" replace />} />
        <Route path="/operations" element={<Navigate to="/#modules" replace />} />
        <Route path="/finance" element={<Navigate to="/#modules" replace />} />
        <Route path="/hr" element={<Navigate to="/#modules" replace />} />
        <Route path="/crm" element={<Navigate to="/#roadmap" replace />} />
        <Route path="/contact" element={<Navigate to="/#roadmap" replace />} />
        <Route path="/alert" element={<Navigate to="/#roadmap" replace />} />
        <Route path="/field-app" element={<FieldAppDownload />} />
        <Route path="/help" element={<HelpHome />} />
        <Route path="/help/:product" element={<HelpProductIndex />} />
        <Route path="/help/:product/:slug" element={<HelpArticle />} />
      </Routes>
    </Suspense>
  )
}
