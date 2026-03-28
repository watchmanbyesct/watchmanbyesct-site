import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield, BookOpen, Users, Award, Calendar, CreditCard,
  Bell, ClipboardCheck, ArrowRight, ArrowLeft, Check,
  LayoutDashboard, FileText, Mail, UserPlus, Settings
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
          <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
            Request Demo
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
  { icon: BookOpen, title: 'Course Management', desc: 'Create and manage DCJS-compliant courses with full control over course codes, hours, pricing, and descriptions.' },
  { icon: Calendar, title: 'Session Scheduling', desc: 'Schedule course sessions with date, time, location, and capacity settings. Students see available sessions on the public calendar.' },
  { icon: UserPlus, title: 'Online Enrollment', desc: 'Students enroll directly through the public-facing platform. DCJS student information is collected at enrollment.' },
  { icon: CreditCard, title: 'Stripe Payments', desc: 'Secure online payments powered by Stripe. Supports full price, coupon codes, and enrollment transfers.' },
  { icon: ClipboardCheck, title: 'Attendance Tracking', desc: 'Mark attendance per session. Automatic flagging of incomplete attendance before certificate issuance.' },
  { icon: Award, title: 'Certificate Generation', desc: 'Auto-generate completion certificates with student name, course, date, and DCJS school code.' },
  { icon: Mail, title: 'Email Notifications', desc: 'Automated confirmation emails on enrollment, reminders before sessions, and certificates on completion.' },
  { icon: Users, title: 'Student Records', desc: 'Full student history including enrollments, attendance, payments, and certificates in one place.' },
  { icon: LayoutDashboard, title: 'Admin Dashboard', desc: 'Complete administrative control over courses, sessions, students, staff, content, and site settings.' },
  { icon: FileText, title: 'CMS & Pages', desc: 'Manage public-facing pages, service content, blog posts, and site copy directly from the admin panel.' },
  { icon: Bell, title: 'Notifications & Alerts', desc: 'In-platform notification center for enrollment updates, payment events, and operational alerts.' },
  { icon: Settings, title: 'Toggle Controls', desc: 'Enable or disable site sections, services, and features with a single toggle — no code required.' },
]

const STEPS = [
  { n: '01', title: 'Set up your academy', desc: 'Add your DCJS school code, configure your courses, and set session schedules through the admin dashboard.' },
  { n: '02', title: 'Publish your calendar', desc: 'Sessions appear automatically on your public training calendar, filterable by course category.' },
  { n: '03', title: 'Students enroll online', desc: 'Students complete DCJS enrollment forms, select sessions, and pay securely — all without your team involved.' },
  { n: '04', title: 'Track and certify', desc: 'Mark attendance, monitor completions, and issue certificates automatically when requirements are met.' },
]

export default function WatchmanLaunch() {
  return (
    <div style={{ background: '#060606', minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', color: '#fff', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; }`}</style>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '120px 24px 80px', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,67,0.1), transparent 60%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', borderRadius: 999, border: `1px solid rgba(212,168,67,0.2)`, background: 'rgba(212,168,67,0.05)', marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#22c55e' }}>Live Now</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-0.025em', color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
            Watchman Launch
          </h1>
          <p style={{ fontSize: 20, fontWeight: 500, color: GOLD, marginBottom: 16 }}>Training Enrollment Platform</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
            The complete training management solution for security guard academies and organizations. Manage DCJS-compliant courses, enrollments, payments, attendance, and certifications in one place.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
              Visit Watchman Launch <ArrowRight size={16} />
            </a>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />

      {/* How it works */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>
            From setup to certification in four steps
          </h2>
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

      {/* Feature breakdown */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Features</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Everything a security training academy needs
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, maxWidth: 500, lineHeight: 1.65 }}>
            Built to the exact requirements of NYS DCJS-regulated training academies.
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

      {/* CTA */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 32 }}>
            Visit the live Watchman Launch platform at esctroc.com, or request a demo to see a personalized walkthrough.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href="https://esctroc.com" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
              Visit esctroc.com <ArrowRight size={16} />
            </a>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} ESCT Holdings Inc. All rights reserved. Developed by Owens F. Shepard. E.S.C.T. USPTO Reg. No. 8,075,647
        </div>
      </footer>
    </div>
  )
}
