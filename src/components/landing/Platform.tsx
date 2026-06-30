import React from 'react'
import { BookOpen, Radio, FileText, Users, Bell, BarChart3 } from 'lucide-react'
import { WF_BRAND } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

const FEATURES = [
  { icon: BookOpen, title: 'Training Management', desc: 'Certified course enrollment, scheduling, attendance, and certificate generation, end to end.' },
  { icon: Radio, title: 'Operations Control', desc: 'Shift scheduling, post orders, incident reporting, and real-time guard management from one dashboard.' },
  { icon: FileText, title: 'Compliance & Records', desc: 'Automated documentation, audit trails, and regulatory reporting aligned to NYS requirements.' },
  { icon: Users, title: 'Built for Every Organization', desc: 'Each client organization gets an isolated workspace with secure access by role.' },
  { icon: Bell, title: 'Notifications & Alerts', desc: 'SMS and email alerts for training reminders, incident escalation, and operational updates.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Executive dashboards, key metrics, and exportable reports for leadership and compliance.' },
]

export default function Platform() {
  return (
    <section id="platform" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Watchman Suite</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Everything your operation needs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 560, lineHeight: 1.65 }}>
            One platform replacing disconnected spreadsheets, paper logs, and legacy silos — with shared clients, people, sites, and financial records across every module.
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
