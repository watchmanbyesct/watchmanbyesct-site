/*
 * Watchman by ESCT — Ecosystem product catalog (single source of truth for marketing site)
 */

import { WF_BRAND, WF_SUCCESS } from '../lib/brand'
import { WATCHMAN_ESCT_WEBSITE_URL } from './suite'

export type ProductCategory = 'suite-module' | 'standalone' | 'community'
export type ProductStatus = 'live' | 'beta' | 'coming-soon'
export type ClientType = 'web' | 'pwa' | 'native-ios' | 'native-android' | 'desktop'

export type EcosystemProduct = {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  category: ProductCategory
  status: ProductStatus
  statusLabel: string
  statusColor: string
  clientTypes: ClientType[]
  nativeAppNote?: string
  integratesWithSuite: boolean
  publicUrl?: string
  specSheetUrl?: string
  screenshotUrl?: string
  demoInterestKey: string
  targetAudiences: string[]
  highlight?: boolean
  sectionAnchor: string
}

const statusMeta = {
  live: { label: 'Live', color: WF_SUCCESS },
  beta: { label: 'Beta', color: WF_BRAND },
  'coming-soon': { label: 'Coming soon', color: WF_BRAND },
} as const

export const EXCHANGE_WEB_URL = 'https://watchman-exchange-web.vercel.app'

