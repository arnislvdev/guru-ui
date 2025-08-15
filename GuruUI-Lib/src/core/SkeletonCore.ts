export interface SkeletonCoreOptions {
  variant?: 'text' | 'circular' | 'rectangular'
  size?: 'sm' | 'md' | 'lg'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export class SkeletonCore {
  static getClasses(options: SkeletonCoreOptions): string {
    const baseClasses = [
      'bg-[color:var(--arnis-body,#b3b3b3)]/10 rounded'
    ]

    // Variant classes
    const variantClasses = {
      text: 'h-4',
      circular: 'rounded-full',
      rectangular: 'rounded'
    }

    // Animation classes
    const animationClasses = {
      pulse: 'animate-pulse',
      wave: 'animate-pulse',
      none: ''
    }

    // Size classes
    const sizeClasses = {
      sm: 'h-3',
      md: 'h-4',
      lg: 'h-6'
    }

    return [
      ...baseClasses,
      variantClasses[options.variant || 'text'],
      animationClasses[options.animation || 'pulse'],
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getTextClasses(options: SkeletonCoreOptions): string {
    const baseClasses = [
      'bg-[color:var(--arnis-body,#b3b3b3)]/10 rounded animate-pulse'
    ]

    const sizeClasses = {
      sm: 'h-3',
      md: 'h-4',
      lg: 'h-6'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getCircularClasses(options: SkeletonCoreOptions): string {
    const baseClasses = [
      'bg-[color:var(--arnis-body,#b3b3b3)]/10 rounded-full animate-pulse'
    ]

    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getRectangularClasses(options: SkeletonCoreOptions): string {
    const baseClasses = [
      'bg-[color:var(--arnis-body,#b3b3b3)]/10 rounded animate-pulse'
    ]

    const sizeClasses = {
      sm: 'h-16',
      md: 'h-24',
      lg: 'h-32'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getAccessibilityProps(options: SkeletonCoreOptions) {
    return {
      role: 'status',
      'aria-label': 'Loading...',
      'aria-live': 'polite'
    }
  }

  static getDefaultOptions(): SkeletonCoreOptions {
    return {
      variant: 'text',
      size: 'md',
      animation: 'pulse'
    }
  }
}
