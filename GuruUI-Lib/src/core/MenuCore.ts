export interface MenuCoreOptions {
  variant?: 'default' | 'minimal' | 'card'
  size?: 'sm' | 'md' | 'lg'
  position?: 'bottom' | 'top' | 'left' | 'right'
  maxHeight?: string | number
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'xl'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export class MenuCore {
  static getClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'absolute z-50'
    ]

    // Position classes
    const positionClasses = {
      bottom: 'top-full left-0 mt-1',
      top: 'bottom-full left-0 mb-1',
      left: 'right-full top-0 mr-1',
      right: 'left-full top-0 ml-1'
    }

    // Width classes
    const widthClasses = {
      auto: 'w-auto',
      sm: 'w-48',
      md: 'w-56',
      lg: 'w-64',
      xl: 'w-80'
    }

    // Max height handling
    const maxHeightClasses = options.maxHeight 
      ? `max-h-[${options.maxHeight}px]` 
      : 'max-h-96'

    return [
      ...baseClasses,
      positionClasses[options.position || 'bottom'],
      widthClasses[options.width || 'auto'],
      maxHeightClasses
    ].join(' ')
  }

  static getContentClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'bg-[color:var(--arnis-background,#121212)] border border-white/10 rounded-lg overflow-hidden'
    ]

    // Variant classes
    const variantClasses = {
      default: 'p-1',
      minimal: 'p-0.5',
      card: 'p-2 shadow-xl'
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

  static getItemClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'relative flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'px-2 py-1.5 text-xs',
      md: 'px-2 py-2 text-sm',
      lg: 'px-3 py-2.5 text-base'
    }

    // Variant classes
    const variantClasses = {
      default: 'hover:bg-white/5 focus:bg-white/5',
      minimal: 'hover:bg-white/5 focus:bg-white/5',
      card: 'hover:bg-white/10 focus:bg-white/10'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      variantClasses[options.variant || 'default']
    ].join(' ')
  }

  static getItemActiveClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'bg-white/10 text-[color:var(--arnis-heading,#ffffff)]'
    ]

    return baseClasses.join(' ')
  }

  static getItemDisabledClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'opacity-50 cursor-not-allowed pointer-events-none'
    ]

    return baseClasses.join(' ')
  }

  static getItemTextClasses(): string {
    return 'flex-1 text-[color:var(--arnis-body,#b3b3b3)]'
  }

  static getItemIconClasses(): string {
    return 'mr-2 h-4 w-4 text-[color:var(--arnis-body,#b3b3b3)]'
  }

  static getItemRightIconClasses(): string {
    return 'ml-auto h-4 w-4 text-[color:var(--arnis-body,#b3b3b3)]'
  }

  static getSeparatorClasses(): string {
    return 'my-1 h-px bg-white/10'
  }

  static getGroupClasses(): string {
    return 'px-2 py-1.5 text-xs font-semibold text-[color:var(--arnis-body,#b3b3b3)]'
  }

  static getSubmenuClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'absolute left-full top-0 ml-1'
    ]

    const widthClasses = {
      auto: 'w-auto',
      sm: 'w-48',
      md: 'w-56',
      lg: 'w-64',
      xl: 'w-80'
    }

    return [
      ...baseClasses,
      widthClasses[options.width || 'auto']
    ].join(' ')
  }

  static getTriggerClasses(): string {
    return 'inline-flex items-center justify-center cursor-pointer'
  }

  static getContainerClasses(): string {
    return 'relative inline-block'
  }

  static getEnterClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'transition-all duration-200 ease-out'
    ]

    const positionClasses = {
      bottom: 'opacity-0 scale-95 origin-top',
      top: 'opacity-0 scale-95 origin-bottom',
      left: 'opacity-0 scale-95 origin-right',
      right: 'opacity-0 scale-95 origin-left'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'bottom']
    ].join(' ')
  }

  static getEnterActiveClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'transition-all duration-200 ease-out'
    ]

    const positionClasses = {
      bottom: 'opacity-100 scale-100 origin-top',
      top: 'opacity-100 scale-100 origin-bottom',
      left: 'opacity-100 scale-100 origin-right',
      right: 'opacity-100 scale-100 origin-left'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'bottom']
    ].join(' ')
  }

  static getLeaveClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'transition-all duration-150 ease-in'
    ]

    const positionClasses = {
      bottom: 'opacity-100 scale-100 origin-top',
      top: 'opacity-100 scale-100 origin-bottom',
      left: 'opacity-100 scale-100 origin-right',
      right: 'opacity-100 scale-100 origin-left'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'bottom']
    ].join(' ')
  }

  static getLeaveActiveClasses(options: MenuCoreOptions): string {
    const baseClasses = [
      'transition-all duration-150 ease-in'
    ]

    const positionClasses = {
      bottom: 'opacity-0 scale-95 origin-top',
      top: 'opacity-0 scale-95 origin-bottom',
      left: 'opacity-0 scale-95 origin-right',
      right: 'opacity-0 scale-95 origin-left'
    }

    return [
      ...baseClasses,
      positionClasses[options.position || 'bottom']
    ].join(' ')
  }

  static getAccessibilityProps(options: MenuCoreOptions) {
    return {
      role: 'menu',
      'aria-orientation': 'vertical'
    }
  }

  static getDefaultOptions(): MenuCoreOptions {
    return {
      variant: 'default',
      size: 'md',
      position: 'bottom',
      maxHeight: 384,
      width: 'auto',
      shadow: 'md'
    }
  }
}
