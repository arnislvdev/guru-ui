export interface InputCoreOptions {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'error' | 'success' | 'warning'
  disabled?: boolean
  fullWidth?: boolean
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  required?: boolean
}

export class InputCore {
  static getClasses(options: InputCoreOptions): string {
    const baseClasses = [
      'w-full px-3 py-2 bg-[color:var(--guru-background,#121212)] border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'text-sm px-2 py-1.5',
      md: 'text-sm px-3 py-2',
      lg: 'text-base px-4 py-3'
    }

    // Variant classes
    const variantClasses = {
      default: 'border-[color:var(--guru-body,#b3b3b3)]/20 text-[color:var(--guru-heading,#ffffff)] placeholder-[color:var(--guru-body,#b3b3b3)]/50 focus:border-[color:var(--guru-accent,#ffffff)] focus:ring-[color:var(--guru-accent,#ffffff)]',
      error: 'border-red-500/50 text-[color:var(--guru-heading,#ffffff)] placeholder-red-400/50 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-500/50 text-[color:var(--guru-heading,#ffffff)] placeholder-green-400/50 focus:border-green-500 focus:ring-green-500',
      warning: 'border-yellow-500/50 text-[color:var(--guru-heading,#ffffff)] placeholder-yellow-400/50 focus:border-yellow-500 focus:ring-yellow-500'
    }

    // Width classes
    const widthClasses = options.fullWidth ? 'w-full' : ''

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default'],
      widthClasses
    ].join(' ')
  }

  static getAccessibilityProps(options: InputCoreOptions) {
    return {
      disabled: options.disabled,
      required: options.required,
      type: options.type || 'text',
      placeholder: options.placeholder,
      'aria-invalid': options.variant === 'error',
      'aria-describedby': options.variant === 'error' ? 'input-error' : undefined
    }
  }

  static getDefaultOptions(): InputCoreOptions {
    return {
      size: 'md',
      variant: 'default',
      disabled: false,
      fullWidth: true,
      placeholder: '',
      type: 'text',
      required: false
    }
  }
}
