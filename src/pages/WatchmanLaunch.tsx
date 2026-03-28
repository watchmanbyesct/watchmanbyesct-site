import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe, Users, BookOpen, UserPlus, LayoutDashboard,
  FileText, Shield, ArrowRight, ArrowLeft, Layers,
  Briefcase, MessageSquare, Award, Building2, ChevronRight
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

const FEATURES = [
  {
    icon: Globe,
    title: 'Professional Company Website',
    desc: 'A serious digital front door. Service pages, company overview, leadership profiles, contact channels, and inquiry forms. The credibility a security company needs to win contracts.',
  },
  {
    icon: Briefcase,
    title: 'Service Presentation and Market Positioning',
    desc: 'Clearly communicate what your company offers. Armed and unarmed security, patrol, investigations, consulting, training, and more — structured as a sales and positioning environment, not a brochure.',
  },
  {
    icon: UserPlus,
    title: 'Recruiting and Applicant Intake',
    desc: 'A clear path for applicants. Prospective guards, trainees, and candidates can learn about roles, submit interest, start application steps, and move into the company pipeline in an organized way.',
  },
  {
    icon: BookOpen,
    title: 'Training Access and Workforce Development',
    desc: 'A training-facing layer where users access course information, registration pathways, program overviews, and training-related resources. Connected to the workforce development mission.',
  },
  {
    icon: LayoutDashboard,
    title: 'Onboarding Gateway',
    desc: 'The gateway where new hires, trainees, and internal users begin structured onboarding. Collect documents, guide next steps, assign resources, and direct users into the proper role-based environment.',
  },
  {
    icon: Users,
    title: 'Role-Based Portal Entry',
    desc: 'Different user groups enter the right pathway. Visitors, applicants, trainees, staff, supervisors, and clients are each directed into the correct experience without confusion.',
  },
  {
    icon: Award,
    title: 'Membership and User Accounts',
    desc: 'User accounts supporting profile management, progress tracking, communication, saved forms, enrollment history, resource access, and movement between company-facing and internal experiences.',
  },
  {
    icon: FileText,
    title: 'Forms, Intake, and Workflow Routing',
    desc: 'Replace email chaos and manual intake with structured forms and routing. Inquiry forms, hiring interest, training registrations, consultations, and service requests all handled in one place.',
  },
  {
    icon: Building2,
    title: 'Resource and Information Hub',
    desc: 'A central place for policies, onboarding instructions, announcements, course information, FAQs, service outlines, and next-step guidance. Consistency that reduces confusion.',
  },
  {
    icon: Shield,
    title: 'Brand Control and Consistency',
    desc: 'One consistent company identity across public pages, intake flows, member experiences, and business communication. Growth often breaks down when the business looks different in every place a user touches it.',
  },
  {
    icon: MessageSquare,
    title: 'Lead and Inquiry Management',
    desc: 'Capture client inquiries, manage consultation requests, and track leads from first contact to contract. No more scattered emails and missed follow-ups.',
  },
  {
    icon: Layers,
    title: 'Scalability Foundation',
    desc: 'An organized digital foundation that connects to deeper systems. Watchman Launch prepares the company for stronger workflows and future integration with Watchman Security Operations.',
  },
]

const STEPS = [
  {
    n: '01', title: 'Establish Your Digital Presence',
    desc: 'Launch a professional company website with service pages, leadership profiles, and contact channels. Look credible and organized before your first client meeting.',
  },
  {
    n: '02', title: 'Open Your Entry Points',
    desc: 'Create structured paths for clients, applicants, trainees, and staff. Each user type gets a clear, organized way to engage with your company.',
  },
  {
    n: '03', title: 'Centralize Intake and Onboarding',
    desc: 'Replace scattered forms and manual follow-up with structured intake workflows. New hires, applicants, and trainees move through a consistent, organized process.',
  },
  {
    n: '04', title: 'Build the Foundation for Operations',
    desc: 'Watchman Launch creates the organizational infrastructure that feeds into Watchman Security Operations. Build the company that is ready to run the work well.',
  },
]

