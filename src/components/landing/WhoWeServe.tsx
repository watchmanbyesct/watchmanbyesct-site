import React from 'react'
import { Briefcase, Church, Building2, Users, Home, Wrench, Share2 } from 'lucide-react'
import { WF_BRAND } from '../../lib/brand'
import { Card, maxW, SectionLabel } from './shared'

const SEGMENTS = [
  { icon: Briefcase, title: 'Security Companies', desc: 'Built for NYS licensed security firms managing guards, sites, training, and compliance.' },
  { icon: Church, title: 'Faith-Based Organizations', desc: 'Mission-aware security programs designed with sensitivity and community in mind.' },
  { icon: Building2, title: 'Nonprofits & Human Services', desc: 'Scalable security and safety management for mission-driven organizations.' },
  { icon: Users, title: 'Corporate & Enterprise', desc: 'Multi-site security operations and training programs for larger organizations.' },
  { icon: Home, title: 'Residential & Care Facilities', desc: 'BedCheck welfare rounds and compliance for group homes, shelters, and treatment programs.' },
  { icon: Wrench, title: 'Enterprise Facilities Teams', desc: 'Maintenance management, inspections, and building systems monitoring for property operators.' },
  { icon: Share2, title: 'Security Professionals', desc: 'Exchange — build your career, connect with peers, and discover opportunities in the industry.' },
]

export default function WhoWeServe() {
  return (
    <section style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#080808' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Who We Serve</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            Built for organizations that protect people and assets
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
          {SEGMENTS.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(201,160,48,0.08)', border: '1px solid rgba(201,160,48,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon size={18} color={WF_BRAND} />
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 7 }}>{title}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
