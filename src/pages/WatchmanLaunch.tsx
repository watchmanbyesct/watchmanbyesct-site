import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, CreditCard, Mail, ClipboardList, ToggleLeft, Calendar, ChevronRight, ArrowRight, ArrowLeft, BarChart3, Lock, Bell, Shield } from 'lucide-react'

const GOLD = '#d4a843'
const maxW = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hov, setHov] = useState(false)
  return (
    <div style={{ background: '#0d0d0d', borderRadius: 12, padding: 24, border: `1px solid ${hov ? 'rgba(212,168,67,0.3)' : 'rgba(255,255,255,0.08)'}`, transition: 'all 0.2s', transform: hov ? 'translateY(-2px)' : 'none', boxShadow: hov ? '0 12px 32px rgba(212,168,67,0.1)' : 'none', ...style }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</div>
  )
}

function SL({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>{children}</p>
}

function Divider() { return <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} /> }

function DashboardMockup() {
  const stats = [{ label: 'Enrollments', value: '142' }, { label: 'Sessions', value: '8' }, { label: 'Certificates', value: '96' }, { label: 'Revenue MTD', value: '$18,400' }]
  const sessions = [{ course: '8-Hour Pre-Assignment', date: 'Apr 5, 2026', status: 'Open' }, { course: 'Annual Refresher', date: 'Apr 12, 2026', status: 'Almost Full' }, { course: 'OJT 16-Hour', date: 'Apr 19, 2026', status: 'Open' }]
  return (
    <div style={{ background: '#0a0a0a', borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
      <div style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
        {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <span style={{ marginLeft: 10, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Watchman Launch — Admin Dashboard</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr' }}>
        <div style={{ background: '#0d0d0d', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '14px 0', minHeight: 280 }}>
          {[{ icon: BarChart3, label: 'Dashboard', active: true }, { icon: Calendar, label: 'Sessions' }, { icon: Users, label: 'Enrollments' }, { icon: Award, label: 'Certificates' }, { icon: BookOpen, label: 'Courses' }, { icon: CreditCard, label: 'Payments' }].map(({ icon: Icon, label, active }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', fontSize: 11, fontWeight: active ? 600 : 400, color: active ? GOLD : 'rgba(255,255,255,0.35)', background: active ? 'rgba(212,168,67,0.06)' : 'transparent', borderRight: active ? `2px solid ${GOLD}` : '2px solid transparent' }}>
              <Icon size={12} color={active ? GOLD : 'rgba(255,255,255,0.28)'} />{label}
            </div>
          ))}
        </div>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8, marginBottom: 12 }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: '#111', borderRadius: 8, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: GOLD, marginBottom: 2 }}>{s.value}</div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#111', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ fontSize: 10, fontWeight: 600, color: '#fff' }}>Upcoming Sessions</span></div>
            {sessions.map((s, i) => (
              <div key={i} style={{ padding: '8px 12px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : undefined, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#fff', marginBottom: 1 }}>{s.course}</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.32)' }}>{s.date}</div>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: s.status === 'Open' ? 'rgba(34,197,94,0.12)' : 'rgba(212,168,67,0.12)', color: s.status === 'Open' ? '#22c55e' : GOLD }}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  { icon: BookOpen, title: 'Course Management', desc: 'Create DCJS-compliant courses with custom schedules, pricing, and capacity limits. Supports all NYS mandated training types.' },
  { icon: Calendar, title: 'Session Scheduling', desc: 'Schedule sessions, set locations, manage instructors, and track enrollment counts in real time.' },
  { icon: Users, title: 'Student Enrollment', desc: 'Collect DCJS-required student data including name, DOB, SSN last 4, and contact details securely.' },
  { icon: CreditCard, title: 'Stripe Payments', desc: 'Accept payments online with support for coupon codes, enrollment transfers, and pricing overrides.' },
  { icon: Award, title: 'Certificate Generation', desc: 'Automatically generate branded completion certificates upon course completion.' },
  { icon: ClipboardList, title: 'Attendance Tracking', desc: 'Record and manage session attendance. Export records for DCJS compliance and audits.' },
  { icon: Mail, title: 'Email Notifications', desc: 'Automated confirmations, session reminders, and completion notifications via SendGrid.' },
  { icon: Lock, title: 'Role-Based Access', desc: 'Multi-role admin system with granular permissions for instructors, supervisors, and admins.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real-time KPIs: enrollments, revenue tracking, fill rates, and certificate reports.' },
  { icon: Bell, title: 'Announcements', desc: 'Manage popup messages, maintenance mode, and platform-wide notifications from the admin panel.' },
  { icon: ToggleLeft, title: 'Feature Toggles', desc: 'Enable or disable blog, careers, workshops, and membership features independently.' },
  { icon: Shield, title: 'DCJS Compliance', desc: 'Built for NYS DCJS. School Code 281222. Supports Pre-Assignment, OJT, Annual Refresher, and more.' },
]

const STEPS = [
  { num: '01', title: 'Set up your academy', desc: 'Create courses, configure session types, set pricing, and connect Stripe. Ready for enrollments in minutes.' },
  { num: '02', title: 'Open enrollment', desc: 'Students enroll online, complete required DCJS registration fields, and pay securely. Confirmations sent automatically.' },
  { num: '03', title: 'Manage sessions', desc: 'Track attendance, manage rosters, handle changes, and communicate with enrolled students.' },
  { num: '04', title: 'Issue certificates', desc: 'Generate and distribute branded certificates on completion. All records stored and exportable for DCJS.' },
]

export default function WatchmanLaunch() {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    window.scrollTo(0, 0)
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ background: '#060606', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;color:#fff;background:#060606;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        ::selection{background:rgba(212,168,67,0.22)}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#000}::-webkit-scrollbar-thumb{background:#6b5520;border-radius:2px}
        .hgrid{display:grid;grid-template-columns:1fr 1.2fr;gap:60px;align-items:center}
        @media(max-width:900px){.hgrid{grid-template-columns:1fr !important}}
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(6,6,6,0.94)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent', transition: 'all 0.25s' }}>
        <div style={{ ...maxW, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none' }}><img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 36 }} /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}><ArrowLeft size={14} /> Back</Link>
            <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
              Visit Platform <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '100px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 55% at 20% 50%, rgba(212,168,67,0.08), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ ...maxW, width: '100%', position: 'relative' }}>
          <div className="hgrid">
            <div>
              <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)', marginBottom: 20 }}>Live Now</span>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', marginBottom: 20, lineHeight: 1.1, letterSpacing: '-0.025em' }}>
                Watchman <span style={{ background: `linear-gradient(135deg,${GOLD},#e8c06a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Launch</span>
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>The complete training enrollment and management platform for NYS security guard academies.</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: 32 }}>Manage DCJS-compliant courses, handle enrollments and payments, issue certificates, and track student records from one purpose-built admin dashboard.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Visit the Platform <ArrowRight size={15} /></a>
                <a href="#features" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>See Features <ChevronRight size={15} /></a>
              </div>
            </div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <Divider />

      {/* Features */}
      <section id="features" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
        <div style={maxW}>
          <div style={{ marginBottom: 48 }}>
            <SL>Full Feature Breakdown</SL>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>Everything you need to run a training academy</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 500, lineHeight: 1.65 }}>Built from the ground up for security guard academies operating under NYS DCJS requirements.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon size={17} color={GOLD} /></div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* How It Works */}
      <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
        <div style={maxW}>
          <div style={{ marginBottom: 48 }}>
            <SL>How It Works</SL>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Up and running in four steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
            {STEPS.map(s => (
              <Card key={s.num}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'rgba(212,168,67,0.2)', marginBottom: 16 }}>{s.num}</div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <SL>Get Started</SL>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>Ready to modernize your training academy?</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 32, lineHeight: 1.65 }}>Visit the live platform at esctroc.com or contact us to schedule a personalized walkthrough.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Visit Watchman Launch <ArrowRight size={16} /></a>
            <a href="/Watchman_Launch_Spec_Sheet.pdf" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>Download Spec Sheet</a>
            <a href="mailto:info@watchmanbyesct.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>Email Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '32px 24px' }}>
        <div style={{ ...maxW, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Link to="/" style={{ textDecoration: 'none' }}><img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 30 }} /></Link>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} ESCT Holdings Inc.</span>
          <a href="mailto:info@watchmanbyesct.com" style={{ fontSize: 12, color: GOLD, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
        </div>
      </footer>
    </div>
  )
}
