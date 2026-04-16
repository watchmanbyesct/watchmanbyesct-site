/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production URL of Watchman Operations (PWA). Used for QR and install links. */
  readonly VITE_WATCHMAN_OPERATIONS_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
