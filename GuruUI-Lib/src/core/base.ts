import { ComponentSize, ComponentVariant, CSS_VARS, TRANSITIONS } from '../types/common'

// Base class utilities that all components can extend
export abstract class BaseCore {
  // Common size classes that all components can use
  static getSizeClasses(size: ComponentSize): string {
    const sizes = {
      sm: 'text-sm',
      md: 'text-sm', 
      lg: 'text-base',
      xl: 'text-lg'
    }
    return sizes[size]
  }

  // Common transition classes
  static getTransitionClasses(): string {
    return `transition-all duration-[${TRANSITIONS.normal}] ease-in-out`
  }

  // Common focus classes
  static getFocusClasses(): string {
    return `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(${CSS_VARS.accent})] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(${CSS_VARS.background})]`
  }

  // Common disabled classes
  static getDisabledClasses(): string {
    return 'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
  }

  // Generate CSS variable references
  static cssVar(name: string, fallback?: string): string {
    return fallback ? `var(${name}, ${fallback})` : `var(${name})`
  }

  // Common accessibility props
  static getBaseAccessibilityProps(disabled?: boolean) {
    return {
      'aria-disabled': disabled || false,
      ...(disabled && { tabIndex: -1 })
    }
  }
}

// Utility for consistent class generation
export function createComponentClasses(
  baseClasses: string,
  sizeClasses: Record<ComponentSize, string>,
  variantClasses: Record<string, string>,
  options: {
    size?: ComponentSize
    variant?: string
    disabled?: boolean
    className?: string
  }
): string {
  const classes = [
    baseClasses,
    BaseCore.getTransitionClasses(),
    BaseCore.getFocusClasses(),
    sizeClasses[options.size || 'md'],
    variantClasses[options.variant || 'primary']
  ]

  if (options.disabled) {
    classes.push(BaseCore.getDisabledClasses())
  }

  if (options.className) {
    classes.push(options.className)
  }

  return classes.filter(Boolean).join(' ')
}
