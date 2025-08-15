// Vue 3 Components - optimized exports
export { default as Button } from './Button.vue'
export { default as Modal } from './Modal.vue'
export { default as Alert } from './Alert.vue'
export { default as Avatar } from './Avatar.vue'
export { default as Checkbox } from './Checkbox.vue'
export { default as Toggle } from './Toggle.vue'
export { default as Progress } from './Progress.vue'

// Theme system for Vue
export { ThemeProvider, useTheme } from '../theme/ThemeProvider'
export { themes } from '../theme/presets'

// Utilities for Vue
export { cn } from '../utils/cn'

// Common types
export type { 
  ComponentSize, 
  ComponentVariant, 
  StatusVariant 
} from '../types/common'

// Import types for local use
import type { ComponentSize, ComponentVariant } from '../types/common'

// Vue-specific types
export interface VueButtonProps {
  variant?: ComponentVariant
  size?: ComponentSize
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// Note: CSS should be imported separately by the user
// import 'guru-ui/style.css'
