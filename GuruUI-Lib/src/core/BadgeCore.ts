export interface BadgeCoreOptions {
  variant?: 'accent' | 'success' | 'warning' | 'danger' | 'outline' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

export class BadgeCore {
  static getClasses(options: BadgeCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium transition-colors duration-200'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base'
    }

    // Variant classes
    const variantClasses = {
      accent: 'bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-onAccent,#0b0b0b)]',
      success: 'bg-green-600 text-white',
      warning: 'bg-yellow-600 text-white',
      danger: 'bg-red-600 text-white',
      outline: 'border border-[color:var(--guru-accent,#ffffff)]/20 text-[color:var(--guru-accent,#ffffff)]',
      subtle: 'bg-[color:var(--guru-body,#b3b3b3)]/10 text-[color:var(--guru-body,#b3b3b3)]'
    }

    // Rounded classes
    const roundedClasses = options.rounded ? 'rounded-full' : 'rounded-md'

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'accent'],
      roundedClasses
    ].join(' ')
  }

  static getDefaultOptions(): BadgeCoreOptions {
    return {
      variant: 'accent',
      size: 'md',
      rounded: false
    }
  }
}
