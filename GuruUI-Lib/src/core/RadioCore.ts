import type { ComponentSize, ComponentVariant } from '../types/common'
import { BaseCore, createComponentClasses } from './base'

export interface RadioCoreOptions {
  size?: ComponentSize
  variant?: ComponentVariant
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  checked?: boolean
  error?: boolean
  orientation?: 'horizontal' | 'vertical'
}

export class RadioCore extends BaseCore {
  static getGroupClasses(options: RadioCoreOptions): string {
    const baseClasses = [
      'flex gap-3'
    ]

    const orientationClasses = {
      horizontal: 'flex-row',
      vertical: 'flex-col'
    }

    return [
      ...baseClasses,
      orientationClasses[options.orientation || 'vertical']
    ].join(' ')
  }

  static getItemClasses(): string {
    return 'flex items-center space-x-3'
  }

  static getClasses(options: RadioCoreOptions): string {
    const baseClasses = [
      'flex-shrink-0 rounded-full border transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    ].filter(Boolean).join(' ')

    // Size classes
    const sizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-7 h-7',
      xxl: 'w-8 h-8'
    }

    // Variant classes
    const variantClasses = {
      default: 'border-[color:var(--guru-body)]/20 bg-[color:var(--guru-background)] text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]',
      primary: 'border-[color:var(--guru-accent)]/30 bg-[color:var(--guru-background)] text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]',
      secondary: 'border-[color:var(--guru-body)]/30 bg-[color:var(--guru-background)] text-[color:var(--guru-body)] focus:ring-[color:var(--guru-body)]',
      outline: 'border-[color:var(--guru-accent)] bg-transparent text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]',
      ghost: 'border-transparent bg-[color:var(--guru-body)]/5 text-[color:var(--guru-heading)] focus:ring-[color:var(--guru-body)]',
      danger: 'border-red-500/50 bg-[color:var(--guru-background)] text-red-500 focus:ring-red-500',
      error: 'border-red-500/50 bg-[color:var(--guru-background)] text-red-500 focus:ring-red-500',
      success: 'border-green-500/50 bg-[color:var(--guru-background)] text-green-500 focus:ring-green-500',
      warning: 'border-yellow-500/50 bg-[color:var(--guru-background)] text-yellow-500 focus:ring-yellow-500',
      info: 'border-blue-500/50 bg-[color:var(--guru-background)] text-blue-500 focus:ring-blue-500',
      elevated: 'border-[color:var(--guru-body)]/20 shadow-lg bg-[color:var(--guru-background)] text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]',
      outlined: 'border-2 border-[color:var(--guru-accent)] bg-transparent text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]'
    }

    return createComponentClasses(baseClasses, sizeClasses, variantClasses, options)
  }

  static getCheckedClasses(options: RadioCoreOptions): string {
    const variantClasses = {
      default: 'border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]',
      primary: 'border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]',
      secondary: 'border-[color:var(--guru-body)] bg-[color:var(--guru-body)]',
      outline: 'border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]',
      ghost: 'border-[color:var(--guru-body)] bg-[color:var(--guru-body)]',
      danger: 'border-red-500 bg-red-500',
      error: 'border-red-500 bg-red-500',
      success: 'border-green-500 bg-green-500',
      warning: 'border-yellow-500 bg-yellow-500',
      info: 'border-blue-500 bg-blue-500',
      elevated: 'border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]',
      outlined: 'border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]'
    }

    return variantClasses[options.variant || 'default']
  }

  static getIndicatorClasses(options: RadioCoreOptions): string {
    const baseClasses = [
      'rounded-full bg-white'
    ]

    const sizeClasses = {
      xs: 'w-1 h-1',
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-2.5 h-2.5',
      xl: 'w-3 h-3',
      xxl: 'w-3.5 h-3.5'
    }

    const size = options.size || 'md'
    return [
      ...baseClasses,
      sizeClasses[size]
    ].join(' ')
  }

  static getLabelClasses(options: RadioCoreOptions): string {
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

  static getDescriptionClasses(options: RadioCoreOptions): string {
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

  static getAccessibilityProps(options: RadioCoreOptions) {
    return {
      ...this.getBaseAccessibilityProps(options.disabled),
      type: 'radio',
      name: options.name,
      value: options.value,
      checked: options.checked || false,
      required: options.required,
      'aria-invalid': options.error || options.variant === 'danger',
      'aria-describedby': options.error ? 'radio-error' : undefined
    }
  }

  static getDefaultOptions(): RadioCoreOptions {
    return {
      size: 'md',
      variant: 'primary',
      disabled: false,
      required: false,
      name: '',
      value: '',
      checked: false,
      error: false,
      orientation: 'vertical'
    }
  }
}
