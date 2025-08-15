export interface ToggleCoreOptions {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'danger'
  disabled?: boolean
  required?: boolean
  label?: string
  description?: string
  loading?: boolean
}

export class ToggleCore {
  static getContainerClasses(): string {
    return 'flex items-start space-x-3'
  }

  static getToggleClasses(options: ToggleCoreOptions): string {
    const baseClasses = [
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
      lg: 'h-7 w-14'
    }

    // Variant classes
    const variantClasses = {
      default: 'bg-[color:var(--guru-body,#b3b3b3)]/20 focus:ring-[color:var(--guru-accent,#ffffff)]',
      success: 'bg-green-500/20 focus:ring-green-500',
      warning: 'bg-yellow-500/20 focus:ring-yellow-500',
      danger: 'bg-red-500/20 focus:ring-red-500'
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

  static getToggleActiveClasses(options: ToggleCoreOptions): string {
    const variantActiveClasses = {
      default: 'bg-[color:var(--guru-accent,#ffffff)]',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500'
    }

    return variantActiveClasses[options.variant || 'default']
  }

  static getThumbClasses(options: ToggleCoreOptions): string {
    const baseClasses = [
      'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
    ]

    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getThumbActiveClasses(options: ToggleCoreOptions): string {
    const sizeTranslateClasses = {
      sm: 'translate-x-4',
      md: 'translate-x-5',
      lg: 'translate-x-7'
    }

    return sizeTranslateClasses[options.size || 'md']
  }

  static getLabelClasses(options: ToggleCoreOptions): string {
    const baseClasses = [
      'text-sm font-medium'
    ]

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base'
    }

    const variantClasses = {
      default: 'text-[color:var(--guru-heading,#ffffff)]',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      danger: 'text-red-400'
    }

    const disabledClasses = options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default'],
      disabledClasses
    ].join(' ')
  }

  static getDescriptionClasses(options: ToggleCoreOptions): string {
    const baseClasses = [
      'text-sm'
    ]

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm'
    }

    const variantClasses = {
      default: 'text-[color:var(--guru-body,#b3b3b3)]',
      success: 'text-green-400/80',
      warning: 'text-yellow-400/80',
      danger: 'text-red-400/80'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getLoadingClasses(): string {
    return 'animate-spin'
  }

  static getAccessibilityProps(options: ToggleCoreOptions) {
    return {
      role: 'switch',
      'aria-checked': false,
      'aria-required': options.required,
      'aria-describedby': options.description ? 'toggle-description' : undefined
    }
  }

  static getDefaultOptions(): ToggleCoreOptions {
    return {
      size: 'md',
      variant: 'default',
      disabled: false,
      required: false,
      label: '',
      description: '',
      loading: false
    }
  }
}
