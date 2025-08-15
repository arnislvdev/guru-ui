import type { ComponentSize, ComponentVariant } from '../types/common'
import { BaseCore, createComponentClasses } from './base'

export interface SwitchCoreOptions {
  size?: ComponentSize
  variant?: ComponentVariant
  disabled?: boolean
  required?: boolean
  label?: string
  description?: string
  loading?: boolean
  checked?: boolean
}

export class SwitchCore extends BaseCore {
  static getContainerClasses(): string {
    return 'flex items-start space-x-3'
  }

  static getClasses(options: SwitchCoreOptions): string {
    const baseClasses = [
      'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent',
      'transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
      options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    ].filter(Boolean).join(' ')

    // Size classes
    const sizeClasses = {
      xs: 'h-4 w-7',
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
      lg: 'h-7 w-14',
      xl: 'h-8 w-16',
      xxl: 'h-10 w-20'
    }

    // Variant classes (off state)
    const variantClasses = {
      default: 'bg-[color:var(--guru-body)]/20 focus:ring-[color:var(--guru-accent)]',
      primary: 'bg-[color:var(--guru-accent)]/20 focus:ring-[color:var(--guru-accent)]',
      secondary: 'bg-[color:var(--guru-body)]/20 focus:ring-[color:var(--guru-body)]',
      outline: 'bg-transparent border-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]',
      ghost: 'bg-[color:var(--guru-body)]/10 focus:ring-[color:var(--guru-body)]',
      danger: 'bg-red-500/20 focus:ring-red-500',
      error: 'bg-red-500/20 focus:ring-red-500',
      success: 'bg-green-500/20 focus:ring-green-500',
      warning: 'bg-yellow-500/20 focus:ring-yellow-500',
      info: 'bg-blue-500/20 focus:ring-blue-500',
      elevated: 'bg-[color:var(--guru-body)]/20 shadow-lg focus:ring-[color:var(--guru-accent)]',
      outlined: 'bg-transparent border-2 border-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]'
    }

    return createComponentClasses(baseClasses, sizeClasses, variantClasses, options)
  }

  static getActiveClasses(options: SwitchCoreOptions): string {
    // Variant classes (on state)
    const variantActiveClasses = {
      default: 'bg-[color:var(--guru-accent)]',
      primary: 'bg-[color:var(--guru-accent)]',
      secondary: 'bg-[color:var(--guru-body)]',
      outline: 'bg-[color:var(--guru-accent)]',
      ghost: 'bg-[color:var(--guru-body)]',
      danger: 'bg-red-500',
      error: 'bg-red-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500',
      elevated: 'bg-[color:var(--guru-accent)]',
      outlined: 'bg-[color:var(--guru-accent)]'
    }

    return variantActiveClasses[options.variant || 'default']
  }

  static getThumbClasses(options: SwitchCoreOptions): string {
    const baseClasses = [
      'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0',
      'transition duration-200 ease-in-out'
    ].join(' ')

    const sizeClasses = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
      xxl: 'h-9 w-9'
    }

    const size = options.size || 'md'
    return [baseClasses, sizeClasses[size]].join(' ')
  }

  static getThumbActiveClasses(options: SwitchCoreOptions): string {
    const sizeTranslateClasses = {
      xs: 'translate-x-3',
      sm: 'translate-x-4',
      md: 'translate-x-5',
      lg: 'translate-x-7',
      xl: 'translate-x-8',
      xxl: 'translate-x-10'
    }

    return sizeTranslateClasses[options.size || 'md']
  }

  static getLabelClasses(options: SwitchCoreOptions): string {
    const baseClasses = [
      'text-sm font-medium'
    ]

    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-lg',
      xxl: 'text-xl'
    }

    const variantClasses = {
      default: 'text-[color:var(--guru-heading)]',
      primary: 'text-[color:var(--guru-heading)]',
      secondary: 'text-[color:var(--guru-body)]',
      outline: 'text-[color:var(--guru-accent)]',
      ghost: 'text-[color:var(--guru-heading)]',
      danger: 'text-red-400',
      error: 'text-red-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      info: 'text-blue-400',
      elevated: 'text-[color:var(--guru-heading)]',
      outlined: 'text-[color:var(--guru-accent)]'
    }

    const disabledClasses = options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    const size = options.size || 'md'
    const variant = options.variant || 'default'

    return [
      ...baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      disabledClasses
    ].join(' ')
  }

  static getDescriptionClasses(options: SwitchCoreOptions): string {
    const baseClasses = [
      'text-sm'
    ]

    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-base',
      xxl: 'text-lg'
    }

    const variantClasses = {
      default: 'text-[color:var(--guru-body)]',
      primary: 'text-[color:var(--guru-body)]',
      secondary: 'text-[color:var(--guru-body)]',
      outline: 'text-[color:var(--guru-accent)]/80',
      ghost: 'text-[color:var(--guru-body)]',
      danger: 'text-red-400/80',
      error: 'text-red-400/80',
      success: 'text-green-400/80',
      warning: 'text-yellow-400/80',
      info: 'text-blue-400/80',
      elevated: 'text-[color:var(--guru-body)]',
      outlined: 'text-[color:var(--guru-accent)]/80'
    }

    const size = options.size || 'md'
    const variant = options.variant || 'default'

    return [
      ...baseClasses,
      sizeClasses[size],
      variantClasses[variant]
    ].join(' ')
  }

  static getLoadingClasses(): string {
    return 'animate-spin'
  }

  static getAccessibilityProps(options: SwitchCoreOptions) {
    return {
      ...this.getBaseAccessibilityProps(options.disabled),
      role: 'switch',
      'aria-checked': options.checked || false,
      'aria-required': options.required,
      'aria-describedby': options.description ? 'switch-description' : undefined,
      'aria-busy': options.loading || false
    }
  }

  static getDefaultOptions(): SwitchCoreOptions {
    return {
      size: 'md',
      variant: 'primary',
      disabled: false,
      required: false,
      label: '',
      description: '',
      loading: false,
      checked: false
    }
  }
}
