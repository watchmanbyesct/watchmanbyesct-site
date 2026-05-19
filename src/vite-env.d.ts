/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production URL of Watchman Operations (PWA). Used for QR and install links. */
  readonly VITE_WATCHMAN_OPERATIONS_URL?: string
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
