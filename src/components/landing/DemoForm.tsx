import React, { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { DEMO_INTEREST_OPTIONS } from '../../config/ecosystemProducts'
import { WF_BRAND } from '../../lib/brand'
import { Card, SectionLabel, inputBase, labelBase } from './shared'

const DEMO_EMAIL = 'info@watchmanbyesct.com'

function getInitialInterest(): string {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get('interest')
  if (fromQuery) return fromQuery
  const hash = window.location.hash
  if (hash.startsWith('#demo?')) {
    const hashParams = new URLSearchParams(hash.slice(hash.indexOf('?') + 1))
    return hashParams.get('interest') ?? 'suite'
  }
  return 'suite'
}

function interestLabel(value: string): string {
  for (const group of DEMO_INTEREST_OPTIONS) {
    const match = group.options.find(o => o.value === value)
    if (match) return match.label
  }
  return value
}

function buildMailto(form: {
  first_name: string
  last_name: string
  email: string
  phone: string
  organization: string
  role: string
  product_interest: string
  message: string
}): string {
  const subject = encodeURIComponent(`Demo request — ${form.organization}`)
  const body = encodeURIComponent(
    [
      'Demo request from watchmanbyesct.com',
      '',
      `Name: ${form.first_name} ${form.last_name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Organization: ${form.organization}`,
      form.role ? `Role: ${form.role}` : null,
      `Interest: ${interestLabel(form.product_interest)}`,
      form.message ? `\nMessage:\n${form.message}` : null,
    ].filter(Boolean).join('\n'),
  )
  return `mailto:${DEMO_EMAIL}?subject=${subject}&body=${body}`
}

export default function DemoForm() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '',
    organization: '', role: '', product_interest: 'suite', message: '',
  })
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setForm(f => ({ ...f, product_interest: getInitialInterest() }))
  }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  function submit(e: React.FormEvent) {
    e.preventDefault()
    window.location.href = buildMailto(form)
    setSuccess(true)
  }

  return (
    <section id="demo" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,160,48,0.04), transparent)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 620, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>Request a demo</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Tell us about your organization and we&apos;ll schedule a personalized walkthrough.</p>
        </div>
        {success ? (
          <Card style={{ textAlign: 'center', padding: 48 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(201,160,48,0.08)', border: '1px solid rgba(201,160,48,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
              <Check size={22} color={WF_BRAND} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Almost done</h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.6 }}>
              Your email app should open with your request pre-filled. Send the message and we&apos;ll be in touch within one business day.
            </p>
            <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
              No email app? Write to{' '}
              <a href={`mailto:${DEMO_EMAIL}`} style={{ color: WF_BRAND, textDecoration: 'none' }}>{DEMO_EMAIL}</a>
            </p>
          </Card>
        ) : (
          <Card style={{ padding: 28 }}>
            <form onSubmit={submit} style={{ display: 'grid', gap: 16 }}>
              <div className="demo-form-grid" style={{ display: 'grid', gap: 12 }}>
                <div><label style={labelBase}>First Name *</label><input style={inputBase} value={form.first_name} onChange={set('first_name')} required /></div>
                <div><label style={labelBase}>Last Name *</label><input style={inputBase} value={form.last_name} onChange={set('last_name')} required /></div>
              </div>
              <div className="demo-form-grid" style={{ display: 'grid', gap: 12 }}>
                <div><label style={labelBase}>Email *</label><input style={inputBase} type="email" value={form.email} onChange={set('email')} required /></div>
                <div><label style={labelBase}>Phone</label><input style={inputBase} type="tel" value={form.phone} onChange={set('phone')} /></div>
              </div>
              <div><label style={labelBase}>Organization *</label><input style={inputBase} value={form.organization} onChange={set('organization')} required /></div>
              <div className="demo-form-grid" style={{ display: 'grid', gap: 12 }}>
                <div><label style={labelBase}>Your Role</label><input style={inputBase} value={form.role} onChange={set('role')} /></div>
                <div>
                  <label style={labelBase}>Interest</label>
                  <select style={inputBase} value={form.product_interest} onChange={set('product_interest')}>
                    {DEMO_INTEREST_OPTIONS.map(group => (
                      <optgroup key={group.group} label={group.group}>
                        {group.options.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>
              <div><label style={labelBase}>Message</label><textarea style={{ ...inputBase, minHeight: 88, resize: 'vertical' }} value={form.message} onChange={set('message')} placeholder="Tell us what you're looking to solve..." /></div>
              <button type="submit" style={{ width: '100%', padding: '13px', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#000', background: `linear-gradient(135deg,${WF_BRAND},#9b7a2b)`, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                Continue in email →
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
                Opens your email app with a pre-filled message · <a href={`mailto:${DEMO_EMAIL}`} style={{ color: WF_BRAND, textDecoration: 'none' }}>{DEMO_EMAIL}</a>
              </p>
            </form>
          </Card>
        )}
      </div>
    </section>
  )
}