export default function WatchmanLaunch() {
  return (
    <div style={{
      background: '#060606', minHeight: '100vh',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#fff', WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
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
          <p style={{ fontSize: 20, fontWeight: 500, color: GOLD, marginBottom: 20 }}>
            Digital Growth and Organizational Platform for Security Companies
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 680, marginBottom: 16 }}>
            Watchman Launch helps security companies launch smarter. It combines digital presence, workforce entry, training access, onboarding structure, and organizational tools into one platform so a company can present itself professionally, build trust, and grow with stronger systems from the start.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
            It is the entry point into the Watchman ecosystem — what helps a security company go from loosely organized and manually managed to digitally structured and growth-ready.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
              Request a Demo <ArrowRight size={16} />
            </a>
            <a href="/Watchman_Launch_Spec_Sheet.pdf" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
              Download Spec Sheet
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* What it does */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="two-col">
            <div>
              <SL>What It Does</SL>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em' }}>
                The work that happens before and around operations
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                Watchman Launch is designed to do the work that happens before and around operations, not the deeper command-and-control work of the operations platform itself.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                Operations software helps you run the work. Watchman Launch helps you build the company that is ready to run the work well.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                'Present itself professionally online',
                'Centralize business-facing information',
                'Create an organized entry point for applicants, trainees, staff, and clients',
                'Support workforce development and training access',
                'Streamline onboarding and user intake',
                'Build the digital infrastructure needed for scale',
                'Serve as the public and organizational gateway into the broader Watchman environment',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <ChevronRight size={14} style={{ color: GOLD, flexShrink: 0, marginTop: 3 }} />
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Dashboard screenshot */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Admin Command Center</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Full administrative control in one place
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 40, maxWidth: 520, lineHeight: 1.65 }}>
            Manage your company's digital presence, intake flows, user accounts, content, and organizational tools from a single, organized dashboard.
          </p>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}>
            <div style={{ background: '#1a1a1a', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              </div>
              <div style={{ flex: 1, background: '#111', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                Watchman Launch — Admin Command Center
              </div>
            </div>
            <img src="/launch-dashboard.png" alt="Watchman Launch Admin Dashboard" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      <Divider />

      {/* How it works */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>How It Works</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>
            From scattered and manual to structured and growth-ready
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

      <Divider />

      {/* Features */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Platform Capabilities</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Everything in one platform
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, maxWidth: 500, lineHeight: 1.65 }}>
            Watchman Launch replaces the scattered mix of disconnected tools, manual forms, and inconsistent processes that hold security companies back.
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

      {/* What it is not */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="two-col">
            <div>
              <SL>Watchman Launch</SL>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Built for company readiness and growth</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  'Professional online presence',
                  'Client-facing service pages',
                  'Recruiting and applicant intake',
                  'Training access and enrollment',
                  'Onboarding and user intake',
                  'Role-based portal entry',
                  'Membership and user accounts',
                  'Resource and information hub',
                  'Brand consistency and control',
                  'Lead and inquiry management',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SL>Watchman Security Operations</SL>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Built for field command and control</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  'Live guard dispatching',
                  'Patrol checkpoint enforcement',
                  'Incident command workflows',
                  'GPS officer monitoring',
                  'Timekeeping enforcement',
                  'Client incident dashboards',
                  'Remote guarding operations',
                  'Operational field analytics',
                  'Shift scheduling and coverage',
                  'Post order management',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '14px 16px', borderRadius: 10, background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                  These capabilities belong to <span style={{ color: GOLD, fontWeight: 600 }}>Watchman Security Operations</span> — the deep command-and-control platform currently in development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Who it's for */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#060606' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SL>Who It Is For</SL>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 48, letterSpacing: '-0.02em' }}>
            Especially valuable for companies ready to grow
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 14 }}>
            {[
              { title: 'Start-Up Security Companies', desc: 'Build your professional foundation from day one. Look credible and organized before you win your first contract.' },
              { title: 'Growing Guard Firms', desc: 'Replace fragmented tools and manual processes with structured digital systems that scale with your business.' },
              { title: 'Training-Driven Companies', desc: 'Connect your training and workforce development programs to a professional platform that manages the full user journey.' },
              { title: 'Regional Expansion Operations', desc: 'Stand up a new market with a consistent, professional digital presence and organized intake systems from day one.' },
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

      {/* CTA */}
      <section style={{ padding: 'clamp(64px,8vw,96px) 24px', background: '#080808', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
            Ready to launch smarter?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 32 }}>
            Request a demo to see a personalized walkthrough of Watchman Launch, or download the spec sheet to review the full platform details.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href="/#demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, color: '#000', background: `linear-gradient(135deg,${GOLD},#9b7a2b)`, textDecoration: 'none' }}>
              Request a Demo <ArrowRight size={16} />
            </a>
            <a href="/Watchman_Launch_Spec_Sheet.pdf" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
              Download Spec Sheet
            </a>
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

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
