import React, { useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  Shield, Zap, Users, BarChart3, BookOpen, Lock,
  ChevronRight, Menu, X, Check, ArrowRight,
  Building2, Church, Briefcase, Star, ExternalLink,
  Radio, Clock, FileText, Bell
} from 'lucide-react'

const supabase = createClient(
  'https://novqqqsyixugczzabfaz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdnFxcXN5aXh1Z2N6emFiZmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjMxMjgsImV4cCI6MjA1ODIzOTEyOH0.p9-VWqQVy1GXLE_b91Vf0OFTaGODGD_9rEoTmErpkJo'
)

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.12)]' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)' }}>
            <Shield className="w-4 h-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-white" style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', letterSpacing: '-0.01em' }}>
            Watchman <span style={{ color: 'var(--gold)', fontWeight: 500 }}>by ESCT</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://esctroc.com" target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border transition-all" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
            <ExternalLink className="w-3.5 h-3.5" /> esctroc.com
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-black transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)' }}>
            Request Demo
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg" style={{ color: 'var(--text-muted)' }}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-1" style={{ background: '#000', borderColor: 'var(--border)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.18), transparent 65%)'
      }} />

      {/* Corner accents */}
      <div className="absolute top-20 left-10 w-px h-32 opacity-20" style={{ background: 'linear-gradient(180deg,transparent,#c9a84c,transparent)' }} />
      <div className="absolute top-20 right-10 w-px h-32 opacity-20" style={{ background: 'linear-gradient(180deg,transparent,#c9a84c,transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="fade-up fade-up-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-semibold uppercase tracking-widest" style={{ borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)', color: 'var(--gold)' }}>
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--gold)' }} />
          Built by security professionals, for security professionals
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-2 text-glow" style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: '1.5rem',
        }}>
          Security operations,{' '}
          <span style={{ background: 'linear-gradient(135deg,#c9a84c,#e4c46e,#c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            elevated.
          </span>
        </h1>

        {/* Subhead */}
        <p className="fade-up fade-up-delay-3 max-w-2xl mx-auto mb-10 leading-relaxed" style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-muted)',
          fontWeight: 300,
        }}>
          Watchman is a purpose-built platform for security companies, nonprofits, and faith-based organizations — combining training management, operations, and compliance in one unified system.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-black transition-all hover:opacity-90 hover:scale-105" style={{ background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)', fontSize: '15px' }}>
            Request a Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium transition-all border" style={{ borderColor: 'rgba(201,168,76,0.25)', color: 'var(--text-muted)', fontSize: '15px', background: 'rgba(255,255,255,0.03)' }}>
            Explore Products <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-px max-w-2xl mx-auto rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)', background: 'var(--border)' }}>
          {[
            { value: '1998', label: 'Founded' },
            { value: 'NYS', label: 'Licensed & DCJS Certified' },
            { value: '3', label: 'Office Locations' },
          ].map(s => (
            <div key={s.label} className="py-5 px-4 text-center" style={{ background: 'var(--surface)' }}>
              <div className="text-2xl font-bold mb-0.5" style={{ fontFamily: 'Syne', color: 'var(--gold)' }}>{s.value}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Platform ──────────────────────────────────────────────────────────────────
function Platform() {
  const features = [
    { icon: BookOpen, title: 'Training Management', desc: 'DCJS-compliant course enrollment, scheduling, attendance tracking, and certificate generation — end to end.' },
    { icon: Radio, title: 'Operations Control', desc: 'Shift scheduling, post orders, incident reporting, and real-time guard management from a single dashboard.' },
    { icon: FileText, title: 'Compliance & Records', desc: 'Automated documentation, audit trails, and regulatory reporting aligned to NYS requirements.' },
    { icon: Users, title: 'Multi-Tenant Ready', desc: 'Built for scale. Each client organization gets their own isolated workspace with role-based access.' },
    { icon: Bell, title: 'Notifications & Alerts', desc: 'SMS and email alerts for training reminders, incident escalation, and operational updates.' },
    { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Executive dashboards, KPI tracking, and exportable reports for leadership and compliance teams.' },
  ]

  return (
    <section id="platform" className="py-32 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.06), transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>The Platform</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Everything your operation needs
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Watchman replaces disconnected spreadsheets, paper logs, and legacy software with a unified platform designed specifically for security operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="gradient-border rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: 'Syne', fontSize: '1rem', color: '#fff' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Products ──────────────────────────────────────────────────────────────────
function Products() {
  const products = [
    {
      badge: 'Live',
      badgeColor: '#22c55e',
      name: 'Watchman Launch',
      tagline: 'Training Enrollment Platform',
      desc: 'The complete training management solution for security guard academies and organizations. Manage courses, sessions, enrollments, payments, and certifications — all in one place.',
      features: [
        'DCJS-compliant course management',
        'Online enrollment with Stripe payments',
        'Automated email confirmations',
        'Student records and certificates',
        'Admin dashboard with full CMS',
        'Multi-role access control',
      ],
      cta: 'Visit Watchman Launch',
      ctaHref: 'https://esctroc.com',
      color: '#c9a84c',
    },
    {
      badge: 'In Development',
      badgeColor: '#c9a84c',
      name: 'Watchman Operations',
      tagline: 'Security Operations Platform',
      desc: 'Real-time security operations management for guard companies. Shift scheduling, post orders, incident tracking, and client reporting — built for the field.',
      features: [
        'Guard scheduling and deployment',
        'Post orders and site management',
        'Incident reporting and escalation',
        'Client portal and reporting',
        'Mobile-ready for field use',
        'Multi-site and multi-client support',
      ],
      cta: 'Request Early Access',
      ctaHref: '#demo',
      color: '#c9a84c',
    },
  ]

  return (
    <section id="products" className="py-32 relative" style={{ background: 'linear-gradient(180deg, #000, #080808, #000)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Products</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff' }}>
            Two platforms, one mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {products.map(p => (
            <div key={p.name} className="rounded-2xl border p-8 flex flex-col" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${p.badgeColor}18`, color: p.badgeColor, border: `1px solid ${p.badgeColor}40` }}>
                  {p.badge}
                </span>
              </div>
              <h3 className="font-bold mb-1" style={{ fontFamily: 'Syne', fontSize: '1.5rem', color: '#fff' }}>{p.name}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--gold)' }}>{p.tagline}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={p.ctaHref} target={p.ctaHref.startsWith('http') ? '_blank' : undefined} rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)', color: '#000' }}>
                {p.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Who We Serve ──────────────────────────────────────────────────────────────
function WhoWeServe() {
  const segments = [
    { icon: Briefcase, title: 'Security Companies', desc: 'Built for NYS licensed security firms managing guards, sites, training, and compliance.' },
    { icon: Church, title: 'Faith-Based Organizations', desc: 'Mission-aware security programs designed with sensitivity and community in mind.' },
    { icon: Building2, title: 'Nonprofits & Human Services', desc: 'Affordable, scalable security and safety management for mission-driven organizations.' },
    { icon: Users, title: 'Corporate & Enterprise', desc: 'Multi-site security operations and training programs for larger organizations.' },
  ]

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Who We Serve</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff' }}>
            Built for organizations that protect people
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 border text-center group hover:border-[rgba(201,168,76,0.4)] transition-all duration-300" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: 'Syne', fontSize: '0.95rem', color: '#fff' }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: 'Launch',
      price: 'Contact us',
      period: '',
      desc: 'Watchman Launch training enrollment platform for security academies and organizations.',
      features: ['Unlimited course sessions', 'Online enrollment & payments', 'Student records', 'Email notifications', 'Admin dashboard', 'DCJS compliance tools'],
      cta: 'Get Started',
      href: '#demo',
      highlight: false,
    },
    {
      name: 'Operations',
      price: 'Coming Soon',
      period: '',
      desc: 'Watchman Operations platform for security guard companies and multi-site deployments.',
      features: ['Guard scheduling', 'Post order management', 'Incident reporting', 'Client portal', 'Mobile field access', 'Multi-site support'],
      cta: 'Request Early Access',
      href: '#demo',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Full Watchman suite with custom integrations, dedicated support, and white-label options.',
      features: ['Everything in both plans', 'Custom integrations', 'White-label options', 'Dedicated account manager', 'SLA guarantee', 'On-site training'],
      cta: 'Talk to Sales',
      href: '#demo',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-32" style={{ background: 'linear-gradient(180deg,#000,#080808,#000)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Pricing</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Contact us for a quote tailored to your organization's size and needs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className={`rounded-2xl p-8 flex flex-col ${p.highlight ? 'glow-gold' : ''}`} style={{
              background: p.highlight ? 'linear-gradient(135deg,rgba(201,168,76,0.1),rgba(155,122,43,0.05))' : 'var(--surface)',
              border: `1px solid ${p.highlight ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
            }}>
              {p.highlight && (
                <div className="text-xs font-bold uppercase tracking-widest mb-4 text-center py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}>
                  Most Popular
                </div>
              )}
              <h3 className="font-bold mb-1" style={{ fontFamily: 'Syne', fontSize: '1.25rem', color: '#fff' }}>{p.name}</h3>
              <div className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne', color: 'var(--gold)' }}>{p.price}</div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold)' }} />{f}
                  </li>
                ))}
              </ul>
              <a href={p.href} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90" style={p.highlight ? { background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)', color: '#000' } : { background: 'rgba(201,168,76,0.08)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.25)' }}>
                {p.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(201,168,76,0.06), transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>About the Maker</p>
            <h2 className="mb-6" style={{ fontFamily: 'Syne', fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>
              Built by Enterprise Security Consulting and Training Inc.
            </h2>
            <p className="mb-5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              ESCT is a New York State licensed security firm and DCJS-certified training academy established in 1998. Founded by Owens F. Shepard, ESCT has spent over two decades building security programs, training security professionals, and protecting organizations across New York State.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Watchman was born from the operational reality of running a security company — the need for a platform that understands compliance, training, and field operations from the inside out. We built what we needed, and we're making it available to organizations like yours.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Rochester, NY — HQ', 'Kingston, NY', 'Manhattan, NYC'].map(loc => (
                <span key={loc} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '26+', label: 'Years in security' },
              { value: '281222', label: 'DCJS School Code' },
              { value: 'NYS', label: 'Licensed firm' },
              { value: '3', label: 'Office locations' },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-6 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Syne', color: 'var(--gold)' }}>{s.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Demo Form ─────────────────────────────────────────────────────────────────
function DemoForm() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '',
    organization: '', role: '', product_interest: 'both', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.first_name || !form.last_name || !form.email || !form.organization) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    setError('')
    const { error: dbErr } = await supabase.from('demo_requests').insert({
      ...form,
      source: 'watchmanbyesct.com',
      status: 'new',
    })
    if (dbErr) { setError('Something went wrong. Please email oshepard@esctroc.com directly.'); setLoading(false); return }
    setSuccess(true)
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(201,168,76,0.15)',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'DM Sans, sans-serif',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: 'rgba(245,240,232,0.5)',
    marginBottom: '6px',
  }

  return (
    <section id="demo" className="py-32 relative">
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06), transparent)' }} />

      <div className="relative max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Get Started</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Request a demo
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Tell us about your organization and we'll set up a personalized walkthrough of the Watchman platform.</p>
        </div>

        {success ? (
          <div className="rounded-2xl p-10 text-center border" style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.3)' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(201,168,76,0.1)' }}>
              <Check className="w-8 h-8" style={{ color: 'var(--gold)' }} />
            </div>
            <h3 className="font-bold text-white text-xl mb-2" style={{ fontFamily: 'Syne' }}>Request received</h3>
            <p style={{ color: 'var(--text-muted)' }}>We'll be in touch within one business day to schedule your demo.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-2xl p-8 border space-y-5" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            {error && (
              <div className="px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5' }}>
                {error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>First Name *</label>
                <input style={inputStyle} value={form.first_name} onChange={set('first_name')} placeholder="Owens" required
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
              </div>
              <div>
                <label style={labelStyle}>Last Name *</label>
                <input style={inputStyle} value={form.last_name} onChange={set('last_name')} placeholder="Shepard" required
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input style={inputStyle} type="email" value={form.email} onChange={set('email')} placeholder="you@organization.com" required
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input style={inputStyle} type="tel" value={form.phone} onChange={set('phone')} placeholder="(585) 484-7745"
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Organization *</label>
              <input style={inputStyle} value={form.organization} onChange={set('organization')} placeholder="Your company or organization name" required
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Your Role</label>
                <input style={inputStyle} value={form.role} onChange={set('role')} placeholder="CEO, Operations Manager, etc."
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
              </div>
              <div>
                <label style={labelStyle}>Product Interest</label>
                <select style={inputStyle} value={form.product_interest} onChange={set('product_interest')}>
                  <option value="both">Both products</option>
                  <option value="launch">Watchman Launch (Training)</option>
                  <option value="operations">Watchman Operations</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} value={form.message} onChange={set('message')} placeholder="Tell us about your organization and what you're looking to solve..."
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'} />
            </div>

            <button type="submit" disabled={loading} className="w-full py-4 rounded-xl font-bold text-black text-sm transition-all hover:opacity-90 disabled:opacity-60" style={{ background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)', fontFamily: 'Syne' }}>
              {loading ? 'Submitting...' : 'Request Demo →'}
            </button>

            <p className="text-center text-xs" style={{ color: 'var(--text-muted)' }}>
              We typically respond within one business day. You can also reach us directly at{' '}
              <a href="mailto:oshepard@esctroc.com" style={{ color: 'var(--gold)' }}>oshepard@esctroc.com</a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--border)', background: '#000' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#c9a84c,#9b7a2b)' }}>
              <Shield className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
            </div>
            <span className="font-bold" style={{ fontFamily: 'Syne', fontSize: '14px', color: 'rgba(245,240,232,0.7)' }}>
              Watchman by ESCT
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs" style={{ color: 'var(--text-muted)' }}>
            <span>Rochester, NY · Kingston, NY · Manhattan, NYC</span>
          </div>

          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
            <a href="https://esctroc.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">esctroc.com</a>
            <span>·</span>
            <a href="https://esctroc.com/privacy" target="_blank" rel="noopener" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="https://esctroc.com/terms" target="_blank" rel="noopener" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Enterprise Security Consulting and Training Inc. All rights reserved. E.S.C.T. USPTO Reg. No. 8,075,647
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
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
