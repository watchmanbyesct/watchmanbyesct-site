/*
 * Watchman by ESCT
 * Copyright © 2026 Owens F. Shepard. All rights reserved.
 * Created and developed by Owens F. Shepard for commercialization through
 * ESCT Holdings Incorporated, subject to written IP ownership and licensing agreements.
 * Confidential and proprietary. Unauthorized use, copying, modification,
 * distribution, or disclosure is prohibited.
 */

/** Canonical Watchman Suite (staff app) — single multi-tenant platform. */
export const WATCHMAN_SUITE_APP_URL =
  import.meta.env.VITE_WATCHMAN_SUITE_APP_URL?.trim() || 'https://watchmanbyesct.online'

export const WATCHMAN_SUITE_LOGIN_URL = `${WATCHMAN_SUITE_APP_URL.replace(/\/$/, '')}/login`

/** ESCT public marketing / training site (Watchman Launch). */
export const WATCHMAN_ESCT_WEBSITE_URL =
  import.meta.env.VITE_WATCHMAN_ESCT_WEBSITE_URL?.trim() || 'https://www.esctroc.com'
