import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Radio, Users, FileText, MapPin, Bell, BarChart3, Lock, Smartphone, Building2, Church, Briefcase, ChevronRight, ArrowRight, ArrowLeft, Clock } from 'lucide-react'

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

// ── Ops Mockup ────────────────────────────────────────────────────────────────
function OpsMockup() {
  const guards = [
    { name: 'J. Harris', site: 'People Inc. — Main', shift: '7:00 AM - 3:00 PM', status: 'On Duty' },
    { name: 'M. Williams', site: 'Catholic Charities', shift: '3:00 PM - 11:00 PM', status: 'On Duty' },
    { name: 'T. Brooks', site: 'Rochester HQ', shift: '11:00 PM - 7:00 AM', status: 'Scheduled' },
  ]
  return (
    <div style={{ background: '#0a0a0a', borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
      <div style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
        {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <span style={{ marginLeft: 10, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Watchman Operations — Command Center</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr' }}>
        <div style={{ background: '#0d0d0d', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '14px 0', minHeight: 280 }}>
          {[{ icon: BarChart3, label: 'Command Center', active: true }, { icon: Users, label: 'Guard Roster' }, { icon: MapPin, label: 'Sites' }, { icon: FileText, label: 'Post Orders' }, { icon: Bell, label: 'Incidents' }, { icon: Building2, label: 'Clients' }].map(({ icon: Icon, label, active }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', fontSize: 11, fontWeight: active ? 600 : 400, color: active ? GOLD : 'rgba(255,255,255,0.35)', background: active ? 'rgba(212,168,67,0.06)' : 'transparent', borderRight: active ? `2px solid ${GOLD}` : '2px solid transparent' }}>
              <Icon size={12} color={active ? GOLD : 'rgba(255,255,255,0.28)'} />{label}
            </div>
          ))}
        </div>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12 }}>
            {[{ label: 'Guards On Duty', value: '24' }, { label: 'Active Sites', value: '6' }, { label: 'Open Incidents', value: '2' }].map(s => (
              <div key={s.label} style={{ background: '#111', borderRadius: 8, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: GOLD, marginBottom: 2 }}>{s.value}</div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#111', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ fontSize: 10, fontWeight: 600, color: '#fff' }}>Active Deployments</span></div>
            {guards.map((g, i) => (
              <div key={i} style={{ padding: '8px 12px', borderBottom: i < guards.length - 1 ? '1px solid rgba(255,255,255,0.04)' : undefined, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#fff', marginBottom: 1 }}>{g.name} <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>— {g.site}</span></div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.32)' }}>{g.shift}</div>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: g.status === 'On Duty' ? 'rgba(34,197,94,0.12)' : 'rgba(212,168,67,0.12)', color: g.status === 'On Duty' ? '#22c55e' : GOLD }}>{g.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  { icon: Users, title: 'Guard Scheduling', desc: 'Build and manage shift schedules for all guards across multiple sites. Handle shift swaps, call-outs, and coverage gaps in real time.' },
  { icon: MapPin, title: 'Site Management', desc: 'Maintain detailed profiles for each client site including post instructions, access requirements, emergency contacts, and site-specific protocols.' },
  { icon: FileText, title: 'Post Orders', desc: 'Create, version, and distribute digital post orders to guards. Ensure every officer has current instructions before beginning their assignment.' },
  { icon: Bell, title: 'Incident Reporting', desc: 'Document incidents in structured reports with timestamps, location, involved parties, and follow-up actions. Escalate directly to supervisors.' },
  { icon: Building2, title: 'Client Portal', desc: 'Give clients read-only access to their site schedules, incident reports, and guard assignments. Build transparency and trust.' },
  { icon: Smartphone, title: 'Mobile-Ready', desc: 'Designed for field use. Guards and supervisors can access schedules, post orders, and incident reporting from any device.' },
  { icon: Radio, title: 'Real-Time Updates', desc: 'Live visibility into guard deployment status, active incidents, and site coverage across all client locations.' },
  { icon: BarChart3, title: 'Operations Reporting', desc: 'Generate client-ready reports on coverage hours, incident summaries, and response times for billing and compliance.' },
  { icon: Lock, title: 'Role-Based Access', desc: 'Granular permissions for guards, supervisors, site managers, clients, and administrators.' },
  { icon: Clock, title: 'Shift Tracking', desc: 'Log shift start and end times, track tardiness and absences, and maintain accurate time records for payroll and compliance.' },
  { icon: Shield, title: 'Compliance Tools', desc: 'Built with NYS licensing requirements in mind. Track guard certifications, license expiration dates, and training compliance.' },
  { icon: Bell, title: 'Alerts and Notifications', desc: 'Automated SMS and email alerts for missed check-ins, open incidents, expiring certifications, and shift reminders.' },
]

const SEGMENTS = [
  { icon: Briefcase, title: 'Security Companies', desc: 'Built for NYS licensed guard companies managing multiple clients, sites, and shift schedules simultaneously.' },
  { icon: Church, title: 'Faith-Based Organizations', desc: 'Structured security management for houses of worship with appropriate protocols and community sensitivity.' },
  { icon: Building2, title: 'Nonprofits and Human Services', desc: 'Scalable operations management for mission-driven organizations with dedicated security programs.' },
  { icon: Users, title: 'Enterprise and Corporate', desc: 'Multi-site deployment and client reporting for organizations with complex security needs.' },
]

const STEPS = [
  { num: '01', title: 'Set up sites and rosters', desc: 'Add your client sites, configure post requirements, and build your guard roster with certification and licensing records.' },
  { num: '02', title: 'Build schedules and distribute post orders', desc: 'Create shift schedules and push digital post orders to assigned guards before each deployment.' },
  { num: '03', title: 'Monitor operations in real time', desc: 'Track active deployments, log incidents, and respond to field events from the Command Center dashboard.' },
  { num: '04', title: 'Report to clients', desc: 'Generate professional coverage and incident reports for client review, billing, and compliance documentation.' },
]

export default function WatchmanOperations() {
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
            <a href="mailto:info@watchmanbyesct.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Request Early Access</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '100px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 55% at 20% 50%, rgba(212,168,67,0.08), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ ...maxW, width: '100%', position: 'relative' }}>
          <div className="hgrid">
            <div>
              <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999, background: `rgba(212,168,67,0.1)`, color: GOLD, border: `1px solid rgba(212,168,67,0.25)`, marginBottom: 20 }}>In Development</span>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', marginBottom: 20, lineHeight: 1.1, letterSpacing: '-0.025em' }}>
                Watchman <span style={{ background: `linear-gradient(135deg,${GOLD},#e8c06a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Operations</span>
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>Real-time security operations management for guard companies, multi-site organizations, and enterprise security programs.</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: 32 }}>Guard scheduling, post orders, incident reporting, client portals, and compliance tools, built for the operational demands of professional security.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="mailto:info@watchmanbyesct.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Request Early Access <ArrowRight size={15} /></a>
                <a href="#features" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>See Features <ChevronRight size={15} /></a>
              </div>
            </div>
            <OpsMockup />
          </div>
        </div>
      </section>

      <Divider />

      {/* Features */}
      <section id="features" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
        <div style={maxW}>
          <div style={{ marginBottom: 48 }}>
            <SL>Full Feature Breakdown</SL>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>Built for real security operations</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 500, lineHeight: 1.65 }}>Watchman Operations replaces spreadsheets, radio logs, and paper post orders with a unified, field-ready platform.</p>
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
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>From setup to client reporting</h2>
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

      {/* Who It's For */}
      <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
        <div style={maxW}>
          <div style={{ marginBottom: 48 }}>
            <SL>Who It's For</SL>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Built for organizations that protect people and assets</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
            {SEGMENTS.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon size={18} color={GOLD} /></div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Early Access CTA */}
      <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <SL>Early Access</SL>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>Be among the first to use Watchman Operations</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 32, lineHeight: 1.65 }}>
            Watchman Operations is currently in active development. Contact us to learn about early access, provide input on features, or schedule a preview walkthrough.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@watchmanbyesct.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Request Early Access <ArrowRight size={16} /></a>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>Back to Watchman <ChevronRight size={15} /></Link>
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
