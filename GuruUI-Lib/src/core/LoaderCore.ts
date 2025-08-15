export interface LoaderCoreOptions {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse'
  color?: 'primary' | 'secondary' | 'accent' | 'white'
  speed?: 'slow' | 'normal' | 'fast'
}

export class LoaderCore {
  static getClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'inline-block animate-spin'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12'
    }

    // Color classes
    const colorClasses = {
      primary: 'text-[color:var(--arnis-primary,#3b82f6)]',
      secondary: 'text-[color:var(--arnis-secondary,#64748b)]',
      accent: 'text-[color:var(--arnis-accent,#ffffff)]',
      white: 'text-white'
    }

    // Speed classes
    const speedClasses = {
      slow: 'animate-[spin_2s_linear_infinite]',
      normal: 'animate-spin',
      fast: 'animate-[spin_0.5s_linear_infinite]'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      colorClasses[options.color || 'accent'],
      speedClasses[options.speed || 'normal']
    ].join(' ')
  }

  static getSpinnerClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'inline-block animate-spin rounded-full border-2 border-current border-t-transparent'
    ]

    const sizeClasses = {
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-3',
      xl: 'w-12 h-12 border-4'
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

  static getDotsClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center space-x-1'
    ]

    const sizeClasses = {
      sm: 'space-x-1',
      md: 'space-x-1.5',
      lg: 'space-x-2',
      xl: 'space-x-3'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getDotClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'rounded-full bg-current animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-2.5 h-2.5',
      xl: 'w-3 h-3'
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

  static getBarsClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'inline-flex items-center space-x-1'
    ]

    const sizeClasses = {
      sm: 'space-x-0.5',
      md: 'space-x-1',
      lg: 'space-x-1.5',
      xl: 'space-x-2'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getBarClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'bg-current animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-1 h-3',
      md: 'w-1.5 h-4',
      lg: 'w-2 h-5',
      xl: 'w-2.5 h-6'
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

  static getPulseClasses(options: LoaderCoreOptions): string {
    const baseClasses = [
      'inline-block rounded-full bg-current animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12'
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

  static getContainerClasses(): string {
    return 'flex items-center justify-center'
  }

  static getAccessibilityProps(options: LoaderCoreOptions) {
    return {
      role: 'status',
      'aria-label': 'Loading...',
      'aria-live': 'polite'
    }
  }

  static getDefaultOptions(): LoaderCoreOptions {
    return {
      size: 'md',
      variant: 'spinner',
      color: 'accent',
      speed: 'normal'
    }
  }
}
