/*
 * Watchman by ESCT
 *
 * Copyright © 2026 Owens F. Shepard. All rights reserved.
 *
 * Created and developed by Owens F. Shepard for use within the Watchman by ESCT
 * product ecosystem and for commercialization through ESCT Holdings Incorporated,
 * subject to written intellectual property ownership, licensing, and authorization
 * agreements.
 *
 * No ownership rights, copyright rights, license rights, sublicensing rights,
 * distribution rights, or commercialization rights are granted by this file except
 * as expressly authorized in writing by Owens F. Shepard or the lawful copyright
 * owner.
 *
 * This source code, including its structure, organization, design, logic,
 * workflows, interfaces, documentation, and related materials, is confidential
 * and proprietary. Unauthorized copying, modification, distribution, disclosure,
 * reverse engineering, or use is strictly prohibited.
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WATCHMAN_SUITE_APP_URL?: string
  readonly VITE_WATCHMAN_ESCT_WEBSITE_URL?: string
  readonly VITE_WATCHMAN_OPERATIONS_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
