import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Smartphone, Share2, PlusSquare } from 'lucide-react'
import QRCode from 'react-qr-code'
import { WATCHMAN_OPERATIONS_APP_URL } from '../config/fieldApp'

const GOLD = '#d4a843'
const maxW = { maxWidth: 720, margin: '0 auto', padding: '0 24px' }

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(6,6,6,0.96)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ ...maxW, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/watchman-logo.png" alt="Watchman by ESCT" style={{ height: 36, width: 'auto' }} />
        </Link>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>
    </nav>
  )
}

export default function FieldAppDownload() {
  const url = WATCHMAN_OPERATIONS_APP_URL

  return (
    <div style={{ background: '#060606', minHeight: '100vh', paddingTop: 60 }}>
      <Nav />
      <section style={{ padding: 'clamp(48px,6vw,80px) 24px 80px' }}>
        <div style={maxW}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>
            Watchman Operations
          </p>
          <h1 style={{
            fontSize: 'clamp(1.75rem,4vw,2.25rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 16,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            Field app — install on your phone
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32, maxWidth: 560 }}>
            Open the link on your mobile device to sign in. Add the app to your home screen for a full-screen experience (PWA).
            Scan the QR code with your phone camera to open the same link.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr)',
            gap: 28,
            alignItems: 'start',
          }}
            className="field-app-grid"
          >
            <div style={{
              background: '#fff',
              padding: 20,
              borderRadius: 16,
              display: 'inline-block',
              width: 'fit-content',
              maxWidth: '100%',
            }}>
              <QRCode
                value={url}
                size={220}
                level="M"
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              />
            </div>

            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                App link
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  wordBreak: 'break-all',
                  fontSize: 15,
                  fontWeight: 600,
                  color: GOLD,
                  textDecoration: 'none',
                  marginBottom: 20,
                }}
              >
                {url}
              </a>
              <button
                type="button"
                onClick={() => { void navigator.clipboard.writeText(url) }}
                style={{
                  padding: '10px 18px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#000',
                  background: `linear-gradient(135deg,${GOLD},#9b7a2b)`,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Copy link
              </button>
            </div>
          </div>

          <div style={{ marginTop: 44, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: GOLD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Add to home screen
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Share2 size={18} color={GOLD} />
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>iPhone / iPad (Safari)</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    Tap the Share button, then <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Add to Home Screen</strong>.
                  </p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlusSquare size={18} color={GOLD} />
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Android (Chrome)</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    Open the menu (⋮) and tap <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Add to Home screen</strong> or <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Install app</strong>.
                  </p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={18} color={GOLD} />
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Desktop</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    Use the link above in Chrome or Edge; you can still install as an app from the address bar when supported.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', marginTop: 32, lineHeight: 1.6 }}>
            Questions?{' '}
            <a href="mailto:info@watchmanbyesct.com" style={{ color: GOLD, textDecoration: 'none' }}>info@watchmanbyesct.com</a>
          </p>
        </div>
      </section>
      <style>{`
        @media (min-width: 640px) {
          .field-app-grid {
            grid-template-columns: auto 1fr !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  )
}
