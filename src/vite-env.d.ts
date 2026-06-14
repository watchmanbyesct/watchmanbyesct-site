/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WATCHMAN_SUITE_APP_URL?: string
  readonly VITE_WATCHMAN_ESCT_WEBSITE_URL?: string
  readonly VITE_WATCHMAN_OPERATIONS_URL?: string
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