/** Public marketing screenshot per module (see public/screenshots/). */
export const moduleScreenshot = (id: string) => `/screenshots/${id}.png`

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'launch',
    name: 'Launch',
    tagline: 'Public website & front door',
    description:
      'Your organization\'s public face — services, careers, resources, and training enrollment. Launch connects prospects and trainees to Watchman Suite.',
    features: [
      'Website editor and page publishing',
      'Careers and service inquiries',
      'Training enrollment and online payments',
      'Student and instructor portal entry',
      'Legal, blog, and resource pages',
      'Matched to your organization\'s branding',
    ],
    category: 'suite-module',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    clientTypes: ['web'],
    integratesWithSuite: true,
    publicUrl: WATCHMAN_ESCT_WEBSITE_URL,
    specSheetUrl: '/Watchman_Launch_Spec_Sheet.pdf',
    screenshotUrl: moduleScreenshot('launch'),
    demoInterestKey: 'launch',
    targetAudiences: ['Security companies', 'Training academies'],
    highlight: true,
    sectionAnchor: 'suite',
  },
  {
    id: 'academy',
    name: 'Academy',
    tagline: 'Training & compliance module',
    description:
      'The staff training module inside Suite — certified courses, sessions, attendance, certificates, and academy administration for security organizations.',
    features: [
      'Course and session management',
      'Enrollment administration and records',
      'Instructor attendance and compliance',
      'Certificate generation',
      'Trainee credential tracking',
      'Registration policy attestations',
    ],
    category: 'suite-module',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    clientTypes: ['web'],
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('academy'),
    demoInterestKey: 'academy',
    targetAudiences: ['Security companies', 'Certified trainers'],
    sectionAnchor: 'suite',
  },
  {
    id: 'operations',
    name: 'Operations',
    tagline: 'Field & command center',
    description:
      'Scheduling, post orders, incidents, patrol, daily activity reports, client reporting, and the guard field app — built for multi-site security companies.',
    features: [
      'Guard scheduling and open shifts',
      'Post orders, sites, and checkpoints',
      'Incident reporting and command center',
      'Client portal and proof packs',
      'Mobile field app for iPhone and Android',
      'Lone-worker and panic workflows',
    ],
    category: 'suite-module',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    clientTypes: ['web', 'pwa', 'native-ios', 'native-android'],
    nativeAppNote: 'Mobile field app for iPhone and Android — patrol checkpoints and offline use in the field',
    integratesWithSuite: true,
    specSheetUrl: '/Watchman_Operations_Spec_Sheet.pdf',
    screenshotUrl: moduleScreenshot('operations'),
    demoInterestKey: 'operations',
    targetAudiences: ['Security companies', 'Multi-site operators'],
    sectionAnchor: 'suite',
  },
  {
    id: 'hr',
    name: 'HR',
    tagline: 'People & workforce',
    description:
      'Recruiting, onboarding, credentials, time-off, and personnel files — so hiring and deployment stay tied to training and operations data.',
    features: [
      'Careers publishing and applicant pipeline',
      'References, checks, and offers',
      'Employee onboarding workflows',
      'Credential tracking and compliance',
      'Org chart and compensation',
      'Secure personnel records',
    ],
    category: 'suite-module',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    clientTypes: ['web'],
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('hr'),
    demoInterestKey: 'hr',
    targetAudiences: ['Security companies', 'HR teams'],
    sectionAnchor: 'suite',
  },
  {
    id: 'finance',
    name: 'Finance',
    tagline: 'Billing & ledger',
    description:
      'Invoicing, billing, payroll preparation, bank feeds, and accounting — with rules that connect operations time and contracts to the books.',
    features: [
      'Client invoicing and portal checkout',
      'Payroll runs and liability tracking',
      'Bank reconciliation and feeds',
      'General ledger, journals, and close',
      'QuickBooks and accounting integrations',
      'Secure finance controls by role',
    ],
    category: 'suite-module',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    clientTypes: ['web'],
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('finance'),
    demoInterestKey: 'finance',
    targetAudiences: ['Security companies', 'Finance teams'],
    sectionAnchor: 'suite',
  },
  {
    id: 'crm',
    name: 'CRM',
    tagline: 'Sales & client relationships',
    description:
      'Pipeline, proposals, contracts, client portal, service commitments, and site assessments — sales and operations in one workspace for security firms.',
    features: [
      'Sales pipeline and lead management',
      'Proposals, contracts, and profitability',
      'Client portal for incidents and service requests',
      'Site assessments and staffing readiness',
      'Service commitment tracking and dispatch',
      'Enterprise regions and branch hierarchy',
    ],
    category: 'suite-module',
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    clientTypes: ['web', 'pwa'],
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('crm'),
    demoInterestKey: 'crm',
    targetAudiences: ['Security companies', 'Sales and account teams'],
    sectionAnchor: 'suite',
  },
  {
    id: 'contact',
    name: 'Contact',
    tagline: 'Intake & contact management',
    description:
      'Intake and contact management for front-desk and intake teams — custom forms, kiosk mode, follow-ups, and activity timelines.',
    features: [
      'Manage contacts, tags, notes, and follow-ups',
      'Custom intake form builder',
      'Kiosk mode for tablet intake',
      'Pending inbox and duplicate merge',
      'Works offline with draft queue',
      'Optional Suite integration',
    ],
    category: 'standalone',
    status: 'live',
    statusLabel: 'Standalone · Available now',
    statusColor: WF_SUCCESS,
    clientTypes: ['web', 'pwa'],
    nativeAppNote: 'Installable on tablets for kiosk and field intake',
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('contact'),
    demoInterestKey: 'contact',
    targetAudiences: ['Security firms', 'Front-desk teams'],
    sectionAnchor: 'products',
  },
  {
    id: 'alert',
    name: 'Alert',
    tagline: 'Emergency command & notification',
    description:
      'Emergency command center, panic alerts, and mass notification for organizations that need rapid escalation beyond day-to-day operations.',
    features: [
      'Multi-channel emergency alerting',
      'Panic and duress from mobile and fixed devices',
      'Map-based command center with live incidents',
      'Emergency templates and automated workflows',
      'Incident room with timeline and escalation',
      'Optional Operations integration',
    ],
    category: 'standalone',
    status: 'live',
    statusLabel: 'Standalone · Available now',
    statusColor: WF_SUCCESS,
    clientTypes: ['web', 'native-ios', 'native-android'],
    nativeAppNote: 'Alert Mobile for iPhone and Android — panic and emergency notifications',
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('alert'),
    demoInterestKey: 'alert',
    targetAudiences: ['Schools and campuses', 'Healthcare', 'Multi-site organizations'],
    sectionAnchor: 'products',
  },
  {
    id: 'access',
    name: 'Access',
    tagline: 'Access control & intelligence',
    description:
      'Cloud-managed access control — credentials, doors and zones, lockdown workflows, and access intelligence for enterprise security programs.',
    features: [
      'Door, gate, and zone management',
      'Credential lifecycle for cards, mobile, and PINs',
      'Access event monitoring and audit trail',
      'Lockdown and unlock with full audit',
      'Access intelligence and risk indicators',
      'Pairs with Watchman Alert',
    ],
    category: 'standalone',
    status: 'live',
    statusLabel: 'Standalone · Available now',
    statusColor: WF_SUCCESS,
    clientTypes: ['web'],
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('access'),
    demoInterestKey: 'access',
    targetAudiences: ['Commercial and industrial', 'Campuses', 'Multi-site operators'],
    sectionAnchor: 'products',
  },
  {
    id: 'bed-check',
    name: 'BedCheck',
    tagline: 'Verified welfare rounds',
    description:
      'For facilities that must conduct recurring welfare checks — tap-to-verify rounds, compliance reports, and supervisor review for residential and care settings.',
    features: [
      'Tag registration and scan verification',
      'Round rules, windows, and completion tracking',
      'Supervisor review and escalation workflows',
      'Report center with PDF, spreadsheet, and print exports',
      'Resident privacy model by ID, room, and bed',
      'Works offline on mobile, syncs when connected',
    ],
    category: 'standalone',
    status: 'live',
    statusLabel: 'Standalone · Available now',
    statusColor: WF_SUCCESS,
    clientTypes: ['web', 'native-ios', 'native-android', 'desktop'],
    nativeAppNote: 'BedCheck Mobile for iPhone and Android, plus desktop tools for supervisors',
    integratesWithSuite: false,
    screenshotUrl: moduleScreenshot('bed-check'),
    demoInterestKey: 'bed-check',
    targetAudiences: ['Residential treatment', 'Group homes', 'Shelters and transitional housing'],
    sectionAnchor: 'products',
  },
  {
    id: 'facilities',
    name: 'Facilities',
    tagline: 'Enterprise facilities intelligence',
    description:
      'Maintenance management and operational intelligence — work orders, inspections, assets, dispatch, building systems integration, and emergency ops for facilities teams.',
    features: [
      'Work orders with full lifecycle tracking',
      'Preventive maintenance and asset tracking',
      'Dynamic inspections and safety incidents',
      'Dispatch command center',
      'Building systems and sensor monitoring',
      'Security coordination with Alert',
    ],
    category: 'standalone',
    status: 'live',
    statusLabel: 'Standalone · Available now',
    statusColor: WF_SUCCESS,
    clientTypes: ['web', 'native-ios', 'native-android'],
    nativeAppNote: 'Facilities Mobile for field technicians — works offline in the field',
    integratesWithSuite: false,
    screenshotUrl: moduleScreenshot('facilities'),
    demoInterestKey: 'facilities',
    targetAudiences: ['Enterprise facilities', 'Property management', 'Multi-site operators'],
    sectionAnchor: 'products',
  },
  {
    id: 'id',
    name: 'ID',
    tagline: 'Badge & credential issuance',
    description:
      'Badge and credential management — template designer, print queue, photo kiosk, and sync with HR and Operations.',
    features: [
      'Badge and credential template designer',
      'Print queue and local print support',
      'Photo kiosk for tablet capture',
      'Card inventory and lifecycle',
      'HR roster sync and field issuance',
      'Secure sign-in and governed revocation',
    ],
    category: 'standalone',
    status: 'live',
    statusLabel: 'Standalone · Available now',
    statusColor: WF_SUCCESS,
    clientTypes: ['web', 'desktop'],
    nativeAppNote: 'Desktop print support and tablet photo kiosk',
    integratesWithSuite: true,
    screenshotUrl: moduleScreenshot('id'),
    demoInterestKey: 'id',
    targetAudiences: ['Security firms', 'Reception and ID desks'],
    sectionAnchor: 'products',
  },
  {
    id: 'exchange',
    name: 'Exchange',
    tagline: 'Professional network for security',
    description:
      'The network for safety and security professionals — profiles, communities, jobs, direct messages, and endorsements. Always free to join.',
    features: [
      'Verified professional profiles',
      '15 industry communities',
      'Direct messaging and connections',
      'Job opportunities and resources',
      'Endorsements and skill badges',
      'Mobile app for iPhone and Android',
    ],
    category: 'community',
    status: 'live',
    statusLabel: 'Free to join',
    statusColor: WF_SUCCESS,
    clientTypes: ['web', 'native-ios', 'native-android'],
    nativeAppNote: 'Exchange Mobile for iPhone and Android',
    integratesWithSuite: false,
    publicUrl: EXCHANGE_WEB_URL,
    screenshotUrl: moduleScreenshot('exchange'),
    demoInterestKey: 'exchange',
    targetAudiences: ['Security professionals', 'Investigators', 'Facilities leaders'],
    sectionAnchor: 'products',
  },
]

