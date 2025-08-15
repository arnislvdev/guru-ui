export interface AlertCoreOptions {
  variant?: 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  dismissible?: boolean
  icon?: boolean
  border?: boolean
  rounded?: boolean
}

export class AlertCore {
  static getClasses(options: AlertCoreOptions): string {
    const baseClasses = [
      'flex items-start gap-3 p-4 transition-all duration-200'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'p-3 text-sm',
      md: 'p-4 text-sm',
      lg: 'p-5 text-base'
    }

    // Variant classes
    const variantClasses = {
      info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      success: 'bg-green-500/10 border-green-500/20 text-green-400',
      warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
      error: 'bg-red-500/10 border-red-500/20 text-red-400'
    }

    // Border classes
    const borderClasses = options.border ? 'border' : ''

    // Rounded classes
    const roundedClasses = options.rounded ? 'rounded-xl' : 'rounded-lg'

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'info'],
      borderClasses,
      roundedClasses
    ].join(' ')
  }

  static getIconClasses(options: AlertCoreOptions): string {
    const baseClasses = [
      'flex-shrink-0 w-5 h-5'
    ]

    const variantIconClasses = {
      info: 'text-blue-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      error: 'text-red-400'
    }

    return [
      ...baseClasses,
      variantIconClasses[options.variant || 'info']
    ].join(' ')
  }

  static getContentClasses(): string {
    return 'flex-1 min-w-0'
  }

  static getTitleClasses(): string {
    return 'font-medium mb-1'
  }

  static getDescriptionClasses(): string {
    return 'text-[color:var(--arnis-body,#b3b3b3)]'
  }

  static getDismissButtonClasses(options: AlertCoreOptions): string {
    const baseClasses = [
      'flex-shrink-0 p-1 rounded-md hover:bg-[color:var(--arnis-body,#b3b3b3)]/10 transition-colors'
    ]

    const variantClasses = {
      info: 'text-blue-400 hover:text-blue-300',
      success: 'text-green-400 hover:text-green-300',
      warning: 'text-yellow-400 hover:text-yellow-300',
      error: 'text-red-400 hover:text-red-300'
    }

    return [
      ...baseClasses,
      variantClasses[options.variant || 'info']
    ].join(' ')
  }

  static getAccessibilityProps(options: AlertCoreOptions) {
    return {
      role: 'alert',
      'aria-live': 'polite',
      'aria-atomic': true
    }
  }

  static getDefaultOptions(): AlertCoreOptions {
    return {
      variant: 'info',
      size: 'md',
      dismissible: false,
      icon: true,
      border: false,
      rounded: false
    }
  }
}
