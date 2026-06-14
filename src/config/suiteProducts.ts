import { WF_BRAND, WF_SUCCESS } from '../lib/brand'

export type SuiteProductId =
  | 'launch'
  | 'operations'
  | 'hr'
  | 'finance'
  | 'crm'
  | 'contact'
  | 'alert'

export type SuiteProductStatus = 'live' | 'new' | 'early-access'

const withFallback = (value: string | undefined, fallback: string) => {
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : fallback
}

export type SuiteProduct = {
  id: SuiteProductId
  name: string
  tagline: string
  description: string
  status: SuiteProductStatus
  statusLabel: string
  statusColor: string
  features: string[]
  landingPath: string
  loginUrl: string
  highlight?: boolean
  hasLandingPage: boolean
}

const statusMeta: Record<SuiteProductStatus, { label: string; color: string }> = {
  live: { label: 'Live', color: WF_SUCCESS },
  new: { label: 'New', color: WF_SUCCESS },
  'early-access': { label: 'Early Access', color: WF_BRAND },
}

export const SUITE_PRODUCTS: SuiteProduct[] = [
  {
    id: 'launch',
    name: 'Watchman Launch',
    tagline: 'Training Enrollment Platform',
    description:
      'The complete training management solution for security guard academies. Manage courses, enrollments, payments, and certifications in one place.',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    features: [
      'DCJS-compliant course management',
      'Online enrollment with Stripe',
      'Automated email confirmations',
      'Student records and certificates',
      'Full admin CMS',
      'Multi-role access control',
    ],
    landingPath: '/launch',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_LAUNCH_LOGIN_URL, 'https://www.esctroc.com'),
    hasLandingPage: true,
  },
  {
    id: 'operations',
    name: 'Watchman Operations',
    tagline: 'Security Operations Platform',
    description:
      'Real-time operations management for guard companies. Shift scheduling, post orders, incident tracking, and client reporting built for the field.',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    features: [
      'Guard scheduling and deployment',
      'Post orders and site management',
      'Incident reporting and escalation',
      'Client portal and reporting',
      'Mobile-ready for field use',
      'Multi-site and multi-client',
    ],
    landingPath: '/operations',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_OPERATIONS_LOGIN_URL, 'https://watchmanbyesct.online/login'),
    highlight: true,
    hasLandingPage: true,
  },
  {
    id: 'hr',
    name: 'Watchman HR',
    tagline: 'People & Workforce Platform',
    description:
      'Recruiting, onboarding, and workforce context built for security organizations—so hiring, credentials, and deployment stay connected instead of scattered across inboxes and spreadsheets.',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    features: [
      'Applicant pipeline and careers publishing',
      'References, checks, and offer workflows',
      'Onboarding aligned to training and credentials',
      'Role-based HR visibility and governance',
      'Hiring analytics for leadership and HR',
      'Designed to connect with Launch, Operations, and Finance',
    ],
    landingPath: '/hr',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_HR_LOGIN_URL, 'https://watchman-hr.vercel.app/login'),
    hasLandingPage: true,
  },
  {
    id: 'finance',
    name: 'Watchman Finance',
    tagline: 'Financial Operations Platform',
    description:
      'Finance workflows built for security organizations. Track invoicing, payments, payroll readiness, and financial reporting with accountability tied to operations.',
    status: 'new',
    statusLabel: statusMeta.new.label,
    statusColor: statusMeta.new.color,
    features: [
      'Invoice and billing workflows',
      'Payment tracking and reconciliation',
      'Payroll readiness and labor cost visibility',
      'Client account and contract tracking',
      'Financial dashboards and exports',
      'Connected to Watchman operations data',
    ],
    landingPath: '/finance',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_FINANCE_LOGIN_URL, 'https://watchman-finance.vercel.app/login'),
    hasLandingPage: true,
  },
  {
    id: 'crm',
    name: 'Watchman CRM',
    tagline: 'Revenue & Client Growth',
    description:
      'Pipeline, proposals, contracts, and client intelligence for security firms—connected to Operations delivery and Finance billing.',
    status: 'early-access',
    statusLabel: statusMeta['early-access'].label,
    statusColor: statusMeta['early-access'].color,
    features: [
      'Lead and pipeline management',
      'Proposals and contract workflows',
      'Client operations intelligence',
      'Compliance and portal visibility',
      'Connected to HR and Finance data',
      'Module-gated per tenant',
    ],
    landingPath: '/crm',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_CRM_LOGIN_URL, 'https://watchman-crm.vercel.app/login'),
    hasLandingPage: true,
  },
  {
    id: 'contact',
    name: 'Watchman Contact',
    tagline: 'Visitor & Front Desk',
    description:
      'Staff and kiosk contact workflows for sites that need governed visitor management alongside field operations.',
    status: 'early-access',
    statusLabel: statusMeta['early-access'].label,
    statusColor: statusMeta['early-access'].color,
    features: [
      'Staff contact management shell',
      'Kiosk mode for site check-in',
      'Tenant module entitlements',
      'Shared survivor Supabase backend',
      'Role-based access controls',
      'Designed for multi-site deployments',
    ],
    landingPath: '/contact',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_CONTACT_LOGIN_URL, 'https://watchman-contact.vercel.app/login'),
    hasLandingPage: true,
  },
  {
    id: 'alert',
    name: 'Watchman Alert',
    tagline: 'Emergency Command & Notification',
    description:
      'Emergency command center, panic alerts, and mass notification for organizations that need rapid escalation beyond day-to-day operations.',
    status: 'early-access',
    statusLabel: statusMeta['early-access'].label,
    statusColor: statusMeta['early-access'].color,
    features: [
      'Emergency command center',
      'Panic and duress alert routing',
      'Mass notification workflows',
      'Integrated with Operations incidents',
      'Module-gated per tenant',
      'Shared survivor Supabase backend',
    ],
    landingPath: '/alert',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_ALERT_LOGIN_URL, 'https://watchman-alert.vercel.app/login'),
    hasLandingPage: true,
  },
]

export const CORE_SUITE_PRODUCTS = SUITE_PRODUCTS.filter((p) =>
  p.id === 'launch' || p.id === 'operations' || p.id === 'hr' || p.id === 'finance',
)

export const EXTENDED_SUITE_PRODUCTS = SUITE_PRODUCTS.filter((p) =>
  p.id === 'crm' || p.id === 'contact' || p.id === 'alert',
)

/** @deprecated Use CORE_SUITE_PRODUCTS */
export const FEATURED_SUITE_PRODUCTS = CORE_SUITE_PRODUCTS

export function getSuiteProduct(id: SuiteProductId): SuiteProduct | undefined {
  return SUITE_PRODUCTS.find((p) => p.id === id)
}
