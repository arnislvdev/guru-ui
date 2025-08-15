export interface AvatarCoreOptions {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  shape?: 'circle' | 'square' | 'rounded'
  status?: 'online' | 'offline' | 'away' | 'busy'
  ring?: boolean
  ringColor?: 'accent' | 'success' | 'warning' | 'danger'
}

export class AvatarCore {
  static getClasses(options: AvatarCoreOptions): string {
    const baseClasses = [
      'relative inline-block bg-[color:var(--arnis-body,#b3b3b3)]/10 text-[color:var(--arnis-heading,#ffffff)] font-medium'
    ]

    // Size classes
    const sizeClasses = {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-16 h-16 text-lg',
      '2xl': 'w-20 h-20 text-xl'
    }

    // Shape classes
    const shapeClasses = {
      circle: 'rounded-full',
      square: 'rounded',
      rounded: 'rounded-lg'
    }

    // Ring classes
    const ringClasses = options.ring ? this.getRingClasses(options.ringColor) : ''

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      shapeClasses[options.shape || 'circle'],
      ringClasses
    ].join(' ')
  }

  static getRingClasses(ringColor?: string): string {
    const baseRingClasses = 'ring-2 ring-offset-2 ring-offset-[color:var(--arnis-background,#121212)]'

    const colorClasses = {
      accent: 'ring-[color:var(--arnis-accent,#ffffff)]',
      success: 'ring-green-500',
      warning: 'ring-yellow-500',
      danger: 'ring-red-500'
    }

    return [
      baseRingClasses,
      colorClasses[ringColor || 'accent']
    ].join(' ')
  }

  static getImageClasses(options: AvatarCoreOptions): string {
    const baseClasses = [
      'w-full h-full object-cover'
    ]

    const shapeClasses = {
      circle: 'rounded-full',
      square: 'rounded',
      rounded: 'rounded-lg'
    }

    return [
      ...baseClasses,
      shapeClasses[options.shape || 'circle']
    ].join(' ')
  }

  static getFallbackClasses(options: AvatarCoreOptions): string {
    const baseClasses = [
      'flex items-center justify-center w-full h-full'
    ]

    const shapeClasses = {
      circle: 'rounded-full',
      square: 'rounded',
      rounded: 'rounded-lg'
    }

    return [
      ...baseClasses,
      shapeClasses[options.shape || 'circle']
    ].join(' ')
  }

  static getStatusClasses(options: AvatarCoreOptions): string {
    const baseClasses = [
      'absolute bottom-0 right-0 block rounded-full ring-2 ring-[color:var(--arnis-background,#121212)]'
    ]

    const sizeClasses = {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
      '2xl': 'w-5 h-5'
    }

    const statusClasses = {
      online: 'bg-green-400',
      offline: 'bg-gray-400',
      away: 'bg-yellow-400',
      busy: 'bg-red-400'
    }

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      statusClasses[options.status || 'online']
    ].join(' ')
  }

  static getAccessibilityProps(options: AvatarCoreOptions) {
    return {
      role: 'img',
      'aria-label': 'User avatar'
    }
  }

  static getDefaultOptions(): AvatarCoreOptions {
    return {
      size: 'md',
      shape: 'circle',
      status: 'online',
      ring: false,
      ringColor: 'accent'
    }
  }
}