export const SUITE_MODULES = ECOSYSTEM_PRODUCTS.filter(p => p.category === 'suite-module')
export const STANDALONE_PRODUCTS = ECOSYSTEM_PRODUCTS.filter(p => p.category === 'standalone')
export const COMMUNITY_PRODUCTS = ECOSYSTEM_PRODUCTS.filter(p => p.category === 'community')

export type NativeAppEntry = {
  id: string
  name: string
  productId: string
  purpose: string
  platforms: ('ios' | 'android' | 'pwa')[]
  href?: string
}

export const NATIVE_APPS: NativeAppEntry[] = [
  {
    id: 'operations-field',
    name: 'Operations Field App',
    productId: 'operations',
    purpose: 'Guard scheduling, patrol, daily reports, incidents, and checkpoint verification',
    platforms: ['ios', 'android', 'pwa'],
    href: '/field-app',
  },
  {
    id: 'alert-mobile',
    name: 'Alert Mobile',
    productId: 'alert',
    purpose: 'Panic alerts and emergency notifications in the field',
    platforms: ['ios', 'android'],
  },
  {
    id: 'bedcheck-mobile',
    name: 'BedCheck Mobile',
    productId: 'bed-check',
    purpose: 'Welfare round verification — works offline in the field',
    platforms: ['ios', 'android'],
  },
  {
    id: 'facilities-mobile',
    name: 'Facilities Mobile',
    productId: 'facilities',
    purpose: 'Field technician work orders and inspections',
    platforms: ['ios', 'android'],
  },
  {
    id: 'exchange-mobile',
    name: 'Exchange Mobile',
    productId: 'exchange',
    purpose: 'Professional networking on the go',
    platforms: ['ios', 'android'],
    href: EXCHANGE_WEB_URL,
  },
  {
    id: 'suite-comms',
    name: 'Suite Mail & Voice',
    productId: 'operations',
    purpose: 'Mail and voice communications for Suite organizations',
    platforms: ['ios', 'android'],
  },
]

export const DEMO_INTEREST_OPTIONS = [
  { group: 'Watchman Suite', options: [
    { value: 'suite', label: 'Watchman Suite (full platform)' },
    ...SUITE_MODULES.map(m => ({ value: m.demoInterestKey, label: m.name })),
  ]},
  { group: 'Standalone Products', options: STANDALONE_PRODUCTS.map(m => ({ value: m.demoInterestKey, label: m.name })) },
  { group: 'Community', options: COMMUNITY_PRODUCTS.map(m => ({ value: m.demoInterestKey, label: m.name })) },
  { group: 'Other', options: [{ value: 'enterprise', label: 'Enterprise / custom' }] },
]

export function getProductById(id: string): EcosystemProduct | undefined {
  return ECOSYSTEM_PRODUCTS.find(p => p.id === id)
}

export function hasNativeApp(product: EcosystemProduct): boolean {
  return product.clientTypes.some(t => t === 'native-ios' || t === 'native-android')
}
