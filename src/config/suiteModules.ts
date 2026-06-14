import { WF_BRAND, WF_SUCCESS } from '../lib/brand'
import { WATCHMAN_ESCT_WEBSITE_URL } from './suite'

export type SuiteModuleStatus = 'live' | 'coming-q4-2026'

export type SuiteModule = {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  status: SuiteModuleStatus
  statusLabel: string
  statusColor: string
  highlight?: boolean
  /** Launch only — public website URL */
  publicUrl?: string
}

const statusMeta = {
  live: { label: 'Live', color: WF_SUCCESS },
  'coming-q4-2026': { label: 'Coming Q4 2026', color: WF_BRAND },
} as const

export const LIVE_SUITE_MODULES: SuiteModule[] = [
  {
    id: 'launch',
    name: 'Launch',
    tagline: 'Public website & front door',
    description:
      'Your organization’s public face — services, careers, resources, and training enrollment UX. Launch is the front door that connects prospects and trainees to Watchman Suite.',
    features: [
      'Public website CMS & page publishing',
      'Careers and service inquiries',
      'Training enrollment & Stripe checkout',
      'Student and instructor portal entry',
      'Legal, blog, and resource pages',
      'Connected to Suite tenant identity',
    ],
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
    highlight: true,
    publicUrl: WATCHMAN_ESCT_WEBSITE_URL,
  },
  {
    id: 'academy',
    name: 'Academy',
    tagline: 'Training & compliance module',
    description:
      'The staff training module inside Suite — DCJS-compliant courses, sessions, attendance, certificates, and academy administration for security organizations.',
    features: [
      'Course & session management',
      'Enrollment administration & records',
      'Instructor attendance & compliance',
      'Certificate generation',
      'Trainee credential tracking',
      'Registration policy attestations',
    ],
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
  },
  {
    id: 'operations',
    name: 'Operations',
    tagline: 'Field & command center',
    description:
      'Scheduling, post orders, incidents, patrol, DARs, client reporting, and the guard field app — built for multi-site security companies.',
    features: [
      'Guard scheduling & open shifts',
      'Post orders, sites, and checkpoints',
      'Incident reporting & command center',
      'Client portal & proof packs',
      'Mobile field app (iOS & Android)',
      'Lone-worker and panic workflows',
    ],
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
  },
  {
    id: 'hr',
    name: 'HR',
    tagline: 'People & workforce',
    description:
      'Recruiting, onboarding, credentials, time-off, and personnel files — so hiring and deployment stay tied to training and operations data.',
    features: [
      'Careers publishing & applicant pipeline',
      'References, checks, and offers',
      'Employee onboarding workflows',
      'Credential tracking & compliance',
      'Org chart & compensation',
      'Governed personnel records',
    ],
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
  },
  {
    id: 'finance',
    name: 'Finance',
    tagline: 'Billing & ledger',
    description:
      'Invoicing, AR/AP, payroll preparation, bank feeds, and GL — with posting rules that connect operations time and contracts to the books.',
    features: [
      'Client invoicing & portal checkout',
      'Payroll runs & liability tracking',
      'Bank reconciliation & feeds',
      'GL, journals, and close',
      'QuickBooks & integration hub',
      'Role-based finance controls',
    ],
    status: 'live',
    statusLabel: statusMeta.live.label,
    statusColor: statusMeta.live.color,
  },
]

export const ROADMAP_SUITE_MODULES: SuiteModule[] = [
  {
    id: 'bed-check',
    name: 'Bed Check',
    tagline: 'Overnight & residential checks',
    description:
      'Bed-check workflows for residential and overnight assignments — tied to site rosters, compliance windows, and operational accountability.',
    features: [
      'Scheduled bed-check rounds',
      'Site and resident assignment context',
      'Exception and missed-check escalation',
      'Audit trail for compliance reviews',
      'Connected to Operations sites',
      'Module-gated per tenant',
    ],
    status: 'coming-q4-2026',
    statusLabel: statusMeta['coming-q4-2026'].label,
    statusColor: statusMeta['coming-q4-2026'].color,
  },
  {
    id: 'alert',
    name: 'Alert',
    tagline: 'Emergency command & notification',
    description:
      'Emergency command center, panic alerts, and mass notification for organizations that need rapid escalation beyond day-to-day operations.',
    features: [
      'Emergency command center',
      'Panic and duress alert routing',
      'Mass notification workflows',
      'Integrated with Operations incidents',
      'Workflow playbooks and run logs',
      'Module-gated per tenant',
    ],
    status: 'coming-q4-2026',
    statusLabel: statusMeta['coming-q4-2026'].label,
    statusColor: statusMeta['coming-q4-2026'].color,
  },
  {
    id: 'access',
    name: 'Access',
    tagline: 'Visitor & credential control',
    description:
      'Visitor management, door and gate events, and credential access control integrated with Operations sites and personnel records.',
    features: [
      'Visitor check-in and badging',
      'Door and gate event monitoring',
      'Credential and role-based access',
      'Site-level access policies',
      'Integration with Operations posts',
      'Module-gated per tenant',
    ],
    status: 'coming-q4-2026',
    statusLabel: statusMeta['coming-q4-2026'].label,
    statusColor: statusMeta['coming-q4-2026'].color,
  },
  {
    id: 'facilities',
    name: 'Facilities',
    tagline: 'Maintenance & physical security',
    description:
      'Facilities maintenance, work orders, and physical-security program management for multi-site organizations.',
    features: [
      'Work order and maintenance tracking',
      'Asset and facility records',
      'Preventive maintenance schedules',
      'Vendor and contractor coordination',
      'Tied to site and client context',
      'Module-gated per tenant',
    ],
    status: 'coming-q4-2026',
    statusLabel: statusMeta['coming-q4-2026'].label,
    statusColor: statusMeta['coming-q4-2026'].color,
  },
  {
    id: 'id',
    name: 'ID',
    tagline: 'Identity & credential issuance',
    description:
      'Identity and credential issuance — badges, licenses, and governed personnel ID records connected to HR and Operations.',
    features: [
      'Badge and credential templates',
      'License and certification tracking',
      'Photo and ID card workflows',
      'Revocation and renewal controls',
      'Linked to HR personnel records',
      'Module-gated per tenant',
    ],
    status: 'coming-q4-2026',
    statusLabel: statusMeta['coming-q4-2026'].label,
    statusColor: statusMeta['coming-q4-2026'].color,
  },
]
