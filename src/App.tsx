import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  Shield, BookOpen, Radio, FileText, Users, BarChart3,
  Bell, Check, ArrowRight, ChevronRight, Menu, X,
  ExternalLink, Building2, Church, Briefcase, MapPin
} from 'lucide-react'

const supabase = createClient(
  'https://novqqqsyixugczzabfaz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdnFxcXN5aXh1Z2N6emFiZmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjMxMjgsImV4cCI6MjA1ODIzOTEyOH0.p9-VWqQVy1GXLE_b91Vf0OFTaGODGD_9rEoTmErpkJo'
)

// ── Shared styles ─────────────────────────────────────────────────────────────
const card = {
  background: 'linear-gradient(180deg,#0f0f0f,#0a0a0a)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 16,
  padding: 24,
  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
} as React.CSSProperties

const cardHover = {
  borderColor: 'rgba(217,181,74,0.35)',
  transform: 'translateY(-2px)',
  boxShadow: '0 14px 38px rgba(201,161,63,0.15)',
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ ...card, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#d9b54a', marginBottom: 8 }}>
      {children}
    </p>
  )
}

const sectionBase = { padding: 'clamp(80px,10vw,120px) 24px' }
const maxW = { maxWidth: 1280, margin: '0 auto' }
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: 12,
  background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)',
  color: '#fff', fontSize: 14, outline: 'none', fontFamily: 'inherit',
}
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 11, fontWeight: 900,
  textTransform: 'uppercase', letterSpacing: '0.08em',
  color: 'rgba(255,255,255,0.45)', marginBottom: 6,
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div style={{ ...maxW, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ padding: '8px 14px', borderRadius: 10, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="https://esctroc.com" target="_blank" rel="noopener" className="hide-mobile"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', padding: '8px 12px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
            <ExternalLink size={13} /> esctroc.com
          </a>
          <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', borderRadius: 10, fontSize: 13, fontWeight: 800, color: '#111', background: 'linear-gradient(135deg,#d9b54a,#9b7a2b)', textDecoration: 'none' }}>
            Request Demo
          </a>
          <button onClick={() => setOpen(!open)} className="show-mobile" style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: 8 }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '12px 24px 16px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px', borderRadius: 10, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(217,181,74,0.12), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 80% 80%, rgba(155,122,43,0.06), transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ ...maxW, position: 'relative' }}>
        {/* Logo image */}
        <img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 160, width: 'auto', objectFit: 'contain', marginBottom: 24, display: 'block' }} />

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(217,181,74,0.25)', background: 'rgba(217,181,74,0.06)', marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d9b54a', display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#d9b54a' }}>
            Built by security professionals
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: 24,
        }}>
          Security operations,{' '}
          <span style={{ background: 'linear-gradient(135deg,#d9b54a,#c4912a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            elevated.
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 560, margin: '0 0 40px', fontWeight: 300 }}>
          Watchman is a purpose-built platform for security companies, nonprofits, and faith-based organizations — combining training management, operations, and compliance in one unified system.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 64 }}>
          <a href="#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, fontWeight: 800, fontSize: 14, color: '#111', background: 'linear-gradient(135deg,#d9b54a,#9b7a2b)', textDecoration: 'none' }}>
            <ArrowRight size={16} /> Request a Demo
          </a>
          <a href="#products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
            Explore Products <ChevronRight size={16} />
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, maxWidth: 600, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.05)' }}>
          {[
            { value: '1998', label: 'Founded' },
            { value: 'NYS', label: 'Licensed & DCJS' },
            { value: '3', label: 'Office Locations' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px 16px', textAlign: 'center', background: 'linear-gradient(180deg,#0f0f0f,#0a0a0a)' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, color: '#d9b54a', marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Platform ──────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: BookOpen, title: 'Training Management', desc: 'DCJS-compliant course enrollment, scheduling, attendance, and certificate generation — end to end.' },
  { icon: Radio, title: 'Operations Control', desc: 'Shift scheduling, post orders, incident reporting, and real-time guard management from a single dashboard.' },
  { icon: FileText, title: 'Compliance & Records', desc: 'Automated documentation, audit trails, and regulatory reporting aligned to NYS requirements.' },
  { icon: Users, title: 'Multi-Tenant Ready', desc: 'Each client organization gets their own isolated workspace with role-based access control.' },
  { icon: Bell, title: 'Notifications & Alerts', desc: 'SMS and email alerts for training reminders, incident escalation, and operational updates.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Executive dashboards, KPI tracking, and exportable reports for leadership and compliance.' },
]

function Platform() {
  return (
    <section id="platform" style={{ ...sectionBase, position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(217,181,74,0.05), transparent)', pointerEvents: 'none' }} />
      <div style={{ ...maxW, position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Kicker>The Platform</Kicker>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Everything your operation needs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            One platform replacing disconnected spreadsheets, paper logs, and legacy software.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(217,181,74,0.1)', border: '1px solid rgba(217,181,74,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={18} color="#d9b54a" />
              </div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{title}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Products ──────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    badge: 'Live', badgeColor: '#22c55e',
    name: 'Watchman Launch',
    tagline: 'Training Enrollment Platform',
    desc: 'The complete training management solution for security guard academies. Manage courses, enrollments, payments, and certifications in one place.',
    features: ['DCJS-compliant course management', 'Online enrollment with Stripe', 'Automated email confirmations', 'Student records and certificates', 'Full admin CMS', 'Multi-role access control'],
    cta: 'Visit Watchman Launch', href: 'https://esctroc.com', external: true,
  },
  {
    badge: 'In Development', badgeColor: '#d9b54a',
    name: 'Watchman Operations',
    tagline: 'Security Operations Platform',
    desc: 'Real-time security operations management for guard companies. Shift scheduling, post orders, incident tracking, and client reporting built for the field.',
    features: ['Guard scheduling and deployment', 'Post orders and site management', 'Incident reporting and escalation', 'Client portal and reporting', 'Mobile-ready for field use', 'Multi-site and multi-client'],
    cta: 'Request Early Access', href: '#demo', external: false,
  },
]

function Products() {
  return (
    <section id="products" style={{ ...sectionBase, background: 'linear-gradient(180deg,#050505,#080808)' }}>
      <div style={maxW}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Kicker>Products</Kicker>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Two platforms, one mission
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(420px,1fr))', gap: 20 }}>
          {PRODUCTS.map(p => (
            <Card key={p.name} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, background: `${p.badgeColor}18`, color: p.badgeColor, border: `1px solid ${p.badgeColor}35` }}>
                  {p.badge}
                </span>
              </div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>{p.name}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#d9b54a', marginBottom: 16 }}>{p.tagline}</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>
              <ul style={{ display: 'grid', gap: 10, flex: 1, marginBottom: 28 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                    <Check size={14} color="#d9b54a" style={{ flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a href={p.href} target={p.external ? '_blank' : undefined} rel="noopener"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 20px', borderRadius: 12, fontWeight: 800, fontSize: 13, color: '#111', background: 'linear-gradient(135deg,#d9b54a,#9b7a2b)', textDecoration: 'none' }}>
                {p.cta} <ArrowRight size={14} />
              </a>
            </Card>
          ))}
        </div>
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
    <section style={sectionBase}>
      <div style={maxW}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Kicker>Who We Serve</Kicker>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Built for organizations that protect people
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
          {SEGMENTS.map(({ icon: Icon, title, desc }) => (
            <Card key={title} style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(217,181,74,0.08)', border: '1px solid rgba(217,181,74,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Icon size={20} color="#d9b54a" />
              </div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{title}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</p>
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
    name: 'Launch',
    price: 'Contact us',
    desc: 'Watchman Launch training enrollment for security academies and organizations.',
    features: ['Unlimited course sessions', 'Online enrollment & payments', 'Student records', 'Email notifications', 'Admin dashboard', 'DCJS compliance tools'],
    cta: 'Get Started', href: '#demo', highlight: false,
  },
  {
    name: 'Operations',
    price: 'Coming Soon',
    desc: 'Watchman Operations for security guard companies and multi-site deployments.',
    features: ['Guard scheduling', 'Post order management', 'Incident reporting', 'Client portal', 'Mobile field access', 'Multi-site support'],
    cta: 'Request Early Access', href: '#demo', highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Full Watchman suite with custom integrations, dedicated support, and white-label options.',
    features: ['Everything in both plans', 'Custom integrations', 'White-label options', 'Dedicated account manager', 'SLA guarantee', 'On-site training'],
    cta: 'Talk to Sales', href: '#demo', highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" style={{ ...sectionBase, background: 'linear-gradient(180deg,#080808,#050505)' }}>
      <div style={maxW}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Kicker>Pricing</Kicker>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15 }}>Contact us for a quote tailored to your organization's size and needs.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16, alignItems: 'start' }}>
          {PLANS.map(p => (
            <Card key={p.name} style={{
              display: 'flex', flexDirection: 'column',
              ...(p.highlight ? { borderColor: 'rgba(217,181,74,0.3)', boxShadow: '0 0 40px rgba(217,181,74,0.08)' } : {}),
            }}>
              {p.highlight && (
                <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d9b54a', marginBottom: 12 }}>Most Popular</p>
              )}
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{p.name}</p>
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800, color: p.highlight ? '#d9b54a' : '#fff', marginBottom: 12 }}>{p.price}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{p.desc}</p>
              <ul style={{ display: 'grid', gap: 10, flex: 1, marginBottom: 24 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                    <Check size={14} color="#d9b54a" style={{ flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a href={p.href} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '12px 20px', borderRadius: 12, fontWeight: 800, fontSize: 13, textDecoration: 'none',
                ...(p.highlight
                  ? { color: '#111', background: 'linear-gradient(135deg,#d9b54a,#9b7a2b)' }
                  : { color: '#d9b54a', background: 'rgba(217,181,74,0.08)', border: '1px solid rgba(217,181,74,0.2)' }),
              }}>
                {p.cta} <ArrowRight size={14} />
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
    <section id="about" style={sectionBase}>
      <div style={maxW}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          <div>
            <Kicker>About the Maker</Kicker>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Built by Enterprise Security Consulting and Training Inc.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 16 }}>
              ESCT is a New York State licensed security firm and DCJS-certified training academy established in 1998. Founded by Owens F. Shepard — U.S. Army veteran, licensed investigator, and DCJS-certified trainer — ESCT brings decades of field experience to everything it builds.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
              Watchman was born from the operational reality of running a security company. We built what we needed and we're making it available to organizations like yours.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Rochester, NY — HQ', 'Kingston, NY', 'Manhattan, NYC'].map(loc => (
                <span key={loc} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '6px 12px', borderRadius: 999, background: 'rgba(217,181,74,0.06)', color: '#d9b54a', border: '1px solid rgba(217,181,74,0.2)' }}>
                  <MapPin size={11} /> {loc}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { value: '26+', label: 'Years in security' },
              { value: '281222', label: 'DCJS School Code' },
              { value: 'NYS', label: 'Licensed firm' },
              { value: '3', label: 'Office locations' },
            ].map(s => (
              <Card key={s.label}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, color: '#d9b54a', marginBottom: 6 }}>{s.value}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>{s.label}</p>
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
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', organization: '', role: '', product_interest: 'both', message: '' })
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
    setLoading(true); setError('')
    const { error: dbErr } = await supabase.from('demo_requests').insert({ ...form, source: 'watchmanbyesct.com', status: 'new' })
    if (dbErr) { setError('Something went wrong. Please email oshepard@esctroc.com directly.'); setLoading(false); return }
    setSuccess(true); setLoading(false)
  }

  return (
    <section id="demo" style={{ ...sectionBase, background: 'linear-gradient(180deg,#050505,#080808)', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(217,181,74,0.05), transparent)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Kicker>Get Started</Kicker>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Request a demo
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15 }}>
            Tell us about your organization and we'll set up a personalized walkthrough.
          </p>
        </div>

        {success ? (
          <Card style={{ textAlign: 'center', padding: 48 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(217,181,74,0.1)', border: '1px solid rgba(217,181,74,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Check size={24} color="#d9b54a" />
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Request received</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>We'll be in touch within one business day to schedule your demo.</p>
          </Card>
        ) : (
          <Card style={{ padding: 32 }}>
            {error && (
              <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5', fontSize: 13, marginBottom: 20 }}>
                {error}
              </div>
            )}
            <form onSubmit={submit} style={{ display: 'grid', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>First Name *</label><input style={inputStyle} value={form.first_name} onChange={set('first_name')} placeholder="Owens" required /></div>
                <div><label style={labelStyle}>Last Name *</label><input style={inputStyle} value={form.last_name} onChange={set('last_name')} placeholder="Shepard" required /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Email *</label><input style={inputStyle} type="email" value={form.email} onChange={set('email')} placeholder="you@org.com" required /></div>
                <div><label style={labelStyle}>Phone</label><input style={inputStyle} type="tel" value={form.phone} onChange={set('phone')} placeholder="(585) 484-7745" /></div>
              </div>
              <div><label style={labelStyle}>Organization *</label><input style={inputStyle} value={form.organization} onChange={set('organization')} placeholder="Your organization name" required /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Your Role</label><input style={inputStyle} value={form.role} onChange={set('role')} placeholder="CEO, Director, etc." /></div>
                <div>
                  <label style={labelStyle}>Product Interest</label>
                  <select style={inputStyle} value={form.product_interest} onChange={set('product_interest')}>
                    <option value="both">Both products</option>
                    <option value="launch">Watchman Launch</option>
                    <option value="operations">Watchman Operations</option>
                  </select>
                </div>
              </div>
              <div><label style={labelStyle}>Message</label><textarea style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }} value={form.message} onChange={set('message')} placeholder="Tell us what you're looking to solve..." /></div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', borderRadius: 12, fontWeight: 800, fontSize: 14, color: '#111', background: 'linear-gradient(135deg,#d9b54a,#9b7a2b)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'Syne, sans-serif' }}>
                {loading ? 'Submitting...' : 'Request Demo →'}
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                We respond within one business day. Or email <a href="mailto:oshepard@esctroc.com" style={{ color: '#d9b54a' }}>oshepard@esctroc.com</a>
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
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '40px 24px' }}>
      <div style={{ ...maxW, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#d9b54a,#9b7a2b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={14} color="#000" strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Watchman by ESCT</span>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Rochester · Kingston · Manhattan</div>
        <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>esctroc.com</a>
          <a href="https://esctroc.com/privacy" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy</a>
          <a href="https://esctroc.com/terms" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
      <div style={{ ...maxW, marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: 11, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        © {new Date().getFullYear()} Enterprise Security Consulting and Training Inc. All rights reserved. E.S.C.T. USPTO Reg. No. 8,075,647
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', system-ui, sans-serif; color: #fff; background: #050505; overflow-x: hidden; }
        ::selection { background: rgba(217,181,74,0.25); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #9b7a2b; border-radius: 2px; }
        .hide-mobile { display: flex; }
        .show-mobile { display: none; }
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <Platform />
      <Products />
      <WhoWeServe />
      <Pricing />
      <About />
      <DemoForm />
      <Footer />
    </div>
  )
}
