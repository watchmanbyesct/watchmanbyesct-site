/** Canonical Watchman Suite brand tokens — see esct-watchman-operations/BRAND_STANDARD.md */
export const WF_BRAND = '#c9a030'
export const WF_BRAND_RGB = '201, 160, 48'
export const WF_BRAND_DARK = '#9b7a2b'
export const WF_BRAND_LIGHT = '#e0b840'
export const WF_BG_APP = '#0a0a0a'
export const WF_BG_SURFACE = '#0d0d0d'
export const WF_BG_PAGE = '#060606'
export const WF_SUCCESS = '#22c55e'

export const brandRgba = (alpha: number) => `rgba(${WF_BRAND_RGB}, ${alpha})`

export const brandGradient = `linear-gradient(135deg, ${WF_BRAND}, ${WF_BRAND_DARK})`
