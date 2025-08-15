export interface PopoverCoreOptions {
  position?: 'top' | 'bottom' | 'left' | 'right'
  variant?: 'default' | 'card' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  arrow?: boolean
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: string | number
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
}

export class PopoverCore {
  static getClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'absolute z-50'
    ]

    // Position classes
    const positionClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    }

    // Size classes
    const sizeClasses = {
      sm: 'min-w-[200px]',
      md: 'min-w-[300px]',
      lg: 'min-w-[400px]'
    }

    // Max width handling
    const maxWidthClasses = options.maxWidth 
      ? `max-w-[${options.maxWidth}px]` 
      : 'max-w-sm'

    return [
      ...baseClasses,
      positionClasses[options.position || 'top'],
      sizeClasses[options.size || 'md'],
      maxWidthClasses
    ].join(' ')
  }

  static getContentClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'relative bg-[color:var(--arnis-background,#121212)] border border-white/10 rounded-lg'
    ]

    // Variant classes
    const variantClasses = {
      default: 'p-4',
      card: 'p-6 shadow-xl',
      minimal: 'p-2'
    }

    // Shadow classes
    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    }

    return [
      ...baseClasses,
      variantClasses[options.variant || 'default'],
      shadowClasses[options.shadow || 'md']
    ].join(' ')
  }

  static getArrowClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'absolute w-2 h-2 rotate-45 bg-[color:var(--arnis-background,#121212)] border border-white/10'
    ]

    // Position-based arrow classes
    const positionClasses = {
      top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
      bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
      left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
      right: 'right-full top-1/2 -translate-y-1/2 -mr-1'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'top']
    ].join(' ')
  }

  static getHeaderClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'flex items-center justify-between mb-3'
    ]

    const variantClasses = {
      default: 'pb-3 border-b border-white/10',
      card: 'pb-4 border-b border-white/10',
      minimal: 'pb-2'
    }

    return [
      ...baseClasses,
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getTitleClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'text-sm font-semibold text-[color:var(--arnis-heading,#ffffff)]'
    ]

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getBodyClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'text-sm text-[color:var(--arnis-body,#b3b3b3)]'
    ]

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md']
    ].join(' ')
  }

  static getFooterClasses(options: PopoverCoreOptions): string {
    const baseClasses = [
      'flex items-center justify-end gap-2 mt-3'
    ]

    const variantClasses = {
      default: 'pt-3 border-t border-white/10',
      card: 'pt-4 border-t border-white/10',
      minimal: 'pt-2'
    }

    return [
      ...baseClasses,
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getCloseButtonClasses(): string {
    return [
      'inline-flex items-center justify-center w-6 h-6 rounded-md',
      'text-[color:var(--arnis-body,#b3b3b3)] hover:text-[color:var(--arnis-heading,#ffffff)]',
      'hover:bg-white/5 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60'
    ].join(' ')
  }

  static getContainerClasses(): string {
    return 'relative inline-block'
  }

  static getTriggerClasses(): string {
    return 'cursor-pointer'
  }

  static getEnterClasses(options: PopoverCoreOptions): string {
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

  static getEnterActiveClasses(options: PopoverCoreOptions): string {
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

  static getLeaveClasses(options: PopoverCoreOptions): string {
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

  static getLeaveActiveClasses(options: PopoverCoreOptions): string {
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

  static getAccessibilityProps(options: PopoverCoreOptions) {
    return {
      role: 'dialog',
      'aria-modal': false,
      'aria-describedby': 'popover-content'
    }
  }

  static getDefaultOptions(): PopoverCoreOptions {
    return {
      position: 'top',
      variant: 'default',
      size: 'md',
      arrow: true,
      shadow: 'md',
      maxWidth: 300,
      closeOnClickOutside: true,
      closeOnEscape: true
    }
  }
}
