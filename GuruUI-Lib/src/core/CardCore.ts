export interface CardCoreOptions {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  border?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
}

export class CardCore {
  static getClasses(options: CardCoreOptions): string {
    const baseClasses = [
      'bg-[color:var(--arnis-background,#121212)] border border-[color:var(--arnis-body,#b3b3b3)]/10'
    ]

    // Padding classes
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6'
    }

    // Shadow classes
    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg'
    }

    // Border classes
    const borderClasses = options.border ? 'border-[color:var(--arnis-body,#b3b3b3)]/20' : 'border-[color:var(--arnis-body,#b3b3b3)]/10'

    // Rounded classes
    const roundedClasses = {
      none: '',
      sm: 'rounded',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl'
    }

    // Hover classes
    const hoverClasses = options.hover ? 'hover:border-[color:var(--arnis-accent,#ffffff)]/30 hover:shadow-lg transition-all duration-200' : ''

    return [
      ...baseClasses,
      paddingClasses[options.padding || 'md'],
      shadowClasses[options.shadow || 'md'],
      borderClasses,
      roundedClasses[options.rounded || 'lg'],
      hoverClasses
    ].join(' ')
  }

  static getDefaultOptions(): CardCoreOptions {
    return {
      padding: 'md',
      shadow: 'md',
      border: false,
      rounded: 'lg',
      hover: false
    }
  }
}
