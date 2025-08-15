export interface ButtonCoreOptions {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  rounded?: boolean
}

export class ButtonCore {
  static getClasses(options: ButtonCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      options.fullWidth ? 'w-full' : '',
      options.rounded ? 'rounded-full' : 'rounded-lg'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    }

    // Variant classes
    const variantClasses = {
      primary: 'bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-onAccent,#0b0b0b)] hover:bg-[color:var(--guru-accentHover,#e5e5e5)] focus:ring-[color:var(--guru-accent,#ffffff)]',
      secondary: 'bg-[color:var(--guru-body,#b3b3b3)]/10 text-[color:var(--guru-body,#b3b3b3)] hover:bg-[color:var(--guru-body,#b3b3b3)]/20 focus:ring-[color:var(--guru-body,#b3b3b3)]',
      outline: 'border border-[color:var(--guru-accent,#ffffff)]/20 text-[color:var(--guru-accent,#ffffff)] hover:bg-[color:var(--guru-accent,#ffffff)]/10 focus:ring-[color:var(--guru-accent,#ffffff)]',
      ghost: 'text-[color:var(--guru-body,#b3b3b3)] hover:bg-[color:var(--guru-body,#b3b3b3)]/10 focus:ring-[color:var(--guru-body,#b3b3b3)]',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'primary']
    ].join(' ')
  }

  static getAccessibilityProps(options: ButtonCoreOptions) {
    return {
      disabled: options.disabled || options.loading,
      type: options.type || 'button',
      'aria-disabled': options.disabled || options.loading,
      'aria-busy': options.loading
    }
  }

  static getDefaultOptions(): ButtonCoreOptions {
    return {
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
      type: 'button',
      fullWidth: false,
      rounded: false
    }
  }
}
