export interface TooltipCoreOptions {
  position?: 'top' | 'bottom' | 'left' | 'right'
  variant?: 'dark' | 'light' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  arrow?: boolean
  delay?: 'none' | 'fast' | 'normal' | 'slow'
  maxWidth?: string | number
}

export class TooltipCore {
  static getClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'absolute z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-lg pointer-events-none'
    ]

    // Position classes
    const positionClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    }

    // Variant classes
    const variantClasses = {
      dark: 'bg-gray-900 text-white',
      light: 'bg-white text-gray-900 border border-gray-200',
      accent: 'bg-[color:var(--arnis-accent,#ffffff)] text-[color:var(--arnis-on-accent,#0b0b0b)]'
    }

    // Size classes
    const sizeClasses = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-3 py-2',
      lg: 'text-base px-4 py-3'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top'],
      variantClasses[options.variant || 'dark'],
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getArrowClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'absolute w-2 h-2 rotate-45'
    ]

    // Position-based arrow classes
    const positionClasses = {
      top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
      bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
      left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
      right: 'right-full top-1/2 -translate-y-1/2 -mr-1'
    }

    // Variant-based arrow colors
    const variantClasses = {
      dark: 'bg-gray-900',
      light: 'bg-white border border-gray-200',
      accent: 'bg-[color:var(--arnis-accent,#ffffff)]'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top'],
      variantClasses[options.variant || 'dark']
    ].join(' ')
  }

  static getContainerClasses(): string {
    return 'relative inline-block'
  }

  static getTriggerClasses(): string {
    return 'cursor-help'
  }

  static getContentClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'whitespace-nowrap'
    ]

    // Max width handling
    const maxWidthClasses = options.maxWidth 
      ? `max-w-[${options.maxWidth}px]` 
      : 'max-w-xs'

    return [
      ...baseClasses,
      maxWidthClasses
    ].join(' ')
  }

  static getDelayClasses(options: TooltipCoreOptions): string {
    const delayClasses = {
      none: 'transition-none',
      fast: 'transition-all duration-100',
      normal: 'transition-all duration-200',
      slow: 'transition-all duration-300'
    }

    return delayClasses[options.delay || 'normal']
  }

  static getEnterClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'transition-all duration-200 ease-out'
    ]

    const positionClasses = {
      top: 'opacity-0 translate-y-1',
      bottom: 'opacity-0 -translate-y-1',
      left: 'opacity-0 translate-x-1',
      right: 'opacity-0 -translate-x-1'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top']
    ].join(' ')
  }

  static getEnterActiveClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'transition-all duration-200 ease-out'
    ]

    const positionClasses = {
      top: 'opacity-100 translate-y-0',
      bottom: 'opacity-100 translate-y-0',
      left: 'opacity-100 translate-x-0',
      right: 'opacity-100 translate-x-0'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top']
    ].join(' ')
  }

  static getLeaveClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'transition-all duration-150 ease-in'
    ]

    const positionClasses = {
      top: 'opacity-100 translate-y-0',
      bottom: 'opacity-100 translate-y-0',
      left: 'opacity-100 translate-x-0',
      right: 'opacity-100 translate-x-0'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top']
    ].join(' ')
  }

  static getLeaveActiveClasses(options: TooltipCoreOptions): string {
    const baseClasses = [
      'transition-all duration-150 ease-in'
    ]

    const positionClasses = {
      top: 'opacity-0 translate-y-1',
      bottom: 'opacity-0 -translate-y-1',
      left: 'opacity-0 translate-x-1',
      right: 'opacity-0 -translate-x-1'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top']
    ].join(' ')
  }

  static getAccessibilityProps(options: TooltipCoreOptions) {
    return {
      role: 'tooltip',
      'aria-describedby': 'tooltip-content'
    }
  }

  static getDefaultOptions(): TooltipCoreOptions {
    return {
      position: 'top',
      variant: 'dark',
      size: 'md',
      arrow: true,
      delay: 'normal',
      maxWidth: 200
    }
  }
}
