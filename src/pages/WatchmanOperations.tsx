import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Radio, Users, FileText, BarChart3, Bell, Map,
  Shield, Clock, Smartphone, Building2, Church,
  Briefcase, ArrowRight, ArrowLeft, Lock
} from 'lucide-react'

const GOLD = '#d4a843'

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(6,6,6,0.96)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: 'linear-gradient(135deg,#d4a843,#9b7a2b)', textDecoration: 'none' }}>
            Request Early Access
          </a>
        </div>
      </div>
    </nav>
  )
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hov, setHov] = useState(false)
  return (
    <div style={{
      background: '#0d0d0d', border: `1px solid ${hov ? 'rgba(212,168,67,0.3)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 12, padding: 24, transition: 'all 0.2s',
      transform: hov ? 'translateY(-2px)' : 'none',
      boxShadow: hov ? '0 12px 32px rgba(212,168,67,0.1)' : 'none', ...style,
    }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </div>
  )
}

const FEATURES = [
  { icon: Users, title: 'Guard Scheduling', desc: 'Build and manage guard schedules across multiple sites. Assign guards to shifts, manage availability, and handle coverage gaps.' },
  { icon: Map, title: 'Post Order Management', desc: 'Create and distribute post orders digitally. Guards access their assignments and instructions from any device.' },
  { icon: FileText, title: 'Incident Reporting', desc: 'Structured incident reporting with photo attachments, severity levels, escalation routing, and supervisor notification.' },
  { icon: Building2, title: 'Site Management', desc: 'Manage multiple client sites with site-specific post orders, guard assignments, and operational protocols.' },
  { icon: BarChart3, title: 'Client Portal', desc: 'Give clients visibility into their coverage, incident reports, and guard activity through a dedicated portal.' },
  { icon: Smartphone, title: 'Mobile Field Access', desc: 'Guards access schedules, post orders, and incident forms from mobile devices. No paper required.' },
  { icon: Bell, title: 'Escalation Alerts', desc: 'Real-time alerts to supervisors and leadership for high-severity incidents and coverage gaps.' },
  { icon: Clock, title: 'Time and Attendance', desc: 'Guard clock-in and clock-out with location verification. Automated timesheets for payroll processing.' },
  { icon: BarChart3, title: 'Operations Dashboard', desc: 'Executive-level visibility into guard deployment, incident trends, site coverage, and compliance metrics.' },
  { icon: Shield, title: 'Compliance Tracking', desc: 'Track guard licensing, training expiration, and certification status to maintain compliance at all times.' },
  { icon: Lock, title: 'Role-Based Access', desc: 'Granular access control for guards, supervisors, managers, clients, and administrators.' },
  { icon: Radio, title: 'Multi-Site Operations', desc: 'Manage all client sites from a single platform. Scale from one location to dozens without added complexity.' },
]

const STEPS = [
  { n: '01', title: 'Configure your operation', desc: 'Add your client sites, define post requirements, and set up guard profiles with licensing and certification data.' },
  { n: '02', title: 'Build and publish schedules', desc: 'Create shift schedules by site and role. Guards receive their assignments and post orders instantly.' },
  { n: '03', title: 'Manage the field in real time', desc: 'Monitor coverage, receive incident alerts, and communicate with field personnel from the operations dashboard.' },
  { n: '04', title: 'Report to clients', desc: 'Generate activity reports, incident summaries, and coverage logs for client review through the client portal.' },
]

const SEGMENTS = [
  { icon: Briefcase, title: 'Security Guard Companies', desc: 'Manage guards, sites, schedules, and clients from a single platform built for how security companies actually operate.' },
  { icon: Building2, title: 'Corporate Security Teams', desc: 'In-house security operations for multi-location businesses that need centralized scheduling and incident management.' },
  { icon: Church, title: 'Faith-Based Organizations', desc: 'Security coordination for houses of worship with sensitivity to the culture and community context.' },
  { icon: Users, title: 'Nonprofit Organizations', desc: 'Affordable operations management for nonprofits running security programs on limited budgets.' },
]

export default function WatchmanOperations() {
  return (
    <div style={{ background: '#060606', minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', color: '#fff', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; }`}</style>
      <Nav />

      <section style={{ padding: '120px 24px 80px', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,67,0.09), transparent 60%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(212,168,67,0.2)', background: 'rgba(212,168,67,0.05)', marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GOLD }}>In Development</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-0.025em', color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
            Watchman Operations
          </h1>
          <p style={{ fontSize: 20, fontWeight: 500, color: GOLD, marginBottom: 16 }}>Security Operations Platform</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
            Real-time security operations management for guard companies and security teams. Shift scheduling, post orders, incident tracking, and client reporting built for how the field actually works.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: 'linear-gradient(135deg,#d4a843,#9b7a2b)', textDecoration: 'none' }}>
              Request Early Access <ArrowRight size={16} />
            </a>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>
            Currently in development. Request early access to be among the first organizations to deploy Watchman Operations.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>Built for the full operations cycle</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ padding: '28px 24px', borderRadius: 12, background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: GOLD, marginBottom: 14, opacity: 0.6 }}>{s.n}</div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Features</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>Full-spectrum operations management</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, maxWidth: 520, lineHeight: 1.65 }}>
            Every tool a security company needs to manage guards, sites, clients, and compliance in one platform.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={17} color={GOLD} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Who It's For</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>
            Built for organizations that protect people and assets
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 14 }}>
            {SEGMENTS.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={18} color={GOLD} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>Be among the first to deploy</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 32 }}>
            Watchman Operations is currently in active development. Request early access to be notified at launch and to provide input on features.
          </p>
          <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: 'linear-gradient(135deg,#d4a843,#9b7a2b)', textDecoration: 'none' }}>
            Request Early Access <ArrowRight size={16} />
          </a>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>
            Questions? Email <a href="mailto:info@watchmanbyesct.com" style={{ color: GOLD, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
          </p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} ESCT Holdings Inc. All rights reserved. Developed by Owens F. Shepard. E.S.C.T. USPTO Reg. No. 8,075,647
        </div>
      </footer>
    </div>
  )
}
