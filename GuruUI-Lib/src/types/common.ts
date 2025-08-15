// Common types used across components for consistency
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl'
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'

// Status variants for feedback components
export type StatusVariant = 'info' | 'success' | 'warning' | 'error'

// Common props for all components
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// CSS variable names - consistent naming convention
export const CSS_VARS = {
  // Colors
  background: '--guru-background',
  foreground: '--guru-foreground',
  heading: '--guru-heading',
  body: '--guru-body',
  accent: '--guru-accent',
  accentHover: '--guru-accent-hover',
  onAccent: '--guru-on-accent',
  
  // Layout
  radius: '--guru-radius',
  font: '--guru-font',
  
  // Shadows
  shadowSm: '--guru-shadow-sm',
  shadowMd: '--guru-shadow-md',
  shadowLg: '--guru-shadow-lg',
} as const

// Animation durations
export const TRANSITIONS = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
} as const

// Z-index scale
export const Z_INDEX = {
  dropdown: 1000,
  modal: 1050,
  popover: 1100,
  tooltip: 1200,
  toast: 1300,
} as const
