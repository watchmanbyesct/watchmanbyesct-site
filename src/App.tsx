/*
 * Watchman by ESCT — Application routing
 */

import React, { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import FieldAppDownload from './pages/FieldAppDownload'
import Home from './pages/Home'
import HelpUnavailable from './pages/HelpUnavailable'
import { WATCHMAN_SUITE_LOGIN_URL } from './config/suite'
import { HELP_CENTER_ENABLED } from './config/features'
import { WF_BRAND } from './lib/brand'

const HelpHome = lazy(() => import('./pages/help/HelpHome'))
const HelpProductIndex = lazy(() => import('./pages/help/HelpProductIndex'))
const HelpArticle = lazy(() => import('./pages/help/HelpArticle'))
const LegalHome = lazy(() => import('./pages/legal/LegalHome'))
const LegalProductIndex = lazy(() => import('./pages/legal/LegalProductIndex'))
const LegalDocument = lazy(() => import('./pages/legal/LegalDocument'))

function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url)
  }, [url])
  return (
    <div style={{ minHeight: '100vh', background: '#060606', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: WF_BRAND, fontSize: 14 }}>Redirecting…</span>
    </div>
  )
}

function RouteFallback() {
  return (
    <div style={{ minHeight: '100vh', background: '#060606', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <span style={{ color: WF_BRAND, fontSize: 14, fontWeight: 500 }}>Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<ExternalRedirect url={WATCHMAN_SUITE_LOGIN_URL} />} />
        <Route path="/launch" element={<Navigate to="/#suite" replace />} />
        <Route path="/academy" element={<Navigate to="/#suite" replace />} />
        <Route path="/operations" element={<Navigate to="/#suite" replace />} />
        <Route path="/finance" element={<Navigate to="/#suite" replace />} />
        <Route path="/hr" element={<Navigate to="/#suite" replace />} />
        <Route path="/crm" element={<Navigate to="/#suite" replace />} />
        <Route path="/contact" element={<Navigate to="/#products" replace />} />
        <Route path="/alert" element={<Navigate to="/#products" replace />} />
        <Route path="/access" element={<Navigate to="/#products" replace />} />
        <Route path="/bed-check" element={<Navigate to="/#products" replace />} />
        <Route path="/facilities" element={<Navigate to="/#products" replace />} />
        <Route path="/id" element={<Navigate to="/#products" replace />} />
        <Route path="/exchange" element={<Navigate to="/#products" replace />} />
        <Route path="/field-app" element={<FieldAppDownload />} />
        <Route path="/legal" element={<LegalHome />} />
        <Route path="/legal/:product" element={<LegalProductIndex />} />
        <Route path="/legal/:product/:docType" element={<LegalDocument />} />
        {!HELP_CENTER_ENABLED ? (
          <Route path="/help/*" element={<HelpUnavailable />} />
        ) : (
          <>
            <Route path="/help" element={<HelpHome />} />
            <Route path="/help/:product" element={<HelpProductIndex />} />
            <Route path="/help/:product/:slug" element={<HelpArticle />} />
          </>
        )}
      </Routes>
    </Suspense>
  )
}
