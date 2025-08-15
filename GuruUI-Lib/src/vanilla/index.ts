// Vanilla JavaScript Components - optimized for tree-shaking
export { GuruButton, createButton, initializeButtons } from './Button'
export { GuruModal, createModal, initializeModals } from './Modal'

// Import for local use
import { initializeButtons } from './Button'
import { initializeModals } from './Modal'

// Component options types
export type { ButtonOptions } from './Button'
export type { ModalOptions } from './Modal'

// Common types for vanilla JS
export type { 
  ComponentSize, 
  ComponentVariant, 
  StatusVariant 
} from '../types/common'

// Utilities for vanilla JS
export { cn, generateId, getFocusableElements } from '../utils'

// Global initialization function
export function initializeAllComponents(): void {
  if (typeof document === 'undefined') return
  
  initializeButtons()
  initializeModals()
}

// Auto-initialize on DOM ready if auto-init attribute is present
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelector('[data-guru-auto-init]')) {
        initializeAllComponents()
      }
    })
  } else if (document.querySelector('[data-guru-auto-init]')) {
    initializeAllComponents()
  }
}

// Note: CSS should be imported separately by the user
// import 'guru-ui/style.css'
