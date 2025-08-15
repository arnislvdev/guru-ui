import * as React from 'react'
import { cn } from '../utils/cn'
import { ButtonCore, type ButtonCoreOptions } from '../core/ButtonCore'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'xl'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonCoreOptions & {
  asChild?: boolean
  variant?: Variant
  size?: Size
  /**
   * When true (or when no text content is provided), the button renders as a
   * square icon button with perfectly centered content. Useful for icon-only
   * actions like close, back, etc.
   */
  iconOnly?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      asChild = false,
      variant = 'primary',
      size = 'md',
      iconOnly = false,
      children,
      ...props
    },
    ref
  ) => {
    // Use ButtonCore for accessibility
    const accessibilityProps = ButtonCore.getAccessibilityProps({ variant, size })
    
    const base = 'inline-flex items-center justify-center rounded-[var(--guru-radius,0.5rem)] font-medium transition-colors animate-[none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--guru-accent,#1e90ff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--guru-background,#121212)] disabled:opacity-60 disabled:cursor-not-allowed'
    const textSizes: Record<Size, string> = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3 text-lg'
    }
    // Square sizing for icon-only usage to guarantee perfect centering and equal sides
    const iconSizes: Record<Size, string> = {
      sm: 'w-8 h-8 p-0 text-xs',
      md: 'w-9 h-9 p-0 text-sm',
      lg: 'w-10 h-10 p-0 text-base',
      xl: 'w-11 h-11 p-0 text-lg'
    }
    const variants: Record<Variant, string> = {
      primary: 'bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-on-accent,#0b0b0b)] hover:bg-[color:var(--guru-accent-hover,#e5e5e5)]',
      secondary: 'bg-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/20',
      ghost: 'bg-transparent text-[color:var(--guru-body,#b3b3b3)] hover:bg-white/10',
      outline: 'border border-[color:var(--guru-accent,#ffffff)]/20 text-[color:var(--guru-accent,#ffffff)] hover:bg-[color:var(--guru-accent,#ffffff)]/10',
      danger: 'bg-red-600 text-white hover:bg-red-700'
    }
    // If there is no textual content, treat as icon-only automatically
    const hasText = React.Children.toArray(children).some(
      (child) => typeof child === 'string' || typeof child === 'number'
    )
    const effectiveIconOnly = iconOnly || !hasText

    const merged = cn(
      base,
      effectiveIconOnly ? iconSizes[size] : textSizes[size],
      variants[variant],
      className
    )

    if (asChild) {
      // In case of composition with other elements
      return (
        <button ref={ref} className={merged} {...accessibilityProps} {...props}>
          {children}
        </button>
      )
    }

    return (
      <button ref={ref} className={merged} {...accessibilityProps} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'


