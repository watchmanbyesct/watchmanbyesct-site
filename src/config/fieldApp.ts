/**
 * Public URL for the Watchman Operations PWA (field / guard / supervisor mobile).
 * Override with VITE_WATCHMAN_OPERATIONS_URL in Vercel or .env for local builds.
 */
export const WATCHMAN_OPERATIONS_APP_URL =
  import.meta.env.VITE_WATCHMAN_OPERATIONS_URL?.replace(/\/$/, '') || 'https://watchmanbyesct.online'
