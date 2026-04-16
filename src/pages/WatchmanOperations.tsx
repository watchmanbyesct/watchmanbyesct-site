import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Radio, Users, FileText, BarChart3, Bell, Map,
  Shield, Clock, Smartphone, Building2, Eye,
  AlertTriangle, Navigation, ClipboardCheck, Lock,
  Zap, Camera, CreditCard, ArrowRight, ArrowLeft,
  ChevronRight, MessageSquare, Activity
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
      background: '#0d0d0d',
      border: `1px solid ${hov ? 'rgba(212,168,67,0.3)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 12, padding: 24, transition: 'all 0.2s',
      transform: hov ? 'translateY(-2px)' : 'none',
      boxShadow: hov ? '0 12px 32px rgba(212,168,67,0.1)' : 'none', ...style,
    }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </div>
  )
}

function SL({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>{children}</p>
}

function Divider() {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} />
}

const CORE_CAPABILITIES = [
  { icon: Activity, title: 'Operations Command Center', desc: 'A live operational dashboard with site status monitoring, personnel status, metrics, activity logs, and supervisor command tools. Real-time awareness across all sites and staff.' },
  { icon: AlertTriangle, title: 'Incident Reporting and Escalation', desc: 'Incident feeds, creation, severity classification, escalation workflows, photo and video attachments, GPS context, timestamps, and supervisor feedback. Documentation at the moment it happens.' },
  { icon: Radio, title: 'Dispatch Management', desc: 'Dispatch center with event creation, tracking, statistics, multiple dispatch types, guard recommendations, and location overlays. Guards accept dispatch assignments through the mobile portal.' },
  { icon: Clock, title: 'Scheduling and Coverage Control', desc: 'Shift schedules, templates, coverage management, availability management, swap requests, overtime tracking, and auto-scheduling. Full control over staffing coverage across all sites.' },
  { icon: FileText, title: 'Timekeeping and Payroll Support', desc: 'Clock-in and clock-out, break management, time entry history, exceptions, missed clock-out tracking, and timecard export. Connects field activity to payroll and billing records.' },
  { icon: ClipboardCheck, title: 'DAR and Operational Reporting', desc: 'Daily Activity Report creation, drafts, history, review queues, attachments, analytics, report export, and supervisor approval workflows. Operational documentation at required quality standards.' },
  { icon: Navigation, title: 'Patrol Management and Checkpoint Verification', desc: 'Patrol routes, schedules, analytics, compliance scoring, QR and NFC checkpoint scanning, scan history, and missed scan alerts. Verify patrol completion, not just narrative reporting.' },
  { icon: Map, title: 'GPS and Geolocation Controls', desc: 'Live guard tracking, geofence configuration, site boundary setup, geofence violations, clock-in guardrails, early and late detection, and dispatch location view. Location-based accountability.' },
  { icon: Eye, title: 'Inspections and Field Verification', desc: 'Inspection templates, field inspections, photo capture, inspection schedules, analytics, PDF export, and exception dashboards. Structured field verification beyond patrol logging.' },
  { icon: FileText, title: 'Post Orders and Shift Handover', desc: 'Post orders library, version control, site maps, document attachments, post assignment, guard acknowledgment, pass-on logs, and handover workflows. Critical post information formally documented.' },
  { icon: Bell, title: 'Safety and Emergency Tools', desc: 'Lone worker timers, panic and duress alerts, emergency protocols, emergency buttons, alert escalation rules, and real-time escalation. Built to support officer safety when something goes wrong.' },
  { icon: MessageSquare, title: 'Communications Layer', desc: 'Broadcast messaging, direct messaging, SMS and email notifications, notification rules, in-app messaging by site and shift, and PTToC communication capabilities.' },
  { icon: Shield, title: 'Credential Tracking and Compliance', desc: 'Licenses, certifications, document uploads, expiry tracking, compliance dashboards, photo ID, onboarding support, and readiness monitoring. Licensing status always visible and current.' },
  { icon: CreditCard, title: 'Billing and Invoicing Support', desc: 'Billing dashboards, invoicing triggers, payment reconciliation, accounting sync, invoice push tools, contract visibility, and invoice history. Field activity connected to client billing.' },
  { icon: Building2, title: 'Client Portal and Service Transparency', desc: 'Permission-based client access to service KPIs, coverage status, incidents, reporting, service requests, contracts, and billing views. Security as a transparent, documentable service.' },
  { icon: Lock, title: 'Audit, Security, and Administrative Governance', desc: 'Audit event logs, security posture scoring, access controls, module governance, tenant controls, integration health, encryption, MFA, and role-based access controls.' },
  { icon: Camera, title: 'Remote Guarding and Video Workflows', desc: 'Remote command center capabilities, camera alert queues, live clip review, threat verification, voice-down triggers, dispatch from camera events, video evidence attachment, and VMS integration.' },
  { icon: Zap, title: 'Access Control, PTToC, and Fleet', desc: 'Access event monitoring, door and gate status, remote unlock and lockdown, visitor management, PTToC integrations, man-down thresholds, and fleet telematics with live vehicle tracking.' },
]

const LAYERS = [
  { title: 'Supervisor and Operations Layer', desc: 'The core command side. Over 95 supervisor and operations components across 24 navigation groups covering command center, incidents, dispatch, scheduling, timekeeping, DAR, patrol, checkpoints, GPS, inspections, post orders, handover, automation, intelligence, personnel, sites, clients, billing, communications, audit, remote guarding, cameras, PTToC, access control, and fleet.', count: '95+', label: 'Components' },
  { title: 'Guard Portal', desc: 'A mobile-first, offline-capable progressive web application with over 35 views. Dashboard, assignments, vehicle assignment, shift instructions, timekeeping, DAR entry, incident reporting, patrol workflows, GPS clock-in, dispatch handling, lone worker tools, panic functions, radio pairing, and shift handover.', count: '35+', label: 'Mobile Views' },
  { title: 'Client Portal', desc: 'Permission-based access across four tiers: viewer, manager, billing, and admin. Dashboard KPIs, coverage status, recent activity, incident viewing, incident history, reporting, exports, service requests, contract visibility, and invoice history.', count: '4', label: 'Access Tiers' },
  { title: 'Platform and Tenant Administration', desc: 'Governed module controls, tenant setup, onboarding analytics, integration health, accounting connections, payroll connectivity, configuration tools, and infrastructure controls for operational scaling.', count: '1', label: 'Unified Platform' },
]

const STEPS = [
  { n: '01', title: 'Configure Sites and Personnel', desc: 'Add client sites, define post requirements, configure compliance rules, set up guard and supervisor profiles with licensing and certification data.' },
  { n: '02', title: 'Build and Deploy Schedules', desc: 'Create shift schedules by site, role, and client requirement. Guards receive assignments and post orders instantly without phone calls or paper handoffs.' },
  { n: '03', title: 'Manage Field Operations in Real Time', desc: 'Monitor shift coverage, receive incident alerts, track patrol activity, verify checkpoints, and communicate with field personnel from the operations command center.' },
  { n: '04', title: 'Report, Bill, and Retain Clients', desc: 'Generate Daily Activity Reports, incident summaries, and compliance records. Give clients portal access to their coverage data. Connect field activity to billing and payroll.' },
]

export default function WatchmanOperations() {
  return (
    <div style={{ background: '#060606', minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', color: '#fff', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '120px 24px 80px', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,67,0.09), transparent 60%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', borderRadius: 999, border: `1px solid rgba(212,168,67,0.2)`, background: 'rgba(212,168,67,0.05)', marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GOLD }}>In Development</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-0.025em', color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>Watchman Security Operations</h1>
          <p style={{ fontSize: 20, fontWeight: 500, color: GOLD, marginBottom: 20 }}>Operational Command Platform for Security Organizations</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 680, marginBottom: 16 }}>
            An all-in-one security operations platform built to manage field reporting, patrol accountability, scheduling, dispatch, geolocation, timekeeping, compliance, communications, billing support, and client-facing service visibility across private security environments.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
            This is not the front-end growth platform. This is the operational engine. It combines supervisor command tools, mobile guard workflows, alert-driven safety functions, and operational intelligence to help security organizations run with greater discipline, responsiveness, transparency, and scale.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Request Early Access <ArrowRight size={16} /></a>
            <Link to="/field-app" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.85)', border: `1px solid rgba(212,168,67,0.35)`, background: 'rgba(212,168,67,0.06)', textDecoration: 'none' }}>
              <Smartphone size={16} /> Field app & QR
            </Link>
            <a href="/Watchman_Operations_Spec_Sheet.pdf" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>Download Spec Sheet</a>
          </div>
        </div>
      </section>

      <Divider />

      {/* Problem it solves */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="two-col">
            <div>
              <SL>The Problem It Solves</SL>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em' }}>The operational wall most security companies hit as they grow</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                Most firms eventually face the same problems: too many manual reports, weak patrol verification, poor visibility into guard activity, inconsistent post order distribution, slow incident escalation, disconnected payroll and billing records, and no clean way to show clients what service was actually delivered.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>Watchman Security Operations addresses that by centralizing operations into one security-first platform.</p>
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                ['Ownership and leadership', 'Gain operational visibility across the entire company'],
                ['Operations managers and supervisors', 'Control staffing, monitor service delivery, review reports, enforce accountability, and respond faster to incidents'],
                ['Officers in the field', 'Work from structured mobile tools instead of fragmented texts, calls, and paper logs'],
                ['Back office teams', 'Connect payroll, billing, contracts, and compliance to the actual work performed'],
                ['Clients', 'See organized, transparent, documentable service delivery'],
              ].map(([who, what]) => (
                <div key={String(who)} style={{ padding: '14px 16px', borderRadius: 10, background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: GOLD, marginBottom: 4 }}>{who}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{what}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Platform layers */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Platform Architecture</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>Four integrated layers, one unified platform</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 40, maxWidth: 540, lineHeight: 1.65 }}>A multi-interface, multi-module, multi-tenant system built for present-day operations and long-term expansion.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 14 }}>
            {LAYERS.map(l => (
              <Card key={l.title} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 32, fontWeight: 700, color: GOLD, lineHeight: 1 }}>{l.count}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(212,168,67,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>{l.label}</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{l.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{l.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Dashboard screenshot */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Platform Command Center</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>Live operational awareness across all sites and personnel</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 40, maxWidth: 520, lineHeight: 1.65 }}>The command center gives supervisors and operations managers a real-time view of active sites, open incidents, shift coverage, and personnel status in one organized environment.</p>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}>
            <div style={{ background: '#1a1a1a', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              </div>
              <div style={{ flex: 1, background: '#111', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>Watchman Security Operations — Platform Command Center</div>
            </div>
            <img src="/operations-dashboard.png" alt="Watchman Operations Command Center" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      <Divider />

      {/* How it works */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>How It Works</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>From reactive and manual to disciplined and technology-supported</h2>
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

      <Divider />

      {/* Core capabilities */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Core Capabilities</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>Built around the real workflow of security operations</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, maxWidth: 540, lineHeight: 1.65 }}>Not generic workforce software. A platform designed from field reporting, patrol compliance, site accountability, dispatch, post orders, shift transitions, incident escalation, guard safety, credential readiness, and client transparency.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {CORE_CAPABILITIES.map(({ icon: Icon, title, desc }) => (
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

      {/* Who it's for */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Who It Is For</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>Built for organizations that protect people and assets</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 14 }}>
            {[
              { title: 'Private Security Companies', desc: 'Guard firms managing personnel, sites, and clients across one or multiple locations. Replace manual operations with a professional security command platform.' },
              { title: 'Proprietary Security Departments', desc: 'In-house security operations for healthcare institutions, universities, campuses, and enterprise environments requiring structured oversight and compliance visibility.' },
              { title: 'Event and Venue Security', desc: 'Event venues and amusement operations requiring real-time situational awareness, patrol accountability, and rapid incident response.' },
              { title: 'Security-Intensive Organizations', desc: 'Any organization requiring real-time awareness, compliance visibility, and detailed oversight of safety personnel across one or more locations.' },
            ].map(({ title, desc }) => (
              <Card key={title}>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Early access */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="two-col">
            <div>
              <SL>Development Status</SL>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em' }}>Currently in active development</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>Watchman Security Operations is being developed by ESCT Holdings Inc. under the direction of Owens F. Shepard. Early access is available to qualified organizations.</p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>Request early access to be among the first to deploy the platform, provide input on features, and receive priority onboarding support at launch.</p>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                'Priority deployment for early access organizations',
                'Input on feature roadmap and development priorities',
                'Direct access to the ESCT development team',
                'Preferred onboarding support at launch',
                'Positioning as a founding platform organization',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <ChevronRight size={14} style={{ color: GOLD, flexShrink: 0, marginTop: 3 }} />
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>Be among the first to deploy</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 32 }}>Request early access or download the spec sheet to review the full platform capabilities and architecture.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>Request Early Access <ArrowRight size={16} /></a>
            <a href="/Watchman_Operations_Spec_Sheet.pdf" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>Download Spec Sheet</a>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>
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
