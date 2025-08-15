import { ComponentSize, ComponentVariant, CSS_VARS } from '../types/common'
import { BaseCore, createComponentClasses } from './base'

export interface ButtonCoreOptions {
  variant?: ComponentVariant
  size?: ComponentSize
  disabled?: boolean
  loading?: boolean
  iconOnly?: boolean
  fullWidth?: boolean
}

export class ButtonCore extends BaseCore {
  static getClasses(options: ButtonCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium',
      `rounded-[color:var(${CSS_VARS.radius})]`,
      options.fullWidth ? 'w-full' : '',
      options.iconOnly ? 'aspect-square p-0' : ''
    ].filter(Boolean).join(' ')

    // Size classes - different for text vs icon buttons
    const sizeClasses = options.iconOnly ? {
      sm: 'w-8 h-8 text-sm',
      md: 'w-9 h-9 text-sm', 
      lg: 'w-10 h-10 text-base',
      xl: 'w-12 h-12 text-lg'
    } : {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    }

    // Variant classes using consistent CSS variables
    const variantClasses = {
      primary: `bg-[color:var(${CSS_VARS.accent})] text-[color:var(${CSS_VARS.onAccent})] hover:bg-[color:var(${CSS_VARS.accentHover})]`,
      secondary: `bg-[color:var(${CSS_VARS.body})]/10 text-[color:var(${CSS_VARS.body})] hover:bg-[color:var(${CSS_VARS.body})]/20`,
      outline: `border border-[color:var(${CSS_VARS.accent})]/20 text-[color:var(${CSS_VARS.accent})] hover:bg-[color:var(${CSS_VARS.accent})]/10`,
      ghost: `text-[color:var(${CSS_VARS.body})] hover:bg-[color:var(${CSS_VARS.body})]/10`,
      danger: 'bg-red-600 text-white hover:bg-red-700'
    }

    return createComponentClasses(baseClasses, sizeClasses, variantClasses, options)
  }

  static getAccessibilityProps(options: ButtonCoreOptions) {
    return {
      ...this.getBaseAccessibilityProps(options.disabled || options.loading),
      type: 'button',
      'aria-busy': options.loading || false
    }
  }
}
