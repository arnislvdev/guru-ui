export interface ModalCoreOptions {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  centered?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  backdrop?: boolean
  animation?: 'fade' | 'slide' | 'scale' | 'none'
}

export class ModalCore {
  static getClasses(options: ModalCoreOptions): string {
    const baseClasses = [
      'fixed inset-0 z-50 flex items-center justify-center p-4'
    ]

    // Size classes
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full m-4'
    }

    // Centered classes
    const centeredClasses = options.centered ? 'items-center justify-center' : ''

    return [
      ...baseClasses,
      sizeClasses[options.size || 'md'],
      centeredClasses
    ].join(' ')
  }

  static getBackdropClasses(options: ModalCoreOptions): string {
    const baseClasses = [
      'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200'
    ]

    const animationClasses = {
      fade: 'animate-fade-in',
      slide: 'animate-slide-in',
      scale: 'animate-scale-in',
      none: ''
    }

    return [
      ...baseClasses,
      animationClasses[options.animation || 'fade']
    ].join(' ')
  }

  static getContentClasses(options: ModalCoreOptions): string {
    const baseClasses = [
      'relative bg-[color:var(--arnis-background,#121212)] border border-[color:var(--arnis-body,#b3b3b3)]/10 rounded-lg shadow-2xl transition-all duration-200'
    ]

    const animationClasses = {
      fade: 'animate-fade-in-up',
      slide: 'animate-slide-in-up',
      scale: 'animate-scale-in',
      none: ''
    }

    return [
      ...baseClasses,
      animationClasses[options.animation || 'fade']
    ].join(' ')
  }

  static getHeaderClasses(): string {
    return 'flex items-center justify-between p-4 border-b border-[color:var(--arnis-body,#b3b3b3)]/10'
  }

  static getBodyClasses(): string {
    return 'p-4'
  }

  static getFooterClasses(): string {
    return 'flex items-center justify-end gap-2 p-4 border-t border-[color:var(--arnis-body,#b3b3b3)]/10'
  }

  static getCloseButtonClasses(): string {
    return 'p-1 rounded-md hover:bg-[color:var(--arnis-body,#b3b3b3)]/10 transition-colors'
  }

  static getAccessibilityProps(options: ModalCoreOptions) {
    return {
      role: 'dialog',
      'aria-modal': true,
      'aria-labelledby': 'modal-title',
      'aria-describedby': 'modal-description'
    }
  }

  static getDefaultOptions(): ModalCoreOptions {
    return {
      size: 'md',
      centered: true,
      closeOnOverlayClick: true,
      closeOnEscape: true,
      showCloseButton: true,
      backdrop: true,
      animation: 'fade'
    }
  }
}
