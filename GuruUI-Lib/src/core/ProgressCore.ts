export interface ProgressCoreOptions {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'danger'
  showLabel?: boolean
  showValue?: boolean
  animated?: boolean
  striped?: boolean
  rounded?: boolean
  height?: 'thin' | 'normal' | 'thick'
}

export class ProgressCore {
  static getContainerClasses(options: ProgressCoreOptions): string {
    const baseClasses = [
      'w-full'
    ]

    const heightClasses = {
      thin: 'h-1',
      normal: 'h-2',
      thick: 'h-3'
    }

    return [
      ...baseClasses,
      heightClasses[options.height || 'normal']
    ].join(' ')
  }

  static getTrackClasses(options: ProgressCoreOptions): string {
    const baseClasses = [
      'w-full bg-[color:var(--arnis-body,#b3b3b3)]/10 rounded-full overflow-hidden'
    ]

    const roundedClasses = options.rounded ? 'rounded-full' : 'rounded'

    return [
      ...baseClasses,
      roundedClasses
    ].join(' ')
  }

  static getBarClasses(options: ProgressCoreOptions): string {
    const baseClasses = [
      'h-full transition-all duration-300 ease-out'
    ]

    // Variant classes
    const variantClasses = {
      default: 'bg-[color:var(--arnis-accent,#ffffff)]',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500'
    }

    // Animation classes
    const animationClasses = []
    if (options.animated) {
      animationClasses.push('animate-pulse')
    }
    if (options.striped) {
      animationClasses.push('bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem] animate-stripes')
    }

    const roundedClasses = options.rounded ? 'rounded-full' : 'rounded'

    return [
      ...baseClasses,
      variantClasses[options.variant || 'default'],
      ...animationClasses,
      roundedClasses
    ].join(' ')
  }

  static getLabelClasses(options: ProgressCoreOptions): string {
    const baseClasses = [
      'text-sm font-medium mb-2'
    ]

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    }

    const variantClasses = {
      default: 'text-[color:var(--arnis-heading,#ffffff)]',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      danger: 'text-red-400'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getValueClasses(options: ProgressCoreOptions): string {
    const baseClasses = [
      'text-sm font-mono'
    ]

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    }

    const variantClasses = {
      default: 'text-[color:var(--arnis-body,#b3b3b3)]',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      danger: 'text-red-400'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getInfoClasses(options: ProgressCoreOptions): string {
    return 'flex items-center justify-between mb-2'
  }

  static getAccessibilityProps(options: ProgressCoreOptions) {
    return {
      role: 'progressbar',
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-valuenow': 0,
      'aria-label': options.showLabel ? 'Progress' : undefined
    }
  }

  static getDefaultOptions(): ProgressCoreOptions {
    return {
      size: 'md',
      variant: 'default',
      showLabel: true,
      showValue: false,
      animated: false,
      striped: false,
      rounded: true,
      height: 'normal'
    }
  }

  // Utility method to calculate progress percentage
  static calculatePercentage(value: number, max: number): number {
    if (max <= 0) return 0
    return Math.min(Math.max((value / max) * 100, 0), 100)
  }

  // Utility method to get progress color based on percentage
  static getProgressColor(percentage: number): string {
    if (percentage >= 80) return 'success'
    if (percentage >= 60) return 'warning'
    if (percentage >= 40) return 'default'
    return 'danger'
  }
}
