import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  LineChart,
  ShieldCheck,
  UserPlus,
  Users,
} from 'lucide-react'

const GOLD = '#d4a843'

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
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
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
        border: `1px solid ${hov ? 'rgba(212,168,67,0.3)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 24,
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 12px 32px rgba(212,168,67,0.1)' : 'none',
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

const FEATURES = [
  {
    icon: UserPlus,
    title: 'Recruiting Pipeline',
    desc: 'Bring applications, references, background checks, and offers into one workflow so hiring teams see progress without chasing email threads.',
  },
  {
    icon: ClipboardList,
    title: 'Careers and Applicant Experience',
    desc: 'Publish careers experiences that match your brand while keeping applicant data governed and auditable.',
  },
  {
    icon: FileCheck2,
    title: 'Onboarding Readiness',
    desc: 'Align new hires with training enrollment, credentials, and role context so people are ready before they hit the floor.',
  },
  {
    icon: Users,
    title: 'Workforce Records',
    desc: 'Maintain employee and role context in one place, with permissions that respect how sensitive HR data should be handled.',
  },
  {
    icon: LineChart,
    title: 'Hiring Analytics',
    desc: 'Simple visibility into pipeline health and bottlenecks for leadership and HR without building spreadsheets by hand.',
  },
  {
    icon: ShieldCheck,
    title: 'Part of the Watchman Suite',
    desc: 'HR is strongest when it connects recruiting and onboarding to Launch, Operations, and Finance—each product can stand alone, but together they complete the picture.',
  },
]

export default function WatchmanHR() {
  return (
    <div style={{ background: '#060606', minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', color: '#fff', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Nav />

      <section style={{ padding: '120px 24px 80px', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,67,0.09), transparent 60%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', borderRadius: 999, border: `1px solid rgba(212,168,67,0.2)`, background: 'rgba(212,168,67,0.05)', marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GOLD }}>In Development</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-0.025em', color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
            Watchman HR
          </h1>
          <p style={{ fontSize: 20, fontWeight: 500, color: GOLD, marginBottom: 20 }}>
            People Operations for Security Organizations
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 700, marginBottom: 36 }}>
            Watchman HR connects recruiting, onboarding, and workforce context to the same mission as training and field operations—so you can hire with discipline, onboard with clarity, and deploy with confidence.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
              Request a Demo <ArrowRight size={16} />
            </a>
            <Link to="/help/launch/recruiting-and-hr-modules" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(212,168,67,0.35)', background: 'rgba(212,168,67,0.06)', textDecoration: 'none' }}>
              Help articles
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Core Capabilities</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Built for hiring and deployment in regulated environments
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, maxWidth: 560, lineHeight: 1.65 }}>
            Security organizations need HR tooling that respects compliance, sensitive records, and the handoff from applicant to trained, deployable professional.
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

      <Divider />

      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
            Four platforms, one mission
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 28 }}>
            Each Watchman product is designed to stand on its own. Together, they connect training, people, operations, and finance into one accountable system for modern security organizations.
          </p>
          <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
            Get Started <ArrowRight size={16} />
          </a>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>
            <CheckCircle2 size={13} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            Questions? <a href="mailto:info@watchmanbyesct.com" style={{ color: GOLD, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
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
