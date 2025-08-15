export interface LoadingOverlayCoreOptions {
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'accent' | 'white'
  backdrop?: boolean
  blur?: boolean
  zIndex?: 'low' | 'normal' | 'high'
}

export class LoadingOverlayCore {
  static getClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'fixed inset-0 flex items-center justify-center'
    ]

    // Z-index classes
    const zIndexClasses = {
      low: 'z-10',
      normal: 'z-50',
      high: 'z-[9999]'
    }

    return [
      ...baseClasses,
      zIndexClasses[options.zIndex || 'normal']
    ].join(' ')
  }

  static getBackdropClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'absolute inset-0'
    ]

    const backdropClasses = options.backdrop 
      ? 'bg-black/50' 
      : 'bg-transparent'

    const blurClasses = options.blur 
      ? 'backdrop-blur-sm' 
      : ''

    return [
      ...baseClasses,
      backdropClasses,
      blurClasses
    ].join(' ')
  }

  static getContentClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'relative z-10 flex flex-col items-center justify-center'
    ]

    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-12'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getSpinnerClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'inline-block animate-spin rounded-full border-2 border-current border-t-transparent'
    ]

    const sizeClasses = {
      sm: 'w-6 h-6 border-2',
      md: 'w-8 h-8 border-3',
      lg: 'w-12 h-12 border-4',
      xl: 'w-16 h-16 border-4'
    }

    const colorClasses = {
      primary: 'text-[color:var(--arnis-primary,#3b82f6)]',
      secondary: 'text-[color:var(--arnis-secondary,#64748b)]',
      accent: 'text-[color:var(--arnis-accent,#ffffff)]',
      white: 'text-white'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      colorClasses[options.color || 'accent']
    ].join(' ')
  }

  static getDotsClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center space-x-2'
    ]

    const sizeClasses = {
      sm: 'space-x-1.5',
      md: 'space-x-2',
      lg: 'space-x-3',
      xl: 'space-x-4'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getDotClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'rounded-full bg-current animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4'
    }

    const colorClasses = {
      primary: 'text-[color:var(--arnis-primary,#3b82f6)]',
      secondary: 'text-[color:var(--arnis-secondary,#64748b)]',
      accent: 'text-[color:var(--arnis-accent,#ffffff)]',
      white: 'text-white'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      colorClasses[options.color || 'accent']
    ].join(' ')
  }

  static getBarsClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center space-x-1'
    ]

    const sizeClasses = {
      sm: 'space-x-1',
      md: 'space-x-1.5',
      lg: 'space-x-2',
      xl: 'space-x-2.5'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getBarClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'bg-current animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-1.5 h-5',
      md: 'w-2 h-6',
      lg: 'w-2.5 h-8',
      xl: 'w-3 h-10'
    }

    const colorClasses = {
      primary: 'text-[color:var(--arnis-primary,#3b82f6)]',
      secondary: 'text-[color:var(--arnis-secondary,#64748b)]',
      accent: 'text-[color:var(--arnis-accent,#ffffff)]',
      white: 'text-white'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      colorClasses[options.color || 'accent']
    ].join(' ')
  }

  static getPulseClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'inline-block rounded-full bg-current animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    }

    const colorClasses = {
      primary: 'text-[color:var(--arnis-primary,#3b82f6)]',
      secondary: 'text-[color:var(--arnis-secondary,#64748b)]',
      accent: 'text-[color:var(--arnis-accent,#ffffff)]',
      white: 'text-white'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      colorClasses[options.color || 'accent']
    ].join(' ')
  }

  static getTextClasses(options: LoadingOverlayCoreOptions): string {
    const baseClasses = [
      'mt-4 text-center'
    ]

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    }

    const colorClasses = {
      primary: 'text-[color:var(--arnis-primary,#3b82f6)]',
      secondary: 'text-[color:var(--arnis-secondary,#64748b)]',
      accent: 'text-[color:var(--arnis-accent,#ffffff)]',
      white: 'text-white'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      colorClasses[options.color || 'accent']
    ].join(' ')
  }

  static getAccessibilityProps(options: LoadingOverlayCoreOptions) {
    return {
      role: 'status',
      'aria-label': 'Loading...',
      'aria-live': 'polite',
      'aria-busy': true
    }
  }

  static getDefaultOptions(): LoadingOverlayCoreOptions {
    return {
      variant: 'spinner',
      size: 'md',
      color: 'accent',
      backdrop: true,
      blur: false,
      zIndex: 'normal'
    }
  }
}
