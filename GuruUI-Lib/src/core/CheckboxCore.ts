export interface CheckboxCoreOptions {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'error' | 'success'
  disabled?: boolean
  indeterminate?: boolean
  required?: boolean
  label?: string
  description?: string
}

export class CheckboxCore {
  static getContainerClasses(): string {
    return 'flex items-start space-x-3'
  }

  static getCheckboxClasses(options: CheckboxCoreOptions): string {
    const baseClasses = [
      'flex-shrink-0 rounded border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    }

    // Variant classes
    const variantClasses = {
      default: 'border-[color:var(--arnis-body,#b3b3b3)]/20 bg-[color:var(--arnis-background,#121212)] text-[color:var(--arnis-accent,#ffffff)] focus:ring-[color:var(--arnis-accent,#ffffff)]',
      error: 'border-red-500/50 bg-[color:var(--arnis-background,#121212)] text-red-500 focus:ring-red-500',
      success: 'border-green-500/50 bg-[color:var(--arnis-background,#121212)] text-green-500 focus:ring-green-500'
    }

    // Disabled classes
    const disabledClasses = options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default'],
      disabledClasses
    ].join(' ')
  }

  static getLabelClasses(options: CheckboxCoreOptions): string {
    const baseClasses = [
      'text-sm font-medium'
    ]

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base'
    }

    const variantClasses = {
      default: 'text-[color:var(--arnis-heading,#ffffff)]',
      error: 'text-red-400',
      success: 'text-green-400'
    }

    const disabledClasses = options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default'],
      disabledClasses
    ].join(' ')
  }

  static getDescriptionClasses(options: CheckboxCoreOptions): string {
    const baseClasses = [
      'text-sm'
    ]

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm'
    }

    const variantClasses = {
      default: 'text-[color:var(--arnis-body,#b3b3b3)]',
      error: 'text-red-400/80',
      success: 'text-green-400/80'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getIconClasses(options: CheckboxCoreOptions): string {
    const baseClasses = [
      'w-full h-full flex items-center justify-center'
    ]

    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getAccessibilityProps(options: CheckboxCoreOptions) {
    return {
      role: 'checkbox',
      'aria-checked': options.indeterminate ? 'mixed' : undefined,
      'aria-required': options.required,
      'aria-invalid': options.variant === 'error',
      'aria-describedby': options.description ? 'checkbox-description' : undefined
    }
  }

  static getDefaultOptions(): CheckboxCoreOptions {
    return {
      size: 'md',
      variant: 'default',
      disabled: false,
      indeterminate: false,
      required: false,
      label: '',
      description: ''
    }
  }
}
