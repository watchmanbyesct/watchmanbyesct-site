type ProductLinkConfig = {
  label: string
  description: string
  loginUrl: string
  supportText: string
}

const withFallback = (value: string | undefined, fallback: string) => {
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : fallback
}

export const productLinks: ProductLinkConfig[] = [
  {
    label: 'Watchman Operations',
    description: 'Scheduling, field operations, incident reporting, and client service controls.',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_OPERATIONS_LOGIN_URL, '/operations'),
    supportText: 'Use your Operations credentials.',
  },
  {
    label: 'Watchman HR',
    description: 'Recruiting, onboarding, and workforce records for security organizations.',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_HR_LOGIN_URL, '/hr'),
    supportText: 'Use your HR credentials.',
  },
  {
    label: 'Watchman Finance',
    description: 'Billing workflows, reconciliation, payroll readiness, and financial reporting.',
    loginUrl: withFallback(import.meta.env.VITE_WATCHMAN_FINANCE_LOGIN_URL, '/finance'),
    supportText: 'Use your Finance credentials.',
  },
]
