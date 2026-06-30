/*
 * Watchman by ESCT
 * Copyright © 2026 Owens F. Shepard. All rights reserved.
 * Created and developed by Owens F. Shepard for commercialization through
 * ESCT Holdings Incorporated, subject to written IP ownership and licensing agreements.
 * Confidential and proprietary. Unauthorized use, copying, modification,
 * distribution, or disclosure is prohibited.
 */

export const WATCHMAN_OPERATIONS_APP_URL =
  import.meta.env.VITE_WATCHMAN_OPERATIONS_URL?.replace(/\/$/, '') || 'https://watchmanbyesct.online'
